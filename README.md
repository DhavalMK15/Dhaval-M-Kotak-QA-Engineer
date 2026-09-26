# Dhaval M Kotak | QA Engineer Portfolio

A modern, professional portfolio website for a QA Engineer built with React + Vite + Tailwind CSS.

## 🚀 Getting Started

### Prerequisites
- Node.js v18+ (tested with v22)
- npm v9+

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

---

## 📝 How to Customize Your Contact Info

Before deploying, update your real contact information in:

```
src/data/portfolioData.js
```

Find the `PROFILE` object at the top of the file:

```js
contact: {
  email: 'dhavalkotak0150@gmail.com',           // Replace with your email
  linkedin: 'https://www.linkedin.com/in/dhaval-kotak-a6b3ab24a',  // Replace
  github: 'https://github.com/DhavalMK15',               // Replace
},
```

---

## 🗂️ Project Structure

```
dhaval-kotak-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── Icon.jsx          # Centralized icon component
│   │   ├── Navbar.jsx            # Responsive navbar with mobile drawer
│   │   ├── Hero.jsx              # Hero section with typed text animation
│   │   ├── About.jsx             # About section
│   │   ├── Skills.jsx            # Interactive skills with progress bars
│   │   ├── Expertise.jsx         # Testing capabilities breakdown
│   │   ├── Tools.jsx             # Filterable tools grid
│   │   ├── AIAutomation.jsx      # AI-assisted QA section
│   │   ├── Projects.jsx          # Project cards with case study modals
│   │   ├── AutomationJourney.jsx # Automation growth journey
│   │   ├── Methodology.jsx       # QA methodology timeline
│   │   ├── Highlights.jsx        # Professional highlights
│   │   ├── Contact.jsx           # Contact form + info
│   │   └── Footer.jsx            # Footer
│   ├── data/
│   │   └── portfolioData.js      # All portfolio content lives here
│   ├── hooks/
│   │   └── useInView.js          # Custom intersection observer hooks
│   ├── App.jsx                   # Root component
│   ├── main.jsx                  # React entry point
│   └── index.css                 # Global styles + Tailwind directives
├── index.html                    # HTML entry with SEO meta tags
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🎨 Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite 8 | Build tool |
| Tailwind CSS 3 | Styling |
| Lucide React | Icons |
| Intersection Observer API | Scroll animations |

---

## Accessibility Features

- Skip-to-content link
- Visible focus states (focus-visible)
- Semantic HTML with proper heading hierarchy
- ARIA labels on interactive elements
- Accessible modal with focus trap + Escape key
- aria-live for typed text animation
- prefers-reduced-motion support
- Screen-reader friendly navigation

---

## 📱 Responsive Breakpoints

| Breakpoint | Width |
|---|---|
| Mobile | 320px+ |
| Small | 375px+ |
| Tablet | 768px+ |
| Laptop | 1024px+ |
| Desktop | 1280px+ |
| Wide | 1440px+ |

---

## 🚢 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project to Vercel
3. Deploy (auto-detected as Vite/React)

### Netlify
1. Run `npm run build`
2. Drag `dist/` folder to Netlify drop zone, or connect GitHub repo

---

Built for Dhaval M Kotak | QA Engineer | Rajkot, Gujarat, India
