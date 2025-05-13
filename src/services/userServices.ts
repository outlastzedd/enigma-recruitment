// src/services/userServices.ts
"use server";

import { User } from 'enigma/types/models';
import Cookies from 'js-cookie'
import {RegisterSchema, LoginSchema} from "enigma/schemas";
import bcrypt from "bcryptjs";
import {prisma} from "../../prisma/prisma";
import * as z from "zod";
import {signIn} from "enigma/auth";
import {AuthError} from "next-auth";
import {auth} from "enigma/auth";

export async function getUsers(): Promise<User[]> {
    const token = Cookies.get('token');
    const response = await fetch('/api/users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error('Failed to fetch users: ' + data.error);
    }

    return data;
}

export async function getUser(userid: number): Promise<User> {
    const token = Cookies.get('token');
    const response = await fetch(`/api/users/${userid}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error('Failed to fetch users: ' + data.error);
    }

    return data;
}

export const login = async (data: z.infer<typeof LoginSchema>) => {
    // Validate the data using the LoginSchema
    const validatedData = LoginSchema.parse(data);
    if (!validatedData) {
        console.error("Invalid data");
        return {error: "Invalid data"};
    }
    // Destructure the validated data
    const {email, password} = validatedData;
    // Check if the user exists
    const existingUser = await prisma.user.findFirst({
        where: {email: email.toLowerCase()}
    });
    if (!existingUser || !existingUser.password || !existingUser.email) {
        console.error("User not found");
        return {error: "User not found"};
    }
    // Attempt to sign in using signIn() from Auth.js
    try {
        await signIn('credentials', {
            email: existingUser.email,
            password: password,
            redirectTo: '/'
        });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    console.error("Invalid credentials");
                    return {error: "Invalid credentials"};
                default:
                    console.error("An unknown error occurred during sign-in");
                    return {error: "An unknown error occurred"};
            }
        }
    }
    return {success: "User logged in successfully"};
}

export async function loginGoogle() {
    try {
        await signIn('google', { redirectTo: '/'});
        return undefined;
    } catch (error) {
        if (error instanceof AuthError) {
            console.error("Google login failed: ", error);
            return 'Google logged in failed: ' + error;
        }
        throw error;
    }
}

export async function resetPass(email: string, oldPassword: string, newPassword: string) {
    const response = await fetch('/api/login/reset-password', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ email, oldPassword, newPassword })
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error('Failed to reset password: ' + data.error || "Reset failed");
    }

    return data;
}

export async function createPass(email: string, password: string) {
    const response = await fetch('/api/login/create-password', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error('Failed to create password: ' + data.error || "Create failed");
    }

    return data;
}

export const register = async (data: z.infer<typeof RegisterSchema>) => {
    try {
        // Validate the data using the RegisterSchema
        const validatedData = RegisterSchema.parse(data);
        if (!validatedData) {
            return {error: "Invalid data"};
        }
        // Destructure the validated data
        const {email, password, name} = validatedData;
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Check if the user already exists
        const existingUser = await prisma.user.findFirst({
            where: {email: email},
        });
        if (existingUser) {
            return {error: "User already exists"};
        }
        // Create the user
        const user = await prisma.user.create({
            data: {
                email: email.toLowerCase(),
                password: hashedPassword,
                name: name,
            },
        });

        return {success: "User created successfully", user: user};
    } catch (error) {
        console.error("Error during registration: ", error);
        return {error: "An error occurred during registration"};
    }
}

export async function logout() {
    Cookies.remove('token');

}