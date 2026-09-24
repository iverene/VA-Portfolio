import Section from "../components/layout/Section.jsx";
import { services } from "../data/services.js";
export default function Services() {
  return (
    <Section id="services" eyebrow="02 / Services" title="Support organized around client needs.">
      <ol className="grid gap-4 md:grid-cols-2">
        {services.map((s) => (
          <li key={s.n} className="flex flex-col border-2 border-[#0a0a0a] bg-[#ffffff] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_#0a0a0a]">
            <div className="flex items-center justify-between border-b-2 border-[#0a0a0a] px-5 py-2">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#0a0a0a]">Service {s.n}</p>
              <p aria-hidden="true" className="font-mono text-xs text-[#0a0a0a]">→</p>
            </div>
            <div className="flex-1 px-5 py-5">
              <h3 className="text-lg font-bold uppercase leading-snug tracking-tight text-[#0a0a0a]">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#0a0a0a]">{s.desc}</p>
            </div>
            <p className="border-t-2 border-[#0a0a0a] bg-[#0a0a0a] px-5 py-3 font-mono text-xs uppercase leading-relaxed tracking-[0.05em] text-[#ffffff]">{s.outcome}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
