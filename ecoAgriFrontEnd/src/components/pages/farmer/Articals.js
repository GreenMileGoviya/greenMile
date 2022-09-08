import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import ArticalsLeftBar from '../../layouts/articals/ArticalsLeftBar';
import ArticalsRightBar from '../../layouts/articals/ArticalsRightBar';
import MainHeader from '../../layouts/MainHeader';
import classes from "../../ui/HideScrollBar.module.css";

function Articals() {
    return (
        <React.Fragment>
            <MainHeader value={3}></MainHeader>
            <Grid container sx={{ pt: "100px" }}>
                {/* <Grid item xs={12} sx={{ p: 5, mx: 5, mb: 5, bgcolor: "#fff" }}>
                    <CenteredBox align="center">
                        <Typography variant="h3">
                            Articals
                        </Typography>
                    </CenteredBox>
                </Grid> */}
                <Grid item xs={12} sx={{ mx: 2, pt: 2 }}>
                    <div>
                        <Grid container rowSpacing={4}>
                            <Grid item xs={12} sm={3} sx={{mb: 2, pr: "12px"}}>
                                <ArticalsLeftBar />
                            </Grid>
                            <Grid item xs={12} sm={9} className={classes.hideScrollBox}>
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