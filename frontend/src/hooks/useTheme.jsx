import { useLayoutEffect } from "react"
import { useState } from "react"

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches
const defaultTheme = isDarkTheme ? 'dark' : 'light'

export const useTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem('app-theme') || defaultTheme
    )

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    return {theme, setTheme}
}