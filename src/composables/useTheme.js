import { ref, onMounted } from 'vue'

const theme = ref('light')

export function useTheme() {
  const setTheme = (value) => {
    theme.value = value
    if (value === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', value)
  }

  const toggleTheme = () => {
    setTheme(theme.value === 'light' ? 'dark' : 'light')
  }

  onMounted(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      setTheme(saved)
    } else {
      setTheme('light')
    }
  })

  return { theme, toggleTheme }
}
