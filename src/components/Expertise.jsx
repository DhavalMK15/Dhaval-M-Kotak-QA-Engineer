import { useInView } from '../hooks/useInView'

const EXPERTISE_AREAS = [
  {
    category: 'Web Application Testing',
    items: [
      'Functional testing of complex multi-page applications',
      'Authentication, authorization & protected route validation',
      'Form submission and validation testing',
      'Cross-browser testing across Chrome, Firefox, Edge, Safari',
      'Responsive and layout testing at multiple viewport sizes',
    ],
  },
  {
    category: 'API Testing',
    items: [
      'REST API endpoint testing using Postman',
      'CRUD operation validation (GET, POST, PUT, DELETE)',
      'Request/response payload validation',
      'Status code and error response testing',
      'Authentication header and token validation',
    ],
  },
  {
    category: 'Mobile Application Testing',
    items: [
      'iOS native application testing',
      'Android native application testing',
      'Cross-device and screen-size compatibility',
      'Mobile-specific gesture and interaction testing',
      'Mobile form and input validation',
    ],
  },
  {
    category: 'Accessibility Testing',
    items: [
      'ADA and WCAG 2.1 compliance validation',
      'Keyboard navigation and focus order verification',
      'Screen reader compatibility checks',
      'Color contrast ratio validation',
      'ARIA role and label validation',
    ],
  },
  {
    category: 'Regression & Release Testing',
    items: [
      'Building and maintaining regression test suites',
      'Pre-release smoke and sanity testing',
      'Retesting and defect verification',
      'Release readiness validation',
      'Test execution reporting',
    ],
  },
  {
    category: 'Bug Reporting & Tracking',
    items: [
      'Clear, reproducible bug report writing',
      'Severity and priority classification',
      'Screenshot and evidence capture',
      'Defect tracking in Jira',
      'Root cause investigation and documentation',
    ],
  },
]

function ExpertiseCard({ area, inView, delay }) {
  return (
    <div
      className={`p-6 rounded-xl bg-navy-900 border border-navy-700 hover:border-cyan-500/30 transition-all duration-300 group ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${delay}ms`, transitionProperty: 'opacity, transform, border-color' }}
    >
      <h3 className="text-white font-semibold text-sm mb-4 group-hover:text-cyan-400 transition-colors">
        {area.category}
      </h3>
      <ul className="space-y-2.5" role="list">
        {area.items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-slate-400 text-xs leading-relaxed">
            <span className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Expertise() {
  const [ref, inView] = useInView({ threshold: 0.05 })

  return (
    <section
      id="expertise"
      className="py-20 sm:py-28"
      aria-labelledby="expertise-heading"
    >
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Capabilities
          </p>
          <h2
            id="expertise-heading"
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Testing <span className="gradient-text">Capabilities</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            A detailed breakdown of what I actually test and how I test it.
          </p>
        </div>

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {EXPERTISE_AREAS.map((area, i) => (
            <ExpertiseCard key={area.category} area={area} inView={inView} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
