import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Briefcase, Mail, Sparkles, CheckCircle2, Building2 } from 'lucide-react'
import { PROFILE } from '../data/portfolioData'

const KEY_FOCUSES = [
  'Manual Testing',
  'API Testing',
  'Mobile QA',
  'Accessibility (ADA / WCAG)',
  'AI-Assisted Automation',
]

function TypedFocus() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [phase, setPhase] = useState('typing')
  const timeoutRef = useRef(null)

  useEffect(() => {
    const word = KEY_FOCUSES[index]

    if (phase === 'typing') {
      if (displayed.length < word.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(word.slice(0, displayed.length + 1))
        }, 55)
      } else {
        timeoutRef.current = setTimeout(() => setPhase('pausing'), 1500)
      }
    } else if (phase === 'pausing') {
      timeoutRef.current = setTimeout(() => setPhase('deleting'), 200)
    } else if (phase === 'deleting') {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1))
        }, 25)
      } else {
        setIndex((i) => (i + 1) % KEY_FOCUSES.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(timeoutRef.current)
  }, [displayed, phase, index])

  return (
    <span className="inline-flex items-center" aria-live="polite">
      <span className="text-sky-600 dark:text-sky-400 font-bold">{displayed}</span>
      <span className="ml-1.5 w-0.5 h-6 sm:h-7 bg-sky-600 dark:bg-sky-400 animate-pulse inline-block" aria-hidden="true" />
    </span>
  )
}

export default function Hero({ isDark = false }) {
  const handleScroll = (sectionId) => {
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const HIGHLIGHT_POINTS = [
    '3+ Years Manual, API & Mobile QA',
    'ADA / WCAG Accessibility Focus',
    'Postman REST API Testing',
    'AI-Assisted Automation (Selenium)',
  ]

  const STATS = [
    { value: '3+ Yrs', label: 'QA Experience', icon: '🎯' },
    { value: '5+', label: 'Platforms Tested', icon: '🚀' },
    { value: '500+', label: 'Test Cases Executed', icon: '📋' },
    { value: '100%', label: 'STLC Execution', icon: '⚡' },
  ]

  return (
    <section
      id="hero"
      className="relative pt-20 pb-8 sm:pt-24 sm:pb-10 overflow-hidden border-b border-slate-200/90 dark:border-slate-800 bg-gradient-to-b from-sky-50/70 via-blue-50/30 to-white dark:from-[#020817] dark:via-[#0a0f1e] dark:to-[#050d1a] transition-colors duration-300"
      aria-label="Introduction"
    >
      {/* Aurora Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-40 dark:opacity-20 transition-opacity duration-300"
          style={{ background: 'radial-gradient(circle, #38bdf8 0%, transparent 70%)', filter: 'blur(70px)' }}
        />
        <div
          className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full opacity-30 dark:opacity-15 transition-opacity duration-300"
          style={{ background: 'radial-gradient(circle, #818cf8 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
        <div
          className="absolute bottom-0 right-1/3 w-[350px] h-[350px] rounded-full opacity-20 dark:opacity-10 transition-opacity duration-300"
          style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)', filter: 'blur(90px)' }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #0284c7 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="section-container relative">
        <div className="max-w-3xl mb-5 sm:mb-6">
          {/* Status pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1 rounded-full bg-white/80 dark:bg-slate-800/70 border border-slate-200/90 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 text-[11px] sm:text-[12px] font-semibold mb-3 backdrop-blur-sm max-w-full shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
            <span className="truncate sm:whitespace-normal">
              QA Engineer at <strong className="text-sky-600 dark:text-sky-400 font-bold">{PROFILE.currentCompany}</strong> · Rajkot, India
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-2">
            Dhaval Kotak
          </h1>

          {/* Typed subtitle */}
          <div className="text-sm sm:text-xl font-bold text-slate-600 dark:text-slate-300 mb-4 min-h-[32px] flex items-center">
            <TypedFocus />
          </div>

          {/* Highlight badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 max-w-2xl">
            {HIGHLIGHT_POINTS.map((pt) => (
              <div
                key={pt}
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/80 dark:bg-slate-800/50 border border-slate-200/90 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 text-[12px] sm:text-[13px] font-medium hover:border-sky-400/50 hover:text-sky-700 dark:hover:text-white transition-all duration-200 backdrop-blur-sm shadow-2xs"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400 flex-shrink-0" />
                <span className="leading-snug">{pt}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col xs:flex-row flex-wrap gap-2.5 sm:gap-3">
            <button
              onClick={() => handleScroll('projects')}
              className="w-full xs:w-auto justify-center inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-400 text-white font-semibold text-[13px] transition-all shadow-md shadow-sky-500/20 active:scale-95 cursor-pointer"
            >
              <span>Projects</span>
              <ArrowRight size={15} />
            </button>

            <button
              onClick={() => handleScroll('skills')}
              className="w-full xs:w-auto justify-center inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 dark:bg-slate-800/70 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-200 font-semibold text-[13px] transition-all backdrop-blur-sm shadow-2xs active:scale-95 cursor-pointer"
            >
              <Briefcase size={15} />
              <span>Key Skills</span>
            </button>

            <button
              onClick={() => handleScroll('contact')}
              className="w-full xs:w-auto justify-center inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white/10 dark:hover:bg-white/15 border border-slate-900 dark:border-white/10 text-white font-semibold text-[13px] transition-all backdrop-blur-sm shadow-2xs active:scale-95 cursor-pointer"
            >
              <Mail size={15} />
              <span>Contact</span>
            </button>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-5 border-t border-slate-200/90 dark:border-slate-800">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="bg-white/80 dark:bg-slate-800/40 border border-slate-200/90 dark:border-slate-700/50 rounded-xl py-2.5 sm:py-3 px-2 sm:px-4 text-center backdrop-blur-sm hover:border-sky-400/50 dark:hover:border-sky-500/30 transition-colors shadow-2xs"
            >
              <div className="flex items-center justify-center gap-1.5 mb-0.5">
                <span className="text-xs" aria-hidden="true">{s.icon}</span>
                <span className="text-base sm:text-xl font-extrabold text-sky-600 dark:text-sky-400 font-mono">{s.value}</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 font-medium text-[11px] sm:text-[11.5px] truncate">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
