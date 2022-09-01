import { Avatar, Badge, Box, Chip, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { SlideBarListItems } from './SlideBarListItems';


const drawerWidth = 240;

const slidebarItems = [
  {
    id: "slider-icon-1",
    icon: (
      <div>
        <Badge badgeContent={0} color="primary">
          {/* <HouseIcon sx={{ fontSize: 30 }} /> */}
        </Badge>{" "}
        My Account
      </div>
    ),
    linkName: "/main",
  },
  {
    id: "slider-icon-2",
    icon: (
      <div>
        <Badge badgeContent={0} color="primary">
          {/* <PeopleAltIcon sx={{ fontSize: 30 }} /> */}
        </Badge>{" "}
        Orders
      </div>
    ),
    linkName: "/my-network",
  },
  {
    id: "slider-icon-3",
    icon: (
      <div>
        <Badge badgeContent={0} color="primary">
          {/* <NotificationsIcon sx={{ fontSize: 30 }} /> */}
        </Badge>{" "}
        Articles
      </div>
    ),
    linkName: "/notifications",
  },
  {
    id: "slider-icon-5",
    icon: (
      <Chip
        avatar={
          <Avatar
            alt="Natacha"
            src="/images/tutors/tutor-1.jpg"
            sx={{ fontSize: 30 }}
          />
        }
        label="Kumud perera"
        variant="outlined"
        size="large"
      />
    ),
    linkName: "/profile",
  },
];

function SlideBar(props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tabValue, setTabValue] = useState(props.value);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const listItems = SlideBarListItems(props.tabValue);
  const drawer = (
    <Box onClick={props.onClose} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        EcoAgri
      </Typography>
      <Divider />
      <List>
        {listItems.map((listItem) => (
          <ListItem key={listItem.id} disablePadding>
          <ListItemButton onClick={() => { navigate(listItem.link) }}>
            <ListItemIcon>{listItem.icon}</ListItemIcon>
            <ListItemText primary={listItem.listName} />
          </ListItemButton>
        </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={props.open}
        onClose={props.onClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          //   display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  )
}

export default SlideBar