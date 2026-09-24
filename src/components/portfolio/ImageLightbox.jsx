import { useEffect, useRef } from "react";
import { X } from "lucide-react";

export default function ImageLightbox({ src, alt, onClose }) {
  const closeRef = useRef(null);
  useEffect(() => {
    closeRef.current?.focus();
    // Capture phase runs before the case-study modal's bubble-phase
    // Escape listener, so closing the viewer never closes the modal behind it.
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
      }
    };
    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  }, [onClose]);
  return (
    <div data-lightbox-open className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 sm:p-8" onClick={onClose} role="presentation">
      <button ref={closeRef} onClick={onClose} aria-label="Close image viewer" className="absolute right-4 top-4 rounded border border-white/20 bg-black/50 p-2 text-white hover:text-[#F7F6F2]">
        <X size={18} />
      </button>
      <img src={src} alt={alt} onClick={(e) => e.stopPropagation()} className="max-h-[90vh] max-w-full rounded-lg object-contain" />
    </div>
  );
}
