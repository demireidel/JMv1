import type { ReactNode } from "react";

// ── Logros ──────────────────────────────────────────────

export interface PobrezaCounter {
  target: number;
  suffix: string;
  decimals?: number;
  label: string;
  sub: string;
}

export interface PobrezaPill {
  val: string;
  lbl: string;
}

export interface PobrezaFlowCard {
  tag: string;
  big: string;
  desc: string;
}

export interface PobrezaData {
  badge: string;
  topbarNum: string;
  kicker: string;
  headline: string;
  headlineEm: string;
  counters: PobrezaCounter[];
  narrative: string[];
  flowBefore: PobrezaFlowCard;
  flowAfter: PobrezaFlowCard;
  pills: PobrezaPill[];
  quote: string;
  quoteAttr: string;
}

export interface BeforeAfter {
  label: string;
  val: string;
  desc: string;
}

export interface Logro {
  num: string;
  badge: string;
  title: string;
  paragraphs: string[];
  before: BeforeAfter;
  after: BeforeAfter;
  callout: string;
  gradient: string;
  imgBefore: string;
  imgAfter: string;
  altBefore: string;
  altAfter: string;
  reverse?: boolean;
}

// ── Reformas ────────────────────────────────────────────

export interface ImpactStat {
  val: string;
  label: string;
}

export interface ReformaQuote {
  text: string;
  cite: string;
}

export interface Reforma {
  num: string;
  icon?: string;
  title: string;
  subtitle: string;
  desc: ReactNode;
  antes: ReactNode;
  ahora: ReactNode;
  impactStats: ImpactStat[];
  impactText: ReactNode;
  quote?: ReformaQuote;
}

export interface ReformBlock {
  title: string;
  subtitle: string;
  range: [number, number];
}

export interface HeroCounter {
  num: string;
  label: string;
}

// ── Futuro ──────────────────────────────────────────────

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

// ── Mundo ───────────────────────────────────────────────

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

// ── Archivo ─────────────────────────────────────────────

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
  videoId?: string;
}

export interface Entrevista {
  date: string;
  outlet: string;
  journalist?: string;
  desc: string;
  highlight?: boolean;
  impact?: string;
  duration?: string;
  videoId?: string;
}

export interface Influencia {
  school: string;
  names: string;
  keyWork?: string;
}
