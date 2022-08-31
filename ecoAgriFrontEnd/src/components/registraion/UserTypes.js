import React from 'react'
import PropTypes from 'prop-types'
import { Button, Grid, Typography } from '@mui/material'
import CenteredBox from '../ui/CenteredBox'
import { useDispatch } from 'react-redux'
import { userTypeSelectorButtonActions } from '../../store/userType-selector-slice'

function UserTypes(props) {

    const dispatch = useDispatch();
    const typeSelectorHandler = () => {
        dispatch(userTypeSelectorButtonActions.setSelectedSignupButton(props.userType));
    }

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <CenteredBox align="center">
                        <Button onClick={typeSelectorHandler}>{props.icon}</Button>
                    </CenteredBox>
                </Grid>
                <Grid item xs={12}>
                    <CenteredBox align="center">
                        <Typography>{props.userType}</Typography>
                    </CenteredBox>
                </Grid>
            </Grid>
        </div>
    )
}

UserTypes.propTypes = {
    icon: PropTypes.element,
}

export default UserTypes
