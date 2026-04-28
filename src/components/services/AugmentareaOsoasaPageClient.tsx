"use client";

import { useState } from "react";
import { motion } from "motion/react";
import alvernaLogo from "@/assets/alverna-logo.png";

const causes = [
  "Extracții dentare neurmate de înlocuirea dinților lipsă",
  "Infecții gingivale sau osoase cu evoluție lentă",
  "Boli parodontale avansate",
  "Traumatisme care au afectat osul maxilar",
  "Chisturi maxilare sau tumori",
];

const benefits = [
  {
    title: "Stabilitate pentru implanturi",
    text: "Asigură suport osos adecvat și crește rata de succes a procedurilor ulterioare.",
  },
  {
    title: "Funcționalitate îmbunătățită",
    text: "Redă eficiența masticației și susține funcționarea corectă a danturii.",
  },
  {
    title: "Estetică facială",
    text: "Previne colapsul maxilar și contribuie la un profil facial armonios.",
  },
  {
    title: "Rezultate de durată",
    text: "Crește longevitatea implanturilor și menține echilibrul dento-maxilar.",
  },
];

const materials = [
  "Biomateriale sintetice (aloplastice): hidroxiapatită, fosfați de calciu",
  "Os autolog (propriu): compatibilitate biologică excelentă",
  "Xenogrefe: materiale de origine bovină, tratate și biocompatibile",
  "Alogrefe: os uman prelucrat din bănci de țesut",
];

const technologies = [
  "Membrane resorbabile / neresorbabile pentru protecția zonei grefate",
  "Factori biologici de creștere (PRF) pentru accelerarea vindecării",
  "Echipamente chirurgicale de precizie pentru traumă tisulară minimă",
];

const processSteps = [
  {
    step: "01",
    title: "Evaluare și planificare",
    text: "Investigații imagistice (radiografie panoramică / CBCT 3D) și alegerea tipului de grefă.",
  },
  {
    step: "02",
    title: "Intervenția chirurgicală",
    text: "Adiția osoasă se realizează sub anestezie locală și durează, în general, 45-90 de minute.",
  },
  {
    step: "03",
    title: "Vindecare și osteointegrare",
    text: "Materialul se integrează în 4-6 luni, cu monitorizare periodică.",
  },
  {
    step: "04",
    title: "Inserarea implantului",
    text: "După confirmarea integrării osoase, se realizează etapa finală de restaurare.",
  },
];

const faqItems = [
  {
    q: "Ce se întâmplă în tot procesul de tratament?",
    a: "În prima etapă, medicul chirurg realizează o incizie gingivală pentru expunerea osului maxilar. Zona este pregătită, se aplică materialul biocompatibil de adiție, apoi gingia este suturată și protejată cu un baraj local.",
  },
  {
    q: "Care este gradul de disconfort?",
    a: "Procedura este complexă, dar disconfortul este redus, deoarece se efectuează sub anestezie locală. În situații speciale, poate fi luată în calcul și anestezia generală.",
  },
  {
    q: "Există riscuri asociate tratamentului de adiție osoasă?",
    a: "Ca orice intervenție chirurgicală, există riscuri minore și rare: inflamație locală temporară, infecție locală, respingerea grefei sau resorbție parțială a materialului. Cu protocoale corecte și monitorizare, acestea sunt bine controlate.",
  },
  {
    q: "Care este rata de succes a procedurii?",
    a: "Rata de succes este foarte ridicată, mai ales când procedura este realizată într-o clinică specializată, cu materiale de calitate, planificare corectă și respectarea indicațiilor post-operatorii.",
  },
  {
    q: "Cum decurge recuperarea după augmentarea osoasă?",
    a: "Vindecarea durează, de regulă, 4-6 luni. În primele 24-48 de ore pot apărea inflamație ușoară și disconfort local. Recomandările medicale privind igiena, dieta, medicația și controalele sunt esențiale pentru un rezultat optim.",
  },
  {
    q: "Ce responsabilități are pacientul?",
    a: "Pacientul trebuie să urmeze strict indicațiile medicului: igienă orală atentă, evitarea fumatului și alcoolului, respectarea medicației, prezentarea la controale și menținerea unui regim alimentar adecvat în perioada post-operatorie.",
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

export default function AugmentareaOsoasaPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="bg-[#ececec] pb-24 pt-14 md:pt-20 lg:pt-[130px]">
      <section className="mx-auto w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
        <motion.div {...reveal} className="max-w-[1180px]">
          <p className="text-[12px] font-medium uppercase tracking-[0.13em] text-[#5c5c5c]">Chirurgie orală</p>
          <h1 className="mt-5 max-w-[980px] text-[48px] font-extrabold leading-[0.9] tracking-[-0.05em] text-[#0A0A0A] md:text-[78px] lg:text-[118px]">
            Augmentarea osoasă
          </h1>
          <p className="mt-7 max-w-[980px] text-[16px] leading-[1.75] text-[#373737] md:text-[17px]">
            Augmentarea osoasă reprezintă procedura de refacere sau regenerare a osului maxilar, astfel încât acesta să poată susține implanturi dentare, punți sau proteze. Insuficiența osoasă nu produce de obicei durere, dar devine o problemă majoră în momentul în care este necesară restaurarea dentară.
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
          <img src="/spark-hero.png" alt="Augmentare osoasă și regenerare maxilară" className="h-[56vw] max-h-[700px] min-h-[320px] w-full object-cover saturate-[0.82] brightness-[0.82] transition duration-700 hover:scale-[1.02]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/44 via-black/18 to-black/10" />
          <p className="absolute left-5 top-5 rounded-full border border-white/25 bg-black/30 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-white">Adiție de os Cluj</p>
        </motion.div>
      </section>

      <section className="mx-auto mt-8 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
        <motion.div {...reveal} className="grid grid-cols-1 gap-6 border-y border-black/12 py-7 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {[
            ["Procedură", "Augmentare osoasă / adiție de os"],
            ["Indicație", "Volum osos insuficient pentru implant"],
            ["Durată vindecare", "Aproximativ 4-6 luni"],
            ["Obiectiv", "Bază stabilă pentru restaurare dentară"],
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
          <h2 className="text-[32px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#0A0A0A] md:text-[44px]">Augmentare osoasă (adiție de os)</h2>
          <p className="mt-5 text-[16px] leading-[1.75] text-[#3a3a3a] lg:mt-0">
            Augmentarea osoasă, denumită și grefare sau adiție de os, este procedura prin care se reface volumul osului maxilar, cu materiale biocompatibile și tehnici moderne. Scopul principal este obținerea unei fundații solide pentru implanturi dentare stabile și funcționale pe termen lung.
          </p>
        </motion.article>

        <motion.article {...reveal} className="mt-14 grid border-t border-black/12 pt-10 lg:grid-cols-[minmax(260px,0.95fr)_minmax(0,1.55fr)] lg:gap-14">
          <h3 className="text-[30px] font-semibold leading-[1.05] tracking-[-0.028em] text-[#0A0A0A] md:text-[40px]">Când este necesară augmentarea osoasă?</h3>
          <div className="mt-5 space-y-4 text-[16px] leading-[1.75] text-[#3b3b3b] lg:mt-0">
            <p>
              Adiția de os este indicată când pacientul nu are suficient țesut osos pentru a susține corect un implant dentar. Fără suport osos adecvat, implantul nu se poate fixa stabil.
            </p>
            <p>
              Una dintre cele mai frecvente cauze este pierderea dinților neurmată de restaurare în timp util. În lipsa rădăcinii dentare, osul începe să se resoarbă treptat.
            </p>
            <ul className="space-y-2">
              {causes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-[10px] h-[4px] w-[4px] rounded-full bg-[#4E7044]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.article>

        <motion.article {...reveal} className="mt-14 grid border-t border-black/12 pt-10 lg:grid-cols-[minmax(260px,0.95fr)_minmax(0,1.55fr)] lg:gap-14">
          <h3 className="text-[30px] font-semibold leading-[1.05] tracking-[-0.028em] text-[#0A0A0A] md:text-[40px]">De ce este importantă augmentarea osoasă?</h3>
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-0">
            {benefits.map((item, idx) => (
              <motion.article key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: idx * 0.08 }} className="border-t border-black/12 pt-4">
                <h4 className="text-[18px] font-semibold text-[#0A0A0A]">{item.title}</h4>
                <p className="mt-2 text-[15px] leading-[1.65] text-[#3b3b3b]">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </motion.article>

        <motion.article {...reveal} className="mt-14 border-t border-black/12 pt-10">
          <h3 className="text-[30px] font-semibold leading-[1.05] tracking-[-0.028em] text-[#0A0A0A] md:text-[40px]">Cum se realizează augmentarea osoasă?</h3>
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
          <h3 className="text-[30px] font-semibold leading-[1.05] tracking-[-0.028em] text-[#0A0A0A] md:text-[40px]">Cât costă augmentarea osoasă?</h3>
          <div className="mt-5 space-y-4 text-[16px] leading-[1.75] text-[#3b3b3b] lg:mt-0">
            <p>
              Costul variază în funcție de dimensiunea zonei, tipul de material osos utilizat, complexitatea procedurii, investigațiile necesare și eventualele intervenții asociate.
            </p>
            <p>
              În cadrul Alverna Dental Studio, fiecare pacient primește un plan personalizat, iar tarifele sunt comunicate transparent după consultația inițială.
            </p>
            <p>
              Pentru confortul pacienților, există opțiuni de plată în rate prin parteneriate dedicate.
            </p>
          </div>
        </motion.article>

        <motion.article {...reveal} className="mt-14 grid border-t border-black/12 pt-10 lg:grid-cols-[minmax(260px,0.95fr)_minmax(0,1.55fr)] lg:gap-14">
          <h3 className="text-[30px] font-semibold leading-[1.05] tracking-[-0.028em] text-[#0A0A0A] md:text-[40px]">Materiale și tehnologii utilizate</h3>
          <div className="mt-5 space-y-4 text-[16px] leading-[1.75] text-[#3b3b3b] lg:mt-0">
            <p className="font-semibold text-[#0A0A0A]">Tipuri de materiale utilizate în adiția osoasă:</p>
            <ul className="space-y-2">
              {materials.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-[10px] h-[4px] w-[4px] rounded-full bg-[#4E7044]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-semibold text-[#0A0A0A]">Tehnologii moderne pentru regenerare osoasă:</p>
            <ul className="space-y-2">
              {technologies.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-[10px] h-[4px] w-[4px] rounded-full bg-[#4E7044]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.article>

        <motion.article {...reveal} className="mt-14 border-t border-black/12 pt-10">
          <h3 className="text-[30px] font-semibold leading-[1.05] tracking-[-0.028em] text-[#0A0A0A] md:text-[40px]">Întrebări frecvente despre augmentarea osoasă</h3>
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
                <div className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${openFaq === index ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"}`}>
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
          <h3 className="text-[30px] font-semibold leading-[1.05] tracking-[-0.028em] md:text-[40px]">Programați-vă pentru augmentare osoasă în Cluj</h3>
          <p className="mt-4 max-w-[980px] text-[16px] leading-[1.7] text-white/82">
            Nu lăsați insuficiența osoasă să vă limiteze opțiunile de tratament. Specialiștii Alverna Dental Studio vă oferă planuri personalizate, tehnici moderne și o abordare sigură, predictibilă.
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
