const styles = {
  primary: "bg-[#0a0a0a] text-[#ffffff] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_#0a0a0a]",
  secondary: "border-2 border-[#0a0a0a] text-[#0a0a0a] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_#0a0a0a]",
  link: "text-[#0a0a0a] underline underline-offset-4 hover:bg-[#0a0a0a] hover:text-[#ffffff]",
};
export default function Button({ href, variant = "primary", children }) {
  return <a href={href} className={`inline-flex items-center justify-center rounded-none px-5 py-2.5 font-mono text-sm font-medium uppercase tracking-[0.1em] transition-all ${styles[variant]}`}>{children}</a>;
}
