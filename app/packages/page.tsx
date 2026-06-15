import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PackageCard from "@/components/PackageCard";
import SectionHeading from "@/components/SectionHeading";
import { packages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Packages | HyperDevo Digital Agency Packages",
  description: "Flexible digital packages for websites, branding, social media, and marketing support.",
};

export default function PackagesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">PACKAGES</p>
          <h1>Flexible digital packages for growing brands.</h1>
          <p className="lead">Choose a starting direction based on your business needs. Every project can be customized depending on scope, timeline, and goals.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="CUSTOM QUOTE PACKAGES" title="Start lean, grow steady, or build the full system." />
          <div className="grid three">
            {packages.map((plan) => (
              <PackageCard key={plan.name} {...plan} />
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="Need something different?"
        description="We can create a custom package based on your business stage, budget, timeline, and digital goals."
        primaryCta={{ label: "Get Custom Quote", href: "/contact" }}
      />
    </>
  );
}
