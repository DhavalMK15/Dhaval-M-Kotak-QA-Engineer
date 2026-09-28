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
      className="py-14 sm:py-20 lg:py-28 bg-white dark:bg-slate-900 border-b border-slate-300 dark:border-slate-800 transition-colors duration-300 overflow-hidden"
      aria-labelledby="ai-heading"
    >
      <div className="section-container px-4 sm:px-6 lg:px-8">
        {/* Header with responsive spacing */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 border border-sky-300 dark:border-sky-800 text-sky-800 dark:text-sky-200 text-xs sm:text-[13px] font-extrabold tracking-wide uppercase mb-3">
            <Sparkles size={13} className="text-sky-700 dark:text-sky-400" />
            <span>Modern QA Capabilities</span>
          </div>
          <h2
            id="ai-heading"
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight"
          >
            AI-Assisted QA &amp; <span className="text-sky-700 dark:text-sky-400">Automation</span>
          </h2>
          <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base mt-2.5 max-w-xl font-medium leading-relaxed">
            Prompt engineering, test data synthesis, and script scaffolding.
          </p>
        </div>

        {/* 2-Column UI Layout with responsive gap */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left Column: AI-Assisted Workflows */}
          <div className="lg:col-span-6 w-full">
            <div className="relative rounded-3xl p-5 sm:p-7 md:p-8 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 dark:hover:shadow-sky-500/10 hover:border-sky-500 dark:hover:border-sky-500 transition-all duration-300 group overflow-hidden cursor-default">
              {/* Subtle top accent gradient bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-center gap-3 sm:gap-3.5 mb-5 sm:mb-6">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-sky-100 dark:bg-sky-950 border border-sky-300 dark:border-sky-700 text-sky-700 dark:text-sky-300 flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:scale-105 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                  <Bot size={20} className="sm:w-[22px] sm:h-[22px]" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-950 dark:text-white group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors leading-snug">
                    AI as a QA Multiplier
                  </h3>
                  <p className="text-sky-700 dark:text-sky-400 font-bold text-xs sm:text-[13px] mt-0.5 truncate sm:whitespace-normal">
                    Antigravity AI · Prompt Engineering
                  </p>
                </div>
              </div>

              {/* Keyword Deliverables */}
              <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                {AI_WORKFLOWS.map((w) => (
                  <div
                    key={w}
                    className="p-3 sm:p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 flex items-start sm:items-center gap-2.5 sm:gap-3 hover:border-sky-400 dark:hover:border-sky-600 transition-all duration-200 group/item"
                  >
                    <CheckCircle2 size={17} className="text-sky-600 dark:text-sky-400 flex-shrink-0 mt-0.5 sm:mt-0 transition-transform duration-200 group-hover/item:scale-110" />
                    <span className="text-slate-900 dark:text-slate-100 text-xs sm:text-sm font-bold leading-snug">
                      {w}
                    </span>
                  </div>
                ))}
              </div>

              {/* Clean Minimal Focus Pill with full wrap protection */}
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl bg-amber-100 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-700 text-amber-950 dark:text-amber-200 text-xs sm:text-sm font-bold w-full max-w-full">
                <span className="flex-shrink-0 text-sm">🎯</span>
                <span className="leading-snug break-words">Manual QA Core · Expanding Automation &amp; AI</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Automation Pillars with keyword chips */}
          <div className="lg:col-span-6 w-full space-y-3 sm:space-y-3.5">
            {AUTOMATION_PILLARS.map((p) => {
              const isSelected = activePillarId === p.id

              return (
                <div
                  key={p.id}
                  onClick={() => setActivePillarId(p.id)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer group active:scale-[0.99] ${
                    isSelected
                      ? 'bg-sky-50 dark:bg-sky-950/70 border-sky-500 dark:border-sky-400 shadow-md ring-1 ring-sky-500 -translate-y-0.5'
                      : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:border-sky-400 dark:hover:border-slate-600 sm:hover:translate-x-1'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center text-lg flex-shrink-0 shadow-2xs group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                        {p.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 mb-1 sm:hidden">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-200 border border-sky-300 dark:border-sky-700 uppercase tracking-wide">
                            {p.badge}
                          </span>
                        </div>
                        <h3 className={`text-sm sm:text-base font-extrabold leading-snug transition-colors duration-200 break-words ${
                          isSelected
                            ? 'text-sky-950 dark:text-sky-200'
                            : 'text-slate-950 dark:text-white group-hover:text-sky-700 dark:group-hover:text-sky-400'
                        }`}>
                          {p.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0 mt-0.5 sm:mt-0">
                      <span className="hidden sm:inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-200 border border-sky-300 dark:border-sky-700 uppercase tracking-wide">
                        {p.badge}
                      </span>
                      <ChevronRight
                        size={16}
                        className={`transition-all duration-200 ${isSelected ? 'rotate-90 text-sky-600 dark:text-sky-400' : 'text-slate-500 dark:text-slate-400 group-hover:translate-x-1 group-hover:text-sky-600'}`}
                      />
                    </div>
                  </div>

                  {/* Clean Keyword Chips with responsive wrapping */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                    {p.keywords.map((k) => (
                      <span
                        key={k}
                        className={`text-[11px] sm:text-[13px] font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl border transition-all duration-200 cursor-default leading-tight ${
                          isSelected
                            ? 'bg-white dark:bg-slate-900 text-sky-900 dark:text-sky-200 border-sky-400 dark:border-sky-600 shadow-2xs'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 group-hover:border-sky-300 dark:group-hover:border-sky-700'
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
