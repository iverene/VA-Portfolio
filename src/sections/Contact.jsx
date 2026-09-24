import Section from "../components/layout/Section.jsx";
import Button from "../components/ui/Button.jsx";

export default function Contact({ email, links = [] }) {
  return (
    <Section id="contact" eyebrow="Contact" title="Have administrative work that needs to be organized?">
      <p className="max-w-2xl text-[#404040]">Let&apos;s connect and discuss how I can help keep your documents, data, communication, and daily workflows organized.</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href={`mailto:${email}`}>Email Me</Button>
        {links.map(([label, href]) => <Button key={label} href={href} variant="secondary">{label}</Button>)}
      </div>
      <p className="mt-4 text-sm text-[#404040]">{email}</p>
    </Section>
  );
}
