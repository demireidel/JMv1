import Link from "next/link";

/**
 * Footer — Server Component (no interactivity needed).
 */
export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-wordmark">
            JAVIER <span>MILEI</span>
          </div>
          <p className="footer-tagline">Presidente de la Nación Argentina</p>
        </div>

        <nav className="footer-nav" aria-label="Navegación del pie">
          <Link href="/vision">Visión</Link>
          <Link href="/logros">Logros</Link>
          <Link href="/reformas">Reformas</Link>
          <Link href="/futuro">Futuro</Link>
          <Link href="/mundo">Mundo</Link>
          <Link href="/archivo">Archivo</Link>
        </nav>

        <div className="footer-contact">
          <p className="footer-contact-label">Prensa y consultas</p>
          <p className="footer-contact-info">Casa Rosada — Buenos Aires, Argentina</p>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <div className="footer-flag" aria-hidden="true">
          <div />
          <div />
          <div />
        </div>
        <p className="motto">&ldquo;Viva la libertad, carajo.&rdquo;</p>
        <p className="footer-copy">La libertad avanza — 2024–2026</p>
      </div>
    </footer>
  );
}
