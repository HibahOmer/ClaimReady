"use client";

import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Menu, X, ArrowDown } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Who This Is For", href: "#who-this-is-for" },
    { name: "Before Issues", href: "#before-anything-goes-wrong" },
    { name: "When Fault Appears", href: "#when-the-fault-appears" },
    { name: "Technician Visit", href: "#when-a-technician-visits" },
    { name: "If Refused", href: "#if-the-claim-is-refused" },
  ];

  return (
    <header className="sticky top-0 z-50 h-[72px] bg-white/92 backdrop-blur-md border-b border-outline">
      <div className="max-w-shell mx-auto px-5 md:px-10 h-full flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1"
        >
          <div className="w-9 h-9 rounded-md bg-primary-soft border border-primary-border flex items-center justify-center text-primary transition-transform group-hover:scale-105">
            <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-[18px] tracking-[-0.035em] text-secondary leading-tight">
              CLAIM READY
            </span>
            <span className="text-[10px] font-mono tracking-[0.16em] uppercase text-primary font-medium leading-none">
              WARRANTY CHECKLIST
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[14px] text-on-surface-variant hover:text-secondary font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 py-0.5"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Header Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#call-to-action"
            className="inline-flex items-center gap-2 bg-secondary text-on-secondary hover:bg-primary text-[13.5px] font-medium px-5 py-2.5 rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <span>Get Checklist</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-md text-on-surface hover:text-secondary hover:bg-surface-sunken focus:outline-none focus-visible:ring-2 focus-visible:ring-primary min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-outline shadow-card-raised px-5 py-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[16px] text-on-surface hover:text-primary font-medium py-2 border-b border-outline/50 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-primary font-mono tracking-widest">→</span>
              </a>
            ))}
            <a
              href="#call-to-action"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full text-center bg-primary text-white text-[15px] font-semibold py-3.5 rounded-full shadow-card-raised hover:bg-primary-strong transition-colors"
            >
              Download Checklist
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
