export default function SectionHeading({ eyebrow, title, lede }) {
  return <div><p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6b6b6b]">{eyebrow}</p><h2 className="mt-3 font-serif text-2xl font-semibold leading-snug text-[#1a1a1a] md:text-[2rem]">{title}</h2>{lede && <p className="mt-4 max-w-2xl text-[#6b6b6b]">{lede}</p>}</div>;
}
