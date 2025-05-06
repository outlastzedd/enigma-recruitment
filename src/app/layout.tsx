// src/app/layout.tsx
import { ReactNode } from 'react';
import '@/styles/globals.css'; // Đường dẫn trỏ tới src/styles/globals.css

export const metadata = {
  title: 'Enigma Recruiting',
  description: 'A recruiting platform built with Next.js',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}