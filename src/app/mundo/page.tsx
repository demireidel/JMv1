import type { Metadata } from "next";
import Mundo from "@/components/sections/Mundo";

export const metadata: Metadata = {
  title: "Internacional",
  description:
    "Argentina en el mundo: acuerdos comerciales, relaciones bilaterales y posicionamiento global.",
};

export default function MundoPage() {
  return <Mundo />;
}
