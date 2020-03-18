import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        resources: {
            'en-US': {
                translation: {
                    toggleThemeButtonText: 'Toggle Theme',
                    intro: 'Hello my name is',
                },
            },
            'pl-PL': {
                translation: {
                    toggleThemeButtonText: 'Zmień motyw',
                    intro: 'Hello my name is',
                },
            },
        },
    })

export const LanguageStore = {
    dictionary: [],
}
