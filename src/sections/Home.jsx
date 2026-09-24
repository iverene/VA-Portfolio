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
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#404040]">Administrative Virtual Assistant</p>
      <h1 className="mt-4 max-w-3xl text-4xl md:text-6xl font-semibold leading-tight text-[#171717]">I keep information, communication, and daily operations organized.</h1>
      <p className="mt-4 text-sm text-[#404040]">{CAPS.join(" • ")}</p>
      <div className="mt-6"><CTA /></div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {PROOF.map(([t, d]) => (
          <div key={t} className="rounded-lg border border-[#E5E5E0] bg-[#FFFFFF] p-5">
            <Badge>{t}</Badge><p className="mt-3 text-sm text-[#404040]">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
