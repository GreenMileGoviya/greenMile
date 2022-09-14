import { Grid } from '@mui/material'
import React from 'react'
import BankDetailField from '../farmer/sell/BankDetailField'

function ViewUserDetails(props) {
    return (
        <Grid container sx={{pr: 3}} spacing={3}>
            <Grid item xs={12}>
                <BankDetailField fieldName="User Name" userDetail="Pasing Lakmal" />
            </Grid>
            <Grid item xs={12}>
                <BankDetailField fieldName="Email" userDetail="pasindu.lakmal@gmail.com" />
            </Grid>
        </Grid>
    )
}

export default ViewUserDetails