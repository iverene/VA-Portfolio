export default function Footer({ email }) {
  return (
    <footer className="border-t-2 border-[#0a0a0a] bg-[#0a0a0a] text-[#ffffff]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-6 py-10 font-mono text-xs uppercase tracking-[0.15em] md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Iverene Grace Causapin — Administrative Virtual Assistant</p>
        <a href={`mailto:${email}`} className="underline underline-offset-4 hover:bg-[#ffffff] hover:text-[#0a0a0a]">{email}</a>
      </div>
    </footer>
  );
}
