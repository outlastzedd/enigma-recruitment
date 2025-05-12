// src/app/(auth)/admin/users/route.ts
'use client';

import {useEffect, useState} from 'react';
import Link from 'next/link';
import {format} from 'date-fns';
import {getUsers} from 'enigma/services/userServices';
import {User} from 'enigma/types/models';
import styles from './Users.module.css';

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const data = await getUsers();
                setUsers(data);
            } catch (err) {
                setError('Error fetching users');
            } finally {
                setLoading(false);
            }
        }

        fetchUsers();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className={styles.container}>
            <h1>Users List</h1>
            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th>Image</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Date of Birth</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <tr key={user.user_id}>
                            <td>
                                {user.img_url ? (
                                    <img
                                        src={user.img_url}
                                        alt={user.user_name}
                                        className={styles.userImage}
                                    />
                                ) : (
                                    <div className={styles.userImage}/>
                                )}
                            </td>
                            <td>{user.user_name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>{user.status}</td>
                            <td>
                                {user.dob ? format(new Date(user.dob), 'MM/dd/yyyy') : '-'}
                            </td>
                            <td>{user.address || '-'}</td>
                            <td className={styles.actionLinks}>
                                <Link href={`/admin/users/${user.user_id}`}>View</Link>
                                <Link href={`/admin/users/${user.user_id}/edit`}>Edit</Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}