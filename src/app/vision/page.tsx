import type { Metadata } from "next";
import Vision from "@/components/sections/Vision";

export const metadata: Metadata = {
  title: "Visión y Filosofía",
  description:
    "La visión filosófica y los principios que guían el gobierno del Presidente Javier Milei.",
};

export default function VisionPage() {
  return <Vision />;
}
