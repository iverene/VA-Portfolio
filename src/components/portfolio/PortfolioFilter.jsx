export default function PortfolioFilter({ active, onChange, counts }) {
  const all = ["All", ...Object.keys(counts)];
  return (
    <div role="tablist" aria-label="Filter portfolio by category" className="flex flex-wrap gap-2">
      {all.map((c) => (
        <button key={c} role="tab" aria-selected={active === c} onClick={() => onChange(c)}
          className={`rounded-full border px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.1em] ${active === c ? "border-[#1a1a1a] bg-[#1a1a1a] text-[#ffffff]" : "border-[#e3e1dc] bg-[#ffffff] text-[#6b6b6b] hover:border-[#1a1a1a] hover:text-[#1a1a1a]"}`}>
          {c}
        </button>
      ))}
    </div>
  );
}
