import FadeIn from "./FadeIn";

export default function Vision() {
  return (
    <section className="section-dark" id="ideas">
      <div className="container">
        {/* Opening */}
        <FadeIn>
          <div className="v-opening">
            <div className="v-kicker">La visión</div>
            <h2>
              ARGENTINA SERÁ
              <br />
              <em>el país más libre del mundo</em>
            </h2>
            <p className="v-subtitle">
              No es una promesa de campaña. Es un proyecto de refundación
              civilizatoria basado en la libertad, la propiedad privada y la
              cooperación social voluntaria.
            </p>
          </div>
        </FadeIn>

        {/* Mantra */}
        <FadeIn>
          <div className="v-mantra-wrap">
            <div className="v-mantra-label">
              Alberto Benegas Lynch (h) — el contrato social que elegimos los
              argentinos
            </div>
            <div className="v-mantra-text">
              &laquo;El liberalismo es el respeto irrestricto del proyecto de
              vida del prójimo, basado en el principio de no agresión, en
              defensa del derecho a la vida, a la libertad y a la propiedad,
              donde solo se puede ser exitoso sirviendo al prójimo con bienes de
              mejor calidad a un mejor precio.&raquo;
            </div>
            <div className="v-mantra-cite">
              Citado en el discurso de asunción, 10 de diciembre de 2023
            </div>
          </div>
        </FadeIn>

        {/* Chapter I */}
        <FadeIn>
          <div className="v-chapter">
            <div className="v-chapter-header">
              <span className="v-chapter-num">I</span>
              <h3 className="v-chapter-title">El proyecto de la libertad</h3>
            </div>
            <div className="v-prose">
              <p className="lead">
                La Argentina fue alguna vez el país más próspero del planeta. No
                por azar, sino por diseño institucional: la Constitución de 1853,
                de fuerte raigambre liberal, inspirada en las ideas de{" "}
                <strong>Juan Bautista Alberdi</strong>.
              </p>
              <p>
                Abrazamos la libertad, la propiedad privada, los mercados
                libres, la división del trabajo y la cooperación social. Lo que
                vino después fue la expansión económica más impresionante de
                nuestra historia. En apenas 35 años, la renta per cápita
                argentina superó a la de casi todas las naciones europeas.
              </p>
              <p>
                Después, la dirigencia decidió abandonar el modelo que nos había
                hecho ricos y abrazó las ideas empobrecedoras del colectivismo.
                Durante más de cien años los políticos insistieron en defender un
                modelo que solo genera pobreza, estancamiento y miseria.
              </p>
              <p>
                Mi proyecto no es administrar esa decadencia.{" "}
                <strong>Es revertirla por completo.</strong> Cada decisión de
                gobierno se mide contra una sola pregunta:{" "}
                <strong>
                  ¿esto nos acerca a ser el país más libre del mundo?
                </strong>{" "}
                Si la respuesta es no, esa política no se implementa.
              </p>
            </div>
            <div className="v-pullquote">
              <p>
                &laquo;Hoy volvemos a abrazar las ideas de Alberdi, de nuestros
                padres fundadores, que hicieron que en 35 años pasáramos de ser
                un país de bárbaros a ser potencia.&raquo;
              </p>
              <cite>Discurso de asunción, diciembre 2023</cite>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="v-data-strip">
            <div className="v-data-cell">
              <div className="vdc-num">
                1<span>°</span>
              </div>
              <div className="vdc-lbl">
                PBI per cápita
                <br />
                mundial, circa 1895
              </div>
            </div>
            <div className="v-data-cell">
              <div className="vdc-num">35</div>
              <div className="vdc-lbl">
                Años bastaron
                <br />
                para ser potencia
              </div>
            </div>
            <div className="v-data-cell">
              <div className="vdc-num">
                100<span>+</span>
              </div>
              <div className="vdc-lbl">
                Años de decadencia
                <br />
                colectivista
              </div>
            </div>
            <div className="v-data-cell">
              <div className="vdc-num">
                140<span>°</span>
              </div>
              <div className="vdc-lbl">
                Puesto al que caímos
                <br />
                en libertad económica
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="v-rule" />

        {/* Chapter II */}
        <FadeIn>
          <div className="v-chapter">
            <div className="v-chapter-header">
              <span className="v-chapter-num">II</span>
              <h3 className="v-chapter-title">Capitalismo y moralidad</h3>
            </div>
            <div className="v-prose">
              <p className="lead">
                <strong>
                  El capitalismo de libre empresa no solo es el sistema más
                  productivo — es el único sistema moralmente deseable.
                </strong>{" "}
                El único basado en el intercambio voluntario y el principio de no
                agresión.
              </p>
              <p>
                El capitalista exitoso no se apropia de la riqueza ajena —
                contribuye al bienestar general.{" "}
                <strong>Un empresario exitoso es un héroe.</strong> Un
                benefactor social que solo puede prosperar sirviendo al prójimo
                con mejores bienes a mejor precio.
              </p>
            </div>
            <div className="v-pullquote">
              <p>
                &laquo;El capitalista, el empresario exitoso, es un benefactor
                social que, lejos de apropiarse de la riqueza ajena, contribuye
                al bienestar general.&raquo;
              </p>
              <cite>Davos, enero 2024</cite>
            </div>
          </div>
        </FadeIn>

        {/* Pyramid */}
        <FadeIn>
          <div className="v-pyramid">
            {[
              {
                rank: "1°",
                label: "Primero",
                title: "Ética y moral",
                desc: "Filosofía griega, derecho romano, rectitud de los estoicos, valores judeocristianos. Cada decisión debe pasar primero el test moral.",
              },
              {
                rank: "2°",
                label: "Segundo",
                title: "Eficiencia dinámica",
                desc: "Cuando el marco institucional es justo, la eficiencia es su consecuencia natural — no su rival.",
              },
              {
                rank: "3°",
                label: "Tercero",
                title: "Resultado político",
                desc: "Cuando hay tensión entre ética y resultado político, la política debe descartarse — aún cuando sirva electoralmente.",
              },
            ].map((item) => (
              <div className="v-pyramid-level" key={item.rank}>
                <div className="v-pyramid-rank">
                  <span>{item.rank}</span>
                  <small>{item.label}</small>
                </div>
                <div className="v-pyramid-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="v-rule" />

        {/* Chapter III */}
        <FadeIn>
          <div className="v-chapter">
            <div className="v-chapter-header">
              <span className="v-chapter-num">III</span>
              <h3 className="v-chapter-title">El Estado es el problema</h3>
            </div>
            <div className="v-prose">
              <p className="lead">
                <strong>Hayek</strong> lo advirtió en{" "}
                <em>Camino de Servidumbre</em>: cada intervención del Estado
                genera distorsiones que justifican nuevas intervenciones, hasta
                que la libertad desaparece por completo.
              </p>
              <p>
                Argentina vivió esa profecía durante cien años. Cada gobierno
                agrandó el Estado un poco más, reguló un poco más, gastó un poco
                más — y la decadencia se profundizó un poco más.
              </p>
              <p>
                <strong>
                  Las funciones del Estado deben limitarse a la defensa del
                  derecho a la vida, a la libertad y a la propiedad.
                </strong>{" "}
                Nada más.
              </p>
            </div>
            <div className="v-pullquote">
              <p>
                &laquo;El Estado no es la solución. El Estado es el problema
                mismo. No cedan al avance del Estado.&raquo;
              </p>
              <cite>Davos, enero 2024</cite>
            </div>
          </div>
        </FadeIn>

        <div className="v-rule" />

        {/* Chapter IV */}
        <FadeIn>
          <div className="v-chapter">
            <div className="v-chapter-header">
              <span className="v-chapter-num">IV</span>
              <h3 className="v-chapter-title">La batalla cultural</h3>
            </div>
            <div className="v-prose">
              <p className="lead">
                La gran gesta para cambiar la Argentina tiene tres frentes de
                batalla que, si bien son distintos el uno del otro,{" "}
                <strong>son igualmente indispensables.</strong>
              </p>
              <p>
                Los años 90 demostraron que no alcanza con gestionar bien: se
                pueden implementar reformas económicas profundas, pero si no se
                gana la batalla de las ideas, el próximo gobierno las revierte
                todas.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="v-pillars">
            <div className="v-pillar">
              <div className="vp-icon">&#9881;</div>
              <h4>Gestión</h4>
              <p>
                Diseñar e implementar las reformas profundas que el país
                necesita. Achicar el Estado, eliminar regulaciones, equilibrar
                las cuentas.
              </p>
            </div>
            <div className="v-pillar">
              <div className="vp-icon">&#9878;</div>
              <h4>Política</h4>
              <p>
                Construir el poder institucional necesario para impulsar las
                reformas y blindarlas de la reversión.
              </p>
            </div>
            <div className="v-pillar">
              <div className="vp-icon">&#9733;</div>
              <h4>Cultura</h4>
              <p>
                La batalla por las almas. Ganar la disputa de las ideas para que
                los cambios sean permanentes.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="v-rule" />

        {/* Chapter V */}
        <FadeIn>
          <div className="v-chapter">
            <div className="v-chapter-header">
              <span className="v-chapter-num">V</span>
              <h3 className="v-chapter-title">La defensa de Occidente</h3>
            </div>
            <div className="v-prose">
              <p className="lead">
                <strong>Occidente está en peligro.</strong> Está en peligro
                porque aquellos que supuestamente deben defender sus valores se
                encuentran cooptados por una visión del mundo que,
                inexorablemente, conduce al socialismo y a la pobreza.
              </p>
              <p>
                Occidente representa el pico de la civilización humana. A partir
                de cuatro fuentes —{" "}
                <strong>
                  la filosofía griega, el derecho romano, la rectitud de los
                  estoicos y los valores judeocristianos
                </strong>{" "}
                — Occidente formó su tradición filosófica y cultural.
              </p>
            </div>
            <div className="v-pullquote">
              <p>
                &laquo;Occidente está en peligro, y quienes deberían defenderlo
                lo están abandonando.&raquo;
              </p>
              <cite>Davos, enero 2024</cite>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="v-thinkers">
            {[
              {
                era: "Fundamentos",
                title: "Filosofía griega",
                desc: "La razón como instrumento de conocimiento. La búsqueda de la verdad y la virtud como fin del hombre libre.",
              },
              {
                era: "Instituciones",
                title: "Derecho romano",
                desc: "El imperio de la ley, la propiedad privada y el contrato como pilares de la convivencia civilizada.",
              },
              {
                era: "Carácter",
                title: "Rectitud estoica",
                desc: "El deber, la disciplina interior y la responsabilidad individual como ejes de una vida digna.",
              },
              {
                era: "Valores",
                title: "Tradición judeocristiana",
                desc: "La sacralidad de la persona, la libertad de conciencia y la igualdad ante Dios y ante la ley.",
              },
            ].map((t) => (
              <div className="v-thinker" key={t.title}>
                <div className="vt-era">{t.era}</div>
                <h4>{t.title}</h4>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Closing */}
        <FadeIn>
          <div className="v-declaration">
            <div className="v-rule" style={{ marginBottom: "2.5rem" }} />
            <div className="vd-big">
              ARGENTINA SERÁ
              <br />
              EL PAÍS MÁS <em>libre</em>
              <br />
              DEL MUNDO
            </div>
            <div className="v-rule" style={{ marginTop: "2rem", marginBottom: "1.2rem" }} />
            <div className="vd-source">Viva la libertad, carajo!</div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
