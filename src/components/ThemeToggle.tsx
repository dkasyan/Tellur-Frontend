import {Button} from "@material-ui/core"
import React from "react"

const ThemeToggle = () => {

    const handleClick = () => {
        // getTheme(true)
    }

    return (
        <Button onClick={handleClick}>
            toggle
        </Button>
    )
}

export default ThemeToggle