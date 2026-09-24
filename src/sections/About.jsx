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
    <Section id="about" eyebrow="01 / About" title="Administrative support shaped by real organizational work.">
      <div className="grid gap-4 md:grid-cols-[1fr_1.4fr]">
        <div className="border-2 border-[#0a0a0a] bg-[#0a0a0a] text-[#ffffff]">
          <p className="border-b-2 border-[#ffffff] px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.2em]">Background</p>
          <div className="space-y-5 p-6 text-sm">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#ffffff]/70">Education</p>
              <p className="mt-1 font-medium">BS Information Technology, Business Analytics track</p>
              <p className="text-[#ffffff]/70">4th Year — Batangas State University TNEU</p>
            </div>
            <div className="border-t border-[#ffffff]/30 pt-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#ffffff]/70">Organizational Work</p>
              <p className="mt-1 font-medium">Committee Chairperson on Records / Deputy Secretary General</p>
              <p className="text-[#ffffff]/70">Student organization — meeting records, minutes, correspondence, file organization, coordination.</p>
            </div>
          </div>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {PRINCIPLES.map(([t, d]) => (
            <li key={t} className="border-2 border-[#0a0a0a] bg-[#ffffff] p-5">
              <p className="font-mono text-sm font-semibold text-[#0a0a0a]">{t}</p>
              <p className="mt-2 text-sm text-[#0a0a0a]">{d}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
