import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import UserTypeSelector from '../registraion/UserTypeSelector';

import { useSelector } from "react-redux";
import SignUpForm from '../registraion/SignUpForm';
import classes from "./Registration.module.css";


export default function Registration() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const selectedSignupButton = useSelector(
    (state) => state.userTypeSelectorButton.selectedSignupButton
  );

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: (selectedSignupButton !== "") ? 600 : "auto",
    bgcolor: 'background.paper',
    overflow: "auto",
    // border: '2px solid #000',
    border: "none",
    boxShadow: 24,
    borderRadius: 5,
    px: 4,
    pt: 2
  };

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Box sx={style} className={classes.box}>
          {selectedSignupButton === "" &&
            <UserTypeSelector />
          }
          {selectedSignupButton !== "" &&
            <SignUpForm userType={selectedSignupButton} />
          }
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
