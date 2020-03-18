import modules from '../subsites'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
import { createBrowserHistory } from 'history'
import { ThemeStore } from './ThemeStore'
import * as React from 'react'
import { LanguageStore } from './LanguageStore'

const subSitesStores = modules.reduce(
    (accumulator, module) => ({
        ...accumulator,
        [module.storeKey]: module.store,
    }),
    {},
)
const configStores = {
    ThemeStore,
    LanguageStore,
}

const routingStore = new RouterStore()
export const browserHistory = syncHistoryWithStore(createBrowserHistory(), routingStore)

const store ={
    config: {},
    app: {
        title: 'MobX Router Example App',
        user: null,
    },
    //here's how we can plug the routerStore into our stores
    routing: routingStore,
    ...subSitesStores,
    ...configStores,
}

export const storeContext = React.createContext<any | null>(store)