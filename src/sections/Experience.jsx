import Section from "../components/layout/Section.jsx";
import { experience } from "../data/experience.js";
export default function Experience() {
  return (
    <Section id="experience" eyebrow="05 / Experience" title="Responsibilities and contributions.">
      <ol className="space-y-4">
        {experience.map((e) => (
          <li key={e.role} className="border-2 border-[#0a0a0a] bg-[#ffffff] p-6">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#0a0a0a]">{e.period}</p>
            <h3 className="mt-1 font-bold text-[#0a0a0a]">{e.role} — {e.org}</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[#0a0a0a]">{e.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
