import Section from "../components/layout/Section.jsx";
import Button from "../components/ui/Button.jsx";
import { motion } from "motion/react";
import { Download } from "lucide-react";

const CAPS = ["Records & Documentation", "Data & Spreadsheets", "Inbox Management", "Calendar Management", "Business Communications"];

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Home() {
  return (
    <Section id="home">
      <motion.div
        className="grid items-start gap-14 md:grid-cols-[1.5fr_1fr] md:gap-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ staggerChildren: 0.12 }}
      >
        <div>
          <motion.p variants={rise} className="text-xs font-medium uppercase tracking-[0.2em] text-[#6b6b6b]">Administrative Virtual Assistant</motion.p>
          <motion.h1 variants={rise} className="mt-6 font-serif text-4xl font-semibold leading-tight text-[#1a1a1a] md:text-[3.25rem]">I keep information, communication, and daily operations organized.</motion.h1>
          <motion.p variants={rise} className="mt-6 text-xs uppercase tracking-[0.15em] text-[#6b6b6b]">{CAPS.join(" · ")}</motion.p>
          <motion.div variants={rise} className="mt-8 flex flex-wrap gap-3">
            <Button href="#portfolio" variant="primary">View Portfolio</Button>
            <Button href="#contact" variant="secondary">Get in Touch</Button>
            <Button href="/documents/cv.pdf" variant="secondary"><Download size={15} aria-hidden="true" className="mr-2" />Download CV</Button>
          </motion.div>
        </div>
        <motion.figure variants={rise} className="border border-[#e3e1dc] bg-[#ffffff] p-4">
          <img src="/photo.jpg" alt="Portrait of Iverene Grace Causapin" className="aspect-[4/5] w-full object-cover" />
          <figcaption className="pt-4 text-[11px] uppercase tracking-[0.15em] text-[#6b6b6b]">Iverene Grace Causapin</figcaption>
        </motion.figure>
      </motion.div>
    </Section>
  );
}
