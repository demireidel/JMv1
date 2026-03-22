import type { Metadata } from "next";
import Archivo from "@/components/sections/Archivo";

export const metadata: Metadata = {
  title: "Archivo Intelectual",
  description:
    "Archivo intelectual: libros, artículos académicos, discursos y entrevistas del Presidente Milei.",
};

export default function ArchivoPage() {
  return <Archivo />;
}
