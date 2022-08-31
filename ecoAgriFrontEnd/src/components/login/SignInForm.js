import { Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react'
import classes from '../registraion/SignUpForm.module.css';
import CenteredBox from '../ui/CenteredBox';
import PasswordInputField from '../ui/PasswordInputField';

function SignInForm() {
  return (
    <form>
      <Grid container sx={{ mb: 3 }}>
        <Grid item xs={12}>
          <CenteredBox align="center">
            <Typography>Welcome Back !</Typography>
          </CenteredBox>
        </Grid>
        <Grid item xs={12}>
          <CenteredBox align="center">
            <Typography>Please, Login</Typography>
          </CenteredBox>
        </Grid>
      </Grid>
      <Grid container sx={{ mb: 3 }} spacing={3}>
        <Grid item xs={12}>
          <TextField fullWidth variant="standard" label="Mobile Number"></TextField>
        </Grid>
        <Grid item xs={12}>
          <PasswordInputField
            label="Password"
            id="standard-adornment-sign-up-password"
            name="password"
          />
          <CenteredBox align="right">
            <p className={classes.text}>
              <a href="#">Forget Password?</a>
            </p></CenteredBox>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" fullWidth style={{ textTransform: "none", borderRadius: 10 }}> Sign In </Button>
          <CenteredBox align="center">
            <p className={classes.text}>
              Don't have an account? <a href="#">sign up</a>
            </p>
          </CenteredBox>
        </Grid>
      </Grid>
    </form>
  )
}

export default SignInForm