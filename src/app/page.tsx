'use client';
import React from 'react';
import {useState, useEffect} from 'react';
import HomePage from 'enigma/components/home/homePage';
import {jwtDecode} from 'jwt-decode';
import Link from 'next/link';
import LogoutButton from "enigma/components/LogoutButton";

export default function Home() {
    const [isClient, setIsClient] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        setIsClient(true);
        // Read token from cookies
        const match = document.cookie.match(/(?:^|; )token=([^;]*)/);
        const token = match ? decodeURIComponent(match[1]) : null;

        if (token) {
            try {
                // Decode JWT (do not verify on client)
                const decoded: { username?: string } = jwtDecode(token);
                setUsername(decoded.username || '');
            } catch {
                setUsername('');
            }
        }
    }, []);

    if (!isClient) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <h1>Logged in as: {username || "Unknown"}</h1>
            {username && <LogoutButton/>}
            <HomePage/>
        </>
    );
}