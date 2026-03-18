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
          <a href="#ideas">Visión</a>
          <a href="#logros">Logros</a>
          <a href="#reformas">Reformas</a>
          <a href="#futuro">Futuro</a>
          <a href="#mundo">Mundo</a>
          <a href="#archivo">Archivo</a>
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
