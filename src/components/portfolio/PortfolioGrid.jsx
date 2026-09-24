import PortfolioCard from "./PortfolioCard.jsx";

export default function PortfolioGrid({ projects, onOpen }) {
  if (projects.length === 0) {
    return <p className="border-2 border-[#0a0a0a] bg-[#ffffff] p-6 font-mono text-sm uppercase tracking-[0.1em] text-[#0a0a0a]">No projects in this category yet.</p>;
  }
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => <PortfolioCard key={p.id} project={p} onOpen={onOpen} />)}
    </div>
  );
}
