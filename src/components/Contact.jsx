import { useState } from 'react'
import { PROFILE } from '../data/portfolioData'
import { Mail, ExternalLink, Check, Copy, MapPin, Sparkles } from 'lucide-react'

function LinkedinIcon({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function GithubIcon({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.contact.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <section
      id="contact"
      className="py-5 sm:py-6 bg-slate-50/70 dark:bg-slate-950/70 border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-300"
      aria-labelledby="contact-heading"
    >
      <div className="section-container">
        {/* Compact Header with Location Pill */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3.5 mb-4 sm:mb-4.5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/70 border border-sky-100 dark:border-sky-800 text-sky-700 dark:text-sky-300 text-[11.5px] font-bold tracking-wide uppercase mb-1">
              <Sparkles size={12} className="text-sky-600 dark:text-sky-400" />
              <span>Let's Talk</span>
            </div>
            <h2
              id="contact-heading"
              className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight"
            >
              Direct <span className="text-sky-600 dark:text-sky-400">Contact</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-[13px] mt-0.5 max-w-xl">
              Available for full-time QA roles, contract engagements, and test automation consulting.
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl glass-panel text-[12px] font-semibold text-slate-600 dark:text-slate-300 self-start md:self-auto border border-slate-200/80 dark:border-slate-800 shadow-2xs">
            <MapPin size={13} className="text-sky-600 dark:text-sky-400 flex-shrink-0" />
            <span>Rajkot, Gujarat, India · Open for Remote & On-site</span>
          </div>
        </div>

        {/* 3 Compact Action Contact Cards */}
        <div className="grid md:grid-cols-3 gap-3.5 sm:gap-4">
          {/* Email */}
          <div className="card-modern card-top-accent p-3.5 sm:p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-8.5 h-8.5 rounded-lg bg-gradient-to-br from-sky-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 border border-sky-100 dark:border-slate-700 text-sky-600 dark:text-sky-400 flex items-center justify-center shadow-2xs">
                  <Mail size={16} />
                </div>
                <h3 className="text-[14.5px] sm:text-[15px] font-bold text-slate-900 dark:text-white">Email</h3>
              </div>

              {/* Email with copy trigger */}
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 mb-3 group/email">
                <a
                  href={`mailto:${PROFILE.contact.email}`}
                  className="text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 font-mono text-[11.5px] truncate font-medium"
                >
                  {PROFILE.contact.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1 rounded text-slate-400 hover:text-sky-600 hover:bg-white dark:hover:bg-slate-700 transition-all flex-shrink-0 relative"
                  aria-label="Copy email address"
                  title={copied ? 'Copied!' : 'Copy to clipboard'}
                >
                  {copied ? (
                    <Check size={13} className="text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Copy size={13} />
                  )}
                  {copied && (
                    <span className="absolute -top-7 right-0 px-2 py-0.5 rounded-md bg-slate-900 dark:bg-slate-800 text-white text-[10px] font-semibold whitespace-nowrap shadow-sm pointer-events-none">
                      Copied!
                    </span>
                  )}
                </button>
              </div>
            </div>

            <a
              href={`mailto:${PROFILE.contact.email}`}
              className="w-full mt-3.5 flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-[12.5px] sm:text-[13px] shadow-2xs btn-hover transition-colors"
            >
              <span>Send Email</span>
              <ExternalLink size={13} />
            </a>
          </div>

          {/* LinkedIn */}
          <div className="card-modern card-top-accent p-3.5 sm:p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-8.5 h-8.5 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 border border-blue-100 dark:border-slate-700 text-blue-700 dark:text-blue-400 flex items-center justify-center shadow-2xs">
                  <LinkedinIcon size={16} />
                </div>
                <h3 className="text-[14.5px] sm:text-[15px] font-bold text-slate-900 dark:text-white">LinkedIn</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-[12.5px] sm:text-[13px] mb-3 leading-relaxed font-normal">
                Connect professionally & view recommendations
              </p>
            </div>
            <a
              href={PROFILE.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-3.5 flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-sky-600 dark:bg-slate-800 dark:hover:bg-sky-600 dark:border dark:border-slate-700 text-white font-semibold text-[12.5px] sm:text-[13px] shadow-2xs btn-hover transition-colors"
            >
              <span>Open LinkedIn</span>
              <ExternalLink size={13} />
            </a>
          </div>

          {/* GitHub */}
          <div className="card-modern card-top-accent p-3.5 sm:p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-8.5 h-8.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 flex items-center justify-center shadow-2xs">
                  <GithubIcon size={16} />
                </div>
                <h3 className="text-[14.5px] sm:text-[15px] font-bold text-slate-900 dark:text-white">GitHub</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-[12.5px] sm:text-[13px] mb-3 leading-relaxed font-normal">
                Explore testing repositories & framework scripts
              </p>
            </div>
            <a
              href={PROFILE.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-3.5 flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-sky-600 dark:bg-slate-800 dark:hover:bg-sky-600 dark:border dark:border-slate-700 text-white font-semibold text-[12.5px] sm:text-[13px] shadow-2xs btn-hover transition-colors"
            >
              <span>Open GitHub</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
