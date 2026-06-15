import type { PortfolioProject } from "@/types";
import Button from "@/components/Button";

export default function PortfolioCard({ title, category, challenge, solution, services, href }: PortfolioProject) {
  return (
    <article className="portfolio-card">
      <div className="project-visual" aria-hidden="true">
        <span>{category}</span>
        <div />
        <div />
      </div>
      <span className="tag">{category}</span>
      <h3>{title}</h3>
      <p>
        <strong>Challenge:</strong> {challenge}
      </p>
      <p>
        <strong>What we did:</strong> {solution}
      </p>
      <div className="tag-row">
        {services.map((service) => (
          <span key={service}>{service}</span>
        ))}
      </div>
      <Button href={href} variant="secondary">
        View Case Study
      </Button>
    </article>
  );
}
