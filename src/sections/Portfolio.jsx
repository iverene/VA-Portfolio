import { useMemo, useState } from "react";
import Section from "../components/layout/Section.jsx";
import PortfolioFilter from "../components/portfolio/PortfolioFilter.jsx";
import PortfolioGrid from "../components/portfolio/PortfolioGrid.jsx";
import PortfolioModal from "../components/portfolio/PortfolioModal.jsx";
import { portfolioProjects } from "../data/portfolio.js";

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState(null);
  const counts = useMemo(() => {
    const m = {};
    portfolioProjects.forEach((p) => { m[p.category] = (m[p.category] || 0) + 1; });
    return m;
  }, []);
  const list = active === "All" ? portfolioProjects : portfolioProjects.filter((p) => p.category === active);
  return (
    <Section id="portfolio" eyebrow="04 / Portfolio" title="Evidence of organized work.">
      <PortfolioFilter active={active} onChange={setActive} counts={counts} />
      <div className="mt-6">
        <PortfolioGrid projects={list} onOpen={setOpen} />
      </div>
      {open && <PortfolioModal project={open} onClose={() => setOpen(null)} />}
    </Section>
  );
}
