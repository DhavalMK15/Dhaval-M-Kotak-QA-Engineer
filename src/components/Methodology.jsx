import { useState, useEffect, useRef } from 'react'
import {
  FileSearch, ClipboardList, Map, FileText, Database, Play, Pause,
  Bug, RotateCcw, RefreshCw, CheckCircle, ChevronDown,
  Wrench, CheckSquare, Sparkles, FileCheck, Award, ChevronsUpDown
} from 'lucide-react'

const STEPS = [
  {
    num: '01',
    title: 'Requirement Analysis',
    shortTitle: 'Requirements',
    phase: 'Planning & Discovery',
    phaseShort: 'Planning',
    icon: FileSearch,
    summary: 'Analyze BRDs, user stories, and acceptance criteria to identify ambiguities and define test scope before sprint kickoff.',
    details: [
      'Review functional specifications, edge cases, and Figma UX workflows',
      'Conduct static testing and clarify requirements with Product Managers',
      'Establish Requirement Traceability Matrix (RTM) baseline mapping',
      'Define testability criteria and clarify non-functional scope boundaries',
    ],
    deliverable: 'Requirement Traceability Matrix (RTM) & Test Scope Baseline',
    qualityGate: 'All user stories have signed-off acceptance criteria and verified testable scope.',
    tools: ['Jira', 'Confluence', 'Figma', 'Miro'],
  },
  {
    num: '02',
    title: 'Test Planning & Strategy',
    shortTitle: 'Strategy',
    phase: 'Planning & Discovery',
    phaseShort: 'Planning',
    icon: ClipboardList,
    summary: 'Define testing boundaries, environments, physical device matrix, sprint schedule, and quality release exit criteria.',
    details: [
      'Define sprint testing boundaries, technical risks, and execution priorities',
      'Select physical test devices, OS versions, and cross-browser coverage matrix',
      'Establish defect severity SLAs, triage protocols, and release exit criteria',
      'Plan regression testing windows and automation scope with developers',
    ],
    deliverable: 'Sprint Test Strategy, Device Matrix & Resource Plan',
    qualityGate: 'Test environments provisioned, device matrix locked, and quality criteria agreed.',
    tools: ['Jira', 'Confluence', 'TestRail', 'Google Sheets'],
  },
  {
    num: '03',
    title: 'Test Scenario Design',
    shortTitle: 'Scenarios',
    phase: 'Design & Data Setup',
    phaseShort: 'Design',
    icon: Map,
    summary: 'Map end-to-end user journeys, functional workflows, and system decision branches across positive and negative paths.',
    details: [
      'Map end-to-end workflows across user roles and multi-tenant portal states',
      'Draft positive, negative, boundary, and alternative decision branch paths',
      'Identify cross-browser, cross-device, and responsive viewport checkpoints',
      'Map API integration endpoints requiring payload and status verification',
    ],
    deliverable: 'End-to-End Test Scenario Matrix & User Journey Maps',
    qualityGate: '100% of user stories mapped to functional scenarios without coverage gaps.',
    tools: ['Miro', 'Mindmeister', 'Excel', 'Jira'],
  },
  {
    num: '04',
    title: 'Detailed Test Case Design',
    shortTitle: 'Test Cases',
    phase: 'Design & Data Setup',
    phaseShort: 'Design',
    icon: FileText,
    summary: 'Author modular, reusable test cases with step-by-step preconditions, expected results, and accessibility checks.',
    details: [
      'Author unambiguous step-by-step instructions with expected test outcomes',
      'Assign priority tags (P1 Blocker to P4 Minor) and feature module labels',
      'Incorporate ADA/WCAG 2.1 accessibility checks (keyboard, screen readers)',
      'Design negative and security test cases (SQL injection and input validation)',
    ],
    deliverable: 'Modular Test Case Suite in Jira / Zephyr / Excel',
    qualityGate: 'Peer review completed with all test cases approved by the QA team.',
    tools: ['TestRail', 'Jira Zephyr', 'Excel', 'Chrome DevTools'],
  },
  {
    num: '05',
    title: 'Test Data Preparation',
    shortTitle: 'Test Data',
    phase: 'Design & Data Setup',
    phaseShort: 'Design',
    icon: Database,
    summary: 'Prepare realistic, boundary, and extreme invalid datasets along with multi-role accounts to enable non-blocking execution.',
    details: [
      'Synthesize valid, boundary, and extreme invalid inputs for all web forms',
      'Prepare role-based test accounts (Admin, Member, Resident, Security)',
      'Construct mock API payloads, dynamic JSON bodies, and file test samples',
      'Verify clean database restoration scripts for repeatable regression runs',
    ],
    deliverable: 'Comprehensive Test Dataset, Mock Payloads & Test Accounts',
    qualityGate: 'Test data pre-seeded and verified in QA staging environment before testing.',
    tools: ['Postman', 'Mockaroo', 'SQL Scripts', 'Chrome DevTools'],
  },
  {
    num: '06',
    title: 'Systematic Test Execution',
    shortTitle: 'Execution',
    phase: 'Execution & Defect Tracking',
    phaseShort: 'Execution',
    icon: Play,
    summary: 'Execute test cases across desktop browsers, native mobile apps, and REST APIs with step-by-step evidence capture.',
    details: [
      'Execute manual test cases across desktop browsers and physical mobile devices',
      'Conduct exploratory testing sessions to uncover hidden edge defects',
      'Validate REST API endpoints with Postman (CRUD logic, headers, status codes)',
      'Record video, screenshot proof, and network console logs for observations',
    ],
    deliverable: 'Execution Pass/Fail Logs & Evidentiary Artifacts',
    qualityGate: 'All P1 and P2 test cases executed with results documented and audited.',
    tools: ['Chrome DevTools', 'Postman', 'Mobile Devices', 'Loom'],
  },
  {
    num: '07',
    title: 'Defect Logging & Triage',
    shortTitle: 'Defect Triage',
    phase: 'Execution & Defect Tracking',
    phaseShort: 'Execution',
    icon: Bug,
    summary: 'Log clear, actionable defect tickets in Jira with exact reproduction steps, console logs, network payloads, and severity.',
    details: [
      'Author clear defect titles with unambiguous step-by-step reproduction flows',
      'Attach network HAR files, browser console logs, and video recordings',
      'Classify defect severity and business impact for accurate backlog priority',
      'Participate in daily defect triage reviews with engineering leads',
    ],
    deliverable: 'Actionable Jira Defect Tickets with Complete Logs',
    qualityGate: 'All logged defects reproducible with complete environment details attached.',
    tools: ['Jira', 'Chrome DevTools', 'Loom', 'Network Console'],
  },
  {
    num: '08',
    title: 'Retesting Defect Fixes',
    shortTitle: 'Retesting',
    phase: 'Execution & Defect Tracking',
    phaseShort: 'Execution',
    icon: RotateCcw,
    summary: 'Re-verify resolved issues in latest staging builds against original bug reports, edge conditions, and adjacent components.',
    details: [
      'Deploy developer patch and retest exact steps from the original defect ticket',
      'Verify boundary conditions and negative scenarios surrounding the fix',
      'Confirm fix integrity across all supported browsers and viewport sizes',
      'Update Jira status with verification logs, build version, and proof',
    ],
    deliverable: 'Verified & Closed Defect Sign-offs in Jira',
    qualityGate: 'Fixed defect verified resolved on staging build with zero regressions found.',
    tools: ['Jira', 'Chrome DevTools', 'Postman', 'Staging Builds'],
  },
  {
    num: '09',
    title: 'Regression Testing',
    shortTitle: 'Regression',
    phase: 'Release Readiness',
    phaseShort: 'Release',
    icon: RefreshCw,
    summary: 'Execute comprehensive manual and automated regression suites to guarantee existing application features remain intact.',
    details: [
      'Run end-to-end regression test suite covering all critical product flows',
      'Trigger Selenium + Python + Pytest automated regression test suites',
      'Verify revenue-critical paths, authentication, and core transaction flows',
      'Verify zero regressions introduced by recent defect patches or code merges',
    ],
    deliverable: 'Regression Pass Certificate & Defect Burn-down Report',
    qualityGate: '100% regression pass rate on critical paths with zero open blocker bugs.',
    tools: ['Selenium', 'Python / Pytest', 'Postman', 'GitHub Actions'],
  },
  {
    num: '10',
    title: 'Release Sign-Off & Smoke',
    shortTitle: 'Sign-Off',
    phase: 'Release Readiness',
    phaseShort: 'Release',
    icon: CheckCircle,
    summary: 'Conduct live production smoke testing, verify critical telemetry, and issue formal QA release certification.',
    details: [
      'Perform post-deployment production smoke checks on live environments',
      'Validate key transaction pipelines, notifications, and analytics events',
      'Issue formal QA Go/No-Go Release Sign-Off documentation to stakeholders',
      'Conduct sprint retrospective and archive reusable test assets for future runs',
    ],
    deliverable: 'Formal QA Production Release Certification & Deployment Log',
    qualityGate: 'Production smoke test 100% verified with formal stakeholder sign-off.',
    tools: ['Jira', 'Slack', 'Telemetry', 'Release Hub'],
  },
]

const PHASES = [
  { key: 'All', label: 'All' },
  { key: 'Planning', label: '1. Planning' },
  { key: 'Design', label: '2. Design & Data' },
  { key: 'Execution', label: '3. Execution' },
  { key: 'Release', label: '4. Release' },
]

export default function Methodology() {
  const [openSet, setOpenSet] = useState(new Set([0])) // First step expanded by default
  const [selectedPhase, setSelectedPhase] = useState('All')
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const autoPlayIndexRef = useRef(0)

  // Filter steps by phase
  const filteredSteps = STEPS.map((step, originalIndex) => ({ ...step, originalIndex })).filter((step) => {
    if (selectedPhase === 'All') return true
    return step.phaseShort === selectedPhase
  })

  // Toggle individual accordion item
  const toggleStep = (originalIndex) => {
    setIsAutoPlaying(false)
    setOpenSet((prev) => {
      const next = new Set(prev)
      if (next.has(originalIndex)) {
        next.delete(originalIndex)
      } else {
        next.add(originalIndex)
      }
      return next
    })
  }

  // Expand all / Collapse all toggle
  const allOpen = STEPS.every((_, i) => openSet.has(i))
  const toggleAll = () => {
    setIsAutoPlaying(false)
    if (allOpen) {
      setOpenSet(new Set())
    } else {
      setOpenSet(new Set(STEPS.map((_, i) => i)))
    }
  }

  // Phase selection handler: filter and open first matching item
  const handlePhaseSelect = (phaseKey) => {
    setSelectedPhase(phaseKey)
    setIsAutoPlaying(false)
    if (phaseKey === 'All') {
      setOpenSet(new Set([0]))
    } else {
      const firstMatch = STEPS.findIndex((s) => s.phaseShort === phaseKey)
      if (firstMatch !== -1) {
        setOpenSet(new Set([firstMatch]))
      }
    }
  }

  // Auto-play through the steps sequentially
  useEffect(() => {
    let timer
    if (isAutoPlaying) {
      timer = setInterval(() => {
        autoPlayIndexRef.current = (autoPlayIndexRef.current + 1) % STEPS.length
        setOpenSet(new Set([autoPlayIndexRef.current]))
      }, 4000)
    }
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  return (
    <section
      id="methodology"
      className="relative py-10 sm:py-14 bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 border-b border-slate-200/80 dark:border-slate-800 overflow-hidden transition-colors duration-300"
      aria-labelledby="methodology-heading"
    >
      {/* Background Decorative Accents */}
      <div className="absolute top-20 right-5 w-96 h-96 bg-sky-100/30 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-5 w-96 h-96 bg-blue-100/20 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative">
        {/* Section Header with Phase Filters & Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/70 border border-sky-100 dark:border-sky-800 text-sky-700 dark:text-sky-300 text-[11.5px] font-bold tracking-wide uppercase mb-1.5">
              <Sparkles size={13} className="text-sky-600 dark:text-sky-400" />
              <span>STLC Lifecycle Accordion</span>
            </div>
            <h2
              id="methodology-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight"
            >
              10-Step QA <span className="text-sky-600 dark:text-sky-400">Methodology</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-[13.5px] mt-1 max-w-xl">
              End-to-end quality process applied across every release—expand each step to explore concrete activities, deliverables, and quality gates.
            </p>
          </div>

          {/* Controls: Phase Selector, Expand All & Auto Walkthrough */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Auto Walkthrough Play/Pause Button */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              title={isAutoPlaying ? 'Pause Walkthrough' : 'Auto Walkthrough'}
              aria-label={isAutoPlaying ? 'Pause Walkthrough' : 'Auto Walkthrough'}
              className={`inline-flex items-center justify-center w-10 h-10 rounded-2xl border transition-all duration-200 btn-hover cursor-pointer ${
                isAutoPlaying
                  ? 'bg-amber-500 border-amber-600 text-white shadow-sm ring-2 ring-amber-400/40'
                  : 'glass-panel text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-white dark:hover:bg-slate-800 shadow-sm'
              }`}
            >
              {isAutoPlaying ? (
                <Pause size={17} className="fill-current" />
              ) : (
                <Play size={17} className="fill-current ml-0.5" />
              )}
            </button>

            {/* Expand / Collapse All Button */}
            <button
              onClick={toggleAll}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-2xl glass-panel text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 text-xs font-bold transition-all shadow-sm hover:bg-white dark:hover:bg-slate-800 cursor-pointer"
              title={allOpen ? 'Collapse All Steps' : 'Expand All Steps'}
            >
              <ChevronsUpDown size={15} />
              <span>{allOpen ? 'Collapse All' : 'Expand All'}</span>
            </button>

            {/* Phase Selector Pills */}
            <div className="inline-flex p-1.5 rounded-2xl glass-panel shadow-sm">
              {PHASES.map((p) => (
                <button
                  key={p.key}
                  onClick={() => handlePhaseSelect(p.key)}
                  className={`px-3 py-1.5 rounded-xl text-[12px] font-bold transition-all duration-200 ${
                    selectedPhase === p.key
                      ? 'bg-sky-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 10-STEP ACCORDION CONTAINER */}
        <div className="space-y-3">
          {filteredSteps.map((step) => {
            const StepIcon = step.icon
            const isOpen = openSet.has(step.originalIndex)

            return (
              <div
                key={step.num}
                className={`card-modern transition-all duration-200 rounded-2xl border overflow-hidden ${
                  isOpen
                    ? 'border-sky-500/80 dark:border-sky-500/80 bg-white dark:bg-slate-900 shadow-md ring-1 ring-sky-500/20'
                    : 'border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 hover:border-sky-300 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-800/80 shadow-xs'
                }`}
              >
                {/* Accordion Header (Clickable Trigger) */}
                <button
                  type="button"
                  onClick={() => toggleStep(step.originalIndex)}
                  className="w-full p-3.5 sm:p-4.5 flex items-center justify-between text-left transition-colors cursor-pointer group"
                  aria-expanded={isOpen}
                  aria-controls={`step-content-${step.num}`}
                  id={`step-header-${step.num}`}
                >
                  {/* Left Cluster: Number, Icon, Title, Phase & Summary preview */}
                  <div className="flex items-center gap-3 sm:gap-3.5 min-w-0 pr-3">
                    {/* Number Badge */}
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl flex items-center justify-center font-black text-[13px] sm:text-sm tracking-tight transition-all duration-200 flex-shrink-0 ${
                        isOpen
                          ? 'bg-gradient-to-br from-sky-600 to-blue-600 text-white shadow-sm shadow-sky-600/30'
                          : 'bg-sky-50 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 border border-sky-100 dark:border-sky-800'
                      }`}
                    >
                      {step.num}
                    </div>

                    {/* Step Icon */}
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-colors flex-shrink-0 ${
                        isOpen
                          ? 'bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:text-sky-600 dark:group-hover:text-sky-400'
                      }`}
                    >
                      <StepIcon size={16} />
                    </div>

                    {/* Title & Phase */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                        <span className="text-[14.5px] sm:text-[16px] font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                          {step.title}
                        </span>
                        <span className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700">
                          {step.phase}
                        </span>
                      </div>
                      <p className="text-[12px] sm:text-[12.5px] text-slate-500 dark:text-slate-400 truncate max-w-xl">
                        {step.summary}
                      </p>
                    </div>
                  </div>

                  {/* Right Cluster: Details Pill + Chevron */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="hidden sm:inline-block text-[11.5px] font-semibold text-slate-400 dark:text-slate-500">
                      {isOpen ? 'Collapse' : 'Details'}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? 'bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 rotate-180'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200'
                      }`}
                    >
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </button>

                {/* Accordion Body with zero-jerk CSS Grid Animation */}
                <div
                  id={`step-content-${step.num}`}
                  role="region"
                  aria-labelledby={`step-header-${step.num}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-4 sm:p-5 pt-1 sm:pt-1 border-t border-slate-100 dark:border-slate-800/80">
                      {/* Full Summary Description */}
                      <p className="text-slate-700 dark:text-slate-200 text-[13px] sm:text-[13.5px] leading-relaxed mb-4 font-medium">
                        {step.summary}
                      </p>

                      {/* 2-Column Responsive Breakdown */}
                      <div className="grid lg:grid-cols-12 gap-4 items-start">
                        {/* Left Column (7 cols): Execution Activities */}
                        <div className="lg:col-span-7 space-y-2">
                          <div className="flex items-center gap-2 mb-1">
                            <CheckSquare size={15} className="text-sky-600 dark:text-sky-400" />
                            <h4 className="text-[12px] font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                              Core Execution Activities & Checks
                            </h4>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-2">
                            {step.details.map((detail, dIdx) => (
                              <div
                                key={detail}
                                className="p-3 rounded-xl glass-panel-subtle flex items-start gap-2.5 hover:border-sky-300 dark:hover:border-sky-500 transition-colors"
                              >
                                <span className="w-5 h-5 rounded-full bg-sky-100 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                                  {dIdx + 1}
                                </span>
                                <p className="text-slate-700 dark:text-slate-200 text-[12px] sm:text-[12.5px] font-medium leading-snug">
                                  {detail}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Right Column (5 cols): Deliverable, Quality Gate & Tools */}
                        <div className="lg:col-span-5 space-y-2.5">
                          {/* Deliverable Card */}
                          <div className="p-3 sm:p-3.5 rounded-xl bg-sky-50/70 dark:bg-sky-950/40 border border-sky-100 dark:border-sky-900/60">
                            <div className="flex items-center gap-1.5 mb-1 text-sky-800 dark:text-sky-300">
                              <FileCheck size={14} />
                              <span className="text-[10.5px] font-extrabold uppercase tracking-wider">
                                Tangible Work Product
                              </span>
                            </div>
                            <p className="text-[12.5px] sm:text-[13px] font-bold text-slate-900 dark:text-white leading-snug">
                              {step.deliverable}
                            </p>
                          </div>

                          {/* Quality Exit Gate Card */}
                          <div className="p-3 sm:p-3.5 rounded-xl glass-panel-subtle">
                            <div className="flex items-center gap-1.5 mb-1 text-emerald-800 dark:text-emerald-400">
                              <Award size={14} className="text-emerald-600 dark:text-emerald-400" />
                              <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
                                Quality Exit Criteria (Gate)
                              </span>
                            </div>
                            <p className="text-[11.5px] sm:text-[12px] font-medium text-slate-700 dark:text-slate-300 leading-snug">
                              {step.qualityGate}
                            </p>
                          </div>

                          {/* Tools Utilized */}
                          <div className="p-2.5 sm:p-3 rounded-xl glass-panel-subtle">
                            <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                              <Wrench size={11} className="text-sky-600 dark:text-sky-400" />
                              <span>Tools & Platforms Utilized</span>
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {step.tools.map((tool) => (
                                <span
                                  key={`${step.num}-${tool}`}
                                  className="px-2.5 py-0.5 rounded-lg bg-white/90 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 text-[11px] font-bold shadow-2xs"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

