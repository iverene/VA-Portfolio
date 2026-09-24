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
    <Section id="skills" eyebrow="Skills" title="Grouped capabilities, not software collecting.">
      <div className="grid gap-px border border-[#e3e1dc] bg-[#e3e1dc] md:grid-cols-2">
        {skillGroups.map((g) => (
          <div key={g.title} className="bg-[#ffffff] p-6 md:p-8">
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#6b6b6b]">{g.title}</h3>
            {g.title === "Tools" ? (
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {g.items.map((i) => {
                  const Icon = TOOL_ICONS[i] ?? FileText;
                  return (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-[#1a1a1a]">
                      <Icon size={16} aria-hidden="true" className="shrink-0 text-[#6b6b6b]" />{i}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <ul className="mt-3 space-y-1.5 text-sm text-[#1a1a1a]">{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
