const styles = {
  primary: "bg-[#1a1a1a] text-[#ffffff] hover:bg-[#000000]",
  secondary: "border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#ffffff]",
  link: "text-[#1a1a1a] underline underline-offset-4 hover:text-[#6b6b6b]",
};
export default function Button({ href, variant = "primary", children }) {
  return <a href={href} className={`inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium transition-colors ${styles[variant]}`}>{children}</a>;
}
