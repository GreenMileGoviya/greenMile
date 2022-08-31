import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import CenteredBox from '../ui/CenteredBox'
import UserTypes from './UserTypes'
import PersonIcon from '@mui/icons-material/Person';

function UserTypeSelector() {
  return (
    <React.Fragment>
      <Grid container>
        <Typography>How do you want to register ?</Typography>
      </Grid>
      <Grid container>
        <Grid item xs={3}>
          <UserTypes icon={<PersonIcon />} userType="Farmer" />
        </Grid>
        <Grid item xs={3}>
          <UserTypes icon={<PersonIcon />} userType="Buyer" />
        </Grid>
        <Grid item xs={3}>
          <UserTypes icon={<PersonIcon />} userType="Charity" />
        </Grid>
        <Grid item xs={3}>
          <UserTypes icon={<PersonIcon />} userType="Advertiser" />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default UserTypeSelector