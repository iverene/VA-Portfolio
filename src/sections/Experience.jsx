import Section from "../components/layout/Section.jsx";
import { experience } from "../data/experience.js";
export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Responsibilities and contributions.">
      <ol className="border border-[#e3e1dc]">
        {experience.map((e, i) => (
          <li key={e.role} className={`bg-[#ffffff] p-6 md:p-8 ${i > 0 ? "border-t border-[#e3e1dc]" : ""}`}>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#6b6b6b]">{e.period}</p>
            <h3 className="mt-1 font-serif text-xl font-semibold text-[#1a1a1a]">{e.role} — {e.org}</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[#6b6b6b]">{e.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
