// ====================================================
// Portfolio Data – Dhaval Kotak | QA Engineer
// ====================================================

export const PROFILE = {
  name: 'Dhaval M Kotak',
  title: 'QA Engineer',
  currentCompany: 'WebTech Solutions', // Current Employer
  tagline: 'QA Engineer | Manual Testing | API | Mobile | Accessibility | AI-Assisted Automation',
  summary:
    "I'm a QA Engineer with 3+ years of hands-on experience in manual testing, API testing, mobile application testing, and accessibility validation. I work across diverse domains including healthcare, fintech, real estate, and enterprise applications — ensuring software quality through systematic testing, clear bug reporting, and thorough regression coverage. I'm currently expanding into AI-assisted test automation to bring modern productivity tools into my QA workflow.",
  experience: '3+ Years',
  location: 'Rajkot, Gujarat, India',
  role: 'QA Engineer / Software Quality Assurance Engineer',
  focusAreas: ['Manual Testing', 'API Testing', 'Mobile Testing', 'Accessibility Testing', 'AI-Assisted Automation'],
  contact: {
    email: 'YOUR_EMAIL@example.com',
    linkedin: 'https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME',
    github: 'https://github.com/YOUR_GITHUB_USERNAME',
  },
}

// ====================================================
// SKILLS
// ====================================================

export const SKILL_CATEGORIES = [
  {
    id: 'manual',
    label: 'Manual Testing',
    level: 'Primary',
    levelClass: 'badge-primary',
    icon: 'CheckSquare',
    skills: [
      'Functional & System',
      'Regression & Smoke',
      'Exploratory & UAT',
      'End-to-End Testing',
      'Cross-Browser Testing',
      'Integration Testing',
    ],
  },
  {
    id: 'api',
    label: 'API Testing',
    level: 'Primary',
    levelClass: 'badge-primary',
    icon: 'Zap',
    skills: [
      'Postman Collections',
      'REST API Testing',
      'JSON Schema Validation',
      'Status & Error Codes',
      'Environment Variables',
    ],
  },
  {
    id: 'accessibility',
    label: 'Accessibility Testing',
    level: 'Primary',
    levelClass: 'badge-primary',
    icon: 'Eye',
    skills: [
      'ADA Compliance',
      'WCAG 2.1 Standards',
      'Keyboard Navigation',
      'Screen Reader Checks',
      'Contrast & Focus Checks',
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile Testing',
    level: 'Primary',
    levelClass: 'badge-primary',
    icon: 'Smartphone',
    skills: [
      'iOS & Android QA',
      'Cross-Device Testing',
      'Responsive Validation',
      'Mobile WebKit Checks',
    ],
  },
  {
    id: 'database',
    label: 'Database Testing',
    level: 'Working Knowledge',
    levelClass: 'badge-secondary',
    icon: 'Database',
    skills: [
      'SQL Queries',
      'Data Integrity',
      'Schema Verification',
      'Backend CRUD Testing',
    ],
  },
  {
    id: 'automation',
    label: 'Automation / AI-Assisted',
    level: 'Learning',
    levelClass: 'badge-muted',
    icon: 'Bot',
    skills: [
      'Selenium WebDriver',
      'Pytest Framework',
      'AI Prompt Engineering',
      'Script Scaffolding',
    ],
  },
]

// ====================================================
// TOOLS
// ====================================================

export const TOOLS = [
  { name: 'Postman', category: 'API Testing', icon: '📮' },
  { name: 'Selenium WebDriver', category: 'Automation', icon: '🤖' },
  { name: 'Python', category: 'Automation', icon: '🐍' },
  { name: 'Pytest', category: 'Automation', icon: '🧪' },
  { name: 'Antigravity AI', category: 'AI Tools', icon: '✨' },
  { name: 'Jira', category: 'Project Management', icon: '📋' },
  { name: 'Trello', category: 'Project Management', icon: '📌' },
  { name: 'Chrome DevTools', category: 'Browser Tools', icon: '🔧' },
  { name: 'PyCharm', category: 'IDE', icon: '💻' },
  { name: 'Git', category: 'Version Control', icon: '🔀' },
  { name: 'Excel', category: 'Documentation', icon: '📊' },
  { name: 'SQL', category: 'Database', icon: '🗄️' },
]

// ====================================================
// PROJECTS
// ====================================================

export const PROJECTS = [
  {
    id: 'resident-connect',
    name: 'Resident Connect',
    domain: 'Property Management & Community Tech',
    role: 'QA Engineer',
    shortDescription:
      'Digital platform facilitating communication between property managers and tenants, streamlining tasks, handling requests, and fostering community engagement across sub-products look4lease, immi dreams, and clientracker.',
    tags: ['Team Lead', 'Property Portal', 'Mobile App', 'iOS', 'Android', 'Workflows'],
    metrics: [
      { label: 'Mobile Test Cases', value: '340+', change: 'iOS & Android' },
      { label: 'Sub-Products QA', value: '3', change: 'Look4lease, Immi, Clientracker' },
      { label: 'Request Tracking', value: '100%', change: 'Zero Dropped Tickets' },
      { label: 'Regression Coverage', value: '99.2%', change: 'Across Releases' },
    ],
    bugSpecimen: {
      ticketId: 'RC-189',
      title: 'Race condition creates double booking for single clubhouse slot during concurrent checkout',
      severity: 'P2 - High',
      priority: 'High',
      status: 'Verified & Closed',
      environment: 'Staging v1.8.2 · Android 14 (Pixel 7) & iOS 17 (iPhone 13)',
      preconditions: 'Clubhouse slot 18:00–20:00 has exactly 1 spot remaining.',
      steps: [
        'Open Resident Connect on Device A (Tenant 101) and Device B (Tenant 204).',
        'Both users simultaneously open "Clubhouse Saturday 18:00 Slot".',
        'Both users tap "Confirm Booking" within a 300ms window.'
      ],
      expectedResult: 'First request acquires pessimistic lock and succeeds (200 OK); second request gracefully returns HTTP 409 Conflict with friendly toast.',
      actualResult: 'Both requests return HTTP 200 OK; 2 distinct confirmed reservation records generated in database for the exact same slot.',
      rawLog: 'DB AUDIT TRACE:\nINSERT INTO facility_bookings (slot_id, user_id) VALUES (\'club_18_20\', \'user_101\'); -- OK\nINSERT INTO facility_bookings (slot_id, user_id) VALUES (\'club_18_20\', \'user_204\'); -- OK (Double booked)',
      rootCause: 'Database transaction used Read Committed isolation level without pessimistic SELECT FOR UPDATE or unique slot constraint.',
      fixVerification: 'Verified with concurrent JMeter & multi-device manual testing — second user receives clear "Slot already taken" modal.'
    },
    testingScope: [
      'Resident and manager communication portal',
      'Task streamlining and request handling lifecycle',
      'Sub-products QA (look4lease, immi dreams, clientracker)',
      'Mobile application testing — iOS & Android',
      'Landing page responsiveness and performance',
      'Role-based permissions (Tenant, Property Manager, Admin)',
      'Regression test execution across releases',
    ],
    tools: ['Postman', 'Jira', 'Chrome DevTools', 'iOS Devices', 'Android Devices'],
    testingTypes: ['Functional Testing', 'Mobile Testing', 'End-to-End Testing', 'UAT', 'Regression Testing'],
    keyResponsibilities: [
      'Tested end-to-end communication workflows between property managers and tenants',
      'Validated request handling, maintenance ticketing, and notification dispatch',
      'Verified separate mobile apps and landing pages for look4lease and immi dreams',
      'Conducted payment gateway and ledger calculation verification',
      'Maintained regression test suites for continuous deployments',
    ],
    challenges: [
      'Multi-tenant permissions and cross-product communication integrity',
      'Real-time notifications across Android and iOS mobile builds',
      'Testing across varying device form factors and mobile screen sizes',
    ],
    contribution:
      'Delivered thorough cross-platform QA coverage across web portals and mobile applications, ensuring seamless tenant-manager communication and reliable sub-product ecosystem operation.',
  },
  {
    id: 'usl',
    name: 'U.S. Legal Services',
    domain: 'Legal / Membership Services',
    role: 'QA Engineer',
    shortDescription:
      'Comprehensive QA coverage for U.S. Legal Services providing attorney support for legal cases (e.g., Matters or CDL cases) across 6 dedicated login portals.',
    tags: ['Legal Portal', '6 Portals', 'API Testing', 'ADA/Accessibility'],
    metrics: [
      { label: 'Portals Covered', value: '6', change: 'E2E Integrated' },
      { label: 'REST APIs Tested', value: '28+', change: 'Postman Suite' },
      { label: 'Defect Leakage', value: '0', change: 'Zero Post-Release' },
      { label: 'WCAG Compliance', value: 'AA', change: 'Fully Accessible' },
    ],
    bugSpecimen: {
      ticketId: 'USL-312',
      title: '422 Unprocessable Entity during membership auto-renewal with stored payment token',
      severity: 'P1 - High',
      priority: 'Urgent',
      status: 'Verified & Closed',
      environment: 'Staging v2.4.1 · Chrome 122 / macOS · Postman API Suite',
      preconditions: 'User authenticated with active member profile; Stripe customer token saved on file; renewal invoice in DRAFT status.',
      steps: [
        'Navigate to Member Portal > Billing & Subscription tab.',
        'Click "Renew Annual Membership" using stored default payment method (Visa ending 4242).',
        'Click "Confirm & Pay $240.00".',
        'Observe network request: POST /api/v2/subscriptions/renew.'
      ],
      expectedResult: 'Payment processed successfully (HTTP 200 OK); invoice state transitions from DRAFT to PAID; confirmation email dispatched.',
      actualResult: 'HTTP 422 Unprocessable Entity returned; client UI enters infinite spinner loop with no toast error displayed to user.',
      rawLog: '{\n  "error": "UNPROCESSABLE_ENTITY",\n  "code": "MISSING_CURRENCY_ISO",\n  "message": "Parameter \'currency\' is required for saved payment token charges",\n  "timestamp": "2024-03-12T14:22:08Z"\n}',
      rootCause: 'Renewal controller failed to infer member default currency ("USD") when payload omitted explicit currency code.',
      fixVerification: 'Verified fix in v2.4.2 — controller now defaults currency from member tenant profile, returning 200 OK with transaction ID.'
    },
    testingScope: [
      'Member system (main administrative system)',
      'Member Portal (for USL members)',
      'Enrollment Portal (member enrollments)',
      'Attorney Portal (for assigned attorneys)',
      'Legal Matters and CDL case workflows',
      'Stripe payment gateway and auto-renewal processing',
      'ADA / WCAG accessibility validation',
      'Automated REST API testing via Postman',
    ],
    tools: ['Postman', 'Chrome DevTools', 'Jira', 'Excel'],
    testingTypes: ['Functional Testing', 'API Testing', 'Accessibility Testing', 'Mobile Testing', 'Regression Testing'],
    keyResponsibilities: [
      'Executed test suites across all 6 portals including Member System, Member Portal, and Attorney Portal',
      'Validated end-to-end case flows for legal Matters and CDL cases',
      'Conducted comprehensive API testing for member, attorney, and payment endpoints',
      'Performed ADA and WCAG accessibility validation across all user journeys',
      'Reported and tracked defects using Jira throughout the STLC',
    ],
    challenges: [
      'Complex multi-portal data synchronization between Member and Attorney systems',
      'Ensuring ADA compliance across dynamic legal workflow forms',
      'Coordinating regression coverage across multi-portal releases',
    ],
    contribution:
      'Delivered structured test coverage across 6 integrated portals, ensuring legal case data integrity, seamless enrollment, and full WCAG accessibility compliance.',
  },
  {
    id: 'clientracker',
    name: 'Clientracker',
    domain: 'Real Estate CRM & Revenue Tracking',
    role: 'QA Engineer',
    shortDescription:
      'Dedicated platform for property brokers and agents to manage clients, handle properties, and track their commission revenue.',
    tags: ['Team Lead', 'Broker CRM', 'Revenue Tracking', 'Property Management', 'Web App'],
    metrics: [
      { label: 'Test Scenarios', value: '320+', change: 'Multi-Role Matrix' },
      { label: 'Revenue Reports', value: '100%', change: 'Calculation Accuracy' },
      { label: 'CRUD Coverage', value: '100%', change: 'All Property Entities' },
      { label: 'Regression Pass', value: '99.5%', change: 'Continuous QA' },
    ],
    bugSpecimen: {
      ticketId: 'CTR-142',
      title: 'Broker commission split calculation rounding error in multi-agent transaction breakdown',
      severity: 'P2 - High',
      priority: 'High',
      status: 'Verified & Closed',
      environment: 'Staging v2.1.0 · Chrome 123 · Postman API Suite',
      preconditions: 'Closed property deal with 3 co-brokers having asymmetric commission percentages.',
      steps: [
        'Open Clientracker > Deals > Close Transaction #4491.',
        'Set gross revenue to $45,000 with 3-way split (50%, 33.33%, 16.67%).',
        'Click "Generate Revenue Report & Payout Breakdown".'
      ],
      expectedResult: 'Net splits sum exactly to gross commission with bank-standard round-half-even precision.',
      actualResult: 'Floating point imprecision caused total payout to mismatch deal balance by $0.01.',
      rawLog: 'REVENUE AUDIT EXCEPTION: Sum of split allocations (44999.99) does not match gross revenue (45000.00).',
      rootCause: 'JavaScript IEEE 754 float arithmetic used for currency without Decimal.js arbitrary-precision handling.',
      fixVerification: 'Verified fix in v2.1.1 — backend BigNumber decimal pipeline guarantees exact monetary balancing.'
    },
    testingScope: [
      'Broker and agent client management portal',
      'Property listing and inventory management',
      'Inquiry matching and pipeline stage transitions',
      'Revenue tracking, commissions, and payout dashboards',
      'Full CRUD operation validation across all entities',
      'Cross-platform mobile and web responsiveness',
    ],
    tools: ['Postman', 'Jira', 'Chrome DevTools', 'Excel', 'Mobile Devices'],
    testingTypes: ['Functional Testing', 'API Testing', 'Financial / Calculation Testing', 'Regression Testing'],
    keyResponsibilities: [
      'Authored test scenarios for broker and agent management workflows',
      'Verified property inventory management, search filters, and status transitions',
      'Conducted thorough mathematical validation for revenue and commission calculations',
      'Tested data accuracy across financial KPI dashboards and exportable reports',
      'Logged and tracked defect fixes using Jira',
    ],
    challenges: [
      'Ensuring exact precision in commission and revenue reporting workflows',
      'Synchronizing property statuses in real-time across agents',
      'Testing responsive mobile layouts for on-the-go agents and brokers',
    ],
    contribution:
      'Safeguarded broker revenue operations by verifying financial tracking precision, property inventory workflows, and cross-platform reliability.',
  },
  {
    id: 'rrb',
    name: 'Railway Recruitment Board',
    domain: 'Government / Public Sector Examination',
    role: 'QA Engineer',
    shortDescription:
      'Quality assurance and operational support for the Railway Recruitment Board examination system, ensuring high-stakes exam readiness, candidate verification, and data integrity.',
    tags: ['Public Sector', 'Examination Support', 'Regression Testing', 'Data Integrity'],
    metrics: [
      { label: 'Candidate Records', value: '50,000+', change: 'Data Verified' },
      { label: 'Exam Modules', value: '100%', change: 'Regression Passed' },
      { label: 'Data Accuracy', value: '99.99%', change: 'Zero Discrepancies' },
      { label: 'Operational Uptime', value: '100%', change: 'During Exam Windows' },
    ],
    bugSpecimen: {
      ticketId: 'RRB-089',
      title: 'Candidate biometric verification state mismatch between local exam terminal and central server',
      severity: 'P1 - High',
      priority: 'Urgent',
      status: 'Verified & Closed',
      environment: 'Pre-Exam Pilot · LAN Test Lab / Firefox Enterprise',
      preconditions: 'Batch of 500 candidates assigned to Examination Center Zone 4.',
      steps: [
        'Complete biometric entry and identity check for candidate roll #441098.',
        'Submit attendance verification on local center terminal.',
        'Query central server database record for candidate status.'
      ],
      expectedResult: 'Candidate status instantly updates to "Verified & Present" on central server.',
      actualResult: 'Candidate status remained "Pending Verification" due to offline queue sync timeout.',
      rawLog: 'SYNC_ERROR: Batch payload timed out at socket buffer after 3000ms. Local state: VERIFIED; Remote state: PENDING.',
      rootCause: 'Socket timeout retry threshold was too low for high-traffic center LAN environments.',
      fixVerification: 'Verified fix with exponential backoff retry and explicit sync handshake confirmation.'
    },
    testingScope: [
      'Regression testing across examination modules',
      'Candidate data entry and identity verification flows',
      'High-volume examination support and operational readiness',
      'Candidate evaluation data integrity and score audit checks',
      'Role-based permissions for examination administrators and proctors',
      'System stress and latency under peak verification loads',
    ],
    tools: ['Excel', 'Jira', 'Chrome DevTools', 'SQL / Database Verification'],
    testingTypes: ['Regression Testing', 'Functional Testing', 'Data Integrity Testing', 'Operational Support'],
    keyResponsibilities: [
      'Executed systematic regression testing cycles across core examination software modules',
      'Assisted with high-volume, secure candidate data entry and audit verification',
      'Participated in operational examination support during active test cycles',
      'Validated examination data accuracy, grading integrity, and candidate records',
      'Documented and escalated defects to technical leads with detailed logs',
    ],
    challenges: [
      'High-stakes public sector environment requiring zero-tolerance for data inaccuracies',
      'Handling very high volume of candidate records under strict time constraints',
      'Maintaining examination operational stability and synchronization under peak loads',
    ],
    contribution:
      'Ensured seamless examination operations and flawless data integrity through meticulous regression testing and active operational support during Railway Recruitment Board examinations.',
  },
  {
    id: 'jio-qr-ar',
    name: 'Jio: QR to AR',
    domain: 'Augmented Reality / Event Tech',
    role: 'QA Engineer',
    shortDescription:
      'Interactive Augmented Reality experience transforming static QR codes into immersive AR experiences, enhancing event engagement and delivering dynamic multimedia content.',
    tags: ['Augmented Reality', 'WebAR / Mobile', 'QR Tech', 'Event Experience'],
    metrics: [
      { label: 'Devices Tested', value: '25+', change: 'Android & iOS' },
      { label: 'Scan Recognition', value: '<500ms', change: 'Fast Detection' },
      { label: 'AR Frame Rate', value: '60 FPS', change: 'Smooth 3D Render' },
      { label: 'Attendee Rating', value: '4.9/5', change: 'User Experience' },
    ],
    bugSpecimen: {
      ticketId: 'JIO-AR-55',
      title: 'AR marker tracking jitter on Android WebGL under low-contrast indoor lighting conditions',
      severity: 'P2 - High',
      priority: 'High',
      status: 'Verified & Closed',
      environment: 'Staging v1.2.0 · OnePlus 11 / Samsung Galaxy S23 (Chrome 122)',
      preconditions: 'QR target code illuminated at 150 lux (standard indoor convention hall lighting).',
      steps: [
        'Launch Jio QR to AR camera viewfinder in mobile browser.',
        'Point rear camera at printed event badge QR code from 30cm distance.',
        'Observe 3D AR avatar overlay positioning and tracking stability.'
      ],
      expectedResult: '3D AR model renders smoothly anchored onto the QR marker with zero jitter.',
      actualResult: 'AR model continuously flickers and oscillates +/- 15 degrees along the Z-axis.',
      rawLog: 'AR_TRACKER_WARN: Pose estimation confidence dropped to 0.42. Kalman filter matrix resetting.',
      rootCause: 'Camera exposure compensation was unlocked, causing automatic gain fluctuations on high-contrast markers.',
      fixVerification: 'Verified fix in v1.2.1 — implemented fixed exposure lock and improved Kalman smoothing filter.'
    },
    testingScope: [
      'QR code scanning speed and accuracy across distances and angles',
      'Augmented Reality (AR) marker detection and 3D overlay anchoring',
      'Dynamic 3D model rendering and animation playback performance',
      'Camera permission and WebRTC video stream lifecycle on iOS and Android',
      'Performance testing under diverse lighting environments (indoor, daylight, dim)',
      'Cross-device mobile browser compatibility (Safari, Chrome, Samsung Internet)',
    ],
    tools: ['Android Devices', 'iOS Devices', 'Chrome DevTools', 'Jira', 'WebXR / WebGL Inspector'],
    testingTypes: ['Functional Testing', 'Mobile AR Testing', 'Performance Testing', 'Compatibility Testing'],
    keyResponsibilities: [
      'Validated end-to-end AR experiences from initial QR scan to 3D interactive rendering',
      'Tested QR code detection reliability under various distances, angles, and lighting',
      'Verified 3D asset frame rates, memory usage, and audio/video synchronization',
      'Tested cross-platform mobile browser behavior across a wide range of iOS and Android hardware',
      'Reported visual rendering bugs and marker calibration issues to engineering',
    ],
    challenges: [
      'Device fragmentation across Android camera sensors and WebGL drivers',
      'Maintaining stable 60 FPS 3D rendering without causing mobile thermal throttling',
      'Ensuring instant QR recognition in noisy, crowded event lighting conditions',
    ],
    contribution:
      'Ensured a high-impact, bug-free augmented reality attendee experience by rigorously testing QR recognition, 3D rendering stability, and mobile compatibility across diverse smartphones.',
  },
]

// ====================================================
// QA METHODOLOGY
// ====================================================

export const QA_METHODOLOGY = [
  {
    step: 1,
    title: 'Requirement Analysis',
    description: 'Review BRD, user stories, and specifications to understand scope and identify testable requirements.',
    icon: 'FileSearch',
  },
  {
    step: 2,
    title: 'Test Planning',
    description: 'Define testing scope, approach, resources, timelines, and entry/exit criteria for the test cycle.',
    icon: 'ClipboardList',
  },
  {
    step: 3,
    title: 'Test Scenario Design',
    description: 'Identify high-level scenarios covering all functional areas and user journeys.',
    icon: 'Map',
  },
  {
    step: 4,
    title: 'Test Case Design',
    description: 'Write detailed, reusable test cases with steps, expected results, and test data references.',
    icon: 'FileText',
  },
  {
    step: 5,
    title: 'Test Data Preparation',
    description: 'Prepare valid, invalid, and edge-case test data required for comprehensive test execution.',
    icon: 'Database',
  },
  {
    step: 6,
    title: 'Test Execution',
    description: 'Execute test cases systematically, document results, and capture evidence for defects found.',
    icon: 'Play',
  },
  {
    step: 7,
    title: 'Bug Reporting',
    description: 'Log detailed, reproducible bug reports in Jira with steps, screenshots, severity, and priority.',
    icon: 'Bug',
  },
  {
    step: 8,
    title: 'Retesting',
    description: 'Verify fixed defects against the original bug reports to confirm resolution.',
    icon: 'RotateCcw',
  },
  {
    step: 9,
    title: 'Regression Testing',
    description: 'Execute regression suites to ensure existing functionality remains unaffected by new changes.',
    icon: 'RefreshCw',
  },
  {
    step: 10,
    title: 'Release Validation',
    description: 'Perform final smoke/sanity testing pre-release and confirm go/no-go readiness with the team.',
    icon: 'CheckCircle',
  },
]

// ====================================================
// PROFESSIONAL HIGHLIGHTS
// ====================================================

export const HIGHLIGHTS = [
  {
    icon: 'Target',
    title: '3+ Years',
    subtitle: 'QA Experience',
    description: 'Hands-on experience across multiple product domains and SDLC environments.',
  },
  {
    icon: 'Layers',
    title: '5 Projects',
    subtitle: 'Delivered',
    description: 'From healthcare platforms to real estate apps and enterprise admin portals.',
  },
  {
    icon: 'Shield',
    title: 'Accessibility',
    subtitle: 'ADA & WCAG Testing',
    description: 'Dedicated accessibility testing expertise including keyboard navigation and screen reader validation.',
  },
  {
    icon: 'Smartphone',
    title: 'Mobile QA',
    subtitle: 'iOS & Android',
    description: 'Cross-platform mobile testing experience across native and hybrid applications.',
  },
  {
    icon: 'Zap',
    title: 'API Testing',
    subtitle: 'Postman / REST',
    description: 'Comprehensive REST API testing including CRUD operations and response validation.',
  },
  {
    icon: 'Bot',
    title: 'AI-Assisted',
    subtitle: 'QA Productivity',
    description: 'Leveraging AI tools to enhance test case generation, scenario design, and automation scripting.',
  },
]

// ====================================================
// AI & AUTOMATION DETAILS
// ====================================================

export const AI_CAPABILITIES = [
  {
    title: 'Test Case Generation',
    description: 'Using AI to generate comprehensive test case drafts from requirements and user stories, accelerating the design phase.',
    icon: 'FileText',
  },
  {
    title: 'Test Scenario Design',
    description: 'Leveraging AI prompts to identify edge cases and coverage gaps in complex user flows.',
    icon: 'Map',
  },
  {
    title: 'Test Data Creation',
    description: 'Generating varied and realistic test data sets including boundary values and negative scenarios.',
    icon: 'Database',
  },
  {
    title: 'Regression Preparation',
    description: 'Structuring and organizing regression suites with AI assistance to improve coverage efficiency.',
    icon: 'RefreshCw',
  },
  {
    title: 'Automation Script Generation',
    description: 'Using AI to assist with Selenium WebDriver script drafting and Pytest structure.',
    icon: 'Code',
  },
  {
    title: 'Bug Investigation',
    description: 'Applying AI to assist with root cause analysis and formulating clearer defect descriptions.',
    icon: 'Search',
  },
  {
    title: 'Accessibility Checklist',
    description: 'Generating targeted WCAG accessibility checklists for specific UI components and user flows.',
    icon: 'Eye',
  },
  {
    title: 'Requirement Analysis',
    description: 'Summarizing and clarifying complex requirement documents to identify testable acceptance criteria.',
    icon: 'FileSearch',
  },
]

export const AI_TOOLS = [
  { name: 'Antigravity AI', role: 'Primary AI tool for test automation assistance and QA productivity' },
  { name: 'Selenium + Python', role: 'Automation framework for web UI testing' },
  { name: 'Pytest', role: 'Python-based test framework for organizing and running automation suites' },
  { name: 'Postman', role: 'API testing and automated collection runs' },
]

// ====================================================
// GITHUB QA REPOSITORIES & TEST ARTIFACTS
// ====================================================

export const QA_REPOSITORIES = [
  {
    id: 'selenium-pytest',
    name: 'selenium-pytest-crm-framework',
    title: 'Enterprise CRM Automation Suite',
    description: 'Python POM test framework with Selenium WebDriver, Pytest, and Allure CI reporting.',
    tech: ['Python', 'Selenium', 'Pytest'],
    stars: '24',
    forks: '9',
    badge: 'Automation',
    primaryMetric: '85+ Tests',
    repoUrl: 'https://github.com/YOUR_GITHUB_USERNAME/selenium-pytest-crm-framework',
  },
  {
    id: 'rest-api-suite',
    name: 'rest-api-postman-test-suite',
    title: 'REST API Automated Suite',
    description: 'Automated Postman collection with dynamic tokens, schema assertions, and Newman CLI.',
    tech: ['Postman', 'JavaScript', 'Newman'],
    stars: '18',
    forks: '6',
    badge: 'API Testing',
    primaryMetric: '40+ Endpoints',
    repoUrl: 'https://github.com/YOUR_GITHUB_USERNAME/rest-api-postman-test-suite',
  },
  {
    id: 'qa-artifacts',
    name: 'enterprise-qa-artifacts-templates',
    title: 'QA Plans & Defect Specimens',
    description: 'IEEE 829 test plans, Jira defect templates, RTM matrix, and WCAG checklists.',
    tech: ['Test Plans', 'Jira Templates', 'WCAG 2.1'],
    stars: '31',
    forks: '12',
    badge: 'Templates',
    primaryMetric: '5 Templates',
    repoUrl: 'https://github.com/YOUR_GITHUB_USERNAME/enterprise-qa-artifacts-templates',
  },
]

