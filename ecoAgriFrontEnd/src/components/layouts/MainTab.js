import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { Link } from "react-router-dom";
import {
    Avatar,
    Badge,
    Button,
    createTheme,
    StyledEngineProvider,
    ThemeProvider,
} from "@mui/material";
// import ProfileMenu from "./ProfileMenu";

export default function MainTab(props) {
    const [value, setValue] = useState(props.value);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // console.log(value);
    if (props.value === null) {
        setValue(false);
    }

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
    });

    return (
        <ThemeProvider theme={theme}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
            >
                <Tab
                    sx={{ minWidth: 0, p: 0 }}
                    value={0}
                    component={Link}
                    to={"/dashboard"}
                    label={<Button style={{ textTransform: "none" }} variant={value === 0 ? "contained": ""}>Home</Button>}
                />
                <Tab
                    sx={{ minWidth: 0, p: 0 }}
                    value={1}
                    component={Link}
                    to={"/sell"}
                    label={<Button style={{ textTransform: "none" }} variant={value === 1 ? "contained": ""}>Sell</Button>}
                />
                <Tab
                    sx={{ minWidth: 0, p: 0 }}
                    value={2}
                    component={Link}
                    to={"/donate"}
                    label={<Button style={{ textTransform: "none" }} variant={value === 2 ? "contained": ""}>Donate</Button>}
                />
                <Tab
                    sx={{ minWidth: 0 }}
                    value={3}
                    component={Link}
                    to={"/profile"}
                    icon={<Avatar></Avatar>}
                />
            </Tabs>
        </ThemeProvider>
    );
}
