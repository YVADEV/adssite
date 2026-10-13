import type { Metadata } from "next";
import Image from "next/image";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import { ContactFormCard } from "@/components/services/ServicePageParts";
import { JsonLd, breadcrumbLd, physicianLd } from "@/components/seo/JsonLd";
import portrait from "@/assets/echipa/corina-holici.png";
import { CLINIC } from "@/lib/contact";
import { pageMetadata, SITE_URL } from "@/lib/seo";

const PATH = "/echipa/corina-holici/";
const PDF = "/acreditari-corina-holici.pdf";
const NAME = "Dr. Corina Holici";
const ROLE = "Medic stomatolog";
const DESCRIPTION =
  "Profil Dr. Corina Holici, medic în echipa Alverna Dental Studio. Diplome și certificate de participare la cursuri și congrese de ortodonție.";

export const metadata: Metadata = pageMetadata({
  title: `${NAME} | Alverna Dental Studio`,
  description: DESCRIPTION,
  path: PATH,
  type: "profile",
  images: [portrait.src],
});

export default function CorinaHoliciPage() {
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
        })}
      />
      <main className="min-h-screen bg-black pb-24 pt-16 text-white md:pt-20 lg:pt-[130px]">
        <section className="mx-auto grid w-full max-w-[1680px] items-start gap-10 px-4 md:px-8 lg:grid-cols-[minmax(0,280px)_1fr] lg:px-12">
          <Image
            src={portrait}
            alt="Dr. Corina Holici, medic stomatolog Alverna Dental Studio"
            className="aspect-[3/4] w-full rounded-[18px] object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 280px"
            priority
          />
          <div>
            <p className="text-[21px] font-medium uppercase tracking-[0.14em] text-white">Profil medical</p>
            <h1 className="mt-5 max-w-[1150px] text-[36px] font-extrabold leading-[0.95] tracking-[-0.04em] text-white md:text-[58px] lg:text-[84px]">
              Dr. Corina Holici
            </h1>
            <div className="mt-8 max-w-[1120px] space-y-5 text-[21px] leading-[1.75] text-white">
              <p>Dr. Corina Holici face parte din echipa medicală Alverna Dental Studio.</p>
              <p>
                Mai jos sunt diplomele și certificatele de participare la cursuri și congrese, inclusiv Spark, Angel
                Aligner și congrese de ortodonție.
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
              <iframe src={`${PDF}#view=FitH`} title="Acreditări Dr. Corina Holici" className="h-[72vh] min-h-[560px] w-full" />
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

        <section id="contact" className="relative mt-14 w-full overflow-hidden bg-[#0A0A0A] py-20 md:py-[120px]">
          <div className="relative z-10 mx-auto grid w-full max-w-[1680px] grid-cols-1 gap-12 px-4 md:px-8 lg:grid-cols-[430px_1fr] lg:gap-20 lg:px-12">
            <ContactFormCard source="corina-holici" />
            <div className="pt-0 text-white lg:pt-8">
              <h3 className="max-w-[720px] text-[32px] font-semibold leading-[1.04] tracking-[-0.04em] md:text-[42px]">
                Primul pas spre un zâmbet sănătos începe aici.
              </h3>
              <p className="mt-5 max-w-[680px] text-[21px] leading-[1.65] text-white">
                Echipa Alverna Dental Studio te ajută să înțelegi opțiunile de tratament și pașii următori.
              </p>
              <a
                href={`tel:${CLINIC.phoneTel}`}
                className="mt-7 inline-flex min-h-[44px] items-center text-[21px] text-white underline decoration-[#B6B94C]/50 underline-offset-4 hover:decoration-white"
              >
                Preferi telefonic? Sună acum
              </a>
            </div>
          </div>
        </section>
      </main>
    </PrototypeFrame>
  );
}
