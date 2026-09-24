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
