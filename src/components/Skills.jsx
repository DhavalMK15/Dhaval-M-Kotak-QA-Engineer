import { useState } from 'react'
import { SKILL_CATEGORIES, TOOLS } from '../data/portfolioData'
import { CheckSquare, Wrench, Sparkles } from 'lucide-react'

export default function Skills() {
  const [activeTab, setActiveTab] = useState('skills')

  return (
    <section
      id="skills"
      className="py-5 sm:py-6 bg-slate-50/70 dark:bg-slate-950/70 border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-300"
      aria-labelledby="skills-heading"
    >
      <div className="section-container">
        {/* Header & Segmented Switcher with +15% spacing */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3.5 mb-4 sm:mb-4.5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/70 border border-sky-100 dark:border-sky-800 text-sky-700 dark:text-sky-300 text-[12px] font-bold tracking-wide uppercase mb-1.5">
              <Sparkles size={12} className="text-sky-600 dark:text-sky-400" />
              <span>Expertise & Interactive Toolbox</span>
            </div>
            <h2
              id="skills-heading"
              className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight"
            >
              Key Skills & <span className="text-sky-600 dark:text-sky-400">Toolbox</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-[13px] mt-1 max-w-xl">
              Explore hands-on testing disciplines and filter through verified QA tools and platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:inline-flex p-1 sm:p-1.5 rounded-xl glass-panel shadow-2xs w-full sm:w-auto self-stretch sm:self-auto" role="tablist">
            <button
              onClick={() => setActiveTab('skills')}
              className={`flex items-center justify-center gap-1.5 px-3 sm:px-3.5 py-2 sm:py-1.5 rounded-lg text-xs sm:text-[13px] font-bold transition-all duration-200 ${
                activeTab === 'skills'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <CheckSquare size={14} />
              <span>Disciplines</span>
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`flex items-center justify-center gap-1.5 px-3 sm:px-3.5 py-2 sm:py-1.5 rounded-lg text-xs sm:text-[13px] font-bold transition-all duration-200 ${
                activeTab === 'tools'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Wrench size={14} />
              <span>Toolbox ({TOOLS.length})</span>
            </button>
          </div>
        </div>

        {/* TAB 1: SKILLS with responsive gap and card padding */}
        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5">
            {SKILL_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="card-modern card-top-accent p-3.5 sm:p-4 flex flex-col justify-between hover:-translate-y-1 hover:shadow-md hover:border-sky-300 dark:hover:border-sky-700/70 transition-all duration-200 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <h3 className="text-[14px] sm:text-[15px] font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {cat.label}
                    </h3>
                    <span className="text-[10px] sm:text-[10.5px] font-bold px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 uppercase tracking-wide">
                      {cat.level}
                    </span>
                  </div>

                  {/* Interactive progress accent bar */}
                  <div className="h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden mb-3">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 transition-all duration-500 group-hover:brightness-110"
                      style={{ width: `${cat.barWidth}%` }}
                    />
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded-md bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-[11.5px] sm:text-[12.5px] font-medium hover:bg-sky-50 dark:hover:bg-sky-950/40 hover:border-sky-300 dark:hover:border-sky-500 hover:text-sky-700 dark:hover:text-sky-300 transition-all duration-200"
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
                className="card-modern p-3 sm:p-3.5 flex items-center gap-3 group hover:-translate-y-1 hover:shadow-md hover:border-sky-300 dark:hover:border-sky-700/70 transition-all duration-200 cursor-default"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 border border-sky-100 dark:border-slate-700 flex items-center justify-center text-lg flex-shrink-0 transition-transform duration-200 group-hover:scale-110 shadow-2xs">
                  {tool.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-slate-900 dark:text-white text-[13px] sm:text-[13.5px] font-bold truncate group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {tool.name}
                  </p>
                  <p className="text-sky-600 dark:text-sky-400 text-[11px] sm:text-[11.5px] font-medium truncate">{tool.category}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
