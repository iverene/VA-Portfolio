export default function Metadata({ items = [] }) {
  return <dl className="grid gap-2 text-sm">{items.map(([k, v], i) => <div key={`${k}-${v}-${i}`} className="flex gap-2"><dt className="w-28 shrink-0 text-[11px] font-medium uppercase tracking-wider text-[#404040]">{k}</dt><dd className="text-[#171717]">{v}</dd></div>)}</dl>;
}
