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
    <div data-lightbox-open className="fixed inset-0 z-[60] flex items-center justify-center bg-[#ffffff]/95 p-2 sm:p-6" onClick={onClose} role="presentation">
      <div className="flex max-h-[94vh] w-full max-w-6xl flex-col border border-[#e3e1dc] bg-[#ffffff] shadow-xl">
        <div className="flex items-center justify-between border-b border-[#e3e1dc] px-4 py-2.5">
          <p className="text-[11px] uppercase tracking-[0.15em] text-[#6b6b6b]">
            {total > 1 ? `${index + 1} / ${total}` : "Preview"}
          </p>
          <button ref={closeRef} onClick={onClose} aria-label="Close image viewer" className="p-1.5 text-[#6b6b6b] outline-none hover:text-[#1a1a1a]">
            <X size={18} />
          </button>
        </div>
        <div className="relative flex items-center justify-center bg-[#ffffff] p-4 sm:p-6">
          {total > 1 && (
            <>
              <button onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="Previous image" className="absolute left-2 top-1/2 z-10 -translate-y-1/2 border border-[#e3e1dc] bg-[#ffffff] p-2 text-[#1a1a1a] outline-none hover:border-[#1a1a1a] sm:left-4">
                <ChevronLeft size={22} />
              </button>
              <button onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="Next image" className="absolute right-2 top-1/2 z-10 -translate-y-1/2 border border-[#e3e1dc] bg-[#ffffff] p-2 text-[#1a1a1a] outline-none hover:border-[#1a1a1a] sm:right-4">
                <ChevronRight size={22} />
              </button>
            </>
          )}
          <img src={current.src} alt={current.alt} onClick={(e) => e.stopPropagation()} className="max-h-[80vh] max-w-full rounded-none border border-[#e3e1dc] object-contain" />
        </div>
        <p aria-live="polite" className="border-t border-[#e3e1dc] px-4 py-2.5 text-[11px] uppercase tracking-[0.1em] text-[#6b6b6b]">{current.alt}</p>
      </div>
    </div>
  );
}
