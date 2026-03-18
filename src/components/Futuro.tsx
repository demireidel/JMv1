import FadeIn from "./FadeIn";

const galleryPhotos = [
  { src: "/images/futuro/altman.jpg", who: "Milei con Sam Altman", where: "CEO de OpenAI — Silicon Valley, Mayo 2024", tag: "OpenAI", pos: "center 20%" },
  { src: "/images/futuro/meta-delegacion.jpg", who: "La delegación argentina con Mark Zuckerberg", where: "Sede de Meta, Menlo Park", tag: "Meta", pos: "center 18%" },
  { src: "/images/futuro/cook.jpg", who: "Milei con Tim Cook", where: "Apple Park, Cupertino", tag: "Apple", pos: "center 40%" },
  { src: "/images/futuro/andreessen.jpg", who: "Reidel y Travizano con Marc Andreessen", where: "Andreessen Horowitz (a16z)", tag: "a16z", pos: "center 12%" },
  { src: "/images/futuro/pichai.jpg", who: "Milei con Sundar Pichai", where: "Google HQ, Mountain View", tag: "Google", pos: "center 12%" },
  { src: "/images/futuro/google-delegacion.jpg", who: "Delegación argentina recibida en Google HQ", where: "Mountain View", tag: "Google", pos: "center 22%" },
];

export default function Futuro() {
  return (
    <section id="futuro" className="futuro-section">
      <div className="futuro-accent-line" />
      <div className="futuro-glow-top" />
      <div className="container futuro-container">
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
              revolución tecnológica global: Silicon Valley, Stargate, energía
              nuclear e hidrocarburos.
            </p>
          </div>
        </FadeIn>

        {/* 1. Silicon Valley */}
        <FadeIn>
          <div className="duo">
            <div className="blk">
              <div className="kicker k-gold">Mayo 2024 · Silicon Valley</div>
              <h3>ARGENTINA COMO<br /><em>HUB GLOBAL DE IA</em></h3>
              <p>
                En mayo de 2024, el Presidente Milei realizó una gira histórica
                por Silicon Valley — la cuarta visita a Estados Unidos en cinco
                meses de gestión y la primera dedicada exclusivamente a
                tecnología. Acompañado por Demian Reidel y Matías Travizano, la
                semana incluyó reuniones cara a cara con Sam Altman (OpenAI),
                Sundar Pichai (Google), Tim Cook (Apple), Mark Zuckerberg (Meta)
                y Marc Andreessen (a16z).
              </p>
              <p>
                El pitch de Milei usó el modelo irlandés: así como Irlanda
                multiplicó su PBI per cápita atrayendo inversión tech, la
                Argentina ofrece algo que nadie más tiene — Patagonia con tierras
                vastas, clima frío, acceso al agua y energía limpia. Reidel
                complementó con su tesis geopolítica: Europa reguló, China es
                impredecible, y EEUU debate restricciones. Argentina, alineada
                con Washington y sin regulación hostil, es la alternativa
                creíble.
              </p>
              <p>
                La agenda fue implacable. El martes, reunión de una hora con Sam
                Altman donde OpenAI preparó una demostración exclusiva de
                inteligencia artificial. El miércoles, disertación en la Hoover
                Institution de Stanford junto a Condoleezza Rice y el rector
                Richard Saller, seguida de reuniones con Tim Cook en Apple Park
                y con Sundar Pichai en Google — donde un cartel decía
                «Bienvenido Javier Milei, Presidente de la República
                Argentina». El jueves, reunión con Zuckerberg en Meta,
                presentación ante inversores en el Pacific Summit del Bay Area
                Council, y encuentros con empresas emergentes de IA.
              </p>
              <p>
                Meses después, Reidel lo resumió en la SAIAConf: «Para el
                sector tecnológico mundial, Milei es como un héroe. Estos tipos
                no se juntan a sacarse fotos — se juntan porque piensan que hay
                algo importante para discutir.» Y añadió una anécdota
                reveladora: al terminar la reunión con Jeff Bezos de Amazon, fue
                Bezos quien le pidió una selfie al Presidente. La visita sembró
                la semilla de lo que un año después se convertiría en Stargate
                Argentina.
              </p>
              <div className="futuro-stats">
                <div className="futuro-st"><div className="v">5</div><div className="l">CEOs reunidos</div></div>
                <div className="futuro-st"><div className="v">4°</div><div className="l">Hub IA global</div></div>
                <div className="futuro-st"><div className="v">2024</div><div className="l">Mayo · SF</div></div>
              </div>
            </div>
            <div className="pcard" style={{ aspectRatio: "16/9" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/futuro/zuckerberg.jpg" alt="Milei con Mark Zuckerberg" loading="lazy" style={{ objectPosition: "center 25%" }} />
              <div className="cap">
                <strong>Milei con Mark Zuckerberg</strong>
                <span>Sede de Meta — Silicon Valley, Mayo 2024</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Gallery */}
        <FadeIn>
          <div className="futuro-gallery">
            {galleryPhotos.map((p) => (
              <div className="fg-item" key={p.tag + p.who}>
                <div className="fg-badge">{p.tag}</div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt={p.who} loading="lazy" style={{ objectPosition: p.pos }} />
                <div className="fg-overlay">
                  <div className="fg-who">{p.who}</div>
                  <div className="fg-where">{p.where}</div>
                  <div className="fg-tag">{p.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="dv">
            <div className="ln" /><div className="dt" />
            <div className="lb">Un año después, la semilla dio fruto</div>
            <div className="dt" /><div className="ln" />
          </div>
        </FadeIn>

        {/* 2. Stargate */}
        <FadeIn>
          <div className="duo flip">
            <div className="pcard" style={{ aspectRatio: "16/9" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/futuro/stargate-casarosada.jpg" alt="Milei y Reidel con delegación de OpenAI en Casa Rosada" loading="lazy" style={{ objectPosition: "center 25%" }} />
              <div className="cap">
                <strong>Milei y Demian Reidel reciben a delegación de OpenAI</strong>
                <span>Casa Rosada — Octubre 2025</span>
              </div>
            </div>
            <div className="blk">
              <div className="kicker k-blue">Octubre 2025 · Buenos Aires</div>
              <h3>STARGATE<br />ARGENTINA</h3>
              <p>
                El 10 de octubre de 2025, el Presidente Milei recibió en Casa
                Rosada a una delegación de OpenAI liderada por Chris Lehane,
                junto a Demian Reidel. Allí se firmó la carta de intención para
                el primer proyecto Stargate en América Latina — y el primero del
                programa «OpenAI for Countries».
              </p>
              <p>
                El megacentro de datos en la Patagonia tendrá capacidad de hasta
                500 MW — el mayor de América Latina.
              </p>
              <p>
                La primera fase de 100 MW se proyecta para 2027. Más allá de la
                infraestructura, OpenAI se comprometió a desplegar ChatGPT
                personalizado para ciudadanos argentinos y a impulsar la
                adopción de IA en gobierno, educación y servicios públicos.
              </p>
              <div className="bq">
                «Cuando conocí al Presidente Milei durante su visita a San
                Francisco, su visión sobre cómo la IA puede impulsar el
                crecimiento de Argentina era inconfundible. Stargate Argentina no
                es solo infraestructura — es poner la inteligencia artificial en
                las manos de más personas en Argentina.»
                <cite>Sam Altman — CEO, OpenAI</cite>
              </div>
              <p>
                El proyecto supone una inversión de hasta USD 25.000 millones
                bajo el régimen RIGI — la mayor iniciativa de tecnología e
                infraestructura energética en la historia de Argentina. Integra
                Stargate, la joint venture global de OpenAI, SoftBank, Oracle y
                MGX que planea invertir USD 500.000 millones en infraestructura
                de IA a nivel mundial. La primera fase, de USD 7.000 a 10.000
                millones, contempla inicio de obras en 2026 y puesta en
                funcionamiento hacia fines de 2027.
              </p>
              <div className="futuro-stats">
                <div className="futuro-st"><div className="v">$25B</div><div className="l">Inversión USD</div></div>
                <div className="futuro-st"><div className="v">500</div><div className="l">MW Capacidad</div></div>
                <div className="futuro-st"><div className="v">2027</div><div className="l">Fase 1 · 100 MW</div></div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="dv">
            <div className="ln" /><div className="dt" />
            <div className="lb">La energía que lo hace posible</div>
            <div className="dt" /><div className="ln" />
          </div>
        </FadeIn>

        {/* 3. Nuclear */}
        <FadeIn>
          <div className="duo">
            <div className="pcard" style={{ aspectRatio: "16/9" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/futuro/plan-nuclear.jpg" alt="Reidel, Milei y Grossi anuncian el Plan Nuclear Argentino" loading="lazy" style={{ objectPosition: "center 35%" }} />
              <div className="cap">
                <strong>Reidel, Milei y Grossi anuncian el Plan Nuclear Argentino</strong>
                <span>Casa Rosada — Diciembre 2024</span>
              </div>
            </div>
            <div className="blk">
              <div className="kicker k-amber">Energía estratégica · Tres fases</div>
              <h3>EL MOTOR DETRÁS<br />DE LA REVOLUCIÓN</h3>
              <p>
                <strong>Fase 1 — El reactor.</strong> El ACR-300, un reactor
                modular de 300 MW diseñado por ingenieros de INVAP y patentado
                en Estados Unidos. Se construirán cuatro módulos en Atucha
                duplicando la capacidad nuclear instalada del país a 1.200 MW
                adicionales. Argentina apunta a ser el primer país en vender
                SMRs comercialmente — y en noviembre de 2025 se convirtió en el
                primer país latinoamericano en adherirse al programa FIRST de
                Estados Unidos para desarrollo de reactores modulares.
              </p>
              <p>
                <strong>Fase 2 — El uranio.</strong> El «modelo Gillette»: vender
                reactores con compromiso de compra de uranio argentino. YPF creó
                la subsidiaria YPF Nuclear para liderar la explotación de Cerro
                Solo en Chubut, el mayor reservorio de uranio del país, junto a
                18 iniciativas privadas adicionales. El objetivo: nunca más
                importar uranio para nuestros propios reactores.
              </p>
              <p>
                <strong>Fase 3 — Nuclear City.</strong> Un hub de data centers
                100% libre de combustibles fósiles en la Patagonia, alimentado
                por energía nuclear. Según Goldman Sachs, los data centers
                requerirán entre 85 y 90 GW de nueva capacidad nuclear global —
                y Argentina, con tierras vastas, clima frío y acceso al agua,
                ofrece la combinación que ningún otro país tiene.
              </p>
              <div className="bq">
                «Con el ACR-300, vamos a ofrecerle al mundo una fuente de energía
                limpia, estable y escalable. Primero construimos. Después,
                licenciamos la tecnología al resto del mundo.»
                <cite>Demian Reidel — Presidente, Consejo Nuclear Argentino</cite>
              </div>
              <p>
                Milei lo anunció en cadena nacional: «Tenemos energía de sobra,
                tierras frías e inhóspitas de sobra, y recurso humano de
                calidad. Cuando en Argentina imperaron las ideas de la libertad,
                fuimos punta de lanza en tecnología — en 1900, teníamos la mayor
                red ferroviaria de América Latina. Que nadie se sorprenda si la
                Argentina se convierte en el próximo hub del mundo.»
              </p>
              <div className="futuro-stats">
                <div className="futuro-st"><div className="v">4</div><div className="l">ACR-300 · Atucha</div></div>
                <div className="futuro-st"><div className="v">1.2</div><div className="l">GW Adicionales</div></div>
                <div className="futuro-st"><div className="v">2030</div><div className="l">Primer SMR</div></div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="dv">
            <div className="ln" /><div className="dt" />
            <div className="lb">La otra revolución energética</div>
            <div className="dt" /><div className="ln" />
          </div>
        </FadeIn>

        {/* 4. Vaca Muerta */}
        <FadeIn>
          <div className="duo flip">
            <div className="pcard" style={{ aspectRatio: "16/9" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/futuro/vaca-muerta.jpg" alt="Torre de perforación en Vaca Muerta, Neuquén" loading="lazy" style={{ objectPosition: "center 30%" }} />
              <div className="cap">
                <strong>Vaca Muerta — Neuquén, Patagonia</strong>
                <span>2° reserva mundial de gas shale · 4° de petróleo shale</span>
              </div>
            </div>
            <div className="blk">
              <div className="kicker k-green">Récord histórico · 2025</div>
              <h3>VACA MUERTA:<br /><em>EL GIGANTE DESPIERTA</em></h3>
              <p>
                En 2025, la Argentina superó el récord de producción petrolera
                de 1998 — un máximo que llevaba 27 años intacto. La producción
                alcanzó 869.000 barriles diarios con Vaca Muerta aportando el
                65% del total nacional. El crecimiento shale fue del 33%
                interanual.
              </p>
              <p>
                Las cifras son contundentes. La Cuenca Neuquina concentró USD
                10.000 millones en inversiones en 2025, con el 76% destinado a
                Vaca Muerta. YPF superó los 200.000 barriles diarios de shale
                oil propio — un crecimiento del 82% en dos años. Loma Campana se
                convirtió en el primer yacimiento argentino en romper la barrera
                de los 100.000 barriles diarios, con más de USD 10.000 millones
                invertidos y 750 pozos activos.
              </p>
              <p>
                Las exportaciones de crudo superaron los USD 6.000 millones. El
                superávit de la balanza comercial energética alcanzó USD 6.900
                millones en 2025 — un 22% más que en 2024. El proyecto Argentina
                LNG proyecta exportar 12 millones de toneladas anuales de gas
                licuado desde Río Negro — USD 200.000 millones en exportaciones
                en 20 años. Es la segunda reserva mundial de gas shale y la
                cuarta de petróleo shale: el gigante despertó.
              </p>
              <div className="futuro-stats">
                <div className="futuro-st"><div className="v">869K</div><div className="l">Barriles/día · Récord</div></div>
                <div className="futuro-st"><div className="v">$10B</div><div className="l">Inversión 2025</div></div>
                <div className="futuro-st"><div className="v">$6.9B</div><div className="l">Superávit energético</div></div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Closing */}
        <FadeIn>
          <div className="futuro-closing">
            <div className="futuro-closing-line" />
            <p className="futuro-closing-text">
              Silicon Valley abrió la puerta. Stargate trae la infraestructura.
              La energía nuclear y Vaca Muerta la alimentan. Argentina no será
              una observadora pasiva — está llamada a ser la arquitecta del
              futuro.
            </p>
            <p className="futuro-closing-attr">Demian Reidel</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
