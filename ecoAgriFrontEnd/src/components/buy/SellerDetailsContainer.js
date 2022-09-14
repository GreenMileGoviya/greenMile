import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, IconButton, ImageListItem, ImageListItemBar } from '@mui/material';
import BuyProductForm from './BuyProductForm';
import CloseIcon from '@mui/icons-material/Close';
import CenteredBox from '../ui/CenteredBox';
import SellerDetails from './SellerDetails';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 3,
    pt: 0,
    pr: 0
};

export default function SellerDetailsContainer(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button variant='contained' style={{ textTransform: "none" }} sx={{ p: 0 }} onClick={handleOpen}>Request</Button>
            <Modal
                open={open}
                // onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CenteredBox align="right">
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </CenteredBox>
                    <Grid container sx={{pr: 3}}>
                        <Grid item xs={12}>
                            {/* map here */}

                            {/* <ImageListItem style={{ borderRadius: 10 }}>
                                <img
                                    src={`${props.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${props.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={props.title}
                                    loading="lazy"
                                    style={{ height: "230px" }}
                                />
                                <ImageListItemBar
                                    title={props.title}
                                    subtitle={props.author}
                                />
                            </ImageListItem> */}
                        </Grid>
                        <Grid item xs={12}>
                            <SellerDetails />
                            {/* <BuyProductForm /> */}
                        </Grid>
                        <Grid item xs={6}>
                            
                        </Grid>
                    </Grid>

                </Box>
            </Modal>
        </div>
    );
}
