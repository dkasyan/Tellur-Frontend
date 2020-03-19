import React from 'react'
import { Button, makeStyles, createStyles, Theme } from '@material-ui/core'
import ModuleProps from '../../types/ModuleProps'
import { FirstStore } from './store'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
    button: {},
}))

const First = () => {
    const classes = useStyles()

    return (
       // <Grid className={classes.button} container direction="row" justify="center" alignItems="center">
        <div>
        <Grid container spacing={1} className={classes.button} direction="row" justify="center" alignItems="center">
            <Grid container item xs={12} spacing={3}>
                <p>Cp</p>
            </Grid>
            <Grid container item xs={12} spacing={3}>
                <p>Cp</p>
            </Grid>
            <Grid container item xs={12} spacing={3}>
                <p>Cp</p>
            </Grid>
        </Grid>
        </div>

/*        <Button className={classes.button} type="submit" fullWidth variant="contained" color="primary">
            First Modulesss
        </Button>*/
    )
}

/*const Gallery = () => {
    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <p>Dupa</p>
            <p>DWA</p>
        </Grid>
    )
}*/

interface StateTypes {}

const moduleProps: ModuleProps = {
    routeProps: {
        path: '/first',
        component: First,
    },
    name: 'First',
    link: '/first',
    stateTypes: {},
    storeKey: 'first',
    store: new FirstStore(),
}

export default moduleProps
