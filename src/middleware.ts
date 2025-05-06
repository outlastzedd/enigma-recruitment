// src/middleware.ts - Protect routes from unauthorized access
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/admin')) {
        const authHeader = request.headers.get('authorization');
        const token = authHeader?.split(' ')[1] || request.cookies.get('token')?.value;
        if (!token || !JWT_SECRET) {
            return NextResponse.redirect(new URL('/forbidden', request.url));
        }
        try {
            const decoded: any = jwt.verify(token, JWT_SECRET);
            if (decoded.role !== 'admin' || !decoded) {
                return NextResponse.json({error: 'Forbidden'}, {status: 403});
            }
        } catch {
            return NextResponse.redirect(new URL('/forbidden', request.url));
        }
    }
    return NextResponse.next();
}