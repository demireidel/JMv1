// ── Interfaces ──────────────────────────────────────────────

export interface GalleryPhoto {
  src: string;
  who: string;
  where: string;
  tag: string;
  pos: string;
}

export interface FuturoStat {
  val: string;
  label: string;
}

export interface FuturoQuote {
  text: string;
  cite: string;
}

export interface FuturoPhotoCard {
  src: string;
  alt: string;
  objectPosition: string;
  captionStrong: string;
  captionSpan: string;
  aspectRatio: string;
}

export interface SiliconValleyData {
  kicker: string;
  titleLine1: string;
  titleLine2Em: string;
  paragraphs: string[];
  stats: FuturoStat[];
  photo: FuturoPhotoCard;
}

export interface StargateData {
  kicker: string;
  titleLine1: string;
  titleLine2: string;
  paragraphs: string[];
  quote: FuturoQuote;
  stats: FuturoStat[];
  photo: FuturoPhotoCard;
}

export interface NuclearPhase {
  label: string;
  text: string;
}

export interface NuclearData {
  kicker: string;
  titleLine1: string;
  titleLine2: string;
  phases: NuclearPhase[];
  quote: FuturoQuote;
  closingParagraph: string;
  stats: FuturoStat[];
  photo: FuturoPhotoCard;
}

export interface VacaMuertaData {
  kicker: string;
  titleLine1: string;
  titleLine2Em: string;
  paragraphs: string[];
  stats: FuturoStat[];
  photo: FuturoPhotoCard;
}

export interface ClosingData {
  text: string;
  attr: string;
}

// ── Section header ──────────────────────────────────────────

export const futuroHeader = {
  sectionNumber: "04",
  sectionTitle: "ARGENTINA DEL FUTURO",
  introQuote: "Solo reencontrándonos con las verdades de nuestro pasado profundo podemos dar un salto hacia el futuro.",
  introText: "Cuatro pilares transforman a la Argentina en protagonista de la revolución tecnológica global: Silicon Valley, Stargate, energía nuclear e hidrocarburos.",
} as const;

// ── Gallery photos ──────────────────────────────────────────

export const galleryPhotos: GalleryPhoto[] = [
  { src: "/images/futuro/altman.jpg", who: "Milei con Sam Altman", where: "CEO de OpenAI — Silicon Valley, Mayo 2024", tag: "OpenAI", pos: "center 20%" },
  { src: "/images/futuro/meta-delegacion.jpg", who: "La delegación argentina con Mark Zuckerberg", where: "Sede de Meta, Menlo Park", tag: "Meta", pos: "center 18%" },
  { src: "/images/futuro/cook.jpg", who: "Milei con Tim Cook", where: "Apple Park, Cupertino", tag: "Apple", pos: "center 40%" },
  { src: "/images/futuro/andreessen.jpg", who: "Reidel y Travizano con Marc Andreessen", where: "Andreessen Horowitz (a16z)", tag: "a16z", pos: "center 12%" },
  { src: "/images/futuro/pichai.jpg", who: "Milei con Sundar Pichai", where: "Google HQ, Mountain View", tag: "Google", pos: "center 12%" },
  { src: "/images/futuro/google-delegacion.jpg", who: "Delegación argentina recibida en Google HQ", where: "Mountain View", tag: "Google", pos: "center 22%" },
];

// ── Dividers ────────────────────────────────────────────────

export const futuroDividers = [
  "Un año después, la semilla dio fruto",
  "La energía que lo hace posible",
  "La otra revolución energética",
] as const;

// ── 1. Silicon Valley ───────────────────────────────────────

export const siliconValley: SiliconValleyData = {
  kicker: "Mayo 2024 · Silicon Valley",
  titleLine1: "ARGENTINA COMO",
  titleLine2Em: "HUB GLOBAL DE IA",
  paragraphs: [
    "En mayo de 2024, el Presidente Milei realizó una gira histórica por Silicon Valley — la cuarta visita a Estados Unidos en cinco meses de gestión y la primera dedicada exclusivamente a tecnología. Acompañado por Demian Reidel y Matías Travizano, la semana incluyó reuniones cara a cara con Sam Altman (OpenAI), Sundar Pichai (Google), Tim Cook (Apple), Mark Zuckerberg (Meta) y Marc Andreessen (a16z).",
    "El pitch de Milei usó el modelo irlandés: así como Irlanda multiplicó su PBI per cápita atrayendo inversión tech, la Argentina ofrece algo que nadie más tiene — Patagonia con tierras vastas, clima frío, acceso al agua y energía limpia. Reidel complementó con su tesis geopolítica: Europa reguló, China es impredecible, y EEUU debate restricciones. Argentina, alineada con Washington y sin regulación hostil, es la alternativa creíble.",
    "La agenda fue implacable. El martes, reunión de una hora con Sam Altman donde OpenAI preparó una demostración exclusiva de inteligencia artificial. El miércoles, disertación en la Hoover Institution de Stanford junto a Condoleezza Rice y el rector Richard Saller, seguida de reuniones con Tim Cook en Apple Park y con Sundar Pichai en Google — donde un cartel decía «Bienvenido Javier Milei, Presidente de la República Argentina». El jueves, reunión con Zuckerberg en Meta, presentación ante inversores en el Pacific Summit del Bay Area Council, y encuentros con empresas emergentes de IA.",
    "Meses después, Reidel lo resumió en la SAIAConf: «Para el sector tecnológico mundial, Milei es como un héroe. Estos tipos no se juntan a sacarse fotos — se juntan porque piensan que hay algo importante para discutir.» Y añadió una anécdota reveladora: al terminar la reunión con Jeff Bezos de Amazon, fue Bezos quien le pidió una selfie al Presidente. La visita sembró la semilla de lo que un año después se convertiría en Stargate Argentina.",
  ],
  stats: [
    { val: "5", label: "CEOs reunidos" },
    { val: "4°", label: "Hub IA global" },
    { val: "2024", label: "Mayo · SF" },
  ],
  photo: {
    src: "/images/futuro/zuckerberg.jpg",
    alt: "Milei con Mark Zuckerberg",
    objectPosition: "center 25%",
    captionStrong: "Milei con Mark Zuckerberg",
    captionSpan: "Sede de Meta — Silicon Valley, Mayo 2024",
    aspectRatio: "16/9",
  },
};

// ── 2. Stargate ─────────────────────────────────────────────

export const stargate: StargateData = {
  kicker: "Octubre 2025 · Buenos Aires",
  titleLine1: "STARGATE",
  titleLine2: "ARGENTINA",
  paragraphs: [
    "El 10 de octubre de 2025, el Presidente Milei recibió en Casa Rosada a una delegación de OpenAI liderada por Chris Lehane, junto a Demian Reidel. Allí se firmó la carta de intención para el primer proyecto Stargate en América Latina — y el primero del programa «OpenAI for Countries».",
    "El megacentro de datos en la Patagonia tendrá capacidad de hasta 500 MW — el mayor de América Latina.",
    "La primera fase de 100 MW se proyecta para 2027. Más allá de la infraestructura, OpenAI se comprometió a desplegar ChatGPT personalizado para ciudadanos argentinos y a impulsar la adopción de IA en gobierno, educación y servicios públicos.",
    "El proyecto supone una inversión de hasta USD 25.000 millones bajo el régimen RIGI — la mayor iniciativa de tecnología e infraestructura energética en la historia de Argentina. Integra Stargate, la joint venture global de OpenAI, SoftBank, Oracle y MGX que planea invertir USD 500.000 millones en infraestructura de IA a nivel mundial. La primera fase, de USD 7.000 a 10.000 millones, contempla inicio de obras en 2026 y puesta en funcionamiento hacia fines de 2027.",
  ],
  quote: {
    text: "Cuando conocí al Presidente Milei durante su visita a San Francisco, su visión sobre cómo la IA puede impulsar el crecimiento de Argentina era inconfundible. Stargate Argentina no es solo infraestructura — es poner la inteligencia artificial en las manos de más personas en Argentina.",
    cite: "Sam Altman — CEO, OpenAI",
  },
  stats: [
    { val: "$25B", label: "Inversión USD" },
    { val: "500", label: "MW Capacidad" },
    { val: "2027", label: "Fase 1 · 100 MW" },
  ],
  photo: {
    src: "/images/futuro/stargate-casarosada.jpg",
    alt: "Milei y Reidel con delegación de OpenAI en Casa Rosada",
    objectPosition: "center 25%",
    captionStrong: "Milei y Demian Reidel reciben a delegación de OpenAI",
    captionSpan: "Casa Rosada — Octubre 2025",
    aspectRatio: "16/9",
  },
};

// ── 3. Nuclear ──────────────────────────────────────────────

export const nuclear: NuclearData = {
  kicker: "Energía estratégica · Tres fases",
  titleLine1: "EL MOTOR DETRÁS",
  titleLine2: "DE LA REVOLUCIÓN",
  phases: [
    {
      label: "Fase 1 — El reactor.",
      text: "El ACR-300, un reactor modular de 300 MW diseñado por ingenieros de INVAP y patentado en Estados Unidos. Se construirán cuatro módulos en Atucha duplicando la capacidad nuclear instalada del país a 1.200 MW adicionales. Argentina apunta a ser el primer país en vender SMRs comercialmente — y en noviembre de 2025 se convirtió en el primer país latinoamericano en adherirse al programa FIRST de Estados Unidos para desarrollo de reactores modulares.",
    },
    {
      label: "Fase 2 — El uranio.",
      text: "El «modelo Gillette»: vender reactores con compromiso de compra de uranio argentino. YPF creó la subsidiaria YPF Nuclear para liderar la explotación de Cerro Solo en Chubut, el mayor reservorio de uranio del país, junto a 18 iniciativas privadas adicionales. El objetivo: nunca más importar uranio para nuestros propios reactores.",
    },
    {
      label: "Fase 3 — Nuclear City.",
      text: "Un hub de data centers 100% libre de combustibles fósiles en la Patagonia, alimentado por energía nuclear. Según Goldman Sachs, los data centers requerirán entre 85 y 90 GW de nueva capacidad nuclear global — y Argentina, con tierras vastas, clima frío y acceso al agua, ofrece la combinación que ningún otro país tiene.",
    },
  ],
  quote: {
    text: "Con el ACR-300, vamos a ofrecerle al mundo una fuente de energía limpia, estable y escalable. Primero construimos. Después, licenciamos la tecnología al resto del mundo.",
    cite: "Demian Reidel — Presidente, Consejo Nuclear Argentino",
  },
  closingParagraph:
    "Milei lo anunció en cadena nacional: «Tenemos energía de sobra, tierras frías e inhóspitas de sobra, y recurso humano de calidad. Cuando en Argentina imperaron las ideas de la libertad, fuimos punta de lanza en tecnología — en 1900, teníamos la mayor red ferroviaria de América Latina. Que nadie se sorprenda si la Argentina se convierte en el próximo hub del mundo.»",
  stats: [
    { val: "4", label: "ACR-300 · Atucha" },
    { val: "1.2", label: "GW Adicionales" },
    { val: "2030", label: "Primer SMR" },
  ],
  photo: {
    src: "/images/futuro/plan-nuclear.jpg",
    alt: "Reidel, Milei y Grossi anuncian el Plan Nuclear Argentino",
    objectPosition: "center 35%",
    captionStrong: "Reidel, Milei y Grossi anuncian el Plan Nuclear Argentino",
    captionSpan: "Casa Rosada — Diciembre 2024",
    aspectRatio: "16/9",
  },
};

// ── 4. Vaca Muerta ──────────────────────────────────────────

export const vacaMuerta: VacaMuertaData = {
  kicker: "Récord histórico · 2025",
  titleLine1: "VACA MUERTA:",
  titleLine2Em: "EL GIGANTE DESPIERTA",
  paragraphs: [
    "En 2025, la Argentina superó el récord de producción petrolera de 1998 — un máximo que llevaba 27 años intacto. La producción alcanzó 869.000 barriles diarios con Vaca Muerta aportando el 65% del total nacional. El crecimiento shale fue del 33% interanual.",
    "Las cifras son contundentes. La Cuenca Neuquina concentró USD 10.000 millones en inversiones en 2025, con el 76% destinado a Vaca Muerta. YPF superó los 200.000 barriles diarios de shale oil propio — un crecimiento del 82% en dos años. Loma Campana se convirtió en el primer yacimiento argentino en romper la barrera de los 100.000 barriles diarios, con más de USD 10.000 millones invertidos y 750 pozos activos.",
    "Las exportaciones de crudo superaron los USD 6.000 millones. El superávit de la balanza comercial energética alcanzó USD 6.900 millones en 2025 — un 22% más que en 2024. El proyecto Argentina LNG proyecta exportar 12 millones de toneladas anuales de gas licuado desde Río Negro — USD 200.000 millones en exportaciones en 20 años. Es la segunda reserva mundial de gas shale y la cuarta de petróleo shale: el gigante despertó.",
  ],
  stats: [
    { val: "869K", label: "Barriles/día · Récord" },
    { val: "$10B", label: "Inversión 2025" },
    { val: "$6.9B", label: "Superávit energético" },
  ],
  photo: {
    src: "/images/futuro/vaca-muerta.jpg",
    alt: "Torre de perforación en Vaca Muerta, Neuquén",
    objectPosition: "center 30%",
    captionStrong: "Vaca Muerta — Neuquén, Patagonia",
    captionSpan: "2° reserva mundial de gas shale · 4° de petróleo shale",
    aspectRatio: "16/9",
  },
};

// ── Closing ─────────────────────────────────────────────────

export const futuroClosing: ClosingData = {
  text: "Silicon Valley abrió la puerta. Stargate trae la infraestructura. La energía nuclear y Vaca Muerta la alimentan. Argentina no será una observadora pasiva — está llamada a ser la arquitecta del futuro.",
  attr: "Demian Reidel",
};
