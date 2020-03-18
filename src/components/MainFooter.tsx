import {
    Container,
    Grid,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    FormControl,
    InputLabel,
    MenuItem,
    Select, Typography,
} from '@material-ui/core'
import React from 'react'
import { ThemeToggle } from './ThemeToggle'

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.text.primary, //TODO zmienic kolor na czarny
        color: theme.palette.background.default,
    },
}))

const MainFooter = () => {
    const classes = useStyles()
    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Grid container direction="row">
                    <Grid item md={4}>
                        <Typography variant='h4'>
                            Hobby
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText secondary="TextStopki" />
                            </ListItem>

                        </List>
                    </Grid>
                    <Grid item md={4}>
                        <List>
                            <ListItem>
                                <ListItemText primary="TextStopki2" />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item md={4}>
                        <FormControl>
                            <InputLabel id="language"></InputLabel>
                            <Select labelId="language" id="select" value="10">
                                <MenuItem value="10">Polski</MenuItem>
                                <MenuItem value="20">English</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <ThemeToggle />
                        </FormControl>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}

export default MainFooter
