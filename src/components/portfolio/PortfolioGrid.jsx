import PortfolioCard from "./PortfolioCard.jsx";

export default function PortfolioGrid({ projects, onOpen }) {
  if (projects.length === 0) {
    return <p className="rounded-lg border border-[#E5E5E0] bg-[#FFFFFF] p-6 text-sm text-[#404040]">No projects in this category yet.</p>;
  }
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => <PortfolioCard key={p.id} project={p} onOpen={onOpen} />)}
    </div>
  );
}
