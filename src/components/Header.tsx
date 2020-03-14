import {AppBar, Icon, Toolbar, makeStyles} from "@material-ui/core"
import React from "react"
import MainMenu from "./MainMenu"
import SocialMedia from "./SocialMedia"

const useStyles = makeStyles(theme => ({
    toolbar: {
        justifyContent: "space-between"
    }
}))

const Header = () => {
    const styles = useStyles()
    return (
        <AppBar position="static">
            <Toolbar className={styles.toolbar}>
                <Icon>
                    star
                </Icon>
                <MainMenu/>
                <SocialMedia/>
            </Toolbar>

        </AppBar>
    )
}

export default Header