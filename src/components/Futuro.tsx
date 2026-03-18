import FadeIn from "./FadeIn";

export default function Futuro() {
  return (
    <section
      id="futuro"
      style={{
        background: "var(--navy)",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background:
            "linear-gradient(90deg, var(--celeste), var(--sol), var(--celeste))",
          zIndex: 2,
        }}
      />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <FadeIn>
          <div className="sec-head">
            <div className="sec-num">04</div>
            <h2 className="sec-title-f">ARGENTINA DEL FUTURO</h2>
            <div className="sec-accent" />
            <p className="sec-intro-f">
              <em>
                «Solo reencontrándonos con las verdades de nuestro pasado
                profundo podemos dar un salto hacia el futuro.»
              </em>{" "}
              — Cuatro pilares transforman a la Argentina en protagonista de la
              revolución tecnológica global.
            </p>
          </div>
        </FadeIn>

        {/* 1. Silicon Valley */}
        <FadeIn>
          <div className="duo">
            <div className="blk">
              <div className="kicker k-gold">
                Mayo 2024 · Silicon Valley
              </div>
              <h3>
                ARGENTINA COMO
                <br />
                <em>HUB GLOBAL DE IA</em>
              </h3>
              <p>
                En mayo de 2024, el Presidente Milei realizó una gira histórica
                por Silicon Valley. Reuniones cara a cara con Sam Altman
                (OpenAI), Sundar Pichai (Google), Tim Cook (Apple), Mark
                Zuckerberg (Meta) y Marc Andreessen (a16z).
              </p>
              <p>
                El pitch de Milei usó el modelo irlandés: así como Irlanda
                multiplicó su PBI per cápita atrayendo inversión tech, la
                Argentina ofrece algo que nadie más tiene — Patagonia con tierras
                vastas, clima frío, acceso al agua y energía limpia.
              </p>
              <div className="futuro-stats">
                <div className="futuro-st">
                  <div className="v">5</div>
                  <div className="l">CEOs reunidos</div>
                </div>
                <div className="futuro-st">
                  <div className="v">4°</div>
                  <div className="l">Hub IA global</div>
                </div>
                <div className="futuro-st">
                  <div className="v">2024</div>
                  <div className="l">Mayo · SF</div>
                </div>
              </div>
            </div>
            <div
              className="pcard"
              style={{
                aspectRatio: "16/9",
                background: "linear-gradient(135deg, #1a2a4a, var(--navy))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--sol)",
                fontSize: "1.5rem",
                fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
                letterSpacing: 3,
              }}
            >
              SILICON VALLEY 2024
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="dv">
            <div className="ln" />
            <div className="dt" />
            <div className="lb">Un año después, la semilla dio fruto</div>
            <div className="dt" />
            <div className="ln" />
          </div>
        </FadeIn>

        {/* 2. Stargate */}
        <FadeIn>
          <div className="duo flip">
            <div
              className="pcard"
              style={{
                aspectRatio: "16/9",
                background: "linear-gradient(135deg, #0c1a2e, #162d50)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--celeste)",
                fontSize: "1.5rem",
                fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
                letterSpacing: 3,
              }}
            >
              STARGATE ARGENTINA
            </div>
            <div className="blk">
              <div className="kicker k-blue">
                Octubre 2025 · Buenos Aires
              </div>
              <h3>
                STARGATE
                <br />
                ARGENTINA
              </h3>
              <p>
                El 10 de octubre de 2025, el Presidente Milei recibió en Casa
                Rosada a una delegación de OpenAI. Se firmó la carta de
                intención para el primer proyecto Stargate en América Latina.
              </p>
              <p>
                El megacentro de datos en la Patagonia tendrá capacidad de hasta
                500 MW — el mayor de América Latina. Una inversión de hasta USD
                25.000 millones bajo el régimen RIGI.
              </p>
              <div className="blk">
                <div className="bq">
                  «Cuando conocí al Presidente Milei durante su visita a San
                  Francisco, su visión sobre cómo la IA puede impulsar el
                  crecimiento de Argentina era inconfundible.»
                  <cite>Sam Altman — CEO, OpenAI</cite>
                </div>
              </div>
              <div className="futuro-stats">
                <div className="futuro-st">
                  <div className="v">$25B</div>
                  <div className="l">Inversión USD</div>
                </div>
                <div className="futuro-st">
                  <div className="v">500</div>
                  <div className="l">MW Capacidad</div>
                </div>
                <div className="futuro-st">
                  <div className="v">2027</div>
                  <div className="l">Fase 1 · 100 MW</div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="dv">
            <div className="ln" />
            <div className="dt" />
            <div className="lb">La energía que lo hace posible</div>
            <div className="dt" />
            <div className="ln" />
          </div>
        </FadeIn>

        {/* 3. Nuclear */}
        <FadeIn>
          <div className="duo">
            <div
              className="pcard"
              style={{
                aspectRatio: "16/9",
                background: "linear-gradient(135deg, #1a1a2e, #2d1b4e)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#f0d078",
                fontSize: "1.5rem",
                fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
                letterSpacing: 3,
              }}
            >
              PLAN NUCLEAR ARGENTINO
            </div>
            <div className="blk">
              <div className="kicker k-amber">
                Energía estratégica · Tres fases
              </div>
              <h3>
                EL MOTOR DETRÁS
                <br />
                DE LA REVOLUCIÓN
              </h3>
              <p>
                <strong>Fase 1 — El reactor.</strong> El ACR-300, un reactor
                modular de 300 MW diseñado por ingenieros de INVAP y patentado
                en Estados Unidos. Se construirán cuatro módulos en Atucha
                duplicando la capacidad nuclear instalada.
              </p>
              <p>
                <strong>Fase 2 — El uranio.</strong> YPF Nuclear lidera la
                explotación de Cerro Solo en Chubut, el mayor reservorio de
                uranio del país.
              </p>
              <p>
                <strong>Fase 3 — Nuclear City.</strong> Un hub de data centers
                100% libre de combustibles fósiles en la Patagonia, alimentado
                por energía nuclear.
              </p>
              <div className="futuro-stats">
                <div className="futuro-st">
                  <div className="v">4</div>
                  <div className="l">ACR-300 · Atucha</div>
                </div>
                <div className="futuro-st">
                  <div className="v">1.2</div>
                  <div className="l">GW Adicionales</div>
                </div>
                <div className="futuro-st">
                  <div className="v">2030</div>
                  <div className="l">Primer SMR</div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="dv">
            <div className="ln" />
            <div className="dt" />
            <div className="lb">La otra revolución energética</div>
            <div className="dt" />
            <div className="ln" />
          </div>
        </FadeIn>

        {/* 4. Vaca Muerta */}
        <FadeIn>
          <div className="duo flip">
            <div
              className="pcard"
              style={{
                aspectRatio: "16/9",
                background: "linear-gradient(135deg, #1b3a1b, #2e5a2e)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#7ec87e",
                fontSize: "1.5rem",
                fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
                letterSpacing: 3,
              }}
            >
              VACA MUERTA · NEUQUÉN
            </div>
            <div className="blk">
              <div className="kicker k-green">
                Récord histórico · 2025
              </div>
              <h3>
                VACA MUERTA:
                <br />
                <em>EL GIGANTE DESPIERTA</em>
              </h3>
              <p>
                En 2025, la Argentina superó el récord de producción petrolera
                de 1998. La producción alcanzó 869.000 barriles diarios con Vaca
                Muerta aportando el 65% del total nacional.
              </p>
              <p>
                El superávit de la balanza comercial energética alcanzó USD
                6.900 millones en 2025. El proyecto Argentina LNG proyecta
                exportar 12 millones de toneladas anuales de gas licuado.
              </p>
              <div className="futuro-stats">
                <div className="futuro-st">
                  <div className="v">869K</div>
                  <div className="l">Barriles/día · Récord</div>
                </div>
                <div className="futuro-st">
                  <div className="v">$10B</div>
                  <div className="l">Inversión 2025</div>
                </div>
                <div className="futuro-st">
                  <div className="v">$6.9B</div>
                  <div className="l">Superávit energético</div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Closing */}
        <FadeIn>
          <div
            style={{
              marginTop: "5rem",
              textAlign: "center",
              maxWidth: 700,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div
              style={{
                width: 60,
                height: 2,
                background: "linear-gradient(90deg, var(--sol), var(--celeste))",
                margin: "0 auto 2rem",
                borderRadius: 1,
              }}
            />
            <p
              style={{
                fontFamily:
                  "var(--font-playfair-display), 'Playfair Display', serif",
                fontSize: "1.3rem",
                fontStyle: "italic",
                color: "var(--t1)",
                lineHeight: 1.8,
              }}
            >
              Silicon Valley abrió la puerta. Stargate trae la infraestructura.
              La energía nuclear y Vaca Muerta la alimentan. Argentina no será
              una observadora pasiva — está llamada a ser la arquitecta del
              futuro.
            </p>
            <p
              style={{
                fontSize: "0.68rem",
                letterSpacing: 3,
                textTransform: "uppercase" as const,
                color: "var(--sol)",
                marginTop: "1.2rem",
                fontWeight: 600,
              }}
            >
              Demian Reidel
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
