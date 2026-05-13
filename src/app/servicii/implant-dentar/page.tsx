import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import ImplantDentarPageClient from "@/components/services/ImplantDentarPageClient";
import { JsonLd, breadcrumbLd, faqLd, serviceLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

const PATH = "/servicii/implant-dentar/";
const NAME = "Implant dentar";
const DESCRIPTION =
  "Implant dentar Cluj la Alverna Dental Studio: plan personalizat, tehnologii moderne, sisteme premium și rezultate funcționale și estetice de lungă durată.";

const faqItems = [
  {
    q: "Care sunt contraindicațiile implantului dentar?",
    a: "Contraindicațiile absolute sau relative includ boli hematologice severe, imunodeficiențe importante, unele patologii oncologice active, diabet necontrolat ori afecțiuni sistemice decompensate. Indicația se stabilește după evaluare medicală completă.",
  },
  {
    q: "Cât durează tratamentul cu implant dentar?",
    a: "Durata medie este între 3 și 6 luni, în funcție de vindecare, calitatea osului și eventuale proceduri adiacente (de exemplu augmentare osoasă sau tratamente parodontale).",
  },
  {
    q: "Este dureroasă intervenția?",
    a: "Inserarea implantului se face sub anestezie locală și este, în general, bine tolerată. Disconfortul post-operator este de obicei controlabil cu medicația recomandată.",
  },
  {
    q: "Care este rata de succes a implanturilor dentare?",
    a: "În cazurile corect planificate, cu igienă bună și controale regulate, rata de succes pe termen lung depășește frecvent 95%.",
  },
  {
    q: "Cât rezistă un implant dentar?",
    a: "Un implant dentar de calitate, întreținut corect, poate funcționa peste 20-25 de ani, iar în multe cazuri chiar pe termen foarte lung.",
  },
  {
    q: "Care este costul unui implant dentar la Alverna?",
    a: "Prețul pornește de la 400 EUR, în funcție de sistemul de implant, complexitatea cazului și necesitatea procedurilor adiacente. Devizul se stabilește transparent după consultație.",
  },
  {
    q: "Cum întrețin implantul pe termen lung?",
    a: "Periaj de două ori pe zi, curățare interdentară, igienizări profesionale la 3-6 luni și controale periodice pentru monitorizarea țesuturilor periimplantare.",
  },
  {
    q: "Ce restricții am după intervenție?",
    a: "În primele 24-48h sunt recomandate alimente moi, evitarea fumatului, alcoolului și efortului intens. Respectarea protocolului post-operator reduce riscul complicațiilor.",
  },
];

export const metadata: Metadata = {
  title: "Implant dentar Cluj | Implantologie premium | Alverna Dental Studio",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

export default function ImplantDentarPage() {
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
      <ImplantDentarPageClient />
    </PrototypeFrame>
  );
}
