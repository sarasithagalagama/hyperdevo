"use client";

import { useMemo, useState } from "react";
import PortfolioCard from "@/components/PortfolioCard";
import type { PortfolioProject } from "@/types";

const filters = ["All", "Websites", "Branding", "Social Media", "Digital Marketing", "Web Apps"];

export default function PortfolioFilter({ projects }: { projects: PortfolioProject[] }) {
  const [active, setActive] = useState("All");
  const visibleProjects = useMemo(() => {
    if (active === "All") return projects;
    if (active === "Websites") return projects.filter((project) => project.category === "Website" || project.category === "Web Development");
    return projects.filter((project) => project.category === active);
  }, [active, projects]);

  return (
    <>
      <div className="filter-tabs" aria-label="Portfolio filters">
        {filters.map((filter) => (
          <button key={filter} type="button" className={active === filter ? "active" : ""} onClick={() => setActive(filter)} aria-pressed={active === filter}>
            {filter}
          </button>
        ))}
      </div>
      <div className="grid three">
        {visibleProjects.map((project) => (
          <PortfolioCard key={project.title} {...project} />
        ))}
      </div>
    </>
  );
}
