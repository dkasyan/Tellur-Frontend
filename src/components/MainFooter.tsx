import {
    BottomNavigation,
    BottomNavigationAction,
    Container,
    Grid,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    FormControl,
    InputLabel,
    MenuItem,
    Select
} from "@material-ui/core"
import React from "react"
import ThemeToggle from "./ThemeToggle"

const useStyles = makeStyles(theme => ({
    footer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: theme.palette.text.primary, //TODO zmienic kolor na czarny
        color: theme.palette.background.default
    }
}))

const MainFooter = () => {
    const classes = useStyles()
    return (
        <footer className={classes.footer}>
            <Container maxWidth="xl">
                <Grid container
                      direction="row"

                    //alignItems="center"
                >
                    <Grid item md={4}>
                        <List>
                            <ListItem>
                                <ListItemText primary="TextStopki"/>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item md={4}>
                        <List>
                            <ListItem>
                                <ListItemText primary="TextStopki2"/>
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
                        <ThemeToggle/>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}


export default MainFooter