import type { Metadata } from "next";
import Image from "next/image";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import { ContactFormCard } from "@/components/services/ServicePageParts";
import { JsonLd, breadcrumbLd, physicianLd } from "@/components/seo/JsonLd";
import portrait from "@/assets/echipa/laura-grigorean.png";
import { pageMetadata, SITE_URL } from "@/lib/seo";

const PATH = "/echipa/laura-grigorean/";
const PDF = "/acreditari-laura-grigorean.pdf";
const NAME = "Dr. Laura Grigorean";
const ROLE = "Medic specialist în Parodontologie";
const DESCRIPTION =
  "Profil Dr. Laura Grigorean, medic specialist în parodontologie la Alverna Dental Studio. Evaluează gingiile și țesuturile de susținere înainte de implanturi.";

export const metadata: Metadata = pageMetadata({
  title: `${NAME} | ${ROLE} | Alverna Dental Studio`,
  description: DESCRIPTION,
  path: PATH,
  type: "profile",
  images: [portrait.src],
});

export default function LauraGrigoreanPage() {
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
          medicalSpecialty: "Periodontics",
        })}
      />
      <main className="min-h-screen bg-black pb-24 pt-16 text-white md:pt-20 lg:pt-[130px]">
        <section className="mx-auto grid w-full max-w-[1680px] items-start gap-10 px-4 md:px-8 lg:grid-cols-[minmax(0,280px)_1fr] lg:px-12">
          <Image
            src={portrait}
            alt="Dr. Laura Grigorean, medic specialist în parodontologie"
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
                Dr. Laura Grigorean este medic specialist în parodontologie. În tratamentele de dinți ficși pe implanturi
                evaluează și pregătește gingiile și țesuturile de susținere, astfel încât implantul să aibă un teren sănătos.
              </p>
              <p>
                Consultul verifică starea gingiilor, prezența unei infecții active și calitatea osului rămas, pe baza
                evaluării digitale de la început. Dacă există o problemă activă, aceasta se tratează înainte de chirurgie.
              </p>
              <p>După intervenție, urmărește sănătatea gingiei din jurul implanturilor.</p>
              <p>
                Mai jos sunt diplomele și certificatele de participare la cursuri și congrese de parodontologie, inclusiv
                EuroPerio11 și Congresul de Stomatologie Transilvania.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-14 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
          <div className="rounded-[24px] border border-white/15 bg-white/[0.03] p-5 md:p-7">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-white md:text-[36px]">Acreditări</h2>
              <a
                href={PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="ads-btn-outline-lit inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/20 px-5 text-[21px] font-semibold text-white transition duration-300"
              >
                Deschide PDF
              </a>
            </div>
            <p className="mb-4 text-[18px] leading-[1.5] text-white/70 md:hidden">
              Pe telefon, PDF-ul se deschide în viewer-ul nativ pentru o navigare mai ușoară.
            </p>
            <div className="hidden overflow-hidden rounded-[16px] border border-white/10 bg-black md:block">
              <iframe src={`${PDF}#view=FitH`} title="Acreditări Dr. Laura Grigorean" className="h-[72vh] min-h-[560px] w-full" />
            </div>
            <a
              href={PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="ads-btn-lit flex min-h-[52px] w-full items-center justify-center rounded-[16px] text-[21px] font-semibold md:hidden"
            >
              Vizualizează acreditările (PDF)
            </a>
          </div>
        </section>

        <section id="contact" className="mx-auto mt-16 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
          <ContactFormCard source="laura-grigorean" />
        </section>
      </main>
    </PrototypeFrame>
  );
}
