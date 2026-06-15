import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog | HyperDevo Digital Insights",
  description: "Simple digital insights about websites, branding, social media, and marketing for growing businesses.",
};

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">BLOG</p>
          <h1>Digital insights for modern businesses.</h1>
          <p className="lead">Simple guides and ideas about websites, branding, social media, and digital marketing for businesses that want to grow online.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="EDITORIAL" title="Sharp, practical ideas for better online presence." />
          <div className="grid three">
            {blogPosts.map((post) => (
              <BlogCard key={post.title} {...post} />
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Need help applying these ideas to your business?" description="Talk to HyperDevo about the right website, brand, content, or campaign direction for your next stage." primaryCta={{ label: "Talk to HyperDevo", href: "/contact" }} />
    </>
  );
}
