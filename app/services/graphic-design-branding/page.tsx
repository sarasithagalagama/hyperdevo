import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Graphic Design & Branding | HyperDevo",
  description: "Logo design, brand identity, social media creatives, posters, banners, business profiles, and ad creatives.",
};

export default function GraphicDesignBrandingPage() {
  const services = [
    ["Logo Design", "Unique logo concepts that match your business personality and market position."],
    ["Brand Identity", "Color palettes, typography, visual style, and brand direction for consistent communication."],
    ["Social Media Creatives", "Professional post, story, and campaign designs for digital platforms."],
    ["Marketing Materials", "Flyers, posters, banners, brochures, business cards, and company profiles."],
    ["Ad Creatives", "Campaign visuals designed to capture attention and support marketing goals."],
    ["Presentation Design", "Clean and professional slide decks for proposals, reports, and business communication."],
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">GRAPHIC DESIGN & BRANDING</p>
            <h1>Designs that make your brand look bold, clear, and professional.</h1>
            <p className="lead">HyperDevo creates visual identities and marketing designs that help businesses stand out across social media, websites, print, and campaigns.</p>
          </div>
          <div className="service-mock">
            <div style={{ background: "var(--accent)", color: "#050505", padding: "24px", fontWeight: 950, fontSize: "2.4rem", lineHeight: 1 }}>BOLD BRAND SYSTEM</div>
            <div className="badge-row"><span>Logo</span><span>Posters</span><span>Social Kit</span></div>
            <p>Typographic layouts, campaign visuals, and identity systems with sharp hierarchy.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="DESIGN SERVICES" title="Visual assets that make your brand easier to remember." />
          <div className="grid three">{services.map(([title, description]) => <article className="info-card" key={title}><h3>{title}</h3><p>{description}</p></article>)}</div>
        </div>
      </section>
      <section className="split-section">
        <div className="container split-grid">
          <h2>Good design makes your business easier to remember.</h2>
          <p>A strong brand identity gives your business a consistent look and voice. We help you create visuals that feel professional, modern, and suitable for your audience.</p>
        </div>
      </section>
      <CTASection title="Need a stronger visual identity?" description="Build a brand system that feels clear, modern, and ready for real customer attention." primaryCta={{ label: "Build My Brand", href: "/contact" }} />
    </>
  );
}
