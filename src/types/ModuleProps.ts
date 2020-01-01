import React from 'react'
import {RouteProps} from 'react-router'

type ModuleProps = {
    routeProps: RouteProps,
    name: string,
    link: string,
    reducers: object,
    stateTypes: any,
}

export default ModuleProps