import { motion } from "motion/react";

export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="mx-auto w-full max-w-[1280px] scroll-mt-20 border-t-2 border-[#0a0a0a] px-6 py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {eyebrow && <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#0a0a0a]">{eyebrow}</p>}
        {title && <h2 className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-[#0a0a0a] md:text-3xl">{title}</h2>}
        <div className="mt-8">{children}</div>
      </motion.div>
    </section>
  );
}
