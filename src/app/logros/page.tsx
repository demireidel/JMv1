import type { Metadata } from "next";
import Logros from "@/components/sections/Logros";

export const metadata: Metadata = {
  title: "Logros",
  description:
    "Los logros concretos del gobierno del Presidente Javier Milei: reducción de pobreza, desinflación, equilibrio fiscal y más.",
};

export default function LogrosPage() {
  return <Logros />;
}
