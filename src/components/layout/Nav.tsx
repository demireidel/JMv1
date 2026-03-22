"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/nav";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open + escape key
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    if (mobileOpen) {
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setMobileOpen(false);
          hamburgerRef.current?.focus();
        }
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleMenu = useCallback(() => setMobileOpen((v) => !v), []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`site-nav${scrolled ? " scrolled" : ""}`}
      role="navigation"
      aria-label="Navegación principal"
    >
      <Link href="/" className="nav-logo">
        JAVIER <span>MILEI</span>
      </Link>
      <ul className={`nav-links${mobileOpen ? " mobile-open" : ""}`} role="menubar">
        {navLinks.map((l) => (
          <li key={l.href} role="none">
            <Link
              href={l.href}
              role="menuitem"
              className={isActive(l.href) ? "active" : ""}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <button
        ref={hamburgerRef}
        className="menu-toggle"
        onClick={toggleMenu}
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
