"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";

const mobileLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Results", href: "/#results" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/#process" },
  { label: "Packages", href: "/packages" },
  { label: "FAQs", href: "/#faqs" },
  { label: "Contact", href: "/contact" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-menu-wrap">
      <button className="menu-button" type="button" aria-label="Toggle mobile menu" aria-expanded={isOpen} onClick={() => setIsOpen((value) => !value)}>
        <span />
        <span />
      </button>
      <div className={`mobile-panel ${isOpen ? "open" : ""}`}>
        {mobileLinks.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Button href="/contact" className="w-full text-center">
          Book a Call
        </Button>
      </div>
    </div>
  );
}
