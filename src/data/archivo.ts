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
  desc?: string;
}

export interface Discurso {
  date: string;
  title: string;
  location: string;
  desc: string;
  keynote?: boolean;
  frase?: string;
  duration?: string;
  themes?: string[];
}

export interface Entrevista {
  date: string;
  outlet: string;
  journalist?: string;
  desc: string;
  highlight?: boolean;
  impact?: string;
  duration?: string;
}

export interface Influencia {
  school: string;
  names: string;
  keyWork?: string;
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
      { year: "2022", title: "El Fin de la Inflación", publisher: "Planeta", highlight: true, cover: "/images/books/fin-inflacion.jpg", desc: "Propuesta para cerrar el Banco Central y dolarizar. Escrito durante la campaña presidencial." },
      { year: "2024", title: "El Camino del Libertario", publisher: "Deusto (Planeta)", highlight: true, desc: "Mi pensamiento político. Bestseller internacional. Ediciones en español, inglés y portugués.", cover: "/images/books/camino-libertario.jpg" },
      { year: "2024", title: "Capitalismo, Socialismo y la Trampa Neoclásica", publisher: "Planeta", highlight: true, desc: "Presentado en el Luna Park con show musical. El argumento central contra la economía neoclásica.", cover: "/images/books/capitalismo-trampa.jpg" },
    ],
  },
];

export const papers: Paper[] = [
  { topic: "Reservas", title: "Política Fiscal y Nivel Óptimo de Reservas en Dos Modelos para una Economía sin Fricciones y Tipo de Cambio Fijo", desc: "Modelización del nivel óptimo de reservas bajo tipo de cambio fijo." },
  { topic: "Tipo de cambio", title: "Real Exchange Rate Targeting: ¿Trilema Monetario o Control de Capitales?", desc: "Análisis del trilema monetario en economías emergentes." },
  { topic: "Monetarismo", title: "Colección de cuatro ensayos: El Rol de las Reservas, Independencia del BCRA, La Visión Monetarista de la Inflación, La Inflación un Fenómeno Siempre Monetario", desc: "Serie de ensayos sobre política monetaria argentina y el fenómeno inflacionario." },
  { topic: "Competitividad", title: "El Termómetro de Riqueza: La \"q\" de Tobin, Competitividad y Crecimiento", coauthors: "Kerst", venue: "Jornadas Internacionales de Finanzas Públicas, UNC (2015)", desc: "Aplicación de la q de Tobin como indicador de competitividad y crecimiento económico." },
  { topic: "Reforma monetaria", title: "El Nuevo BCRA y la Reforma Monetaria", venue: "2015", desc: "Propuesta de reforma integral del Banco Central de la República Argentina." },
  { topic: "Economía abierta", title: "Ensayos Monetarios para Economías Abiertas: El Caso Argentino", venue: "Revista Actualidad Económica, UNC (2017)", desc: "Análisis monetario en el contexto de economías abiertas con aplicación al caso argentino." },
  { topic: "Política económica", title: "Los Molinos de Viento: Los Falsos Dilemas al Acecho del Crecimiento y el Bienestar", desc: "Desmontaje de falsos dilemas en política económica que obstaculizan el crecimiento." },
];

export const discursos: Discurso[] = [
  {
    date: "DIC 2023",
    title: "Discurso de Asunción Presidencial",
    location: "Escalinatas del Congreso de la Nación, Buenos Aires",
    duration: "~45 minutos",
    desc: "Decadencia argentina de 100 años. Necesidad del ajuste fiscal de 5 puntos del PBI. Shock vs. gradualismo. Herencia económica catastrófica. Liberalismo como camino de reconstrucción. Coincidencia con la fiesta de Hanukkah y la metáfora de la luz sobre la oscuridad.",
    frase: "Hoy comienza una nueva era en Argentina... damos por terminada una larga y triste historia de decadencia y declive.",
    themes: ["Ajuste fiscal", "Shock económico", "Liberalismo"],
    keynote: true,
  },
  {
    date: "ENE 2024",
    title: "Foro Económico Mundial — Davos I",
    location: "54.ª Reunión Anual del WEF, Davos, Suiza",
    desc: "\"Occidente está en peligro.\" Crítica al colectivismo. Defensa del capitalismo de libre mercado. Ataque a la justicia social como concepto violento. La fábrica de alfileres de Adam Smith y rendimientos crecientes a escala. Rechazo a la economía neoclásica como funcional al socialismo.",
    frase: "Occidente está en peligro. Y está en peligro porque quienes deberían defender los valores de Occidente se encuentran cooptados por una visión del mundo que conduce al socialismo.",
    themes: ["Capitalismo", "Anti-colectivismo", "Economía neoclásica"],
    keynote: true,
  },
  {
    date: "FEB 2024",
    title: "CPAC Washington 2024",
    location: "Conferencia Política de Acción Conservadora, Washington D.C.",
    desc: "Profundización técnica de los argumentos de Davos. Crítica a los fallos de mercado neoclásicos: monopolio, bienes públicos, externalidades, información asimétrica. El monopolio natural como falacia. La competencia como proceso dinámico.",
    themes: ["Fallos de mercado", "Monopolio natural", "Competencia dinámica"],
  },
  {
    date: "JUN 2024",
    title: "Instituto Liberal de Praga",
    location: "Praga, República Checa",
    desc: "\"El mayor ajuste fiscal de la historia de la humanidad.\" Conversión a la Escuela Austríaca. 3.200 reformas pendientes. Aspiración al Nobel de Economía junto a Demian Reidel. Comparación con el modelo irlandés.",
    frase: "Con mi jefe de asesores, el doctor Demian Reidel, estamos reescribiendo gran parte de la teoría económica.",
    themes: ["Ajuste fiscal", "Escuela Austríaca", "Modelo irlandés"],
  },
  {
    date: "SEP 2024",
    title: "Asamblea General de la ONU",
    location: "79.º Período de Sesiones, AGNU, Nueva York",
    desc: "Alerta sobre el fracaso de la ONU en su misión original. Rechazo a la Agenda 2030. Argentina como ejemplo de transformación. Defensa de la vida, la libertad y la propiedad privada como principios de política exterior.",
    frase: "No soy político, soy un economista liberal libertario que jamás tuvo la ambición de hacer política.",
    themes: ["ONU", "Agenda 2030", "Política exterior"],
    keynote: true,
  },
  {
    date: "ENE 2025",
    title: "Foro Económico Mundial — Davos II",
    location: "WEF, Davos, Suiza",
    desc: "\"Maquiavelo ha muerto.\" Eficiencia dinámica de Jesús Huerta de Soto. Ética y moral como criterio superior a la eficiencia. Rothbard y la ética de la libertad. Alianza internacional de naciones libres: Trump, Musk, Meloni, Bukele, Orbán, Netanyahu.",
    frase: "Maquiavelo ha muerto. La eficiencia sin moral es tiranía.",
    themes: ["Eficiencia dinámica", "Ética libertaria", "Alianza internacional"],
    keynote: true,
  },
  {
    date: "FEB 2025",
    title: "CPAC Washington 2025",
    location: "Washington D.C.",
    desc: "\"Punto de inflexión en la historia.\" Alianza de naciones libres como \"internacional de derecha\". Trump como outsider análogo. DOGE y resistencia burocrática. Caso de la familia Bibas y condena al terrorismo de Hamás. Necesidad de \"bien organizado contra mal organizado\".",
    themes: ["Internacional de derecha", "DOGE", "Anti-terrorismo"],
  },
  {
    date: "2025",
    title: "Premio Milton Friedman",
    location: "Roma, Italia",
    desc: "Su discurso más técnico como presidente — esencialmente una clase magistral de historia del pensamiento económico. Contribución de Friedman: función de consumo permanente, naturaleza monetaria de la inflación, curva de Phillips y expectativas racionales, modelos de crecimiento endógeno de Romer y Lucas Jr.",
    themes: ["Milton Friedman", "Pensamiento económico", "Crecimiento endógeno"],
    keynote: true,
  },
  {
    date: "SEP 2025",
    title: "Asamblea General de la ONU II",
    location: "80.º Período de Sesiones, AGNU, Nueva York",
    desc: "Cuatro principios para reformar la ONU: soberanía nacional, subsidiariedad internacional, diligencia institucional, simplificación normativa. Reclamo de Malvinas. Caso Nahuel Gallo en Venezuela. Rehenes en Gaza.",
    themes: ["Reforma ONU", "Malvinas", "Venezuela"],
  },
];

export const entrevistas: Entrevista[] = [
  {
    date: "SEP 2023",
    outlet: "Tucker Carlson",
    desc: "Pre-electoral. Carlson viajó a Buenos Aires. Inflación argentina, dolarización, cierre del Banco Central, socialismo y cambio climático. Consejo a Trump.",
    impact: "410M+ impresiones en X. Compartida por Elon Musk. Una de las entrevistas políticas más vistas de la historia digital.",
    highlight: true,
  },
  {
    date: "ABR 2024",
    outlet: "TIME Magazine",
    journalist: "Vera Bergengruen",
    desc: "Entrevista en Casa Rosada. \"Make Argentina Great Again.\" Historia argentina desde 1895. Shock vs. gradualismo. Dolarización. Relación con Trump y Musk. Modelo irlandés. Constitución de 1853. Perón como origen del populismo.",
    impact: "Portada de TIME. Listado entre las 100 personas más influyentes del mundo.",
    highlight: true,
  },
  {
    date: "MAY 2024",
    outlet: "BBC",
    journalist: "Ione Wells",
    duration: "+20 minutos",
    desc: "Ajuste económico y el intercambio viral sobre el precio de la leche. Relaciones con EE.UU., Israel y China. Malvinas: la visita de Cameron no era provocación. Elogio a Thatcher. Proceso de negociación de largo plazo por soberanía.",
  },
  {
    date: "NOV 2024",
    outlet: "Lex Fridman Podcast #453",
    duration: "~2 horas",
    desc: "Un día después de la gala de Trump en Mar-a-Lago. Conversión intelectual: lectura de Rothbard como punto de inflexión. La Acción Humana de Mises como revolución personal. Alberto Benegas Lynch. Resultados de gestión: inflación de 17.000% anual heredada reducida a 28%. 50.000 empleados públicos despedidos. Ministerios reducidos a la mitad. Pobreza de 57% a 46%. 3.200 reformas pendientes. Modelo irlandés. Musk como \"héroe en la historia de la humanidad\".",
    impact: "Disponible en español e inglés en X, YouTube y Spotify.",
    highlight: true,
  },
  {
    date: "DIC 2024",
    outlet: "Forbes Argentina",
    desc: "Última entrevista del año. Negación del atraso cambiario. Plan económico 2025: menos inflación, reducción impositiva, tres pasos para salir del cepo, privatizaciones, libre comercio con EE.UU. Rol de Karina Milei. Condiciones al PRO: \"juntos en todo o separados\".",
  },
  {
    date: "2024–25",
    outlet: "60 Minutes · The Economist · FT · WSJ",
    desc: "Cobertura en formato investigativo norteamericano (60 Minutes, CBS). Perfiles editoriales en profundidad (The Economist). Múltiples entrevistas sobre política económica (Financial Times). Cobertura de las reformas fiscales (Wall Street Journal).",
  },
  {
    date: "2025",
    outlet: "Juan Carlos de Pablo & Ezequiel Burgo",
    desc: "Cuatro entrevistas extensas que dieron origen al libro Tratando de Entender el Fenómeno Milei, centrado en la economía y el proceso decisorio presidencial.",
  },
];

export const influencias: Influencia[] = [
  { school: "Escuela Austríaca", names: "Ludwig von Mises · Friedrich Hayek · Murray Rothbard · Carl Menger · Jesús Huerta de Soto · Israel Kirzner", keyWork: "La Acción Humana (Mises), La Ética de la Libertad (Rothbard), Dinero, Crédito Bancario y Ciclos Económicos (Huerta de Soto)" },
  { school: "Monetarismo / Chicago", names: "Milton Friedman · Gary Becker · Robert Lucas Jr. · Paul Romer", keyWork: "La Desnacionalización del Dinero (Hayek), Teoría de los Precios (Friedman)" },
  { school: "Liberales argentinos", names: "Alberto Benegas Lynch (h) · Juan Bautista Alberdi", keyWork: "Bases y Puntos de Partida para la Organización Política (Alberdi, 1852)" },
  { school: "Contemporáneos", names: "Juan Ramón Rallo · Philipp Bagus · Walter Block", keyWork: "De Viena a Madrid: Ensayos en Honor de Jesús Huerta de Soto (Bagus, ed.)" },
];

export const reconocimientos: string[] = [
  "TIME 100 Most Influential People (2024)",
  "Portada de TIME (mayo 2024)",
  "Premio Milton Friedman — Roma (2025)",
  "Premio Instituto Liberal de la República Checa (2024)",
  "Record Guinness: Clase de economía más grande de la historia (2021)",
  "Doctor Honoris Causa — ESEADE",
  "Johns Hopkins: 2.º economista más influyente en habla hispana y EE.UU.",
  "Reunión con Robert C. Merton (Nobel 1997) en Olivos (diciembre 2025)",
  "Philippe Aghion (Nobel 2025) elogió las reformas en Foro Económico LAC 2026",
];

// ── Section metadata ────────────────────────────────────

export const archivoHeader = {
  sectionNumber: "06",
  sectionTitle: "ARCHIVO INTELECTUAL",
  sectionIntro: "Más de 50 artículos académicos, 7 libros, discursos que redefinieron el debate global y entrevistas con audiencias de cientos de millones. La producción intelectual completa de un presidente-economista sin precedentes.",
} as const;

export const collabProject = {
  badge: "EN PROGRESO",
  title: "Trabajo Teórico con Demian Reidel",
  desc: "Reescribir gran parte de la teoría económica para derivar optimalidad de Pareto \u2014 tanto estática como intertemporal \u2014 con funciones de producción no convexas. Un trabajo que, de completarse, resolvería la tensión entre la \u201Cfábrica de alfileres\u201D (rendimientos crecientes a escala) y la \u201Cmano invisible\u201D (equilibrio competitivo).",
  quote: "Con mi jefe de asesores, el doctor Demian Reidel, estamos reescribiendo gran parte de la teoría económica, para poder derivar optimalidad de Pareto, tanto estática como intertemporal, teniendo funciones de producción no convexas.",
  quoteCite: "Javier Milei \u2014 Instituto Liberal de Praga, 24 de junio de 2024",
} as const;

export const conversionQuote = {
  text: "Leyendo a Rothbard descubrí que lo que había enseñado sobre estructuras de mercado en microeconomía estaba equivocado. Luego leí La Acción Humana de Mises de principio a fin sin parar y experimenté una verdadera revolución en mi cabeza.",
  cite: "Javier Milei \u2014 Lex Fridman Podcast #453, noviembre 2024",
} as const;

export const edicionesNote = "Ediciones internacionales en portugués (Viva a Liberdade, Carajo!), inglés (The End of Inflation) y español peninsular (El Camino del Libertario, Deusto 2024). Prólogos en obras colectivas como De Viena a Madrid: Ensayos en Honor de Jesús Huerta de Soto (Unión Editorial), coordinado por Philipp Bagus." as const;
