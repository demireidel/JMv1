import type { Metadata } from "next";
import Futuro from "@/components/sections/Futuro";

export const metadata: Metadata = {
  title: "Futuro",
  description:
    "Proyectos estratégicos: Silicon Valley, Stargate AI, energía nuclear y Vaca Muerta.",
};

export default function FuturoPage() {
  return <Futuro />;
}
