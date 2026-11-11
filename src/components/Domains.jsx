import {
  Building2,
  Scale,
  HeartPulse,
  Landmark,
  Users,
  GraduationCap,
  Briefcase,
  Gamepad2,
  Film,
  Sparkles,
  Globe,
} from 'lucide-react'
import { DOMAINS_DATA } from '../data/portfolioData'
import { scrollToSection } from '../utils/scroll'

const DOMAIN_ICONS = {
  Building2,
  Scale,
  HeartPulse,
  Landmark,
  Users,
  GraduationCap,
  Briefcase,
  Gamepad2,
  Film,
  Sparkles,
}

export default function Domains() {
  const handleDomainClick = (domain) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('dk_select_domain_filter', {
          detail: {
            domainName: domain.name,
            showcaseId: domain.showcaseId,
          },
        })
      )
    }
    scrollToSection('#projects', 72, 600)
  }

  return (
    <section
      id="domains"
      className="py-14 sm:py-20 lg:py-28 bg-slate-50/80 dark:bg-slate-950/90 border-b border-slate-300 dark:border-slate-800 transition-colors duration-300 overflow-hidden"
      aria-labelledby="domains-heading"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 border border-sky-300 dark:border-sky-800 text-sky-800 dark:text-sky-200 text-xs sm:text-[13px] font-extrabold tracking-wide uppercase mb-3">
            <Globe size={13} className="text-sky-700 dark:text-sky-400" />
            <span>Industry Verticals</span>
          </div>

          <h2
            id="domains-heading"
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight"
          >
            Domain <span className="text-sky-700 dark:text-sky-400">Experience</span>
          </h2>

          <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base mt-2.5 max-w-xl font-medium leading-relaxed">
            Quality assurance across 10 specialized industry sectors and multi-platform ecosystems.
          </p>
        </div>

        {/* 10 Domains Grid matching Hero Stats design (Symmetric 5x2 on desktop, 2x5 on mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5 sm:gap-5">
          {DOMAINS_DATA.map((domain) => {
            const IconComponent = DOMAIN_ICONS[domain.icon] || Globe

            return (
              <button
                key={domain.id}
                type="button"
                onClick={() => handleDomainClick(domain)}
                className="relative rounded-2xl p-4 sm:p-5 text-center bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700/90 shadow-sm hover:border-sky-500 dark:hover:border-sky-400 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-sky-500/10 dark:hover:shadow-sky-500/10 active:scale-95 transition-all duration-300 group overflow-hidden cursor-pointer flex flex-col items-center justify-center min-h-[144px] sm:min-h-[156px] w-full"
              >
                {/* Subtle top accent gradient bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-sky-100 dark:bg-sky-950/80 border border-sky-300 dark:border-sky-800 text-sky-700 dark:text-sky-300 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600 transition-all duration-300 shadow-2xs">
                  <IconComponent size={22} />
                </div>

                <h3 className="text-slate-950 dark:text-white font-extrabold text-base sm:text-[17px] leading-snug tracking-tight transition-colors duration-300 group-hover:text-sky-700 dark:group-hover:text-sky-300">
                  {domain.name}
                </h3>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
