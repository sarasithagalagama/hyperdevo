import Link from "next/link";
import Button from "@/components/Button";
import MobileMenu from "@/components/MobileMenu";
import ThemeToggle from "@/components/ThemeToggle";

const landingLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Results", href: "/#results" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/#process" },
  { label: "FAQs", href: "/#faqs" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="container nav-shell" aria-label="Primary navigation">
        <Link href="/" className="logo-mark" aria-label="HyperDevo home">
          <img src="/logo.png" alt="HyperDevo Creative Digital Agency" />
        </Link>
        <div className="desktop-nav">
          {landingLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="nav-actions">
          <ThemeToggle />
          <Button href="/contact" className="desktop-cta">
            Book a Call
          </Button>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
