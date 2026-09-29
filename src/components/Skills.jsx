import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SKILL_CATEGORIES, TOOLS } from '../data/portfolioData'
import {
  CheckSquare,
  Wrench,
  Sparkles,
  Zap,
  Eye,
  Smartphone,
  Database,
  Cpu
} from 'lucide-react'

const CATEGORY_ICONS = {
  manual: CheckSquare,
  api: Zap,
  accessibility: Eye,
  mobile: Smartphone,
  database: Database,
  automation: Cpu
}

function getBadgeStyle(level = '') {
  const norm = level.toLowerCase()
  if (norm.includes('primary')) {
    return 'bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-200 border-sky-300 dark:border-sky-700 font-bold'
  }
  if (norm.includes('working') || norm.includes('knowledge')) {
    return 'bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-200 border-amber-300 dark:border-amber-700 font-bold'
  }
  return 'bg-purple-100 dark:bg-purple-950 text-purple-900 dark:text-purple-200 border-purple-300 dark:border-purple-700 font-bold'
}

const slideVariants = {
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
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.028,
      delayChildren: 0.04,
    },
  },
  exit: (dir) => ({
    x: dir > 0 ? -44 : 44,
    opacity: 0,
    filter: 'blur(4px)',
    transition: {
      duration: 0.26,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

const itemVariants = {
  enter: (dir) => ({
    opacity: 0,
    x: dir > 0 ? 20 : -20,
    y: 8,
    scale: 0.97,
  }),
  center: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.42,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('skills')
  const [direction, setDirection] = useState(1) // 1 for right, -1 for left
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)

  const handleTabSwitch = (newTab) => {
    if (newTab === activeTab) return
    setDirection(newTab === 'tools' ? 1 : -1)
    setActiveTab(newTab)
  }

  // Touch swipe support to switch tabs on mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e) => {
    const diffX = e.changedTouches[0].clientX - touchStartX.current
    const diffY = e.changedTouches[0].clientY - touchStartY.current

    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX < 0 && activeTab === 'skills') {
        handleTabSwitch('tools')
      } else if (diffX > 0 && activeTab === 'tools') {
        handleTabSwitch('skills')
      }
    }
  }

  return (
    <section
      id="skills"
      className="py-20 sm:py-28 lg:py-32 bg-slate-50/80 dark:bg-slate-950/90 border-b border-slate-300 dark:border-slate-800 transition-colors duration-300"
      aria-labelledby="skills-heading"
    >
      <div className="section-container">
        {/* Header & Segmented Switcher with generous blank spacing */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 border border-sky-300 dark:border-sky-800 text-sky-800 dark:text-sky-200 text-xs sm:text-[13px] font-extrabold tracking-wide uppercase mb-3">
              <Sparkles size={13} className="text-sky-700 dark:text-sky-400" />
              <span>Expertise &amp; Interactive Toolbox</span>
            </div>
            <h2
              id="skills-heading"
              className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight"
            >
              Key Skills &amp; <span className="text-sky-700 dark:text-sky-400">Toolbox</span>
            </h2>
            <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base mt-2.5 max-w-xl font-medium leading-relaxed">
              Hands-on testing disciplines, automated test suites, and verified QA platforms.
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-end w-full sm:w-auto">
            <div
              className="relative grid grid-cols-2 p-1.5 rounded-2xl glass-panel border border-slate-300 dark:border-slate-700 shadow-sm w-full sm:w-[360px] self-stretch sm:self-auto select-none"
              role="tablist"
            >
              <button
                role="tab"
                aria-selected={activeTab === 'skills'}
                onClick={() => handleTabSwitch('skills')}
                className={`relative z-10 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors duration-200 cursor-pointer ${
                  activeTab === 'skills'
                    ? 'text-white'
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                {activeTab === 'skills' && (
                  <motion.div
                    layoutId="activeSkillsTabPill"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 shadow-md shadow-sky-500/30"
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <CheckSquare
                    size={16}
                    className={`transition-transform duration-300 ${
                      activeTab === 'skills' ? 'scale-110' : 'text-slate-500 dark:text-slate-400'
                    }`}
                  />
                  <span>Disciplines</span>
                </span>
              </button>

              <button
                role="tab"
                aria-selected={activeTab === 'tools'}
                onClick={() => handleTabSwitch('tools')}
                className={`relative z-10 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors duration-200 cursor-pointer ${
                  activeTab === 'tools'
                    ? 'text-white'
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                {activeTab === 'tools' && (
                  <motion.div
                    layoutId="activeSkillsTabPill"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 shadow-md shadow-sky-500/30"
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Wrench
                    size={16}
                    className={`transition-transform duration-300 ${
                      activeTab === 'tools' ? 'scale-110' : 'text-slate-500 dark:text-slate-400'
                    }`}
                  />
                  <span>Toolbox ({TOOLS.length})</span>
                </span>
              </button>
            </div>

            {/* Mobile Swipe Gesture Helper */}
            <div className="flex sm:hidden items-center justify-center gap-1.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-2 select-none">
              <span>← Swipe left / right to toggle →</span>
            </div>
          </div>
        </div>

        {/* Tab Content with Framer Motion AnimatePresence and staggered arranging */}
        <div
          className="w-full overflow-hidden min-h-[380px]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            {activeTab === 'skills' ? (
              <motion.div
                key="skills"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 pt-1 pb-4"
              >
                {SKILL_CATEGORIES.map((cat) => {
                  const IconComp = CATEGORY_ICONS[cat.id] || CheckSquare
                  return (
                    <motion.div
                      key={cat.id}
                      custom={direction}
                      variants={itemVariants}
                      className="relative rounded-3xl p-6 sm:p-7 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700/90 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 dark:hover:shadow-sky-500/10 hover:border-sky-500 dark:hover:border-sky-500 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between overflow-hidden cursor-default"
                    >
                      {/* Subtle top accent gradient bar on hover */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div>
                        {/* Header with Icon, Category Title, and Level Badge without wrapping */}
                        <div className="flex items-center justify-between gap-3 mb-5">
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-950 border border-sky-300 dark:border-sky-700 text-sky-700 dark:text-sky-300 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-2xs">
                              <IconComp size={19} />
                            </div>
                            <h3 className="text-base sm:text-lg font-extrabold text-slate-950 dark:text-white group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors truncate">
                              {cat.label}
                            </h3>
                          </div>
                          <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border whitespace-nowrap flex-shrink-0 uppercase tracking-wider transition-transform duration-200 group-hover:scale-105 ${getBadgeStyle(cat.level)}`}>
                            {cat.level}
                          </span>
                        </div>

                        {/* Airy Skill Chips with generous spacing */}
                        <div className="flex flex-wrap gap-2 pt-1">
                          {cat.skills.map((s) => (
                            <span
                              key={s}
                              className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-850 dark:text-slate-100 text-xs sm:text-[13px] font-bold hover:border-sky-500 dark:hover:border-sky-400 hover:text-sky-700 dark:hover:text-sky-300 hover:bg-sky-50 dark:hover:bg-sky-950/50 hover:scale-[1.03] transition-all duration-200 cursor-default"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            ) : (
              <motion.div
                key="tools"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 pt-1 pb-4"
              >
                {TOOLS.map((tool) => (
                  <motion.div
                    key={tool.name}
                    custom={direction}
                    variants={itemVariants}
                    className="rounded-2xl p-4 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 shadow-xs flex items-center gap-3.5 group hover:-translate-y-1.5 hover:shadow-lg hover:shadow-sky-500/10 hover:border-sky-500 dark:hover:border-sky-400 active:scale-[0.98] transition-all duration-300 cursor-default"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center text-xl flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-md group-hover:border-sky-400 dark:group-hover:border-sky-500 shadow-2xs">
                      {tool.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-slate-950 dark:text-white text-sm sm:text-[15px] font-extrabold truncate group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors">
                        {tool.name}
                      </p>
                      <p className="text-sky-700 dark:text-sky-300 text-xs font-bold truncate mt-0.5">{tool.category}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

