import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  ["home", "Home"], ["about", "About"], ["services", "Services"],
  ["skills", "Skills"], ["portfolio", "Portfolio"], ["experience", "Experience"], ["certifications", "Certifications"], ["contact", "Contact"],
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
    <header className="sticky top-0 z-40 border-b border-[#e3e1dc] bg-[#ffffff]/95 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
        <a href="#home" className="font-serif text-lg font-semibold text-[#1a1a1a]">Iverene Grace Causapin</a>
        <button className="p-1.5 text-[#1a1a1a] md:hidden" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <ul className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-1 border-b border-[#e3e1dc] bg-[#ffffff] px-6 py-4 md:static md:flex md:flex-row md:gap-6 md:border-0 md:bg-transparent md:p-0`}>
          {LINKS.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)}
                aria-current={active === id ? "page" : undefined}
                className={`block py-1 text-sm ${active === id ? "text-[#1a1a1a] underline decoration-2 underline-offset-8" : "text-[#6b6b6b] hover:text-[#1a1a1a]"}`}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
