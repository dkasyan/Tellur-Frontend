import React from 'react'
import routes from './routes'
import {Container, CssBaseline, Paper, Typography, AppBar, Icon} from '@material-ui/core'
import MainMenu from '../components/MainMenu'
import Header from "../components/Header"

const TemplatePage = (
    <>
        <CssBaseline/>
        <Container component="main" maxWidth="lg">
            <Header/>
            <Typography>dupa</Typography>

            {/*<Typography variant='h1'>*/}
            {/*    Main Page*/}
            {/*</Typography>*/}
            {/*<MainMenu/>*/}
            {/*/!*<NavBar />*!/*/}
            {/*<Paper>*/}
            {/*    {routes}*/}
            {/*</Paper>*/}
        </Container>
    </>
)

export default TemplatePage