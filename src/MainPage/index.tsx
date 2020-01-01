import React from 'react'
import routes from './routes'
import {Container, CssBaseline, Paper, Typography} from '@material-ui/core'
import MainMenu from './MainMenu'

const MainPage = (
    <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <Typography>
            Main Page
        </Typography>
        <MainMenu/>
        {/*<NavBar />*/}
        <Paper>
            {routes}
        </Paper>
    </Container>
)

export default MainPage