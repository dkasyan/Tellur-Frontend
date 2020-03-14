import modules from '../subsites'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
import { createBrowserHistory } from 'history'

const browserHistory = createBrowserHistory()

const routingStore = new RouterStore()
// const subSitesStores = modules.map(module => ({ [module.name]: module.store }))

const subSitesStores = modules.reduce(
    (accumulator, module) => ({
        ...accumulator,
        [module.storeKey]: module.store,
    }),
    {},
)

export const createStores = () => ({
    store: {},
    app: {
        title: 'MobX Router Example App',
        user: null,
    },
    //here's how we can plug the routerStore into our stores
    routing: routingStore,
    ...subSitesStores,
})

export const createHistory = () => syncHistoryWithStore(browserHistory, routingStore)
