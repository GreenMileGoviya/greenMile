import { Card, Grid, Typography } from '@mui/material'
import React from 'react'
import CenteredBox from '../CenteredBox';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};
function SlideBarBox(props) {
    return (
        <Card sx={{ width: "100px", height: "100px", p: 2, position: 'relative' }}>
            <div style={style}>
                <CenteredBox align="center">
                    <Typography>{props.number}</Typography>
                </CenteredBox>
                <CenteredBox align="center">
                    <Typography>{props.name}</Typography>
                </CenteredBox>
            </div>
        </Card>
    )
}

export default SlideBarBox