"use client";

import { useState } from "react";
import { motion } from "motion/react";
import alvernaLogo from "@/assets/alverna-logo.png";

const treatments = [
  "Albire dentară profesională (Philips ZOOM Whitespeed)",
  "Obturații coronare fizionomice (restaurări directe)",
  "Incrustații Inlay / Onlay (obturații indirecte)",
  "Fațete dentare din ceramică presată Ivoclar e.max Press",
  "Implanturi dentare (MegaGen AnyRidge, Sweden & Martina, Straumann)",
  "Alinierea dinților și remodelarea gingivală",
];

const candidateCases = [
  "Colorații dentare persistente",
  "Spații inestetice între dinți",
  "Forme dentare inegale",
  "Uzură dentară accentuată",
  "Fracturi minore la nivel frontal",
];

const benefits = [
  {
    title: "Încredere crescută",
    text: "Un zâmbet armonios contribuie la stima de sine și confort în interacțiunile sociale.",
  },
  {
    title: "Rezultate rapide",
    text: "Multe proceduri oferă rezultate vizibile într-un timp scurt, cu impact imediat.",
  },
  {
    title: "Aspect natural",
    text: "Materialele moderne permit integrarea perfectă cu trăsăturile faciale și dantura naturală.",
  },
  {
    title: "Sănătate orală susținută",
    text: "Pe lângă estetică, tratamentele contribuie la funcționalitate și igienă orală mai bună.",
  },
];

const technologies = [
  "CAD-CAM pentru lucrări protetice precise și rapide",
  "Laser dentar pentru proceduri estetice cu disconfort redus",
  "Amprentă digitală pentru acuratețe ridicată și confort sporit",
];

const processSteps = [
  {
    step: "01",
    title: "Consult și analiză",
    text: "Evaluare clinică, fotografii și analiză digitală pentru obiective estetice clare.",
  },
  {
    step: "02",
    title: "Plan personalizat",
    text: "Stabilirea etapelor potrivite cazului: estetică, funcționalitate, durabilitate.",
  },
  {
    step: "03",
    title: "Implementare tratament",
    text: "Aplicarea procedurilor recomandate, minim invaziv, cu materiale biocompatibile.",
  },
  {
    step: "04",
    title: "Monitorizare și întreținere",
    text: "Controale periodice și recomandări pentru menținerea rezultatului pe termen lung.",
  },
];

const faqItems = [
  {
    q: "Cine poate beneficia de tratamente de estetică dentară?",
    a: "Pacienții care își doresc îmbunătățirea aspectului zâmbetului și au o sănătate orală adecvată. La nevoie, se recomandă tratamente preliminare înaintea etapelor estetice.",
  },
  {
    q: "Tratamentele de estetică dentară sunt dureroase?",
    a: "În general, nu. Procedurile moderne folosesc anestezie locală și tehnologii minim invazive, astfel încât disconfortul este redus.",
  },
  {
    q: "Fațetele dentare afectează dinții naturali?",
    a: "Fațetele moderne sunt minim invazive și adaptate individual. Cu indicație corectă și tehnică adecvată, rezultatele sunt stabile și naturale.",
  },
  {
    q: "Cum se stabilesc costurile tratamentelor?",
    a: "Costurile depind de complexitatea cazului, numărul de dinți implicați, procedurile necesare și etapele de planificare. Estimarea este prezentată transparent în consultație.",
  },
];

const reviews = [
  {
    name: "Andreea Nisipeanu",
    meta: "3 recenzii",
    time: "acum o luna",
    text: "Recomand cu mare incredere Clinica Alverna Dental! De la prima vizita am fost intampinata cu multa caldura si profesionalism.",
  },
  {
    name: "Carmen Ilea",
    meta: "4 recenzii",
    time: "acum 2 luni",
    text: "Am fost impresionata de profesionalism, atentie la detalii si de tehnologia moderna din clinica. Voi reveni cu placere.",
  },
  {
    name: "Denisa Tanase",
    meta: "2 recenzii · O fotografie",
    time: "acum 3 luni",
    text: "Experienta foarte buna, comunicare clara si echipa prietenoasa. Fiecare pas a fost explicat pe intelesul meu.",
  },
];

const reveal = {
  initial: { opacity: 0, y: 28, scale: 0.99 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.75, ease: "easeOut" as const },
};

export default function EsteticaDentaraPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="bg-[#ececec] pb-24 pt-14 md:pt-20 lg:pt-[130px]">
      <section className="mx-auto w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
        <motion.div {...reveal} className="max-w-[1180px]">
          <p className="text-[12px] font-medium uppercase tracking-[0.13em] text-[#5c5c5c]">Tratamente moderne și eficiente</p>
          <h1 className="mt-5 max-w-[980px] text-[48px] font-extrabold leading-[0.9] tracking-[-0.05em] text-[#0A0A0A] md:text-[78px] lg:text-[118px]">
            Estetică dentară
          </h1>
          <p className="mt-7 max-w-[980px] text-[16px] leading-[1.75] text-[#373737] md:text-[17px]">
            Vă doriți un zâmbet strălucitor și sănătos? La Alverna Dental Studio Cluj, serviciile de estetică dentară completează tratamentele funcționale, pentru un rezultat armonios și natural.
            Abordăm culoarea, forma, poziția dinților și aspectul gingival, cu planuri personalizate și tehnologii moderne.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="/#contact" className="inline-flex h-[44px] items-center rounded-full bg-[#0A0A0A] px-6 text-[14px] font-semibold text-white transition duration-300 hover:scale-[1.02]">
              Solicită o evaluare
            </a>
            <a href="/tarife/" className="inline-flex h-[44px] items-center rounded-full border border-black/15 px-6 text-[14px] font-semibold text-[#0A0A0A] transition duration-300 hover:translate-x-[2px]">
              Vezi tarife
            </a>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto mt-7 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
        <motion.div {...reveal} className="relative overflow-hidden rounded-[28px]">
          <img src="/spark-hero.png" alt="Estetică dentară în Cluj-Napoca" className="h-[56vw] max-h-[700px] min-h-[320px] w-full object-cover saturate-[0.84] brightness-[0.84] transition duration-700 hover:scale-[1.02]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/44 via-black/18 to-black/10" />
          <p className="absolute left-5 top-5 rounded-full border border-white/25 bg-black/30 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-white">Zâmbet armonios și natural</p>
        </motion.div>
      </section>

      <section className="mx-auto mt-8 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
        <motion.div {...reveal} className="grid grid-cols-1 gap-6 border-y border-black/12 py-7 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {[
            ["Serviciu", "Estetică dentară Cluj-Napoca"],
            ["Obiectiv", "Zâmbet sănătos, strălucitor, armonios"],
            ["Abordare", "Personalizată, minim invazivă"],
            ["Rezultat", "Echilibru estetic și funcțional"],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="text-[11px] uppercase tracking-[0.12em] text-[#6a6a6a]">{label}</p>
              <p className="mt-2 text-[15px] font-semibold leading-[1.35] text-[#0A0A0A]">{value}</p>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto mt-16 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
        <motion.article {...reveal} className="grid border-t border-black/12 pt-10 lg:grid-cols-[minmax(260px,0.95fr)_minmax(0,1.55fr)] lg:gap-14">
          <h2 className="text-[32px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#0A0A0A] md:text-[44px]">Proceduri și tratamente de estetică dentară</h2>
          <ul className="mt-5 space-y-3 text-[16px] leading-[1.75] text-[#3b3b3b] lg:mt-0">
            {treatments.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-[10px] h-[4px] w-[4px] rounded-full bg-[#4E7044]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.article>

        <motion.article {...reveal} className="mt-14 grid border-t border-black/12 pt-10 lg:grid-cols-[minmax(260px,0.95fr)_minmax(0,1.55fr)] lg:gap-14">
          <h3 className="text-[30px] font-semibold leading-[1.05] tracking-[-0.028em] text-[#0A0A0A] md:text-[40px]">Cine poate beneficia?</h3>
          <div className="mt-5 grid grid-cols-1 gap-2 lg:mt-0">
            {candidateCases.map((item, idx) => (
              <motion.article key={item} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: idx * 0.06 }} className="rounded-[10px] px-3 py-2 text-[15px] font-medium leading-[1.45] text-[#1f1f1f] transition duration-300 hover:bg-black/[0.03]">
                {item}
              </motion.article>
            ))}
          </div>
        </motion.article>

        <motion.article {...reveal} className="mt-14 border-t border-black/12 pt-10">
          <h3 className="text-[30px] font-semibold leading-[1.05] tracking-[-0.028em] text-[#0A0A0A] md:text-[40px]">Cum decurge planul de tratament</h3>
          <div className="mt-7 divide-y divide-black/10">
            {processSteps.map((item, idx) => (
              <motion.article key={item.step} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.6, delay: idx * 0.08 }} className="grid gap-3 py-5 md:grid-cols-[90px_1fr_1.4fr] md:items-start">
                <p className="text-[30px] font-semibold leading-none tracking-[-0.03em] text-[#141414]/65">{item.step}</p>
                <p className="text-[19px] font-semibold leading-[1.2] text-[#0A0A0A]">{item.title}</p>
                <p className="text-[15px] leading-[1.65] text-[#3c3c3c]">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </motion.article>

        <motion.article {...reveal} className="mt-14 grid border-t border-black/12 pt-10 lg:grid-cols-[minmax(260px,0.95fr)_minmax(0,1.55fr)] lg:gap-14">
          <h3 className="text-[30px] font-semibold leading-[1.05] tracking-[-0.028em] text-[#0A0A0A] md:text-[40px]">Beneficii pe termen lung</h3>
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-0">
            {benefits.map((item, idx) => (
              <motion.article key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: idx * 0.08 }} className="border-t border-black/12 pt-4">
                <h4 className="text-[18px] font-semibold text-[#0A0A0A]">{item.title}</h4>
                <p className="mt-2 text-[15px] leading-[1.65] text-[#3b3b3b]">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </motion.article>

        <motion.article {...reveal} className="mt-14 grid border-t border-black/12 pt-10 lg:grid-cols-[minmax(260px,0.95fr)_minmax(0,1.55fr)] lg:gap-14">
          <h3 className="text-[30px] font-semibold leading-[1.05] tracking-[-0.028em] text-[#0A0A0A] md:text-[40px]">Tehnologii utilizate</h3>
          <ul className="mt-5 space-y-3 text-[16px] leading-[1.75] text-[#3b3b3b] lg:mt-0">
            {technologies.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-[10px] h-[4px] w-[4px] rounded-full bg-[#4E7044]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.article>

        <motion.article {...reveal} className="mt-14 border-t border-black/12 pt-10">
          <h3 className="text-[30px] font-semibold leading-[1.05] tracking-[-0.028em] text-[#0A0A0A] md:text-[40px]">Întrebări frecvente</h3>
          <div className="mt-7 divide-y divide-black/10">
            {faqItems.map((item, index) => (
              <article key={item.q} className="py-5">
                <button
                  type="button"
                  aria-expanded={openFaq === index}
                  onClick={() => setOpenFaq((prev) => (prev === index ? null : index))}
                  className="flex w-full items-start justify-between gap-4 text-left"
                >
                  <h4 className="text-[18px] font-semibold leading-[1.35] text-[#0A0A0A]">{item.q}</h4>
                  <span className="pt-1 text-[18px] text-[#0A0A0A]/60">{openFaq === index ? "−" : "+"}</span>
                </button>
                <div className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${openFaq === index ? "max-h-[260px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="mt-3 max-w-[1100px] text-[15px] leading-[1.7] text-[#3c3c3c]">{item.a}</p>
                </div>
              </article>
            ))}
          </div>
        </motion.article>
      </section>

      <section className="mt-14 bg-[#ececec] pb-[90px] pt-[10px] lg:pb-[120px]">
        <div className="mx-auto w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
          <div className="flex items-start justify-between gap-6">
            <h2 className="text-[42px] font-semibold leading-[0.92] tracking-[-0.03em] text-[#0A0A0A] md:text-[58px] lg:text-[72px]">
              Cazuri <span className="text-[#666]">mai în detaliu</span>
              <br />
              <span className="text-[#666]">before and after</span>
            </h2>
            <a href="/cazuri/" className="mt-5 rounded-full bg-black px-6 py-2 text-xs font-semibold text-white">
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

      <section className="bg-[#ececec] pb-[110px]">
        <div className="mx-auto mt-2 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#5f5f5f]">✚ Testimoniale</p>
          <h3 className="mt-2 text-[46px] font-semibold leading-[0.92] tracking-[-0.03em] text-[#0A0A0A] md:text-[62px]">Recenzii</h3>
          <p className="mt-3 text-[16px] font-semibold text-[#0A0A0A]">Scor mediu: 4.8 ⭐</p>
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

          {reviews.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
              className="flex min-h-[300px] flex-col rounded-[18px] bg-[#f5f5f5] p-[22px]"
            >
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
            </motion.article>
          ))}
        </div>
      </section>

      <section id="contact" className="relative w-full overflow-hidden bg-[#0A0A0A] py-20 md:py-[120px]">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute right-[-120px] top-1/2 z-0 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#4E7044] opacity-45 blur-[120px] [will-change:transform]"
          animate={{ y: [-20, 20, -20], scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

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

      <section className="mx-auto mt-16 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
        <motion.div {...reveal} className="relative overflow-hidden rounded-[28px] bg-[#0A0A0A] p-8 text-white md:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-24 -top-20 h-[220px] w-[220px] rounded-full bg-[#4E7044]/30 blur-[90px]" />
          <h3 className="text-[30px] font-semibold leading-[1.05] tracking-[-0.028em] md:text-[40px]">Vrei un zâmbet strălucitor și armonios?</h3>
          <p className="mt-4 max-w-[980px] text-[16px] leading-[1.7] text-white/82">
            Programează o consultație la Alverna Dental Studio și descoperă ce plan personalizat de estetică dentară se potrivește obiectivelor tale.
          </p>
          <a href="/#contact" className="mt-7 inline-flex h-[44px] items-center rounded-full bg-white px-6 text-[14px] font-semibold text-[#0A0A0A] transition duration-300 hover:scale-[1.02]">
            Solicită programare
          </a>
          <p className="mt-4 text-[13px] text-white/65">Te contactăm în maxim 24h pentru confirmare.</p>
        </motion.div>
      </section>
    </main>
  );
}
