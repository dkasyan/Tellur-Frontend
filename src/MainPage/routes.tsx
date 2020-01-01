import React from 'react'
import {Route, Switch} from 'react-router'
import modules from '../modules';
import NoMatch from '../components/NoMatch'
import {Paper} from '@material-ui/core'

const routes = (
        <Switch>
            {modules.map((module) => (
                <Route {...module.routeProps} key={module.name} />
            ))}
            <Route path={'/'} component={Paper}/>
            <Route component={NoMatch} />
        </Switch>
)

export default routes