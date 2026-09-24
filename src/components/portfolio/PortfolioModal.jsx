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
        className="no-scrollbar max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-none border border-[#e3e1dc] bg-[#ffffff] p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <Badge>{project.category}</Badge>
            <h3 className="font-serif text-xl font-semibold leading-snug text-[#1a1a1a] md:text-2xl">{project.title}</h3>
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#6b6b6b]">{project.tools.join(" · ")} · {project.type} · {project.status}</p>
          </div>
          <button ref={closeRef} onClick={onClose} aria-label="Close project viewer" className="border border-[#e3e1dc] bg-[#ffffff] p-2 text-[#6b6b6b] hover:border-[#1a1a1a] hover:text-[#1a1a1a]">
            <X size={18} />
          </button>
        </div>
        <div className="mt-6 space-y-6">
          <section><h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[#6b6b6b]">Overview</h4><p className="mt-2 text-sm leading-relaxed text-[#1a1a1a]">{project.description}</p></section>
          <section><h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[#6b6b6b]">Objective</h4><p className="mt-2 text-sm leading-relaxed text-[#1a1a1a]">{project.objective}</p></section>
          <section><h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[#6b6b6b]">Process</h4><p className="mt-2 text-sm leading-relaxed text-[#1a1a1a]">{project.process}</p></section>
          <section><h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[#6b6b6b]">Deliverables</h4><div className="mt-2"><FilePreview project={project} /></div></section>
          <section><h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[#6b6b6b]">Skills Demonstrated</h4><div className="mt-2"><Metadata items={project.skills.map((s) => ["Skill", s])} /></div></section>
          <section><h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[#6b6b6b]">Outcome</h4><p className="mt-2 text-sm leading-relaxed text-[#1a1a1a]">{project.outcome}</p></section>
        </div>
      </div>
    </div>
  );
}
