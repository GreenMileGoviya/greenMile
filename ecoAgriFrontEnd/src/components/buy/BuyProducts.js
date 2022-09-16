import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Grid from '@mui/material/Grid';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import CenteredBox from '../ui/CenteredBox';
import { Box, Button, Typography } from '@mui/material';
import SellerDetailsContainer from './SellerDetailsContainer';
import { useNavigate } from 'react-router';

export default function BuyProducts(props) {
    const navigate = useNavigate();
    return (
        <Box>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2 }}>
                <Grid item xs={12}>
                    <Typography variant="h5">{props.productCategory}</Typography>
                </Grid>
                {itemData.map((item) => (
                    <Grid key={item.key} item xs={12} sm={6} md={4} lg={3}>
                        <ImageListItem style={{ borderRadius: 10 }}>
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                                style={{ height: "230px" }}
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={item.author}
                                actionIcon={
                                    <Button
                                        variant='contained'
                                        style={{ textTransform: "none" }}
                                        sx={{ p: 0, mt: 3, mr: 2 }}
                                        onClick={()=> {navigate(`/buy-product/${props.id}`)}}
                                    >
                                        Request
                                    </Button>
                                }
                            />
                        </ImageListItem>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

const itemData = [
    {
        key: "buy-product-1",
        id: "1",
        author: <Grid container>
            <Grid item xs={6}>
                <Typography variant="body2">
                    Rs. 300
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <CenteredBox align="right">
                    <Typography variant="body2">
                        2kg
                    </Typography>
                </CenteredBox>
            </Grid>
        </Grid>,
        title: 'Mango',
        img: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',

    },
    {
        img: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
        title: 'Banana',
        key: "buy-product-2",
        id: "2",
        author: <Grid container>
            <Grid item xs={6}>
                <Typography variant="body2">
                    Rs. 300
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <CenteredBox align="right">
                    <Typography variant="body2">
                        2kg
                    </Typography>
                </CenteredBox>
            </Grid>
        </Grid>,
    },
    {
        img: 'https://images.unsplash.com/photo-1550828520-4cb496926fc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80',
        title: 'Pine Apple',
        key: "buy-product-3",
        id: "3",
        author: <Grid container>
            <Grid item xs={6}>
                <Typography variant="body2">
                    Rs. 300
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <CenteredBox align="right">
                    <Typography variant="body2">
                        2kg
                    </Typography>
                </CenteredBox>
            </Grid>
        </Grid>,
    },
    {
        img: 'https://images.unsplash.com/photo-1449339854873-750e6913301b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Avacado',
        key: "buy-product-4",
        id: "4",
        author: <Grid container>
            <Grid item xs={6}>
                <Typography variant="body2">
                    Rs. 300
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <CenteredBox align="right">
                    <Typography variant="body2">
                        2kg
                    </Typography>
                </CenteredBox>
            </Grid>
        </Grid>,
    },
];
