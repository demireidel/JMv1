"use client";

import { useEffect, useState, useCallback } from "react";

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
  const [activeSection, setActiveSection] = useState("");

  const updateActive = useCallback(() => {
    const sections = links.map((l) => l.href.slice(1));
    let current = "";
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 200) current = id;
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      updateActive();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [updateActive]);

  return (
    <nav className={`site-nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#hero" className="nav-logo">
        JAVIER <span>MILEI</span>
      </a>
      <ul className={`nav-links ${mobileOpen ? "mobile-open" : ""}`}>
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className={activeSection === l.href.slice(1) ? "active" : ""}
              onClick={() => setMobileOpen(false)}
            >
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
