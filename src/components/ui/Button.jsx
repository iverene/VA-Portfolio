const styles = {
  primary: "bg-[#171717] text-white hover:bg-[#404040]",
  secondary: "border border-[#171717] text-[#171717] hover:bg-[#171717] hover:text-white",
  link: "text-[#171717] underline underline-offset-4 hover:text-[#404040]",
};
export default function Button({ href, variant = "primary", children }) {
  return <a href={href} className={`inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-colors ${styles[variant]}`}>{children}</a>;
}
