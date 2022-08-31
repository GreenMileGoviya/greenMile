import { Grid } from '@mui/material'
import React from 'react'
import LeftBar from '../../layouts/farmer/LeftBar'
import RightBar from '../../layouts/farmer/RightBar'
import MainHeader from '../../layouts/MainHeader'

function DashBoard() {
    return (
        <React.Fragment>
            <MainHeader value={0} />
            <Grid
                container
                spacing={2}
                style={{
                    boxSizing: "initial",
                    width: "1500px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    alignItems: "stretch",
                }}
            >
                <Grid
                    item
                    xs={2}
                    style={{
                        height: "100vh",
                        position: "sticky",
                        top: 0,
                        paddingTop: 100,
                    }}
                >
                    <LeftBar></LeftBar>
                </Grid>
                <Grid
                    item
                    xs={10}
                    style={{
                        paddingTop: 100,
                    }}
                >
                    <RightBar></RightBar>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default DashBoard