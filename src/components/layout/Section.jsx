import { motion } from "motion/react";

export default function Section({ id, eyebrow, title, lede, children }) {
  return (
    <section id={id} className="mx-auto w-full max-w-[1280px] scroll-mt-20 border-t border-[#e3e1dc] px-6 py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {eyebrow && <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#6b6b6b]">{eyebrow}</p>}
        {title && <h2 className="mt-3 max-w-2xl font-serif text-2xl font-semibold leading-snug text-[#1a1a1a] md:text-[2rem]">{title}</h2>}
        {lede && <p className="mt-4 max-w-2xl leading-relaxed text-[#6b6b6b]">{lede}</p>}
        <div className="mt-8">{children}</div>
      </motion.div>
    </section>
  );
}
