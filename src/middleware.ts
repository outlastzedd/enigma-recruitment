// src/middleware.ts - Protect routes from unauthorized access
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// //import jwt from 'jsonwebtoken';
// import {jwtVerify} from "jose";
//
// const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);
//
// export async function middleware(request: NextRequest) {
//     // Check whether the URL is going to admin, the regex will match /admin and /admin/anything to avoid false positives
//     if (/^\/admin(\/|$)/.test(request.nextUrl.pathname)) {
//         const authHeader = request.headers.get('authorization');
//         const token = authHeader?.split(' ')[1] || request.cookies.get('token')?.value;
//         if (!token) {
//             console.error('No token provided');
//             return NextResponse.redirect(new URL('/forbidden', request.url));
//         }
//         if (!JWT_SECRET) {
//             console.error('JWT_SECRET is not defined');
//             return NextResponse.json({error: 'Internal server error'}, {status: 500});
//         }
//         // Extract payload from the token and filter by role
//         try {
//             const {payload} = await jwtVerify(token, JWT_SECRET);
//             if (payload.role !== 'admin' || !payload) {
//                 console.error('Invalid token or insufficient permissions');
//                 return NextResponse.redirect(new URL('/forbidden', request.url));
//             }
//         } catch (err) {
//             console.error('Token verification failed:', err);
//             return NextResponse.redirect(new URL('/forbidden', request.url));
//         }
//     }
//     return NextResponse.next();
// }
export {auth as middleware} from "enigma/auth";