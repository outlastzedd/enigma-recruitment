import React from 'react';
import LoginPage from '@/components/login/loginPage';
import SignUpPage from '@/components/signUp/signUpPage';
// import HomePage from '@/component/home/homePage'
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import LogoutButton from '@/components/LogoutButton';
import Link from 'next/link';

const JWT_SECRET = process.env.JWT_SECRET!;

export default async function Home() {
    let username = '';
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get('token')?.value;
        if (token) {
            const decoded: any = jwt.verify(token, JWT_SECRET);
            username = decoded.username;
        }
    } catch {
        username = '';
    }
    return (
        <div>
            <h1>Landing page</h1>
            <h3>Logged in as: {username || "Unknown"}</h3>
            {username && <LogoutButton />}
            <br/>
            <Link href="/login">Login</Link>
            <br/>
            <Link href="/register">Register</Link>
            <br/>
            <Link href="/admin/users">Home</Link>
        </div>
    );
}