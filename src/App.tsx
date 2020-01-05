import * as React from 'react';
import { History } from 'history'
import {ConnectedRouter} from "connected-react-router";
import template from './TemplatePage'

interface AppProps {
    history: History
}

const App = ({ history }: AppProps) => {
    return (
        <ConnectedRouter history={history}>
            { template }
        </ConnectedRouter>
    )
}

export default App
