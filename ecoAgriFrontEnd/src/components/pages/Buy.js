import { Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import MainHeader from '../layouts/MainHeader'
import BuyProducts from '../buy/BuyProducts'
import BuyProductActions from '../buy/BuyProductActions'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router";
// import classes from '../../ui/HideScrollBar.module.css';

function Buy(props) {
  const user = useSelector((state) => state.user.currentUser);
  let userType = useSelector((state) => state.user.userType);
  // const userType = user.userrole ? user.userrole : "none";
  const navigate = useNavigate();

  useEffect(()=>{
    const checkUserExist = () => {
      console.log(userType);
      // alert("Hi");
      if (!userType) {
        alert("ayi");
        navigate("/login");
      }
    };
    checkUserExist();
  },[]);
  const value = (userType === "Farmer" && 2) || (userType === "Buyer" && 0) || (userType === "Charity" && 0);
  return (
    <React.Fragment>
      <MainHeader value={value} />
      <Grid container sx={{ pt: "100px", px: 5 }}>
        <Grid item xs={12} sx={{ bgcolor: "#FFF" }}>
          <BuyProductActions />
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#FFF", mt: 3, p: 3 }}>
          <BuyProducts
            productType={props.productType}
            productCategory="Vegetable"
          />
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#FFF", mt: 3, p: 3 }}>
          <BuyProducts
            productType={props.productType}
            productCategory="Fruits"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Buy