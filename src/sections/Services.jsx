import Section from "../components/layout/Section.jsx";
import { services } from "../data/services.js";
export default function Services() {
  return (
    <Section id="services" eyebrow="Services" title="Support organized around client needs.">
      <ol className="grid gap-4 md:grid-cols-2">
        {services.map((s) => (
          <li key={s.n} className="rounded-lg border border-[#E5E5E0] bg-[#FFFFFF] p-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#404040]">{s.n}</p>
            <h3 className="mt-2 text-lg font-semibold uppercase text-[#171717]">{s.title}</h3>
            <p className="mt-2 text-sm text-[#404040]">{s.desc}</p>
            <p className="mt-3 border-t border-[#E5E5E0] pt-3 text-sm text-[#171717]">{s.outcome}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
