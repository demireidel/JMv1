export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        {/* Wordmark */}
        <div className="footer-brand">
          <div className="footer-wordmark">
            JAVIER <span>MILEI</span>
          </div>
          <p className="footer-tagline">Presidente de la Nación Argentina</p>
        </div>

        {/* Quick nav */}
        <nav className="footer-nav" aria-label="Navegación del pie">
          <a href="#ideas">Visión</a>
          <a href="#logros">Logros</a>
          <a href="#reformas">Reformas</a>
          <a href="#futuro">Futuro</a>
          <a href="#mundo">Mundo</a>
        </nav>

        {/* Contact */}
        <div className="footer-contact">
          <p className="footer-contact-label">Prensa y consultas</p>
          <p className="footer-contact-info">Casa Rosada — Buenos Aires, Argentina</p>
        </div>
      </div>

      {/* Divider */}
      <div className="footer-divider" />

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-flag">
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
