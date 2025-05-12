'use client';
import { logout } from 'enigma/services/userServices';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
    const router = useRouter();
    const handleLogout = () => {
        logout();
        router.refresh(); // Refresh to update UI
    };
    return <button onClick={handleLogout}>Logout</button>;
}