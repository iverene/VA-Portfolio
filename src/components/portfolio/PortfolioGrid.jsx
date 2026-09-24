import PortfolioCard from "./PortfolioCard.jsx";

export default function PortfolioGrid({ projects, onOpen, blanksMd = 0, blanksLg = 0 }) {
  if (projects.length === 0) {
    return <p className="border border-[#e3e1dc] bg-[#ffffff] p-6 text-sm text-[#6b6b6b]">No projects in this category yet.</p>;
  }
  return (
    <div className="grid gap-px border border-[#e3e1dc] bg-[#e3e1dc] md:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => <PortfolioCard key={p.id} project={p} onOpen={onOpen} />)}
      {Array.from({ length: blanksMd }).map((_, i) => (
        <div key={`blank-md-${i}`} aria-hidden="true" className="hidden bg-[#ffffff] md:block lg:hidden" />
      ))}
      {Array.from({ length: blanksLg }).map((_, i) => (
        <div key={`blank-lg-${i}`} aria-hidden="true" className="hidden bg-[#ffffff] lg:block" />
      ))}
    </div>
  );
}
