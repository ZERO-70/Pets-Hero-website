import { useEffect, useState } from 'react'
import CursorGlow from './components/CursorGlow'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import MobileApps from './components/MobileApps'
import Ceo from './components/Ceo'
import FindUs from './components/FindUs'
import Footer from './components/Footer'

const THEME_KEY = 'pets-hero-theme'

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light'

  const storedTheme = window.localStorage.getItem(THEME_KEY)
  if (storedTheme === 'dark' || storedTheme === 'light') {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const isDark = theme === 'dark'
    document.documentElement.classList.toggle('theme-dark', isDark)
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light'
    window.localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  // Auto-sync with system theme changes (only if no manual preference stored)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = (e) => {
      const stored = window.localStorage.getItem(THEME_KEY)
      // Only auto-switch if user hasn't manually set a preference
      if (!stored) {
        setTheme(e.matches ? 'dark' : 'light')
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="overflow-x-hidden">
      <CursorGlow />
      <Navbar theme={theme} onToggleTheme={handleToggleTheme} />
      <Hero />
      <Services />
      <MobileApps />
      <Ceo />
      <FindUs />
      <Footer />
    </div>
  )
}

export default App
