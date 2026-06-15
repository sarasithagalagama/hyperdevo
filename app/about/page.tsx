import type { Metadata } from "next";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About HyperDevo | Creative Digital Agency in Sri Lanka",
  description: "Learn about HyperDevo, a Sri Lankan creative digital agency helping businesses build websites, brands, content, and digital growth systems.",
};

export default function AboutPage() {
  const values = [
    ["Creative with purpose", "Every design should look good and support a business goal."],
    ["Simple communication", "We keep ideas, timelines, and deliverables clear."],
    ["Global quality", "We build with a standard that can compete beyond Sri Lanka."],
    ["Growth mindset", "We focus on solutions that can grow with your business."],
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">ABOUT HYPERDEVO</p>
          <h1>A Sri Lankan creative digital agency with a global mindset.</h1>
          <p className="lead">HyperDevo helps businesses build a stronger online presence through web development, graphic design, social media management, and digital marketing.</p>
        </div>
      </section>
      <section className="split-section">
        <div className="container split-grid">
          <h2>We create digital experiences that make brands look sharper, clearer, and more trustworthy.</h2>
          <div>
            <p>
              HyperDevo was built for businesses that need more than random designs or one-time posts. We combine creative direction, technical development, and practical marketing thinking to build digital solutions that support real business growth.
            </p>
            <p>
              From modern websites to social media content and digital campaigns, our work is focused on helping brands communicate clearly, look professional, and reach the right audience.
            </p>
            <Button href="/contact">Work With HyperDevo</Button>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container grid two">
          <article className="info-card">
            <p className="eyebrow">MISSION</p>
            <h3>Our Mission</h3>
            <p>To help growing businesses build professional digital experiences that attract customers, improve trust, and support long-term growth.</p>
          </article>
          <article className="info-card">
            <p className="eyebrow">VISION</p>
            <h3>Our Vision</h3>
            <p>To become a trusted Sri Lankan creative digital agency serving brands across local and international markets.</p>
          </article>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <p className="eyebrow">VALUES</p>
          <div className="grid four">
            {values.map(([title, description]) => (
              <article className="info-card" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Ready to sharpen your digital presence?" description="Bring the idea, the business problem, or the messy starting point. We will help shape the next move." primaryCta={{ label: "Work With HyperDevo", href: "/contact" }} />
    </>
  );
}
