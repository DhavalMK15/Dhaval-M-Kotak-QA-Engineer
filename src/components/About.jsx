import { CheckCircle2, ShieldCheck, Smartphone, Bot } from 'lucide-react'

const PILLARS = [
  { icon: CheckCircle2, title: 'Manual Testing' },
  { icon: ShieldCheck,  title: 'Accessibility (ADA/WCAG)' },
  { icon: Smartphone,   title: 'API & Mobile Testing' },
  { icon: Bot,          title: 'AI-Assisted QA' },
]

const DOMAINS = [
  'Resident & Community Management',
  'Enterprise CRM & Case Tracking',
  'Real Estate & Broker Matching',
  'Field Operations & Survey Management',
  'Legal & Member Enrollment Portals',
]

export default function About() {
  return (
    <section
      id="about"
      className="py-4 border-b border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors duration-300"
      aria-labelledby="about-heading"
    >
      <div className="section-container space-y-3">

        {/* Row 1: heading + 4 pillar chips */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <h2
            id="about-heading"
            className="text-sm font-bold text-slate-900 dark:text-white tracking-tight flex-shrink-0"
          >
            What I Do &amp; <span className="text-sky-600 dark:text-sky-400">Specialize In</span>
          </h2>

          <div className="flex flex-wrap gap-2">
            {PILLARS.map(({ icon: Icon, title }) => (
              <span
                key={title}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg
                  bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700
                  text-slate-700 dark:text-slate-300 text-[11.5px] font-medium"
              >
                <Icon size={12} className="text-sky-500 flex-shrink-0" />
                {title}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2: tested domains */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="flex items-center gap-1.5 text-[10.5px] font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 inline-block" />
            Tested Domains:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {DOMAINS.map((d) => (
              <span
                key={d}
                className="px-2.5 py-0.5 rounded-full text-[11px] font-medium
                  bg-slate-50 dark:bg-slate-800/60
                  border border-slate-200 dark:border-slate-700/60
                  text-slate-600 dark:text-slate-300"
              >
                {d}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
