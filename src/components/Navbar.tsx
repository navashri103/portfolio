"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";

const links = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#chat", label: "Ask AI" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" aria-label="Navashri N M — home" className="flex items-center gap-2">
          <Logo size={34} />
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full border border-foreground/20 px-4 py-2 text-sm font-medium hover:border-accent hover:text-accent transition-colors"
        >
          Let&rsquo;s talk
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background border-t border-line px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base text-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
