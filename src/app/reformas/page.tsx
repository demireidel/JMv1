import type { Metadata } from "next";
import Reformas from "@/components/sections/Reformas";

export const metadata: Metadata = {
  title: "Reformas",
  description:
    "Las reformas estructurales del gobierno: estabilización, desregulación, legislación y seguridad.",
};

export default function ReformasPage() {
  return <Reformas />;
}
