import { AppBar, Typography, Icon } from "@material-ui/core"
import React from "react"

const Header = () => {
    return (
        <AppBar position="static">
            <Icon>
                star
            </Icon>
            <Typography>dupa</Typography>
        </AppBar>
    )
}

export default Header