import { useState } from 'react'
import { PROFILE } from '../data/portfolioData'
import { Mail, ArrowUp, Sparkles, Check, Copy } from 'lucide-react'

function LinkedinIcon({ size = 15, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function GithubIcon({ size = 15, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [emailCopied, setEmailCopied] = useState(false)

  const handleNav = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.contact.email)
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  return (
    <footer id="contact" className="border-t border-slate-200/90 dark:border-slate-800 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 relative overflow-hidden transition-colors duration-300" role="contentinfo">
      {/* Background ambient light */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-sky-100/20 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container py-6 sm:py-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 mb-6 items-start">
          {/* Brand & QA Overview */}
          <div className="md:col-span-2 lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-xs shadow-sm transition-transform duration-300 hover:scale-105">
                DK
              </div>
              <span className="font-extrabold text-slate-900 dark:text-white text-base tracking-tight">
                Dhaval <span className="text-sky-600 dark:text-sky-400">Kotak</span>
              </span>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-[13px] leading-relaxed max-w-md font-medium">
              QA Engineer at <span className="font-semibold text-slate-900 dark:text-white">{PROFILE.currentCompany}</span> specializing in Manual, API, Mobile, and ADA Accessibility Testing, powered by AI automation.
            </p>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-[11px] font-semibold max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
              <span className="truncate sm:whitespace-normal">Rajkot, Gujarat, India · Open for Remote & On-Site</span>
            </div>
          </div>

          {/* Quick Links with animated hover dots */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-slate-900 dark:text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={12} className="text-sky-600 dark:text-sky-400" />
              Quick Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-xs" role="list">
              {[
                { label: 'Home', id: 'hero' },
                { label: 'Skills', id: 'skills' },
                { label: 'AI & Auto', id: 'ai-automation' },
                { label: 'Projects', id: 'projects' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className="w-full text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 font-semibold transition-colors flex items-center gap-2 py-1 text-left text-xs cursor-pointer group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-sky-500 transition-colors" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Connect & Social Badges */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-slate-900 dark:text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={12} className="text-sky-600 dark:text-sky-400" />
              Direct Connect
            </h3>
            <div className="space-y-2.5">
              {/* Interactive Email Copy / Click Bar */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs group hover:border-sky-300 dark:hover:border-sky-500 transition-colors">
                <a
                  href={`mailto:${PROFILE.contact.email}`}
                  className="flex items-center gap-2 text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 text-xs font-mono font-medium truncate flex-1 min-w-0 mr-2"
                >
                  <Mail size={14} className="text-sky-600 dark:text-sky-400 flex-shrink-0" />
                  <span className="truncate">{PROFILE.contact.email}</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-sky-600 hover:bg-sky-50 dark:hover:bg-slate-800 transition-colors flex-shrink-0 cursor-pointer"
                  title="Copy email"
                  aria-label="Copy email"
                >
                  {emailCopied ? <Check size={14} className="text-emerald-600 dark:text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Social Channels with interactive hover cards */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={PROFILE.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-sky-700 dark:hover:text-sky-400 hover:border-sky-300 dark:hover:border-sky-500 text-xs font-bold shadow-2xs hover:shadow-xs transition-all duration-200 group"
                  aria-label="LinkedIn profile"
                >
                  <LinkedinIcon size={14} className="text-blue-600 dark:text-blue-400 transition-transform duration-200 group-hover:scale-110" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={PROFILE.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-500 text-xs font-bold shadow-2xs hover:shadow-xs transition-all duration-200 group"
                  aria-label="GitHub profile"
                >
                  <GithubIcon size={14} className="text-slate-900 dark:text-white transition-transform duration-200 group-hover:scale-110" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar with Back-to-Top trigger */}
        <div className="border-t border-slate-200/80 dark:border-slate-800 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <p>© {currentYear} Dhaval M Kotak · QA Portfolio</p>

          <button
            onClick={handleScrollTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 text-xs font-bold transition-all duration-200 shadow-2xs group cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp size={12} className="transition-transform duration-200 group-hover:-translate-y-0.5 text-sky-600 dark:text-sky-400" />
          </button>
        </div>
      </div>
    </footer>
  )
}
