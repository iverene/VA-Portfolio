import ExternalLink from "../ui/ExternalLink.jsx";

function Placeholder({ title }) {
  return (
    <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-2 rounded-lg border border-[#E5E5E0] bg-[#F7F6F2] p-6 text-center">
      <p className="text-[11px] font-medium uppercase tracking-wider text-[#404040]">Document preview</p>
      <p className="text-sm text-[#404040]">{title} — open the file below to view.</p>
    </div>
  );
}

export default function FilePreview({ project }) {
  const gallery = project.gallery ?? [];
  if (project.type === "Google Sheets") {
    return (
      <div className="rounded-lg border border-[#E5E5E0] bg-[#FFFFFF] p-5">
        {project.preview ? (
          <img src={project.preview} alt={`${project.title} preview`} loading="lazy" className="w-full rounded border border-[#E5E5E0]" />
        ) : (
          <Placeholder title={project.title} />
        )}
        {gallery.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-3">
            {gallery.map((src) => (
              <img key={src} src={src} alt={`${project.title} additional preview`} loading="lazy" className="w-full rounded border border-[#E5E5E0]" />
            ))}
          </div>
        )}
        <div className="mt-4"><ExternalLink href={project.externalUrl}>Open Google Sheet</ExternalLink></div>
      </div>
    );
  }
  if (project.type === "PDF") {
    return (
      <div className="rounded-lg border border-[#E5E5E0] bg-[#FFFFFF] p-5">
        {project.preview ? (
          <img src={project.preview} alt={`${project.title} preview`} loading="lazy" className="w-full rounded border border-[#E5E5E0]" />
        ) : (
          <Placeholder title={project.title} />
        )}
        <a href={project.file} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-medium text-[#171717] underline underline-offset-4">View PDF</a>
      </div>
    );
  }
  if (project.type === "XLSX" || project.type === "XLSM") {
    return (
      <div className="rounded-lg border border-[#E5E5E0] bg-[#FFFFFF] p-5">
        {project.preview ? (
          <img src={project.preview} alt={`${project.title} preview`} loading="lazy" className="w-full rounded border border-[#E5E5E0]" />
        ) : (
          <Placeholder title={project.title} />
        )}
        {gallery.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-3">
            {gallery.map((src) => (
              <img key={src} src={src} alt={`${project.title} additional preview`} loading="lazy" className="w-full rounded border border-[#E5E5E0]" />
            ))}
          </div>
        )}
        <a href={project.file} download className="mt-4 inline-block text-sm font-medium text-[#171717] underline underline-offset-4">Open File</a>
      </div>
    );
  }
  return (
    <div>
      {project.preview ? (
        <img src={project.preview} alt={`${project.title} preview`} loading="lazy" className="w-full rounded-lg border border-[#E5E5E0]" />
      ) : (
        <Placeholder title={project.title} />
      )}
      {gallery.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-3">
          {gallery.map((src) => (
            <img key={src} src={src} alt={`${project.title} additional preview`} loading="lazy" className="w-full rounded-lg border border-[#E5E5E0]" />
          ))}
        </div>
      )}
    </div>
  );
}
