import Link from "next/link";
import { navLinks } from "@/lib/data";
import Button from "@/components/Button";
import MobileMenu from "@/components/MobileMenu";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="container nav-shell" aria-label="Primary navigation">
        <Link href="/" className="wordmark" aria-label="HyperDevo home">
          <span>HYPERDEVO</span>
          <small>Creative Digital Agency</small>
        </Link>
        <div className="desktop-nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="nav-actions">
          <ThemeToggle />
          <Button href="/contact" className="desktop-cta">
            Start a Project
          </Button>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
