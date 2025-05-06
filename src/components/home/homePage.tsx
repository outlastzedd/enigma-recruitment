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
                bgcolor: "background.paper",
            }}
        >
            <SidebarNavigation />
            <MainContent />
        </Box>
    );
}