import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageLightbox({ images, initialIndex = 0, onClose }) {
  const closeRef = useRef(null);
  const total = images.length;
  const [index, setIndex] = useState(initialIndex);
  const go = (dir) => setIndex((i) => (i + dir + total) % total);
  useEffect(() => {
    closeRef.current?.focus();
    // Capture phase runs before the case-study modal's bubble-phase
    // listeners, so viewer keys never leak to the modal behind it.
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
      } else if (e.key === "ArrowLeft" && total > 1) {
        e.stopPropagation();
        go(-1);
      } else if (e.key === "ArrowRight" && total > 1) {
        e.stopPropagation();
        go(1);
      }
    };
    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  }, [onClose, total]);
  const current = images[index];
  return (
    <div data-lightbox-open className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 sm:p-8" onClick={onClose} role="presentation">
      <button ref={closeRef} onClick={onClose} aria-label="Close image viewer" className="absolute right-4 top-4 z-10 rounded border border-white/20 bg-black/50 p-2 text-white hover:text-[#F7F6F2]">
        <X size={18} />
      </button>
      {total > 1 && (
        <>
          <button onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="Previous image" className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 p-2 text-white hover:text-[#F7F6F2] sm:left-4">
            <ChevronLeft size={22} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="Next image" className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 p-2 text-white hover:text-[#F7F6F2] sm:right-4">
            <ChevronRight size={22} />
          </button>
          <p aria-live="polite" className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded bg-black/50 px-3 py-1 text-xs font-medium text-white">
            {index + 1} / {total}
          </p>
        </>
      )}
      <img src={current.src} alt={current.alt} onClick={(e) => e.stopPropagation()} className="max-h-[90vh] max-w-full rounded-lg object-contain" />
    </div>
  );
}
