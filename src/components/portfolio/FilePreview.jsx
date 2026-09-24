import { useState } from "react";
import ExternalLink from "../ui/ExternalLink.jsx";
import ImageLightbox from "./ImageLightbox.jsx";

function Placeholder({ title }) {
  return (
    <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-2 border-2 border-[#0a0a0a] bg-[#ffffff] p-6 text-center">
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[#0a0a0a]">Document preview</p>
      <p className="text-sm text-[#0a0a0a]">{title} — open the file below to view.</p>
    </div>
  );
}

function ZoomableImage({ src, alt, index, onZoom, className }) {
  return (
    <button onClick={() => onZoom(index)} aria-label={`Expand image: ${alt}`} className="block w-full cursor-zoom-in">
      <img src={src} alt={alt} loading="lazy" className={className} />
    </button>
  );
}

function Gallery({ title, images, offset, onZoom, rounded }) {
  if (images.length === 0) return null;
  return (
    <div className="mt-4 grid grid-cols-2 gap-3">
      {images.map((src, i) => (
        <ZoomableImage key={src} src={src} alt={`${title} additional preview`} index={offset + i} onZoom={onZoom} className={`w-full ${rounded} border-2 border-[#0a0a0a]`} />
      ))}
    </div>
  );
}

export default function FilePreview({ project }) {
  const gallery = project.gallery ?? [];
  const images = [
    ...(project.preview ? [{ src: project.preview, alt: `${project.title} preview` }] : []),
    ...gallery.map((src) => ({ src, alt: `${project.title} additional preview` })),
  ];
  const previewIndex = project.preview ? 0 : -1;
  const [zoom, setZoom] = useState(null);
  const viewer = zoom !== null && (
    <ImageLightbox images={images} initialIndex={zoom} onClose={() => setZoom(null)} />
  );
  if (project.type === "Google Sheets") {
    return (
      <div className="border-2 border-[#0a0a0a] bg-[#ffffff] p-5">
        {project.preview ? (
          <ZoomableImage src={project.preview} alt={`${project.title} preview`} index={0} onZoom={setZoom} className="w-full rounded-none border-2 border-[#0a0a0a]" />
        ) : (
          <Placeholder title={project.title} />
        )}
        <Gallery title={project.title} images={gallery} offset={previewIndex + 1} onZoom={setZoom} rounded="rounded-none" />
        <div className="mt-4"><ExternalLink href={project.externalUrl}>Open Google Sheet</ExternalLink></div>
        {viewer}
      </div>
    );
  }
  if (project.type === "PDF") {
    return (
      <div className="border-2 border-[#0a0a0a] bg-[#ffffff] p-5">
        {project.preview ? (
          <ZoomableImage src={project.preview} alt={`${project.title} preview`} index={0} onZoom={setZoom} className="w-full rounded-none border-2 border-[#0a0a0a]" />
        ) : (
          <Placeholder title={project.title} />
        )}
        <a href={project.file} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-[#0a0a0a] px-2 py-1 font-mono text-xs font-medium uppercase tracking-[0.1em] text-[#ffffff]">View PDF</a>
        {viewer}
      </div>
    );
  }
  if (project.type === "XLSX" || project.type === "XLSM") {
    return (
      <div className="border-2 border-[#0a0a0a] bg-[#ffffff] p-5">
        {project.preview ? (
          <ZoomableImage src={project.preview} alt={`${project.title} preview`} index={0} onZoom={setZoom} className="w-full rounded-none border-2 border-[#0a0a0a]" />
        ) : (
          <Placeholder title={project.title} />
        )}
        <Gallery title={project.title} images={gallery} offset={previewIndex + 1} onZoom={setZoom} rounded="rounded-none" />
        <a href={project.file} download className="mt-4 inline-block bg-[#0a0a0a] px-2 py-1 font-mono text-xs font-medium uppercase tracking-[0.1em] text-[#ffffff]">Open File</a>
        {viewer}
      </div>
    );
  }
  return (
    <div>
      {project.preview ? (
        <ZoomableImage src={project.preview} alt={`${project.title} preview`} index={0} onZoom={setZoom} className="w-full rounded-none border-2 border-[#0a0a0a]" />
      ) : (
        <Placeholder title={project.title} />
      )}
      <Gallery title={project.title} images={gallery} offset={previewIndex + 1} onZoom={setZoom} rounded="rounded-none" />
      {viewer}
    </div>
  );
}
