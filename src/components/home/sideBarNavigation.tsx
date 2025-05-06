"use client";
import * as React from "react";
import LogoHeader from "../logoHeader"
import {
    Box,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    IconButton,
    InputBase,
    Paper,
    Divider,
    Button,
    useTheme,
} from "@mui/material";
import {
    Home,
    BookmarkBorder,
    Description,
    Build,
    Code,
    Person,
    Info,
    Help,
    Settings,
    Search,
} from "@mui/icons-material";

export const SidebarNavigation = () => {
    const theme = useTheme();

    const menuItems = [
        { text: "Home", icon: <Home /> },
        { text: "Saved Job", icon: <BookmarkBorder /> },
        { text: "Resume", icon: <Description /> },
        { text: "Career Tool", icon: <Build /> },
        { text: "Development", icon: <Code /> },
        { text: "Profile", icon: <Person /> },
    ];

    const footerItems = [
        { text: "About us", icon: <Info /> },
        { text: "Support", icon: <Help /> },
        { text: "Setting", icon: <Settings /> },
    ];

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 280,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: 280,
                    boxSizing: "border-box",
                    border: `1px solid ${theme.palette.divider}`,
                    display: "flex",
                    flexDirection: "column",
                },
                display: { xs: "none", sm: "block" },
            }}
        >
            <LogoHeader />

            <Box sx={{ px: 2 }}>
                <Paper
                    component="form"
                    sx={{
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        bgcolor: "grey.100",
                        borderRadius: 2,
                    }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search"
                    />
                    <IconButton sx={{ bgcolor: "primary.main", color: "white", ml: 1 }}>
                        <Search />
                    </IconButton>
                </Paper>
            </Box>

            <List sx={{ mt: 2 }}>
                {menuItems.map((item, index) => (
                    <ListItemButton
                        key={index}
                        sx={{
                            borderRadius: 1,
                            my: 0.5,
                            mx: 1,
                        }}
                    >
                        <ListItemIcon sx={{ color: "text.secondary" }}>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItemButton>
                ))}
            </List>

            <Box sx={{ mt: "auto", p: 2 }}>
                <Divider sx={{ mb: 2 }} />
                <List>
                    {footerItems.map((item, index) => (
                        <ListItemButton
                            key={index}
                            sx={{
                                borderRadius: 1,
                                my: 0.5,
                                mx: 1,
                            }}
                        >
                            <ListItemIcon sx={{ color: "text.secondary" }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    ))}
                </List>
                <Box sx={{ mt: 2 }}>
                    <Button
                        variant="contained"
                        fullWidth
                        sx={{ mb: 1 }}
                    >
                        Sign up
                    </Button>
                    <Button
                        variant="outlined"
                        fullWidth
                    >
                        Sign in
                    </Button>
                </Box>
            </Box>
        </Drawer>
    );
};
