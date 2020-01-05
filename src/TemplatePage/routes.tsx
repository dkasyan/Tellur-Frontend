import React from 'react'
import {Route, Switch} from 'react-router'
import subsites from '../subsites';
import NoMatch from '../components/NoMatch'
import {Paper} from '@material-ui/core'

const routes = (
        <Switch>
            {subsites.map((module) => (
                <Route {...module.routeProps} key={module.name} />
            ))}
            <Route path={'/'} component={Paper}/>
            <Route component={NoMatch} />
        </Switch>
)

export default routes