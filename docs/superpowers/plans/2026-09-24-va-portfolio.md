# VA Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the full 7-section Administrative VA portfolio SPA per the 2026-09-24 design spec.

**Architecture:** Vite + React (JS) single-page app with anchor navigation; Tailwind styling with project tokens; content separated in `src/data/*.js`; portfolio rendered from data with filter + modal case-study viewer.

**Tech Stack:** Vite, React + React DOM (JS, ES modules), Tailwind CSS, Lucide React, Motion, Lenis, Vercel deploy.

## Global Constraints

- JavaScript only — no TypeScript.
- No React Router — anchor nav `/#home /#about /#services /#skills /#portfolio /#experience /#contact`.
- No UI component library.
- Tokens: Ink `#171717`, Charcoal `#404040`, Warm White `#F7F6F2`, Paper `#FFFFFF`, Soft Gray `#E5E5E0`, Sage `#A8B5A2` (sparingly).
- Max content width 1200–1280px; mobile-first, no page-wide horizontal overflow.
- Every practice item labeled "Practice Project" or "Simulated Business Scenario"; fictional/redacted data only.
- External links: `target="_blank" rel="noopener noreferrer"` + external icon + leaves-site hint.
- Reduced motion: disable entrance/parallax when `prefers-reduced-motion: reduce`.
- Title: `Iverene Causapin — Administrative Virtual Assistant`.
- Contact: mailto + links only, no form backend.
- `npm run build` must pass; deploy target Vercel.

---

### Task 1: Scaffold + tokens + app shell + SEO

**Files:**
- Create: `package.json` (via Vite), `vite.config.js`, `index.html` (edit), `src/main.jsx`, `src/App.jsx`, `src/index.css`
- Test: build output `dist/index.html`

**Interfaces:**
- Consumes: nothing.
- Produces: `App` root rendering `<div id="root">` sections by anchor id; `index.css` exporting tokens as CSS vars + Tailwind import.

- [ ] **Step 1: Scaffold Vite React app in place**

Run: `npm create vite@latest . -- --template react` (answer no to overwrite conflicts only for docs/ which are kept; if CLI refuses non-empty dir, scaffold to temp then copy `package.json`, `vite.config.js`, `src/`, `index.html` essentials manually)
Expected: `package.json` with `scripts.dev/build/preview` present.

- [ ] **Step 2: Install deps**

Run: `npm install react react-dom lucide-react motion lenis && npm install -D tailwindcss @tailwindcss/vite`
Expected: exit 0, `node_modules/` populated.

- [ ] **Step 3: Wire Tailwind + tokens in `src/index.css`**

```css
@import "tailwindcss";

:root {
  --ink: #171717;
  --charcoal: #404040;
  --warm-white: #F7F6F2;
  --paper: #FFFFFF;
  --soft-gray: #E5E5E0;
  --sage: #A8B5A2;
}

html { scroll-behavior: smooth; }
body { background: var(--warm-white); color: var(--charcoal); }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

- [ ] **Step 4: Set `index.html` head (title/meta/OG)**

```html
<title>Iverene Causapin — Administrative Virtual Assistant</title>
<meta name="description" content="Administrative Virtual Assistant specializing in records and documentation, data and spreadsheet management, inbox and calendar management, and professional business communications." />
<meta property="og:title" content="Iverene Causapin — Administrative Virtual Assistant" />
<meta property="og:description" content="Reliable administrative support that keeps information, communication, and daily operations organized." />
<meta property="og:type" content="website" />
```

- [ ] **Step 5: Minimal `src/App.jsx` shell with all 7 anchors**

```jsx
export default function App() {
  return (
    <main>
      <section id="home"><h1>Administrative support, organized around your business.</h1></section>
      <section id="about"><h2>About</h2></section>
      <section id="services"><h2>Services</h2></section>
      <section id="skills"><h2>Skills</h2></section>
      <section id="portfolio"><h2>Portfolio</h2></section>
      <section id="experience"><h2>Experience</h2></section>
      <section id="contact"><h2>Contact</h2></section>
    </main>
  );
}
```

- [ ] **Step 6: Verify build**

Run: `npm run build`
Expected: PASS with `dist/` generated, no errors.

- [ ] **Step 7: Commit**

```bash
git add package.json vite.config.js index.html src/main.jsx src/App.jsx src/index.css
git commit -m "feat: scaffold Vite React Tailwind shell with tokens and SEO head"
```

---

### Task 2: Layout — Navbar, Footer, Section wrapper

**Files:**
- Create: `src/components/layout/Navbar.jsx`, `src/components/layout/Footer.jsx`, `src/components/layout/Section.jsx`
- Modify: `src/App.jsx` (render Navbar + Footer + Section wrappers)
- Test: manual nav check + `npm run build`

**Interfaces:**
- Consumes: anchor ids from Task 1.
- Produces: `Navbar({ links })`, `Section({ id, eyebrow, title, children })`, `Footer({ email, links })`.

- [ ] **Step 1: Write `Section.jsx`**

```jsx
export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="mx-auto w-full max-w-[1280px] px-6 py-16 md:py-24 scroll-mt-20">
      {eyebrow && <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#404040]">{eyebrow}</p>}
      {title && <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#171717]">{title}</h2>}
      <div className="mt-8">{children}</div>
    </section>
  );
}
```

- [ ] **Step 2: Write `Navbar.jsx` (sticky, mobile menu, active link via IntersectionObserver)**

```jsx
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  ["home", "Home"], ["about", "About"], ["services", "Services"],
  ["skills", "Skills"], ["portfolio", "Portfolio"], ["experience", "Experience"], ["contact", "Contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    LINKS.forEach(([id]) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);
  return (
    <header className="sticky top-0 z-40 border-b border-[#E5E5E0] bg-[#F7F6F2]/90 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
        <a href="#home" className="font-semibold text-[#171717]">Iverene Causapin</a>
        <button className="md:hidden" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <ul className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-1 border-b border-[#E5E5E0] bg-[#F7F6F2] px-6 py-4 md:static md:flex md:flex-row md:gap-6 md:border-0 md:bg-transparent md:p-0`}>
          {LINKS.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)}
                aria-current={active === id ? "true" : undefined}
                className={`block py-1 text-sm ${active === id ? "text-[#171717] underline decoration-[#A8B5A2] decoration-2 underline-offset-8" : "text-[#404040] hover:text-[#171717]"}`}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
```

- [ ] **Step 3: Write `Footer.jsx`**

```jsx
export default function Footer({ email }) {
  return (
    <footer className="border-t border-[#E5E5E0] bg-[#FFFFFF]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-6 py-8 text-sm text-[#404040] md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Iverene Causapin — Administrative Virtual Assistant</p>
        <a href={`mailto:${email}`} className="underline underline-offset-4 hover:text-[#171717]">{email}</a>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Wire into `App.jsx` with real email placeholder replaced by owner value**

Render `<Navbar />`, wrap each section in `<Section>`, add `<Footer email="hello@example.com" />` (owner to supply real email in Task 8).

- [ ] **Step 5: Verify**

Run: `npm run build`
Expected: PASS. Manual: click each nav link scrolls to section; mobile menu opens/closes; active link underlines.

- [ ] **Step 6: Commit**

```bash
git add src/components/layout src/App.jsx
git commit -m "feat: add sticky navbar, section wrapper, and footer"
```

---

### Task 3: Shared UI primitives

**Files:**
- Create: `src/components/ui/Button.jsx`, `src/components/ui/Badge.jsx`, `src/components/ui/ExternalLink.jsx`, `src/components/shared/SectionHeading.jsx`, `src/components/shared/Metadata.jsx`, `src/components/shared/CTA.jsx`

**Interfaces:**
- Consumes: tokens from Task 1.
- Produces: `Button({ href, variant, children })`, `Badge({ children })`, `ExternalLink({ href, children })`, `SectionHeading({ eyebrow, title, lede })`, `Metadata({ items })`, `CTA({ primary, secondary })`.

- [ ] **Step 1: Write `Button.jsx`**

```jsx
const styles = {
  primary: "bg-[#171717] text-white hover:bg-[#404040]",
  secondary: "border border-[#171717] text-[#171717] hover:bg-[#171717] hover:text-white",
  link: "text-[#171717] underline underline-offset-4 hover:text-[#404040]",
};
export default function Button({ href, variant = "primary", children }) {
  return <a href={href} className={`inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-colors ${styles[variant]}`}>{children}</a>;
}
```

- [ ] **Step 2: Write `Badge.jsx`, `ExternalLink.jsx`, `Metadata.jsx`, `SectionHeading.jsx`, `CTA.jsx`**

```jsx
// Badge.jsx
export default function Badge({ children }) {
  return <span className="inline-flex items-center rounded border border-[#E5E5E0] bg-[#FFFFFF] px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-[#404040]">{children}</span>;
}
// ExternalLink.jsx
import { ArrowUpRight } from "lucide-react";
export default function ExternalLink({ href, children }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-[#171717] underline underline-offset-4">{children} <ArrowUpRight size={14} aria-hidden="true" /><span className="sr-only">(opens in a new tab)</span></a>;
}
// Metadata.jsx
export default function Metadata({ items = [] }) {
  return <dl className="grid gap-2 text-sm">{items.map(([k, v]) => <div key={k} className="flex gap-2"><dt className="w-28 shrink-0 text-[11px] font-medium uppercase tracking-wider text-[#404040]">{k}</dt><dd className="text-[#171717]">{v}</dd></div>)}</dl>;
}
// SectionHeading.jsx
export default function SectionHeading({ eyebrow, title, lede }) {
  return <div><p className="text-xs font-medium uppercase tracking-[0.2em] text-[#404040]">{eyebrow}</p><h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#171717]">{title}</h2>{lede && <p className="mt-4 max-w-2xl text-[#404040]">{lede}</p>}</div>;
}
// CTA.jsx
import Button from "../ui/Button.jsx";
export default function CTA({ primary = { href: "#portfolio", label: "View Portfolio" }, secondary = { href: "#contact", label: "Get in Touch" } }) {
  return <div className="flex flex-wrap gap-3"><Button href={primary.href} variant="primary">{primary.label}</Button><Button href={secondary.href} variant="secondary">{secondary.label}</Button></div>;
}
```

- [ ] **Step 3: Verify**

Run: `npm run build`
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui src/components/shared
git commit -m "feat: add shared UI primitives (button, badge, links, headings)"
```

---

### Task 4: Home + About sections

**Files:**
- Create: `src/sections/Home.jsx`, `src/sections/About.jsx`
- Modify: `src/App.jsx`
- Test: visual + build

**Interfaces:**
- Consumes: `Section`, `CTA`, `Badge` from Tasks 2–3.
- Produces: `Home()`, `About()` section content.

- [ ] **Step 1: Write `Home.jsx`**

```jsx
import Section from "../components/layout/Section.jsx";
import CTA from "../components/shared/CTA.jsx";
import Badge from "../components/ui/Badge.jsx";

const CAPS = ["Records & Documentation", "Data & Spreadsheets", "Inbox Management", "Calendar Management", "Business Communications"];
const PROOF = [
  ["FILE ORGANIZATION", "Structured folders + naming"],
  ["INBOX MANAGEMENT", "Labels, filters + follow-ups"],
  ["CALENDAR MANAGEMENT", "Weekly schedule + deadlines"],
];

export default function Home() {
  return (
    <Section id="home">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#404040]">Administrative Virtual Assistant</p>
      <h1 className="mt-4 max-w-3xl text-4xl md:text-6xl font-semibold leading-tight text-[#171717]">I keep information, communication, and daily operations organized.</h1>
      <p className="mt-4 text-sm text-[#404040]">{CAPS.join(" • ")}</p>
      <div className="mt-6"><CTA /></div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {PROOF.map(([t, d]) => (
          <div key={t} className="rounded-lg border border-[#E5E5E0] bg-[#FFFFFF] p-5">
            <Badge>{t}</Badge><p className="mt-3 text-sm text-[#404040]">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Write `About.jsx` (2-col, principles 01–04 + Adaptable)**

```jsx
import Section from "../components/layout/Section.jsx";

const PRINCIPLES = [
  ["01 — Organized", "Information is structured so it can be easily found and maintained."],
  ["02 — Detail-Oriented", "Documents, spreadsheets, schedules, and communications are reviewed carefully."],
  ["03 — Reliable", "Tasks and deadlines are tracked systematically."],
  ["04 — Proactive", "Missing information, follow-ups, and next steps are identified early."],
  ["05 — Adaptable", "Comfortable learning and working across different digital tools and workflows."],
];

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Administrative support shaped by real organizational work.">
      <div className="grid gap-8 md:grid-cols-[1fr_1.4fr]">
        <div className="rounded-lg border border-[#E5E5E0] bg-[#FFFFFF] p-6 text-sm text-[#404040]">
          <p className="text-[11px] font-medium uppercase tracking-wider">Background</p>
          <p className="mt-2">Student organization Committee Chairperson on Records / secretary: meeting records, minutes, correspondence, file organization, coordination.</p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {PRINCIPLES.map(([t, d]) => (
            <li key={t} className="rounded-lg border border-[#E5E5E0] bg-[#FFFFFF] p-5">
              <p className="text-sm font-semibold text-[#171717]">{t}</p>
              <p className="mt-2 text-sm text-[#404040]">{d}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
```

- [ ] **Step 3: Wire into `App.jsx`, verify**

Run: `npm run build`
Expected: PASS. Manual: hero + CTAs render, no overflow at 375px.

- [ ] **Step 4: Commit**

```bash
git add src/sections/Home.jsx src/sections/About.jsx src/App.jsx
git commit -m "feat: add Home hero and About sections"
```

---

### Task 5: Services + Skills + Experience sections

**Files:**
- Create: `src/data/services.js`, `src/data/skills.js`, `src/data/experience.js`, `src/sections/Services.jsx`, `src/sections/Skills.jsx`, `src/sections/Experience.jsx`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `Section`, `Badge`/`Metadata`.
- Produces: data arrays + three section components.

- [ ] **Step 1: Write `src/data/services.js`**

```js
export const services = [
  { n: "01", title: "Records & Documentation Management", desc: "File organization, folder structures, naming standards, meeting records, and administrative documents.", outcome: "Important information stays organized, accessible, and easy to maintain." },
  { n: "02", title: "Data & Spreadsheet Management", desc: "Data entry, cleaning, validation, tracking, organization, and reporting.", outcome: "Business information is clean, structured, and easier to manage." },
  { n: "03", title: "Inbox Management", desc: "Classification, labels, filters, priority triage, archiving, and follow-up tracking.", outcome: "Important emails are easier to identify, process, and follow up on." },
  { n: "04", title: "Calendar Management", desc: "Scheduling, categorization, deadline tracking, reminders, and time blocking.", outcome: "Meetings, deadlines, and tasks stay visible and organized." },
  { n: "05", title: "Business Communications Management", desc: "Professional emails, follow-ups, confirmations, updates, and Canva business materials.", outcome: "Communication stays clear, professional, and consistent." },
];
```

- [ ] **Step 2: Write `src/data/skills.js` + `src/data/experience.js`**

```js
// skills.js
export const skillGroups = [
  { title: "Administrative", items: ["Records Management", "File Organization", "Documentation", "Data Entry", "Data Cleaning", "Meeting Documentation", "Task Management", "Deadline Tracking"] },
  { title: "Communication", items: ["Professional Email Writing", "Business Correspondence", "Follow-Up Communication", "Status Updates", "Request & Clarification Emails"] },
  { title: "Productivity & Organization", items: ["Inbox Organization", "Calendar Management", "Spreadsheet Management", "Workflow Organization", "Project Coordination"] },
  { title: "Tools", items: ["Gmail", "Google Drive", "Google Docs", "Google Sheets", "Google Calendar", "Microsoft Excel", "Microsoft Word", "ClickUp", "Canva"] },
];
// experience.js
export const experience = [
  { period: "2025 — Present", role: "Committee Chairperson on Records / Secretary", org: "Student Organization", bullets: ["Records management", "Meeting documentation & minutes", "Administrative correspondence", "File organization", "Coordination"] },
  { period: "2024 — 2025", role: "Project Coordination & Documentation", org: "Academic / WaterWise Project", bullets: ["Task management", "Documentation", "Team workflows", "Testing support", "Deadline management"] },
];
```

- [ ] **Step 3: Write the three section components (cards / grouped lists / timeline)**

```jsx
// Services.jsx
import Section from "../components/layout/Section.jsx";
import { services } from "../data/services.js";
export default function Services() {
  return (
    <Section id="services" eyebrow="Services" title="Support organized around client needs.">
      <ol className="grid gap-4 md:grid-cols-2">
        {services.map((s) => (
          <li key={s.n} className="rounded-lg border border-[#E5E5E0] bg-[#FFFFFF] p-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#404040]">{s.n}</p>
            <h3 className="mt-2 text-lg font-semibold uppercase text-[#171717]">{s.title}</h3>
            <p className="mt-2 text-sm text-[#404040]">{s.desc}</p>
            <p className="mt-3 border-t border-[#E5E5E0] pt-3 text-sm text-[#171717]">{s.outcome}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
// Skills.jsx
import Section from "../components/layout/Section.jsx";
import { skillGroups } from "../data/skills.js";
export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Grouped capabilities, not software collecting.">
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((g) => (
          <div key={g.title} className="rounded-lg border border-[#E5E5E0] bg-[#FFFFFF] p-6">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-[#404040]">{g.title}</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-[#171717]">{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
// Experience.jsx
import Section from "../components/layout/Section.jsx";
import { experience } from "../data/experience.js";
export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Responsibilities and contributions.">
      <ol className="space-y-4">
        {experience.map((e) => (
          <li key={e.role} className="rounded-lg border border-[#E5E5E0] bg-[#FFFFFF] p-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#404040]">{e.period}</p>
            <h3 className="mt-1 font-semibold text-[#171717]">{e.role} — {e.org}</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[#404040]">{e.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
```

- [ ] **Step 4: Verify + commit**

Run: `npm run build`
Expected: PASS.

```bash
git add src/data/services.js src/data/skills.js src/data/experience.js src/sections/Services.jsx src/sections/Skills.jsx src/sections/Experience.jsx src/App.jsx
git commit -m "feat: add Services, Skills, and Experience sections with data files"
```

---

### Task 6: Portfolio data layer (wire real assets)

**Files:**
- Create: `src/data/portfolio.js`
- Assets: place owner files under `public/previews/` (PNG/JPG) and `public/documents/` (PDF/XLSX); external Sheets URLs in data.

**Interfaces:**
- Consumes: owner asset inventory.
- Produces: `portfolioProjects[]` with schema `{ id, title, category, type, description, objective, process, outcome, skills[], tools[], preview, file?, externalUrl?, status }`.

- [ ] **Step 1: Create data file with one entry per real asset (example shape, fill all)**

```js
export const CATEGORIES = ["Records & Documentation Management", "Data & Spreadsheet Management", "Inbox Management", "Calendar Management", "Business Communications Management"];

export const portfolioProjects = [
  {
    id: "client-database",
    title: "Client Database — Cleaning & Organization",
    category: "Data & Spreadsheet Management",
    type: "XLSX",
    description: "Cleaned and standardized client database with duplicates removed and formatting applied.",
    objective: "Turn scattered contact data into a clean, filterable database.",
    process: "Standardized text and dates, removed duplicates, applied validation, sorting, and table formatting.",
    outcome: "Database is easier to track, review, and update.",
    skills: ["Data Entry", "Data Cleaning", "Sorting", "Filtering"],
    tools: ["Microsoft Excel"],
    preview: "/previews/client-database.png",
    file: "/documents/client-database.xlsx",
    status: "Practice Project",
  },
];
```

- [ ] **Step 2: Place every referenced `preview`/`file` in `public/`; confirm each path resolves**

Run: `npm run build` then check `dist/previews/` and `dist/documents/` exist.
Expected: PASS, no 404 paths in data.

- [ ] **Step 3: Commit**

```bash
git add src/data/portfolio.js public/previews public/documents
git commit -m "feat: add portfolio data layer and evidence assets"
```

---

### Task 7: Portfolio UI — filter, cards, modal, file preview

**Files:**
- Create: `src/components/portfolio/PortfolioFilter.jsx`, `src/components/portfolio/PortfolioCard.jsx`, `src/components/portfolio/PortfolioGrid.jsx`, `src/components/portfolio/PortfolioModal.jsx`, `src/components/portfolio/FilePreview.jsx`, `src/sections/Portfolio.jsx`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `portfolioProjects`, `CATEGORIES` from Task 6; `Badge`, `ExternalLink`, `Metadata`.
- Produces: `Portfolio()` with working filter + modal; `FilePreview({ project })` branching on `type`.

- [ ] **Step 1: Write `FilePreview.jsx`**

```jsx
import ExternalLink from "../ui/ExternalLink.jsx";
export default function FilePreview({ project }) {
  if (project.type === "Google Sheets") {
    return (
      <div className="rounded-lg border border-[#E5E5E0] bg-[#FFFFFF] p-5">
        <img src={project.preview} alt={`${project.title} preview`} loading="lazy" className="w-full rounded border border-[#E5E5E0]" />
        <div className="mt-4"><ExternalLink href={project.externalUrl}>Open Google Sheet</ExternalLink></div>
      </div>
    );
  }
  if (project.type === "PDF") {
    return (
      <div className="rounded-lg border border-[#E5E5E0] bg-[#FFFFFF] p-5">
        <img src={project.preview} alt={`${project.title} preview`} loading="lazy" className="w-full rounded border border-[#E5E5E0]" />
        <a href={project.file} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-medium underline underline-offset-4">View PDF</a>
      </div>
    );
  }
  if (project.type === "XLSX") {
    return (
      <div className="rounded-lg border border-[#E5E5E0] bg-[#FFFFFF] p-5">
        <img src={project.preview} alt={`${project.title} preview`} loading="lazy" className="w-full rounded border border-[#E5E5E0]" />
        <a href={project.file} download className="mt-4 inline-block text-sm font-medium underline underline-offset-4">Open File</a>
      </div>
    );
  }
  return <img src={project.preview} alt={`${project.title} preview`} loading="lazy" className="w-full rounded-lg border border-[#E5E5E0]" />;
}
```

- [ ] **Step 2: Write filter + card + grid + modal + section**

```jsx
// PortfolioFilter.jsx
export default function PortfolioFilter({ active, onChange, counts }) {
  const all = ["All", ...Object.keys(counts)];
  return (
    <div role="tablist" aria-label="Filter portfolio by category" className="flex flex-wrap gap-2">
      {all.map((c) => (
        <button key={c} role="tab" aria-selected={active === c} onClick={() => onChange(c)}
          className={`rounded border px-3 py-1.5 text-xs font-medium uppercase tracking-wider ${active === c ? "border-[#171717] bg-[#171717] text-white" : "border-[#E5E5E0] bg-[#FFFFFF] text-[#404040] hover:text-[#171717]"}`}>
          {c}
        </button>
      ))}
    </div>
  );
}
// PortfolioCard.jsx
import Badge from "../ui/Badge.jsx";
export default function PortfolioCard({ project, onOpen }) {
  return (
    <article className="overflow-hidden rounded-lg border border-[#E5E5E0] bg-[#FFFFFF] transition-shadow hover:shadow-sm">
      <button onClick={() => onOpen(project)} className="block w-full text-left" aria-label={`View ${project.title}`}>
        <img src={project.preview} alt={`${project.title} preview`} loading="lazy" className="aspect-[16/10] w-full object-cover" />
        <div className="space-y-2 p-5">
          <Badge>{project.category}</Badge>
          <h3 className="font-semibold text-[#171717]">{project.title}</h3>
          <p className="text-sm text-[#404040]">{project.description}</p>
          <p className="text-xs text-[#404040]">{project.tools.join(" · ")} · {project.type}</p>
          <span className="inline-block text-sm font-medium text-[#171717]">View Project →</span>
        </div>
      </button>
    </article>
  );
}
// PortfolioModal.jsx — fixed overlay, Escape to close, focus close button on open, body scroll lock
```

Full modal: backdrop fade + panel with header (category badge, title, status), Overview/Objective/Process/Deliverables (`FilePreview`), Skills, Tools, Outcome, action row. Implement Escape handler + `document.body.style.overflow` lock + `aria-modal="dialog" role="dialog"`.

```jsx
// Portfolio.jsx
import { useMemo, useState } from "react";
import Section from "../layout/Section.jsx";
import PortfolioFilter from "../portfolio/PortfolioFilter.jsx";
import PortfolioCard from "../portfolio/PortfolioCard.jsx";
import PortfolioModal from "../portfolio/PortfolioModal.jsx";
import { portfolioProjects } from "../../data/portfolio.js";

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState(null);
  const counts = useMemo(() => {
    const m = {};
    portfolioProjects.forEach((p) => { m[p.category] = (m[p.category] || 0) + 1; });
    return m;
  }, []);
  const list = active === "All" ? portfolioProjects : portfolioProjects.filter((p) => p.category === active);
  return (
    <Section id="portfolio" eyebrow="Portfolio" title="Evidence of organized work.">
      <PortfolioFilter active={active} onChange={setActive} counts={counts} />
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => <PortfolioCard key={p.id} project={p} onOpen={setOpen} />)}
      </div>
      {open && <PortfolioModal project={open} onClose={() => setOpen(null)} />}
    </Section>
  );
}
```

- [ ] **Step 3: Verify**

Run: `npm run build`
Expected: PASS. Manual: filter All + each of 5 categories; open/Escape-close modal; each type action works; keyboard-only operable.

- [ ] **Step 4: Commit**

```bash
git add src/components/portfolio src/sections/Portfolio.jsx src/App.jsx
git commit -m "feat: add portfolio filter, cards, and case-study modal"
```

---

### Task 8: Contact + Motion/Lenis polish + quality pass

**Files:**
- Create: `src/sections/Contact.jsx`
- Modify: `src/App.jsx`, `src/components/layout/Footer.jsx` (real email/links), `src/main.jsx` (Lenis init)

**Interfaces:**
- Consumes: all prior tasks.
- Produces: finished site meeting design + quality bars.

- [ ] **Step 1: Write `Contact.jsx` (mailto only)**

```jsx
import Section from "../components/layout/Section.jsx";
import Button from "../components/ui/Button.jsx";

export default function Contact({ email, links = [] }) {
  return (
    <Section id="contact" eyebrow="Contact" title="Have administrative work that needs to be organized?">
      <p className="max-w-2xl text-[#404040]">Let&apos;s connect and discuss how I can help keep your documents, data, communication, and daily workflows organized.</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href={`mailto:${email}`}>Email Me</Button>
        {links.map(([label, href]) => <Button key={label} href={href} variant="secondary">{label}</Button>)}
      </div>
      <p className="mt-4 text-sm text-[#404040]">{email}</p>
    </Section>
  );
}
```

- [ ] **Step 2: Init Lenis in `main.jsx` with reduced-motion guard**

```jsx
import Lenis from "lenis";
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const lenis = new Lenis({ duration: 1.1 });
  const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);
}
```

- [ ] **Step 3: Add Motion section-reveal (opacity 0→1, y 20→0, 400–600ms) to `Section.jsx` only**

Keep it to the section wrapper; no per-child stagger except portfolio grid (subtle). Preserve content without JS animation.

- [ ] **Step 4: Quality pass checklist (fix inline, no new features)**

  - Breakpoints 320/375/390/768/1024/1280/1440: no horizontal overflow, cards stack, nav collapses.
  - Keyboard: tab through nav/filter/cards/modal, Escape closes modal, visible focus.
  - Reduced motion: animations off, content fully readable.
  - Images: all `alt` set, `loading="lazy"` on previews.
  - Links: external have icon + new-tab hint; mailto correct.

- [ ] **Step 5: Final verify**

Run: `npm run build`
Expected: PASS with zero warnings treated as errors; `dist/` deployable to Vercel.

- [ ] **Step 6: Commit**

```bash
git add src/sections/Contact.jsx src/App.jsx src/main.jsx src/components/layout/Section.jsx src/components/layout/Footer.jsx
git commit -m "feat: add Contact section with Motion/Lenis polish and quality pass"
```
