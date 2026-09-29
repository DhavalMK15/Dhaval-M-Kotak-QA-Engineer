import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, CheckCircle2, FileSpreadsheet, X, Layers, ArrowRight } from 'lucide-react'

const SHOWCASE_PROJECTS = [
  {
    id: 'resident-connect',
    num: '01',
    domain: 'PROPERTY MANAGEMENT',
    name: 'Resident Connect',
    tag: 'Team Lead',
    description:
      'Property management and tenant portal ecosystem across mobile and web platforms.',
    bullets: [
      'Tenant Portal & Work Orders',
      'Maintenance Ticketing',
      'Look4Lease & Clientracker QA',
      'iOS, Android & Web Apps'
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
      '6 Web & Admin Portals',
      'Matters & CDL Workflows',
      'Stripe Payment Gateway',
      'ADA/WCAG & Postman APIs'
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
      'Broker CRM & Pipelines',
      'Property Search Matching',
      'Commission & Financial KPIs',
      'Web & Mobile Consistency'
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
      'Exam Regression Suites',
      'Candidate Data Verification',
      'Live Operational Readiness',
      'Score & Audit Integrity'
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
      '3D AR Marker Tracking',
      'High-Speed QR Scanner',
      'Low-Latency Asset Stream',
      'iOS & Android Mobile QA'
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

const projectSlideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 44 : -44,
    opacity: 0,
    filter: 'blur(4px)',
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.42,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: (dir) => ({
    x: dir > 0 ? -44 : 44,
    opacity: 0,
    filter: 'blur(4px)',
    transition: {
      duration: 0.24,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export default function Projects() {
  const [activeId, setActiveId] = useState('resident-connect')
  const [direction, setDirection] = useState(1) // 1: next, -1: prev
  const [isSidebarMounted, setIsSidebarMounted] = useState(false)
  const [isSidebarVisible, setIsSidebarVisible] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  // Touch gesture refs for project swipe on mobile
  const projectTouchStartX = useRef(0)
  const projectTouchStartY = useRef(0)
  const mobilePillRefs = useRef({})

  // Touch gesture refs for sidebar swipe-to-close
  const sidebarTouchStartX = useRef(0)
  const sidebarTouchStartY = useRef(0)
  const isHorizontalSwipe = useRef(null)
  const panelRef = useRef(null)

  const active = SHOWCASE_PROJECTS.find((p) => p.id === activeId) || SHOWCASE_PROJECTS[0]

  // Switch project with directional indicator
  const handleSelectProject = (newId, customDir) => {
    if (newId === activeId) return
    const currentIndex = SHOWCASE_PROJECTS.findIndex((p) => p.id === activeId)
    const newIndex = SHOWCASE_PROJECTS.findIndex((p) => p.id === newId)
    setDirection(customDir !== undefined ? customDir : (newIndex > currentIndex ? 1 : -1))
    setActiveId(newId)
  }

  // Smoothly center the active pill in horizontal scroll on mobile
  useEffect(() => {
    if (mobilePillRefs.current[activeId]) {
      mobilePillRefs.current[activeId].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      })
    }
  }, [activeId])

  // Project swipe handlers (for mobile responsive gestures)
  const handleProjectTouchStart = (e) => {
    projectTouchStartX.current = e.touches[0].clientX
    projectTouchStartY.current = e.touches[0].clientY
  }

  const handleProjectTouchEnd = (e) => {
    const diffX = e.changedTouches[0].clientX - projectTouchStartX.current
    const diffY = e.changedTouches[0].clientY - projectTouchStartY.current

    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
      const currentIndex = SHOWCASE_PROJECTS.findIndex((p) => p.id === activeId)
      if (diffX < 0) {
        // Swiped left -> Next project
        const nextIndex = (currentIndex + 1) % SHOWCASE_PROJECTS.length
        handleSelectProject(SHOWCASE_PROJECTS[nextIndex].id, 1)
      } else if (diffX > 0) {
        // Swiped right -> Previous project
        const prevIndex = (currentIndex - 1 + SHOWCASE_PROJECTS.length) % SHOWCASE_PROJECTS.length
        handleSelectProject(SHOWCASE_PROJECTS[prevIndex].id, -1)
      }
    }
  }

  // Open sidebar smoothly with gesture transition
  const openSidebar = () => {
    setIsSidebarMounted(true)
    setDragOffset(0)
    setIsDragging(false)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsSidebarVisible(true)
      })
    })
  }

  // Close sidebar smoothly with exit animation
  const closeSidebar = () => {
    setIsDragging(false)
    setIsSidebarVisible(false)
    setDragOffset(0)
    setTimeout(() => {
      setIsSidebarMounted(false)
    }, 400)
  }

  // Touch gesture handlers for mobile sidebar swipe-right to close
  const handleSidebarTouchStart = (e) => {
    sidebarTouchStartX.current = e.touches[0].clientX
    sidebarTouchStartY.current = e.touches[0].clientY
    isHorizontalSwipe.current = null
    setIsDragging(false)
  }

  const handleSidebarTouchMove = (e) => {
    const currentX = e.touches[0].clientX
    const currentY = e.touches[0].clientY
    const diffX = currentX - sidebarTouchStartX.current
    const diffY = currentY - sidebarTouchStartY.current

    // Determine gesture direction on initial threshold
    if (isHorizontalSwipe.current === null) {
      if (Math.abs(diffX) > 8 || Math.abs(diffY) > 8) {
        isHorizontalSwipe.current = Math.abs(diffX) > Math.abs(diffY) && diffX > 0
      }
    }

    if (isHorizontalSwipe.current && diffX > 0) {
      setIsDragging(true)
      setDragOffset(diffX)
      if (e.cancelable) {
        e.preventDefault()
      }
    }
  }

  const handleSidebarTouchEnd = () => {
    if (isDragging) {
      const panelWidth = panelRef.current ? panelRef.current.offsetWidth : 360
      if (dragOffset > 75 || dragOffset > panelWidth * 0.2) {
        closeSidebar()
      } else {
        setIsDragging(false)
        setDragOffset(0)
      }
    }
    isHorizontalSwipe.current = null
  }

  useEffect(() => {
    if (isSidebarMounted) {
      const originalBodyOverflow = document.body.style.overflow
      const originalHtmlOverflow = document.documentElement.style.overflow
      const originalBodyOverscroll = document.body.style.overscrollBehavior
      const originalHtmlOverscroll = document.documentElement.style.overscrollBehavior

      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overscrollBehavior = 'none'
      document.documentElement.style.overscrollBehavior = 'none'

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') closeSidebar()
      }
      window.addEventListener('keydown', handleKeyDown)

      return () => {
        document.body.style.overflow = originalBodyOverflow
        document.documentElement.style.overflow = originalHtmlOverflow
        document.body.style.overscrollBehavior = originalBodyOverscroll
        document.documentElement.style.overscrollBehavior = originalHtmlOverscroll
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [isSidebarMounted])

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 lg:py-32 border-b border-slate-300 dark:border-slate-800 transition-colors duration-300"
      aria-labelledby="projects-heading"
    >
      <div className="section-container">

        {/* Heading with generous breathing space */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-[13px] font-bold tracking-widest uppercase mb-4">
            <Sparkles size={12} className="text-sky-600 dark:text-sky-400" />
            <span>Top 5 Featured Projects</span>
          </div>
          <h2 id="projects-heading" className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Project <span className="text-sky-700 dark:text-sky-400">Specifications</span> &amp; Case Studies
          </h2>
          <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base mt-2.5 max-w-xl font-medium leading-relaxed">
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
                  ref={(el) => { mobilePillRefs.current[p.id] = el }}
                  onClick={() => handleSelectProject(p.id)}
                  className="relative flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 cursor-pointer overflow-hidden transition-colors"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeMobileProjectIndicator"
                      className="absolute inset-0 rounded-xl bg-sky-100 dark:bg-sky-950 border-2 border-sky-400 dark:border-sky-500 shadow-xs pointer-events-none"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className={`relative z-10 font-mono text-xs ${isActive ? 'text-sky-900 dark:text-sky-200 font-extrabold' : 'text-slate-700 dark:text-slate-300'}`}>{p.num}</span>
                  <span className={`relative z-10 ${isActive ? 'text-sky-950 dark:text-white font-extrabold' : 'text-slate-800 dark:text-slate-200'}`}>{p.name}</span>
                </button>
              )
            })}
            <button
              type="button"
              onClick={openSidebar}
              className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border border-dashed border-emerald-400 dark:border-emerald-600 bg-emerald-100/70 dark:bg-emerald-950/70 text-emerald-900 dark:text-emerald-200 hover:bg-emerald-200 dark:hover:bg-emerald-900/60 transition-all cursor-pointer"
            >
              <Layers size={13} className="text-emerald-700 dark:text-emerald-400" />
              <span>All Tested Projects</span>
            </button>
          </div>

          {/* Mobile Swipe Gesture Helper */}
          <div className="flex lg:hidden items-center justify-center gap-1.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-1 mb-2 select-none">
            <span>← Swipe left / right to switch projects →</span>
          </div>

          {/* Desktop: Vertical project list with airy cards */}
          <div className="hidden lg:flex lg:col-span-5 flex-col gap-3.5">
            {SHOWCASE_PROJECTS.map((p) => {
              const isActive = activeId === p.id
              return (
                <button
                  key={p.id}
                  onClick={() => handleSelectProject(p.id)}
                  className="relative w-full text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer group active:scale-[0.99] border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-sky-400 dark:hover:border-slate-600 overflow-hidden"
                >
                  {/* Shared Layout Active Indicator Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectIndicator"
                      className="absolute inset-0 rounded-2xl border-2 border-sky-500 dark:border-sky-400 bg-sky-50 dark:bg-sky-950/70 shadow-lg shadow-sky-500/10 dark:shadow-sky-500/10 pointer-events-none"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}

                  <div className="relative z-10 flex items-center justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] font-extrabold tracking-widest uppercase text-sky-700 dark:text-sky-300 mb-1.5 flex items-center gap-2">
                        <span>{p.domain}</span>
                        {p.tag && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-700">
                            {p.tag}
                          </span>
                        )}
                      </div>
                      <div className={`text-sm sm:text-[15px] font-extrabold truncate transition-colors ${
                        isActive ? 'text-slate-950 dark:text-white' : 'text-slate-800 dark:text-slate-200 group-hover:text-sky-700 dark:group-hover:text-sky-300'
                      }`}>
                        {p.name}
                      </div>
                    </div>
                    <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg transition-colors border ${
                      isActive
                        ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
                        : 'text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 group-hover:text-slate-950 dark:group-hover:text-white'
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
              onClick={openSidebar}
              className="mt-3 flex items-center justify-between w-full p-4 sm:p-4.5 rounded-2xl border border-dashed border-emerald-400 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 text-emerald-900 dark:text-emerald-200 transition-all duration-200 group text-sm font-bold cursor-pointer"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <Layers size={16} className="text-emerald-700 dark:text-emerald-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="truncate">View All Tested Projects</span>
              </div>
              <ArrowRight size={16} className="text-emerald-700 dark:text-emerald-400 group-hover:translate-x-1.5 transition-transform flex-shrink-0 ml-2" />
            </button>
          </div>

          {/* Right: details card with generous internal blank space & 2-column deliverable cards */}
          <div
            className="lg:col-span-7 overflow-x-clip min-h-[460px]"
            onTouchStart={handleProjectTouchStart}
            onTouchEnd={handleProjectTouchEnd}
          >
            <AnimatePresence mode="wait" custom={direction}>
              {active && (
                <motion.div
                  key={activeId}
                  custom={direction}
                  variants={projectSlideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative overflow-hidden p-8 sm:p-10 lg:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 shadow-md hover:shadow-xl hover:shadow-sky-500/10 dark:hover:shadow-sky-500/5 hover:border-sky-500 dark:hover:border-sky-500 transition-all duration-300"
                >
                  {/* Glowing subtle top accent bar */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 origin-left"
                  />

                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="text-xs sm:text-[13px] font-extrabold tracking-widest text-sky-700 dark:text-sky-300 uppercase">
                        {active.domain}
                      </span>
                      {active.tag && (
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-700">
                          {active.tag}
                        </span>
                      )}
                    </div>
                    <span className="text-sm font-mono font-bold text-slate-600 dark:text-slate-400">
                      #{active.num}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-950 dark:text-white mb-3 tracking-tight">
                    {active.name}
                  </h3>

                  {/* Clean, open description — NO nested box */}
                  {active.description && (
                    <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base mb-6 leading-relaxed font-medium max-w-2xl">
                      {active.description}
                    </p>
                  )}

                  <div className="h-px bg-slate-300 dark:bg-slate-700 my-8" />

                  <div className="text-xs sm:text-sm font-extrabold tracking-widest text-slate-700 dark:text-slate-300 uppercase mb-5">
                    Key Deliverables &amp; Core Modules
                  </div>

                  {/* 2-Column Grid of Deliverables with staggered entrance */}
                  <motion.div
                    initial="hidden"
                    animate="show"
                    variants={{
                      hidden: {},
                      show: {
                        transition: {
                          staggerChildren: 0.045,
                          delayChildren: 0.08,
                        },
                      },
                    }}
                    className="grid sm:grid-cols-2 gap-4"
                  >
                    {active.bullets.map((b, idx) => (
                      <motion.div
                        key={idx}
                        variants={{
                          hidden: { opacity: 0, y: 12, scale: 0.98 },
                          show: {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] },
                          },
                        }}
                        className="p-4 sm:p-4.5 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-sky-500 dark:hover:border-sky-400 transition-all duration-200 flex items-center gap-3 group/item cursor-default"
                      >
                        <CheckCircle2 size={18} className="text-sky-600 dark:text-sky-400 flex-shrink-0 transition-transform duration-200 group-hover/item:scale-110" />
                        <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug">
                          {b}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>

      {/* Slide-out Sidebar Drawer: All Tested Projects */}
      {isSidebarMounted && (
        <div
          className="fixed inset-0 z-50 overflow-hidden overscroll-contain"
          role="dialog"
          aria-modal="true"
          aria-labelledby="all-projects-sidebar-title"
        >
          {/* Backdrop overlay with blur & smooth transition */}
          <div
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm overscroll-contain"
            style={{
              transition: isDragging
                ? 'none'
                : 'opacity 400ms cubic-bezier(0.32, 0.72, 0, 1)',
              opacity: isDragging
                ? Math.max(0, 1 - dragOffset / (panelRef.current?.offsetWidth || 360))
                : isSidebarVisible
                ? 1
                : 0,
              pointerEvents: isSidebarVisible ? 'auto' : 'none'
            }}
            onClick={closeSidebar}
            onWheel={(e) => e.preventDefault()}
            aria-hidden="true"
          />

          {/* Slide-out Sidebar Panel from Right with gesture-tracking & matched 400ms smooth transition */}
          <aside
            ref={panelRef}
            className="fixed inset-y-0 right-0 z-50 w-full sm:w-[500px] md:w-[560px] max-w-full bg-white dark:bg-slate-900 border-l border-slate-300 dark:border-slate-700 sidebar-shadow flex flex-col overflow-hidden overscroll-contain"
            style={{
              overscrollBehavior: 'contain',
              willChange: 'transform',
              transition: isDragging
                ? 'none'
                : 'transform 400ms cubic-bezier(0.32, 0.72, 0, 1)',
              transform: isDragging
                ? `translate3d(${dragOffset}px, 0, 0)`
                : isSidebarVisible
                ? 'translate3d(0, 0, 0)'
                : 'translate3d(100%, 0, 0)'
            }}
            onTouchStart={handleSidebarTouchStart}
            onTouchMove={handleSidebarTouchMove}
            onTouchEnd={handleSidebarTouchEnd}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Swipe Gesture Handle Bar */}
            <div className="w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mt-2.5 mb-1 sm:hidden flex-shrink-0 cursor-grab active:cursor-grabbing" />

            {/* Sidebar Header with maximum breathing space */}
            <div className="flex items-center justify-between p-5 sm:px-8 sm:py-6 border-b border-slate-300 dark:border-slate-700 flex-shrink-0 bg-white dark:bg-slate-900">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200 text-xs font-bold mb-2">
                  <FileSpreadsheet size={12} />
                  <span>QA Directory</span>
                </div>
                <h3 id="all-projects-sidebar-title" className="text-xl sm:text-2xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                  All Tested Projects
                </h3>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium sm:hidden block mt-0.5">
                  👉 Swipe right or tap close
                </span>
              </div>
              <button
                type="button"
                onClick={closeSidebar}
                className="p-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 transition-colors cursor-pointer"
                aria-label="Close sidebar"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Project Cards List with contained overscroll */}
            <div
              className="overflow-y-auto overscroll-contain p-6 sm:p-8 space-y-4 sm:space-y-5 flex-1"
              style={{ overscrollBehavior: 'contain' }}
            >
              {ALL_TESTED_PROJECTS.map((p) => (
                <div
                  key={p.num}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 shadow-xs hover:shadow-md hover:border-sky-500 dark:hover:border-sky-400 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-md bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-200 border border-sky-300 dark:border-sky-700">
                        #{p.num}
                      </span>
                      {p.tag && (
                        <span
                          className={`text-[11px] truncate ${
                            p.tag === 'Team Lead'
                              ? 'font-bold text-amber-900 dark:text-amber-200 bg-amber-100 dark:bg-amber-950 px-2.5 py-0.5 rounded-md border border-amber-300 dark:border-amber-700'
                              : 'font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 px-2 py-0.5 rounded-md'
                          }`}
                        >
                          {p.tag}
                        </span>
                      )}
                    </div>
                    <h4 className="text-base font-extrabold text-slate-950 dark:text-white mb-1.5">
                      {p.name}
                    </h4>
                    <p className="text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-medium leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar Footer with generous breathing space */}
            <div className="flex items-center justify-between p-5 sm:px-8 border-t border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 flex-shrink-0">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                QA Project Directory
              </span>
              <button
                type="button"
                onClick={closeSidebar}
                className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-700 text-xs sm:text-sm font-bold transition-colors cursor-pointer"
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
