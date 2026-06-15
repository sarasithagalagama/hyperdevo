import type { Testimonial } from "@/types";

export default function TestimonialCard({ quote, name, role }: Testimonial) {
  return (
    <figure className="testimonial-card">
      <blockquote>“{quote}”</blockquote>
      <figcaption>
        <strong>{name}</strong>
        <span>{role}</span>
      </figcaption>
    </figure>
  );
}
