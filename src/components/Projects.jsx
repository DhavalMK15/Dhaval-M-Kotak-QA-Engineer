import { useState } from 'react'
import { Sparkles } from 'lucide-react'

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
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/60 text-slate-500 dark:text-slate-400 text-[11px] font-semibold tracking-widest uppercase mb-3">
            <Sparkles size={11} className="text-sky-500" />
            <span>Projects</span>
          </div>
          <h2 id="projects-heading" className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Project <span className="text-sky-600 dark:text-sky-400">Specifications</span> &amp; Case Studies
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1.5 max-w-md">
            Select a project to see its key features and deliverables.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">

          {/* Left: project list */}
          <div className="lg:col-span-4 flex flex-col gap-1.5">
            {SHOWCASE_PROJECTS.map((p) => {
              const isActive = activeId === p.id
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveId(p.id)}
                  className={`w-full text-left flex items-center justify-between px-4 py-3 rounded-xl border transition-all duration-150
                    ${isActive
                      ? 'bg-sky-50 dark:bg-sky-950/40 border-sky-300 dark:border-sky-700/60 text-slate-900 dark:text-white'
                      : 'bg-transparent border-transparent text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white'
                    }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isActive ? 'bg-sky-500' : 'bg-slate-400 dark:bg-slate-600'}`} />
                    <div className="min-w-0">
                      <div className="text-[10px] font-semibold tracking-widest uppercase mb-0.5 opacity-60">
                        {p.domain}
                      </div>
                      <div className="text-sm font-semibold truncate">
                        {p.name}
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono opacity-40 flex-shrink-0 ml-2">{p.num}</span>
                </button>
              )
            })}
          </div>

          {/* Right: details */}
          <div className="lg:col-span-8">
            {active && (
              <div key={activeId}>
                <div className="text-[10px] font-bold tracking-widest text-sky-600 dark:text-sky-400 uppercase mb-1">
                  {active.domain}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {active.name}
                </h3>

                <div className="h-px bg-slate-200 dark:bg-slate-800 mb-5" />

                <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-3">
                  Key Features
                </div>

                <ul className="space-y-3">
                  {active.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0 mt-1.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

        </div>

        {/* Tested Domains strip */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center gap-x-5 gap-y-3">
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
            <span className="text-[11px] font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">
              Tested Domains
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              'Resident & Community Management',
              'Enterprise CRM & Case Tracking',
              'Real Estate & Broker Matching',
              'Field Operations & Survey Management',
              'Legal & Member Enrollment Portals',
            ].map((domain) => (
              <span
                key={domain}
                className="px-3 py-1 rounded-full text-[12px] font-medium border
                  bg-slate-100 dark:bg-slate-800/60
                  border-slate-200 dark:border-slate-700/60
                  text-slate-600 dark:text-slate-300"
              >
                {domain}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
