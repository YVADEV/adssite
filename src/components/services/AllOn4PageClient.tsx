"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";

import {
  ServicePageShell,
  ServiceHero,
  ServiceQuickFacts,
  ServiceParagraphSection,
  ServiceBulletsSection,
  ServiceCardsSection,
  ServiceStepsSection,
  ServiceTextBlock,
  ServiceContentSection,
  ServiceFAQ,
  ServiceCasesGrid,
  ServiceTestimonials,
  ServiceContactForm,
  ServiceFinalCTA,
} from "./ServicePageParts";
import { IMPLANT_CASE_STRIP } from "@/config/case-strips";
import { useMotionReady } from "@/hooks/useMotionReady";
import { motionRevealProps } from "@/lib/motion-reveal";
import raduImage from "@/assets/echipa/radu-nichimis.png";
import andreeaImage from "@/assets/echipa/andreea-parvu.png";
import lauraImage from "@/assets/echipa/laura-grigorean.png";

const whatIsCards = [
  {
    title: "All-on-4",
    text: "Folosește 4 implanturi, poziționate strategic astfel încât să valorifice cât mai bine osul disponibil.",
  },
  {
    title: "All-on-6",
    text: "Folosește 6 implanturi, pentru o distribuție suplimentară a forțelor de masticație, recomandată în funcție de calitatea osului și de solicitarea mecanică estimată.",
  },
];

const digitalFlowCards = [
  {
    title: "Evaluare digitală",
    text: "Tomografie computerizată 3D (CBCT) și scanare intraorală digitală, pentru o imagine completă a osului, gingiilor și ocluziei.",
  },
  {
    title: "Ședință foto și design digital al zâmbetului",
    text: "Fotografii faciale și ale zâmbetului, folosite pentru a proiecta digital forma, proporțiile și aspectul final al lucrării, înainte de a începe tratamentul.",
  },
  {
    title: "Planificare digitală",
    text: "Poziționarea implanturilor este stabilită pe baza datelor 3D, nu estimată vizual.",
  },
  {
    title: "Laborator propriu, full digital",
    text: "Spre deosebire de clinicile care trimit lucrările la laboratoare externe, Alverna Dental Studio dispune de propriul laborator de tehnică dentară, complet echipat digital (scanare, design CAD, frezare/printare CAM). Asta înseamnă control direct asupra calității, comunicare rapidă între medic și tehnician, și un timp de lucru redus.",
  },
  {
    title: "Lucrare protetică digitală",
    text: "De la amprenta digitală până la lucrarea finală, fără amprente clasice incomode.",
  },
];

const recommendedFor = [
  "Pacienți cu edentație totală, pe una sau ambele arcade",
  "Pacienți cu proteze mobile actuale, incomode sau instabile",
  "Pacienți cu dinți rămași puternic compromiși, care urmează să fie extrași",
  "Pacienți care doresc o soluție fixă, cu un plan de tratament clar, stabilit digital încă de la evaluarea inițială",
];

const processSteps = [
  {
    step: "01",
    title: "Consultația și evaluarea digitală",
    text: "CBCT și scanare intraorală, pentru un plan de tratament personalizat.",
  },
  {
    step: "02",
    title: "Ședința foto și designul digital al zâmbetului",
    text: "Fotografii și simulare digitală a rezultatului final, discutate împreună cu pacientul.",
  },
  {
    step: "03",
    title: "Evaluarea parodontală",
    text: "Verificarea și pregătirea gingiilor și a osului restant.",
  },
  {
    step: "04",
    title: "Intervenția chirurgicală",
    text: "Inserarea implanturilor, sub anestezie locală.",
  },
  {
    step: "05",
    title: "Scanarea digitală pentru lucrarea protetică",
    text: "Realizată în perioada imediat următoare intervenției.",
  },
  {
    step: "06",
    title: "Confecționarea lucrării în laboratorul propriu",
    text: "Proces digital, de la design până la finisare.",
  },
  {
    step: "07",
    title: "Osteointegrarea",
    text: "Perioada de vindecare, monitorizată periodic.",
  },
  {
    step: "08",
    title: "Montarea lucrării finale",
    text: "Adaptată individual, verificată clinic.",
  },
];

const comparisonRows = [
  ["Stabilitate", "Fixă, nu se mișcă", "Poate aluneca la masticație"],
  ["Planificare", "Digitală, personalizată", "De obicei fără planificare 3D"],
  ["Confecționare lucrare", "Laborator propriu, digital", "Adesea laborator extern"],
  ["Confort masticator", "Aproape identic cu dinții naturali", "Redus"],
  ["Îngrijire osoasă", "Previne resorbția osoasă", "Nu previne resorbția"],
] as const;

const surgicalPrices = [
  { name: "All-on-4 INNO", detail: "4 implanturi, o arcadă", price: "2.000 €" },
  { name: "All-on-4 Neodent", detail: "4 implanturi, o arcadă", price: "3.000 €" },
  { name: "All-on-4 Straumann", detail: "4 implanturi, o arcadă", price: "5.000 €" },
  { name: "All-on-6 INNO", detail: "6 implanturi, o arcadă", price: "3.500 €" },
  { name: "All-on-6 Neodent", detail: "6 implanturi, o arcadă", price: "4.000 €" },
  { name: "All-on-6 Straumann", detail: "6 implanturi, o arcadă", price: "6.000 €" },
] as const;

const faqItems = [
  {
    q: "Este dureroasă procedura?",
    a: "Intervenția se realizează sub anestezie locală, iar disconfortul postoperator este gestionat prin medicație antialgică.",
  },
  {
    q: "Cât durează tratamentul complet?",
    a: "Durata variază de la pacient la pacient, în funcție de planul stabilit digital la evaluarea inițială. Perioada de osteointegrare este, în medie, de 3–6 luni.",
  },
  {
    q: "Ce înseamnă că laboratorul e „propriu și digital”?",
    a: "Alverna Dental Studio are propriul laborator de tehnică dentară, în cadrul clinicii, unde lucrările protetice sunt proiectate și confecționate digital — de la scanare la frezare/printare — fără a fi trimise la un laborator extern.",
  },
  {
    q: "Care este diferența dintre All-on-4 și All-on-6?",
    a: "Numărul de implanturi folosite pentru susținerea arcadei. Alegerea depinde de calitatea și cantitatea osului disponibil, stabilită prin evaluarea digitală (CBCT).",
  },
  {
    q: "Se poate face procedura dacă am pierdut deja mult os?",
    a: "Depinde de fiecare caz — se stabilește după evaluarea digitală. În unele situații poate fi necesară o augmentare osoasă prealabilă.",
  },
  {
    q: "Este potrivită pentru pacienții din afara Clujului sau din străinătate?",
    a: "Da — planificarea digitală permite o organizare eficientă a etapelor tratamentului, utilă mai ales pentru pacienții care vin din alte orașe sau țări.",
  },
];

const doctorVideos = [
  {
    name: "Asist. Univ. Dr. Radu Nichimiș",
    role: "Specialist Chirurgie Orală și MaxiloFacială",
    image: raduImage,
    href: "/echipa/radu-nichimis/",
    bio: "Coordonează partea chirurgicală: evaluarea osoasă digitală, planificarea și inserarea implanturilor.",
    questions: [
      {
        q: "Ce este, pe scurt, All-on-4 / All-on-6?",
        a: "Sunt soluții de reabilitare completă a unei arcade, folosind 4 sau 6 implanturi pe care se sprijină o lucrare fixă. Practic, înlocuim o dantură compromisă sau lipsă cu o soluție stabilă, fără proteză mobilă.",
      },
      {
        q: "Cum decideți dacă un pacient e candidat pentru această procedură?",
        a: "Totul pornește de la o evaluare digitală completă — o tomografie 3D și o scanare intraorală. Astea ne arată exact câtă structură osoasă avem disponibilă și ne ajută să planificăm poziția implanturilor înainte de a intra în operație.",
      },
      {
        q: "Ce se întâmplă dacă pacientul a pierdut deja mult os?",
        a: "Nu e neapărat un impediment. Planificarea digitală ne permite să vedem din timp dacă e nevoie de o augmentare osoasă sau dacă putem lucra direct cu osul existent. Fiecare caz e diferit, de-asta insistăm pe evaluarea 3D înainte să stabilim orice.",
      },
      {
        q: "Cum arată, pentru pacient, ziua intervenției?",
        a: "Se realizează sub anestezie locală. Pacientul e conștient, dar nu simte durere. Discutăm dinainte toți pașii, ca să știe exact la ce să se aștepte.",
      },
      {
        q: "De ce contează planificarea digitală, mai exact?",
        a: "Pentru că elimină din ghicit. Vedem structura osoasă tridimensional, nu doar pe o radiografie plată, și asta ne dă o precizie mult mai mare încă din faza de plan.",
      },
    ],
  },
  {
    name: "Dr. Laura Grigorean",
    role: "Stomatologie generală / Specialist Parodontologie",
    image: lauraImage,
    href: "/echipa/",
    bio: "Evaluează și pregătește gingiile și țesuturile de susținere, asigurând un teren sănătos pentru osteointegrare.",
    questions: [
      {
        q: "De ce e nevoie de un consult de parodontologie înainte de implanturi?",
        a: "Pentru că un implant are nevoie de un „teren” sănătos ca să reușească pe termen lung — gingie și os fără infecție activă. Dacă sărim peste acest pas, riscăm complicații ulterioare.",
      },
      {
        q: "Care e, de fapt, principala cauză pentru care pacienții ajung să aibă nevoie de All-on-4/6?",
        a: "În marea majoritate a cazurilor, boala parodontală netratată. E o afecțiune care distruge treptat osul și gingia din jurul dinților, până la pierderea lor completă.",
      },
      {
        q: "Ce evaluați, mai exact, înainte de intervenția chirurgicală?",
        a: "Verificăm starea gingiilor, prezența oricărei infecții și calitatea osului rămas. Tot ce facem se bazează pe evaluarea digitală realizată la început, ca să avem o imagine clară, nu doar o estimare.",
      },
      {
        q: "Ce se întâmplă dacă găsiți o problemă activă?",
        a: "O tratăm înainte de a trece mai departe. Nu grăbim pacientul spre chirurgie dacă terenul nu e pregătit — asta afectează direct șansele de reușită ale implanturilor.",
      },
      {
        q: "Ce rol aveți după intervenție?",
        a: "Monitorizăm sănătatea gingiei din jurul implanturilor pe termen lung, pentru că menținerea acestui teren sănătos e la fel de importantă ca intervenția în sine.",
      },
    ],
  },
  {
    name: "Dr. Andreea Pârvu",
    role: "Stomatologie generală și protetică",
    image: andreeaImage,
    href: "/echipa/",
    bio: "Coordonează planificarea protetică digitală și lucrarea finală, realizată în laboratorul propriu al clinicii.",
    questions: [
      {
        q: "Ce se întâmplă, practic, după ce implanturile sunt inserate?",
        a: "Urmează partea de protetică — planificăm și realizăm lucrarea fixă care va sta pe implanturi. Aici intervine laboratorul nostru propriu.",
      },
      {
        q: "Ce înseamnă că aveți laborator propriu, digital?",
        a: "Înseamnă că nu trimitem lucrarea la un laborator extern. Totul — de la scanarea digitală, la proiectarea 3D, până la confecționarea propriu-zisă — se întâmplă aici, în clinică. Asta ne dă control direct asupra calității și o comunicare mult mai rapidă între mine, ca medic, și tehnician.",
      },
      {
        q: "De ce contează acest lucru pentru pacient?",
        a: "Pentru că orice ajustare — de formă, culoare, ocluzie — se poate face rapid, fără să aștepți zile întregi un du-te-vino cu un laborator extern. Practic, lucrarea e gândită pentru pacientul din fața mea, nu pentru un standard general.",
      },
      {
        q: "Cum arată procesul de scanare pentru lucrarea protetică?",
        a: "Folosim scanare intraorală digitală, nu amprente clasice. E mult mai confortabil pentru pacient și mult mai precis.",
      },
      {
        q: "Ce contează cel mai mult pentru dvs. la o lucrare finală?",
        a: "Ca pacientul să se recunoască în zâmbetul lui — să fie natural, potrivit fizionomiei lui, nu doar „o arcadă de dinți”. Și, bineînțeles, să fie funcțional pe termen lung.",
      },
    ],
  },
] as const;

function VideoPlaceholder({ name }: { name: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-[18px] border border-white/12 bg-[#111]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(78,112,68,0.28),transparent_55%)]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-3 text-center sm:gap-3 sm:px-4">
        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/45 text-white backdrop-blur sm:h-14 sm:w-14">
          <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6" aria-hidden>
            <path fill="currentColor" d="M8.5 6.8v10.4L18 12 8.5 6.8Z" />
          </svg>
        </span>
        <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-white/80 sm:text-[16px] sm:tracking-[0.14em]">
          Clip video — în curând
        </p>
        <p className="max-w-[280px] px-1 text-[14px] leading-[1.4] text-white/55 sm:text-[16px] sm:leading-[1.45]">{name}</p>
      </div>
    </div>
  );
}

function DoctorVideoBlock({
  doctor,
}: {
  doctor: (typeof doctorVideos)[number];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <article className="grid gap-6 border-t border-white/10 pt-10 min-[900px]:grid-cols-[minmax(240px,0.85fr)_minmax(0,1.25fr)] lg:gap-12">
      <div className="min-w-0">
        <div className="overflow-hidden rounded-[20px] border border-white/10">
          <Image
            src={doctor.image}
            alt={doctor.name}
            className="aspect-[4/5] h-auto w-full object-cover object-top"
            sizes="(max-width: 900px) 100vw, 420px"
          />
        </div>
        <div className="mt-4">
          <VideoPlaceholder name={doctor.name} />
        </div>
      </div>
      <div className="min-w-0">
        <p className="text-[14px] font-medium uppercase leading-snug tracking-[0.12em] text-white/60 sm:text-[16px] sm:tracking-[0.14em]">{doctor.role}</p>
        <h3 className="mt-2 text-[24px] font-semibold leading-[1.15] tracking-[-0.03em] text-white sm:text-[28px] md:text-[34px]">
          {doctor.name}
        </h3>
        <p className="mt-3 text-[18px] leading-[1.65] text-white/85 sm:text-[21px]">{doctor.bio}</p>
        <Link
          href={doctor.href}
          className="mt-4 inline-flex min-h-[44px] items-center text-[18px] font-semibold text-white underline decoration-[#9fc48f]/70 underline-offset-4"
        >
          Vezi profil →
        </Link>
        <div className="mt-6 divide-y divide-white/10 border-t border-white/10">
          {doctor.questions.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.q} className="py-4">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex((prev) => (prev === index ? null : index))}
                  className="ads-btn-no-glow flex w-full items-start justify-between gap-3 text-left sm:gap-4"
                >
                  <span className="min-w-0 flex-1 text-[17px] font-semibold leading-[1.4] text-white sm:text-[19px] sm:leading-[1.35]">{item.q}</span>
                  <span aria-hidden className="shrink-0 pt-1 text-[21px] text-white/70">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
                    isOpen ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="mt-3 text-[17px] leading-[1.7] text-white/80 sm:text-[19px]">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export default function AllOn4PageClient() {
  const reveal = motionRevealProps(useMotionReady());

  return (
    <ServicePageShell>
      <ServiceHero
        image="/services/implant-model-2.png"
        imageAlt="All-on-4 și All-on-6 Cluj — dantură fixă, flux digital, Alverna Dental Studio"
        chip="Flux 100% digital · laborator propriu"
        kicker="Reabilitare orală completă"
        title={
          <>
            All-on-4 și All-on-6 Cluj
            <span className="mt-3 block max-w-[920px] text-[20px] font-semibold leading-[1.25] tracking-[-0.03em] text-white sm:text-[22px] md:text-[36px] lg:text-[42px]">
              dantură fixă, printr-un flux complet digital
            </span>
          </>
        }
        intro="Dantură fixă pe 4 sau 6 implanturi. Evaluare, planificare și lucrare finală — totul digital, în laboratorul propriu al clinicii."
      />

      <ServiceQuickFacts
        facts={[
          ["Abordare", "Flux 100% digital"],
          ["Laborator", "Propriu, în clinică"],
          ["Echipă", "Chirurgie BMF, parodontologie, protetică"],
          ["Soluție", "Dantură fixă pe 4 sau 6 implanturi"],
        ]}
      />

      <ServiceContentSection>
        <ServiceParagraphSection
          first
          headingLevel="h2"
          heading="Dantură fixă, printr-un flux complet digital"
          body="Pierderea totală sau aproape totală a dinților poate fi rezolvată printr-o arcadă fixă, stabilă, sprijinită pe 4 sau 6 implanturi. La Alverna Dental Studio, întreg parcursul — de la evaluarea inițială până la lucrarea finală — este gestionat digital, iar lucrările protetice sunt realizate în laboratorul propriu al clinicii, echipat integral digital."
        />
        <ServiceParagraphSection
          headingLevel="h2"
          heading="Echipă multidisciplinară"
          body="Tratamentul este coordonat de o echipă multidisciplinară: chirurgie orală și maxilofacială, parodontologie și protetică dentară. Alegerea între variante — și modul exact în care se planifică fiecare caz — se stabilește individual, în urma evaluării clinice și a scanării 3D."
        />
        <ServiceCardsSection
          headingLevel="h2"
          heading="Ce este All-on-4 / All-on-6?"
          cards={whatIsCards}
        />
        <ServiceParagraphSection
          headingLevel="h2"
          heading="Un flux complet digital, de la prima vizită la lucrarea finală"
          body="La Alverna Dental Studio, tratamentul All-on-4 / All-on-6 este susținut, în fiecare etapă, de tehnologie digitală. Acest flux digital integrat — clinică și laborator sub același acoperiș — este unul dintre principalele avantaje ale tratamentului."
        />
        <ServiceCardsSection heading="Etapele fluxului digital" cards={digitalFlowCards} />
        <ServiceBulletsSection
          headingLevel="h2"
          heading="Pentru cine este recomandată"
          items={recommendedFor}
        />
        <ServiceStepsSection headingLevel="h2" heading="Etapele tratamentului" steps={processSteps} />
        <ServiceTextBlock
          heading="Durata tratamentului"
          body="Durata exactă a fiecărei etape variază de la caz la caz și se comunică pacientului după evaluare. Nu lucrăm cu promisiuni de tip „totul într-o zi” — planul este stabilit digital, individual."
        />
      </ServiceContentSection>

      <section id="echipa-all-on" className="mx-auto mt-16 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
        <motion.div {...reveal}>
          <p className="text-[18px] font-medium uppercase tracking-[0.16em] text-white/60">Interviu clinic</p>
          <h2 className="mt-3 max-w-[920px] text-[28px] font-semibold leading-[1.12] tracking-[-0.03em] text-white sm:text-[32px] md:text-[44px] md:leading-[1.03]">
            Echipa care se ocupă de procedura dvs.
          </h2>
          <p className="mt-4 max-w-[820px] text-[18px] leading-[1.7] text-white/80 sm:text-[21px]">
            Trei specialități, un singur plan digital. Clipurile video vor fi publicate aici — până atunci, găsiți întrebările și răspunsurile fiecărui medic.
          </p>
          <div className="mt-4 space-y-16">
            {doctorVideos.map((doctor) => (
              <DoctorVideoBlock key={doctor.name} doctor={doctor} />
            ))}
          </div>
        </motion.div>
      </section>

      <ServiceContentSection>
        <motion.article {...reveal} className="border-t border-black/12 pt-10">
          <h2 className="text-[28px] font-semibold leading-[1.12] tracking-[-0.03em] text-white sm:text-[32px] md:text-[44px] md:leading-[1.03]">
            Avantajele All-on-4 / All-on-6 față de proteza mobilă
          </h2>
          <div className="mt-7 space-y-4 md:hidden">
            {comparisonRows.map(([aspect, allOn, mobile]) => (
              <article key={aspect} className="rounded-[16px] border border-white/10 bg-white/[0.04] p-4">
                <p className="text-[16px] font-semibold uppercase tracking-[0.08em] text-white/60">{aspect}</p>
                <p className="mt-3 text-[18px] leading-[1.5] text-white">
                  <span className="block text-[14px] uppercase tracking-[0.08em] text-white/50">All-on-4 / All-on-6</span>
                  {allOn}
                </p>
                <p className="mt-3 text-[18px] leading-[1.5] text-white/75">
                  <span className="block text-[14px] uppercase tracking-[0.08em] text-white/50">Proteză mobilă</span>
                  {mobile}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-7 hidden overflow-x-auto md:block">
            <table className="w-full min-w-[640px] border-collapse text-left text-[18px] text-white md:text-[21px]">
              <thead>
                <tr className="border-b border-white/15">
                  <th className="py-4 pr-4 font-semibold">Aspect</th>
                  <th className="py-4 pr-4 font-semibold">All-on-4 / All-on-6</th>
                  <th className="py-4 font-semibold">Proteză mobilă clasică</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([aspect, allOn, mobile]) => (
                  <tr key={aspect} className="border-b border-white/10">
                    <td className="py-4 pr-4 font-semibold align-top">{aspect}</td>
                    <td className="py-4 pr-4 align-top text-white/85">{allOn}</td>
                    <td className="py-4 align-top text-white/70">{mobile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.article>

        <motion.article {...reveal} className="mt-14 border-t border-black/12 pt-10">
          <h2 className="text-[28px] font-semibold leading-[1.12] tracking-[-0.03em] text-white sm:text-[32px] md:text-[44px] md:leading-[1.03]">
            Prețul unei intervenții
          </h2>
          <p className="mt-5 max-w-[1120px] text-[18px] leading-[1.75] text-white sm:text-[21px]">
            Costul total include consultația și planificarea digitală, intervenția chirurgicală, implanturile, precum și lucrarea protetică realizată în laboratorul propriu. Variază în funcție de numărul de implanturi (4 sau 6), marca folosită, necesitatea unor proceduri suplimentare (augmentare osoasă, tratamente parodontale) și materialul lucrării finale.
          </p>

          <h3 className="mt-10 text-[22px] font-semibold leading-[1.2] text-white md:text-[28px]">Preț orientativ — intervenție chirurgicală</h3>
          <p className="mt-2 text-[16px] leading-[1.6] text-white/70 sm:text-[18px]">
            Tarife per arcadă, conform listei clinicii. Devizul final, inclusiv lucrarea protetică, se stabilește după evaluarea digitală.
          </p>
          <div className="mt-5 space-y-3 md:hidden">
            {[
              { name: "Consultație + evaluare digitală", detail: "Consultație și diagnostic implantologie, interpretare CT", price: "180 RON" },
              { name: "Ședință foto + design digital al zâmbetului", detail: "Fotografii, simulare digitală a rezultatului", price: "inclusă în evaluare" },
              ...surgicalPrices,
            ].map((row) => (
              <article key={row.name} className="rounded-[16px] border border-white/10 bg-white/[0.04] p-4">
                <p className="text-[17px] font-semibold leading-[1.35] text-white">{row.name}</p>
                <p className="mt-2 text-[16px] leading-[1.5] text-white/70">{row.detail}</p>
                <p className="mt-3 text-[17px] font-semibold text-white">{row.price}</p>
              </article>
            ))}
          </div>
          <div className="mt-5 hidden overflow-x-auto md:block">
            <table className="w-full min-w-[560px] border-collapse text-left text-[18px] text-white md:text-[21px]">
              <thead>
                <tr className="border-b border-white/15">
                  <th className="py-4 pr-4 font-semibold">Etapă</th>
                  <th className="py-4 pr-4 font-semibold">Ce include</th>
                  <th className="py-4 font-semibold">Preț</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-4 pr-4 align-top">Consultație + evaluare digitală</td>
                  <td className="py-4 pr-4 align-top text-white/80">Consultație și diagnostic implantologie, interpretare CT</td>
                  <td className="py-4 align-top font-semibold">180 RON</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 pr-4 align-top">Ședință foto + design digital al zâmbetului</td>
                  <td className="py-4 pr-4 align-top text-white/80">Fotografii, simulare digitală a rezultatului</td>
                  <td className="py-4 align-top font-semibold">inclusă în evaluare</td>
                </tr>
                {surgicalPrices.map((row) => (
                  <tr key={row.name} className="border-b border-white/10">
                    <td className="py-4 pr-4 align-top">{row.name}</td>
                    <td className="py-4 pr-4 align-top text-white/80">{row.detail}</td>
                    <td className="py-4 align-top font-semibold">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[16px] leading-[1.6] text-white/65 sm:text-[18px]">
            Lucrarea protetică (provizorie și finală) este confecționată în laboratorul propriu; costul se comunică în devizul personalizat. Nu include eventuale proceduri suplimentare (augmentare osoasă, tratamente parodontale).
          </p>
          <p className="mt-4 text-[18px] leading-[1.7] text-white sm:text-[21px]">
            La Alverna Dental Studio este disponibilă și plata în rate, prin parteneriatele cu Star BT și Tbi Bank.
          </p>
          <a
            href="#contact"
            className="ads-btn-lit mt-6 inline-flex min-h-[46px] w-full items-center justify-center rounded-full px-6 text-[18px] font-semibold transition duration-300 hover:scale-[1.02] sm:w-auto sm:text-[21px]"
          >
            Solicită un deviz personalizat
          </a>
        </motion.article>

        <ServiceFAQ heading="Întrebări frecvente" items={faqItems} />
      </ServiceContentSection>

      <ServiceCasesGrid items={IMPLANT_CASE_STRIP} />
      <ServiceTestimonials />
      <ServiceContactForm
        headline="Recăpătați-vă zâmbetul, cu un plan de tratament clar, digital, de la prima vizită."
        body="Echipa Alverna Dental Studio vă explică fiecare etapă — de la scanarea 3D până la lucrarea realizată în laboratorul propriu."
      />
      <ServiceFinalCTA
        title="Programează o consultație pentru All-on-4 / All-on-6"
        body="Primul pas este o evaluare digitală. Stabilim împreună dacă All-on-4 sau All-on-6 este soluția potrivită, fără presiune și fără termene nerealiste."
        buttonLabel="Programează o consultație"
      />
    </ServicePageShell>
  );
}
