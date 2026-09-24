import Section from "../components/layout/Section.jsx";
import CTA from "../components/shared/CTA.jsx";
import Badge from "../components/ui/Badge.jsx";

const CAPS = ["Records & Documentation", "Data & Spreadsheets", "Inbox Management", "Calendar Management", "Business Communications"];
const PROOF = [
  ["FILE ORGANIZATION", "Structured folders + naming"],
  ["INBOX MANAGEMENT", "Labels, filters + follow-ups"],
  ["CALENDAR MANAGEMENT", "Weekly schedule + deadlines"],
];

export default function Home() {
  return (
    <Section id="home">
      <p className="inline-block bg-[#0a0a0a] px-2 py-1 font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#ffffff]">Administrative Virtual Assistant</p>
      <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-[#0a0a0a] md:text-5xl">I keep information, communication, and daily operations organized.</h1>
      <p className="mt-5 border-y-2 border-[#0a0a0a] py-3 font-mono text-xs uppercase tracking-[0.15em] text-[#0a0a0a]">{CAPS.join(" / ")}</p>
      <div className="mt-6"><CTA /></div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {PROOF.map(([t, d]) => (
          <div key={t} className="border-2 border-[#0a0a0a] bg-[#ffffff] p-5 transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_#0a0a0a]">
            <Badge>{t}</Badge><p className="mt-3 text-sm text-[#0a0a0a]">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
