// src/services/userServices.ts
import { User } from '@/types/models';
import Cookies from 'js-cookie'

export async function getUsers(): Promise<User[]> {
    const response = await fetch('/api/users', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });

    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }

    return response.json();
}

export async function getUser(userid: number): Promise<User> {
    const response = await fetch(`/api/users/${userid}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }

    return response.json();
}

export async function login(email: string, password: string) {
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (response.ok && data.token) {
        Cookies.set('token', data.token, {expires: 1}); // expires in 1 day
    } else {
        throw new Error (data.error || "Login failed");
    }

    return data;
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

export async function register(user: User) {
    const response = await fetch('/api/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    });

    if (!response.ok) {
        throw new Error('Failed to register');
    }

    return response.json();
}

export function logout() {
    Cookies.remove('token');
}