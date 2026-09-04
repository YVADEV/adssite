import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import AllOn4PageClient from "@/components/services/AllOn4PageClient";
import { JsonLd, breadcrumbLd, faqLd, serviceLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

const PATH = "/servicii/implant-dentar/all-on-4-all-on-6/";
const NAME = "All-on-4 / All-on-6";
const DESCRIPTION =
  "All-on-4 și All-on-6 la Cluj: dantură fixă pe implanturi, planificare digitală și laborator propriu, full digital. Echipă: chirurgie BMF, parodontologie, protetică.";

const faqItems = [
  {
    q: "Este dureroasă procedura?",
    a: "Intervenția se realizează sub anestezie locală, iar disconfortul postoperator este gestionat prin medicație antialgică.",
  },
  {
    q: "Cât durează tratamentul complet?",
    a: "Durata variază de la pacient la pacient, în funcție de planul stabilit digital la evaluarea inițială. Perioada de osteointegrare este, în medie, de 3–6 luni.",
  },
  {
    q: "Ce înseamnă că laboratorul e propriu și digital?",
    a: "Alverna Dental Studio are propriul laborator de tehnică dentară, în cadrul clinicii, unde lucrările protetice sunt proiectate și confecționate digital — de la scanare la frezare/printare — fără a fi trimise la un laborator extern.",
  },
  {
    q: "Care este diferența dintre All-on-4 și All-on-6?",
    a: "Numărul de implanturi folosite pentru susținerea arcadei. Alegerea depinde de calitatea și cantitatea osului disponibil, stabilită prin evaluarea digitală (CBCT).",
  },
  {
    q: "Se poate face procedura dacă am pierdut deja mult os?",
    a: "Depinde de fiecare caz — se stabilește după evaluarea digitală. În unele situații poate fi necesară o augmentare osoasă prealabilă.",
  },
  {
    q: "Este potrivită pentru pacienții din afara Clujului sau din străinătate?",
    a: "Da — planificarea digitală permite o organizare eficientă a etapelor tratamentului, utilă mai ales pentru pacienții care vin din alte orașe sau țări.",
  },
];

export const metadata: Metadata = {
  title: "All-on-4 / All-on-6 Cluj — Dantură fixă, flux 100% digital",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  keywords: [
    "All-on-4 Cluj",
    "All-on-6 Cluj",
    "dantură fixă Cluj",
    "implanturi All-on-4",
    "laborator digital stomatologie",
  ],
};

export default function AllOn4AllOn6Page() {
  const url = `${SITE_URL}${PATH}`;
  return (
    <PrototypeFrame>
      <JsonLd
        data={breadcrumbLd([
          { name: "Acasă", url: `${SITE_URL}/` },
          { name: "Servicii", url: `${SITE_URL}/servicii/` },
          { name: "Implant dentar", url: `${SITE_URL}/servicii/implant-dentar/` },
          { name: NAME, url },
        ])}
      />
      <JsonLd data={serviceLd({ name: NAME, description: DESCRIPTION, url })} />
      <JsonLd data={faqLd(faqItems)} />
      <AllOn4PageClient />
    </PrototypeFrame>
  );
}
