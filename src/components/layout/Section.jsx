export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="mx-auto w-full max-w-[1280px] px-6 py-16 md:py-24 scroll-mt-20">
      {eyebrow && <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#404040]">{eyebrow}</p>}
      {title && <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#171717]">{title}</h2>}
      <div className="mt-8">{children}</div>
    </section>
  );
}
