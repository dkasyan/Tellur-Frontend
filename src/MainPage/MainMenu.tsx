import {Button} from '@material-ui/core'
import React from 'react'
import modules from '../modules'
import {Link} from 'react-router-dom'

const MainMenu = () => {
    return (
        <>
            {modules.map((module) => (
                <Button component={Link} to={module.link}>
                    {module.name}
                </Button>
            ))}
        </>
    )
}

export default MainMenu