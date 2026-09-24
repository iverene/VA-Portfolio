import Section from "../components/layout/Section.jsx";
import { Mail, FolderOpen, FileText, Table, CalendarDays, FileSpreadsheet, FileType, ListChecks, Palette } from "lucide-react";
import { skillGroups } from "../data/skills.js";

const TOOL_ICONS = {
  "Gmail": Mail,
  "Google Drive": FolderOpen,
  "Google Docs": FileText,
  "Google Sheets": Table,
  "Google Calendar": CalendarDays,
  "Microsoft Excel": FileSpreadsheet,
  "Microsoft Word": FileType,
  "ClickUp": ListChecks,
  "Canva": Palette,
};
export default function Skills() {
  return (
    <Section id="skills" eyebrow="03 / Skills" title="Grouped capabilities, not software collecting.">
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((g) => (
          <div key={g.title} className="border-2 border-[#0a0a0a] bg-[#ffffff] p-6">
            <h3 className="inline-block bg-[#0a0a0a] px-2 py-0.5 font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#ffffff]">{g.title}</h3>
            {g.title === "Tools" ? (
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {g.items.map((i) => {
                  const Icon = TOOL_ICONS[i] ?? FileText;
                  return (
                    <li key={i} className="flex items-center gap-3 border-2 border-[#0a0a0a] px-3 py-2 text-sm font-medium text-[#0a0a0a]">
                      <Icon size={16} aria-hidden="true" />{i}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <ul className="mt-3 space-y-1.5 text-sm text-[#0a0a0a]">{g.items.map((i) => <li key={i} className="border-b border-[#0a0a0a] pb-1.5 last:border-0 last:pb-0">{i}</li>)}</ul>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
