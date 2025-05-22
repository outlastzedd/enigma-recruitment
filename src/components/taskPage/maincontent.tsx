import * as React from "react";
import SectionTitle from "../font/sectionTitle";
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import JobCard from "../home/JobCard";
import LogoHeader from "../logoHeader";

import {
    Box,
    Typography,
    Button,
    Chip,
    Card,
    CardContent,
    IconButton,
    useTheme,
    TextField, InputAdornment,
    Divider,
} from "@mui/material";

export const MainContent = () => {
    const theme = useTheme();
    const jobData = [1, 2, 3, 4];

    const popularJobs = [
        "Digital Marketer",
        "Software Developer",
        "Tour Guide",
        "English Teacher",
        "Hotel Receptionist",
    ];

    return (
        <Box component="main" sx={{
            flexGrow: 1,
            p: { xs: 0.5, sm: 3 },
            width: '100vh',
            ml: 0.5,
            '@media (max-width: 991px)': {
                maxWidth: '100%',
            },
        }}>
            <Box sx={{ display: { lg: 'none', sm: 'block' } }}>
                <LogoHeader />
                <Divider sx={{ mt: 1, mb: 3, width: '100%' }} />
            </Box>

            <Typography variant="h4" component="h1" gutterBottom color="#101828">
                Dashboard
            </Typography>

            {/* Search and Filter */}
            <Box sx={{
                display: 'flex', gap: 2, p: 3, mb: 3, mt: 3, maxWidth: '100%', mx: 'auto', alignItems: 'center', color: '#98A2B3',
                '@media (max-width: 991px)': {
                    maxWidth: '100%',
                    flexDirection: 'column',
                    mb: -2
                },
            }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Job positions/ Company name"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: '#98A2B3', backgroundColor: '#F9FAFB' }} />
                            </InputAdornment>
                        ),
                    }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            fontSize: 20,
                            height: '64px',
                            '& fieldset': { borderColor: '#98A2B3' },
                            '&:hover fieldset': { borderColor: '#98A2B3' },
                            '&.Mui-focused fieldset': { borderColor: '#98A2B3' },
                        },
                        '& input': { color: '#98A2B3', fontSize: '20px' },
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    }}
                />
                <Box
                    sx={{
                        width: '40%',
                        display: 'flex',
                        height: '64px', // Đặt chiều cao bằng với TextField
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 2,
                        border: '1px solid #e0e0e0', // Thêm viền để khớp với TextField
                        borderRadius: 2, // Bo góc tương tự TextField
                        px: 2, // Thêm padding ngang để nút không sát viền
                        '@media (max-width: 991px)': {
                            width: '100%',
                        },

                    }}
                >
                    <Button
                        variant="outlined"
                        startIcon={<Image src="/sliderIcon.svg" alt="filter" width={24} height={24} />}
                        sx={{
                            borderRadius: 2,
                            height: '48px', // Tăng chiều cao nút để cân đối trong Box
                            textTransform: 'none',
                            fontSize: '16px',
                            width: '100%',
                            fontWeight: '600',
                            borderColor: '#98A2B3',
                            color: '#98A2B3',
                            '&:hover': {
                                borderColor: '#2494B6',
                                color: '#FDFDFD',
                                backgroundColor: '#2494B6', // Hiệu ứng hover
                                '& .MuiButton-startIcon img': {
                                    filter: 'brightness(0) invert(1)',
                                },
                            },
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={
                            <Image src="/arrow.svg" alt="sort" width={24} height={24} />
                        }
                        sx={{
                            borderRadius: 2,
                            height: '48px', // Tăng chiều cao nút để cân đối trong Box
                            textTransform: 'none',
                            fontSize: '16px',
                            width: '100%',
                            fontWeight: 600,
                            borderColor: '#98A2B3',
                            color: '#98A2B3',
                            '&:hover ': {
                                borderColor: '#2494B6',
                                color: '#FDFDFD',
                                backgroundColor: '#2494B6', // Hiệu ứng hover
                                '& .MuiButton-startIcon img': {
                                    filter: 'brightness(0) invert(1)',
                                },
                            },
                        }}
                    >
                        Sort by
                    </Button>
                </Box>
            </Box>

            {/* Popular Jobs */}
            <Box sx={{
                mb: 2.5, display: 'flex', gap: 2,
                '@media (max-width: 991px)': {
                    width: '100%',
                    flexDirection: 'column',
                    p: 2.5,
                    mb: 2
                },

            }}>
                <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>
                    Popular Jobs:
                </Typography>
                <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
                    {popularJobs.map((job, index) => (
                        <Chip
                            key={index}
                            label={job}
                            variant="outlined"
                            clickable
                            sx={{
                                color: '#667085',
                                borderColor: '#2494B6',
                                '&:hover': {
                                    backgroundColor: '#2494B620' // 20% opacity
                                }
                            }} />
                    ))}
                </Box>
            </Box>

            <Box sx={{
                display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: 4, width: '100%'
            }}>
                {/* Left Column */}
                <Box sx={{
                    width: '100%',
                    '@media (max-width: 991px)': {
                        width: '100%',
                        pr: 2
                    },
                }}>
                    {/* Step Section */}
                    <SectionTitle title="Step Into Your Future" showOptions />

                    <Box sx={{
                        display: 'flex', gap: 2, mt: 2, mb: 3, justifyContent: 'space-between',
                        '@media (max-width: 991px)': {
                            flexDirection: 'column',
                        },
                    }}>
                        < Button
                            variant="outlined"
                            sx={{
                                flexDirection: 'row', gap: 2, alignItems: 'center',
                                justifyContent: 'flex-start', width: '100%', height: 88, borderRadius: 2,
                                borderColor: '#D0D5DD', color: '#475467', textTransform: 'none',
                                '&:hover': { borderColor: '#98A2B3', bgcolor: 'rgba(33, 150, 243, 0.1)' }
                            }}
                        >
                            <Box sx={{ p: 1.5, backgroundColor: '#D6F1F7', borderRadius: 2, height: 48 }}><Image src="/folder.svg" alt="upload" width={24} height={24} /></Box>
                            <Box sx={{ justifyItems: 'flex-start' }}>
                                <Typography variant="h6" sx={{ fontWeight: 600 }}>Upload CV</Typography>
                                <Typography variant="body2" sx={{ textAlign: 'center' }}>Stand out with your expertise</Typography>
                            </Box>
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{
                                flexDirection: 'row', gap: 2, alignItems: 'center',
                                justifyContent: 'flex-start', width: '100%', height: 88, borderRadius: 2,
                                borderColor: '#D0D5DD', color: '#475467', textTransform: 'none',
                                '&:hover': { borderColor: '#98A2B3', bgcolor: 'rgba(33, 150, 243, 0.1)' }
                            }}
                        >
                            <Box sx={{ p: 1.5, m: 1, backgroundColor: '#D6F1F7', borderRadius: 2, height: 48 }}>
                                <Image src="/create.svg" alt="profile" width={24} height={24} /></Box>
                            <Box sx={{ justifyItems: 'flex-start' }}>
                                <Typography variant="h6" sx={{ fontWeight: 600 }}>Create Your Profile</Typography>
                                <Typography variant="body2" sx={{ textAlign: 'center' }}>Attract premium employers instantly</Typography>
                            </Box>
                        </Button>
                    </Box>

                    {/* Trending Jobs */}
                    <SectionTitle title="Trending Jobs This Week" showOptions1 showOptions />

                    <Box sx={{ mt: 2 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            {Array.from({ length: Math.ceil(jobData.length / 2) }, (_, rowIndex) => (
                                <Box
                                    key={rowIndex}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: { xs: 'column', sm: 'row' }, // Stack on mobile, row on larger screens
                                        gap: 3,
                                    }}
                                >
                                    {jobData.slice(rowIndex * 1, rowIndex * 3 + 3).map((job) => (
                                        <JobCard key={job} />
                                    ))}
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box >
        </Box >
    );
};

const FeatureCard = ({
    icon,
    title,
    subtitle,
}: {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
}) => (
    <Box sx={{ mb: 2, width: "100% " }}>
        <Card>
            <CardContent sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <IconButton sx={{ bgcolor: "#D6F1F7", color: "primary.main" }}>
                    {icon}
                </IconButton>
                <Box>
                    <Typography variant="h6">{title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {subtitle}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    </Box>
);
