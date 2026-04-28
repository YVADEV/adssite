"use client";

type ServicePageTemplateProps = {
  title: string;
  shortIntro: string;
};

const recommendationBullets = [
  "Pacienților care își doresc un plan clar și etapizat de tratament.",
  "Persoanelor care caută rezultate stabile, cu accent pe funcționalitate și estetică.",
  "Cazurilor care au nevoie de monitorizare atentă și comunicare constantă.",
];

const benefitItems = [
  "Plan personalizat în funcție de obiectivul clinic.",
  "Aparatură modernă și protocoale actuale de tratament.",
  "Explicarea fiecărui pas înainte de intervenție.",
  "Confort crescut și monitorizare pe toată durata tratamentului.",
];

export default function ServicePageTemplate({ title, shortIntro }: ServicePageTemplateProps) {
  return (
    <main className="bg-[#ececec] pb-24 pt-12 md:pt-16 lg:pt-[110px]">
      <section className="mx-auto w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
        <div className="rounded-[28px] border border-black/8 bg-white px-6 py-10 md:px-10 md:py-14 lg:px-14 lg:py-16">
          <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#6a6a6a]">Servicii Alverna Dental Studio</p>
          <h1 className="mt-4 text-[42px] font-extrabold leading-[0.96] tracking-[-0.045em] text-[#0A0A0A] md:text-[72px] lg:text-[96px]">{title}</h1>
          <p className="mt-6 max-w-[960px] text-[16px] leading-[1.7] text-[#383838]">{shortIntro}</p>
          <a href="mailto:contact@alvernadental.com" className="mt-8 inline-flex h-[44px] items-center rounded-full bg-[#0A0A0A] px-6 text-[14px] font-semibold text-white transition duration-300 hover:scale-[1.02]">
            Solicită programare
          </a>
        </div>
      </section>

      <section className="mx-auto mt-8 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
        <div className="rounded-[24px] border border-black/8 bg-white p-6 md:p-10 lg:p-12">
          <h2 className="text-[32px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#0A0A0A] md:text-[44px]">Ce presupune tratamentul</h2>
          <p className="mt-4 max-w-[980px] text-[16px] leading-[1.7] text-[#3f3f3f]">
            În cadrul consultației inițiale, evaluăm situația clinică, discutăm obiectivele pacientului și stabilim un plan de tratament clar. Fiecare etapă este explicată pe înțelesul tău, cu accent pe siguranță, confort și rezultate predictibile.
          </p>
          <p className="mt-4 max-w-[980px] text-[16px] leading-[1.7] text-[#3f3f3f]">
            Echipa noastră urmărește evoluția cazului pe tot parcursul intervenției, iar recomandările post-tratament sunt personalizate pentru a menține rezultatele în timp.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-8 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
        <div className="rounded-[24px] border border-black/8 bg-white p-6 md:p-10 lg:p-12">
          <h2 className="text-[32px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#0A0A0A] md:text-[44px]">Cui i se recomandă</h2>
          <ul className="mt-5 list-disc space-y-2 pl-6 text-[16px] leading-[1.7] text-[#3f3f3f]">
            {recommendationBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto mt-8 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
        <div className="rounded-[24px] border border-black/8 bg-white p-6 md:p-10 lg:p-12">
          <h2 className="text-[32px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#0A0A0A] md:text-[44px]">Beneficii</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {benefitItems.map((item) => (
              <article key={item} className="rounded-[16px] bg-[#f7f7f7] p-5 text-[15px] leading-[1.55] text-[#2e2e2e]">
                {item}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
        <div className="rounded-[24px] bg-[#0A0A0A] p-8 text-white md:p-12">
          <h2 className="text-[34px] font-semibold leading-[1.04] tracking-[-0.03em] md:text-[48px]">Programează o consultație</h2>
          <p className="mt-4 max-w-[820px] text-[16px] leading-[1.7] text-white/80">
            Îți oferim o evaluare clară, pași concreți și un plan personalizat. Te contactăm rapid pentru confirmare, fără spam și fără presiune comercială.
          </p>
          <a href="mailto:contact@alvernadental.com" className="mt-7 inline-flex h-[44px] items-center rounded-full bg-white px-6 text-[14px] font-semibold text-[#0A0A0A] transition duration-300 hover:scale-[1.02]">
            Solicită programare
          </a>
        </div>
      </section>
    </main>
  );
}
