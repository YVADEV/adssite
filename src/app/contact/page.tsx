import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import alvernaLogo from "@/assets/alverna-logo.png";
import { ContactFormCard } from "@/components/services/ServicePageParts";
import { CLINIC } from "@/lib/contact";
import { GoogleReviews } from "@/components/reviews/GoogleReviewsMobile";

export const metadata: Metadata = pageMetadata({
  title: "Contact | Alverna Dental Studio Cluj",
  description: "Contactează Alverna Dental Studio pentru programări, suport telefonic și online. Descoperă locația clinicii și trimite rapid o solicitare.",
  path: "https://alvernadental.com/contact/",
});

const reviews = [
  {
    name: "Andreea Nisipeanu",
    meta: "3 recenzii",
    time: "acum o lună",
    text: "Recomand cu mare încredere Clinica Alverna Dental! De la prima vizită am fost întâmpinată cu multă căldură și profesionalism.",
  },
  {
    name: "Carmen Ilea",
    meta: "4 recenzii",
    time: "acum 2 luni",
    text: "Am fost impresionată de profesionalism, atenție la detalii și de tehnologia modernă din clinică. Voi reveni cu plăcere.",
  },
  {
    name: "Denisa Tănase",
    meta: "2 recenzii · O fotografie",
    time: "acum 3 luni",
    text: "Experiență foarte bună, comunicare clară și echipă prietenoasă. Fiecare pas a fost explicat pe înțelesul meu.",
  },
];

export default function ContactPage() {
  return (
    <PrototypeFrame>
      <main className="min-w-0 bg-black pb-24 text-white">
        <section className="relative w-full overflow-hidden bg-black">
          <div className="relative aspect-[1024/456] w-full">
            <img
              src="/contact-hero.jpg"
              alt="Echipa Alverna Dental Studio"
              width={1024}
              height={456}
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-black/80 via-black/35 to-transparent md:h-[38%]" />
            <div className="relative z-10 mx-auto flex h-full w-full max-w-[1680px] flex-col justify-end px-4 pb-8 pt-24 md:px-8 md:pb-12 lg:px-12 lg:pb-16">
              <p className="text-[14px] font-medium uppercase tracking-[0.16em] text-white/80 sm:text-[18px] md:text-[21px]">
                Alverna Dental Studio
              </p>
              <h1 className="mt-2 text-[40px] font-extrabold leading-[0.92] tracking-[-0.05em] text-white md:text-[56px] md:leading-[1.06] md:tracking-[-0.03em] lg:text-[64px]">
                Contact
              </h1>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1680px] px-4 pt-8 md:px-8 md:pt-12 lg:px-12">
          <p className="max-w-[1050px] text-[18px] leading-[1.65] text-white/75 sm:text-[21px]">
            Promisiunea noastră față de dumneavoastră este aceea că echipa Alverna Dental Studio își va folosi experiența
            și pasiunea pentru un plan de tratament explicat, nu doar pentru o lucrare izolată.
          </p>
        </section>

        <section className="mx-auto mt-8 w-full max-w-[1680px] px-4 md:mt-10 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
            <article className="rounded-[16px] bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.06)] md:rounded-[18px] md:p-6">
              <p className="text-[16px] font-semibold tracking-[-0.02em] md:text-[21px]">Suport telefonic și online</p>
              <p className="mt-2 text-[14px] leading-[1.55] text-[#4a4a4a] md:text-[21px] md:leading-[1.6]">Vă răspundem cu drag la toate întrebările! Contactați-ne acum!</p>
            </article>
            <article className="rounded-[16px] bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.06)] md:rounded-[18px] md:p-6">
              <p className="text-[16px] font-semibold tracking-[-0.02em] md:text-[21px]">Programări</p>
              <p className="mt-2 text-[14px] leading-[1.55] text-[#4a4a4a] md:text-[21px] md:leading-[1.6]">Doriți o programare la clinica noastră? Completați formularul!</p>
            </article>
            <article className="rounded-[16px] bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.06)] md:rounded-[18px] md:p-6">
              <p className="text-[16px] font-semibold tracking-[-0.02em] md:text-[21px]">Contact</p>
              <p className="mt-2 text-[14px] leading-[1.55] text-[#4a4a4a] md:text-[21px] md:leading-[1.6]">
                {CLINIC.name}
                <br />
                <a
                  href={CLINIC.mapsPlaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-[#4a4a4a]/30 underline-offset-4 transition hover:decoration-[#4a4a4a]"
                >
                  {CLINIC.addressLine}
                </a>
              </p>
            </article>
          </div>
        </section>

        <section className="mx-auto mt-16 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-[32px] font-semibold leading-[0.95] tracking-[-0.03em] text-white md:text-[56px]">
                Vino la noi în clinică
              </h2>
            </div>
            <p className="max-w-[420px] text-[21px] leading-[1.65] text-white">
              Suntem ușor de găsit în Cluj-Napoca, pe Strada Alverna 33. Parcare disponibilă în apropiere.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] lg:grid-cols-[380px_1fr]">
            <div className="flex flex-col gap-6 p-6 md:p-8">
              <div>
                <p className="text-[21px] uppercase tracking-[0.14em] text-white">Adresă</p>
                <p className="mt-2 text-[21px] font-semibold leading-[1.35] text-white">
                  Alverna Dental Studio
                </p>
                <p className="mt-1 text-[21px] leading-[1.65] text-white">
                  <a
                    href={CLINIC.mapsPlaceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
                  >
                    {CLINIC.addressLine}
                  </a>
                </p>
              </div>

              <div>
                <p className="text-[21px] uppercase tracking-[0.14em] text-white">Program</p>
                <p className="mt-2 text-[21px] leading-[1.65] text-white">{CLINIC.hoursDisplay}</p>
              </div>

              <div>
                <p className="text-[21px] uppercase tracking-[0.14em] text-white">Telefon</p>
                <a
                  href={`tel:${CLINIC.phoneTel}`}
                  className="mt-2 inline-flex min-h-[44px] items-center text-[21px] font-semibold text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
                >
                  {CLINIC.phoneDisplay}
                </a>
              </div>

              <div className="mt-auto flex flex-wrap gap-3 pt-2">
                <a
                  href={CLINIC.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ads-btn-lit inline-flex h-[44px] items-center rounded-full px-5 text-[21px] font-semibold transition duration-300 hover:scale-[1.02]"
                >
                  Deschide ruta
                </a>
                <a
                  href={CLINIC.mapsPlaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[44px] items-center rounded-full border border-white/35 bg-white/5 px-5 text-[21px] font-semibold text-white backdrop-blur transition duration-300 hover:bg-white/10"
                >
                  Vezi pe Google Maps
                </a>
              </div>
            </div>

            <div className="relative min-h-[360px] w-full overflow-hidden lg:min-h-[520px]">
              <iframe
                title="Locația Alverna Dental Studio pe Google Maps"
                src="https://www.google.com/maps?q=Alverna+Dental+Studio,+Strada+Alverna+33,+Cluj-Napoca&ll=46.758115,23.6122138&z=16&hl=ro&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0 grayscale-[0.15] contrast-[1.05]"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="bg-black pb-16 pt-12 md:pb-[110px] md:pt-[100px]">
          <div className="mx-auto mt-2 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
            <h3 className="text-[28px] font-semibold leading-[0.92] tracking-[-0.03em] text-white md:text-[46px] lg:text-[62px]">Recenzii</h3>
            <p className="mt-2 text-[16px] font-semibold text-white md:mt-3 md:text-[21px]">Scor mediu: 4.8 ⭐</p>
          </div>
          <div className="mx-auto mt-6 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
            <GoogleReviews
              reviews={reviews}
              logo={<img src={alvernaLogo.src} alt="Alverna logo" className="mt-3 h-auto w-[160px] object-contain" />}
            />
          </div>
        </section>

        <section id="contact" className="relative w-full overflow-hidden bg-[#0A0A0A] py-12 md:py-[120px]">
          <div className="relative z-10 mx-auto grid w-full max-w-[1680px] grid-cols-1 gap-12 px-4 md:px-8 lg:grid-cols-[430px_1fr] lg:gap-20 lg:px-12">
            <ContactFormCard source="contact-page" />

            <div className="pt-0 text-white lg:pt-8">
              <h3 className="max-w-[720px] text-[32px] font-semibold leading-[1.04] tracking-[-0.04em] md:text-[42px]">Primul pas spre un zâmbet sănătos începe aici.</h3>
              <p className="mt-5 max-w-[680px] text-[21px] leading-[1.65] text-white">
                Echipa Alverna Dental Studio te ajută să înțelegi opțiunile de tratament și pașii următori.
              </p>
              <a
                href={`tel:${CLINIC.phoneTel}`}
                className="mt-8 inline-flex min-h-[44px] items-center text-[21px] text-white underline decoration-[#B6B94C]/50 underline-offset-4 hover:decoration-white"
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
