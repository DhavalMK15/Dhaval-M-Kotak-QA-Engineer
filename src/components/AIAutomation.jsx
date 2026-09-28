import { useState } from 'react'
import { Bot, Sparkles, CheckCircle2, ChevronRight, Terminal, ArrowRight } from 'lucide-react'

const AI_WORKFLOWS = [
  'Test Scenarios & Matrices Generation from Specifications',
  'Negative & Boundary Value Test Data Synthesis',
  'ADA / WCAG Accessibility Checklist Drafting',
  'Selenium WebDriver + Pytest Script Scaffolding',
]

const AUTOMATION_PILLARS = [
  {
    id: 'selenium',
    title: 'Selenium WebDriver + Python',
    desc: 'Automating core smoke and regression critical paths across web portals (ClientTracker).',
    badge: 'Hands-on',
    icon: '🤖',
    highlights: ['Page Object Model (POM) architecture', 'Explicit & Fluent waits synchronization', 'Headless Chrome CI/CD execution'],
  },
  {
    id: 'pytest',
    title: 'Pytest Framework',
    desc: 'Structuring test fixtures, parameterization, and assertion logic for reliable test runs.',
    badge: 'Framework',
    icon: '🧪',
    highlights: ['Fixtures for clean setup & teardown', 'Parameterized multi-dataset test suites', 'HTML test execution reporting'],
  },
  {
    id: 'postman',
    title: 'Postman Collections',
    desc: 'API regression automation via automated test collections and environment variables.',
    badge: 'API Suite',
    icon: '📮',
    highlights: ['Pre-request scripts & dynamic tokens', 'Status code and JSON schema assertion tests', 'Multi-environment variables switching'],
  },
  {
    id: 'ai-prompt',
    title: 'AI Productivity (Antigravity)',
    desc: 'Prompt-driven generation of test cases, edge cases, and automation code templates.',
    badge: 'AI Multiplier',
    icon: '✨',
    highlights: ['Prompt-engineered boundary scenarios', 'Accessibility checklist generation', 'Rapid script boilerplate scaffolding'],
  },
]

export default function AIAutomation() {
  const [activePillarId, setActivePillarId] = useState(AUTOMATION_PILLARS[0].id)
  const activePillar = AUTOMATION_PILLARS.find((p) => p.id === activePillarId)

  return (
    <section
      id="ai-automation"
      className="py-10 sm:py-14 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-300"
      aria-labelledby="ai-heading"
    >
      <div className="section-container">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/70 border border-sky-100 dark:border-sky-800 text-sky-700 dark:text-sky-300 text-xs sm:text-[13px] font-bold tracking-wide uppercase mb-2">
            <Sparkles size={13} className="text-sky-600 dark:text-sky-400" />
            <span>Modern QA Capabilities</span>
          </div>
          <h2
            id="ai-heading"
            className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            AI-Assisted QA & <span className="text-sky-600 dark:text-sky-400">Automation</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-1 max-w-xl leading-relaxed">
            How I accelerate manual precision using AI productivity workflows and script scaffolding.
          </p>
        </div>

        {/* 2-Column Compact UI Layout */}
        <div className="grid lg:grid-cols-12 gap-4 sm:gap-5 items-start">
          {/* Left Column: AI-Assisted Workflows */}
          <div className="lg:col-span-6 space-y-3">
            <div className="card-modern card-top-accent p-4 sm:p-5 group hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-500/10 dark:hover:shadow-sky-500/5 hover:border-sky-400/80 dark:hover:border-sky-500/60 active:scale-[0.99] transition-all duration-300">
              <div className="flex items-center gap-2.5 mb-3.5">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 border border-sky-100 dark:border-slate-700 text-sky-600 dark:text-sky-400 flex items-center justify-center flex-shrink-0 shadow-2xs transition-all duration-300 group-hover:scale-125 group-hover:-rotate-6 group-hover:shadow-md group-hover:border-sky-300 dark:group-hover:border-sky-600">
                  <Bot size={19} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-200">
                    AI as a QA Multiplier
                  </h3>
                  <p className="text-sky-600 dark:text-sky-400 font-semibold text-xs sm:text-sm">Antigravity AI · Prompt Engineering</p>
                </div>
              </div>

              {/* Bullet points scaled */}
              <ul className="space-y-2.5 mb-4">
                {AI_WORKFLOWS.map((w) => (
                  <li key={w} className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300 text-sm sm:text-[15px] font-medium leading-snug transition-all duration-200 hover:translate-x-1.5 hover:text-sky-600 dark:hover:text-sky-400 cursor-default group/item">
                    <CheckCircle2 size={16} className="text-sky-500 dark:text-sky-400 flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover/item:scale-125" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>

              {/* Status Note */}
              <div className="p-3.5 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200/90 dark:border-amber-800/80 text-amber-900 dark:text-amber-200 text-xs sm:text-sm font-medium leading-relaxed flex items-start gap-2.5 transition-all duration-200 hover:border-amber-300 dark:hover:border-amber-700">
                <span className="text-sm sm:text-base flex-shrink-0 mt-0.5">🎯</span>
                <div>
                  <strong className="font-bold text-amber-950 dark:text-amber-100">Honest Positioning:</strong>{' '}
                  My core strength is Manual QA. Automation is an actively growing technical capability powered by AI tooling.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Automation Pillars */}
          <div className="lg:col-span-6 space-y-2.5">
            {AUTOMATION_PILLARS.map((p) => {
              const isSelected = activePillarId === p.id

              return (
                <div
                  key={p.id}
                  onClick={() => setActivePillarId(p.id)}
                  className={`p-3.5 sm:p-4 rounded-xl border transition-all duration-300 cursor-pointer group active:scale-[0.99] ${
                    isSelected
                      ? 'bg-sky-50/90 dark:bg-sky-950/40 border-sky-400 dark:border-sky-500/80 border-l-4 border-l-sky-500 dark:border-l-sky-400 shadow-md ring-1 ring-sky-300 dark:ring-sky-500/30 -translate-y-1'
                      : 'bg-white/80 dark:bg-slate-800/80 border-slate-200/80 dark:border-slate-700/80 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-sky-300 dark:hover:border-slate-600 hover:-translate-y-1.5 hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-lg flex-shrink-0 shadow-2xs transition-all duration-300 group-hover:scale-125 group-hover:rotate-6 group-hover:shadow-md group-hover:border-sky-300 dark:group-hover:border-sky-600">
                      {p.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className={`text-base sm:text-lg font-bold transition-colors duration-200 ${isSelected ? 'text-sky-950 dark:text-sky-200 font-black' : 'text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400'}`}>
                          {p.title}
                        </h3>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-sky-50 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 border border-sky-100 dark:border-sky-800 transition-all duration-200 group-hover:scale-105">
                            {p.badge}
                          </span>
                          <ChevronRight
                            size={15}
                            className={`text-slate-400 transition-all duration-200 ${isSelected ? 'rotate-90 text-sky-500' : 'group-hover:translate-x-1 group-hover:text-sky-500'}`}
                          />
                        </div>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-normal mb-2.5">
                        {p.desc}
                      </p>

                      {/* Interactive Drawer for selected pillar */}
                      {isSelected && (
                        <div className="pt-2.5 border-t border-sky-200/60 dark:border-sky-800/60 grid grid-cols-1 sm:grid-cols-3 gap-1.5 animate-fade-in">
                          {p.highlights.map((h) => (
                            <span
                              key={h}
                              className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-sky-800 dark:text-sky-200 bg-white/95 dark:bg-slate-900/90 border border-sky-200 dark:border-sky-800 px-2.5 py-1.5 rounded-lg leading-tight shadow-2xs hover:scale-105 transition-transform duration-150 cursor-default"
                            >
                              <CheckCircle2 size={13} className="text-sky-500 dark:text-sky-400 flex-shrink-0" />
                              <span>{h}</span>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
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
