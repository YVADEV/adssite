import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import alvernaLogo from "@/assets/alverna-logo.png";

export const metadata: Metadata = {
  title: "Ast.Univ Radu Nichimiș | Chirurgie maxilo-facială | Alverna Dental Studio",
  description:
    "Profil profesional Ast.Univ Dr. Radu Nichimiș, specialist în chirurgie maxilo-facială, cu accent pe planificare digitală, funcționalitate și armonie estetică.",
  alternates: {
    canonical: "https://alvernadental.com/echipa/radu-nichimis/",
  },
};

export default function RaduNichimisPage() {
  return (
    <PrototypeFrame darkHeader>
      <main className="min-h-screen bg-black pb-24 pt-16 text-white md:pt-20 lg:pt-[130px]">
        <section className="mx-auto w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-white/65">Profil medical</p>
          <h1 className="mt-5 max-w-[1150px] text-[36px] font-extrabold leading-[0.95] tracking-[-0.04em] text-white md:text-[58px] lg:text-[84px]">
            Dr. Radu Nichimiș - Chirurgie maxilo-facială & excelență academică în Cluj-Napoca
          </h1>
          <div className="mt-8 max-w-[1120px] space-y-5 text-[16px] leading-[1.75] text-white/82">
            <p>
              Dr. Radu Nichimiș, medic specialist în chirurgie maxilo-facială, recunoscut pentru rigoarea profesională
              și abordarea modernă a tratamentelor chirurgicale.
            </p>
            <p>
              Expertiza sa acoperă chirurgia dento-alveolară avansată, de la proceduri de implantologie orală, realizate
              prin planificare digitală, tratamentele afecțiunilor oro-maxilo-faciale și managementul traumatismelor
              faciale, fiecare caz fiind analizat individual și tratat cu rigoare medicală și viziune estetică.
            </p>
            <p>
              Fiecare procedură este concepută nu doar pentru a reda funcționalitatea, ci și pentru a restabili armonia
              și echilibrul natural al structurilor faciale, într-un cadru sigur, modern și orientat spre excelență.
            </p>
            <p>
              Punând pacientul în centrul actului medical, Dr. Nichimiș oferă soluții personalizate, bazate pe evaluări
              detaliate și tehnologii moderne, într-un cadru profesional și sigur.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-14 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
          <div className="rounded-[24px] border border-white/15 bg-white/[0.03] p-5 md:p-7">
            <div className="mb-5 flex items-center justify-between gap-4">
              <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-white md:text-[36px]">Acreditări</h2>
              <a
                href="/acreditari-radu-nichimis.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-[40px] items-center rounded-full border border-white/20 px-5 text-[13px] font-semibold text-white transition duration-300 hover:bg-white hover:text-black"
              >
                Deschide PDF
              </a>
            </div>
            <div className="overflow-hidden rounded-[16px] border border-white/10 bg-black">
              <iframe
                src="/acreditari-radu-nichimis.pdf"
                title="Acreditări Ast.Univ Radu Nichimiș"
                className="h-[72vh] min-h-[560px] w-full"
              />
            </div>
          </div>
        </section>

        <section className="mt-14 bg-black pb-[90px] pt-[10px] lg:pb-[120px]">
          <div className="mx-auto w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
            <div className="flex items-start justify-between gap-6">
              <h2 className="text-[42px] font-semibold leading-[0.92] tracking-[-0.03em] text-white md:text-[58px] lg:text-[72px]">
                Cazuri <span className="text-white/55">mai în detaliu</span>
                <br />
                <span className="text-white/55">before and after</span>
              </h2>
              <a href="/cazuri/" className="mt-5 rounded-full bg-white px-6 py-2 text-xs font-semibold text-black">
                Vezi toate
              </a>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-[3px] overflow-hidden rounded-[18px] md:grid-cols-[1fr_1fr_2fr] lg:mt-12">
              <article className="relative h-[520px] rounded-l-[18px] bg-black">
                <video autoPlay muted loop playsInline className="h-full w-full object-cover">
                  <source src="/cazuri-1.mp4" type="video/mp4" />
                </video>
              </article>
              <article className="relative h-[520px] bg-black">
                <video autoPlay muted loop playsInline className="h-full w-full object-cover">
                  <source src="/cori-angel.mp4" type="video/mp4" />
                </video>
              </article>
              <article className="relative h-[520px] rounded-r-[18px] bg-black">
                <video autoPlay muted loop playsInline className="h-full w-full object-cover">
                  <source src="/cazuri-2.mp4" type="video/mp4" />
                </video>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-black pb-[110px]">
          <div className="mx-auto mt-2 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/60">✚ Testimoniale</p>
            <h3 className="mt-2 text-[46px] font-semibold leading-[0.92] tracking-[-0.03em] text-white md:text-[62px]">Recenzii</h3>
            <p className="mt-3 text-[16px] font-semibold text-white">Scor mediu: 4.8 ⭐</p>
          </div>
          <div className="mx-auto mt-8 grid w-full max-w-[1680px] grid-cols-1 gap-[8px] px-4 md:grid-cols-2 md:px-8 lg:grid-cols-4 lg:gap-[6px] lg:px-12">
            <article className="flex min-h-[300px] flex-col rounded-[18px] bg-[#f5f5f5] p-[26px] text-black">
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

            {[
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
            ].map((r) => (
              <article key={r.name} className="flex min-h-[300px] flex-col rounded-[18px] bg-[#f5f5f5] p-[22px] text-black">
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
