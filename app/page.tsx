import BlogCard from "@/components/BlogCard";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import HeroVisual from "@/components/HeroVisual";
import PortfolioCard from "@/components/PortfolioCard";
import ProcessStep from "@/components/ProcessStep";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { blogPosts, portfolioProjects, processSteps, services, testimonials } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid fade-up">
          <div>
            <p className="eyebrow">Creative Digital Agency / Sri Lanka → Worldwide</p>
            <h1>We Build Websites, Brands & Digital Growth Systems</h1>
            <p className="lead">
              HyperDevo is a Sri Lankan creative digital agency helping businesses grow with web development, graphic design, social media management, and digital marketing built for local and global markets.
            </p>
            <div className="hero-actions">
              <Button href="/contact">Start a Project</Button>
              <Button href="/portfolio" variant="secondary">
                View Our Work
              </Button>
            </div>
            <p className="hero-side-text">Websites. Brands. Campaigns. Content. Growth.</p>
            <div className="badge-row">
              {["Web Development", "Digital Marketing", "Social Media", "Graphic Design", "Branding"].map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="intro-strip">
        <div className="container">
          <p>A creative digital agency for businesses that want to look professional, grow online, and compete beyond borders.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="01 / WHAT WE DO"
            title="Digital services that make your brand impossible to ignore."
            description="From websites to content and campaigns, we create digital assets that help your business look sharper, communicate clearly, and attract the right audience."
          />
          <div className="grid two">
            {services.slice(0, 4).map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="split-section">
        <div className="container split-grid">
          <SectionHeading eyebrow="02 / WHY HYPERDEVO" title="Creative thinking meets digital execution." />
          <div>
            <p>
              We do not only design good-looking visuals. We create digital experiences that help businesses build trust, attract customers, and grow with a stronger online presence.
            </p>
            <div className="reason-grid">
              {["Bold creative direction", "Business-focused design", "Web and marketing under one brand", "Local understanding with global quality", "Content that feels modern and consistent", "Scalable solutions for future growth"].map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="03 / SELECTED WORK" title="Digital work designed to move brands forward." />
          <div className="grid two">
            {portfolioProjects.slice(0, 4).map((project) => (
              <PortfolioCard key={project.title} {...project} />
            ))}
          </div>
          <div className="button-row">
            <Button href="/portfolio">Explore Portfolio</Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="04 / PROCESS" title="A clear process from idea to launch." />
          <div className="grid three">
            {processSteps.map((step) => (
              <ProcessStep key={step.title} {...step} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="CLIENT WORDS" title="Built for businesses that want to grow with confidence." />
          <div className="grid three">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.quote} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="LATEST THINKING" title="Practical digital insights for growing businesses." />
          <div className="grid three">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.title} {...post} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to build your digital presence?"
        description="Tell us about your business and we'll help you choose the right digital solution."
        primaryCta={{ label: "Start a Project", href: "/contact" }}
      />
    </>
  );
}
