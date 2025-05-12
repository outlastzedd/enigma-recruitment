import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined');
}
const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const {email, password, user_name} = await request.json();

        if (!email || !password || password.trim() === ''  || !user_name) {
            return NextResponse.json(
                { error: 'Email, password and user name are required.' },
                { status: 400 }
            );
        }

        const isUserExisted = await prisma.user.findFirst({
            where: { email: email },
        });
        if (isUserExisted) {
            return NextResponse.json(
                { error: 'User already exists, please log in instead.' },
                { status: 409 }
            );
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await prisma.user.create({
            data: {
                email: email,
                password: hashedPassword,
                name: user_name
            },
        });

        // JWT Token signature
        const token = jwt.sign(
            {userid: newUser.id, email: newUser.email, username: newUser.name},
            JWT_SECRET,
            { expiresIn: '1h' }
        );
        // Remove sensitive info before returning
        const { password: _, ...userData } = newUser;
        return NextResponse.json({...userData, token});
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal server error.' },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}