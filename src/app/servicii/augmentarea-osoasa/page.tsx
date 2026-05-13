import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import AugmentareaOsoasaPageClient from "@/components/services/AugmentareaOsoasaPageClient";
import { JsonLd, breadcrumbLd, faqLd, serviceLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

const PATH = "/servicii/augmentarea-osoasa/";
const NAME = "Augmentare osoasă";
const DESCRIPTION =
  "Augmentare osoasă în Cluj pentru reconstrucția osului maxilar și susținerea implanturilor dentare. Tehnici moderne, materiale biocompatibile și plan personalizat la Alverna Dental Studio.";

const faqItems = [
  {
    q: "Ce se întâmplă în tot procesul de tratament?",
    a: "În prima etapă, medicul chirurg realizează o incizie gingivală pentru expunerea osului maxilar. Zona este pregătită, se aplică materialul biocompatibil de adiție, apoi gingia este suturată și protejată cu un baraj local.",
  },
  {
    q: "Care este gradul de disconfort?",
    a: "Procedura este complexă, dar disconfortul este redus, deoarece se efectuează sub anestezie locală. În situații speciale, poate fi luată în calcul și anestezia generală.",
  },
  {
    q: "Există riscuri asociate tratamentului de adiție osoasă?",
    a: "Ca orice intervenție chirurgicală, există riscuri minore și rare: inflamație locală temporară, infecție locală, respingerea grefei sau resorbție parțială a materialului. Cu protocoale corecte și monitorizare, acestea sunt bine controlate.",
  },
  {
    q: "Care este rata de succes a procedurii?",
    a: "Rata de succes este foarte ridicată, mai ales când procedura este realizată într-o clinică specializată, cu materiale de calitate, planificare corectă și respectarea indicațiilor post-operatorii.",
  },
  {
    q: "Cum decurge recuperarea după augmentarea osoasă?",
    a: "Vindecarea durează, de regulă, 4-6 luni. În primele 24-48 de ore pot apărea inflamație ușoară și disconfort local. Recomandările medicale privind igiena, dieta, medicația și controalele sunt esențiale pentru un rezultat optim.",
  },
  {
    q: "Ce responsabilități are pacientul?",
    a: "Pacientul trebuie să urmeze strict indicațiile medicului: igienă orală atentă, evitarea fumatului și alcoolului, respectarea medicației, prezentarea la controale și menținerea unui regim alimentar adecvat în perioada post-operatorie.",
  },
];

export const metadata: Metadata = {
  title: "Augmentare osoasă Cluj | Adiție de os | Alverna Dental Studio",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

export default function AugmentareaOsoasaPage() {
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
      <AugmentareaOsoasaPageClient />
    </PrototypeFrame>
  );
}
