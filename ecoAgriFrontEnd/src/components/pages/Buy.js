import { Grid, Typography } from '@mui/material'
import React from 'react'
import MainHeader from '../layouts/MainHeader'
import BuyProducts from '../buy/BuyProducts'
import BuyProductActions from '../buy/BuyProductActions'
// import classes from '../../ui/HideScrollBar.module.css';

function Buy() {
  return (
    <React.Fragment>
      <MainHeader value={2} />
      <Grid container sx={{ pt: "100px", px: 5 }}>
        <Grid item xs={12} sx={{bgcolor: "#FFF"}}>
          <BuyProductActions />
        </Grid>
        <Grid item xs={12} sx={{bgcolor: "#FFF", mt: 3, p: 3}}>
          <BuyProducts
            productCategory = "Vegitable"
          />
        </Grid>
        <Grid item xs={12}  sx={{bgcolor: "#FFF", mt: 3, p: 3}}>
          <BuyProducts
            productCategory = "Fruits"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Buy