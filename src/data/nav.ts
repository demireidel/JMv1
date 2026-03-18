// ── Nav Data ─────────────────────────────────────────────

export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "#ideas", label: "Visión" },
  { href: "#logros", label: "Logros" },
  { href: "#reformas", label: "Reformas" },
  { href: "#futuro", label: "Futuro" },
  { href: "#mundo", label: "Mundo" },
  { href: "#archivo", label: "Archivo" },
];
