"use client";

import PrototypeFrame from "@/components/prototype/PrototypeFrame";

const trustPoints = ["Zâmbete fericite", "Excelență în stomatologie", "Profesionalism, calitate și promptitudine"];

const reviews = [
  {
    name: "Ana M.",
    meta: "Google · Cluj",
    text: "Detartraj rapid, fără durere și multă grijă la detalii. Mi-au explicat fiecare etapă înainte să înceapă tratamentul și m-am simțit în siguranță.",
  },
  {
    name: "James R.",
    meta: "Google · UK",
    text: "I came from the UK for treatment and the experience was excellent: clear communication, punctual appointments and a calm, professional team.",
  },
  {
    name: "Bianca T.",
    meta: "Google · România",
    text: "Vin de ani de zile la Alverna. Programările sunt respectate, medicii sunt atenți și primesc mereu recomandări utile pentru îngrijirea dinților.",
  },
  {
    name: "Klara S.",
    meta: "Google · Germania",
    text: "Servicii moderne, fără presiune de vânzare. Atmosfera este prietenoasă, iar tratamentul a fost fără durere.",
  },
  {
    name: "Radu P.",
    meta: "Google · Cluj",
    text: "Experiență foarte bună cu Dr. Andreea Pârvu: răbdare, comunicare clară și un plan de tratament explicat pe înțelesul meu.",
  },
  {
    name: "Ioana C.",
    meta: "Google · România",
    text: "Echipa mi-a schimbat complet perspectiva despre mersul la dentist. Totul este calm, clar și orientat pe confortul pacientului.",
  },
];

export default function TestimonialePage() {
  return (
    <PrototypeFrame>
      <main className="bg-[#ececec] pb-24 pt-10 md:pt-16 lg:pt-[96px]">
        <section className="mx-auto w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
          <div className="rounded-[28px] border border-black/5 bg-white px-6 py-10 md:px-10 md:py-14 lg:px-14 lg:py-16">
            <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#6b6b6b]">Pacienții noștri</p>
            <h1 className="mt-4 text-[46px] font-extrabold leading-[0.95] tracking-[-0.045em] text-[#0A0A0A] md:text-[78px] lg:text-[104px]">Testimoniale</h1>
            <p className="mt-6 max-w-[940px] text-[16px] leading-[1.75] text-[#343434] md:text-[18px]">
              Opiniile pacienților sunt cartea noastră de vizită. La Alverna Dental Studio ne mândrim cu zâmbete frumoase, feedback sincer și experiențe care transformă fiecare vizită într-un moment de încredere.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {trustPoints.map((item) => (
                <span key={item} className="rounded-full border border-black/10 bg-[#f8f8f8] px-4 py-2 text-[13px] font-medium text-[#0A0A0A]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-8 w-full max-w-[1680px] px-4 md:px-8 lg:mt-10 lg:px-12">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {trustPoints.map((item) => (
              <article key={item} className="rounded-[20px] border border-black/5 bg-white p-6">
                <p className="text-[14px] font-medium text-[#4E7044]">Punct de încredere</p>
                <h2 className="mt-3 text-[24px] font-semibold leading-[1.18] tracking-[-0.02em] text-[#0A0A0A]">{item}</h2>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-8 w-full max-w-[1680px] px-4 md:px-8 lg:mt-10 lg:px-12">
          <div className="rounded-[24px] border border-black/5 bg-white p-6 md:p-10 lg:p-12">
            <h2 className="text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#0A0A0A] md:text-[48px]">Ce spun pacienții noștri</h2>
            <p className="mt-4 max-w-[980px] text-[16px] leading-[1.7] text-[#3f3f3f]">
              Fiecare tratament este explicat înainte de a începe, astfel încât pacientul să se simtă confortabil și în control. Empatia, răbdarea și comunicarea clară definesc fiecare interacțiune în clinică.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review) => (
                <article key={review.name + review.meta} className="flex min-h-[230px] flex-col rounded-[18px] border border-black/5 bg-[#f7f7f7] p-6 transition duration-300 hover:-translate-y-[2px]">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[16px] font-semibold text-[#0A0A0A]">{review.name}</h3>
                    <span className="text-[14px] font-semibold text-[#d4a017]">★★★★★</span>
                  </div>
                  <p className="mt-1 text-[12px] text-[#777777]">{review.meta}</p>
                  <p className="mt-4 text-[14px] leading-[1.55] text-[#3f3f3f]">{review.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-8 w-full max-w-[1680px] px-4 md:px-8 lg:mt-10 lg:px-12">
          <div className="rounded-[24px] bg-[#0A0A0A] p-6 text-white md:p-10 lg:p-12">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] md:text-[48px]">Google Reviews</h2>
              <p className="text-[18px] font-semibold text-[#f2d16b]">4.8/5 ★★★★★</p>
            </div>
            <p className="mt-4 max-w-[900px] text-[15px] leading-[1.7] text-white/80">
              Feedback-ul din România, Germania și UK confirmă aceeași experiență: tratamente fără durere, comunicare transparentă, programări respectate și atmosferă profesionistă, fără presiune comercială.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-8 w-full max-w-[1680px] px-4 md:px-8 lg:mt-10 lg:px-12">
          <div className="rounded-[24px] border border-black/5 bg-white p-6 md:p-10 lg:p-12">
            <h2 className="text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#0A0A0A] md:text-[48px]">Experiența pacientului, cap-coadă</h2>
            <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2">
              <article className="rounded-[18px] border border-black/5 bg-[#f7f7f7] p-6">
                <h3 className="text-[20px] font-semibold text-[#0A0A0A]">Înainte de tratament</h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-[#404040]">
                  Discutăm deschis planul, costurile și pașii necesari. Primești explicații clare, alternative și recomandări de îngrijire, astfel încât decizia să fie informată.
                </p>
              </article>
              <article className="rounded-[18px] border border-black/5 bg-[#f7f7f7] p-6">
                <h3 className="text-[20px] font-semibold text-[#0A0A0A]">În timpul și după tratament</h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-[#404040]">
                  Aparatură modernă, medici atenți și o echipă care comunică permanent cu tine. Obiectivul este simplu: rezultate excelente și o experiență calmă, fără stres.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-8 w-full max-w-[1680px] px-4 md:px-8 lg:mt-10 lg:px-12">
          <div className="rounded-[24px] bg-[#4E7044] p-8 text-white md:p-12">
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-white/80">Programări</p>
            <h2 className="mt-3 text-[36px] font-semibold leading-[1.02] tracking-[-0.03em] md:text-[56px]">Vrei o experiență stomatologică diferită?</h2>
            <p className="mt-4 max-w-[860px] text-[16px] leading-[1.7] text-white/90">
              Fă primul pas spre un zâmbet sănătos cu o echipă care pune accent pe confort, claritate și rezultate predictibile.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="/#contact" className="inline-flex h-[44px] items-center rounded-full bg-white px-6 text-[14px] font-semibold text-[#0A0A0A] transition duration-300 hover:scale-[1.02]">
                Solicită evaluare
              </a>
              <a href="tel:+40748085933" className="inline-flex h-[44px] items-center rounded-full border border-white/40 px-6 text-[14px] font-semibold text-white transition duration-300 hover:scale-[1.02]">
                Sună acum
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-8 w-full max-w-[1680px] px-4 md:px-8 lg:mt-10 lg:px-12">
          <div className="rounded-[24px] border border-black/5 bg-white p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-[16px] font-medium text-[#0A0A0A]">Ai întrebări? Suntem aici pentru tine.</p>
              <div className="flex flex-wrap items-center gap-4 text-[14px] text-[#4a4a4a]">
                <a href="mailto:contact@alvernadental.com">contact@alvernadental.com</a>
                <a href="tel:+40748085933">+40 748 085 933</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PrototypeFrame>
  );
}
