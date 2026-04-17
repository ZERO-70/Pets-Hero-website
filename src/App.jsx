import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import CursorGlow from './components/CursorGlow'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SEO from './components/SEO'

const Services = lazy(() => import('./components/Services'))
const MobileApps = lazy(() => import('./components/MobileApps'))
const Ceo = lazy(() => import('./components/Ceo'))
const FindUs = lazy(() => import('./components/FindUs'))
const Footer = lazy(() => import('./components/Footer'))

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
  const manualToggle = useRef(false)

  useEffect(() => {
    const isDark = theme === 'dark'
    document.documentElement.classList.toggle('theme-dark', isDark)
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light'
    // Only save to localStorage if user manually toggled (not auto-sync)
    if (manualToggle.current) {
      window.localStorage.setItem(THEME_KEY, theme)
    }
  }, [theme])

  // Auto-sync with system theme changes (only if no manual preference stored)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = (e) => {
      const stored = window.localStorage.getItem(THEME_KEY)
      // Only auto-switch if user hasn't manually set a preference
      if (!stored) {
        manualToggle.current = false
        setTheme(e.matches ? 'dark' : 'light')
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const handleToggleTheme = () => {
    manualToggle.current = true
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="overflow-x-hidden">
      {/* Inject all JSON-LD structured data schemas into <head> */}
      <SEO />

      <CursorGlow />
      <Navbar theme={theme} onToggleTheme={handleToggleTheme} />

      {/* Semantic <main> landmark — important for accessibility and SEO */}
      <main id="main-content" aria-label="Pets Hero main content">
        <Hero />
        <Suspense fallback={null}>
          <Services />
          <MobileApps />
          <Ceo />
          <FindUs />
        </Suspense>
      </main>

      {/* Footer is outside <main> per HTML5 landmark best practices */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
