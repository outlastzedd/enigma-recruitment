"use client";
import React, {useState} from 'react';
import LogoHeader from "../logoHeader"
import { useRouter } from 'next/navigation';
import {
    Box,
    Typography,
    Button,
    TextField,
    Container,
    styled,
} from '@mui/material';
import {register} from "@/services/userServices";

const PrimaryButton = styled(Button)({
    backgroundColor: '#2494B6',
    borderRadius: '8px',
    border: '2px solid rgba(255, 255, 255, 0.12)',
    boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
    padding: '10px 16px',
    width: '100%',
    color: '#FFF',
    textTransform: 'none',
    fontSize: '16px',
    fontWeight: 600,
    '&:hover': {
        backgroundColor: '#1c7a94',
    },
});

const GoogleButton = styled(Button)({
    backgroundColor: '#FFF',
    border: '1px solid #D0D5DD',
    borderRadius: '8px',
    boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
    padding: '10px 16px',
    width: '100%',
    color: '#344054',
    textTransform: 'none',
    fontSize: '16px',
    fontWeight: 600,
    gap: '12px',
    '&:hover': {
        backgroundColor: '#f8f9fa',
    },
});

export const SignUpForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            await register({email, password, user_name: username} as any);
            router.push('/login');
        } catch (err: any) {
            setError("Registration failed: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            component="section"
            sx={{
                minWidth: { xs: '100%', md: '480px' },
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                position: 'relative',
                fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
            }}
        >
            <LogoHeader />
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                    py: 5,
                    px: { xs: 3, md: 4 },
                }}
            >
                <Box sx={{ maxWidth: '360px', width: '100%' }}>
                    <Typography
                        variant="h1"
                        sx={{
                            color: '#101828',
                            fontSize: '36px',
                            fontWeight: 600,
                            lineHeight: '44px',
                            letterSpacing: '-0.72px',
                        }}
                    >
                        Sign up
                    </Typography>

                    <Box sx={{ mt: 4, width: '100%' }}>
                        <Box component="form" sx={{ width: '100%', gap: 2.5, display: 'flex', flexDirection: 'column' }}>
                            <TextField
                                fullWidth
                                label="Name"
                                placeholder="Enter your name"
                                variant="outlined"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <TextField
                                fullWidth
                                label="Email"
                                placeholder="Enter your email"
                                variant="outlined"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#D0D5DD',
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: '#344054',
                                        fontSize: '14px',
                                        fontWeight: 500,
                                    },
                                }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <Box sx={{ width: '100%' }}>
                                <TextField
                                    fullWidth
                                    label="Password"
                                    placeholder="Create a password"
                                    type="password"
                                    variant="outlined"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <Typography
                                    variant="caption"
                                    sx={{
                                        color: '#475467',
                                        display: 'block',
                                        mt: 0.75,
                                    }}
                                >
                                    Must be at least 8 characters.
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <PrimaryButton variant="contained" onClick={handleSubmit} disabled={loading}>
                                Get started
                            </PrimaryButton>
                            <GoogleButton
                                variant="outlined"
                                startIcon={<img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a41ff4463df85b4add89eb89c936d7f3a16142da?placeholderIfAbsent=true&apiKey=8ef08a3c60b44d4ba008c3e63d84c943" alt="Google logo" style={{ width: 24, height: 24 }} />}
                            >
                                Sign up with Google
                            </GoogleButton>
                        </Box>

                        <Box
                            sx={{
                                mt: 4,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 0.5,
                            }}
                        >
                            <Typography
                                sx={{
                                    color: '#475467',
                                    fontSize: '14px',
                                    lineHeight: '20px',
                                }}
                            >
                                Already have an account?
                            </Typography>
                            <Button
                                href="/login"
                                sx={{
                                    color: '#2494B6',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    p: 0,
                                    minWidth: 'auto',
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                Log in
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Container>

            <Box
                component="footer"
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '120px',
                }}
            >
                <Typography
                    sx={{
                        color: '#475467',
                        fontSize: '14px',
                        position: 'absolute',
                        left: '20px',
                        bottom: '30px',
                    }}
                >
                    © Untitled UI 2077
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        position: 'absolute',
                        right: '20px',
                        bottom: '30px',
                    }}
                >
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/be78fa20679878760d04b59e9cf722db6d7941a1?placeholderIfAbsent=true&apiKey=8ef08a3c60b44d4ba008c3e63d84c943" alt="Email icon" style={{ width: 16, height: 16 }} />
                    <Typography
                        sx={{
                            color: '#475467',
                            fontSize: '14px',
                        }}
                    >
                        help@enigma.com
                    </Typography>
                </Box>

                <Box
                    component="img"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ccd12f30e766451fd873e5c7a699d0b7a2dc435?placeholderIfAbsent=true&apiKey=8ef08a3c60b44d4ba008c3e63d84c943"
                    alt="Footer decoration"
                    sx={{
                        position: 'absolute',
                        right: '-67px',
                        bottom: '93px',
                        width: '287px',
                        height: '257px',
                        zIndex: '999',
                        '@media (max-width: 991px)': { // Sử dụng max-width thay vì maxWidth
                            display: 'none',
                        },
                    }}
                />

                <Box
                    sx={{
                        position: 'absolute',
                        left: '32px',
                        top: '32px',
                        width: '135px',
                        height: '28px',
                    }}
                />
            </Box>
        </Box>
    );
};