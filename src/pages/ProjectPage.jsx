import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Badge from "../components/ui/Badge.jsx";
import Metadata from "../components/shared/Metadata.jsx";
import FilePreview from "../components/portfolio/FilePreview.jsx";
import Footer from "../components/layout/Footer.jsx";
import { portfolioProjects } from "../data/portfolio.js";
import { scrollToTopInstant } from "../lib/lenis.js";

export default function ProjectPage() {
  const { id } = useParams();
  const index = portfolioProjects.findIndex((p) => p.id === id);
  const project = portfolioProjects[index];

  useEffect(() => {
    scrollToTopInstant();
  }, [id]);

  useEffect(() => {
    const prev = document.title;
    if (project) document.title = `${project.title} — Iverene Grace Causapin`;
    return () => { document.title = prev; };
  }, [project]);

  if (!project) {
    return (
      <>
        <header className="border-b border-[#e3e1dc] bg-[#ffffff]">
          <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
            <Link to="/" className="font-serif text-lg font-semibold text-[#1a1a1a]">Iverene Grace Causapin</Link>
            <Link to="/#portfolio" className="font-mono text-xs uppercase tracking-[0.15em] text-[#1a1a1a] underline underline-offset-4">All Projects</Link>
          </div>
        </header>
        <main className="mx-auto w-full max-w-3xl px-6 py-20 text-center">
          <h1 className="font-serif text-3xl font-semibold text-[#1a1a1a]">Project not found</h1>
          <p className="mt-4 text-sm text-[#6b6b6b]">The project you are looking for does not exist.</p>
          <Link to="/#portfolio" className="mt-6 inline-block font-mono text-xs uppercase tracking-[0.15em] text-[#1a1a1a] underline underline-offset-4">← Back to Portfolio</Link>
        </main>
        <Footer email="hello@example.com" />
      </>
    );
  }

  const prev = portfolioProjects[(index - 1 + portfolioProjects.length) % portfolioProjects.length];
  const next = portfolioProjects[(index + 1) % portfolioProjects.length];

  return (
    <>
      <header className="border-b border-[#e3e1dc] bg-[#ffffff]">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
          <Link to="/" className="font-serif text-lg font-semibold text-[#1a1a1a]">Iverene Grace Causapin</Link>
          <Link to="/#portfolio" className="font-mono text-xs uppercase tracking-[0.15em] text-[#1a1a1a] underline underline-offset-4">All Projects</Link>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <Badge>{project.category}</Badge>
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#6b6b6b]">{project.type} · {project.status}</p>
          </div>
          <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-[#1a1a1a] md:text-[2.75rem]">{project.title}</h1>
          <p className="mt-4 font-serif text-lg leading-relaxed text-[#6b6b6b]">{project.description}</p>
          <p className="mt-6 border-t border-[#e3e1dc] pt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-[#6b6b6b]">
            Tools — {project.tools.join(" · ")}
          </p>

          {project.note && (
            <div className="mt-8 border border-dashed border-[#6b6b6b] p-5">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[#6b6b6b]">Source Note</p>
              <p className="mt-2 text-sm leading-relaxed text-[#1a1a1a]">{project.note}</p>
            </div>
          )}
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1.1fr] md:gap-0">
          <div className="space-y-10 md:pr-10">
            <section className="border-t border-[#e3e1dc] pt-8">
              <h2 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#6b6b6b]">Objective</h2>
              <p className="mt-3 leading-relaxed text-[#1a1a1a]">{project.objective}</p>
            </section>
            <section className="border-t border-[#e3e1dc] pt-8">
              <h2 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#6b6b6b]">Process</h2>
              <p className="mt-3 leading-relaxed text-[#1a1a1a]">{project.process}</p>
            </section>
          {project.formulas && project.formulas.length > 0 && (
            <section className="border-t border-[#e3e1dc] pt-8">
              <h2 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#6b6b6b]">Formulas & Concepts</h2>
              <ul className="mt-4 space-y-3">
                {project.formulas.map((f) => (
                  <li key={f.expression} className="border border-[#e3e1dc] bg-[#ffffff] p-4">
                    <code className="font-mono text-[13px] font-medium text-[#1a1a1a]">{f.expression}</code>
                    <p className="mt-1 text-sm text-[#6b6b6b]">{f.use}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}
            <section className="border-t border-[#e3e1dc] pt-8">
              <h2 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#6b6b6b]">Skills Demonstrated</h2>
              <div className="mt-4"><Metadata items={project.skills.map((s) => ["Skill", s])} /></div>
            </section>
            <section className="border-t border-[#e3e1dc] pt-8">
              <h2 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#6b6b6b]">Outcome</h2>
              <p className="mt-3 font-serif text-xl leading-relaxed text-[#1a1a1a]">{project.outcome}</p>
            </section>
          </div>
          <div className="md:border-l md:border-[#e3e1dc] md:pl-10">
            <div className="md:sticky md:top-24">
              <h2 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#6b6b6b]">Deliverables</h2>
              <div className="mt-4"><FilePreview project={project} /></div>
            </div>
          </div>
        </div>

        <nav aria-label="More projects" className="mt-14 grid gap-px border border-[#e3e1dc] bg-[#e3e1dc] sm:grid-cols-2">
          <Link to={`/project/${prev.id}`} className="bg-[#ffffff] p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#6b6b6b]">← Previous</p>
            <p className="mt-1 font-serif text-lg font-semibold leading-snug text-[#1a1a1a]">{prev.title}</p>
          </Link>
          <Link to={`/project/${next.id}`} className="bg-[#ffffff] p-5 text-right">
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#6b6b6b]">Next →</p>
            <p className="mt-1 font-serif text-lg font-semibold leading-snug text-[#1a1a1a]">{next.title}</p>
          </Link>
        </nav>
      </main>
      <Footer email="hello@example.com" />
    </>
  );
}
