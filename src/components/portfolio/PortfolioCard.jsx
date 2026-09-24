import Badge from "../ui/Badge.jsx";

const SHORT_CATEGORY = {
  "Records & Documentation Management": "Records",
  "Data & Spreadsheet Management": "Data",
  "Inbox Management": "Inbox",
  "Calendar Management": "Calendar",
  "Business Communications Management": "Comms",
};

export default function PortfolioCard({ project, onOpen }) {
  return (
    <article className="group flex flex-col bg-[#ffffff]">
      <button onClick={() => onOpen(project)} className="flex flex-1 flex-col text-left" aria-label={`View ${project.title}`}>
        <div className="flex items-center justify-between px-5 pt-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#6b6b6b]">{project.type}</p>
          <Badge>{SHORT_CATEGORY[project.category] ?? project.category}</Badge>
        </div>
        {project.preview ? (
          <div className="overflow-hidden px-5 pt-4">
            <img src={project.preview} alt={`${project.title} preview`} loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]" />
          </div>
        ) : (
          <div className="px-5 pt-4">
            <div className="flex aspect-[16/10] w-full items-center justify-center border border-[#e3e1dc] p-6 text-center transition-colors duration-300 group-hover:border-[#1a1a1a]">
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#6b6b6b]">{project.status}</span>
            </div>
          </div>
        )}
        <div className="flex flex-1 flex-col px-5 py-5">
          <h3 className="font-serif text-xl font-semibold leading-snug text-[#1a1a1a] underline-offset-4 group-hover:underline">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[#6b6b6b]">{project.description}</p>
          <span className="mt-3 inline-block w-fit font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[#1a1a1a] underline underline-offset-4">
            View Project <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </button>
    </article>
  );
}
