import { Button, ImageListItem, ImageListItemBar } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'

function ProdcutCard(props) {
    const navigate = useNavigate();
    return (
        <ImageListItem style={{ borderRadius: 10 }}>
            <img
                src={`${props.item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${props.item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={props.item.title}
                loading="lazy"
                style={{ height: "230px" }}
            />
            <ImageListItemBar
                title={props.item.title}
                subtitle={props.item.author}
                actionIcon={
                    <Button
                        variant='contained'
                        style={{ textTransform: "none" }}
                        sx={{ p: 0, mt: 3, mr: 2 }}
                        onClick={() => { navigate(`/buy-product/${props.id}`) }}
                    >
                        Request
                    </Button>
                }
            />
        </ImageListItem>
    )
}

export default ProdcutCard