import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import GutieraContentiePageClient from "@/components/services/GutieraContentiePageClient";
import { JsonLd, breadcrumbLd, faqLd, serviceLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

const PATH = "/servicii/aparat-dentar/gutiera-de-contentie/";
const NAME = "Gutieră de contenție";
const DESCRIPTION =
  "Gutiera de contenție în Cluj pentru menținerea rezultatului ortodontic. Soluție confortabilă, plan personalizat și monitorizare la Alverna Dental Studio.";

const faqItems = [
  {
    q: "Ce este gutiera de contenție?",
    a: "Gutiera de contenție este etapa finală a tratamentului ortodontic, menită să mențină dinții în poziția corectă și să prevină recidivarea.",
  },
  {
    q: "Cât timp trebuie purtată?",
    a: "Perioada diferă de la pacient la pacient. În general, inițial se poartă mai multe ore pe zi, apoi doar noaptea, conform recomandării medicului.",
  },
  {
    q: "Este greu de utilizat?",
    a: "Nu. Gutiera este detașabilă, ușor de aplicat și simplu de integrat în rutina zilnică.",
  },
  {
    q: "Cum se îngrijește corect?",
    a: "Se spală zilnic cu periuță și pastă de dinți sau săpun lichid, cu apă călduță (nu fierbinte), și se păstrează într-o cutie dedicată.",
  },
];

export const metadata: Metadata = {
  title: "Gutiera de contenție Cluj | Menținerea alinierii dentare | Alverna Dental Studio",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

export default function GutieraContentiePage() {
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
      <GutieraContentiePageClient />
    </PrototypeFrame>
  );
}
