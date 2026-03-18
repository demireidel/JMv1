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
      <body>{children}</body>
    </html>
  );
}
