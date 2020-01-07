import React from 'react'
import routes from './routes'
import {Container, CssBaseline, Paper, Typography, AppBar, Icon} from '@material-ui/core'
import MainMenu from '../components/MainMenu'
import Header from "../components/Header"
import MainFooter from "../components/MainFooter"

const TemplatePage = (
    <>
        <CssBaseline/>
        <Container component="main" maxWidth="xl">
            <Header/>
            <Paper>
                {routes}
            </Paper>
            {/*<Typography variant='h1'>*/}
            {/*    Main Page*/}
            {/*</Typography>*/}
            {/*<MainMenu/>*/}
            {/*/!*<NavBar />*!/*/}
            {/*<Paper>*/}
            {/*    {routes}*/}
            {/*</Paper>*/}
        </Container>
        <MainFooter/>
    </>
)

export default TemplatePage