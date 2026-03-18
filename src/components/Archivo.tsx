import FadeIn from "./FadeIn";
import {
  etapas,
  papers,
  discursos,
  entrevistas,
  influencias,
  reconocimientos,
} from "@/data/archivo";

export default function Archivo() {
  return (
    <section id="archivo" className="section-darker" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 2rem" }}>

        {/* Header */}
        <FadeIn>
          <div className="sec-head">
            <div className="sec-num">06</div>
            <h2 className="sec-title-f">ARCHIVO INTELECTUAL</h2>
            <div className="sec-accent" />
            <p className="sec-intro-f">
              Más de <em>50 artículos académicos</em>, 14 libros, discursos que redefinieron el debate global
              y entrevistas con audiencias de cientos de millones. La producción intelectual completa
              de un presidente-economista sin precedentes.
            </p>
          </div>
        </FadeIn>

        {/* ─── LIBROS ─── */}
        <FadeIn>
          <div className="arc-divider">
            <span className="arc-divider-line" />
            <span className="arc-divider-label">LIBROS</span>
            <span className="arc-divider-line" />
          </div>
        </FadeIn>

        <FadeIn>
          <p className="arc-sub">
            14 libros entre obras individuales y coautorías — desde la econometría aplicada
            hasta la filosofía política de la libertad.
          </p>
        </FadeIn>

        {etapas.map((etapa, ei) => (
          <FadeIn key={ei}>
            <div className="arc-etapa">
              <div className="arc-etapa-hdr">
                <h4 className="arc-etapa-title">{etapa.label}</h4>
                <span className="arc-etapa-period">{etapa.desc}</span>
              </div>
              <div className="arc-books">
                {etapa.books.map((b, bi) => (
                  <div key={bi} className={`arc-book ${b.highlight ? "arc-book--hl" : ""}`}>
                    <span className="arc-book-year">{b.year}</span>
                    <div className="arc-book-body">
                      <h5 className="arc-book-title">{b.title}</h5>
                      {b.coauthors && <span className="arc-book-meta">con {b.coauthors}</span>}
                      {b.publisher && <span className="arc-book-pub">{b.publisher}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}

        <FadeIn>
          <div className="arc-note">
            Ediciones internacionales en portugués (<em>Viva a Liberdade, Carajo!</em>), inglés (<em>The End of Inflation</em>)
            y español peninsular (<em>El Camino del Libertario</em>, Deusto 2024). Prólogos en obras colectivas
            como <em>De Viena a Madrid</em> (Unión Editorial).
          </div>
        </FadeIn>

        {/* ─── PAPERS ─── */}
        <FadeIn>
          <div className="arc-divider" style={{ marginTop: "5rem" }}>
            <span className="arc-divider-line" />
            <span className="arc-divider-label">PAPERS ACADÉMICOS</span>
            <span className="arc-divider-line" />
          </div>
        </FadeIn>

        <FadeIn>
          <p className="arc-sub">
            Más de 50 artículos académicos publicados. Especialidad declarada: crecimiento con y sin dinero.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="arc-papers">
            {papers.map((p, i) => (
              <div key={i} className="arc-paper">
                <span className="arc-paper-topic">{p.topic}</span>
                <h5 className="arc-paper-title">{p.title}</h5>
                <div className="arc-paper-meta">
                  {p.coauthors && <span>con {p.coauthors}</span>}
                  {p.venue && <span>{p.venue}</span>}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Paper con Demian — highlight */}
        <FadeIn>
          <div className="arc-collab">
            <div className="arc-collab-badge">EN PROGRESO</div>
            <h4 className="arc-collab-title">Trabajo Teórico con Demian Reidel</h4>
            <p className="arc-collab-desc">
              Reescribir gran parte de la teoría económica para derivar optimalidad de Pareto — tanto estática
              como intertemporal — con funciones de producción no convexas. Un trabajo que, de completarse,
              resolvería la tensión entre la &ldquo;fábrica de alfileres&rdquo; (rendimientos crecientes a escala)
              y la &ldquo;mano invisible&rdquo; (equilibrio competitivo).
            </p>
            <div className="arc-collab-quote">
              <span className="arc-collab-qmark">&ldquo;</span>
              <blockquote>
                Con mi jefe de asesores, el doctor Demian Reidel, estamos reescribiendo gran parte de la teoría económica.
              </blockquote>
              <cite>Javier Milei — Instituto Liberal de Praga, junio 2024</cite>
            </div>
          </div>
        </FadeIn>

        {/* ─── DISCURSOS ─── */}
        <FadeIn>
          <div className="arc-divider" style={{ marginTop: "5rem" }}>
            <span className="arc-divider-line" />
            <span className="arc-divider-label">DISCURSOS</span>
            <span className="arc-divider-line" />
          </div>
        </FadeIn>

        <FadeIn>
          <p className="arc-sub">
            Los discursos que redefinieron el debate global — de Davos a las Naciones Unidas, de la CPAC al premio Milton Friedman.
          </p>
        </FadeIn>

        <div className="arc-speeches">
          {discursos.map((d, i) => (
            <FadeIn key={i}>
              <div className={`arc-speech ${d.keynote ? "arc-speech--keynote" : ""}`}>
                <div className="arc-speech-date">{d.date}</div>
                <div className="arc-speech-body">
                  <h5 className="arc-speech-title">{d.title}</h5>
                  <span className="arc-speech-loc">{d.location}</span>
                  <p className="arc-speech-desc">{d.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* ─── ENTREVISTAS ─── */}
        <FadeIn>
          <div className="arc-divider" style={{ marginTop: "5rem" }}>
            <span className="arc-divider-line" />
            <span className="arc-divider-label">ENTREVISTAS</span>
            <span className="arc-divider-line" />
          </div>
        </FadeIn>

        <FadeIn>
          <p className="arc-sub">
            De Tucker Carlson a Lex Fridman, de TIME a la BBC — audiencias globales de cientos de millones.
          </p>
        </FadeIn>

        <div className="arc-interviews">
          {entrevistas.map((e, i) => (
            <FadeIn key={i}>
              <div className={`arc-interview ${e.highlight ? "arc-interview--hl" : ""}`}>
                <div className="arc-interview-date">{e.date}</div>
                <div className="arc-interview-body">
                  <h5 className="arc-interview-outlet">{e.outlet}</h5>
                  {e.journalist && <span className="arc-interview-by">por {e.journalist}</span>}
                  <p className="arc-interview-desc">{e.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* ─── INFLUENCIAS ─── */}
        <FadeIn>
          <div className="arc-divider" style={{ marginTop: "5rem" }}>
            <span className="arc-divider-line" />
            <span className="arc-divider-label">INFLUENCIAS INTELECTUALES</span>
            <span className="arc-divider-line" />
          </div>
        </FadeIn>

        <FadeIn>
          <div className="arc-influences">
            {influencias.map((inf, i) => (
              <div key={i} className="arc-influence">
                <h5 className="arc-influence-school">{inf.school}</h5>
                <p className="arc-influence-names">{inf.names}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="arc-conversion">
            <span className="arc-conversion-qmark">&ldquo;</span>
            <blockquote>
              Leyendo a Rothbard descubrí que lo que había enseñado sobre estructuras de mercado
              en microeconomía estaba equivocado. Luego leí <em>La Acción Humana</em> de Mises de
              principio a fin sin parar y experimenté una verdadera revolución en mi cabeza.
            </blockquote>
            <cite>Javier Milei — Lex Fridman Podcast #453</cite>
          </div>
        </FadeIn>

        {/* ─── RECONOCIMIENTOS ─── */}
        <FadeIn>
          <div className="arc-divider" style={{ marginTop: "5rem" }}>
            <span className="arc-divider-line" />
            <span className="arc-divider-label">RECONOCIMIENTOS</span>
            <span className="arc-divider-line" />
          </div>
        </FadeIn>

        <FadeIn>
          <div className="arc-awards">
            {reconocimientos.map((r, i) => (
              <div key={i} className="arc-award">
                <span className="arc-award-icon">◆</span>
                <span>{r}</span>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
