import { ArrowUpRight } from "lucide-react";
export default function ExternalLink({ href, children }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-[#0a0a0a] underline decoration-2 underline-offset-4">{children} <ArrowUpRight size={14} aria-hidden="true" /><span className="sr-only">(opens in a new tab)</span></a>;
}
