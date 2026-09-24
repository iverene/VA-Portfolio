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
    <header className="sticky top-0 z-40 border-b border-[#E5E5E0] bg-[#F7F6F2]/90 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
        <a href="#home" className="font-semibold text-[#171717]">Iverene Causapin</a>
        <button className="md:hidden" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <ul className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-1 border-b border-[#E5E5E0] bg-[#F7F6F2] px-6 py-4 md:static md:flex md:flex-row md:gap-6 md:border-0 md:bg-transparent md:p-0`}>
          {LINKS.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)}
                aria-current={active === id ? "true" : undefined}
                className={`block py-1 text-sm ${active === id ? "text-[#171717] underline decoration-[#A8B5A2] decoration-2 underline-offset-8" : "text-[#404040] hover:text-[#171717]"}`}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
