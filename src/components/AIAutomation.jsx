import { useState } from 'react'
import { Bot, Sparkles, CheckCircle2, ChevronRight, Terminal, Cpu } from 'lucide-react'

const AI_WORKFLOWS = [
  'Test Scenarios & Edge Cases',
  'Negative & Boundary Data Synthesis',
  'ADA / WCAG Accessibility Checklists',
  'Selenium & Pytest Script Scaffolding',
]

const AUTOMATION_PILLARS = [
  {
    id: 'selenium',
    title: 'Selenium WebDriver + Python',
    badge: 'Hands-on',
    icon: '🤖',
    keywords: ['Page Object Model (POM)', 'Fluent Waits', 'Headless CI/CD'],
  },
  {
    id: 'pytest',
    title: 'Pytest Framework',
    badge: 'Framework',
    icon: '🧪',
    keywords: ['Test Fixtures', 'Parameterized Tests', 'HTML Reports'],
  },
  {
    id: 'postman',
    title: 'Postman Collections',
    badge: 'API Suite',
    icon: '📮',
    keywords: ['Dynamic Variables', 'Schema Assertions', 'Automated Suites'],
  },
  {
    id: 'ai-prompt',
    title: 'AI Productivity (Antigravity)',
    badge: 'AI Multiplier',
    icon: '✨',
    keywords: ['Prompt Engineering', 'Edge Case Synthesis', 'Script Scaffolding'],
  },
]

export default function AIAutomation() {
  const [activePillarId, setActivePillarId] = useState(AUTOMATION_PILLARS[0].id)

  return (
    <section
      id="ai-automation"
      className="py-20 sm:py-28 lg:py-32 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-300"
      aria-labelledby="ai-heading"
    >
      <div className="section-container">
        {/* Header with generous blank space */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/70 border border-sky-100 dark:border-sky-800 text-sky-700 dark:text-sky-300 text-xs sm:text-[13px] font-bold tracking-wide uppercase mb-3">
            <Sparkles size={13} className="text-sky-600 dark:text-sky-400" />
            <span>Modern QA Capabilities</span>
          </div>
          <h2
            id="ai-heading"
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            AI-Assisted QA &amp; <span className="text-sky-600 dark:text-sky-400">Automation</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-2.5 max-w-xl leading-relaxed">
            Prompt engineering, test data synthesis, and script scaffolding.
          </p>
        </div>

        {/* 2-Column UI Layout with generous gap */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start">
          {/* Left Column: AI-Assisted Workflows */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl p-7 sm:p-8 bg-white/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-xs hover:shadow-xl hover:shadow-sky-500/10 dark:hover:shadow-sky-500/5 hover:border-sky-400/80 dark:hover:border-sky-500/60 transition-all duration-300 group overflow-hidden cursor-default">
              {/* Subtle top accent gradient bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-sky-500/10 dark:bg-sky-500/15 border border-sky-500/20 text-sky-600 dark:text-sky-400 flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:scale-105 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                  <Bot size={22} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    AI as a QA Multiplier
                  </h3>
                  <p className="text-sky-600 dark:text-sky-400 font-semibold text-xs sm:text-[13px] mt-0.5">
                    Antigravity AI · Prompt Engineering
                  </p>
                </div>
              </div>

              {/* Keyword Deliverables */}
              <div className="space-y-3 mb-8">
                {AI_WORKFLOWS.map((w) => (
                  <div
                    key={w}
                    className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800/70 flex items-center gap-3 hover:border-sky-300 dark:hover:border-sky-600 transition-all duration-200 group/item"
                  >
                    <CheckCircle2 size={17} className="text-sky-500 dark:text-sky-400 flex-shrink-0 transition-transform duration-200 group-hover/item:scale-110" />
                    <span className="text-slate-700 dark:text-slate-200 text-sm font-semibold">
                      {w}
                    </span>
                  </div>
                ))}
              </div>

              {/* Clean Minimal Focus Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-800 dark:text-amber-300 text-xs sm:text-sm font-semibold">
                <span>🎯</span>
                <span>Manual QA Core · Expanding Automation &amp; AI</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Automation Pillars with keyword chips */}
          <div className="lg:col-span-6 space-y-3.5">
            {AUTOMATION_PILLARS.map((p) => {
              const isSelected = activePillarId === p.id

              return (
                <div
                  key={p.id}
                  onClick={() => setActivePillarId(p.id)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer group active:scale-[0.99] ${
                    isSelected
                      ? 'bg-sky-50/70 dark:bg-sky-950/40 border-sky-400 dark:border-sky-500/80 shadow-md ring-1 ring-sky-300/60 dark:ring-sky-500/30 -translate-y-0.5'
                      : 'bg-white/80 dark:bg-slate-900/60 border-slate-200/80 dark:border-slate-800/80 hover:bg-slate-50/80 dark:hover:bg-slate-800/60 hover:border-sky-300 dark:hover:border-slate-700 hover:translate-x-1'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center text-lg flex-shrink-0 shadow-2xs group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                        {p.icon}
                      </div>
                      <h3 className={`text-sm sm:text-base font-bold truncate transition-colors duration-200 ${
                        isSelected
                          ? 'text-sky-900 dark:text-sky-200 font-extrabold'
                          : 'text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400'
                      }`}>
                        {p.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-sky-50 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 border border-sky-200/60 dark:border-sky-800/60 uppercase tracking-wide">
                        {p.badge}
                      </span>
                      <ChevronRight
                        size={16}
                        className={`text-slate-400 transition-all duration-200 ${isSelected ? 'rotate-90 text-sky-500' : 'group-hover:translate-x-1 group-hover:text-sky-500'}`}
                      />
                    </div>
                  </div>

                  {/* Clean Keyword Chips with generous breathing room */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {p.keywords.map((k) => (
                      <span
                        key={k}
                        className={`text-xs sm:text-[13px] font-medium px-3 py-1.5 rounded-xl border transition-all duration-200 cursor-default ${
                          isSelected
                            ? 'bg-white dark:bg-slate-900 text-sky-900 dark:text-sky-200 border-sky-300/80 dark:border-sky-700/80 shadow-2xs'
                            : 'bg-slate-50/80 dark:bg-slate-800/40 text-slate-600 dark:text-slate-300 border-slate-200/60 dark:border-slate-700/50 group-hover:border-sky-200 dark:group-hover:border-sky-800'
                        }`}
                      >
                        {k}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
