import { useState, useEffect } from 'react'
import { Sparkles, CheckCircle2, FileSpreadsheet, X, Layers, ArrowRight } from 'lucide-react'

const SHOWCASE_PROJECTS = [
  {
    id: 'resident-connect',
    num: '01',
    domain: 'PROPERTY MANAGEMENT',
    name: 'Resident Connect',
    tag: 'Team Lead',
    description:
      'Property management & tenant portal with sub-products Look4Lease, Immi Dreams, and Clientracker.',
    bullets: [
      'Tenant & property manager portal · Work order lifecycle',
      'Maintenance ticketing & community engagement workflows',
      'Cross-product QA: Look4Lease, Immi Dreams, Clientracker',
      'iOS & Android native apps · Responsive web portals'
    ]
  },
  {
    id: 'us-legal-services',
    num: '02',
    domain: 'LEGAL SERVICES',
    name: 'U.S. Legal Services',
    description:
      'Legal attorney network with 6 dedicated portals covering Matters and CDL case lifecycles.',
    bullets: [
      'Multi-portal architecture across 6 web & admin portals',
      'Legal Matters & Commercial Driver (CDL) workflows',
      'Stripe payment integration & member auto-renewals',
      'ADA / WCAG accessibility & automated Postman API suites'
    ]
  },
  {
    id: 'clientracker',
    num: '03',
    domain: 'REAL ESTATE CRM',
    name: 'Clientracker',
    tag: 'Team Lead',
    description:
      'Real estate broker CRM for client management, property listings, and commission tracking.',
    bullets: [
      'Broker & agent client management · Deal pipelines',
      'Property listing inventory & real-time search matching',
      'Commission splits, revenue tracking & financial KPIs',
      'Cross-platform consistency: web and mobile interfaces'
    ]
  },
  {
    id: 'railway-recruitment-board',
    num: '04',
    domain: 'GOVERNMENT / PUBLIC SECTOR',
    name: 'Railway Recruitment Board',
    description:
      'Public sector examination management, candidate verification, and secure data processing.',
    bullets: [
      'Systematic regression suites across exam modules',
      'Secure candidate verification & high-volume data validation',
      'Real-time exam operational readiness & live monitoring',
      'Score computation, candidate evaluation & audit integrity'
    ]
  },
  {
    id: 'jio-qr-to-ar',
    num: '05',
    domain: 'AUGMENTED REALITY / EVENT TECH',
    name: 'Jio: QR to AR',
    description:
      'Augmented reality interactive event platform converting static QR codes into 3D experiences.',
    bullets: [
      'AR camera tracking, marker recognition & 3D rendering',
      'QR scanner performance across diverse devices & lighting',
      'Dynamic multimedia asset streaming & low latency playback',
      'Cross-platform iOS & Android mobile compatibility'
    ]
  }
]

const ALL_TESTED_PROJECTS = [
  {
    num: '01',
    name: 'Resident Connect',
    tag: 'Team Lead',
    description:
      'Tenant & manager portal, task automation, work orders, iOS & Android apps.'
  },
  {
    num: '02',
    name: 'U.S. Legal Services',
    tag: '6 Integrated Portals',
    description:
      '6 integrated portals, attorney case workflows, Stripe billing, WCAG accessibility.'
  },
  {
    num: '03',
    name: 'Clientracker',
    tag: 'Team Lead',
    description:
      'Broker CRM, property inventory, deal matching, commission & revenue analytics.'
  },
  {
    num: '04',
    name: 'Railway Recruitment Board',
    tag: 'Examination Support',
    description:
      'Exam portal regression testing, candidate verification, secure data processing.'
  },
  {
    num: '05',
    name: 'Jio: QR to AR',
    tag: 'Augmented Reality',
    description:
      'Augmented reality camera experiences, marker tracking, 3D interactive assets.'
  },
  {
    num: '06',
    name: 'Brooon',
    tag: 'Team Lead',
    description:
      'Real estate mobile app, property buy/sell/lease workflows, regression QA.'
  },
  {
    num: '07',
    name: 'VANI (Core Product)',
    tag: 'VFX Project Management',
    description:
      'VFX film project management, pipeline tracking, production workflows.'
  },
  {
    num: '08',
    name: 'AirBrush',
    tag: 'Module QA Coverage',
    description:
      'Push notifications, role-based access control (RBAC), user permissions.'
  },
  {
    num: '09',
    name: 'Nunu tv',
    tag: 'iOS Kids App',
    description:
      'iOS educational gaming app, alphabet & numbers interactive learning.'
  },
  {
    num: '10',
    name: "Let's get happi",
    tag: 'Mental Health App',
    description:
      'Mental health wellness app, real-time chat, voice & video therapy sessions.'
  },
  {
    num: '11',
    name: 'PMS (Core Product)',
    tag: 'Internal Management Tool',
    description:
      'Internal enterprise resource & task allocation platform, developer workflows.'
  },
  {
    num: '12',
    name: 'BigToe',
    tag: 'Web & Mobile Platform',
    description:
      'Web & mobile on-demand booking platform, UAT execution, bug tracking.'
  },
  {
    num: '13',
    name: 'Modular For Kitchen',
    tag: '2D / 3D Visualization',
    description:
      '2D & 3D interactive kitchen layout visualization and scenario validation.'
  },
  {
    num: '14',
    name: 'Immi Dreams',
    tag: 'Legal Services',
    description:
      'Immigration legal services portal, client journeys, functional verification.'
  },
  {
    num: '15',
    name: 'Look for Lease',
    tag: 'Team Lead',
    description:
      'Direct renter-to-landlord rental marketplace, listings, inquiry messaging.'
  },
  {
    num: '16',
    name: 'Alpha Ops (Core Product)',
    tag: 'Operations Workspace',
    description:
      'Enterprise operations workspace, facility reservations, attendance tracking.'
  },
  {
    num: '17',
    name: 'Rajkot Nagrik Sahakari Bank Ltd.',
    tag: 'Banking · BA & QA Role',
    description:
      'Core banking services, BRD requirements analysis & QA verification.'
  },
  {
    num: '18',
    name: 'QuestWings (Core Product)',
    tag: 'Web Application QA',
    description:
      'Web application functional testing, regression suites, defect reporting.'
  },
  {
    num: '19',
    name: 'Finance (Core Product)',
    tag: 'Financial App',
    description:
      'Financial accounting, transaction calculations, business rules & audit validation.'
  },
  {
    num: '20',
    name: 'ARS',
    tag: 'Field Operations & Surveys',
    description:
      'Field representative site surveys, admin audit workflows, role validations.'
  },
  {
    num: '21',
    name: 'DiCare',
    tag: 'Healthcare · AI-Assisted QA',
    description:
      'Healthcare admin portal, Doctor/Nurse/Staff RBAC, AI-assisted QA.'
  }
]

export default function Projects() {
  const [activeId, setActiveId] = useState('resident-connect')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const active = SHOWCASE_PROJECTS.find((p) => p.id === activeId) || SHOWCASE_PROJECTS[0]

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setIsSidebarOpen(false)
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [isSidebarOpen])

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 lg:py-32 border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-300"
      aria-labelledby="projects-heading"
    >
      <div className="section-container">

        {/* Heading with generous breathing space */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/60 text-slate-600 dark:text-slate-300 text-xs sm:text-[13px] font-semibold tracking-widest uppercase mb-4">
            <Sparkles size={12} className="text-sky-500" />
            <span>Top 5 Featured Projects</span>
          </div>
          <h2 id="projects-heading" className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Project <span className="text-sky-600 dark:text-sky-400">Specifications</span> &amp; Case Studies
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-2.5 max-w-xl leading-relaxed">
            Key deliverables, test architectures, and verified release modules.
          </p>
        </div>

        <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-10 xl:gap-14 items-start">

          {/* Mobile: Horizontal scrollable project selector */}
          <div className="flex lg:hidden overflow-x-auto gap-2.5 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            {SHOWCASE_PROJECTS.map((p) => {
              const isActive = activeId === p.id
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveId(p.id)}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                    isActive
                      ? 'bg-sky-500/15 border-sky-400 text-sky-700 dark:text-sky-300 shadow-xs'
                      : 'bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                  }`}
                >
                  <span className="font-mono text-xs opacity-80">{p.num}</span>
                  <span>{p.name}</span>
                </button>
              )
            })}
            <button
              type="button"
              onClick={() => setIsSidebarOpen(true)}
              className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border border-dashed border-emerald-300 dark:border-emerald-700/80 bg-emerald-50/70 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-all cursor-pointer"
            >
              <Layers size={13} className="text-emerald-600 dark:text-emerald-400" />
              <span>All Tested Projects</span>
            </button>
          </div>

          {/* Desktop: Vertical project list with airy cards */}
          <div className="hidden lg:flex lg:col-span-5 flex-col gap-3.5">
            {SHOWCASE_PROJECTS.map((p) => {
              const isActive = activeId === p.id
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveId(p.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer group active:scale-[0.99] ${
                    isActive
                      ? 'bg-sky-500/10 dark:bg-sky-500/15 border-2 border-sky-500 dark:border-sky-400 shadow-lg shadow-sky-500/10 dark:shadow-sky-500/10 -translate-y-0.5'
                      : 'bg-white/50 dark:bg-slate-900/40 border-slate-200/70 dark:border-slate-800/70 hover:bg-white dark:hover:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-700 hover:translate-x-1'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] font-bold tracking-widest uppercase text-sky-600 dark:text-sky-400 opacity-90 mb-1.5 flex items-center gap-2">
                        <span>{p.domain}</span>
                        {p.tag && (
                          <span className="text-[10px] font-semibold px-2 py-0.2 rounded bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                            {p.tag}
                          </span>
                        )}
                      </div>
                      <div className={`text-sm sm:text-[15px] font-bold truncate transition-colors ${
                        isActive ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white'
                      }`}>
                        {p.name}
                      </div>
                    </div>
                    <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-sky-500 text-white shadow-xs'
                        : 'text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800/70 group-hover:text-slate-600 dark:group-hover:text-slate-300'
                    }`}>
                      {p.num}
                    </span>
                  </div>
                </button>
              )
            })}

            {/* Button to Open All Tested Projects Sidebar */}
            <button
              type="button"
              onClick={() => setIsSidebarOpen(true)}
              className="mt-3 flex items-center justify-between w-full p-4 sm:p-4.5 rounded-2xl border border-dashed border-emerald-300 dark:border-emerald-800/80 bg-emerald-50/50 hover:bg-emerald-100/70 dark:bg-emerald-950/20 dark:hover:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 transition-all duration-200 group text-sm font-semibold cursor-pointer"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <Layers size={16} className="text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="truncate">View All Tested Projects</span>
              </div>
              <ArrowRight size={16} className="text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1.5 transition-transform flex-shrink-0 ml-2" />
            </button>
          </div>

          {/* Right: details card with generous internal blank space & 2-column deliverable cards */}
          <div className="lg:col-span-7 overflow-x-clip">
            {active && (
              <div
                key={activeId}
                className="animate-project-slide relative overflow-hidden p-8 sm:p-10 lg:p-12 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 dark:hover:shadow-sky-500/5 hover:border-sky-300 dark:hover:border-sky-700/60 transition-all duration-300"
              >
                {/* Glowing subtle top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 animate-expand-line" />

                {/* Card Header */}
                <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-xs sm:text-[13px] font-bold tracking-widest text-sky-600 dark:text-sky-400 uppercase">
                      {active.domain}
                    </span>
                    {active.tag && (
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/25">
                        {active.tag}
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-mono font-bold text-slate-400">
                    #{active.num}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
                  {active.name}
                </h3>

                {/* Clean, open description — NO nested box */}
                {active.description && (
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mb-6 leading-relaxed font-normal max-w-2xl">
                    {active.description}
                  </p>
                )}

                <div className="h-px bg-slate-200/80 dark:bg-slate-800/80 my-8 animate-expand-line" />

                <div className="text-xs sm:text-sm font-bold tracking-widest text-slate-400 uppercase mb-5">
                  Key Deliverables &amp; Core Modules
                </div>

                {/* 2-Column Grid of Deliverables with maximum breathing space */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {active.bullets.map((b, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800/70 hover:border-sky-400/60 dark:hover:border-sky-500/60 transition-all duration-200 flex items-start gap-3.5 group/item cursor-default"
                    >
                      <CheckCircle2 size={19} className="text-sky-500 dark:text-sky-400 flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover/item:scale-125" />
                      <span className="text-sm sm:text-[15px] font-medium text-slate-700 dark:text-slate-200 leading-relaxed">
                        {b}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Slide-out Sidebar Drawer: All Tested Projects */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-50 overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="all-projects-sidebar-title"
        >
          {/* Backdrop overlay with blur */}
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 animate-overlay-in"
            onClick={() => setIsSidebarOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-out Sidebar Panel from Right with deep elevation shadow */}
          <aside
            className="fixed inset-y-0 right-0 z-50 w-full sm:w-[500px] md:w-[560px] max-w-full bg-white dark:bg-slate-900 border-l border-slate-200/90 dark:border-slate-800/80 sidebar-shadow flex flex-col animate-sidebar-in overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sidebar Header with maximum breathing space */}
            <div className="flex items-center justify-between p-6 sm:px-8 sm:py-6 border-b border-slate-200/80 dark:border-slate-800 flex-shrink-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/70 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-2">
                  <FileSpreadsheet size={12} />
                  <span>QA Directory</span>
                </div>
                <h3 id="all-projects-sidebar-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  All Tested Projects
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsSidebarOpen(false)}
                className="p-2.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close sidebar"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Project Cards List with generous spacing */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-4 sm:space-y-5 flex-1">
              {ALL_TESTED_PROJECTS.map((p) => (
                <div
                  key={p.num}
                  className="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800/70 shadow-xs hover:shadow-md hover:border-sky-300 dark:hover:border-sky-700/60 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-md bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200/60 dark:border-sky-800/40">
                        #{p.num}
                      </span>
                      {p.tag && (
                        <span
                          className={`text-[11px] truncate ${
                            p.tag === 'Team Lead'
                              ? 'font-semibold text-amber-700 dark:text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-md border border-amber-500/25'
                              : 'font-medium text-slate-500 dark:text-slate-400'
                          }`}
                        >
                          {p.tag}
                        </span>
                      )}
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                      {p.name}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar Footer with generous breathing space */}
            <div className="flex items-center justify-between p-5 sm:px-8 border-t border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 flex-shrink-0">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                QA Project Directory
              </span>
              <button
                type="button"
                onClick={() => setIsSidebarOpen(false)}
                className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </aside>
        </div>
      )}
    </section>
  )
}
