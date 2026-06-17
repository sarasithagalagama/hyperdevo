import Button from "@/components/Button";
import ComparisonSection from "@/components/ComparisonSection";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import PackageCard from "@/components/PackageCard";
import ProcessStep from "@/components/ProcessStep";
import ResultsGrid from "@/components/ResultsGrid";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import SocialProofStrip from "@/components/SocialProofStrip";
import { packages, services } from "@/lib/data";

const previewCards = [
  ["Website Performance", "Fast pages, sharp layout, SEO-ready structure.", "98"],
  ["Campaign Analytics", "Meta, Google, content direction, and reporting.", "+ Growth"],
  ["Social Content Calendar", "Planned visuals and captions for consistent posting.", "30 Days"],
  ["Lead Generation", "Clear landing paths built around customer inquiries.", "Action"],
  ["Brand Identity Preview", "Logo, color, type, and campaign visual direction.", "System"],
];

const process = [
  { number: "01", title: "Discover", description: "We learn about your business, goals, audience, and current digital presence." },
  { number: "02", title: "Plan", description: "We define the website structure, brand direction, content flow, and project roadmap." },
  { number: "03", title: "Design", description: "We create clean, premium visuals that match your business and audience." },
  { number: "04", title: "Build", description: "We develop the website, content, or campaign assets with a mobile-first approach." },
  { number: "05", title: "Launch & Improve", description: "We test, launch, review, and improve based on feedback and performance." },
];

export default function Home() {
  return (
    <>
      <section className="hero premium-hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-center fade-up">
          <p className="eyebrow">Creative Digital Agency / Sri Lanka → Worldwide</p>
          <h1>
            Ready to <em>scale</em> your brand with websites, content & campaigns?
          </h1>
          <p className="lead">
            HyperDevo helps businesses build premium websites, bold brand visuals, social media content, and digital marketing systems designed for local and global growth.
          </p>
          <div className="hero-actions">
            <Button href="/contact">Book a Call</Button>
            <Button href="/services" variant="secondary">
              Explore Services
            </Button>
          </div>
          <div className="trust-row" aria-label="Social proof">
            <div className="avatar-row" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((item) => (
                <span key={item} />
              ))}
            </div>
            <span className="stars">★★★★★</span>
            <p>Trusted by growing businesses, startups, and service brands. Built for growing brands.</p>
          </div>
        </div>
      </section>

      <SocialProofStrip />

      <section className="section" id="services">
        <div className="container">
          <SectionHeading
            eyebrow="SERVICES"
            title="Everything your brand needs to grow online."
            description="Websites, content, brand visuals, SEO, paid ads, and digital systems shaped around trust and conversion."
            align="center"
          />
          <div className="grid three">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} cta="Learn More" />
            ))}
            <ServiceCard
              number="06"
              title="SEO & Paid Ads"
              description="Search visibility, campaign planning, Meta ads, Google ads, and reporting to support measurable growth."
              features={["SEO foundations", "Meta campaigns", "Google ads", "Landing page direction", "Campaign reporting"]}
              href="/services/digital-marketing"
              cta="Learn More"
            />
          </div>
        </div>
      </section>

      <section className="section dashboard-preview-section">
        <div className="container">
          <SectionHeading
            eyebrow="DIGITAL GROWTH SYSTEM"
            title="Your brand, website, content, and campaigns in one connected plan."
            description="A premium online presence needs more than a nice homepage. It needs structure, visual trust, content rhythm, and inquiry paths."
            align="center"
          />
          <div className="preview-grid">
            {previewCards.map(([title, description, metric]) => (
              <article className="preview-card" key={title}>
                <span className="tag">{title}</span>
                <strong>{metric}</strong>
                <p>{description}</p>
                <div className="mini-bars" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="results">
        <div className="container">
          <SectionHeading eyebrow="RESULTS" title="Digital work built around real business goals." align="center" />
          <ResultsGrid />
        </div>
      </section>

      <ComparisonSection />

      <section className="section process-section" id="process">
        <div className="container">
          <SectionHeading eyebrow="PROCESS" title="A simple process from idea to launch." align="center" />
          <div className="timeline">
            {process.map((step) => (
              <ProcessStep key={step.title} {...step} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="packages">
        <div className="container">
          <SectionHeading
            eyebrow="PACKAGES"
            title="Flexible plans for every stage of growth."
            description="No fake pricing. Every quote is shaped around scope, timeline, and the level of digital support your business needs."
            align="center"
          />
          <div className="grid three">
            {packages.map((plan) => (
              <PackageCard key={plan.name} {...plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faqs">
        <div className="container faq-grid">
          <SectionHeading eyebrow="FAQS" title="Questions before we start?" description="A few quick answers before we talk about your website, brand, content, or campaign plan." />
          <FAQAccordion />
        </div>
      </section>

      <CTASection
        title="Ready to build your digital presence?"
        description="Tell us about your business and we'll help you choose the right digital solution. Websites. Branding. Social media. Marketing. Growth."
        primaryCta={{ label: "Book a Call", href: "/contact" }}
        secondaryCta={{ label: "Send Inquiry", href: "/contact" }}
      />
    </>
  );
}
