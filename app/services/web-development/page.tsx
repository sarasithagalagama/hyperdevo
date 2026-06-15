import type { Metadata } from "next";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import ProcessStep from "@/components/ProcessStep";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Web Development Services | HyperDevo",
  description: "Modern business websites, landing pages, e-commerce sites, and custom web apps built for local and global brands.",
};

export default function WebDevelopmentPage() {
  const builds = ["Business websites", "Landing pages", "E-commerce websites", "Portfolio websites", "Company websites", "Booking websites", "Contact-focused websites", "Website redesigns", "Custom web applications"];
  const features = ["Responsive design", "Fast loading pages", "Modern UI design", "SEO-friendly structure", "Clear call-to-action sections", "Contact forms", "Analytics-ready setup", "Clean and scalable code", "Light and dark theme support if needed", "Mobile-first layouts"];
  const process = [
    { number: "01", title: "Discovery", description: "We understand your business, customers, goals, and required pages." },
    { number: "02", title: "Structure", description: "We plan the sitemap, sections, user journey, and content flow." },
    { number: "03", title: "Design", description: "We create a modern interface that matches your brand." },
    { number: "04", title: "Development", description: "We build the website with clean, responsive code." },
    { number: "05", title: "Launch", description: "We test, optimize, and prepare the site for public release." },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">WEB DEVELOPMENT</p>
            <h1>Websites built to look sharp, load fast, and grow your business.</h1>
            <p className="lead">
              Your website is often the first place customers judge your business. HyperDevo designs and develops websites that look professional, work smoothly on every device, and guide visitors toward action.
            </p>
            <div className="button-row">
              <Button href="/contact">Start Your Website</Button>
              <Button href="/portfolio" variant="secondary">
                View Portfolio
              </Button>
            </div>
          </div>
          <div className="service-mock">
            <div className="browser-bar" />
            <div className="screen" />
            <p>Premium structure. Fast interface. Clear conversion paths.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="WHAT WE BUILD" title="Websites for every stage of business." />
          <div className="badge-row">{builds.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="FEATURES INCLUDED" title="Designed for performance and trust." />
          <div className="grid three">{features.map((item) => <article className="info-card" key={item}><h3>{item}</h3></article>)}</div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="DEVELOPMENT PROCESS" title="From first idea to tested launch." />
          <div className="grid three">{process.map((step) => <ProcessStep key={step.title} {...step} />)}</div>
        </div>
      </section>
      <CTASection title="Need a website that feels premium and works properly?" description="Let us turn your service, product, or business idea into a focused website built for real customers." primaryCta={{ label: "Start a Website Project", href: "/contact" }} />
    </>
  );
}
