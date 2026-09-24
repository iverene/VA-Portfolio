export default function Metadata({ items = [] }) {
  return <dl className="grid gap-2 text-sm">{items.map(([k, v], i) => <div key={`${k}-${v}-${i}`} className="flex gap-2 border-b border-[#0a0a0a] pb-2"><dt className="w-28 shrink-0 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[#0a0a0a]">{k}</dt><dd className="text-[#0a0a0a]">{v}</dd></div>)}</dl>;
}
