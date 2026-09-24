export default function Metadata({ items = [] }) {
  return <dl className="grid gap-2 text-sm">{items.map(([k, v], i) => <div key={`${k}-${v}-${i}`} className="flex gap-2"><dt className="w-28 shrink-0 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[#6b6b6b]">{k}</dt><dd className="text-[#1a1a1a]">{v}</dd></div>)}</dl>;
}
