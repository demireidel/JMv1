"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#ideas", label: "Visión" },
  { href: "#logros", label: "Logros" },
  { href: "#reformas", label: "Reformas" },
  { href: "#futuro", label: "Futuro" },
  { href: "#mundo", label: "Mundo" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`site-nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#hero" className="nav-logo">
        JAVIER <span>MILEI</span>
      </a>
      <ul className={`nav-links ${mobileOpen ? "mobile-open" : ""}`}>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setMobileOpen(false)}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <button
        className="menu-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
