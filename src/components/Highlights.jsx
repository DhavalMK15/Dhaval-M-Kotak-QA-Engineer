import { useInView } from '../hooks/useInView'
import { HIGHLIGHTS } from '../data/portfolioData'
import {
  Target, Layers, Shield, Smartphone, Zap, Bot
} from 'lucide-react'

const ICON_MAP = { Target, Layers, Shield, Smartphone, Zap, Bot }

export default function Highlights() {
  const [ref, inView] = useInView()

  return (
    <section
      id="highlights"
      className="py-20 sm:py-28 bg-navy-900/30"
      aria-labelledby="highlights-heading"
    >
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Snapshot
          </p>
          <h2
            id="highlights-heading"
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Professional <span className="gradient-text">Highlights</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {HIGHLIGHTS.map((item, i) => {
            const IconComp = ICON_MAP[item.icon]
            return (
              <div
                key={item.title}
                className={`group p-6 rounded-xl bg-navy-900 border border-navy-700 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5 text-center ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 100}ms`, transitionProperty: 'opacity, transform, border-color, box-shadow' }}
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-cyan-500/15 transition-colors">
                  {IconComp && <IconComp size={24} className="text-cyan-400" />}
                </div>
                <div className="text-2xl font-bold text-white mb-0.5">{item.title}</div>
                <div className="text-cyan-400 text-sm font-semibold mb-3">{item.subtitle}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>

        {/* Testing practices */}
        <div className="mt-16">
          <h3 className="text-center text-white font-semibold mb-8">
            Testing Practices & Methodologies
          </h3>
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              'Test Case Design', 'Test Scenario Creation', 'Bug Reporting', 'Defect Tracking',
              'Test Execution', 'Regression Suites', 'Test Data Preparation', 'Requirement Analysis',
              'Root Cause Investigation', 'Agile', 'SDLC', 'STLC', 'Exploratory Testing',
              'UAT', 'Smoke Testing', 'Sanity Testing',
            ].map((practice) => (
              <span
                key={practice}
                className="px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-700 text-slate-400 text-sm hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-200"
              >
                {practice}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
