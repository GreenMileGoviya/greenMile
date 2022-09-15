import { Collapse, Divider, List, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

function PopularAreas(props) {
    return (
        <Collapse in={props.OnOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText secondary="Starred" />
                </ListItemButton>
            </List>
        </Collapse>
    )
}

export default PopularAreas