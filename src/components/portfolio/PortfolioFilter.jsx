export default function PortfolioFilter({ active, onChange, counts }) {
  const all = ["All", ...Object.keys(counts)];
  return (
    <div role="tablist" aria-label="Filter portfolio by category" className="flex flex-wrap gap-2">
      {all.map((c) => (
        <button key={c} role="tab" aria-selected={active === c} onClick={() => onChange(c)}
          className={`rounded border px-3 py-1.5 text-xs font-medium uppercase tracking-wider ${active === c ? "border-[#171717] bg-[#171717] text-white" : "border-[#E5E5E0] bg-[#FFFFFF] text-[#404040] hover:text-[#171717]"}`}>
          {c}
        </button>
      ))}
    </div>
  );
}
