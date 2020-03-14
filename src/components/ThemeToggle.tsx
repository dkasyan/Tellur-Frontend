import { Button } from '@material-ui/core'
import React from 'react'
import { useStores } from '../App'
import { useTranslation } from 'react-i18next'

export const ThemeToggle = () => {
    const { ThemeStore } = useStores()
    const [t] = useTranslation()

    return (
        <Button color={'primary'} onClick={ThemeStore.toggleTheme()}>
            {t('toggleThemeButton')}
        </Button>
    )
}
