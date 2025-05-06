"use client";
import * as React from "react";
import SuggestedJobCard from "../suggestJobCard";
import {
    Box,
    Typography,
    Paper,
    InputBase,
    Button,
    Chip,
    Card,
    CardMedia,
    CardContent,
    IconButton,
    useTheme,
} from "@mui/material";
import {
    Search,
    FilterList,
    Sort,
    Bookmark,
    CloudUpload,
    Person,
} from "@mui/icons-material";

export const MainContent = () => {
    const theme = useTheme();

    const popularJobs = [
        "Digital Marketer",
        "Software Developer",
        "Tour Guide",
        "English Teacher",
        "Hotel Receptionist",
    ];

    return (
        <Box component="main" sx={{ flexGrow: 1, p: { xs: 2, sm: 4 } }}>
            <Typography variant="h4" component="h1" gutterBottom color="#101828">
                Dashboard
            </Typography>

            {/* Search and Filter */}
            <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
                <Paper
                    sx={{
                        p: 1.5,
                        display: "flex",
                        alignItems: "center",
                        flex: 1,
                        bgcolor: "grey.50",
                        borderRadius: 2,
                    }}
                >
                    <Search sx={{ mr: 1 }} />
                    <InputBase
                        placeholder="Job positions / Company name"
                        fullWidth
                    />
                </Paper>

                <Box sx={{ display: "flex", gap: 1 }}>
                    <Button startIcon={<FilterList />} variant="contained">
                        Filter
                    </Button>

                    <Button startIcon={<Sort />} variant="contained">
                        Sort by
                    </Button>
                </Box>
            </Box>

            {/* Popular Jobs */}
            <Box sx={{ mb: 4, display: 'flex', gap: 2 }}>
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

            <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: 3 }}>
                {/* Left Column */}
                <Box sx={{ flex: 1 }}>
                    {/* Step Section */}
                    <Paper sx={{ p: 3, mb: 4 }}>
                        <Typography variant="h5" gutterBottom>
                            Step Into Your Future
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2 }}>
                            <FeatureCard
                                icon={<CloudUpload />}
                                title="Upload CV"
                                subtitle="Stand out with your expertise"
                            />
                            <FeatureCard
                                icon={<Person />}
                                title="Create Your Profile"
                                subtitle="Attract premium employers instantly"
                            />
                        </Box>
                    </Paper>

                    {/* Trending Jobs */}
                    <Typography variant="h5" gutterBottom>
                        Trending Jobs This Week
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                        {[1, 2, 3, 4].map((job) => (
                            <Box key={job} sx={{ flex: "1 1 45%" }}>
                                <JobCard />
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Right Column */}
                <Box sx={{ width: { xs: "100%", lg: "30%" } }}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            Suggested
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                            {[1, 2, 3, 4, 5].map((job) => (
                                <SuggestedJobCard />
                            ))}
                        </Box>
                    </Paper>
                </Box>

            </Box>
        </Box>
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
    <Box sx={{ mb: 2, width: "100%" }}>
        <Card>
            <CardContent sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <IconButton sx={{ bgcolor: "primary.light", color: "primary.main" }}>
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


// Component: Job Card
const JobCard = () => (
    <Card>
        <CardMedia
            component="img"
            height="140"
            image="https://cdn.builder.io/api/v1/image/assets/8ef08a3c60b44d4ba008c3e63d84c943/e0f19983d1fc96223a6c8b683cd1f6149e05cb54?placeholderIfAbsent=true"
            alt="Job thumbnail"
        />
        <CardContent>
            <Typography color="primary" variant="subtitle2">
                Thai Digital Solutions • 20 Jan 2025
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Digital Marketing Manager
                </Typography>
                <IconButton size="small">
                    <Bookmark />
                </IconButton>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Lead digital marketing strategies for a growing e-commerce platform.
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mt: 2, flexWrap: "wrap" }}>
                <Chip label="Marketing" size="small" />
                <Chip label="DigitalStrategy" size="small" />
                <Chip label="1,500 USD" size="small" />
            </Box>
        </CardContent>
    </Card>
);


