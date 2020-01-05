import {Button} from '@material-ui/core'
import React from 'react'
import subsites from '../subsites'
import {Link} from 'react-router-dom'

const MainMenu = () => {
    return (
        <>
            {subsites.map((module) => (
                <Button component={Link} to={module.link}>
                    {module.name}
                </Button>
            ))}
        </>
    )
}

export default MainMenu