import { useState } from "react";
import Section from "../components/layout/Section.jsx";
import Button from "../components/ui/Button.jsx";
import { Copy, Check } from "lucide-react";

export default function Contact({ email, links = [] }) {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <Section id="contact" eyebrow="Contact" title="Have administrative work that needs to be organized?">
      <p className="max-w-2xl text-[#6b6b6b]">Let&apos;s connect and discuss how I can help keep your documents, data, communication, and daily workflows organized.</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href={`mailto:${email}`}>Email Me</Button>
        {links.map(([label, href]) => <Button key={label} href={href} variant="secondary">{label}</Button>)}
      </div>
      <button onClick={copyEmail} aria-label={copied ? "Email copied" : "Copy email address"} className="mt-4 inline-flex items-center gap-2 text-sm text-[#1a1a1a] underline underline-offset-4">
        {email}
        {copied ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
        {copied && <span className="no-underline font-mono text-xs uppercase tracking-[0.1em] text-[#6b6b6b]">Copied</span>}
      </button>
    </Section>
  );
}
