import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import ProfilaxiePageClient from "@/components/services/ProfilaxiePageClient";
import { JsonLd, breadcrumbLd, faqLd, serviceLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

const PATH = "/servicii/profilaxie/";
const NAME = "Profilaxie dentară";
const DESCRIPTION =
  "Profilaxie dentară în Cluj la Alverna Dental Studio: detartraj, periaj profesional, Air-flow, fluorizare și plan personalizat de prevenție pentru sănătate orală pe termen lung.";

const faqItems = [
  {
    q: "La ce interval este recomandată profilaxia dentară?",
    a: "În general la 6 luni, dar în funcție de riscul individual (parodontopatii, fumători, acumulare rapidă de tartru) poate fi recomandată la 3-4 luni.",
  },
  {
    q: "Detartrajul este dureros?",
    a: "De regulă nu. În anumite cazuri poate apărea un disconfort ușor sau sensibilitate temporară, controlabilă prin recomandările medicului.",
  },
  {
    q: "Ce include o ședință completă de profilaxie?",
    a: "Evaluare, detartraj, periaj profesional, Air-flow și, în funcție de indicație, fluorizare sau sigilare. Protocolul este adaptat fiecărui pacient.",
  },
  {
    q: "Profilaxia este utilă și pentru copii?",
    a: "Da. Pentru copii sunt importante controalele regulate, sigilarea și fluorizarea, plus educația corectă pentru igienă orală zilnică.",
  },
  {
    q: "Există contraindicații sau limite?",
    a: "Anumite proceduri (de exemplu fluorizarea) se adaptează la istoricul medical și sensibilitatea pacientului. De aceea evaluarea inițială este esențială.",
  },
  {
    q: "Profilaxia înlocuiește periajul de acasă?",
    a: "Nu. Profilaxia profesională completează rutina zilnică de igienă, nu o înlocuiește. Combinația celor două oferă cea mai bună protecție.",
  },
];

export const metadata: Metadata = {
  title: "Profilaxie dentară Cluj | Detartraj și prevenție | Alverna Dental Studio",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

export default function ProfilaxiePage() {
  const url = `${SITE_URL}${PATH}`;
  return (
    <PrototypeFrame>
      <JsonLd
        data={breadcrumbLd([
          { name: "Acasă", url: `${SITE_URL}/` },
          { name: "Servicii", url: `${SITE_URL}/servicii/` },
          { name: NAME, url },
        ])}
      />
      <JsonLd data={serviceLd({ name: NAME, description: DESCRIPTION, url })} />
      <JsonLd data={faqLd(faqItems)} />
      <ProfilaxiePageClient />
    </PrototypeFrame>
  );
}
