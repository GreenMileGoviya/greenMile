import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import UserTypeSelector from '../registraion/UserTypeSelector';

import { useSelector } from "react-redux";
import { Avatar, Badge, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
// import SignUpForm from '../registraion/SignUpForm';
import classes from "./NotificationMenu.module.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { SlideBarListItems } from './SlideBarListItems';


const options = [
    ' None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
];

const ITEM_HEIGHT = 48;
export default function NotifcationMenu() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const selectedSignupButton = useSelector(
        (state) => state.userTypeSelectorButton.selectedSignupButton
    );

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        // height: (selectedSignupButton !== "") ? 600 : "auto",
        height: 400,
        bgcolor: 'background.paper',
        border: "none",
        boxShadow: 24,
        borderRadius: 5,
        p: 4,
        pr: 0
    };

    const listItems = SlideBarListItems();
    return (
        <div>
            <IconButton onClick={handleOpen}>
                <Badge badgeContent={4} color="primary">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{ pr: 4, height: 400, overflow: "auto" }} className={classes.box}>
                        <List>
                            {options.map((option) => (
                                <ListItemButton key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                    <ListItemIcon><Avatar /></ListItemIcon>
                                    <ListItemText primary={option} />
                                </ListItemButton>
                            ))}
                        </List>
                    </Box>
                </Box>
            </Modal>
        </div >
    );
}
