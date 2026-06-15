import Link from "next/link";
import { footerLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="logo-mark footer-logo" aria-label="HyperDevo home">
            <img src="/logo.png" alt="HyperDevo Creative Digital Agency" />
          </Link>
          <p>
            HyperDevo is a Sri Lankan creative digital agency offering web development, graphic design, social media management, and digital marketing services for growing businesses.
          </p>
        </div>
        <div>
          <h2>Quick Links</h2>
          {footerLinks.quick.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div>
          <h2>Services</h2>
          {footerLinks.services.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div>
          <h2>Contact</h2>
          <p>hello@hyperdevo.com</p>
          <p>Sri Lanka</p>
          <p>Local & global projects</p>
          <div className="social-row">
            {["Facebook", "Instagram", "LinkedIn", "TikTok"].map((item) => (
              <a key={item} href="/contact" aria-label={`${item} profile`}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container footer-bottom">© 2026 HyperDevo. All rights reserved.</div>
    </footer>
  );
}
