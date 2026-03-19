// ── Mundo Data ───────────────────────────────────────────

export interface Leader {
  flag: string;
  name: string;
  role: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  desc: string;
}

export interface MegaStat {
  value: string;
  label: string;
  detail: string;
  animated?: {
    target: number;
    prefix?: string;
    suffix?: string;
    formatDot?: boolean;
  };
}

export interface TradeAgreement {
  tag: string;
  title: string;
  description: string;
  keyFacts: { text: string; color: "gold" | "blue" | "green" }[];
  image: string;
  imageAlt: string;
  badge: string;
  reverse?: boolean;
}

export interface CooperationItem {
  icon: string;
  title: string;
  desc: string;
}

// ── Data ────────────────────────────────────────────────

export const leaders: Leader[] = [
  { flag: "🇺🇸", name: "Donald Trump", role: "Presidente de EE.UU." },
  { flag: "🇮🇹", name: "Giorgia Meloni", role: "Primera Ministra de Italia" },
  { flag: "🇫🇷", name: "Emmanuel Macron", role: "Presidente de Francia" },
  { flag: "🇮🇱", name: "Benjamin Netanyahu", role: "PM de Israel" },
  { flag: "🇺🇸", name: "Elon Musk", role: "Tesla, X, SpaceX" },
  { flag: "🇺🇸", name: "Sam Altman", role: "CEO de OpenAI" },
  { flag: "🇺🇸", name: "Tim Cook", role: "CEO de Apple" },
  { flag: "🇺🇸", name: "Mark Zuckerberg", role: "CEO de Meta" },
  { flag: "🇸🇻", name: "Nayib Bukele", role: "Presidente de El Salvador" },
  { flag: "🌐", name: "K. Georgieva", role: "Directora del FMI" },
  { flag: "🇺🇸", name: "Jamie Dimon", role: "CEO de JP Morgan" },
  { flag: "🇺🇸", name: "Sundar Pichai", role: "CEO de Google" },
  { flag: "🇺🇸", name: "Scott Bessent", role: "Secretario del Tesoro" },
  { flag: "🇨🇱", name: "José A. Kast", role: "Presidente de Chile" },
  { flag: "🇭🇺", name: "Viktor Orbán", role: "PM de Hungría" },
];

export const timeline: TimelineEvent[] = [
  { date: "ENE 2024", title: "Davos I", desc: "Primer discurso ante el WEF. Argentina vuelve a la mesa global." },
  { date: "ABR 2025", title: "Acuerdo FMI — USD 20.000M", desc: "Programa de 48 meses. Primer desembolso de USD 12.000M. Nuevo régimen cambiario." },
  { date: "JUL 2025", title: "1ª Revisión FMI aprobada", desc: "Desembolso adicional de USD 2.000M. Retorno a mercados de capital." },
  { date: "SEP 2025", title: "TLC Mercosur — EFTA firmado", desc: "Zona de 300M de personas. 100% arancel cero industrial." },
  { date: "OCT 2025", title: "Swap USD 20.000M con EE.UU.", desc: "Bessent activa Fondo de Estabilización. Compra de bonos soberanos argentinos." },
  { date: "OCT 2025", title: "Casa Blanca — Bilateral formal", desc: "Primer líder sudamericano recibido por Trump. Almuerzo con delegaciones. Salón Oval." },
  { date: "NOV 2025", title: "Marco del Acuerdo Comercial con EE.UU.", desc: "Casa Blanca anuncia el framework bilateral. Inicio de negociación de detalles." },
  { date: "ENE 2026", title: "Firma Mercosur — UE en Asunción", desc: "Acuerdo de Asociación + Acuerdo Comercial Interino. 700M de personas. 30% PBI global." },
  { date: "ENE 2026", title: "Davos III + Board of Peace", desc: "Tercer Special Address consecutivo. Firma del Board of Peace junto a Trump." },
  { date: "FEB 2026", title: "Firma TLC Argentina — EE.UU.", desc: "Primer TLC entre EE.UU. y país sudamericano. 1.675 productos sin arancel. Acuerdo de minerales críticos." },
  { date: "MAR 2026", title: "Shield of the Americas", desc: "Coalición de 12 naciones en Miami. Seguridad hemisférica contra el narcoterrorismo." },
  { date: "MAR 2026", title: "Argentina Week NYC", desc: "300+ empresarios. Inauguración con Jamie Dimon (JP Morgan). Gobernadores promocionando inversión." },
];

export const megaStats: MegaStat[] = [
  {
    value: "1er",
    label: "País sudamericano",
    detail: "en firmar un TLC bilateral con EE.UU. en la historia — lo que ningún gobierno logró en 200 años",
  },
  {
    value: "1.675",
    label: "Productos argentinos",
    detail: "con aranceles eliminados hacia EE.UU. + 221 posiciones norteamericanas con arancel cero recíproco",
    animated: { target: 1675, formatDot: true },
  },
  {
    value: "$1.013M",
    label: "Exportaciones recuperadas",
    detail: "en acceso directo al mercado de consumo más grande del mundo — USD 28T de PBI",
    animated: { target: 1013, prefix: "$", suffix: "M" },
  },
  {
    value: "100K tn",
    label: "Carne bovina",
    detail: "cuota libre de arancel — la mayor concesión cárnica bilateral de EE.UU.",
    animated: { target: 100, suffix: "K tn" },
  },
  {
    value: "92%",
    label: "Aranceles eliminados",
    detail: "por la UE para exportaciones del Mercosur — mercado de 700M de personas",
    animated: { target: 92, suffix: "%" },
  },
];

export const tradeAgreements: TradeAgreement[] = [
  {
    tag: "Acuerdo Bilateral Histórico",
    title: "Acuerdo de Comercio e Inversión Recíproco con Estados Unidos",
    description:
      "Primer acuerdo de libre comercio entre EE.UU. y un país sudamericano en la historia. Eliminación de aranceles recíprocos para 1.675 productos argentinos y 221 posiciones norteamericanas. Cuota preferencial de 100.000 toneladas de carne bovina sin arancel — la mayor concesión cárnica otorgada por EE.UU. en un tratado bilateral. Compromiso de revisión conjunta de aranceles al acero (sección 232) y aluminio, con cronograma de desgravación progresiva. Financiamiento vía EXIM Bank y DFC (Development Finance Corporation) para inversiones en minerales críticos, energía, infraestructura y data centers. Incluye capítulos de propiedad intelectual, facilitación aduanera digital y mecanismo de solución de controversias inversor-Estado.",
    keyFacts: [
      { text: "USD 1.013M en exportaciones", color: "gold" },
      { text: "1.675 + 221 posiciones sin arancel", color: "blue" },
      { text: "100K tn carne bovina cuota libre", color: "green" },
      { text: "EXIM Bank + DFC financiamiento", color: "gold" },
    ],
    image: "/images/strip/milei-bilateral.jpg",
    imageAlt: "Acuerdo Argentina-EE.UU.",
    badge: "🇺🇸🇦🇷 Firmado Feb 2026",
  },
  {
    tag: "Acuerdo de Asociación",
    title: "Mercosur — Unión Europea: mercado de 700 millones de personas",
    description:
      "Tras 25 años de negociación, el acuerdo más ambicioso entre bloques regionales se firmó en enero 2026 en la Cumbre de Asunción. La UE eliminará aranceles para el 92% de las exportaciones del Mercosur. Según proyecciones oficiales, las exportaciones argentinas a la UE crecerían 76% en 5 años (de USD 8.641M a USD 15.208M) y 122% en 10 años (hasta USD 19.165M). El acuerdo se estructura en tres pilares: comercial (desgravación arancelaria, compras públicas, servicios e inversiones), político (diálogo institucionalizado, derechos humanos, no proliferación) y de cooperación (ciencia, tecnología, medio ambiente, educación y desarrollo sostenible). Crea un mercado integrado de 700 millones de personas que representa el 30% del PBI mundial.",
    keyFacts: [
      { text: "700 millones de consumidores", color: "gold" },
      { text: "De USD 8.641M a 19.165M", color: "blue" },
      { text: "+76% en 5 años / +122% en 10", color: "green" },
    ],
    image: "/images/strip/g20-familia.jpg",
    imageAlt: "Mercosur-UE",
    badge: "🇪🇺 Firmado Ene 2026",
    reverse: true,
  },
  {
    tag: "Tratado de Libre Comercio",
    title: "Mercosur — EFTA: Suiza, Noruega, Islandia y Liechtenstein",
    description:
      "Firmado en Río de Janeiro en septiembre 2025 tras 8 años de negociación, este tratado otorga acceso preferencial al bloque de mayor renta per cápita del mundo. EFTA eliminará el 100% de los aranceles a productos industriales y pesqueros del Mercosur. Preferencias inmediatas para carne bovina, café, etanol, vino, miel y cítricos. Incluye capítulos de servicios, inversiones, compras públicas, propiedad intelectual y desarrollo sostenible. Crea una zona de libre comercio de 300 millones de personas con un PBI combinado de USD 4,3 billones. Argentina fue sede de las tres últimas rondas de negociación en Buenos Aires, impulsando el cierre del acuerdo más rápido entre los firmados por el Mercosur.",
    keyFacts: [
      { text: "300M de consumidores", color: "gold" },
      { text: "100% arancel cero industrial", color: "blue" },
      { text: "USD 4,3B PBI combinado", color: "green" },
    ],
    image: "/images/vision/europa-viva-24.jpg",
    imageAlt: "Mercosur-EFTA",
    badge: "🇨🇭🇳🇴 Firmado Sep 2025",
  },
];

export const financialSupport = {
  tag: "Respaldo Financiero",
  title: "Acuerdo FMI por USD 20.000M + Swap del Tesoro de EE.UU. por USD 20.000M",
  description:
    "En abril 2025, el FMI aprobó un programa de 48 meses por USD 20.000M bajo el Servicio Ampliado (Extended Fund Facility), con un primer desembolso histórico de USD 12.000M — el más grande otorgado por el Fondo en un solo giro. El programa habilitó un nuevo régimen cambiario de banda de flotación, reemplazando el crawling peg. En paralelo, el Tesoro de EE.UU. activó por primera vez para un país latinoamericano un paquete integral: swap de divisas por USD 20.000M a través del Fondo de Estabilización Cambiaria (ESF), compra directa de bonos soberanos argentinos y crédito stand-by del Tesoro. Primera revisión aprobada en julio 2025 con desembolso adicional de USD 2.000M. Argentina retornó a los mercados internacionales de capital antes de lo previsto, colocando deuda soberana con spreads en mínimos históricos desde 2018.",
  keyFacts: [
    { text: "USD 40.000M en respaldo total", color: "gold" as const },
    { text: "Banda cambiaria flexible", color: "blue" as const },
    { text: "Retorno a mercados de capital", color: "green" as const },
  ],
  image: "/images/strip/acuerdo-intl.jpg",
  imageAlt: "Acuerdo financiero",
};

export const cooperationGrid: CooperationItem[] = [
  { icon: "🛡️", title: "Escudo de las Américas", desc: "Coalición hemisférica de 12 naciones contra el narcoterrorismo e interferencia extranjera. Co-liderada con EE.UU. Firmada en Miami, marzo 2026." },
  { icon: "⚡", title: "RIGI — Grandes Inversiones", desc: "Régimen de incentivos para inversiones estratégicas en energía, minería, tecnología e infraestructura. Vaca Muerta, GNL, litio y data centers de IA." },
  { icon: "🤖", title: "Hub de Inteligencia Artificial", desc: "Reuniones con los 7 CEOs más influyentes de Silicon Valley (Apple, Meta, Tesla, OpenAI, Google, Amazon, a16z). Stargate Argentina: primer proyecto fuera de EE.UU. con inversión de hasta USD 25.000M." },
  { icon: "⚛️", title: "Plan Nuclear + SMR", desc: "Reactivación de Nucleoeléctrica Argentina. Plan de reactores modulares pequeños (SMR) para data centers y energía limpia. Cooperación con EE.UU." },
  { icon: "🔗", title: "Minerales Críticos", desc: "Acuerdo bilateral con EE.UU. sobre litio, tierras raras y cadenas de suministro. Reciclaje de baterías y seguridad de inversiones conjuntas." },
  { icon: "🌍", title: "Seguridad Económica", desc: "Alineamiento con EE.UU. en controles de exportación, seguridad de inversiones y protección frente a prácticas no mercantiles de terceros estados." },
];

// ── Section metadata ────────────────────────────────────

export const mundoHero = {
  imgSrc: "/images/strip/bilateral-casablanca.jpg",
  imgAlt: "Argentina en el mundo",
  subtitle: "Sección 05 — Inserción Internacional",
  titleLine1: "ARGENTINA",
  titleLine2: "EN EL MUNDO",
} as const;

export const acuerdosHeader = {
  sectionNumber: "05",
  sectionTitle: "ACUERDOS COMERCIALES",
  sectionIntro: "En dos años, Argentina firmó tres acuerdos de libre comercio históricos que abren mercados para más de mil millones de consumidores.",
} as const;

export const cooperacionHeader = {
  sectionNumber: "05",
  sectionTitle: "COOPERACIÓN Y FINANCIAMIENTO",
  sectionIntro: "Argentina aseguró respaldo financiero histórico, cooperación en seguridad hemisférica, y posicionamiento como destino de inversión en energía e inteligencia artificial.",
} as const;
