// JobCard.js
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { JobTitleTypography, CompanyTypography, SalaryTypography } from './font/typography'; // Import all typography components

const card = (
    <React.Fragment>
        <CardContent>
            <JobTitleTypography>
                Social Media Manager (KOL Specialist)
            </JobTitleTypography>
            <CompanyTypography sx={{ mb: 1.5 }}>
                Starfluence Global
            </CompanyTypography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Button
                    size="small"
                    startIcon={<LocationOnIcon sx={{ fontSize: 16 }} />}
                    sx={{
                        textTransform: 'none',
                        color: 'primary.main',
                        fontFamily: (theme) => theme.typography.fontFamily,
                        fontWeight: 400,
                        fontSize: (theme) => theme.typography.body2.fontSize, // text-sm (14px)
                        lineHeight: (theme) => theme.typography.body2.lineHeight, // text-sm (1.43 or 20px)
                        letterSpacing: 0,
                    }}
                >
                    Remote
                </Button>
                <SalaryTypography>
                    700 – 1,200 USD
                </SalaryTypography>
            </Box>
        </CardContent>
    </React.Fragment>
);

export default function SuggestedJobCard() {
    return (
        <Box
            sx={{
                width: 280,
                height: 114,
                borderRadius: (theme) => theme.shape.borderRadius,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: 'background.paper',
            }}
        >
            <Card
                variant="outlined"
                sx={{
                    width: '100%',
                    height: '100%',
                    borderRadius: (theme) => theme.shape.borderRadius,
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', // Smooth transition
                    '&:hover': {
                        borderColor: "#2494B6",
                        boxShadow: (theme) => theme.shadows[4], // Increase shadow for "elevation" effect
                        cursor: 'pointer', // Indicate interactivity
                    },
                }}
            >
                {card}
            </Card>
        </Box>
    );
}