export default function Footer({ email }) {
  return (
    <footer className="border-t border-[#e3e1dc] bg-[#ffffff]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-6 py-10 text-sm text-[#6b6b6b] md:flex-row md:items-center md:justify-between">
        <p className="font-serif">© {new Date().getFullYear()} Iverene Grace Causapin — Administrative Virtual Assistant</p>
        <a href={`mailto:${email}`} className="w-fit text-xs uppercase tracking-[0.15em] text-[#1a1a1a] underline underline-offset-4">{email}</a>
      </div>
    </footer>
  );
}
