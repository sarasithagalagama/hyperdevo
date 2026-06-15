"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/data";
import Button from "@/components/Button";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-menu-wrap">
      <button className="menu-button" type="button" aria-label="Toggle mobile menu" aria-expanded={isOpen} onClick={() => setIsOpen((value) => !value)}>
        <span />
        <span />
      </button>
      <div className={`mobile-panel ${isOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Button href="/contact" className="w-full text-center">
          Let&apos;s Talk
        </Button>
      </div>
    </div>
  );
}
