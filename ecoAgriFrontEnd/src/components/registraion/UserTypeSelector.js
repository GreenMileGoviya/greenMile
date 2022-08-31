import { Button, Grid, Typography, IconButton } from '@mui/material'
import React from 'react'
import CenteredBox from '../ui/CenteredBox'
import UserTypes from './UserTypes'
import PersonIcon from '@mui/icons-material/Person';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GoForward from '../ui/GoForward';
import { useDispatch, useSelector } from 'react-redux';
import { userTypeSelectorButtonActions } from '../../store/userType-selector-slice';
function UserTypeSelector() {

  const beforeClickBackButton = useSelector(
    (state) => state.userTypeSelectorButton.beforeClickBackButton
  )
  return (
    <React.Fragment>

      <Typography>How do you want to register ?</Typography>
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