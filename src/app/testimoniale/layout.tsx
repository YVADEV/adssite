import type { Metadata } from "next";
import type { ReactNode } from "react";

const PATH = "/testimoniale/";
const DESCRIPTION =
  "Păreri și experiențe ale pacienților Alverna Dental Studio Cluj: profesionalism, comunicare clară și tratamente confortabile. Feedback real din România și din străinătate.";

export const metadata: Metadata = {
  title: "Testimoniale pacienți | Recenzii Alverna Dental Studio Cluj",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

export default function TestimonialeLayout({ children }: { children: ReactNode }) {
  return children;
}
