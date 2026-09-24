export default function SectionHeading({ eyebrow, title, lede }) {
  return <div><p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#0a0a0a]">{eyebrow}</p><h2 className="mt-3 text-2xl font-bold tracking-tight text-[#0a0a0a] md:text-3xl">{title}</h2>{lede && <p className="mt-4 max-w-2xl text-[#0a0a0a]">{lede}</p>}</div>;
}
