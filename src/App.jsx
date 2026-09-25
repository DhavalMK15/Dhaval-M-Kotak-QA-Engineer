import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import AIAutomation from './components/AIAutomation'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dk_portfolio_theme')
      if (saved) return saved === 'dark'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('dk_portfolio_theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('dk_portfolio_theme', 'light')
    }
  }, [isDark])

  const toggleDarkMode = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setIsDark((prev) => !prev)
      })
    } else {
      document.documentElement.classList.add('theme-transition')
      setIsDark((prev) => !prev)
      window.setTimeout(() => {
        document.documentElement.classList.remove('theme-transition')
      }, 450)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 antialiased selection:bg-sky-100 selection:text-sky-900 dark:selection:bg-sky-900/50 dark:selection:text-sky-100">
      <Navbar isDark={isDark} onToggleDarkMode={toggleDarkMode} />

      <main id="main-content" tabIndex={-1}>
        <Hero isDark={isDark} />
        <Skills />
        <AIAutomation />
        <Projects />
      </main>

      <Footer />

      {/* Back to top */}
      <BackToTop />
    </div>
  )
}

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.pageYOffset > 300)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    document.getElementById('hero')?.focus()
  }

  return (
    <button
      onClick={handleClick}
      className="hidden sm:flex fixed bottom-5 right-5 w-10 h-10 rounded-xl glass-panel hover:bg-white dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-all items-center justify-center shadow-lg z-30 no-print cursor-pointer animate-fade-in"
      aria-label="Back to top"
    >
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 12V4M4 8l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}
