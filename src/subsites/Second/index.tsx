import React, {MouseEvent} from 'react';
import {Button, CircularProgress, makeStyles} from '@material-ui/core'
import ModuleProps from '../../types/ModuleProps';

const useStyles = makeStyles(theme => ({
    button: {}
}))

const Second = () => {
    const classes = useStyles()
    const [value, setValue] = React.useState<number>(0);

    const handleClick = (event: MouseEvent) => {
        setValue(value + 10);
    };

    const handleReset = () => {
        setValue(0);
    };
    return (
        <>
            <Button className={classes.button} type="submit" variant="contained" color="primary" onClick={handleClick}>
                Add
            </Button>
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
    reducers: {},
    stateTypes: {},
};

export default moduleProps;