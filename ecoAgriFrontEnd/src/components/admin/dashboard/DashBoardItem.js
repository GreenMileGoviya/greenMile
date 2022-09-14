import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router'
import DonationPendingTable from './DonationHistoryTable'
import MainHeader from '../../layouts/MainHeader'
import CenteredBox from '../../ui/CenteredBox'

const style = {
  // position: 'absolute',
  // top: '50%',
  // left: '50%',
  // transform: 'translate(-50%, -50%)',
  width: "100%",
  // height: 505,
  bgcolor: 'background.paper',
  overflow: "auto",
  // border: "none",
  boxShadow: 10,
  borderRadius: 2,
  p: 4,
};
function DashBoardItem(props) {
  return (
    <Grid container>
      <Grid item xs={12}>
        {/* <CenteredBox align="center"> */}
          <Typography sx={{ mb: 2 }} variant="h5">{props.tableName}</Typography>
        {/* </CenteredBox> */}
      </Grid>
      <Grid item xs={12}>
        {/* <CenteredBox align="center"> */}
          {props.table}
        {/* </CenteredBox> */}
      </Grid>
    </Grid>
    // <React.Fragment>
    //   <Box sx={style}>
    //     <CenteredBox align="center">
    //       <Typography sx={{mb: 2}} variant="h5">{props.tableName}</Typography>
    //     </CenteredBox>
    //     <CenteredBox align="center">
    //         {props.table}
    //     </CenteredBox>
    //   </Box>
    // </React.Fragment>
  )
}

export default DashBoardItem