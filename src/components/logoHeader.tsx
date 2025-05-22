"use client";
import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";

const LogoHeader = () => {
    return (
        <Box
            sx={{
                '@media (max-width: 991px)': {
                    display: 'flex',
                    justifyContent: 'space-between',
                },
            }}
        >
            <Box
                sx={{
                    margin: 3,
                    '@media (max-width: 991px)': {
                        margin: 2,
                        ml: 2
                    },
                }}
            >
                <Image
                    src="/Logo2.svg"
                    alt="Career Logo"
                    width={135}
                    height={28}
                />
            </Box>
            <Box
                sx={{
                    display: 'none',
                    '@media (max-width: 991px)': {
                        display: 'grid',
                        marginTop: 1.9,
                        marginRight: -2.5,
                    },
                }}
            >
                <Image
                    src="/slidebar.svg"
                    alt="Slide bar"
                    width={135}
                    height={28}
                />
            </Box>
        </Box>
    );

};

export const JustLogoHeader = () => {
    return (
        <Box >
            <Box>
                <Image
                    src="/logoPic.svg"
                    alt="Career Logo"
                    width={135}
                    height={28}
                />
            </Box>
        </Box >
    );

};

export default LogoHeader;
