export default function PortfolioFilter({ active, onChange, counts }) {
  const all = ["All", ...Object.keys(counts)];
  return (
    <div role="tablist" aria-label="Filter portfolio by category" className="flex flex-wrap gap-2">
      {all.map((c) => (
        <button key={c} role="tab" aria-selected={active === c} onClick={() => onChange(c)}
          className={`rounded-none border-2 px-3 py-1.5 font-mono text-xs font-medium uppercase tracking-[0.1em] ${active === c ? "border-[#0a0a0a] bg-[#0a0a0a] text-[#ffffff]" : "border-[#0a0a0a] bg-[#ffffff] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#ffffff]"}`}>
          {c}
        </button>
      ))}
    </div>
  );
}
