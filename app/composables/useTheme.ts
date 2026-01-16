export type Theme = 'light' | 'dark' | 'system'

export const useTheme = () => {
    const theme = useState<Theme>('theme', () => 'system')

    const updateRootClass = (isDark: boolean) => {
        if (import.meta.client) {
            const root = document.documentElement
            if (isDark) {
                root.classList.add('dark')
            } else {
                root.classList.remove('dark')
            }
        }
    }

    const resolveTheme = (t: Theme): boolean => {
        if (t === 'system') {
            if (import.meta.client) {
                return window.matchMedia('(prefers-color-scheme: dark)').matches
            }
            return true // Default server-side to dark or light? User says "page is currently all dark", so maybe default dark.
        }
        return t === 'dark'
    }

    const setTheme = (newTheme: Theme) => {
        theme.value = newTheme
        if (import.meta.client) {
            localStorage.setItem('theme', newTheme)
            updateRootClass(resolveTheme(newTheme))
        }
    }

    const initTheme = () => {
        if (import.meta.client) {
            const saved = localStorage.getItem('theme') as Theme | null
            if (saved && ['light', 'dark', 'system'].includes(saved)) {
                theme.value = saved
            } else {
                theme.value = 'system' // Default
            }

            // Initial apply
            updateRootClass(resolveTheme(theme.value))

            // Listen for system changes if system
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                if (theme.value === 'system') {
                    updateRootClass(e.matches)
                }
            })
        }
    }

    return {
        theme,
        setTheme,
        initTheme
    }
}
