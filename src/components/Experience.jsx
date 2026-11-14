import { Briefcase, Check, MapPin, Calendar } from 'lucide-react'
import { WORK_EXPERIENCE } from '../data/portfolioData'

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-14 sm:py-20 lg:py-24 bg-white dark:bg-slate-950 border-b border-slate-300 dark:border-slate-800 transition-colors duration-300 overflow-hidden"
      aria-labelledby="experience-heading"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 border border-sky-300 dark:border-sky-800 text-sky-800 dark:text-sky-200 text-xs sm:text-[13px] font-extrabold tracking-wide uppercase mb-3">
            <Briefcase size={13} className="text-sky-700 dark:text-sky-400" />
            <span>Career Journey</span>
          </div>

          <h2
            id="experience-heading"
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight"
          >
            Work <span className="text-sky-700 dark:text-sky-400">Experience</span>
          </h2>

          <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base mt-2.5 max-w-xl font-medium leading-relaxed">
            Hands-on quality assurance, end-to-end test execution, and cross-functional team collaboration.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-3xl space-y-6">
          {WORK_EXPERIENCE.map((exp) => (
            <div
              key={exp.id || exp.company}
              className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 dark:hover:shadow-sky-500/10 hover:border-sky-500 dark:hover:border-sky-500 transition-all duration-300 group overflow-hidden"
            >
              {/* Subtle top accent gradient bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Role Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">
                      Current Position
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="text-slate-700 dark:text-slate-300 font-semibold text-sm sm:text-base mt-1 flex flex-wrap items-center gap-2">
                    <span className="text-sky-700 dark:text-sky-300 font-bold">{exp.company}</span>
                    <span className="text-slate-400">·</span>
                    <span className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium">
                      <MapPin size={13} className="text-sky-600 dark:text-sky-400" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/80 border border-sky-200 dark:border-sky-800 text-sky-800 dark:text-sky-300 text-xs sm:text-sm font-bold self-start sm:self-center flex-shrink-0">
                  <Calendar size={13} className="text-sky-600 dark:text-sky-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3.5 sm:space-y-4" role="list">
                {exp.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-slate-800 dark:text-slate-200 text-sm sm:text-[15px] font-medium leading-relaxed"
                  >
                    <div className="w-5 h-5 rounded-full bg-sky-100 dark:bg-sky-950 border border-sky-300 dark:border-sky-800 text-sky-700 dark:text-sky-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
