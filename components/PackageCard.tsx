import type { PackagePlan } from "@/types";
import Button from "@/components/Button";
import { cn } from "@/lib/utils";

export default function PackageCard({ name, bestFor, features, cta, highlighted }: PackagePlan) {
  return (
    <article className={cn("package-card", highlighted && "highlighted")}>
      {highlighted && <span className="package-badge">Popular</span>}
      <h3>{name}</h3>
      <p>{bestFor}</p>
      <ul>
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <Button href="/contact">{cta}</Button>
    </article>
  );
}
