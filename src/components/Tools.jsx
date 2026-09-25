import { useInView } from '../hooks/useInView'
import { TOOLS } from '../data/portfolioData'

const TOOL_CATEGORIES = ['All', 'API Testing', 'Automation', 'AI Tools', 'Project Management', 'Browser Tools', 'IDE', 'Version Control', 'Database', 'Documentation']

import { useState } from 'react'

export default function Tools() {
  const [ref, inView] = useInView()
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All' ? TOOLS : TOOLS.filter((t) => t.category === activeCategory)
  const categories = ['All', ...new Set(TOOLS.map((t) => t.category))]

  return (
    <section
      id="tools"
      className="py-20 sm:py-28 bg-navy-900/30"
      aria-labelledby="tools-heading"
    >
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Toolbox
          </p>
          <h2
            id="tools-heading"
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Tools & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            The tools I use daily to design, execute, and manage quality assurance activities.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" role="group" aria-label="Filter tools by category">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-navy-950'
                  : 'bg-navy-800 border border-navy-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30'
              }`}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {filtered.map((tool, i) => (
            <div
              key={tool.name}
              className={`group flex flex-col items-center gap-3 p-5 rounded-xl bg-navy-900 border border-navy-700 hover:border-cyan-500/30 hover:bg-navy-800/80 transition-all duration-300 cursor-default ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 50}ms`, transitionProperty: 'opacity, transform, border-color, background-color' }}
            >
              <span className="text-3xl" aria-hidden="true">{tool.icon}</span>
              <div className="text-center">
                <p className="text-white text-sm font-medium group-hover:text-cyan-400 transition-colors">{tool.name}</p>
                <p className="text-slate-500 text-xs mt-0.5">{tool.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
