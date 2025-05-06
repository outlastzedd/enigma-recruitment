'use client';
import React from 'react';
import { useState, useEffect } from 'react'
import { LoginPage } from '../../../../src/component/login/loginPage';
import { SignUpPage } from '../../../../src/component/signUp/signUpPage';
import HomePage from '../../../../src/component/home/homePage'

export default function Home() {
  const [isClient, setIsClient] = useState(false)
  const [isLogin, setIsLogin] = useState(true); // true = login, false = sign up

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    // <SignUpPage />
    <HomePage />
    // <LoginPage />
  );
}
