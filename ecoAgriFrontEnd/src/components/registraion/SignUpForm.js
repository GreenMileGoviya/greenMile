import { Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import CenteredBox from '../ui/CenteredBox';
import ImageUploader from '../ui/ImageUploader';
import PasswordInputField from '../ui/PasswordInputField'
import classes from "./Registraion.module.css";

function SignUpForm(props) {
    console.log(props.userType);
    return (
        <div className={classes["forms-wrap"]}>
            <form>
                <Grid container sx={{ mb: 3 }}>
                    <Grid item xs={12}>
                        <CenteredBox align="center">
                            <Typography variant="h5">Sign up as {props.userType}</Typography>
                        </CenteredBox>
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ mb: 3 }}>
                    <Grid item xs={6}>
                        <TextField variant="standard" label="First Name" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField variant="standard" label="Last Name" />
                    </Grid>
                </Grid>
                <Grid container sx={{ mb: 3 }} spacing={3}>
                    <Grid item xs={12}>
                        <TextField variant="standard" fullWidth label="Phone number" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant="standard" fullWidth label="Address" />
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ mb: 3 }}>
                    <Grid item xs={6}>
                        <TextField variant="standard" label="City" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField variant="standard" label="Town" />
                    </Grid>
                </Grid>
                <Grid container sx={{ mb: 3 }} spacing={3}>
                    {props.userType === "Charity" &&
                        <Grid item xs={12}>
                            <TextField variant="standard" fullWidth label="Registration No." />
                        </Grid>
                    }
                    {props.userType === "Charity" &&
                        <Grid item xs={12}>
                            <ImageUploader label="Registration proof" />
                        </Grid>
                    }
                    <Grid item xs={12}>
                        <PasswordInputField
                            label="Password"
                            id="standard-adornment-sign-up-password"
                            name="password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <PasswordInputField
                            label="Confirm Password"
                            name="confirm_password"
                            id="standard-adornment-sign-up-confirm-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel control={<Checkbox defaultChecked />} label={
                            <p className={classes.text}>
                                By signing up, I agree to the <a href="#">Terms of Services</a> and <a href="#">Privacy Policy</a>
                            </p>
                        }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" fullWidth style={{ textTransform: "none", borderRadius: 10 }}> Sign Up </Button>
                        <CenteredBox align="center">
                            <p className={classes.text}>
                                Already have an account? <a href="#">sign in</a>
                            </p>
                        </CenteredBox>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default SignUpForm