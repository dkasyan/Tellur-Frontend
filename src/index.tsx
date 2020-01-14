import * as serviceWorker from './serviceWorker'
import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'mobx-react'
import { createHistory, createStores } from './state'

// const stores = configureStore()

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider {...createStores()}>
                <App history={createHistory()} />
            </Provider>
        </AppContainer>,
        document.getElementById('root'),
    )
}

render()

// Hot reloading
if (module.hot) {
    // Reload components
    module.hot.accept('./App', () => {
        render()
    })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
