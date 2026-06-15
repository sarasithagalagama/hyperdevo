import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact HyperDevo | Start a Digital Project",
  description: "Contact HyperDevo to start your website, branding, social media, or digital marketing project.",
};

export default function ContactPage() {
  return (
    <section className="page-hero">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">CONTACT</p>
          <h1>Let&apos;s build your digital presence.</h1>
          <p className="lead">Ready to grow your brand online? Tell us about your business and we&apos;ll help you choose the right digital solution.</p>
          <div className="contact-details">
            <div>
              <strong>Email</strong>
              <p>hello@hyperdevo.com</p>
            </div>
            <div>
              <strong>WhatsApp</strong>
              <p>+94 XX XXX XXXX</p>
            </div>
            <div>
              <strong>Location</strong>
              <p>Sri Lanka</p>
            </div>
            <div>
              <strong>Working with</strong>
              <p>Local and international clients</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
