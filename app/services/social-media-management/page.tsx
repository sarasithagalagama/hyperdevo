import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import ProcessStep from "@/components/ProcessStep";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Social Media Management | HyperDevo",
  description: "Social media planning, content design, captions, page management, and creative direction for growing businesses.",
};

export default function SocialMediaPage() {
  const services = ["Monthly content planning", "Post and story design", "Caption writing", "Brand tone development", "Page management", "Campaign creatives", "Reels and short-form content ideas", "Monthly performance review"];
  const flow = ["Plan content themes", "Design posts and stories", "Write captions", "Schedule or publish content", "Review performance"];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">SOCIAL MEDIA MANAGEMENT</p>
          <h1>Make your brand active, consistent, and easy to trust.</h1>
          <p className="lead">HyperDevo helps businesses manage their social media presence with planned content, branded designs, captions, and creative direction.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="WHAT WE DO" title="Social media support for growing brands." />
          <div className="grid two">{services.map((item) => <article className="info-card" key={item}><h3>{item}</h3></article>)}</div>
        </div>
      </section>
      <section className="split-section">
        <div className="container split-grid">
          <h2>Consistency builds trust.</h2>
          <p>A business page should not look random or inactive. We help your brand show up with a clear visual style, regular content, and messaging that makes customers understand what you offer.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="MONTHLY FLOW" title="A rhythm your audience can recognize." />
          <div className="grid three">{flow.map((item, index) => <ProcessStep key={item} number={`0${index + 1}`} title={item} description="A clear monthly action that keeps content moving with direction." />)}</div>
        </div>
      </section>
      <CTASection title="Ready to make your social media look professional?" description="Build a consistent presence with planned posts, better visuals, and clearer messaging." primaryCta={{ label: "Plan My Social Media", href: "/contact" }} />
    </>
  );
}
