import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  ["home", "Home"], ["about", "About"], ["services", "Services"],
  ["skills", "Skills"], ["portfolio", "Portfolio"], ["experience", "Experience"], ["contact", "Contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    LINKS.forEach(([id]) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);
  return (
    <header className="sticky top-0 z-40 border-b-2 border-[#0a0a0a] bg-[#ffffff]">
      <nav aria-label="Primary" className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-3">
        <a href="#home" className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-[#0a0a0a]">Iverene Causapin</a>
        <button className="border-2 border-[#0a0a0a] p-1.5 text-[#0a0a0a] md:hidden" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
        <ul className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-1 border-b-2 border-[#0a0a0a] bg-[#ffffff] px-6 py-4 md:static md:flex md:flex-row md:gap-1 md:border-0 md:bg-transparent md:p-0`}>
          {LINKS.map(([id, label], i) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)}
                aria-current={active === id ? "page" : undefined}
                className={`block px-2 py-1 font-mono text-xs font-medium uppercase tracking-[0.15em] ${active === id ? "bg-[#0a0a0a] text-[#ffffff]" : "text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#ffffff]"}`}>
                {String(i + 1).padStart(2, "0")} {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
