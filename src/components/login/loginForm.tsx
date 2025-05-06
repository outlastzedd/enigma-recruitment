"use client";
import * as React from "react";
import LogoHeader from "../logoHeader"
import {
    Box,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    Typography,
    Stack,
    Container,
} from '@mui/material';
import {useState} from "react";
import {useRouter} from "next/navigation";
import {login} from "@/services/userServices";

export const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            await login(email, password);
            router.push('/'); // Redirect to the home page or dashboard after successful login
        } catch (err: any) {
            setError("Login failed: " + err.message);
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
                fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
                position: 'relative',
            }}
        >

            <LogoHeader />
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flex: 1,
                    py: 18,
                    px: { xs: 3, md: 4 },
                    '@media (max-width: 1025px)': {
                        py: 10,
                    },
                }}
            >
                <Box
                    sx={{
                        maxWidth: '360px',
                        width: '100%',
                    }}
                >
                    <Stack spacing={6}>
                        <Stack spacing={2}>
                            <Typography variant="h1" color="text.primary">
                                Welcome back
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Welcome back! Please enter your details.
                            </Typography>
                        </Stack>

                        <Stack spacing={3}>
                            <Stack spacing={2.5}>
                                <TextField
                                    fullWidth
                                    type="email"
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
                                <TextField
                                    fullWidth
                                    type="password"
                                    label="Password"
                                    placeholder="••••••••"
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
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Stack>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            sx={{
                                                color: '#D0D5DD',
                                                '&.Mui-checked': {
                                                    color: '#2494B6',
                                                },
                                            }}
                                        />
                                    }
                                    label={
                                        <Typography
                                            sx={{
                                                color: '#344054',
                                                fontSize: '14px',
                                                fontWeight: 500,
                                            }}
                                        >
                                            Remember for 30 days
                                        </Typography>
                                    }
                                />
                                <Button
                                    sx={{
                                        color: '#2494B6',
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        '&:hover': {
                                            background: 'none',
                                        },
                                    }}
                                    href={"/login/reset-password"}
                                >
                                    Forgot password
                                </Button>
                            </Box>

                            <Stack spacing={2}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        bgcolor: '#2494B6',
                                        py: 1.25,
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        '&:hover': {
                                            bgcolor: '#1a7a9d',
                                        },
                                    }}
                                    type="submit"
                                    onClick={handleLogin}
                                >
                                    Sign in
                                </Button>
                                <Button
                                    variant="outlined"
                                    startIcon={<Box component="img" src="https://cdn.builder.io/api/v1/image/assets/8ef08a3c60b44d4ba008c3e63d84c943/cdca95f8e3db00ee061805c429cb77b68424ae0a?placeholderIfAbsent=true" sx={{ width: 24, height: 24 }} />}
                                    sx={{
                                        color: '#344054',
                                        borderColor: '#D0D5DD',
                                        py: 1.25,
                                        fontSize: '16px',
                                        '&:hover': {
                                            borderColor: '#D0D5DD',
                                            bgcolor: '#f8f9fa',
                                        },
                                    }}
                                >
                                    Sign in with Google
                                </Button>
                            </Stack>
                        </Stack>

                        <Box
                            sx={{
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
                                }}
                            >
                                Don't have an account?
                            </Typography>
                            <Button
                                sx={{
                                    color: '#2494B6',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    minWidth: 'auto',
                                    p: 0,
                                    '&:hover': {
                                        background: 'none',
                                    },
                                }}
                                href="/register"
                            >
                                Sign up
                            </Button>
                        </Box>
                    </Stack>
                </Box>
            </Container>

            <Box
                sx={{
                    position: 'absolute',
                    left: 10,
                    bottom: 20,
                    color: '#475467',
                    fontSize: '14px',
                }}
            >
                © Enigma Recruitment 2025
            </Box>

            <Box
                sx={{
                    position: 'absolute',
                    right: 10,
                    bottom: 20,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,

                }}
            >
                <Box
                    component="img"
                    src="https://cdn.builder.io/api/v1/image/assets/8ef08a3c60b44d4ba008c3e63d84c943/be78fa20679878760d04b59e9cf722db6d7941a1?placeholderIfAbsent=true"
                    sx={{
                        width: 16,
                        height: 16,
                    }}
                />
                <Typography
                    component="a"
                    href="mailto:help@enigma.com"
                    sx={{
                        color: '#475467',
                        fontSize: '14px',
                        textDecoration: 'none',
                    }}
                >
                    help@enigma.com
                </Typography>
            </Box>

            <Box
                component="img"
                src="https://cdn.builder.io/api/v1/image/assets/8ef08a3c60b44d4ba008c3e63d84c943/8ccd12f30e766451fd873e5c7a699d0b7a2dc435?placeholderIfAbsent=true"
                sx={{
                    position: 'absolute',
                    right: -67,
                    bottom: 93,
                    width: 287,
                    height: 257,
                    zIndex: 999,
                    '@media (max-width: 991px)': { // Sử dụng max-width thay vì maxWidth
                        display: 'none',
                    },
                }}
            />


        </Box>
    );
}