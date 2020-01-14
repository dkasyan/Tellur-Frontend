import { RouteProps } from 'react-router'

type ModuleProps = {
    routeProps: RouteProps
    name: string
    link: string
    reducers: object
    stateTypes: any
    storeKey: string
    store: any
}

export default ModuleProps
