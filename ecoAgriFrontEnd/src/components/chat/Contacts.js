import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Grid, IconButton, ListItemButton, ListItemIcon } from '@mui/material';
import SearchBar from '../ui/Searchbar';
import CenteredBox from '../ui/CenteredBox';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import CloseIcon from '../ui/CloseIcon';
const DUMMY_CONTACT = [
    {
        id: 60,
        primary: 'Pasindu Lakmal',
        person: 'images/tutors/tutor-2.png',
    },
    {
        id: 62,
        primary: 'Supun Banuka',
        person: 'images/tutors/tutor-3.png',
    },
    {
        id: 63,
        primary: 'Mahinda Rajapaksha',
        person: 'images/tutors/tutor-1.png',
    },
    {
        id: 64,
        primary: 'Mia Malkova',
        person: 'images/tutors/tutor-2.png',
    },
]

export default function Contacts(props) {
    const [active, setActive] = React.useState(-1);
    const selectItem = (id, name) => {
        setActive(id)
        props.onSelect();
        { props.setSelectContactdetails((obj) => ({ ...obj, value1: id, value2: name })) }
    }
    return (
        <List sx={{ height: "300px", width: "300px", overflowY: "auto", bgcolor: "#FFF" }}>
            <SearchBar placeholder="search contacts .." />
            {DUMMY_CONTACT.map(({ id, primary, secondary, person }) => (
                <React.Fragment key={id} >
                    <ListItem
                        button
                        style={{ borderLeft: active == id ? '3px #3399FF solid' : '3px #FFFFFF solid' }}
                        onClick={() => selectItem(id, primary)}
                    >
                        <ListItemAvatar>
                            <Avatar alt="Profile Picture" src={person} />
                        </ListItemAvatar>
                        <ListItemText primary={<Typography sx={{color: "#000"}}>{primary}</Typography>} />
                    </ListItem>
                    <Divider />
                </React.Fragment>
            ))}
        </List >
    );
}
