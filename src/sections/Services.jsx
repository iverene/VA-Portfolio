import Section from "../components/layout/Section.jsx";
import { services } from "../data/services.js";
export default function Services() {
  return (
    <Section id="services" eyebrow="Services" title="Support organized around client needs.">
      <ol className="grid gap-px border border-[#e3e1dc] bg-[#e3e1dc] md:grid-cols-2">
        {services.map((s) => (
          <li key={s.n} className="flex flex-col bg-[#ffffff] p-6 md:p-8">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#6b6b6b]">{s.n}</p>
            <h3 className="mt-2 font-serif text-xl font-semibold leading-snug text-[#1a1a1a]">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#6b6b6b]">{s.desc}</p>
            <p className="mt-4 border-t border-[#e3e1dc] pt-3 font-mono text-xs uppercase tracking-[0.05em] text-[#1a1a1a]">{s.outcome}</p>
          </li>
        ))}
        <li aria-hidden="true" className="hidden bg-[#ffffff] md:block" />
      </ol>
    </Section>
  );
}
