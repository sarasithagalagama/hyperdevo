import Button from "@/components/Button";

type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
  features: string[];
  href: string;
  cta?: string;
};

export default function ServiceCard({ number, title, description, features, href, cta = "Explore Service" }: ServiceCardProps) {
  return (
    <article className="service-card">
      <div className="card-topline">
        <span>{number}</span>
        <span className="accent-line" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <Button href={href} variant="secondary">
        {cta}
      </Button>
    </article>
  );
}
