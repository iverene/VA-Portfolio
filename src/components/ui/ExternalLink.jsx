import { ArrowUpRight } from "lucide-react";
export default function ExternalLink({ href, children }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.1em] text-[#1a1a1a] underline underline-offset-4">{children} <ArrowUpRight size={14} aria-hidden="true" /><span className="sr-only">(opens in a new tab)</span></a>;
}
