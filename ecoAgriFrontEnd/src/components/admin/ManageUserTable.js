import * as React from "react";
import PropTypes from "prop-types";
import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarFilterButton,
    gridClasses,
} from "@mui/x-data-grid";
// import styled from "@emotion/styled";
import { green, red, blue } from "@mui/material/colors";
import CenteredBox from "../ui/CenteredBox";
import { Box, Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
// import Popup from "./Popup";
import { useRef } from "react";
import UpdateUserModal from "./UpdateUserModal";
import ViewUserModal from "./ViewUserModal";

//Filter panel
const CustomToolbar = ({ setFilterButtonEl }) => (
    <GridToolbarContainer>
        <GridToolbarFilterButton ref={setFilterButtonEl} />
    </GridToolbarContainer>
);

CustomToolbar.propTypes = {
    setFilterButtonEl: PropTypes.func.isRequired,
};

//Colour buttons
const ColorButton1 = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(blue[600]),
    textTransform: "none",
    backgroundColor: blue[600],
    "&:hover": {
        backgroundColor: blue[700],
    },
}));

const ColorButton2 = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(green[600]),
    textTransform: "none",
    backgroundColor: green[600],
    "&:hover": {
        backgroundColor: green[700],
    },
}));

const ColorButton3 = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[600]),
    backgroundColor: red[600],
    textTransform: "none",
    "&:hover": {
        backgroundColor: red[700],
    },
}));

const style = {
    boxShadow: 24,
    borderRadius: "0.5%",
    backgroundColor: "white",
};
export default function ManageUserTable() {
    const [age, setAge] = React.useState("");
    const [value, setValue] = React.useState(false);

    const modelRef = useRef();

    const rows = [
        {
            id: 1,
            col1: "Pasindu Lakmal",
            col2: "Farmer",
            col3: "Pasindu@gmail.com",
        },
        {
            id: 2,
            col1: "Supun Banuka",
            col2: "Buyer",
            col3: "pasindu.lakmal@gmail.com",
        },
        {
            id: 3,
            col1: "Piruna",
            col2: "Advertiser",
            col3: "pasindu.lakmal@gmail.com",
        },
        {
            id: 4,
            col1: "Lahiru",
            col2: "Charity",
            col3: "pasindu.lakmal@gmail.com",
        },
        {
            id: 5,
            col1: "Saman Kumara",
            col2: "Farmer",
            col3: "pasindu.lakmal@gmail.com",
        },
        {
            id: 6,
            col1: "Kusal Mendis",
            col2: "Buyer",
            col3: "pasindu.lakmal@gmail.com",
        }
    ];

    const columns = [
        {
            field: "col1",
            headerName: "User Name",
            headerClassName: "header-class-name",
            width: 150,
        },
        {
            field: "col2",
            headerName: "User Type",
            headerClassName: "header-class-name",
            width: 150,
        },
        {
            field: "col3",
            headerName: "Phone number",
            headerClassName: "header-class-name",
            width: 300,
        },

        {
            field: "col4",
            headerName: "Actions",
            headerClassName: "header-class-name",
            width: 400,
            align: "center",
            disableColumnMenu: true,
            sortable: false,
            renderCell: (params) => {
                // const onClick = (e) => {};

                return (
                    <Grid container spacing={0}>
                        <Grid item xs={4}>
                            <ViewUserModal />
                        </Grid>
                        <Grid item xs={4}>
                            <UpdateUserModal />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorButton3>Delete</ColorButton3>
                        </Grid>
                    </Grid>
                );
            },
        },
    ];

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const [filterButtonEl, setFilterButtonEl] = React.useState(null);
    return (
        <div>
            <Grid>
                <Box sx={style}>
                    <Box
                        sx={{
                            height: 600,
                            width: "100%",
                            align: "center",
                        }}
                    >
                        <DataGrid
                            disableSelectionOnClick
                            components={{
                                Toolbar: CustomToolbar,
                            }}
                            componentsProps={{
                                panel: {
                                    anchorEl: filterButtonEl,
                                },
                                toolbar: {
                                    setFilterButtonEl,
                                },
                            }}
                            rows={rows}
                            columns={columns}
                        />
                    </Box>
                </Box>
            </Grid>
        </div>
    );
}
