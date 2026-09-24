import Section from "../components/layout/Section.jsx";
import ExternalLink from "../components/ui/ExternalLink.jsx";
import { certifications } from "../data/certifications.js";

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Verified credentials.">
      <ol className="border border-[#e3e1dc]">
        {certifications.map((c, i) => (
          <li key={c.id} className={`flex flex-col gap-2 bg-[#ffffff] p-6 sm:flex-row sm:items-center sm:justify-between md:p-8 ${i > 0 ? "border-t border-[#e3e1dc]" : ""}`}>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6b6b6b]">{c.date}</p>
              <h3 className="mt-1 font-serif text-xl font-semibold leading-snug text-[#1a1a1a]">{c.title}</h3>
              <p className="mt-1 text-sm text-[#6b6b6b]">{c.issuer}</p>
            </div>
            <div className="shrink-0">
              <ExternalLink href={c.url}>View Credential</ExternalLink>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
