import { Grid, Typography } from '@mui/material'
import React from 'react'
import MainHeader from '../layouts/MainHeader'
import ProfileContent from '../layouts/ProfileContent'
import CenteredBox from '../ui/CenteredBox'

function Profile() {
    return (
        <React.Fragment>
            <MainHeader value={3} />
            <Grid container sx={{pt: "100px"}}>
                <Grid item xs={12} sx={{ p: 5, mx: 10, mb: 5, bgcolor: "#fff" }}>
                    <CenteredBox align="center">
                        <Typography variant="h3">
                            Profile
                        </Typography>
                    </CenteredBox>
                </Grid>
                <Grid item xs={12} sx={{ py: 5, mx: 10, bgcolor: "#fff" }}>
                    <ProfileContent />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Profile