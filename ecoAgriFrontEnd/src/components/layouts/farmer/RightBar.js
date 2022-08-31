import { Grid } from '@mui/material'
import React from 'react'
import DashBoardCard from '../../ui/farmer/DashBoardCard'

const DUMMY_DATA = [
    {
        productId: "farmer-product-1",
        product: "Mango (Villard)",
        price: "Rs. 300",
        weight: "1kg",
    },
    {
        productId: "farmer-product-2",
        product: "Mango (Villard)",
        price: "Rs. 300",
        weight: "1kg",
    },
    {
        productId: "farmer-product-3",
        product: "Mango (Villard)",
        price: "Rs. 300",
        weight: "1kg",
    },
    {
        productId: "farmer-product-4",
        product: "Mango (Villard)",
        price: "Rs. 300",
        weight: "1kg",
    },
    {
        productId: "farmer-product-5",
        product: "Mango (Villard)",
        price: "Rs. 300",
        weight: "1kg",
    },
    {
        productId: "farmer-product-6",
        product: "Mango (Villard)",
        price: "Rs. 300",
        weight: "1kg",
    },
    {
        productId: "farmer-product-7",
        product: "Mango (Villard)",
        price: "Rs. 300",
        weight: "1kg",
    },
]

function RightBar() {
    return (
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2 }}>
            {DUMMY_DATA.map((item) => (
                <Grid item xs={1} sm={6} md={4} lg={3} xl={2}>
                    <DashBoardCard
                        key={item.id}
                        product={item.product}
                        price={item.price}
                        weight={item.weight}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default RightBar