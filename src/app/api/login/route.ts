// src/app/api/login/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined');
}
const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const {email, password} = await request.json();

        if (!email || !password || password.trim() === '') {
            return NextResponse.json(
                {error: 'Email and password are required.'},
                {status: 400}
            );
        }

        const user = await prisma.user.findUnique({
            where: {email: email},
        });

        if (!user || user.status !== 'active' || !user.password) {
            return NextResponse.json(
                {error: 'Invalid email or password.'},
                {status: 401}
            );
        }

        // Check password using bcrypt
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json(
                {error: 'Invalid email or password.'},
                {status: 401}
            );
        }

        // JWT Token signature
        const token = jwt.sign(
            {userid: user.user_id, email: user.email, username: user.user_name, role: user.role},
            JWT_SECRET,
            {expiresIn: '1h'}
        );

        // Remove sensitive info before returning
        const {password: _, ...userData} = user;
        return NextResponse.json({...userData, token});
    } catch (error) {
        return NextResponse.json(
            {error: 'Internal server error.'},
            {status: 500}
        );
    } finally {
        await prisma.$disconnect();
    }
}