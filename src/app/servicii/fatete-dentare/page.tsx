import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import FateteDentarePageClient from "@/components/services/FateteDentarePageClient";
import { JsonLd, breadcrumbLd, faqLd, serviceLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

const PATH = "/servicii/fatete-dentare/";
const NAME = "Fațete dentare";
const DESCRIPTION =
  "Aplicare fațete dentare în Cluj pentru corectarea formei și culorii dinților. Soluții premium, materiale biocompatibile și rezultate naturale la Alverna Dental Studio.";

const faqItems = [
  {
    q: "Când am nevoie de fațete dentare?",
    a: "Când doriți corectarea culorii, formei sau alinierii vizuale a dinților frontali. Indicația se stabilește împreună cu medicul, după consultație.",
  },
  {
    q: "Cât de rezistente sunt fațetele dentare?",
    a: "După cimentarea corectă, fațetele au rezistență foarte bună în timp. Cu îngrijire adecvată, durata de viață poate depăși 10 ani.",
  },
  {
    q: "Îmi afectează fațetele mușcătura?",
    a: "Nu. Tratamentul este proiectat astfel încât funcția masticatorie să rămână echilibrată și confortabilă.",
  },
  {
    q: "Fațetele dentare afectează dinții naturali?",
    a: "Pregătirea dinților este minim invazivă și controlată. Realizată corect, procedura păstrează sănătatea structurilor dentare.",
  },
  {
    q: "Pot mânca normal cu fațete?",
    a: "Da, însă se recomandă evitarea alimentelor foarte dure și respectarea indicațiilor de întreținere.",
  },
  {
    q: "Cum aflu informații despre fațete dentare preț?",
    a: "Costul depinde de numărul de dinți, materialul ales și complexitatea cazului. Estimarea exactă se stabilește după consultație.",
  },
  {
    q: "Care sunt dezavantajele fațetelor dentare?",
    a: "În caz de fisură, fațeta se înlocuiește integral; în primele zile pot apărea adaptări de pronunție; procedura este, în principiu, ireversibilă.",
  },
];

export const metadata: Metadata = {
  title: "Fațete dentare Cluj | Zâmbet estetic | Alverna Dental Studio",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

export default function FateteDentarePage() {
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
      <FateteDentarePageClient />
    </PrototypeFrame>
  );
}
