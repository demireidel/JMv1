import type { Metadata } from "next";
import { Source_Sans_3, Playfair_Display, Bebas_Neue } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Javier Milei — Presidente de la Nación Argentina",
  description:
    "La libertad avanza. Argentina será el país más libre del mundo.",
  openGraph: {
    title: "Javier Milei — Presidente de la Nación Argentina",
    description:
      "La libertad avanza. Visión, logros, reformas y el futuro de Argentina.",
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: "https://english.news.cn/20231211/fbb053d019cb4fe892fb746da14e1ed4/4bc8c6ffb5ee4b1ba05998350f9dc353.jpg",
        width: 1200,
        height: 630,
        alt: "Presidente Javier Milei",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Javier Milei — Presidente de la Nación Argentina",
    description: "La libertad avanza. Argentina será el país más libre del mundo.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${sourceSans.variable} ${playfair.variable} ${bebas.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
