import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userTypeSelectorButtonActions } from "../../store/userType-selector-slice";
import CenteredBox from "../ui/CenteredBox";
import GoBackIcon from "../ui/GoBackIcon";
import GoForward from "../ui/GoForward";
import ImageUploader from "../ui/ImageUploader";
import PasswordInputField from "../ui/PasswordInputField";
import classes from "./SignUpForm.module.css";
import { register } from "../../store/userApiCalls";
import { useNavigate } from "react-router";

function SignUpForm(props) {
  console.log(props.userType);
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const selectedSignupButton = useSelector(
    (state) => state.userTypeSelectorButton.selectedSignupButton
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const backButtonClicked = () => {
    dispatch(
      userTypeSelectorButtonActions.setBeforeClickBackButton(props.userType)
    );
    dispatch(userTypeSelectorButtonActions.setSelectedSignupButton(""));
  };

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const clickRegister = async (e) => {
    e.preventDefault();
    let data = {
      ...inputs,
      userrole: props.userType,
      password: password,
      confPassword: confirmPassword,
    };
    if (props.userType === "Buyer") {
      data = {
        ...data,
        address: "",
      };
    }
    if (props.userType !== "Advertiser") {
      data = {
        ...data,
        email: "",
      };
    }
    if (props.userType !== "Charity") {
      data = {
        ...data,
        registerNo: "",
        img: "",
      };
    } else {
      //image upload part
    }
    const result = await register(data);
    if (result) {
      navigate("/login");
    }
    console.log(data);
  };

  return (
    <div className={classes["forms-wrap"]}>
      <form onSubmit={clickRegister}>
        <div onClick={backButtonClicked}>
          <GoBackIcon show={selectedSignupButton !== ""} />
        </div>
        <Grid container sx={{ mb: 3 }}>
          <Grid item xs={12}>
            <CenteredBox align="center">
              <Typography variant="h5">Sign up as {props.userType}</Typography>
            </CenteredBox>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              variant="standard"
              label="Username"
              name="username"
              id="username"
              type="text"
              onChange={handleChange}
            />
          </Grid>
          {/* <Grid item xs={6}>
            <TextField required variant="standard" label="email" onChange={handleChange} />
          </Grid> */}
        </Grid>
        <Grid container sx={{ mb: 3 }} spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              variant="standard"
              fullWidth
              label="Phone number"
              name="phone_number"
              id="phone_number"
              type="text"
              onChange={handleChange}
            />
          </Grid>
          {props.userType !== "Buyer" && (
            <Grid item xs={12}>
              <TextField
                required
                variant="standard"
                fullWidth
                label="Address"
                name="address"
                id="address"
                type="text"
                onChange={handleChange}
              />
            </Grid>
          )}
          {props.userType === "Advertiser" && (
            <Grid item xs={12}>
              <TextField
                required
                variant="standard"
                fullWidth
                label="Email"
                name="email"
                id="email"
                type="email"
                onChange={handleChange}
              />
            </Grid>
          )}
        </Grid>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={6}>
            <TextField
              required
              variant="standard"
              label="City"
              name="city"
              id="city"
              type="text"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              variant="standard"
              label="Town"
              name="town"
              id="town"
              type="text"
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container sx={{ mb: 3 }} spacing={3}>
          {props.userType === "Charity" && (
            <Grid item xs={12}>
              <TextField
                required
                variant="standard"
                fullWidth
                label="Registration No."
                name="registerNo"
                id="registerNo"
                type="text"
                onChange={handleChange}
              />
            </Grid>
          )}
          {props.userType === "Charity" && (
            <Grid item xs={12}>
              <ImageUploader
                required
                label="Registration proof"
                type="file"
                id="file"
                name="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Grid>
          )}
          <Grid item xs={12}>
            <PasswordInputField
              required
              label="Password"
              name="password"
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <PasswordInputField
              required
              label="Confirm Password"
              name="confPassword"
              id="confPassword"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={
                <p className={classes.text}>
                  By signing up, I agree to the{" "}
                  <a href="#">Terms of Services</a> and{" "}
                  <a href="#">Privacy Policy</a>
                </p>
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              fullWidth
              type="submit"
              style={{ textTransform: "none", borderRadius: 10 }}
            >
              {" "}
              Sign Up{" "}
            </Button>
            <CenteredBox align="center">
              <p className={classes.text}>
                Already have an account? <a href="#">sign in</a>
              </p>
            </CenteredBox>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default SignUpForm;
