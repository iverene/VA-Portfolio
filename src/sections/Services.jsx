import Section from "../components/layout/Section.jsx";
import { services } from "../data/services.js";
export default function Services() {
  return (
    <Section id="services" eyebrow="02 / Services" title="Support organized around client needs.">
      <ol className="grid gap-4 md:grid-cols-2">
        {services.map((s) => (
          <li key={s.n} className="border-2 border-[#0a0a0a] bg-[#ffffff] p-6 transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_#0a0a0a]">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#0a0a0a]">{s.n}</p>
            <h3 className="mt-2 text-lg font-bold uppercase tracking-tight text-[#0a0a0a]">{s.title}</h3>
            <p className="mt-2 text-sm text-[#0a0a0a]">{s.desc}</p>
            <p className="mt-3 border-t-2 border-[#0a0a0a] pt-3 text-sm font-medium text-[#0a0a0a]">{s.outcome}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
