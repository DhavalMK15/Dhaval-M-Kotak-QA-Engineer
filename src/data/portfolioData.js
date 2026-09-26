// ====================================================
// Portfolio Data – Dhaval M Kotak | QA Engineer
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
    email: 'dhavalkotak0150@gmail.com',
    linkedin: 'https://www.https://www.linkedin.com/in/dhaval-kotak-a6b3ab24a?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    github: 'https://github.com/DhavalMK15',
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
    barWidth: 90,
    skills: [
      'Functional Testing',
      'Regression Testing',
      'Smoke Testing',
      'Sanity Testing',
      'System Testing',
      'Integration Testing',
      'UAT',
      'Web Application Testing',
      'Mobile Application Testing',
      'End-to-End Testing',
      'Exploratory Testing',
      'Cross-browser Testing',
      'UI Testing',
      'Compatibility Testing',
    ],
  },
  {
    id: 'api',
    label: 'API Testing',
    level: 'Primary',
    levelClass: 'badge-primary',
    icon: 'Zap',
    barWidth: 82,
    skills: [
      'Postman',
      'REST API Testing',
      'Request/Response Validation',
      'Status Code Validation',
      'JSON Validation',
      'API Error Handling',
      'CRUD API Testing',
    ],
  },
  {
    id: 'accessibility',
    label: 'Accessibility Testing',
    level: 'Primary',
    levelClass: 'badge-primary',
    icon: 'Eye',
    barWidth: 78,
    skills: [
      'ADA Testing',
      'WCAG Testing',
      'Accessibility Validation',
      'Keyboard Navigation Testing',
      'Screen Reader Checks',
      'Focus Management',
      'Color/Contrast Validation',
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile Testing',
    level: 'Primary',
    levelClass: 'badge-primary',
    icon: 'Smartphone',
    barWidth: 75,
    skills: [
      'iOS Testing',
      'Android Testing',
      'Mobile Application Testing',
      'Cross-device Testing',
      'Responsive Testing',
    ],
  },
  {
    id: 'database',
    label: 'Database Testing',
    level: 'Working Knowledge',
    levelClass: 'badge-secondary',
    icon: 'Database',
    barWidth: 62,
    skills: [
      'SQL',
      'Data Validation',
      'Database Testing',
      'Basic Queries',
      'Backend Data Verification',
    ],
  },
  {
    id: 'automation',
    label: 'Automation / AI-Assisted',
    level: 'Learning',
    levelClass: 'badge-muted',
    icon: 'Bot',
    barWidth: 45,
    skills: [
      'Selenium WebDriver',
      'Python',
      'Pytest',
      'AI-Assisted Test Automation',
      'Prompt Engineering for Testing',
      'Antigravity AI',
      'Automation Script Generation',
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
    id: 'usl',
    name: 'USL / Member Portal',
    domain: 'Legal / Membership Services',
    role: 'QA Engineer',
    shortDescription:
      'Comprehensive QA coverage for a membership portal handling enrollments, payments, and attorney-related workflows.',
    tags: ['Web App', 'API Testing', 'Mobile', 'ADA/Accessibility'],
    metrics: [
      { label: 'Test Cases Executed', value: '380+', change: '100% Pass Rate' },
      { label: 'REST APIs Tested', value: '28', change: 'Postman Suite' },
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
      'Member enrollment and onboarding flows',
      'Login / Authentication and protected routes',
      'Payment flow validation',
      'Draft invoice workflows',
      'Attorney-related workflow testing',
      'Email and notification testing',
      'Mobile application testing',
      'ADA / WCAG accessibility validation',
      'REST API testing via Postman',
      'Regression testing cycles',
    ],
    tools: ['Postman', 'Chrome DevTools', 'Jira', 'Excel'],
    testingTypes: ['Functional Testing', 'API Testing', 'Accessibility Testing', 'Mobile Testing', 'Regression Testing', 'Integration Testing'],
    keyResponsibilities: [
      'Designed and executed test cases for member enrollment and authentication flows',
      'Conducted comprehensive API testing for member and payment endpoints',
      'Performed ADA and WCAG accessibility validation across all major user journeys',
      'Tested mobile responsiveness and mobile-specific workflows',
      'Validated email notifications and in-app communication flows',
      'Maintained regression test suite across releases',
      'Reported and tracked defects using Jira throughout the STLC',
    ],
    challenges: [
      'Complex multi-step enrollment workflows requiring thorough scenario coverage',
      'Ensuring ADA compliance across dynamic and JS-rendered content',
      'Coordinating regression coverage across web and mobile platforms',
    ],
    contribution:
      'Delivered structured test coverage across member-facing and internal workflows, with a focus on accessibility compliance and payment flow integrity.',
  },
  {
    id: 'ars',
    name: 'AlphaRepServices (ARS)',
    domain: 'Field Operations / Survey Management',
    role: 'QA Engineer',
    shortDescription:
      'End-to-end QA for a complex enterprise platform managing field representatives, surveys, client chains, and approval workflows.',
    tags: ['Admin Portal', 'Survey Platform', 'Workflow Testing'],
    metrics: [
      { label: 'Test Cases Authored', value: '520+', change: 'E2E Matrix' },
      { label: 'Survey Templates', value: '40+', change: 'Dynamic Forms' },
      { label: 'Approval Speedup', value: '45%', change: 'Defect Reduction' },
      { label: 'Production Stability', value: '99.9%', change: 'Zero Critical Crashes' },
    ],
    bugSpecimen: {
      ticketId: 'ARS-504',
      title: 'Mobile WebKit process memory crash on submitting high-resolution survey audit photos (>12MB)',
      severity: 'P1 - Critical',
      priority: 'Blocker',
      status: 'Verified & Closed',
      environment: 'Release Candidate v3.1.0 · Safari iOS 17.3 · iPhone 14 Pro',
      preconditions: 'Field Representative assigned to active store audit with 12 mandatory photographic checkpoints.',
      steps: [
        'Open ARS FieldRep portal on mobile browser.',
        'Navigate to Store Visit #8841 > Section B: Shelf Placement.',
        'Capture and attach 48MP raw image (14.2 MB) to photo checkpoint.',
        'Tap "Complete Audit & Upload Review".'
      ],
      expectedResult: 'Canvas downsampler resizes image to <= 1.5MB in web worker before chunked multipart upload.',
      actualResult: 'Safari tab crashes with "WebProcess exceeded memory limit"; user session terminates and audit returns to unsaved draft.',
      rawLog: 'FATAL WebProcess crashed: EXC_RESOURCE RESOURCE_TYPE_MEMORY (limit=1.4GB, used=1.42GB) at CanvasRenderingContext2D.drawImage()',
      rootCause: 'Synchronous image decompression on main UI thread allocated uncompressed raw bitmap buffers without device memory checks.',
      fixVerification: 'Verified fix in v3.1.1 — OffscreenCanvas with max dimension clamp (1920px) limits peak RAM usage to <45MB.'
    },
    testingScope: [
      'Admin workflow testing',
      'Company/workspace management',
      'Client and chain management',
      'Store/site location management',
      'Field representative management',
      'Projects and rounds management',
      'Survey and survey template creation',
      'FieldRep mobile workflows',
      'Visit calendar and scheduling',
      'Survey submission and validation',
      'Image upload and compression validation',
      'Approval workflow testing',
      'Invoice-related workflows',
      'Date and scheduling validation',
    ],
    tools: ['Postman', 'Jira', 'Chrome DevTools', 'Excel'],
    testingTypes: ['Functional Testing', 'API Testing', 'Regression Testing', 'End-to-End Testing', 'UI Testing', 'Integration Testing'],
    keyResponsibilities: [
      'Tested complete admin workflows from company setup to field operations',
      'Validated survey creation, template management, and submission flows',
      'Tested FieldRep-specific mobile workflows and field visit processes',
      'Verified scheduling, calendar, and date-related edge cases',
      'Performed image upload and compression validation',
      'Tested approval and invoice workflows end-to-end',
      'Designed regression suites to cover core platform functionality across releases',
    ],
    challenges: [
      'High complexity with multiple user roles (Admin, FieldRep, Client) requiring role-specific test scenarios',
      'Image handling and compression validation across upload sizes',
      'Scheduling and date validation across time zones and complex scheduling rules',
    ],
    contribution:
      'Provided comprehensive QA coverage across the full lifecycle of field operations — from admin setup through survey submission and approvals — ensuring workflow integrity at every stage.',
  },
  {
    id: 'resident-connect',
    name: 'Resident Connect',
    domain: 'Community & Property Management',
    role: 'QA Engineer',
    shortDescription:
      'End-to-end QA for a comprehensive resident portal managing amenity bookings, maintenance requests, visitor logs, and multi-tenant communication.',
    tags: ['Resident Portal', 'Mobile App', 'iOS', 'Android', 'Workflows'],
    metrics: [
      { label: 'Mobile Test Cases', value: '340+', change: 'iOS & Android' },
      { label: 'Device Matrix', value: '12+', change: 'Handsets & Tablets' },
      { label: 'Booking Concurrency', value: '100%', change: 'Zero Race Conditions' },
      { label: 'Regression Coverage', value: '99.2%', change: 'Across Sprints' },
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
      'Resident onboarding and profile management',
      'Amenity booking and scheduling flows',
      'Maintenance ticket creation and tracking',
      'Visitor authorization and gate pass logs',
      'Notification and broadcast alerts',
      'Mobile application testing — iOS & Android',
      'Payment and maintenance dues verification',
      'Role-based permissions (Resident, Admin, Security)',
    ],
    tools: ['Postman', 'Jira', 'Chrome DevTools', 'iOS Devices', 'Android Devices'],
    testingTypes: ['Functional Testing', 'Mobile Testing', 'End-to-End Testing', 'UAT', 'Regression Testing'],
    keyResponsibilities: [
      'Tested end-to-end resident workflows across mobile (iOS/Android) and web portals',
      'Verified service ticket lifecycles from creation to resolution and sign-off',
      'Conducted payment gateway and dues calculation testing',
      'Validated push notifications, SMS alerts, and email delivery',
      'Maintained regression test suites for continuous releases',
    ],
    challenges: [
      'Multi-role access validation across residents, facility managers, and security staff',
      'Real-time push notification and booking conflict handling',
      'Cross-platform layout consistency on varying device screen sizes',
    ],
    contribution:
      'Delivered thorough cross-platform QA coverage across iOS, Android, and web portals, ensuring frictionless tenant communication and reliable scheduling.',
  },
  {
    id: 'brooon',
    name: 'Brooon',
    domain: 'Real Estate',
    role: 'QA Engineer',
    shortDescription:
      'QA coverage for a real estate platform serving brokers, builders, and end-users with property matching, subscription management, and location-based features.',
    tags: ['Real Estate', 'Mobile + Web', 'Subscription', 'Location Features'],
    metrics: [
      { label: 'Test Scenarios', value: '410+', change: 'Multi-Role Matrix' },
      { label: 'Location APIs', value: '36', change: 'Geo-Spatial Verified' },
      { label: 'Role Coverage', value: '3', change: 'Broker, Builder, Buyer' },
      { label: 'Pass Rate', value: '99.5%', change: 'Regression Suite' },
    ],
    bugSpecimen: {
      ticketId: 'BRN-442',
      title: 'Geo-radius search filter includes listings outside requested 5km perimeter',
      severity: 'P2 - High',
      priority: 'High',
      status: 'Verified & Closed',
      environment: 'QA Environment v2.0.4 · Postman API Suite & Chrome 123',
      preconditions: 'User geolocation set to Rajkot City Center (22.3039° N, 70.8022° E); properties seeded across 2km, 5km, and 9km.',
      steps: [
        'Apply filter: Property Type = "3BHK Apartment", Search Radius = "5 km".',
        'Inspect API call: GET /api/v1/properties/search?lat=22.3039&lng=70.8022&radius=5.',
        'Validate coordinates of returned properties using Haversine calculation.'
      ],
      expectedResult: 'Only properties within strictly <= 5.0 km are returned in the result set.',
      actualResult: 'Properties located 7.8km and 9.1km away were included in the response array.',
      rawLog: 'API ASSERTION FAILED: Property ID PROP-4429 located at 7.84 km exceeded max threshold of 5.0 km.\nBounding box SQL: WHERE lat BETWEEN min_lat AND max_lat (missing spherical radius clamp).',
      rootCause: 'Backend SQL query applied rectangular bounding-box approximation without secondary ST_DWithin spherical distance calculation.',
      fixVerification: 'Verified fix in v2.0.5 — PostGIS spatial query strictly enforces exact radial boundary with 0 out-of-bounds listings.'
    },
    testingScope: [
      'Broker workflow testing',
      'End-user workflow testing',
      'Builder workflow testing',
      'Property and inquiry management',
      'Matching functionality testing',
      'Location-based matching validation',
      'Subscription and credit system testing',
      'Leads management',
      'Dashboard functionality',
      'Mobile and web workflow testing',
    ],
    tools: ['Postman', 'Jira', 'Chrome DevTools', 'Mobile Devices'],
    testingTypes: ['Functional Testing', 'API Testing', 'Mobile Testing', 'Regression Testing', 'End-to-End Testing'],
    keyResponsibilities: [
      'Tested role-specific workflows for Brokers, Builders, and End-users',
      'Validated property listing, inquiry, and matching logic',
      'Tested location-based property matching functionality',
      'Verified subscription tiers and credit deduction logic',
      'Conducted API testing for property, lead, and user management endpoints',
      'Tested dashboard data accuracy and filtering',
      'Performed cross-platform testing across mobile and web',
    ],
    challenges: [
      'Multiple distinct user roles with overlapping but different permission sets',
      'Location-based matching logic requiring geo-specific test data',
      'Subscription and credit deduction edge cases across different user actions',
    ],
    contribution:
      'Ensured quality across all user-facing workflows in a multi-role real estate platform, with emphasis on matching logic, subscription accuracy, and mobile-web consistency.',
  },
  {
    id: 'clientracker',
    name: 'ClientTracker',
    domain: 'Enterprise CRM & Case Tracking',
    role: 'QA Engineer',
    shortDescription:
      'Quality assurance and test automation for an enterprise client and case management platform covering pipelines, records, and search.',
    tags: ['CRM Portal', 'Selenium Automation', 'CRUD Testing', 'Web App'],
    metrics: [
      { label: 'Automated Tests', value: '85+', change: 'Selenium + Pytest' },
      { label: 'Execution Time', value: '-60%', change: 'Sanity Cycles' },
      { label: 'CRUD Coverage', value: '100%', change: 'All Entities' },
      { label: 'CI Pipeline Pass', value: '99.7%', change: 'Nightly Runs' },
    ],
    bugSpecimen: {
      ticketId: 'CT-284',
      title: 'Kanban pipeline drag-and-drop state reverts to prior column after fast release',
      severity: 'P2 - High',
      priority: 'High',
      status: 'Verified & Added to Automation Suite',
      environment: 'Staging v4.2.0 · Selenium WebDriver / Python 3.11 / Chrome Headless',
      preconditions: 'Lead "Apex Global ($65,000)" positioned in "Contacted" column.',
      steps: [
        'Run automated script: pytest tests/test_pipeline.py -k test_lead_drag_stage.',
        'Simulate drag-and-drop from "Contacted" to "Negotiation".',
        'Trigger browser page refresh 200ms after drop.'
      ],
      expectedResult: 'Lead persists in "Negotiation" column; PATCH /api/leads/stage returns 200 with new column ID.',
      actualResult: 'Lead reverts back to "Contacted" column on page reload due to dropped asynchronous state payload.',
      rawLog: 'SELENIUM ASSERTION ERROR:\nAssertionError: Lead card did not persist in target column.\nExpected: \'Negotiation\'\nActual: \'Contacted\' [test_pipeline.py:118]',
      rootCause: 'Drag listener fired optimistic DOM change before verifying websocket acknowledgment, dropping pending HTTP payload on swift navigation.',
      fixVerification: 'Bug resolved and guarded by automated regression test script `test_pipeline_drop_persistence()` in CI/CD pipeline.'
    },
    testingScope: [
      'Client onboarding and workspace records',
      'Case lifecycle and pipeline stage transitions',
      'Document uploads and activity logs',
      'Advanced search, filtering, and data pagination',
      'Full CRUD operation validation across all entities',
      'Role permissions (Admin, Agent, Client Viewer)',
      'Regression test execution',
      'Selenium WebDriver automated regression test suite',
    ],
    tools: ['Selenium WebDriver', 'Python', 'Pytest', 'Postman', 'Jira', 'Chrome DevTools'],
    testingTypes: ['Functional Testing', 'Regression Testing', 'Automation Testing', 'CRUD Testing', 'UI Testing'],
    keyResponsibilities: [
      'Authored test scenarios and test cases for enterprise CRM workflows',
      'Executed thorough CRUD validation across client, case, and document modules',
      'Verified search accuracy, multi-column sorting, and pagination boundaries',
      'Developed Selenium WebDriver test automation scripts using Python & Pytest',
      'Maintained automated regression suite covering core critical paths',
      'Logged, tracked, and verified defect fixes using Jira',
    ],
    challenges: [
      'Automating complex dynamic grid components and asynchronous status updates',
      'Maintaining selector stability across iterative UI redesigns',
      'Validating complex permission matrices across organizational hierarchies',
    ],
    contribution:
      'Delivered structured manual QA and developed Python/Selenium automated regression suites, cutting regression execution cycles while safeguarding critical CRM data flows.',
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
    repoUrl: 'https://github.com/DhavalMK15/selenium-pytest-crm-framework',
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
    repoUrl: 'https://github.com/DhavalMK15/rest-api-postman-test-suite',
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
    repoUrl: 'https://github.com/DhavalMK15/enterprise-qa-artifacts-templates',
  },
]

