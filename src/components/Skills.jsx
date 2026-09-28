import { useState } from 'react'
import { SKILL_CATEGORIES, TOOLS } from '../data/portfolioData'
import { CheckSquare, Wrench, Sparkles } from 'lucide-react'

export default function Skills() {
  const [activeTab, setActiveTab] = useState('skills')

  return (
    <section
      id="skills"
      className="py-10 sm:py-14 bg-slate-50/70 dark:bg-slate-950/70 border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-300"
      aria-labelledby="skills-heading"
    >
      <div className="section-container">
        {/* Header & Segmented Switcher with +15% spacing */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/70 border border-sky-100 dark:border-sky-800 text-sky-700 dark:text-sky-300 text-xs sm:text-[13px] font-bold tracking-wide uppercase mb-2">
              <Sparkles size={13} className="text-sky-600 dark:text-sky-400" />
              <span>Expertise & Interactive Toolbox</span>
            </div>
            <h2
              id="skills-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight"
            >
              Key Skills & <span className="text-sky-600 dark:text-sky-400">Toolbox</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-1.5 max-w-xl leading-relaxed">
              Hands-on testing disciplines, automation capabilities, and verified QA platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:inline-flex p-1 sm:p-1.5 rounded-xl glass-panel shadow-2xs w-full sm:w-auto self-stretch sm:self-auto" role="tablist">
            <button
              onClick={() => setActiveTab('skills')}
              className={`flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === 'skills'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <CheckSquare size={15} />
              <span>Disciplines</span>
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === 'tools'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Wrench size={15} />
              <span>Toolbox ({TOOLS.length})</span>
            </button>
          </div>
        </div>

        {/* TAB 1: SKILLS with responsive gap and card padding */}
        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {SKILL_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="card-modern card-top-accent p-4 sm:p-5 flex flex-col justify-between hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-500/10 dark:hover:shadow-sky-500/5 hover:border-sky-400/80 dark:hover:border-sky-500/60 active:scale-[0.99] transition-all duration-300 group cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-200">
                      {cat.label}
                    </h3>
                    <span className="text-xs sm:text-[12.5px] font-bold px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 uppercase tracking-wide transition-all duration-300 group-hover:scale-105 group-hover:border-sky-300 dark:group-hover:border-sky-600">
                      {cat.level}
                    </span>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                    {cat.skills.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-medium hover:bg-sky-50 dark:hover:bg-sky-950/40 hover:border-sky-300 dark:hover:border-sky-500 hover:text-sky-700 dark:hover:text-sky-300 hover:scale-105 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-default"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: TOOLS — all tools */}
        {activeTab === 'tools' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3">
            {TOOLS.map((tool) => (
              <div
                key={tool.name}
                className="card-modern p-3 sm:p-3.5 flex items-center gap-3 group hover:-translate-y-2 hover:shadow-lg hover:shadow-sky-500/10 hover:border-sky-400 dark:hover:border-sky-500/70 active:scale-[0.98] transition-all duration-300 cursor-default"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 border border-sky-100 dark:border-slate-700 flex items-center justify-center text-lg flex-shrink-0 transition-all duration-300 group-hover:scale-125 group-hover:-rotate-6 group-hover:shadow-md group-hover:border-sky-300 dark:group-hover:border-sky-600 shadow-2xs">
                  {tool.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-slate-900 dark:text-white text-sm sm:text-[15px] font-bold truncate group-hover:text-sky-600 dark:group-hover:text-sky-400 group-hover:translate-x-1 transition-all duration-200">
                    {tool.name}
                  </p>
                  <p className="text-sky-600 dark:text-sky-400 text-xs sm:text-[13px] font-medium truncate">{tool.category}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
