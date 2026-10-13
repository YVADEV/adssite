import type { Metadata } from "next";
import Image from "next/image";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import { ContactFormCard } from "@/components/services/ServicePageParts";
import { JsonLd, breadcrumbLd, physicianLd } from "@/components/seo/JsonLd";
import portrait from "@/assets/echipa/andreea-parvu.png";
import { pageMetadata, SITE_URL } from "@/lib/seo";

const PATH = "/echipa/andreea-parvu/";
const NAME = "Dr. Andreea Pârvu";
const ROLE = "Stomatologie generală și protetică";
const DESCRIPTION =
  "Profil Dr. Andreea Pârvu, medic de stomatologie generală și protetică la Alverna Dental Studio. Coordonează planificarea protetică digitală și lucrarea finală în laboratorul propriu.";

export const metadata: Metadata = pageMetadata({
  title: `${NAME} | ${ROLE} | Alverna Dental Studio`,
  description: DESCRIPTION,
  path: PATH,
  type: "profile",
  images: [portrait.src],
});

export default function AndreeaParvuPage() {
  const url = `${SITE_URL}${PATH}`;
  return (
    <PrototypeFrame darkHeader>
      <JsonLd
        data={breadcrumbLd([
          { name: "Acasă", url: `${SITE_URL}/` },
          { name: "Echipa", url: `${SITE_URL}/echipa/` },
          { name: NAME, url },
        ])}
      />
      <JsonLd
        data={physicianLd({
          name: NAME,
          jobTitle: ROLE,
          description: DESCRIPTION,
          url,
          image: portrait.src,
          medicalSpecialty: "Prosthodontics",
        })}
      />
      <main className="min-h-screen bg-black pb-24 pt-16 text-white md:pt-20 lg:pt-[130px]">
        <section className="mx-auto grid w-full max-w-[1680px] items-start gap-10 px-4 md:px-8 lg:grid-cols-[minmax(0,280px)_1fr] lg:px-12">
          <Image
            src={portrait}
            alt="Dr. Andreea Pârvu, stomatologie generală și protetică"
            className="aspect-[3/4] w-full rounded-[18px] object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 280px"
            priority
          />
          <div>
            <p className="text-[21px] font-medium uppercase tracking-[0.14em] text-white">Profil medical</p>
            <h1 className="mt-5 max-w-[1150px] text-[36px] font-extrabold leading-[0.95] tracking-[-0.04em] text-white md:text-[58px] lg:text-[72px]">
              {NAME} — {ROLE}
            </h1>
            <div className="mt-8 max-w-[1120px] space-y-5 text-[21px] leading-[1.75] text-white">
              <p>
                Dr. Andreea Pârvu coordonează planificarea protetică digitală și lucrarea finală, realizată în laboratorul
                propriu al clinicii.
              </p>
              <p>
                După inserarea implanturilor, planifică și realizează lucrarea fixă. Scanarea, proiectarea și
                confecționarea se fac în clinică, fără trimitere la un laborator extern.
              </p>
              <p>
                Ajustările de formă, culoare și ocluzie se fac pe loc. Scanarea pentru lucrarea protetică este intraorală,
                digitală, fără amprentă clasică.
              </p>
            </div>
          </div>
        </section>
        <section id="contact" className="mx-auto mt-16 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
          <ContactFormCard source="andreea-parvu" />
        </section>
      </main>
    </PrototypeFrame>
  );
}
