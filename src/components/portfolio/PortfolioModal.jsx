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
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-0 sm:items-center sm:p-6" onClick={onClose} role="presentation">
      <div role="dialog" aria-modal="true" aria-label={project.title} onClick={(e) => e.stopPropagation()} data-lenis-prevent
        className="no-scrollbar max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-t-xl bg-[#F7F6F2] p-6 sm:rounded-xl md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <Badge>{project.category}</Badge>
            <h3 className="text-2xl font-semibold text-[#171717]">{project.title}</h3>
            <p className="text-xs text-[#404040]">{project.tools.join(" · ")} · {project.type} · {project.status}</p>
          </div>
          <button ref={closeRef} onClick={onClose} aria-label="Close project viewer" className="rounded border border-[#E5E5E0] bg-[#FFFFFF] p-2 text-[#404040] hover:text-[#171717]">
            <X size={18} />
          </button>
        </div>
        <div className="mt-6 space-y-6">
          <section><h4 className="text-xs font-medium uppercase tracking-[0.2em] text-[#404040]">Overview</h4><p className="mt-2 text-sm text-[#171717]">{project.description}</p></section>
          <section><h4 className="text-xs font-medium uppercase tracking-[0.2em] text-[#404040]">Objective</h4><p className="mt-2 text-sm text-[#171717]">{project.objective}</p></section>
          <section><h4 className="text-xs font-medium uppercase tracking-[0.2em] text-[#404040]">Process</h4><p className="mt-2 text-sm text-[#171717]">{project.process}</p></section>
          <section><h4 className="text-xs font-medium uppercase tracking-[0.2em] text-[#404040]">Deliverables</h4><div className="mt-2"><FilePreview project={project} /></div></section>
          <section><h4 className="text-xs font-medium uppercase tracking-[0.2em] text-[#404040]">Skills Demonstrated</h4><div className="mt-2"><Metadata items={project.skills.map((s) => ["Skill", s])} /></div></section>
          <section><h4 className="text-xs font-medium uppercase tracking-[0.2em] text-[#404040]">Outcome</h4><p className="mt-2 text-sm text-[#171717]">{project.outcome}</p></section>
        </div>
      </div>
    </div>
  );
}
