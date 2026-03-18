"use client";

import { useEffect, useState, useCallback, useRef } from "react";

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
  const navRef = useRef<HTMLElement>(null);

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

  // Close mobile menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  // Smooth scroll handler
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      ref={navRef}
      className={`site-nav ${scrolled ? "scrolled" : ""}`}
      role="navigation"
      aria-label="Navegación principal"
    >
      <a
        href="#hero"
        className="nav-logo"
        onClick={(e) => handleClick(e, "#hero")}
      >
        JAVIER <span>MILEI</span>
      </a>
      <ul
        className={`nav-links ${mobileOpen ? "mobile-open" : ""}`}
        role="menubar"
      >
        {links.map((l) => (
          <li key={l.href} role="none">
            <a
              href={l.href}
              role="menuitem"
              className={activeSection === l.href.slice(1) ? "active" : ""}
              onClick={(e) => handleClick(e, l.href)}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <button
        className="menu-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={mobileOpen}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
