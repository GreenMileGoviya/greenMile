import { Box } from '@mui/material'
import React from 'react'
import ManageUserTable from '../../admin/ManageUserTable'
import MainHeader from '../../layouts/MainHeader'

function ManageUsers() {
    return (
        <React.Fragment>
            <MainHeader />
            <Box sx={{p: "100px"}}>
                <ManageUserTable />
            </Box>
        </React.Fragment>
    )
}

export default ManageUsers