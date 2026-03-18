export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://english.news.cn/20231211/fbb053d019cb4fe892fb746da14e1ed4/4bc8c6ffb5ee4b1ba05998350f9dc353.jpg"
          alt="Milei en el balcón de Casa Rosada"
        />
      </div>
      <div className="hero-overlay" />
      <div className="hero-accent" />
      <div className="hero-content">
        <p className="hero-subtitle">Presidente de la Nación Argentina</p>
        <h1 className="hero-name">
          JAVIER
          <br />
          MILEI
        </h1>
        <p className="hero-title">La libertad avanza</p>
        <div className="hero-line" />
        <p className="hero-quote">
          Argentina será el país más libre del mundo
        </p>
      </div>
      <div className="scroll-indicator">
        <div />
      </div>
    </section>
  );
}
