import Section from "../components/layout/Section.jsx";

const PRINCIPLES = [
  ["Organized", "Information is structured so it can be easily found and maintained."],
  ["Detail-Oriented", "Documents, spreadsheets, schedules, and communications are reviewed carefully."],
  ["Reliable", "Tasks and deadlines are tracked systematically."],
  ["Proactive", "Missing information, follow-ups, and next steps are identified early."],
  ["Adaptable", "Comfortable learning and working across different digital tools and workflows."],
];

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Administrative support shaped by real organizational work.">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4">
          <div className="border border-[#e3e1dc] bg-[#ffffff] p-6">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[#6b6b6b]">Education</p>
            <p className="mt-3 font-serif text-lg font-semibold leading-snug text-[#1a1a1a]">BS Information Technology with Specialization Track in Business Analytics</p>
            <p className="mt-1 text-sm text-[#6b6b6b]">4th Year — Batangas State University TNEU</p>
          </div>
          <div className="border border-[#e3e1dc] bg-[#ffffff] p-6">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[#6b6b6b]">Organizational Work</p>
            <p className="mt-3 font-serif text-lg font-semibold leading-snug text-[#1a1a1a]">Committee Chairperson on Records / Deputy Secretary General</p>
            <p className="mt-1 text-sm text-[#6b6b6b]">Student organization — meeting records, minutes, correspondence, file organization, coordination.</p>
          </div>
        </div>
        <ul className="grid content-start gap-px border border-[#e3e1dc] bg-[#e3e1dc] sm:grid-cols-2">
          {PRINCIPLES.map(([t, d]) => (
            <li key={t} className="bg-[#ffffff] p-6">
              <p className="font-serif text-lg font-semibold text-[#1a1a1a]">{t}</p>
              <p className="mt-2 text-sm text-[#6b6b6b]">{d}</p>
            </li>
          ))}
          <li aria-hidden="true" className="hidden bg-[#ffffff] sm:block" />
        </ul>
      </div>
    </Section>
  );
}
