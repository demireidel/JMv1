// ── Archivo Data ─────────────────────────────────────────

export interface Libro {
  year: string;
  title: string;
  coauthors?: string;
  publisher?: string;
  highlight?: boolean;
  desc?: string;
  cover?: string;
}

export interface Etapa {
  label: string;
  desc: string;
  books: Libro[];
}

export interface Paper {
  topic: string;
  title: string;
  coauthors?: string;
  venue?: string;
}

export interface Discurso {
  date: string;
  title: string;
  location: string;
  desc: string;
  keynote?: boolean;
  frase?: string;
}

export interface Entrevista {
  date: string;
  outlet: string;
  journalist?: string;
  desc: string;
  highlight?: boolean;
  impact?: string;
}

export interface Influencia {
  school: string;
  names: string;
}

// ── Data ────────────────────────────────────────────────

export const etapas: Etapa[] = [
  {
    label: "Etapa Técnica / Académica",
    desc: "pre-2014",
    books: [
      { year: "2014", title: "Lecturas de Economía en Tiempos del Kirchnerismo", publisher: "Grupo Unión", cover: "/images/books/lecturas-kirchnerismo.webp" },
    ],
  },
  {
    label: "Intervención Económica",
    desc: "2015–2020",
    books: [
      { year: "2015", title: "El Retorno al Sendero de la Decadencia Argentina", publisher: "Grupo Unión", cover: "/images/books/retorno-sendero.webp" },
      { year: "2017", title: "Desenmascarando la Mentira Keynesiana", publisher: "Grupo Unión", cover: "/images/books/mentira-keynesiana.webp" },
      { year: "2020", title: "Pandenomics", desc: "La economía que viene en tiempos de megarrecesión, inflación y crisis global.", cover: "/images/books/pandenomics.webp" },
    ],
  },
  {
    label: "Etapa Política / Presidencial",
    desc: "2021–presente",
    books: [
      { year: "2022", title: "El Fin de la Inflación", publisher: "Planeta", highlight: true, cover: "/images/books/fin-inflacion.jpg" },
      { year: "2024", title: "El Camino del Libertario", publisher: "Deusto (Planeta)", highlight: true, desc: "Mi pensamiento político. Bestseller internacional.", cover: "/images/books/camino-libertario.jpg" },
      { year: "2024", title: "Capitalismo, Socialismo y la Trampa Neoclásica", publisher: "Planeta", highlight: true, desc: "Presentado en el Luna Park con show musical.", cover: "/images/books/capitalismo-trampa.jpg" },
    ],
  },
];

export const papers: Paper[] = [
  { topic: "Reservas", title: "Política Fiscal y Nivel Óptimo de Reservas en Dos Modelos para una Economía sin Fricciones y Tipo de Cambio Fijo" },
  { topic: "Tipo de cambio", title: "Real Exchange Rate Targeting: ¿Trilema Monetario o Control de Capitales?" },
  { topic: "Monetarismo", title: "Colección de cuatro ensayos: El Rol de las Reservas, Independencia del BCRA, La Visión Monetarista de la Inflación, La Inflación un Fenómeno Siempre Monetario" },
  { topic: "Competitividad", title: 'El Termómetro de Riqueza: La "q" de Tobin, Competitividad y Crecimiento', coauthors: "Kerst", venue: "Jornadas Internacionales de Finanzas Públicas, UNC (2015)" },
  { topic: "Reforma monetaria", title: "El Nuevo BCRA y la Reforma Monetaria", venue: "2015" },
  { topic: "Economía abierta", title: "Ensayos Monetarios para Economías Abiertas: El Caso Argentino", venue: "Revista Actualidad Económica, UNC (2017)" },
  { topic: "Política económica", title: "Los Molinos de Viento: Los Falsos Dilemas al Acecho del Crecimiento y el Bienestar" },
];

export const discursos: Discurso[] = [
  {
    date: "DIC 2023",
    title: "Discurso de Asunción Presidencial",
    location: "Escalinatas del Congreso de la Nación, Buenos Aires",
    desc: "Decadencia argentina de 100 años. Ajuste fiscal de 5 puntos del PBI. Shock vs. gradualismo. La metáfora de Hanukkah y la luz sobre la oscuridad.",
    frase: "Hoy comienza una nueva era en Argentina... damos por terminada una larga y triste historia de decadencia y declive.",
    keynote: true,
  },
  {
    date: "ENE 2024",
    title: "Foro Económico Mundial — Davos I",
    location: "54.ª Reunión Anual del WEF, Davos, Suiza",
    desc: "\"Occidente está en peligro.\" Defensa del capitalismo de libre mercado. La fábrica de alfileres de Adam Smith y rendimientos crecientes a escala. Rechazo a la economía neoclásica como funcional al socialismo.",
    frase: "Occidente está en peligro. Y está en peligro porque quienes deberían defender los valores de Occidente se encuentran cooptados por una visión del mundo que conduce al socialismo.",
    keynote: true,
  },
  {
    date: "FEB 2024",
    title: "CPAC Washington 2024",
    location: "Conferencia Política de Acción Conservadora, Washington D.C.",
    desc: "Profundización técnica de Davos. Crítica a los fallos de mercado neoclásicos: monopolio, bienes públicos, externalidades, información asimétrica. El monopolio natural como falacia.",
  },
  {
    date: "JUN 2024",
    title: "Instituto Liberal de Praga",
    location: "Praga, República Checa",
    desc: "\"El mayor ajuste fiscal de la historia de la humanidad.\" 3.200 reformas pendientes. Modelo irlandés. Anuncio de trabajo teórico junto a Demian Reidel.",
    frase: "Con mi jefe de asesores, el doctor Demian Reidel, estamos reescribiendo gran parte de la teoría económica.",
  },
  {
    date: "SEP 2024",
    title: "Asamblea General de la ONU",
    location: "79.º Período de Sesiones, AGNU, Nueva York",
    desc: "Fracaso de la ONU en su misión original. Rechazo a la Agenda 2030. Defensa de la vida, la libertad y la propiedad privada como principios de política exterior.",
    frase: "No soy político, soy un economista liberal libertario que jamás tuvo la ambición de hacer política.",
    keynote: true,
  },
  {
    date: "ENE 2025",
    title: "Foro Económico Mundial — Davos II",
    location: "WEF, Davos, Suiza",
    desc: "\"Maquiavelo ha muerto.\" Eficiencia dinámica de Jesús Huerta de Soto. Ética y moral como criterio superior a la eficiencia. Alianza internacional de naciones libres.",
    keynote: true,
  },
  {
    date: "FEB 2025",
    title: "CPAC Washington 2025",
    location: "Washington D.C.",
    desc: "\"Punto de inflexión en la historia.\" DOGE y resistencia burocrática. Trump como outsider análogo. La internacional de la derecha. Caso de la familia Bibas.",
  },
  {
    date: "2025",
    title: "Premio Milton Friedman",
    location: "Roma, Italia",
    desc: "Su discurso más técnico como presidente. Clase magistral: función de consumo permanente, naturaleza monetaria de la inflación, curva de Phillips y expectativas racionales, modelos de crecimiento endógeno de Romer y Lucas Jr.",
    keynote: true,
  },
  {
    date: "SEP 2025",
    title: "Asamblea General de la ONU II",
    location: "80.º Período de Sesiones, AGNU, Nueva York",
    desc: "Cuatro principios para reformar la ONU: soberanía nacional, subsidiariedad internacional, diligencia institucional, simplificación normativa. Reclamo de Malvinas. Caso Nahuel Gallo.",
  },
];

export const entrevistas: Entrevista[] = [
  {
    date: "SEP 2023",
    outlet: "Tucker Carlson",
    desc: "Pre-electoral. Inflación, dolarización, cierre del Banco Central, socialismo y cambio climático. Consejo a Trump.",
    impact: "410M+ impresiones en X. Compartida por Elon Musk. Una de las entrevistas políticas más vistas de la historia digital.",
    highlight: true,
  },
  {
    date: "ABR 2024",
    outlet: "TIME Magazine",
    journalist: "Vera Bergengruen",
    desc: "\"Make Argentina Great Again.\" Historia argentina desde 1895. Shock vs. gradualismo. Modelo irlandés. Constitución de 1853. Perón como origen del populismo.",
    impact: "Portada de TIME. Listado entre las 100 personas más influyentes del mundo.",
    highlight: true,
  },
  {
    date: "MAY 2024",
    outlet: "BBC",
    journalist: "Ione Wells",
    desc: "Ajuste económico y el intercambio viral sobre el precio de la leche. Elogio a Thatcher. Proceso de negociación de largo plazo por Malvinas.",
  },
  {
    date: "NOV 2024",
    outlet: "Lex Fridman Podcast #453",
    desc: "2 horas. Conversión intelectual: lectura de Rothbard como punto de inflexión, La Acción Humana de Mises. Resultados de gestión. 3.200 reformas. Musk como \"héroe en la historia de la humanidad\".",
    impact: "Disponible en español e inglés en X, YouTube y Spotify.",
    highlight: true,
  },
  {
    date: "DIC 2024",
    outlet: "Forbes Argentina",
    desc: "Última entrevista del año. Plan 2025: menos inflación, reducción impositiva, tres pasos para salir del cepo, privatizaciones, libre comercio con EE.UU. Rol de Karina Milei.",
  },
  {
    date: "2024–25",
    outlet: "60 Minutes · The Economist · FT · WSJ",
    desc: "Cobertura en formato investigativo de las principales publicaciones económicas del mundo. Perfiles editoriales en profundidad sobre las reformas fiscales.",
  },
];

export const influencias: Influencia[] = [
  { school: "Escuela Austríaca", names: "Ludwig von Mises · Friedrich Hayek · Murray Rothbard · Carl Menger · Jesús Huerta de Soto · Israel Kirzner" },
  { school: "Monetarismo / Chicago", names: "Milton Friedman · Gary Becker · Robert Lucas Jr. · Paul Romer" },
  { school: "Liberales argentinos", names: "Alberto Benegas Lynch (h) · Juan Bautista Alberdi" },
  { school: "Contemporáneos", names: "Juan Ramón Rallo · Philipp Bagus · Walter Block" },
];

export const reconocimientos: string[] = [
  "TIME 100 Most Influential People (2024)",
  "Portada de TIME (mayo 2024)",
  "Premio Milton Friedman — Roma (2025)",
  "Premio Instituto Liberal de la República Checa (2024)",
  "Record Guinness: Clase de economía más grande de la historia (2021)",
  "Doctor Honoris Causa — ESEADE",
  "Johns Hopkins: 2.º economista más influyente en habla hispana y EE.UU.",
];

// ── Section metadata ────────────────────────────────────

export const archivoHeader = {
  sectionNumber: "06",
  sectionTitle: "ARCHIVO INTELECTUAL",
  sectionIntro: "Más de 50 artículos académicos, 14 libros, discursos que redefinieron el debate global y entrevistas con audiencias de cientos de millones. La producción intelectual completa de un presidente-economista sin precedentes.",
} as const;

export const collabProject = {
  badge: "EN PROGRESO",
  title: "Trabajo Teórico con Demian Reidel",
  desc: "Reescribir gran parte de la teoría económica para derivar optimalidad de Pareto \u2014 tanto estática como intertemporal \u2014 con funciones de producción no convexas. Un trabajo que, de completarse, resolvería la tensión entre la \u201Cfábrica de alfileres\u201D (rendimientos crecientes a escala) y la \u201Cmano invisible\u201D (equilibrio competitivo).",
  quote: "Con mi jefe de asesores, el doctor Demian Reidel, estamos reescribiendo gran parte de la teoría económica.",
  quoteCite: "Javier Milei \u2014 Instituto Liberal de Praga, junio 2024",
} as const;

export const conversionQuote = {
  text: "Leyendo a Rothbard descubrí que lo que había enseñado sobre estructuras de mercado en microeconomía estaba equivocado. Luego leí La Acción Humana de Mises de principio a fin sin parar y experimenté una verdadera revolución en mi cabeza.",
  cite: "Javier Milei \u2014 Lex Fridman Podcast #453",
} as const;

export const edicionesNote = "Ediciones internacionales en portugués (Viva a Liberdade, Carajo!), inglés (The End of Inflation) y español peninsular (El Camino del Libertario, Deusto 2024). Prólogos en obras colectivas como De Viena a Madrid (Unión Editorial)." as const;
