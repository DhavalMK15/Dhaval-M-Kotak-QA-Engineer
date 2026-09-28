import { useState } from 'react'
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
    return 'bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/25'
  }
  if (norm.includes('working') || norm.includes('knowledge')) {
    return 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/25'
  }
  return 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/25'
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('skills')

  return (
    <section
      id="skills"
      className="py-20 sm:py-28 lg:py-32 bg-slate-50/70 dark:bg-slate-950/70 border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-300"
      aria-labelledby="skills-heading"
    >
      <div className="section-container">
        {/* Header & Segmented Switcher with generous blank spacing */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/70 border border-sky-100 dark:border-sky-800 text-sky-700 dark:text-sky-300 text-xs sm:text-[13px] font-bold tracking-wide uppercase mb-3">
              <Sparkles size={13} className="text-sky-600 dark:text-sky-400" />
              <span>Expertise &amp; Interactive Toolbox</span>
            </div>
            <h2
              id="skills-heading"
              className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
            >
              Key Skills &amp; <span className="text-sky-600 dark:text-sky-400">Toolbox</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-2.5 max-w-xl leading-relaxed">
              Hands-on testing disciplines, automated test suites, and verified QA platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:inline-flex p-1.5 rounded-2xl glass-panel shadow-2xs w-full sm:w-auto self-stretch sm:self-auto" role="tablist">
            <button
              onClick={() => setActiveTab('skills')}
              className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'skills'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <CheckSquare size={16} />
              <span>Disciplines</span>
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'tools'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Wrench size={16} />
              <span>Toolbox ({TOOLS.length})</span>
            </button>
          </div>
        </div>

        {/* TAB 1: SKILLS with modern elevated cards and generous breathing space */}
        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {SKILL_CATEGORIES.map((cat) => {
              const IconComp = CATEGORY_ICONS[cat.id] || CheckSquare
              return (
                <div
                  key={cat.id}
                  className="relative rounded-3xl p-6 sm:p-7 bg-white/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-xs hover:shadow-xl hover:shadow-sky-500/10 dark:hover:shadow-sky-500/5 hover:border-sky-400/80 dark:hover:border-sky-500/60 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between overflow-hidden cursor-default"
                >
                  {/* Subtle top accent gradient bar on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Header with Icon, Category Title, and Level Badge without wrapping */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-sky-500/10 dark:bg-sky-500/15 border border-sky-500/20 text-sky-600 dark:text-sky-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 shadow-2xs">
                          <IconComp size={19} />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors truncate">
                          {cat.label}
                        </h3>
                      </div>
                      <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border whitespace-nowrap flex-shrink-0 uppercase tracking-wider transition-transform duration-200 group-hover:scale-105 ${getBadgeStyle(cat.level)}`}>
                        {cat.level}
                      </span>
                    </div>

                    {/* Airy Skill Chips with generous spacing */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {cat.skills.map((s) => (
                        <span
                          key={s}
                          className="px-3.5 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 text-xs sm:text-[13px] font-medium hover:border-sky-400 dark:hover:border-sky-500/60 hover:text-sky-600 dark:hover:text-sky-300 hover:bg-sky-50/60 dark:hover:bg-sky-950/30 hover:scale-[1.03] transition-all duration-200 cursor-default"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* TAB 2: TOOLS — modern elevated tool cards */}
        {activeTab === 'tools' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {TOOLS.map((tool) => (
              <div
                key={tool.name}
                className="rounded-2xl p-4 bg-white/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md flex items-center gap-3.5 group hover:-translate-y-1.5 hover:shadow-lg hover:shadow-sky-500/10 hover:border-sky-400 dark:hover:border-sky-500/70 active:scale-[0.98] transition-all duration-300 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center text-xl flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-md group-hover:border-sky-300 dark:group-hover:border-sky-600 shadow-2xs">
                  {tool.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-slate-900 dark:text-white text-sm sm:text-[15px] font-bold truncate group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {tool.name}
                  </p>
                  <p className="text-sky-600 dark:text-sky-400 text-xs font-medium truncate mt-0.5">{tool.category}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
