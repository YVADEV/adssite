import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import alvernaLogo from "@/assets/alverna-logo.png";

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
          <p className="text-[12px] uppercase tracking-[0.14em] text-white/65">Contact</p>
          <h1 className="mt-4 text-[48px] font-extrabold leading-[0.9] tracking-[-0.05em] md:text-[78px] lg:text-[116px]">
            Contact
          </h1>
          <p className="mt-6 max-w-[1050px] text-[18px] leading-[1.65] text-white/80">
            Promisiunea noastră față de dumneavoastră este aceea că echipa Alverna Dental Studio își va folosi experiența
            și pasiunea pentru a face diferența între „câteva plombe” și zâmbetul perfect!
          </p>
        </section>

        <section className="mx-auto mt-10 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <article className="rounded-[18px] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
              <p className="text-[22px] font-semibold tracking-[-0.02em]">Suport telefonic și online</p>
              <p className="mt-2 text-[15px] leading-[1.6] text-[#4a4a4a]">Vă răspundem cu drag la toate întrebările! Contactați-ne acum!</p>
            </article>
            <article className="rounded-[18px] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
              <p className="text-[22px] font-semibold tracking-[-0.02em]">Programări</p>
              <p className="mt-2 text-[15px] leading-[1.6] text-[#4a4a4a]">Doriți o programare la una dintre clinicile noastre? Completați formularul!</p>
            </article>
            <article className="rounded-[18px] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
              <p className="text-[22px] font-semibold tracking-[-0.02em]">Contact</p>
              <p className="mt-2 text-[15px] leading-[1.6] text-[#4a4a4a]">
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
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/60">✚ Locație</p>
              <h2 className="mt-2 text-[42px] font-semibold leading-[0.95] tracking-[-0.03em] text-white md:text-[56px]">
                Vino la noi în clinică
              </h2>
            </div>
            <p className="max-w-[420px] text-[15px] leading-[1.55] text-white/65">
              Suntem ușor de găsit în Cluj-Napoca, pe Strada Alverna 33. Parcare disponibilă în apropiere.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] lg:grid-cols-[380px_1fr]">
            <div className="flex flex-col gap-6 p-6 md:p-8">
              <div>
                <p className="text-[12px] uppercase tracking-[0.14em] text-[#9fc48f]">Adresă</p>
                <p className="mt-2 text-[18px] font-semibold leading-[1.35] text-white">
                  Alverna Dental Studio
                </p>
                <p className="mt-1 text-[15px] leading-[1.55] text-white/70">
                  Str. Alverna 33, 400469
                  <br />
                  Cluj-Napoca, România
                </p>
              </div>

              <div>
                <p className="text-[12px] uppercase tracking-[0.14em] text-[#9fc48f]">Program</p>
                <p className="mt-2 text-[15px] leading-[1.55] text-white/80">
                  Luni – Vineri: 09:00 – 21:00
                  <br />
                  Sâmbătă: 09:00 – 14:00
                </p>
              </div>

              <div>
                <p className="text-[12px] uppercase tracking-[0.14em] text-[#9fc48f]">Telefon</p>
                <a
                  href="tel:+40748085933"
                  className="mt-2 inline-block text-[16px] font-semibold text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
                >
                  +40 748 085 933
                </a>
              </div>

              <div className="mt-auto flex flex-wrap gap-3 pt-2">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=46.758115,23.6122138&destination_place_id=ChIJz_1ICEoMSUcR70_NRTusDCQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[44px] items-center rounded-full bg-white px-5 text-[13px] font-semibold text-[#0A0A0A] transition duration-300 hover:scale-[1.02]"
                >
                  Deschide ruta
                </a>
                <a
                  href="https://www.google.com/maps/place/Alverna+Dental+Studio/@46.758115,23.6122138,17z/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[44px] items-center rounded-full border border-white/35 bg-white/5 px-5 text-[13px] font-semibold text-white backdrop-blur transition duration-300 hover:bg-white/10"
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
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/60">✚ Testimoniale</p>
            <h3 className="mt-2 text-[46px] font-semibold leading-[0.92] tracking-[-0.03em] text-white md:text-[62px]">Recenzii</h3>
            <p className="mt-3 text-[16px] font-semibold text-white">Scor mediu: 4.8 ⭐</p>
          </div>
          <div className="mx-auto mt-8 grid w-full max-w-[1680px] grid-cols-1 gap-[8px] px-4 md:grid-cols-2 md:px-8 lg:grid-cols-4 lg:gap-[6px] lg:px-12">
            <article className="flex min-h-[300px] flex-col rounded-[18px] bg-[#f5f5f5] p-[26px]">
              <div className="flex items-end gap-2">
                <strong className="text-[52px] font-semibold leading-none tracking-[-0.03em]">4,8</strong>
                <span className="mb-2 text-base opacity-60">/5</span>
                <img src="https://www.google.com/favicon.ico" alt="Google" className="mb-2 h-6 w-6" />
              </div>
              <div className="mx-auto mt-[40px] w-full max-w-[270px] space-y-2 text-[14px] leading-[1.45] text-[#111111]">
                <p>Adresă: Strada Alverna 33, 400469 Cluj-Napoca</p>
                <p>Număr de telefon: 0376 448 810</p>
                <p>Program: Deschis · Închide la 21</p>
              </div>
              <img src={alvernaLogo.src} alt="Alverna logo" className="mx-auto mt-auto h-auto w-[210px] object-contain pt-4" />
            </article>

            {reviews.map((r) => (
              <article key={r.name} className="flex min-h-[300px] flex-col rounded-[18px] bg-[#f5f5f5] p-[22px]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[28px] font-semibold leading-[1.05] text-[#0A0A0A]">{r.name}</p>
                    <p className="mt-1 text-[13px] text-[#555]">{r.meta}</p>
                    <p className="mt-1 text-[13px] text-[#555]">{r.time}</p>
                  </div>
                  <span className="text-3xl opacity-40">+</span>
                </div>
                <p className="mt-6 text-[15px] leading-[1.55] text-[#111111]">{r.text}</p>
                <p className="mt-auto pt-4 text-[18px] leading-none tracking-[0.08em] text-[#f5b301]">★★★★★</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="relative w-full overflow-hidden bg-[#0A0A0A] py-20 md:py-[120px]">
          <div className="relative z-10 mx-auto grid w-full max-w-[1680px] grid-cols-1 gap-12 px-4 md:px-8 lg:grid-cols-[430px_1fr] lg:gap-20 lg:px-12">
            <div className="rounded-[24px] bg-white p-8 text-[#0A0A0A] shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
              <p className="text-[14px] text-[#4F7F47]">@alvernadentalstudio</p>
              <h3 className="mt-2 text-[44px] font-semibold leading-[0.95] tracking-[-0.04em]">Solicită o programare</h3>
              <p className="mt-3 text-[14px] leading-[1.45] text-[#555555]">Lasă-ne datele tale și te contactăm în maxim 24h pentru confirmare.</p>
              <form className="mt-7 grid gap-3">
                <input className="h-[52px] rounded-[12px] bg-[#F5F5F5] px-4 text-[16px] outline-none transition focus:ring-2 focus:ring-[#4F7F47]/45" placeholder="Nume" />
                <input className="h-[52px] rounded-[12px] bg-[#F5F5F5] px-4 text-[16px] outline-none transition focus:ring-2 focus:ring-[#4F7F47]/45" placeholder="Telefon" />
                <input className="h-[52px] rounded-[12px] bg-[#F5F5F5] px-4 text-[16px] outline-none transition focus:ring-2 focus:ring-[#4F7F47]/45" placeholder="Serviciu dorit" />
                <textarea className="min-h-[110px] rounded-[12px] bg-[#F5F5F5] px-4 py-3 text-[16px] outline-none transition focus:ring-2 focus:ring-[#4F7F47]/45" placeholder="Mesaj opțional" />
                <a href="mailto:contact@alvernadental.com" className="mt-2 inline-flex h-[54px] w-full items-center justify-center rounded-full bg-black text-[16px] font-semibold text-white transition duration-300 hover:scale-[1.02] hover:shadow-[0_10px_24px_rgba(0,0,0,0.25)]">
                  Solicită programare
                </a>
                <p className="mt-2 text-center text-[11px] text-[#7a7a7a]">Nu trimitem spam. Te contactăm doar pentru confirmarea programării.</p>
              </form>
            </div>

            <div className="pt-0 text-white lg:pt-8">
              <h3 className="max-w-[720px] text-[42px] font-semibold leading-[1.04] tracking-[-0.04em]">Primul pas spre un zâmbet sănătos începe aici.</h3>
              <p className="mt-5 max-w-[680px] text-[16px] leading-[1.55] text-[#d6d6d6]">
                Echipa Alverna Dental Studio te ajută să alegi tratamentul potrivit, fără stres și fără presiune.
              </p>
              <div className="mt-8 inline-block rounded-[16px] border border-white/20 bg-white/5 px-5 py-4">
                <p className="text-[20px] font-semibold text-white">4.8 ★★★★★</p>
                <p className="mt-1 text-[13px] text-[#d7d7d7]">Peste 9000 de pacienți mulțumiți</p>
              </div>
              <p className="mt-7 text-[14px] text-[#9fc48f] underline decoration-[#9fc48f]/50 underline-offset-4">Preferi telefonic? Sună acum</p>
            </div>
          </div>
        </section>
      </main>
    </PrototypeFrame>
  );
}
