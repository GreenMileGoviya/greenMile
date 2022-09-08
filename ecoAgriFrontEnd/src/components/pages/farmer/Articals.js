import { Grid, Typography } from '@mui/material'
import React from 'react'
import ArticalsLeftBar from '../../layouts/articals/ArticalsLeftBar'
import ArticalsRightBar from '../../layouts/articals/ArticalsRightBar'
import MainHeader from '../../layouts/MainHeader'
import CenteredBox from '../../ui/CenteredBox'

function Articals() {
    return (
        <React.Fragment>
            <MainHeader value={3}></MainHeader>
            <Grid container sx={{ pt: "100px" }}>
                <Grid item xs={12} sx={{ p: 5, mx: 5, mb: 5, bgcolor: "#fff" }}>
                    <CenteredBox align="center">
                        <Typography variant="h3">
                            Articals
                        </Typography>
                    </CenteredBox>
                </Grid>
                <Grid item xs={12} sx={{ p: 5, mx: 5, mb: 5, bgcolor: "#fff" }}>
                    <div>
                        <Grid container>
                            <Grid item xs={3}>
                                <ArticalsLeftBar />
                            </Grid>
                            <Grid item xs={9}>
                                <ArticalsRightBar />
                            </Grid>
                        </Grid>
                    </div>
                </Grid>

            </Grid>
        </React.Fragment>
    )
}

export default Articals