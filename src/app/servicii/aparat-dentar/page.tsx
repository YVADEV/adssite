import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import AparatDentarPageClient from "@/components/services/AparatDentarPageClient";
import { JsonLd, breadcrumbLd, serviceLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

const PATH = "/servicii/aparat-dentar/";
const NAME = "Aparat dentar";
const DESCRIPTION =
  "Tipuri de aparat dentar în Cluj la Alverna Dental Studio: aparat dentar fix metalic, ceramic, safir, lingual și alignere transparente. Tipul potrivit se stabilește după consultația ortodontică.";

export const metadata: Metadata = {
  title: "Aparat dentar Cluj | Tipuri de aparat | Alverna Dental Studio",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

export default function AparatDentarPage() {
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
      <AparatDentarPageClient />
    </PrototypeFrame>
  );
}
