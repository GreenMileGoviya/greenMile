import React from 'react'
import { Button, Checkbox, FormControl, FormControlLabel, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system'
import CenteredBox from '../../ui/CenteredBox';
import classes from "../../ui/Form.module.css";

const style = {
  // position: 'absolute',
  // top: '50%',
  // left: '50%',
  // transform: 'translate(-50%, -50%)',
  width: 400,
  height: 505,
  bgcolor: 'background.paper',
  overflow: "auto",
  border: "none",
  boxShadow: 24,
  borderRadius: 5,
  p: 4,
};
function AddBankForm() {
  return (
    <div>
      <CenteredBox align="center">
        <Box sx={style}>
          <form>
            <Grid container sx={{ mb: 3 }}>
              <Grid item xs={12}>
                <CenteredBox align="center">
                  <Typography variant="h5">Enter Bank Details</Typography>
                </CenteredBox>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Account Number"
                  type="number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Account holder's name"
                  type="text"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>Bank</InputLabel>
                  <Select
                    label="Bank"
                  // value={university}
                  // onChange={universityChangeHandler}
                  // onBlur={universityBlurHandler}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>University of Moratuwa</MenuItem>
                    <MenuItem value={2}>University of Colombo</MenuItem>
                    <MenuItem value={3}>University of Peradeniya</MenuItem>
                    <MenuItem value={4}>University of Kelaniya</MenuItem>
                    <MenuItem value={5}>University of Japura</MenuItem>
                    <MenuItem value={6}>University of Ruhuna</MenuItem>
                    {/* <MenuItem value={7}>Sri Lanka Institute of Information Technology (SLIIT)</MenuItem>
                    <MenuItem value={8}>Informatics Information of Technology (IIT)</MenuItem> */}
                  </Select>
                  {/* <FormHelperText>{universityHasError ? universityError : ""}</FormHelperText> */}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>Branch</InputLabel>
                  <Select
                    label="Branch"
                  // value={university}
                  // onChange={universityChangeHandler}
                  // onBlur={universityBlurHandler}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>University of Moratuwa</MenuItem>
                    <MenuItem value={2}>University of Colombo</MenuItem>
                    <MenuItem value={3}>University of Peradeniya</MenuItem>
                    <MenuItem value={4}>University of Kelaniya</MenuItem>
                    <MenuItem value={5}>University of Japura</MenuItem>
                    <MenuItem value={6}>University of Ruhuna</MenuItem>
                    {/* <MenuItem value={7}>Sri Lanka Institute of Information Technology (SLIIT)</MenuItem>
                    <MenuItem value={8}>Informatics Information of Technology (IIT)</MenuItem> */}
                  </Select>
                  {/* <FormHelperText>{universityHasError ? universityError : ""}</FormHelperText> */}
                </FormControl>
              </Grid>
              <Grid item xs={12}>

              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={1}>
                <FormControlLabel sx={{ m: 0 }} control={<Checkbox sx={{ p: 0 }} defaultChecked />} />
              </Grid>
              <Grid item xs={11}>
                <p className={classes.text}>
                  I acknowledge that my bank account details is saved in my ecoAgri account for subsequent transations
                </p>
              </Grid>
            </Grid>
            <Grid container sx={{ mt: 3 }}>
              <Grid item xs={12}>
                <Button fullWidth variant="contained" type="submit" style={{textTransform: "none"}}>Submit</Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </CenteredBox>
    </div>
  )
}

export default AddBankForm