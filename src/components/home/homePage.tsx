"use client";
import * as React from "react";
import { Box, useTheme } from "@mui/material";
import { SidebarNavigation } from "./sideBarNavigation";
import { MainContent } from "./mainContent";

export default function HomePage() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginBottom: "134px",
            }}
        >

            <Box
                sx={{
                    display: 'flex',
                    flex: 1,
                    width: '100%',
                    flexWrap: 'wrap',
                    bgcolor: '#FFF',
                    '@media (max-width: 991px)': {
                        maxWidth: '100%',
                    },
                }}
            >
                <SidebarNavigation />
                <MainContent />
            </Box>

        </Box>
    );
}