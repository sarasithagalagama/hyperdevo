import Button from "@/components/Button";

type CTASectionProps = {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export default function CTASection({ title, description, primaryCta, secondaryCta }: CTASectionProps) {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow">NEXT MOVE</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="cta-actions">
          <Button href={primaryCta.href}>{primaryCta.label}</Button>
          {secondaryCta && (
            <Button href={secondaryCta.href} variant="secondary">
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
