"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/inventory", label: "Parts" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-neutral-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-white">Benz</span>
              <span className="text-neutral-400">gate</span>
            </span>
            <span className="text-xs text-neutral-500 font-medium uppercase tracking-widest hidden sm:inline">
              Ghana
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-400 hover:text-white transition-colors font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/inventory"
              className="bg-white hover:bg-neutral-100 text-black font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm"
            >
              View Parts
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-400 hover:text-white"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-neutral-800">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-neutral-400 hover:text-white hover:bg-neutral-800 px-4 py-3 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/inventory"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 bg-white hover:bg-neutral-100 text-black font-semibold px-4 py-3 rounded-lg text-center"
              >
                View Parts
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
