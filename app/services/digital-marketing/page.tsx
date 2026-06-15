import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Digital Marketing Services | HyperDevo",
  description: "Campaign planning, SEO, paid ads, lead generation, content strategy, and analytics for business growth.",
};

export default function DigitalMarketingPage() {
  const items = [
    ["Meta Ads", "Reach customers on Facebook and Instagram with campaign creatives, targeting, and performance tracking."],
    ["Google Ads", "Show your business to people actively searching for your products or services."],
    ["SEO Basics", "Improve your website structure, page content, and search visibility foundations."],
    ["Lead Generation", "Build campaigns focused on inquiries, bookings, messages, and customer actions."],
    ["Content Strategy", "Plan content that supports your brand, audience, and marketing goals."],
    ["Monthly Reporting", "Track performance so you can understand what is working and what needs improvement."],
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">DIGITAL MARKETING</p>
            <h1>Marketing that helps your business get seen, clicked, and contacted.</h1>
            <p className="lead">HyperDevo creates practical digital marketing strategies for businesses that want more visibility, better engagement, and stronger customer inquiries.</p>
          </div>
          <div className="service-mock">
            <span className="tag">Conversion Dashboard</span>
            <strong style={{ fontSize: "4rem", color: "var(--text)" }}>+92%</strong>
            <div className="chart-line" />
            <p>Campaign direction, lead paths, reporting, and creative testing.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="MARKETING SERVICES" title="Focused channels for measurable growth." />
          <div className="grid three">{items.map(([title, description]) => <article className="info-card" key={title}><h3>{title}</h3><p>{description}</p></article>)}</div>
        </div>
      </section>
      <section className="split-section">
        <div className="container split-grid">
          <h2>We focus on clear goals, not random posting.</h2>
          <p>Every campaign should have a purpose. We help define your audience, message, offer, creative direction, and performance indicators before launching.</p>
        </div>
      </section>
      <CTASection title="Want more people to discover your business?" description="Plan a campaign with a clearer offer, stronger creative, and a better path to inquiry." primaryCta={{ label: "Start a Marketing Campaign", href: "/contact" }} />
    </>
  );
}
