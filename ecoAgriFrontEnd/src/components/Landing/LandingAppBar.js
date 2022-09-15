import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar, Badge, Button, Chip, createTheme, ThemeProvider } from "@mui/material";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const theme = createTheme({
    palette: {
        primary: {
            main: "#007A31",
        },
    },
    typography: {
        fontFamily: "Poppins",
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

export default function LandingAppBar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const navigate = useNavigate();


    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: "flex", }}>
                <AppBar component="nav" sx={{ backgroundColor: "#fff" }}>
                    <Toolbar style={{ position: "relative" }}>
                        {/* <IconButton
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton> */}
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                        >
                        </Typography>
                        <Box
                            id="nav-container-list"
                            sx={{ display: { xs: "none", sm: "block" } }}
                        >
                        </Box>
                        <Button variant="outlined" onClick={() => {navigate("/registration")}} sx={{mr: 2}}>Sign Up</Button>
                        <Button variant="contained" onClick={() => {navigate("/login")}}>Sign In</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}
