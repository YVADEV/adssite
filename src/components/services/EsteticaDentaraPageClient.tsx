"use client";

import {
  ServicePageShell,
  ServiceHero,
  ServiceQuickFacts,
  ServiceBulletsSection,
  ServiceStepsSection,
  ServiceCardsSection,
  ServiceContentSection,
  ServiceFAQ,
  ServiceCasesGrid,
  ServiceTestimonials,
  ServiceContactForm,
  ServiceFinalCTA,
} from "./ServicePageParts";

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

export default function EsteticaDentaraPageClient() {
  return (
    <ServicePageShell>
      <ServiceHero
        image="/services/whitening-1.png"
        imageAlt="Estetică dentară în Cluj-Napoca"
        chip="Zâmbet armonios și natural"
        kicker="Tratamente moderne și eficiente"
        title="Estetică dentară"
        intro="Vă doriți un zâmbet strălucitor și sănătos? La Alverna Dental Studio Cluj, serviciile de estetică dentară completează tratamentele funcționale, pentru un rezultat armonios și natural. Abordăm culoarea, forma, poziția dinților și aspectul gingival, cu planuri personalizate și tehnologii moderne."
      />

      <ServiceQuickFacts
        facts={[
          ["Serviciu", "Estetică dentară Cluj-Napoca"],
          ["Obiectiv", "Zâmbet sănătos, strălucitor, armonios"],
          ["Abordare", "Personalizată, minim invazivă"],
          ["Rezultat", "Echilibru estetic și funcțional"],
        ]}
      />

      <ServiceContentSection>
        <ServiceBulletsSection
          first
          headingLevel="h2"
          heading="Proceduri și tratamente de estetică dentară"
          items={treatments}
        />
        <ServiceBulletsSection heading="Cine poate beneficia?" items={candidateCases} />
        <ServiceStepsSection heading="Cum decurge planul de tratament" steps={processSteps} />
        <ServiceCardsSection heading="Beneficii pe termen lung" cards={benefits} />
        <ServiceBulletsSection heading="Tehnologii utilizate" items={technologies} />
        <ServiceFAQ heading="Întrebări frecvente" items={faqItems} />
      </ServiceContentSection>

      <ServiceCasesGrid />
      <ServiceTestimonials />
      <ServiceContactForm
        headline="Primul pas spre un zâmbet sănătos începe aici."
        body="Echipa Alverna Dental Studio te ajută să alegi tratamentul potrivit, fără stres și fără presiune."
      />
      <ServiceFinalCTA
        title="Vrei un zâmbet strălucitor și armonios?"
        body="Programează o consultație la Alverna Dental Studio și descoperă ce plan personalizat de estetică dentară se potrivește obiectivelor tale."
      />
    </ServicePageShell>
  );
}
