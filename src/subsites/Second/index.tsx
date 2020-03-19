import React, {MouseEvent, useState} from 'react';
import {Button, CircularProgress, makeStyles} from '@material-ui/core'
import ModuleProps from '../../types/ModuleProps';
import { FirstStore } from '../First/store'
import { SecondStore } from './store'

const useStyles = makeStyles(theme => ({
    button: {}
}))

const Second = () => {
    const classes = useStyles()
    const [value, setValue] = useState<number>(0)

    const handleClick = (event: MouseEvent) => {
        setValue(value + 10)
    };

    const handleReset = () => {
        setValue(0)
    };
    return (
        <>
            <Button className={classes.button} type="submit" variant="contained" color="primary" onClick={handleClick}>
                Add
            </Button>
            <Button type="submit" variant="contained" color="secondary" onClick={handleReset}>
                Reset
            </Button>
            <CircularProgress variant="static" value={value}/>
        </>
    )
}


const moduleProps: ModuleProps = {
    routeProps: {
        path: '/second',
        component: Second,
    },
    name: 'Second',
    link: '/second',
    stateTypes: {},
    storeKey: 'second',
    store: new SecondStore(),
};

export default moduleProps;