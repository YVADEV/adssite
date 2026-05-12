"use client";

import { useState } from "react";
import { motion } from "motion/react";
import alvernaLogo from "@/assets/alverna-logo.png";

const procedures = [
  "Educație dentară și profilaxie adaptată vârstei",
  "Tratamente pentru carii dentare la copii",
  "Managementul abceselor dentare",
  "Monitorizarea erupției dinților permanenți",
  "Corectarea obiceiurilor care afectează mușcătura",
  "Planuri de controale periodice (6 luni / 3 luni)",
];

const commonIssues = [
  "Caria dentară",
  "Abcese dentare",
  "Poziționare deficitară a dinților permanenți",
  "Masticație deficitară",
  "Demineralizarea smalțului",
  "Malocluzii",
];

const fearPrevention = [
  "Explicații oneste, pe înțelesul copilului, înainte de vizită.",
  "Folosirea unui limbaj pozitiv legat de consultație.",
  "Evitarea expresiilor care pot amplifica teama.",
  "Familiarizare graduală cu echipa medicală și instrumentele.",
  "Vizite periodice pentru a transforma consultul într-o rutină firească.",
];

const faqItems = [
  {
    q: "Când ar trebui prima vizită la pedodont?",
    a: "Ideal, odată cu apariția primului dințișor de lapte, în jurul vârstei de 6-8 luni.",
  },
  {
    q: "Cât de des trebuie controale la stomatologie copii?",
    a: "În general la 6 luni, iar în perioada erupției dinților permanenți, uneori la 3 luni, conform recomandării medicului.",
  },
  {
    q: "Cum prevenim frica de dentist?",
    a: "Prin vizite regulate, explicații pozitive și o familiarizare treptată a copilului cu mediul din cabinet.",
  },
  {
    q: "Dinții de lapte chiar trebuie tratați?",
    a: "Da. Dinții temporari au rol esențial în dezvoltarea dentiției permanente, masticație și aliniere.",
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

export default function PedodontiePageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="bg-[#0A0A0A] pb-24">
      <section className="relative w-full overflow-hidden bg-black">
        <div className="relative h-[78vh] min-h-[600px] max-h-[900px] w-full">
          <img
            src="/services/pediatric-baby.png"
            alt="Stomatologie pediatrică la Alverna Dental Studio"
            className="absolute inset-0 h-full w-full object-cover saturate-[0.92] brightness-[0.72]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/55 to-black" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black to-transparent" />
          <div className="absolute left-4 top-5 z-10 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/50 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur md:left-8 md:top-7 lg:left-12 lg:top-9">
            <span className="inline-block h-[6px] w-[6px] rounded-full bg-[#9fc48f]" />
            Stomatologie pediatrică Cluj
          </div>
          <div className="relative z-10 mx-auto flex h-full w-full max-w-[1680px] flex-col justify-end px-4 pb-12 pt-24 md:px-8 md:pb-16 md:pt-28 lg:px-12 lg:pb-20 lg:pt-32">
            <motion.div {...reveal} className="max-w-[1180px]">
              <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#9fc48f]">Pedodonție</p>
              <h1 className="mt-5 max-w-[980px] text-[44px] font-extrabold leading-[0.92] tracking-[-0.05em] text-white md:text-[76px] lg:text-[112px]">
                Stomatologie copii
              </h1>
              <p className="mt-6 max-w-[820px] text-[16px] leading-[1.75] text-white/80 md:text-[17px]">
                Vă stăm la dispoziție cu servicii de stomatologie copii / pedodonție de la apariția primului dințișor de lapte, până la dezvoltarea obiceiurilor de igienă dentară.
            Medicii specialiști Alverna Dental Studio sunt alături de copilul dvs. în fiecare etapă, cu accent pe prevenție, confort și experiențe pozitive la dentist.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/#contact" className="inline-flex h-[46px] items-center rounded-full bg-white px-6 text-[14px] font-semibold text-[#0A0A0A] transition duration-300 hover:scale-[1.02]">
                  Solicită o evaluare
                </a>
                <a href="/tarife/" className="inline-flex h-[46px] items-center rounded-full border border-white/35 bg-white/5 px-6 text-[14px] font-semibold text-white backdrop-blur transition duration-300 hover:bg-white/10">
                  Vezi tarife
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
        <motion.div {...reveal} className="grid grid-cols-1 gap-6 border-y border-black/12 py-7 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {[
            ["Serviciu", "Stomatologie copii / pedodonție"],
            ["Vârsta recomandată", "De la primul dinte de lapte"],
            ["Frecvență controale", "La 6 luni sau conform recomandării"],
            ["Obiectiv", "Prevenție, tratament, obiceiuri sănătoase"],
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
          <h2 className="text-[32px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#0A0A0A] md:text-[44px]">Pedodonție: servicii de stomatologie copii Cluj</h2>
          <p className="mt-5 text-[16px] leading-[1.75] text-[#3a3a3a] lg:mt-0">
            Mersul la stomatolog ar trebui să fie un obicei firesc și o experiență pozitivă pentru orice copil. În clinicile Alverna Dental Studio,
            dispunem de personal medical cu experiență în interacțiunea cu cei mici, astfel încât fiecare vizită să fie un prilej de învățare pentru copil și părinte.
          </p>
        </motion.article>

        <motion.article {...reveal} className="mt-14 grid border-t border-black/12 pt-10 lg:grid-cols-[minmax(260px,0.95fr)_minmax(0,1.55fr)] lg:gap-14">
          <h3 className="text-[30px] font-semibold leading-[1.05] tracking-[-0.028em] text-[#0A0A0A] md:text-[40px]">Dentiția temporară: dințișorii de lapte sunt importanți</h3>
          <div className="mt-5 space-y-4 text-[16px] leading-[1.75] text-[#3b3b3b] lg:mt-0">
            <p>
              Dinții de lapte au rol esențial în dezvoltarea unei danturi sănătoase. Problemele netratate la dentiția temporară pot influența alinierea dinților permanenți,
              masticația și dezvoltarea ocluziei.
            </p>
            <p>
              Prima vizită la stomatologul pediatric este recomandată în jurul vârstei de 6-8 luni, odată cu apariția primilor dințișori.
              Medicul pedodont are și rol de educator pentru igiena orală corectă încă din primii ani de viață.
            </p>
          </div>
        </motion.article>

        <motion.article {...reveal} className="mt-14 grid border-t border-black/12 pt-10 lg:grid-cols-[minmax(260px,0.95fr)_minmax(0,1.55fr)] lg:gap-14">
          <h3 className="text-[30px] font-semibold leading-[1.05] tracking-[-0.028em] text-[#0A0A0A] md:text-[40px]">Proceduri stomatologice pentru copii</h3>
          <ul className="mt-5 space-y-3 text-[16px] leading-[1.75] text-[#3b3b3b] lg:mt-0">
            {procedures.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-[10px] h-[4px] w-[4px] rounded-full bg-[#4E7044]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.article>

        <motion.article {...reveal} className="mt-14 grid border-t border-black/12 pt-10 lg:grid-cols-[minmax(260px,0.95fr)_minmax(0,1.55fr)] lg:gap-14">
          <h3 className="text-[30px] font-semibold leading-[1.05] tracking-[-0.028em] text-[#0A0A0A] md:text-[40px]">Cu ce afecțiuni dentare se confruntă copiii?</h3>
          <div className="mt-5 grid grid-cols-1 gap-2 lg:mt-0">
            {commonIssues.map((item, idx) => (
              <motion.article key={item} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: idx * 0.06 }} className="rounded-[10px] px-3 py-2 text-[15px] font-medium leading-[1.45] text-[#1f1f1f] transition duration-300 hover:bg-black/[0.03]">
                {item}
              </motion.article>
            ))}
          </div>
        </motion.article>

        <motion.article {...reveal} className="mt-14 grid border-t border-black/12 pt-10 lg:grid-cols-[minmax(260px,0.95fr)_minmax(0,1.55fr)] lg:gap-14">
          <h3 className="text-[30px] font-semibold leading-[1.05] tracking-[-0.028em] text-[#0A0A0A] md:text-[40px]">Când trebuie să programați vizita la pedodont?</h3>
          <div className="mt-5 space-y-4 text-[16px] leading-[1.75] text-[#3a3a3a] lg:mt-0">
            <p>
              Prima vizită este recomandată la apariția primului dinte de lapte. Ulterior, controalele regulate, din 6 în 6 luni, ajută la identificarea timpurie
              a problemelor dentare și la prevenție eficientă.
            </p>
            <p>
              În perioada erupției dinților permanenți (5-7 ani), pot fi indicate controale mai dese, inclusiv din 3 în 3 luni.
              În caz de durere, traumatisme sau disconfort, consultul stomatologic trebuie făcut imediat.
            </p>
          </div>
        </motion.article>

        <motion.article {...reveal} className="mt-14 border-t border-black/12 pt-10">
          <h3 className="text-[30px] font-semibold leading-[1.05] tracking-[-0.028em] text-[#0A0A0A] md:text-[40px]">Cum gestionăm frica de dentist?</h3>
          <div className="mt-7 divide-y divide-black/10">
            {fearPrevention.map((item, idx) => (
              <motion.article key={item} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.6, delay: idx * 0.08 }} className="grid gap-3 py-5 md:grid-cols-[90px_1fr] md:items-start">
                <p className="text-[30px] font-semibold leading-none tracking-[-0.03em] text-[#141414]/65">{`0${idx + 1}`}</p>
                <p className="text-[15px] leading-[1.65] text-[#3c3c3c]">{item}</p>
              </motion.article>
            ))}
          </div>
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
                <div className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${openFaq === index ? "max-h-[220px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="mt-3 max-w-[980px] text-[15px] leading-[1.7] text-[#3c3c3c]">{item.a}</p>
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
          <h3 className="text-[30px] font-semibold leading-[1.05] tracking-[-0.028em] md:text-[40px]">Servicii profesionale de stomatologie copii Cluj</h3>
          <p className="mt-4 max-w-[960px] text-[16px] leading-[1.7] text-white/82">
            Misiunea echipei Alverna Dental Studio este să ofere tuturor pacienților, mici și mari, șansa de a zâmbi fără rețineri.
            Pentru programări, vă rugăm să ne contactați.
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
