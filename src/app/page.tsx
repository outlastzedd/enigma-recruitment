'use server';
import React from 'react';
import HomePage from 'enigma/components/home/homePage';
import Link from 'next/link';
import LogoutButton from "enigma/components/LogoutButton";
import {auth} from "enigma/auth";

export default async function Home() {
    const session = await auth();
    console.log(session);
    // useEffect(() => {
    //     setIsClient(true);
    //     // Read token from cookies
    //     // const match = document.cookie.match(/(?:^|; )token=([^;]*)/);
    //     const match = document.cookie.match(/authjs.session-token/);
    //     const token = match ? decodeURIComponent(match[1]) : null;
    //
    //     if (token) {
    //         try {
    //             // Decode JWT (do not verify on client)
    //             const decoded: { name?: string } = jwtDecode(token);
    //             setName(decoded.name || '');
    //         } catch {
    //             setName('');
    //         }
    //     }
    // }, []);

    // if (!isClient) {
    //     return <div>Loading...</div>;
    // }
    return (
        <>
            <h1>Logged in as: {session?.user?.name || "Unknown"}</h1>
            {session?.user?.name && <LogoutButton/>}
            <HomePage/>
        </>
    );
}