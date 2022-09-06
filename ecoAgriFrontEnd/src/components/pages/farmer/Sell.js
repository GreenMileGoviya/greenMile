import { Grid } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import SalePageCard from '../../farmer/sell/SalePageCard';
import SalesCharts from '../../farmer/sell/SalesChart'
import MainHeader from '../../layouts/MainHeader'
import VisibilityIcon from '@mui/icons-material/Visibility';

function Sell() {
  return (
    <React.Fragment>
      <MainHeader value={1} />
      <Grid container sx={{ pt: "100px", px: 7 }} spacing={3}>
        <Grid item sm={12} md={8}>
          <SalesCharts />
        </Grid>
        <Grid item sm={12} md={4}>
          <div>
            <Grid container spacing={3}>
              <Grid item sm={6} md={12}>
                <SalePageCard bgColor="rgb(209, 233, 252)"
                  title="Orders"
                  total={38}
                  icon={<VisibilityIcon></VisibilityIcon>} />
              </Grid>
              <Grid item sm={6} md={12}>
                <SalePageCard bgColor="rgb(209, 233, 252)"
                  title="Cancelled Requests"
                  total={10}
                  icon={<VisibilityIcon></VisibilityIcon>} />
              </Grid>
            </Grid>
          </div>

        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Sell