import type { Metadata, Viewport } from "next";
import { Source_Sans_3, Playfair_Display, Bebas_Neue } from "next/font/google";
import "./globals.css";

/* ── Fonts ─────────────────────────────────────────────── */

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

/* ── Viewport ──────────────────────────────────────────── */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0f",
  colorScheme: "dark",
};

/* ── Metadata ──────────────────────────────────────────── */

const title = "Javier Milei — Presidente de la Nación Argentina";
const description = "La libertad avanza. Argentina será el país más libre del mundo.";
const ogImage = "/images/banco/hero-balcon.jpg";

export const metadata: Metadata = {
  title,
  description,
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description: "La libertad avanza. Visión, logros, reformas y el futuro de Argentina.",
    type: "website",
    locale: "es_AR",
    siteName: title,
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Presidente Javier Milei" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: { icon: "/favicon.ico" },
};

/* ── Layout ────────────────────────────────────────────── */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${sourceSans.variable} ${playfair.variable} ${bebas.variable}`}
    >
      <body className="film-grain">
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
