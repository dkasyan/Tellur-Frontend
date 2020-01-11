import React from 'react';
import {Button, makeStyles} from '@material-ui/core'
import ModuleProps from '../../types/ModuleProps';
import counterReducer from './reducers'

const useStyles = makeStyles(theme => ({
    button: {}
}))

const First = () => {
    const classes = useStyles()

    return (
        <Button className={classes.button} type="submit" fullWidth variant="contained" color="primary">
            First Module
        </Button>
    )
}

interface StateTypes {

}

const moduleProps: ModuleProps = {
    routeProps: {
        path: '/first',
        component: First,
    },
    name: 'First',
    link: '/first',
    reducers: {count: counterReducer},
    stateTypes: {},
};

export default moduleProps;