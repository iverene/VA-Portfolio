import Section from "../components/layout/Section.jsx";
import { skillGroups } from "../data/skills.js";
export default function Skills() {
  return (
    <Section id="skills" eyebrow="03 / Skills" title="Grouped capabilities, not software collecting.">
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((g) => (
          <div key={g.title} className="border-2 border-[#0a0a0a] bg-[#ffffff] p-6">
            <h3 className="inline-block bg-[#0a0a0a] px-2 py-0.5 font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#ffffff]">{g.title}</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-[#0a0a0a]">{g.items.map((i) => <li key={i} className="border-b border-[#0a0a0a] pb-1.5 last:border-0 last:pb-0">{i}</li>)}</ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
