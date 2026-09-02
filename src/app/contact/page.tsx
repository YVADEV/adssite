import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import alvernaLogo from "@/assets/alverna-logo.png";
import { ContactFormCard } from "@/components/services/ServicePageParts";
import { CLINIC } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact | Alverna Dental Studio Cluj",
  description:
    "Contactează Alverna Dental Studio pentru programări, suport telefonic și online. Descoperă locația clinicii și trimite rapid o solicitare.",
  alternates: {
    canonical: "https://alvernadental.com/contact/",
  },
};

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
      <main className="bg-black pb-24 pt-16 text-white md:pt-20 lg:pt-[130px]">
        <section className="mx-auto w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
          <p className="text-[21px] uppercase tracking-[0.14em] text-white">Contact</p>
          <h1 className="mt-4 text-[40px] font-extrabold leading-[0.9] tracking-[-0.05em] md:text-[78px] lg:text-[116px]">
            Contact
          </h1>
          <p className="mt-6 max-w-[1050px] text-[21px] leading-[1.65] text-white md:text-[21px] md:leading-[1.65]">
            Promisiunea noastră față de dumneavoastră este aceea că echipa Alverna Dental Studio își va folosi experiența
            și pasiunea pentru a face diferența între „câteva plombe” și zâmbetul perfect!
          </p>
        </section>

        <section className="mx-auto mt-10 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <article className="rounded-[18px] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
              <p className="text-[21px] font-semibold tracking-[-0.02em]">Suport telefonic și online</p>
              <p className="mt-2 text-[21px] leading-[1.6] text-[#4a4a4a]">Vă răspundem cu drag la toate întrebările! Contactați-ne acum!</p>
            </article>
            <article className="rounded-[18px] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
              <p className="text-[21px] font-semibold tracking-[-0.02em]">Programări</p>
              <p className="mt-2 text-[21px] leading-[1.6] text-[#4a4a4a]">Doriți o programare la una dintre clinicile noastre? Completați formularul!</p>
            </article>
            <article className="rounded-[18px] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
              <p className="text-[21px] font-semibold tracking-[-0.02em]">Contact</p>
              <p className="mt-2 text-[21px] leading-[1.6] text-[#4a4a4a]">
                Alverna Dental Studio 1
                <br />
                Adresa:
                <br />
                Alverna Dental Studio
                <br />
                Str. Alverna 33, 400469,
                <br />
                Cluj-Napoca, Romania
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
                  Str. Alverna 33, 400469
                  <br />
                  Cluj-Napoca, România
                </p>
              </div>

              <div>
                <p className="text-[21px] uppercase tracking-[0.14em] text-white">Program</p>
                <p className="mt-2 text-[21px] leading-[1.65] text-white">
                  Luni – Vineri: 09:00 – 21:00
                  <br />
                  Sâmbătă: 09:00 – 14:00
                </p>
              </div>

              <div>
                <p className="text-[21px] uppercase tracking-[0.14em] text-white">Telefon</p>
                <a
                  href={`tel:${CLINIC.phoneTel}`}
                  className="mt-2 inline-block text-[21px] font-semibold text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
                >
                  {CLINIC.phoneDisplay}
                </a>
              </div>

              <div className="mt-auto flex flex-wrap gap-3 pt-2">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=46.758115,23.6122138&destination_place_id=ChIJz_1ICEoMSUcR70_NRTusDCQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ads-btn-lit inline-flex h-[44px] items-center rounded-full px-5 text-[21px] font-semibold transition duration-300 hover:scale-[1.02]"
                >
                  Deschide ruta
                </a>
                <a
                  href="https://www.google.com/maps/place/Alverna+Dental+Studio/@46.758115,23.6122138,17z/"
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

        <section className="bg-black pb-[110px] pt-[100px]">
          <div className="mx-auto mt-2 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
            <h3 className="text-[32px] font-semibold leading-[0.92] tracking-[-0.03em] text-white md:text-[46px] lg:text-[62px]">Recenzii</h3>
            <p className="mt-3 text-[21px] font-semibold text-white">Scor mediu: 4.8 ⭐</p>
          </div>
          <div className="mx-auto mt-8 grid w-full max-w-[1680px] grid-cols-1 gap-[8px] px-4 md:grid-cols-2 md:px-8 lg:grid-cols-4 lg:gap-[6px] lg:px-12">
            <article className="ads-surface-light-muted flex min-h-[300px] flex-col rounded-[18px] p-[26px]">
              <div className="flex items-end gap-2">
                <strong className="text-[36px] font-semibold leading-none tracking-[-0.03em] md:text-[52px]">4,8</strong>
                <span className="mb-2 text-base opacity-60">/5</span>
                <img src="https://www.google.com/favicon.ico" alt="Google" className="mb-2 h-6 w-6" />
              </div>
              <div className="mx-auto mt-[40px] w-full max-w-[270px] space-y-2 text-[21px] leading-[1.65]">
                <p>Adresă: Strada Alverna 33, 400469 Cluj-Napoca</p>
                <p>Număr de telefon: {CLINIC.phoneDisplay}</p>
                <p>Program: Deschis · Închide la 21</p>
              </div>
              <img src={alvernaLogo.src} alt="Alverna logo" className="mx-auto mt-auto h-auto w-[210px] object-contain pt-4" />
            </article>

            {reviews.map((r) => (
              <article key={r.name} className="ads-surface-light-muted flex min-h-[300px] flex-col rounded-[18px] p-[22px]">
                  <div>
                    <p className="text-[28px] font-semibold leading-[1.05]">{r.name}</p>
                    <p className="mt-1 text-[21px]">{r.meta}</p>
                    <p className="mt-1 text-[21px]">{r.time}</p>
                  </div>
                <p className="mt-6 text-[21px] leading-[1.65]">{r.text}</p>
                <p className="mt-auto pt-4 text-[21px] leading-none tracking-[0.08em]">★★★★★</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="relative w-full overflow-hidden bg-[#0A0A0A] py-20 md:py-[120px]">
          <div className="relative z-10 mx-auto grid w-full max-w-[1680px] grid-cols-1 gap-12 px-4 md:px-8 lg:grid-cols-[430px_1fr] lg:gap-20 lg:px-12">
            <ContactFormCard source="contact-page" />

            <div className="pt-0 text-white lg:pt-8">
              <h3 className="max-w-[720px] text-[32px] font-semibold leading-[1.04] tracking-[-0.04em] md:text-[42px]">Primul pas spre un zâmbet sănătos începe aici.</h3>
              <p className="mt-5 max-w-[680px] text-[21px] leading-[1.65] text-white">
                Echipa Alverna Dental Studio te ajută să alegi tratamentul potrivit, fără stres și fără presiune.
              </p>
              <div className="mt-8 inline-block rounded-[16px] border border-white/20 bg-white/5 px-5 py-4">
                <p className="text-[21px] font-semibold text-white">4.8 ★★★★★</p>
                <p className="mt-1 text-[21px] text-white">Peste 9000 de pacienți mulțumiți</p>
              </div>
              <a
                href={`tel:${CLINIC.phoneTel}`}
                className="mt-7 inline-block text-[21px] text-white underline decoration-[#9fc48f]/50 underline-offset-4 hover:decoration-white"
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
