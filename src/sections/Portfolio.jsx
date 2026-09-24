import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Section from "../components/layout/Section.jsx";
import PortfolioFilter from "../components/portfolio/PortfolioFilter.jsx";
import PortfolioGrid from "../components/portfolio/PortfolioGrid.jsx";
import { portfolioProjects } from "../data/portfolio.js";

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const navigate = useNavigate();
  const counts = useMemo(() => {
    const m = {};
    portfolioProjects.forEach((p) => { m[p.category] = (m[p.category] || 0) + 1; });
    return m;
  }, []);
  const list = active === "All" ? portfolioProjects : portfolioProjects.filter((p) => p.category === active);
  const blanksMd = (2 - (list.length % 2)) % 2;
  const blanksLg = (3 - (list.length % 3)) % 3;
  return (
    <Section id="portfolio" eyebrow="04 / Portfolio" title="Evidence of organized work.">
      <PortfolioFilter active={active} onChange={setActive} counts={counts} />
      <div className="mt-6">
        <PortfolioGrid projects={list} onOpen={(p) => navigate(`/project/${p.id}`)} blanksMd={blanksMd} blanksLg={blanksLg} />
      </div>
    </Section>
  );
}
