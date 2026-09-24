import Badge from "../ui/Badge.jsx";

export default function PortfolioCard({ project, onOpen }) {
  return (
    <article className="overflow-hidden rounded-lg border border-[#E5E5E0] bg-[#FFFFFF] transition-shadow hover:shadow-sm">
      <button onClick={() => onOpen(project)} className="block w-full text-left" aria-label={`View ${project.title}`}>
        {project.preview ? (
          <img src={project.preview} alt={`${project.title} preview`} loading="lazy" className="aspect-[16/10] w-full object-cover" />
        ) : (
          <div className="flex aspect-[16/10] w-full items-center justify-center bg-[#F7F6F2] p-6 text-center">
            <span className="text-xs font-medium uppercase tracking-wider text-[#404040]">{project.type} · {project.status}</span>
          </div>
        )}
        <div className="space-y-2 p-5">
          <Badge>{project.category}</Badge>
          <h3 className="font-semibold text-[#171717]">{project.title}</h3>
          <p className="text-sm text-[#404040]">{project.description}</p>
          <p className="text-xs text-[#404040]">{project.tools.join(" · ")} · {project.type}</p>
          <span className="inline-block text-sm font-medium text-[#171717]">View Project →</span>
        </div>
      </button>
    </article>
  );
}
