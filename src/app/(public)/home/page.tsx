'use server';
import React from 'react';
import HomePage from 'enigma/components/home/homePage';
import Link from 'next/link';
import LogoutButton from "enigma/components/login/LogoutButton";
import {auth} from "enigma/auth";

export default async function Home() {
    const session = await auth();
    console.log("Home page - Session: " + session);
    return (
        <>
            {/*<h1>Logged in as: {session?.user?.name || "Unknown"}</h1>*/}
            {/*session?.user?.name && <LogoutButton/>*/}
            <HomePage session={session}/>
        </>
    );
}