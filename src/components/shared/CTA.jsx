import Button from "../ui/Button.jsx";
export default function CTA({ primary = { href: "#portfolio", label: "View Portfolio" }, secondary = { href: "#contact", label: "Get in Touch" } }) {
  return <div className="flex flex-wrap gap-3"><Button href={primary.href} variant="primary">{primary.label}</Button><Button href={secondary.href} variant="secondary">{secondary.label}</Button></div>;
}
