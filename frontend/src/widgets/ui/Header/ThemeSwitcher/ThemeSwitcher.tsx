import styles from './ThemeSwitcher.module.scss'
import React from 'react'
import useTheme from '../../../../shared/lib/hooks/useTheme'

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme()
    const handleLightThemeClick = () => {
        setTheme('light')
    }
    const handleDarkThemeClick = () => {
        setTheme('dark')
    }
    return (
        <div className={styles['theme-switcher']}>
            <button
                onClick={handleDarkThemeClick}
                className={
                    theme == 'dark'
                        ? `${styles['theme-switcher__btn']} ${styles['theme-switcher__btn--active']}`
                        : styles['theme-switcher__btn']
                }
            >
                Темная
            </button>
            <button
                onClick={handleLightThemeClick}
                className={
                    theme == 'light'
                        ? `${styles['theme-switcher__btn']} ${styles['theme-switcher__btn--active']}`
                        : styles['theme-switcher__btn']
                }
            >
                Светлая
            </button>
        </div>
    )
}

export default ThemeSwitcher
