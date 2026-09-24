import Badge from "../ui/Badge.jsx";

export default function PortfolioCard({ project, onOpen }) {
  return (
    <article className="overflow-hidden rounded-none border-2 border-[#0a0a0a] bg-[#ffffff] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_#0a0a0a]">
      <button onClick={() => onOpen(project)} className="block w-full text-left" aria-label={`View ${project.title}`}>
        {project.preview ? (
          <img src={project.preview} alt={`${project.title} preview`} loading="lazy" className="aspect-[16/10] w-full border-b-2 border-[#0a0a0a] object-cover" />
        ) : (
          <div className="flex aspect-[16/10] w-full items-center justify-center border-b-2 border-[#0a0a0a] bg-[#ffffff] p-6 text-center">
            <span className="bg-[#0a0a0a] px-2 py-1 font-mono text-xs font-medium uppercase tracking-[0.15em] text-[#ffffff]">{project.type} · {project.status}</span>
          </div>
        )}
        <div className="space-y-2 p-5">
          <Badge>{project.category}</Badge>
          <h3 className="font-bold tracking-tight text-[#0a0a0a]">{project.title}</h3>
          <p className="text-sm text-[#0a0a0a]">{project.description}</p>
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-[#0a0a0a]">{project.tools.join(" / ")} / {project.type}</p>
          <span className="inline-block bg-[#0a0a0a] px-2 py-1 font-mono text-xs font-medium uppercase tracking-[0.1em] text-[#ffffff]">View Project →</span>
        </div>
      </button>
    </article>
  );
}
