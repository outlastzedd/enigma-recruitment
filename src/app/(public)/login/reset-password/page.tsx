'use client';

import React, { useState } from 'react';
import { resetPass } from 'enigma/services/userServices';
import styles from './ResetPasswordPage.module.css';
import Link from 'next/link';

export default function ResetPasswordPage() {
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);
        setLoading(true);
        try {
            await resetPass(email, oldPassword, newPassword);
            setSuccess('Password reset successful. You can now log in with your new password.');
            setEmail('');
            setOldPassword('');
            setNewPassword('');
        } catch (err: any) {
            setError(err.message || 'Failed to reset password');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Reset Password</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Email</label>
                    <input
                        className={styles.input}
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Old Password</label>
                    <input
                        className={styles.input}
                        type="password"
                        value={oldPassword}
                        onChange={e => setOldPassword(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>New Password</label>
                    <input
                        className={styles.input}
                        type="password"
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <div className={styles.error}>{error}</div>}
                {success && <div className={styles.success}>{success}</div>}
                <button className={styles.button} type="submit" disabled={loading}>
                    {loading ? 'Resetting...' : 'Reset Password'}
                </button>
            </form>
            <div style={{ marginTop: 20, textAlign: 'center' }}>
                <Link href="/login">Back to Login</Link>
                {' | '}
                <Link href="/">Home</Link>
            </div>
        </div>
    );
}