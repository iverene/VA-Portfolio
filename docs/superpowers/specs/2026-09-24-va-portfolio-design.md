# VA Portfolio — Design Spec (2026-09-24)

## Decisions
- Approach: Option A — Vite + React (JS) SPA per TECH-STACK.md.
- Scope: Full 7-section site in one cycle (Home, About, Services, Skills, Portfolio, Experience, Contact).
- Assets: Owner has portfolio evidence ready; wire real previews/files/links into data layer.
- Contact: mailto + professional links only. No form backend.

Source docs: CONTEXT.md, DESIGN.md, TECH-STACK.md (repo root).

## 1. Architecture
- Vite + React + modern JavaScript (ES modules). No TypeScript, no Next.js, no Router.
- Single-page anchor navigation: `/#home`, `/#about`, `/#services`, `/#skills`, `/#portfolio`, `/#experience`, `/#contact`.
- Styling: Tailwind CSS utilities; project tokens in `index.css` (Ink `#171717`, Charcoal `#404040`, Warm White `#F7F6F2`, Paper `#FFFFFF`, Soft Gray `#E5E5E0`, Sage `#A8B5A2`).
- Icons: Lucide React (meaningful use only). Animation: Motion (section reveal, filter, modal). Scroll: Lenis (subtle, disabled under `prefers-reduced-motion`).
- Structure (per TECH-STACK §11):
  - `src/components/{layout,ui,portfolio,shared}/`
  - `src/sections/{Home,About,Services,Skills,Portfolio,Experience,Contact}.jsx`
  - `src/data/{portfolio,services,skills,experience}.js`
  - `src/assets/{images,documents,previews}/`, `src/App.jsx`, `src/main.jsx`, `src/index.css`
- Deploy: Vercel, `npm run build` must pass.

## 2. Components & Sections
- layout: Navbar (sticky, active-section indicator, mobile menu), Footer, Section wrapper.
- ui: Button (primary dark / secondary outline / text link), Badge (file-type, status), ExternalLink (icon + safe attrs).
- portfolio: PortfolioCard, PortfolioGrid, PortfolioFilter (All + 5 categories), PortfolioModal (case study), FilePreview (per type).
- shared: SectionHeading, Metadata (small uppercase labels), CTA.
- Sections:
  - Home: eyebrow `ADMINISTRATIVE VIRTUAL ASSISTANT`, headline, value prop, [View Portfolio] + [Get in Touch], capability row (Records • Data • Inbox • Calendar • Communications), trust row.
  - About: 2-col (visual + intro), principles 01 Organized / 02 Detail-Oriented / 03 Reliable / 04 Proactive (+ Adaptable), short copy only.
  - Services: 5 numbered editorial cards with client-outcome line each.
  - Skills: grouped (Administrative / Communication / Productivity & Organization / Tools) — no pill-tag soup.
  - Portfolio: filter + cards + modal viewer (centerpiece).
  - Experience: timeline (org records experience, academic/project, WaterWise — responsibilities only, no inflated titles).
  - Contact: invitation copy, [Email Me] mailto, professional links. No form.

## 3. Data Flow & Portfolio Viewer
- One-way: `src/data/*.js` → sections → UI. No hardcoded cards.
- `portfolio.js` item schema:
  - `id, title, category, type, description, objective, process, outcome, deliverables, skills[], tools[], preview, file?, externalUrl?, status`
- Categories: Records & Documentation Management, Data & Spreadsheet Management, Inbox Management, Calendar Management, Business Communications Management.
- Types/actions: PNG/JPG → image + lightbox; PDF → thumbnail + View PDF; XLSX → screenshot preview + Open/Download; Google Sheets → preview + Open Google Sheet ↗ (new tab, `rel="noopener noreferrer"`, external-leaves-site hint).
- Case-study order: Header (title/category/type/tools/status) → Overview → Objective → Process → Deliverables → Skills → Tools → Outcome.
- Labels: every practice item marked "Practice Project" or "Simulated Business Scenario"; fictional/redacted data only.

## 4. Quality, Handling & Non-Goals
- Edge states: missing preview → neutral placeholder frame; broken external URL → disabled action with label.
- Responsive mobile-first (320/375/390/768/1024/1280/1440), no page-wide horizontal overflow; spreadsheet/table previews contained.
- Accessibility: semantic HTML, heading hierarchy, keyboard-operable nav/modal, visible focus, alt text, labeled links, Sage never color-only, reduced-motion disables entrance/parallax.
- Performance/SEO: lazy-load previews, optimized images, minimal deps; title `Iverene Causapin — Administrative Virtual Assistant` + meta/OG per TECH-STACK §18.
- Verification: `npm run build` clean; manual pass at mobile/tablet/desktop + keyboard + reduced-motion.
- Non-goals (YAGNI): React Router pages, form backend, in-browser spreadsheet UI, CMS, dark mode, heavy/parallax animation, UI component library.

## 5. Next Step
Implementation plan via writing-plans skill, then scaffold + build per this spec.
