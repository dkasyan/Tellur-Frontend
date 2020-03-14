import { observable } from 'mobx'
import { PaletteType } from '@material-ui/core'
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme'

const LIGHT = 'light'
const DARK = 'dark'

interface ThemeStoreI {
    theme: {
        type: PaletteType
        light: ThemeOptions
        dark: ThemeOptions
    }
    toggleTheme(): void
    setDarkTheme(): void
    getTheme(): ThemeOptions
}

export const ThemeStore: ThemeStoreI = {
    theme: observable({
        type: 'light',
        light: {
            palette: {
                type: 'light',
                background: {
                    default: '#fff',
                },
            },
            typography: {
                fontFamily: 'JetBrains Mono',
            },
        },
        dark: {
            palette: {
                type: 'dark',
                background: {
                    default: '#1a1b1e',
                },
            },
            typography: {
                fontFamily: 'JetBrains Mono',
            },
        },
    }),
    toggleTheme() {
        return () => {
            this.theme.type = this.theme.type === 'light' ? 'dark' : 'light'
        }
    },
    setDarkTheme() {
        this.theme.type = 'dark'
    },
    getTheme() {
        return this.theme[this.theme.type]
    },
}
