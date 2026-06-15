import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PortfolioFilter from "@/components/PortfolioFilter";
import { portfolioProjects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio | HyperDevo Creative Digital Work",
  description: "Explore selected website, branding, social media, and digital marketing projects from HyperDevo.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">PORTFOLIO</p>
          <h1>Selected work shaped for digital growth.</h1>
          <p className="lead">Explore sample projects that show how HyperDevo supports businesses through websites, branding, social media, and marketing campaigns.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <PortfolioFilter projects={portfolioProjects} />
        </div>
      </section>
      <CTASection title="Want your project to be next?" description="Start with a website, brand identity, social plan, or complete digital package." primaryCta={{ label: "Start a Project", href: "/contact" }} />
    </>
  );
}
