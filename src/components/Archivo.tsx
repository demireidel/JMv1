import FadeIn from "./FadeIn";
import {
  etapas,
  papers,
  discursos,
  entrevistas,
  influencias,
  reconocimientos,
  collabProject,
  conversionQuote,
  edicionesNote,
} from "@/data/archivo";

export default function Archivo() {
  return (
    <section id="archivo" className="section-dark" style={{ paddingTop: 0, paddingBottom: "6rem" }}>

      {/* ─── 1. HERO ─── */}
      <div className="arc-hero-photo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/strip/milei-onu.jpg" alt="Milei en la ONU" style={{ objectPosition: "center 30%" }} />
        <div className="arc-hero-overlay" />
      </div>

      <div className="arc-hero-text">
        <FadeIn>
          <p className="arc-hero-eyebrow">SECCIÓN 06</p>
          <h2 className="arc-hero-title">ARCHIVO INTELECTUAL</h2>
          <p className="arc-hero-subtitle">
            Producción intelectual completa — Libros, Artículos, Discursos y Entrevistas
          </p>
          <div className="arc-hero-stats-bar">
            <span className="arc-hero-stat">14 libros</span>
            <span className="arc-hero-stat-dot">&middot;</span>
            <span className="arc-hero-stat">50+ papers</span>
            <span className="arc-hero-stat-dot">&middot;</span>
            <span className="arc-hero-stat">9 discursos</span>
            <span className="arc-hero-stat-dot">&middot;</span>
            <span className="arc-hero-stat">6 entrevistas</span>
          </div>
        </FadeIn>
      </div>

      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 2rem" }}>

        {/* ─── 2. FEATURED COLLABORATION ─── */}
        <FadeIn>
          <div className="arc-collab-featured">
            <div className="arc-collab-featured-badge">{collabProject.badge}</div>
            <h3 className="arc-collab-featured-title">{collabProject.title}</h3>
            <p className="arc-collab-featured-desc">{collabProject.desc}</p>
            <div className="arc-collab-featured-quote">
              <span className="arc-collab-featured-qmark">&ldquo;</span>
              <blockquote>{collabProject.quote}</blockquote>
              <cite>{collabProject.quoteCite}</cite>
            </div>
          </div>
        </FadeIn>

        {/* ─── 3. ERA CHAPTERS — LIBROS ─── */}
        <FadeIn>
          <div className="arc-divider" style={{ marginTop: "5rem" }}>
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
            <div className="arc-era">
              <div className="arc-era-header">
                <h4 className="arc-era-name">{etapa.label}</h4>
                <span className="arc-era-years">{etapa.desc}</span>
              </div>
              <div className="arc-era-books">
                {etapa.books.map((b, bi) => (
                  <div key={bi} className={`arc-era-book${b.highlight ? " arc-era-book--hl" : ""}`}>
                    <span className="arc-era-book-year">{b.year}</span>
                    <div className="arc-era-book-body">
                      <h5 className="arc-era-book-title">{b.title}</h5>
                      <div className="arc-era-book-meta">
                        {b.coauthors && <span>con {b.coauthors}</span>}
                        {b.publisher && <span className="arc-era-book-pub">{b.publisher}</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}

        <FadeIn>
          <div className="arc-note">
            {edicionesNote.split("(").map((part, i) =>
              i === 0 ? part : <span key={i}>({part}</span>
            )}
          </div>
        </FadeIn>

        {/* Photo break */}
        <div className="arc-photo-break">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/strip/milei-asuncion.jpg" alt="Asunción presidencial" />
        </div>

        {/* ─── 4. PAPERS ─── */}
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

        {/* ─── 5. DISCURSOS ─── */}
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

        {/* Featured keynotes (the ones with keynote flag) */}
        <div className="arc-keynotes">
          {discursos.filter(d => d.keynote).map((d, i) => (
            <FadeIn key={i}>
              <div className="arc-keynote">
                <span className="arc-keynote-date">{d.date}</span>
                <h4 className="arc-keynote-title">{d.title}</h4>
                <span className="arc-keynote-loc">{d.location}</span>
                <p className="arc-keynote-desc">{d.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Non-keynote speeches */}
        <div className="arc-speeches-compact">
          {discursos.filter(d => !d.keynote).map((d, i) => (
            <FadeIn key={i}>
              <div className="arc-speech-sm">
                <span className="arc-speech-sm-date">{d.date}</span>
                <div>
                  <h5 className="arc-speech-sm-title">{d.title}</h5>
                  <span className="arc-speech-sm-loc">{d.location}</span>
                  <p className="arc-speech-sm-desc">{d.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Photo break */}
        <div className="arc-photo-break">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/strip/milei-g7.jpg" alt="Milei en cumbre del G7" />
        </div>

        {/* ─── 6. ENTREVISTAS ─── */}
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

        {/* Featured interviews (highlight flag) */}
        <div className="arc-interviews-featured">
          {entrevistas.filter(e => e.highlight).map((e, i) => (
            <FadeIn key={i}>
              <div className="arc-interview-lg">
                <h4 className="arc-interview-lg-outlet">{e.outlet}</h4>
                {e.journalist && <span className="arc-interview-lg-by">por {e.journalist}</span>}
                <p className="arc-interview-lg-desc">{e.desc}</p>
                <span className="arc-interview-lg-date">{e.date}</span>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Non-highlighted interviews */}
        <div className="arc-interviews-compact">
          {entrevistas.filter(e => !e.highlight).map((e, i) => (
            <FadeIn key={i}>
              <div className="arc-speech-sm">
                <span className="arc-speech-sm-date">{e.date}</span>
                <div>
                  <h5 className="arc-speech-sm-title">{e.outlet}</h5>
                  {e.journalist && <span className="arc-speech-sm-loc">por {e.journalist}</span>}
                  <p className="arc-speech-sm-desc">{e.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* ─── 7. INFLUENCIAS ─── */}
        <FadeIn>
          <div className="arc-divider" style={{ marginTop: "5rem" }}>
            <span className="arc-divider-line" />
            <span className="arc-divider-label">INFLUENCIAS INTELECTUALES</span>
            <span className="arc-divider-line" />
          </div>
        </FadeIn>

        <FadeIn>
          <div className="arc-influences-grid">
            {influencias.map((inf, i) => (
              <div key={i} className="arc-influence-card">
                <h5 className="arc-influence-card-school">{inf.school}</h5>
                <p className="arc-influence-card-names">{inf.names}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* ─── 8. CONVERSION QUOTE ─── */}
        <FadeIn>
          <div className="arc-conversion">
            <span className="arc-conversion-qmark">&ldquo;</span>
            <blockquote>
              {conversionQuote.text.split("La Acción Humana").map((part, i) =>
                i === 0 ? part : <span key={i}><em>La Acción Humana</em>{part}</span>
              )}
            </blockquote>
            <cite>{conversionQuote.cite}</cite>
          </div>
        </FadeIn>

        {/* ─── 9. RECONOCIMIENTOS ─── */}
        <FadeIn>
          <div className="arc-divider" style={{ marginTop: "5rem" }}>
            <span className="arc-divider-line" />
            <span className="arc-divider-label">RECONOCIMIENTOS</span>
            <span className="arc-divider-line" />
          </div>
        </FadeIn>

        <FadeIn>
          <div className="arc-awards-strip">
            {reconocimientos.map((r, i) => (
              <div key={i} className="arc-award-badge">
                <span className="arc-award-badge-icon">&#9670;</span>
                <span>{r}</span>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
