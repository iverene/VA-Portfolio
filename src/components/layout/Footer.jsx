export default function Footer({ email }) {
  return (
    <footer className="border-t border-[#E5E5E0] bg-[#FFFFFF]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-6 py-8 text-sm text-[#404040] md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Iverene Causapin — Administrative Virtual Assistant</p>
        <a href={`mailto:${email}`} className="underline underline-offset-4 hover:text-[#171717]">{email}</a>
      </div>
    </footer>
  );
}
