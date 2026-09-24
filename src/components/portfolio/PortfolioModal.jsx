import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import Badge from "../ui/Badge.jsx";
import Metadata from "../shared/Metadata.jsx";
import FilePreview from "./FilePreview.jsx";

export default function PortfolioModal({ project, onClose }) {
  const closeRef = useRef(null);
  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-0 sm:items-center sm:p-6" onClick={onClose} role="presentation">
      <div role="dialog" aria-modal="true" aria-label={project.title} onClick={(e) => e.stopPropagation()} data-lenis-prevent
        className="no-scrollbar max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-none border-2 border-[#0a0a0a] bg-[#ffffff] p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <Badge>{project.category}</Badge>
            <h3 className="text-xl font-bold tracking-tight text-[#0a0a0a] md:text-2xl">{project.title}</h3>
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-[#0a0a0a]">{project.tools.join(" / ")} / {project.type} / {project.status}</p>
          </div>
          <button ref={closeRef} onClick={onClose} aria-label="Close project viewer" className="border-2 border-[#0a0a0a] bg-[#ffffff] p-2 text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#ffffff]">
            <X size={18} />
          </button>
        </div>
        <div className="mt-6 space-y-6">
          <section><h4 className="border-b-2 border-[#0a0a0a] pb-1 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#0a0a0a]">Overview</h4><p className="mt-2 text-sm text-[#0a0a0a]">{project.description}</p></section>
          <section><h4 className="border-b-2 border-[#0a0a0a] pb-1 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#0a0a0a]">Objective</h4><p className="mt-2 text-sm text-[#0a0a0a]">{project.objective}</p></section>
          <section><h4 className="border-b-2 border-[#0a0a0a] pb-1 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#0a0a0a]">Process</h4><p className="mt-2 text-sm text-[#0a0a0a]">{project.process}</p></section>
          <section><h4 className="border-b-2 border-[#0a0a0a] pb-1 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#0a0a0a]">Deliverables</h4><div className="mt-2"><FilePreview project={project} /></div></section>
          <section><h4 className="border-b-2 border-[#0a0a0a] pb-1 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#0a0a0a]">Skills Demonstrated</h4><div className="mt-2"><Metadata items={project.skills.map((s) => ["Skill", s])} /></div></section>
          <section><h4 className="border-b-2 border-[#0a0a0a] pb-1 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#0a0a0a]">Outcome</h4><p className="mt-2 text-sm text-[#0a0a0a]">{project.outcome}</p></section>
        </div>
      </div>
    </div>
  );
}
