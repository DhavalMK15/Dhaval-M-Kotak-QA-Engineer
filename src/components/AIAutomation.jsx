import { useState } from 'react'
import { Bot, Sparkles, CheckCircle2, ChevronRight, Terminal, ArrowRight } from 'lucide-react'

const AI_WORKFLOWS = [
  'Test Scenarios & Matrices Generation from Specifications',
  'Negative & Boundary Value Test Data Synthesis',
  'ADA / WCAG Accessibility Checklist Drafting',
  'Selenium WebDriver + Pytest Script Scaffolding',
  'Defect Root Cause Investigation & Actionable Reporting',
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
      className="py-5 sm:py-6 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-300"
      aria-labelledby="ai-heading"
    >
      <div className="section-container">
        {/* Compact H2 Header */}
        <div className="mb-4 sm:mb-4.5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/70 border border-sky-100 dark:border-sky-800 text-sky-700 dark:text-sky-300 text-[11.5px] font-bold tracking-wide uppercase mb-1">
            <Sparkles size={12} className="text-sky-600 dark:text-sky-400" />
            <span>Modern QA Capabilities</span>
          </div>
          <h2
            id="ai-heading"
            className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            AI-Assisted QA & <span className="text-sky-600 dark:text-sky-400">Automation</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-[13px] mt-0.5 max-w-xl">
            How I accelerate manual precision using AI productivity workflows and script scaffolding.
          </p>
        </div>

        {/* 2-Column Compact UI Layout */}
        <div className="grid lg:grid-cols-12 gap-4 sm:gap-5 items-start">
          {/* Left Column: AI-Assisted Workflows */}
          <div className="lg:col-span-6 space-y-3">
            <div className="card-modern card-top-accent p-4 sm:p-4.5">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 border border-sky-100 dark:border-slate-700 text-sky-600 dark:text-sky-400 flex items-center justify-center flex-shrink-0 shadow-2xs">
                  <Bot size={17} />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-slate-900 dark:text-white">AI as a QA Multiplier</h3>
                  <p className="text-sky-600 dark:text-sky-400 font-semibold text-[11.5px]">Antigravity AI · Prompt Engineering</p>
                </div>
              </div>

              {/* Bullet points scaled */}
              <ul className="space-y-2 mb-3.5">
                {AI_WORKFLOWS.map((w) => (
                  <li key={w} className="flex items-start gap-2 text-slate-600 dark:text-slate-300 text-[12.5px] sm:text-[13px] font-medium leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600 dark:bg-sky-400 mt-1 flex-shrink-0" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>

              {/* Status Note */}
              <div className="p-3 rounded-lg bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200/90 dark:border-amber-800/80 text-amber-900 dark:text-amber-200 text-[12px] font-medium leading-relaxed">
                🎯 <strong>Honest Positioning:</strong> My core strength is Manual QA. Automation is an actively growing technical capability powered by AI tooling.
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
                  className={`p-3.5 sm:p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-sky-50/90 dark:bg-sky-950/40 border-sky-400 dark:border-sky-500/80 shadow-xs ring-1 ring-sky-300 dark:ring-sky-500/30'
                      : 'bg-white/80 dark:bg-slate-800/80 border-slate-200/80 dark:border-slate-700/80 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-sky-200 dark:hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-lg flex-shrink-0">
                      {p.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-0.5">
                        <h3 className={`text-[14px] sm:text-[14.5px] font-bold ${isSelected ? 'text-sky-950 dark:text-sky-200 font-black' : 'text-slate-900 dark:text-white'}`}>
                          {p.title}
                        </h3>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-sky-50 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 border border-sky-100 dark:border-sky-800">
                          {p.badge}
                        </span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-[12px] sm:text-[12.5px] leading-relaxed font-normal mb-2">
                        {p.desc}
                      </p>

                      {/* Interactive Drawer for selected pillar */}
                      {isSelected && (
                        <div className="pt-2.5 border-t border-sky-100 dark:border-sky-800/60 grid sm:grid-cols-3 gap-1.5 animate-fade-in">
                          {p.highlights.map((h) => (
                            <span
                              key={h}
                              className="text-[10.5px] font-semibold text-sky-800 dark:text-sky-200 bg-white/90 dark:bg-slate-800/90 border border-sky-200 dark:border-sky-800 px-1.5 py-0.5 rounded"
                            >
                              ✓ {h}
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
