import { useState, useEffect } from 'react'
import { useActiveSection } from '../hooks/useInView'
import { Menu, X, Sparkles, Send, Sun, Moon } from 'lucide-react'
import { PROFILE } from '../data/portfolioData'

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'Skills & Tools', href: '#skills' },
  { label: 'AI & Automation', href: '#ai-automation' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const SECTION_IDS = ['hero', 'skills', 'ai-automation', 'projects', 'contact']

// Ease-in-out cubic for buttery smooth scroll
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

function smoothScrollTo(targetY, duration = 600) {
  const startY = window.pageYOffset
  const diff = targetY - startY
  let startTime = null

  function step(currentTime) {
    if (!startTime) startTime = currentTime
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    window.scrollTo(0, startY + diff * easeInOutCubic(progress))
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

export default function Navbar({ isDark = false, onToggleDarkMode }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const id = href.replace('#', '')

    if (id === 'hero') {
      smoothScrollTo(0, 600)
      return
    }

    const el = document.getElementById(id)
    if (!el) return

    const navOffset = 72
    const target = el.getBoundingClientRect().top + window.pageYOffset - navOffset
    smoothScrollTo(target, 600)
  }


  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header
        className="fixed top-0 left-0 right-0 z-40 glass-nav shadow-md dark:shadow-2xl dark:shadow-slate-950/90 transition-all duration-300"
        role="banner"
      >

        <div className="section-container">
          <nav
            className="flex items-center justify-between h-16"
            aria-label="Main navigation"
          >
            {/* Logo with pulse glow on hover */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
              className="flex items-center gap-2.5 group"
              aria-label="Dhaval Kotak - Home"
            >
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-sm shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
                  DK
                </div>
                {/* Live Online Ping Indicator */}
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                </span>
              </div>
              <div className="hidden sm:block">
                <span className="font-extrabold text-slate-900 dark:text-white tracking-tight text-[15px] group-hover:text-sky-600 transition-colors">
                  Dhaval M <span className="text-sky-600 dark:text-sky-400">Kotak</span>
                </span>
                <span className="block text-[10.5px] font-semibold text-slate-500 dark:text-slate-400 tracking-wider uppercase -mt-0.5">
                  QA Engineer
                </span>
              </div>
            </a>

            {/* Desktop Nav with Floating Glass Indicator */}
            <ul className="hidden md:flex items-center gap-1.5 p-1 rounded-2xl glass-panel shadow-2xs" role="list">
              {NAV_ITEMS.map((item) => {
                const sectionId = item.href.replace('#', '')
                const isActive = activeSection === sectionId
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                      className={`relative px-3.5 py-1.5 text-[13px] font-semibold rounded-xl transition-all duration-200 block ${
                        isActive
                          ? 'text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/70 shadow-xs font-bold'
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>

            {/* Theme Toggle + CTA + Mobile Toggle */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Modern Glass Morphing Theme Switch */}
              <button
                type="button"
                onClick={onToggleDarkMode}
                className="relative inline-flex items-center justify-center w-10 h-10 rounded-2xl glass-panel hover:bg-white dark:hover:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-xs transition-all duration-300 group cursor-pointer overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 active:scale-90"
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {/* Ambient Soft Glow Flare */}
                <span
                  className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none ${
                    isDark
                      ? 'bg-gradient-to-tr from-sky-500/15 via-blue-500/10 to-indigo-500/15 opacity-100'
                      : 'bg-gradient-to-tr from-amber-400/20 via-orange-400/10 to-amber-300/15 opacity-0 group-hover:opacity-100'
                  }`}
                  aria-hidden="true"
                />

                {/* Sun Icon (Rotates, scales and fades with smooth easing) */}
                <Sun
                  size={18}
                  className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
                    isDark
                      ? 'rotate-90 scale-0 opacity-0'
                      : 'rotate-0 scale-100 opacity-100 text-amber-500 group-hover:rotate-45'
                  }`}
                />

                {/* Moon Icon (Rotates, scales and fades with smooth easing) */}
                <Moon
                  size={18}
                  className={`absolute transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
                    isDark
                      ? 'rotate-0 scale-100 opacity-100 text-sky-400 group-hover:-rotate-12'
                      : '-rotate-90 scale-0 opacity-0'
                  }`}
                />
              </button>

              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white text-xs font-bold shadow-xs hover:shadow-md btn-hover transition-all duration-200 group"
              >
                <span>Get in Touch</span>
                <Send size={12} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden min-w-[42px] min-h-[42px] flex items-center justify-center p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 bottom-0 w-[84vw] max-w-[310px] bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 z-50 transform transition-transform duration-300 ease-in-out md:hidden shadow-2xl flex flex-col justify-between ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div>
          <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800">
            <span className="font-bold text-slate-900 dark:text-white text-base">Navigation</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close navigation menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav aria-label="Mobile navigation" className="p-3">
            <ul className="space-y-1" role="list">
              {NAV_ITEMS.map((item) => {
                const sectionId = item.href.replace('#', '')
                const isActive = activeSection === sectionId
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                      className={`flex items-center px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                        isActive
                          ? 'bg-sky-50 dark:bg-sky-950/70 text-sky-600 dark:text-sky-400 font-bold border-l-2 border-sky-500 pl-3.5'
                          : 'text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>

        {/* Mobile Drawer Footer with Theme Switch & CTA */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
          <button
            type="button"
            onClick={onToggleDarkMode}
            className="w-full flex items-center justify-between p-3 rounded-2xl glass-panel border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <div className="flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                isDark ? 'bg-sky-950/80 text-sky-400 border border-sky-800/80' : 'bg-amber-50 text-amber-500 border border-amber-200'
              }`}>
                {isDark ? <Moon size={16} /> : <Sun size={16} />}
              </span>
              <div className="text-left">
                <span className="block text-xs font-bold text-slate-900 dark:text-white">
                  {isDark ? 'Dark Mode' : 'Light Mode'}
                </span>
                <span className="block text-[11px] text-slate-500 dark:text-slate-400">
                  {isDark ? 'Switch to light theme' : 'Switch to dark theme'}
                </span>
              </div>
            </div>

            <div className={`w-11 h-6 rounded-full p-0.5 transition-colors duration-300 flex items-center ${
              isDark ? 'bg-sky-600 justify-end' : 'bg-slate-300 dark:bg-slate-700 justify-start'
            }`}>
              <div className="w-5 h-5 rounded-full bg-white shadow-sm" />
            </div>
          </button>

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
            className="flex items-center justify-center px-4 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-sm transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </>
  )
}

