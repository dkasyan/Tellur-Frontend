import * as React from 'react';
import {History} from 'history'
import {ConnectedRouter} from "connected-react-router";
import template from './TemplatePage'
import {useState, useEffect} from 'react';
import {createMuiTheme, MuiThemeProvider, Button} from '@material-ui/core';
import {ThemeOptions} from '@material-ui/core/styles/createMuiTheme';

interface AppProps {
    history: History
}


const App = ({history}: AppProps) => {
    const [theme, setTheme] = useState<ThemeOptions>({palette: {type: "dark"}})

    const toggleTheme = () => {
        let newPaletteType: "light" | "dark" = theme.palette && theme.palette.type === "light" ? "dark" : "light"
        setTheme({palette: {type: newPaletteType}})
        // return theme
    } //TODO Big todo Uzyc reduxa do zmiany motywu

    const muiTheme = createMuiTheme(theme)

    return (
        <ConnectedRouter history={history}>
            <MuiThemeProvider theme={muiTheme}>
            {template}
            </MuiThemeProvider>
        </ConnectedRouter>

    )
}

export default App
