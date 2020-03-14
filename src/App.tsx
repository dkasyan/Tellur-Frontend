import * as React from 'react'
import { History } from 'history'
import template from './TemplatePage'
import { createMuiTheme, MuiThemeProvider, useMediaQuery } from '@material-ui/core'
import { Router } from 'react-router'
import { useObserver } from 'mobx-react-lite'
import { browserHistory, storeContext } from './state'
import { useMemo } from 'react'

interface AppProps {
    history: History
}

export const useStores = () => {
    const store = React.useContext(storeContext)
    if (!store) {
        // this is especially useful in TypeScript so you don't need to be checking for null all the time
        throw new Error('useStore must be used within a StoreProvider.')
    }
    return store
}

const App = () => {
    const { ThemeStore } = useStores()
    const darkTheme = useMediaQuery('(prefers-color-scheme: dark)')

    useMemo(() => darkTheme && ThemeStore.setDarkTheme(), [darkTheme])

    const muiTheme = useObserver(() => {
        return createMuiTheme(ThemeStore.getTheme())
    })

    return (
        <Router history={browserHistory}>
            <MuiThemeProvider theme={muiTheme}>{template}</MuiThemeProvider>
        </Router>
    )
}

export default App
