import type { ProcessStep as ProcessStepType } from "@/types";

export default function ProcessStep({ number, title, description }: ProcessStepType) {
  return (
    <article className="process-step">
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
