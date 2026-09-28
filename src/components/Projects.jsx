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
      'Resident Connect is a digital platform facilitating communication between property managers and tenants, streamlining tasks, handling requests, and fostering community engagement. It has 3 more sub products: look4lease, immi dreams, and clientracker, with separate mobile applications and landing pages.',
    bullets: [
      'Tenant and property manager communication portal & community engagement workflows',
      'Maintenance ticketing, task streamlining, and work order lifecycle management',
      'Cross-product QA coverage across look4lease, immi dreams, and clientracker ecosystems',
      'Dedicated iOS & Android mobile application testing and landing page verification'
    ]
  },
  {
    id: 'us-legal-services',
    num: '02',
    domain: 'LEGAL SERVICES',
    name: 'U.S. Legal Services',
    description:
      'U.S. Legal Services provides attorney support for legal cases (e.g., Matters or CDL cases). There are 6 portals where users can login: Member system (main system), Member Portal (for USL members), Enrollment Portal (members enroll in USL), Attorney Portal (for attorneys), and more.',
    bullets: [
      'End-to-end multi-portal testing across 6 integrated web and admin applications',
      'Case workflow validation for legal Matters and Commercial Driver\'s License (CDL) cases',
      'Member enrollment, onboarding flows, and Stripe payment gateway verification',
      'ADA / WCAG accessibility validation and automated REST API testing via Postman'
    ]
  },
  {
    id: 'clientracker',
    num: '03',
    domain: 'REAL ESTATE CRM',
    name: 'Clientracker',
    tag: 'Team Lead',
    description:
      'Another subsidiary of Resident Connect. This project is a separate platform for property brokers and agents in which they can manage clients and properties, and also track their revenue.',
    bullets: [
      'Specialized broker and agent platform for comprehensive client & lead management',
      'Property listing inventory, inquiry matching, and status synchronization',
      'Commission and revenue tracking, payout calculations, and financial analytics',
      'Cross-platform testing ensuring seamless consistency between web and mobile interfaces'
    ]
  },
  {
    id: 'railway-recruitment-board',
    num: '04',
    domain: 'GOVERNMENT / PUBLIC SECTOR',
    name: 'Railway Recruitment Board',
    description:
      'Performed regression testing, assisted with data entry, and participated in examination support for the Railway Recruitment Board examination system.',
    bullets: [
      'Executed systematic regression test suites across examination management modules',
      'Assisted with high-volume, secure candidate data entry and verification workflows',
      'Participated in active examination support and system operational readiness',
      'Validated examination data accuracy, candidate evaluation, and result integrity'
    ]
  },
  {
    id: 'jio-qr-to-ar',
    num: '05',
    domain: 'AUGMENTED REALITY / EVENT TECH',
    name: 'Jio: QR to AR',
    description:
      'Jio QR to AR event transforms static QR codes into interactive augmented reality experiences, enhancing engagement and offering dynamic content to attendees.',
    bullets: [
      'Interactive Augmented Reality (AR) camera experience and marker recognition validation',
      'QR code scanning performance and reliability testing across varied lighting & device models',
      'Dynamic 3D asset rendering, animation playback, and multimedia latency checks',
      'Attendee onboarding flow, interaction analytics, and cross-device mobile compatibility'
    ]
  }
]

const ALL_TESTED_PROJECTS = [
  {
    num: '01',
    name: 'Resident Connect',
    tag: 'Team Lead',
    description:
      'Resident Connect is a digital platform facilitating communication between property managers and tenants, streamlining tasks, handling requests, and fostering community engagement. It has 3 more sub products: look4lease, immi dreams and clientracker, with separate mobile applications and landing pages.'
  },
  {
    num: '02',
    name: 'U.S. Legal Services',
    tag: '6 Integrated Portals',
    description:
      'U.S. Legal Services is providing the Attorney for any legal cases, eg Matters or CDL cases. There are 6 portals where user can login eg Member system (main system), Member Portal (for usl members), Enrollment Portal (members enroll in USL), Attorney Portal (for attorneys) etc.'
  },
  {
    num: '03',
    name: 'Clientracker',
    tag: 'Team Lead',
    description:
      'Another subsidiary of Resident Connect. This project is a separate platform for property brokers and agents in which they can manage clients and properties, and also track their revenue.'
  },
  {
    num: '04',
    name: 'Railway Recruitment Board',
    tag: 'Examination Support',
    description:
      'Performed regression testing, assisted with data entry, and participated in examination support.'
  },
  {
    num: '05',
    name: 'Jio: QR to AR',
    tag: 'Augmented Reality',
    description:
      'Jio QR to AR event transforms static QR codes into interactive augmented reality experiences, enhancing engagement and offering dynamic content to attendees.'
  },
  {
    num: '06',
    name: 'Brooon',
    tag: 'Team Lead',
    description:
      'Tested the Brooon mobile application for real estate buying, selling, and leasing workflows, executed test cases, identified and tracked defects, verified bug fixes, and ensured a seamless user experience.'
  },
  {
    num: '07',
    name: 'VANI (Pore Product)',
    tag: 'VFX Project Management',
    description:
      'Helps to manage your visual production film without navigating between spreadsheets, emails, and other tools. You can track everything with the best VFX project management tool like Vani Software from the first day to the completion.'
  },
  {
    num: '08',
    name: 'AirBrush',
    tag: 'Module QA Coverage',
    description:
      'Assisted QA coverage for core platform modules including push notifications, user roles, and access permissions.'
  },
  {
    num: '09',
    name: 'Nunu tv',
    tag: 'iOS Kids App',
    description:
      'It is a gaming application for kids which is available in iOS only. In this game, we are teaching kids how to write and identify the alphabet and numbers.'
  },
  {
    num: '10',
    name: "Let's get happi",
    tag: 'Mental Health App',
    description:
      'A project which provides mental health support for wellness and therapy via chat, audio call and video call.'
  },
  {
    num: '11',
    name: 'PMS (Pore Product)',
    tag: 'Internal Management Tool',
    description:
      'This is the solution for employees management in our company. Handled task allocation workflows for developers and tested the whole project end-to-end.'
  },
  {
    num: '12',
    name: 'BigToe',
    tag: 'Web & Mobile Platform',
    description:
      'Performed comprehensive testing of both the web and mobile applications. Maintained the bug sheet and created UAT files covering all end-user scenarios.'
  },
  {
    num: '13',
    name: 'Modular For Kitchen',
    tag: '2D / 3D Visualization',
    description:
      'A kitchen design project featuring 2D and 3D views. Collaborated with the project manager to test all possible scenarios in both views, documented bugs, and listed all test scenarios.'
  },
  {
    num: '14',
    name: 'Immi Dreams',
    tag: 'Legal Services',
    description:
      'Immi Dreams provides solutions for legal services. Tested client-specified functional points, validated user journeys, and maintained the bugsheet.'
  },
  {
    num: '15',
    name: 'Look for Lease',
    tag: 'Team Lead',
    description:
      'Look4Lease provides a distinctive platform facilitating direct communication between renters and property owners.'
  },
  {
    num: '16',
    name: 'Alpha Ops (Pore Product)',
    tag: 'Operations Workspace',
    description:
      'Enterprise workspace and operations management platform providing companies with facility booking, attendance, and administrative management tools.'
  },
  {
    num: '17',
    name: 'Rajkot Nagrik Sahakari Bank Ltd.',
    tag: 'Banking · BA & QA Role',
    description:
      'This is a banking project where I worked as both a Business Analyst (BA) and a Quality Analyst (QA). Also responsible for creating the project requirement document.'
  },
  {
    num: '18',
    name: 'QuestWings (Pore Product)',
    tag: 'Web Application QA',
    description:
      'Performed functional, regression, UI, and usability testing for the QuestWings web application, designed and executed test cases, reported defects, validated fixes, and collaborated with developers to ensure high-quality releases.'
  },
  {
    num: '19',
    name: 'Finance (Pore Product)',
    tag: 'Financial App',
    description:
      'Performed end-to-end manual testing of a financial management application, validating workflows, calculations, transactions, business rules, validations, UI, integrations, regression, data consistency, and negative scenarios.'
  },
  {
    num: '20',
    name: 'ARS',
    tag: 'Field Operations & Surveys',
    description:
      'Worked on ARS, where fieldreps conduct and submit site surveys for admin approval, while testing all modules, features, workflows, and user roles across the system.'
  },
  {
    num: '21',
    name: 'DiCare',
    tag: 'Healthcare · AI-Assisted QA',
    description:
      'Tested DiCare healthcare platform’s admin panel using AI-assisted testing, covering Doctor, Nurse, Pharmacist, Receptionist, HR, Finance, and other roles, validating workflows, permissions, forms, and end-to-end functionality.'
  }
]

export default function Projects() {
  const [activeId, setActiveId] = useState('resident-connect')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const active = SHOWCASE_PROJECTS.find((p) => p.id === activeId) || SHOWCASE_PROJECTS[0]

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setIsModalOpen(false)
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [isModalOpen])

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
            <span>Top 5 Featured Projects</span>
          </div>
          <h2 id="projects-heading" className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Project <span className="text-sky-600 dark:text-sky-400">Specifications</span> &amp; Case Studies
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-1.5 leading-relaxed">
            Showing top 5 projects. Select to view details.
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
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="flex-shrink-0 flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border border-dashed border-emerald-300 dark:border-emerald-700/80 bg-emerald-50/70 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-all cursor-pointer"
            >
              <Layers size={13} className="text-emerald-600 dark:text-emerald-400" />
              <span>All Tested Projects</span>
            </button>
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

            {/* Button to Open All Tested Projects Modal */}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="mt-2 flex items-center justify-between w-full px-4 py-3 rounded-xl border border-dashed border-emerald-300 dark:border-emerald-800/80 bg-emerald-50/50 hover:bg-emerald-100/70 dark:bg-emerald-950/20 dark:hover:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 transition-all duration-200 group text-xs sm:text-sm font-medium cursor-pointer"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <Layers size={16} className="text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="truncate">View All Tested Projects</span>
              </div>
              <ArrowRight size={16} className="text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2" />
            </button>
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

                <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs sm:text-[13px] font-bold tracking-widest text-sky-600 dark:text-sky-400 uppercase">
                      {active.domain}
                    </span>
                    {active.tag && (
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/25">
                        {active.tag}
                      </span>
                    )}
                  </div>
                  <span className="text-xs sm:text-sm font-mono font-semibold text-slate-400">
                    {active.num}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                  {active.name}
                </h3>

                {active.description && (
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mb-4 leading-relaxed bg-slate-50/80 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200/60 dark:border-slate-800/60">
                    {active.description}
                  </p>
                )}

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

      {/* Modal Popup: All Tested Projects (20) */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-md animate-overlay-in"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="all-projects-modal-title"
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/90 dark:border-slate-800 shadow-2xl overflow-hidden animate-popup-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 sm:px-7 sm:py-5 border-b border-slate-200/80 dark:border-slate-800 flex-shrink-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-1">
                  <FileSpreadsheet size={12} />
                  <span>QA Repository · Tested Projects</span>
                </div>
                <h3 id="all-projects-modal-title" className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  All Tested Projects
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close popup"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Project Cards Grid */}
            <div className="overflow-y-auto p-4 sm:p-7 space-y-3 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4 flex-1">
              {ALL_TESTED_PROJECTS.map((p) => (
                <div
                  key={p.num}
                  className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800/70 hover:border-sky-300 dark:hover:border-sky-700/60 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-md bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200/60 dark:border-sky-800/40">
                        #{p.num}
                      </span>
                      {p.tag && (
                        <span
                          className={`text-[11px] truncate ${
                            p.tag === 'Team Lead'
                              ? 'font-semibold text-amber-700 dark:text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/25'
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

            {/* Modal Footer */}
            <div className="flex items-center justify-between p-4 sm:px-7 border-t border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 flex-shrink-0">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                QA Project Directory
              </span>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
