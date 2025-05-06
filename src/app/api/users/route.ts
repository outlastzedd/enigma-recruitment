// src/app/api/users/route.ts
import {NextResponse} from 'next/server';
import {PrismaClient} from '@prisma/client';
import jwt from jsonwebtoken;

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined');
}

const prisma = new PrismaClient();

export async function GET(request: Request) {
    try {
        const authHeader = request.headers.get('Authorization');
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return NextResponse.json(
                {error: 'Authorization header is missing or invalid.'},
                {status: 401}
            );
        }
        const token = authHeader.split(' ')[1];
        let decodedToken;
        try {
            decodedToken = jwt.verify(token, JWT_SECRET);
        } catch (err) {
            return NextResponse.json(
                {error: 'Invalid token.'},
                {status: 401}
            );
        }
        const users = await prisma.user.findMany({
            select: {
                user_id: true,
                email: true,
                user_name: true,
                role: true,
                status: true,
                img_url: true,
                dob: true,
                address: true,
            },
        });

        return NextResponse.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        return NextResponse.json(
            {error: 'Internal Server Error'},
            {status: 500}
        );
    } finally {
        await prisma.$disconnect();
    }
}