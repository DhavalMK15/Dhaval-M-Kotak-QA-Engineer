import { useInView } from '../hooks/useInView'
import { Code, Terminal, CheckCircle, TrendingUp, BookOpen } from 'lucide-react'

const JOURNEY_STEPS = [
  {
    icon: BookOpen,
    phase: 'Foundation',
    title: 'Manual Testing Mastery',
    description:
      'Built a strong foundation in manual testing across 3+ years — functional, regression, exploratory, mobile, and accessibility testing across multiple domains.',
    status: 'current',
  },
  {
    icon: Code,
    phase: 'Expanding Skills',
    title: 'Selenium + Python + Pytest',
    description:
      'Learning test automation with Selenium WebDriver and Python. Applied in ClientTracker project with CRUD test automation and regression suite development using Pytest.',
    status: 'current',
  },
  {
    icon: Terminal,
    phase: 'AI-Powered',
    title: 'AI-Assisted Automation',
    description:
      'Using Antigravity AI and prompt engineering to assist with script generation, test case creation, and automation structure — accelerating the automation learning curve.',
    status: 'current',
  },
  {
    icon: TrendingUp,
    phase: 'Growing',
    title: 'CI/CD & Advanced Automation',
    description:
      'Exploring integration of automation into CI/CD pipelines, expanding Pytest coverage, and deepening Selenium expertise with advanced patterns.',
    status: 'upcoming',
  },
]

export default function AutomationJourney() {
  const [ref, inView] = useInView()

  return (
    <section
      id="automation-journey"
      className="py-20 sm:py-28"
      aria-labelledby="journey-heading"
    >
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Growth
          </p>
          <h2
            id="journey-heading"
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Automation <span className="gradient-text">Journey</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            My honest progression from manual testing expertise toward AI-assisted automation — built step by step.
          </p>
        </div>

        <div
          ref={ref}
          className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6"
        >
          {JOURNEY_STEPS.map((step, i) => {
            const IconComp = step.icon
            const isUpcoming = step.status === 'upcoming'
            return (
              <div
                key={step.title}
                className={`p-6 rounded-xl border transition-all duration-300 group ${
                  isUpcoming
                    ? 'bg-navy-900/50 border-navy-700/50 opacity-70'
                    : 'bg-navy-900 border-navy-700 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5'
                } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${i * 120}ms`, transitionProperty: 'opacity, transform, border-color, box-shadow' }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isUpcoming
                      ? 'bg-slate-700/30 border border-slate-700'
                      : 'bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/15 transition-colors'
                  }`}>
                    <IconComp size={18} className={isUpcoming ? 'text-slate-500' : 'text-cyan-400'} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-xs font-semibold uppercase tracking-widest ${
                        isUpcoming ? 'text-slate-600' : 'text-cyan-400'
                      }`}>
                        {step.phase}
                      </span>
                      {!isUpcoming && (
                        <CheckCircle size={14} className="text-emerald-400" aria-label="In progress" />
                      )}
                      {isUpcoming && (
                        <span className="text-xs text-slate-600 font-medium">Upcoming</span>
                      )}
                    </div>
                    <h3 className={`font-semibold text-sm mb-2 ${isUpcoming ? 'text-slate-500' : 'text-white'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-xs leading-relaxed ${isUpcoming ? 'text-slate-600' : 'text-slate-400'}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Code snippet teaser */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-navy-900 border border-navy-700 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-navy-700 bg-navy-800/50">
              <span className="w-3 h-3 rounded-full bg-red-500/60" aria-hidden="true" />
              <span className="w-3 h-3 rounded-full bg-amber-500/60" aria-hidden="true" />
              <span className="w-3 h-3 rounded-full bg-green-500/60" aria-hidden="true" />
              <span className="ml-2 text-slate-500 text-xs font-mono">test_questwings_login.py</span>
            </div>
            <pre className="p-5 text-xs font-mono text-slate-400 overflow-x-auto leading-relaxed" aria-label="Sample automation test code">
              <code>{`import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By

class TestAdminLogin:
    def setup_method(self):
        self.driver = webdriver.Chrome()
        self.driver.get("https://app.questwings.com/admin")

    def test_valid_login(self):
        # AI-assisted script generation via Antigravity AI
        self.driver.find_element(By.ID, "username").send_keys("admin")
        self.driver.find_element(By.ID, "password").send_keys("admin123")
        self.driver.find_element(By.CSS_SELECTOR, "[type='submit']").click()
        assert "dashboard" in self.driver.current_url

    def teardown_method(self):
        self.driver.quit()`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
