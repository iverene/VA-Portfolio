# VA Portfolio — Iverene Grace Causapin

Professional portfolio website for an **Administrative Virtual Assistant** specializing in records & documentation, data & spreadsheets, inbox & calendar management, and business communications.

> Reliable administrative support that keeps information, communication, and daily operations organized.

## Tech Stack

- **Vite + React (JavaScript)** — lightweight SPA, no router library beyond `react-router-dom` for project pages
- **Tailwind CSS v4** — utility-first styling with project theme tokens
- **Lucide React** — interface icons · **Motion** — subtle section reveals · **Lenis** — smooth scrolling
- **Deployed on Vercel** (`vercel.json` includes SPA fallback rewrites)

## Getting Started

```bash
npm install
npm run dev      # local development
npm run build    # production build (must pass before deploy)
```

## Project Structure

```text
src/
├── components/   # layout, ui, portfolio, shared primitives
├── sections/     # Home, About, Services, Skills, Portfolio, Experience, Certifications, Contact
├── pages/        # ProjectPage (dedicated /project/:id case-study pages)
├── data/         # portfolio.js, services.js, skills.js, experience.js, certifications.js
├── lib/          # Lenis smooth-scroll setup + helpers
└── assets & public/
    ├── public/previews/    # card + viewer images
    ├── public/documents/   # PDFs, spreadsheets served as files
    └── public/photo.jpg    # home portrait
```

## Managing Content

- **Portfolio items** live in `src/data/portfolio.js` — add an entry, drop `preview`/`gallery` images in `public/previews/` and files in `public/documents/`, and the card, filters, project page, and image viewer pick it up automatically. Mark practice work with `status: "Practice Project"`.
- **Services, skills, experience, certifications** each have their own data file under `src/data/`.
- **Contact email/links** are placeholders (`hello@example.com`) in `src/App.jsx` — swap in real details before publishing.

## Conventions

- Editorial design system: Source Serif 4 headlines, Space Grotesk body, IBM Plex Mono labels; hairline `#e3e1dc` dividers on white.
- Honest framing only — simulated work is labeled, personal data redacted, no invented clients or metrics.
- Accessibility: semantic HTML, keyboard-operable viewer/modal, `prefers-reduced-motion` respected throughout.
