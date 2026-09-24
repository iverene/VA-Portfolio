export default function SectionHeading({ eyebrow, title, lede }) {
  return <div><p className="text-xs font-medium uppercase tracking-[0.2em] text-[#404040]">{eyebrow}</p><h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#171717]">{title}</h2>{lede && <p className="mt-4 max-w-2xl text-[#404040]">{lede}</p>}</div>;
}
