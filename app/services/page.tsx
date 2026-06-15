import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services | Web Development, Design & Digital Marketing | HyperDevo",
  description: "Explore HyperDevo services including web development, web apps, graphic design, branding, social media management, SEO, and digital marketing.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">SERVICES</p>
          <h1>Everything your brand needs to grow online.</h1>
          <p className="lead">
            From websites and web apps to social media, design, and marketing campaigns, HyperDevo provides creative digital services for businesses that want to look professional and grow with confidence.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="SERVICE GRID" title="Pick one service or build a complete digital growth plan." />
          <div className="grid two">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="Need a complete digital partner?"
        description="We can combine website development, branding, social media, and digital marketing into one clear growth plan for your business."
        primaryCta={{ label: "Request Custom Plan", href: "/contact" }}
      />
    </>
  );
}
