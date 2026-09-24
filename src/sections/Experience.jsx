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
