import { useState } from 'react'
import { Sparkles, CheckCircle2 } from 'lucide-react'

const SHOWCASE_PROJECTS = [
  {
    id: 'usl',
    num: '01',
    domain: 'LEGAL SERVICES',
    name: 'US Legal Plans',
    bullets: [
      'Member enrollment and onboarding flows',
      'Stripe payment gateway and auto-renewal integration',
      'ADA / WCAG accessibility validation across user journeys',
      'Automated REST API testing via Postman'
    ]
  },
  {
    id: 'ars',
    num: '02',
    domain: 'FIELD OPS',
    name: 'AlphaRepServices (ARS)',
    bullets: [
      'Field representative visit tracking and store audits',
      'Dynamic multi-branch survey template validation',
      'Mobile WebKit process memory optimization testing',
      'Client chain hierarchy and multi-tier approval flows'
    ]
  },
  {
    id: 'resident-connect',
    num: '03',
    domain: 'PROPERTY MGMT',
    name: 'Resident Connect',
    bullets: [
      'Tenant and property manager communication portal',
      'Maintenance ticketing and work order assignment lifecycle',
      'Rent ledger calculations and recurring payment schedules',
      'Role-based access control (RBAC) security verification'
    ]
  },
  {
    id: 'brooon',
    num: '04',
    domain: 'REAL ESTATE',
    name: 'Brooon',
    bullets: [
      'Broker CRM and property inventory synchronization',
      'Lead capture, matching algorithms and call logs',
      'Location-based geo-radius filter validation',
      'Cross-platform mobile and web workflow testing'
    ]
  },
  {
    id: 'clientracker',
    num: '05',
    domain: 'ENTERPRISE CRM',
    name: 'ClientTracker',
    bullets: [
      'Customizable sales pipelines and workflow automation',
      'Email marketing automation and campaign tracking',
      'Customer support ticketing and SLA management',
      'Detailed reporting, forecasting and KPI dashboards'
    ]
  }
]

export default function Projects() {
  const [activeId, setActiveId] = useState('usl')
  const active = SHOWCASE_PROJECTS.find((p) => p.id === activeId)

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 border-b border-slate-200 dark:border-slate-800"
      aria-labelledby="projects-heading"
    >
      <div className="section-container">

        {/* Heading */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/60 text-slate-600 dark:text-slate-300 text-xs sm:text-[13px] font-semibold tracking-widest uppercase mb-3">
            <Sparkles size={12} className="text-sky-500" />
            <span>Projects</span>
          </div>
          <h2 id="projects-heading" className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Project <span className="text-sky-600 dark:text-sky-400">Specifications</span> &amp; Case Studies
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-1.5 max-w-md leading-relaxed">
            Select a project to see its key features and deliverables.
          </p>
        </div>

        <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-10">

          {/* Mobile: Horizontal scrollable project selector */}
          <div className="flex lg:hidden overflow-x-auto gap-2 pb-1 -mx-4 px-4 sm:mx-0 sm:px-0">
            {SHOWCASE_PROJECTS.map((p) => {
              const isActive = activeId === p.id
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveId(p.id)}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                    isActive
                      ? 'bg-sky-50 dark:bg-sky-950/60 border-sky-400 dark:border-sky-600 text-sky-700 dark:text-sky-300 shadow-xs'
                      : 'bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                  }`}
                >
                  <span className="font-mono text-xs opacity-80">{p.num}</span>
                  <span>{p.name}</span>
                </button>
              )
            })}
          </div>

          {/* Desktop: Vertical project list */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-2">
            {SHOWCASE_PROJECTS.map((p) => {
              const isActive = activeId === p.id
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveId(p.id)}
                  className={`w-full text-left flex items-center justify-between px-4 py-3.5 rounded-xl border transition-all duration-300 cursor-pointer group active:scale-[0.98] ${
                    isActive
                      ? 'bg-sky-50 dark:bg-sky-950/40 border-sky-300 dark:border-sky-700/60 border-l-4 border-l-sky-500 dark:border-l-sky-400 text-slate-900 dark:text-white shadow-md font-bold -translate-y-0.5'
                      : 'bg-transparent border-transparent text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white hover:translate-x-1.5'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 transition-transform duration-200 group-hover:scale-125 ${isActive ? 'bg-sky-500 ring-2 ring-sky-300 dark:ring-sky-500/40' : 'bg-slate-400 dark:bg-slate-600'}`} />
                    <div className="min-w-0">
                      <div className="text-xs font-semibold tracking-wider uppercase mb-0.5 opacity-70">
                        {p.domain}
                      </div>
                      <div className="text-sm sm:text-base font-semibold truncate transition-colors duration-200 group-hover:text-sky-600 dark:group-hover:text-sky-400">
                        {p.name}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs sm:text-[13px] font-mono opacity-60 flex-shrink-0 ml-2 transition-all duration-300 group-hover:scale-110 group-hover:text-sky-500 group-hover:opacity-100">{p.num}</span>
                </button>
              )
            })}
          </div>

          {/* Right: details card */}
          <div className="lg:col-span-8 overflow-x-clip">
            {active && (
              <div
                key={activeId}
                className="animate-project-slide relative overflow-hidden p-5 sm:p-7 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-xl hover:shadow-sky-500/10 dark:hover:shadow-sky-500/5 hover:border-sky-300 dark:hover:border-sky-700/60 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Glowing subtle top accent bar that expands on project open */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 animate-expand-line" />

                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-xs sm:text-[13px] font-bold tracking-widest text-sky-600 dark:text-sky-400 uppercase">
                    {active.domain}
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-semibold text-slate-400">
                    {active.num} / 05
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  {active.name}
                </h3>

                <div className="h-px bg-slate-200 dark:bg-slate-800 mb-4 animate-expand-line" />

                <div className="text-xs sm:text-sm font-bold tracking-widest text-slate-400 uppercase mb-3">
                  Key Deliverables & Feature Modules
                </div>

                <ul className="space-y-3">
                  {active.bullets.map((b, idx) => (
                    <li
                      key={idx}
                      className={`animate-bullet-${(idx % 4) + 1} flex items-start gap-3 text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed transition-all duration-200 hover:translate-x-1.5 hover:text-sky-900 dark:hover:text-sky-100 group/item cursor-default`}
                    >
                      <CheckCircle2 size={18} className="text-sky-500 dark:text-sky-400 flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover/item:scale-125" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  )
}
