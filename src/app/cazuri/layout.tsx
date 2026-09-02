import type { Metadata } from "next";
import type { ReactNode } from "react";

const PATH = "/cazuri/";
const DESCRIPTION =
  "Cazuri reale documentate în clinică: implantologie, estetică dentară, reabilitări protetice și smile design. Rezultate înainte și după, cu plan de tratament clar.";

export const metadata: Metadata = {
  title: "Studii de caz stomatologice | Înainte și după",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

export default function CazuriLayout({ children }: { children: ReactNode }) {
  return children;
}
