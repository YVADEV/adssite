"use client";

import {
  ServicePageShell,
  ServiceHero,
  ServiceQuickFacts,
  ServiceParagraphSection,
  ServiceBulletsSection,
  ServiceCardsSection,
  ServiceStepsSection,
  ServiceContentSection,
  ServiceFAQ,
  ServiceCasesGrid,
  ServiceTestimonials,
  ServiceContactForm,
  ServiceFinalCTA,
} from "./ServicePageParts";

const treatmentItems = [
  "Consultație inițială și evaluare ortodontică detaliată.",
  "Scanare digitală precisă pentru analiza poziției dentare.",
  "Plan de tratament personalizat, etapizat clar.",
  "Seturi de gutiere transparente Spark, adaptate progresiv.",
  "Controale periodice pentru ajustări și monitorizare.",
  "Contenție după finalizarea tratamentului pentru stabilitate.",
];

const recommendationItems = [
  "Dinți înghesuiți",
  "Spații între dinți",
  "Mușcătură incorectă",
  "Pacienți care vor o soluție discretă",
  "Persoane active care nu vor bracketuri vizibile",
];

const benefitItems = [
  {
    title: "Discret",
    text: "Gutierele sunt transparente și greu de observat în timpul purtării.",
  },
  {
    title: "Confortabil",
    text: "Fără bracketuri metalice, fără arcuri și fără iritații inutile.",
  },
  {
    title: "Predictibil",
    text: "Tratamentul este planificat digital, etapă cu etapă.",
  },
  {
    title: "Mobil",
    text: "Gutierele pot fi îndepărtate la masă și pentru igienă orală.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultație",
    text: "Medicul analizează cazul și stabilește dacă Spark este potrivit.",
  },
  {
    step: "02",
    title: "Scanare digitală",
    text: "Se realizează o imagine precisă a danturii.",
  },
  {
    step: "03",
    title: "Plan personalizat",
    text: "Primești un plan clar, cu etapele tratamentului.",
  },
  {
    step: "04",
    title: "Monitorizare",
    text: "Evoluția este urmărită periodic până la rezultatul final.",
  },
];

const faqItems = [
  {
    q: "Este aparatul dentar Spark vizibil?",
    a: "Gutierele Spark sunt transparente și au un aspect discret, fiind greu de observat în interacțiunile de zi cu zi.",
  },
  {
    q: "Pot mânca purtând gutierele?",
    a: "Gutierele se îndepărtează în timpul mesei și se reaplică după igienizarea dinților.",
  },
  {
    q: "Cât durează tratamentul?",
    a: "Durata depinde de complexitatea cazului și este stabilită după consultația inițială.",
  },
  {
    q: "Este potrivit pentru adulți?",
    a: "Da, Spark este o opțiune potrivită pentru adulți și adolescenți, în funcție de recomandarea medicului.",
  },
];

export default function SparkServicePageClient() {
  return (
    <ServicePageShell>
      <ServiceHero
        videoSrc="/spark-hero.mp4?v=3"
        videoObjectFit="contain"
        videoWithSound
        image="/services/braces-model.png"
        imageAlt="Aparat dentar Spark transparent"
        chip="Spark · Angel Aligner"
        kicker="Alignere transparente"
        title="Alignere transparente"
        intro="Spark și Angel Aligner sunt soluții de ortodonție cu gutiere transparente, pentru pacienții care vor un tratament discret și planificat digital. Medicul stabilește sistemul potrivit după evaluare."
      />

      <ServiceQuickFacts
        facts={[
          ["Tratament", "Alignere transparente"],
          ["Durată", "Personalizată în funcție de caz"],
          ["Recomandat pentru", "Adulți și adolescenți"],
          ["Rezultat", "Zâmbet aliniat, natural"],
        ]}
      />

      <ServiceContentSection>
        <ServiceParagraphSection
          first
          headingLevel="h2"
          heading="Ortodonție discretă, fără bracketuri metalice"
          body="La Alverna Dental Studio lucrăm cu Spark și Angel Aligner. Gutierele transparente sunt realizate digital și mișcă treptat dinții în poziția corectă. Tratamentul este planificat în detaliu, astfel încât pacientul să înțeleagă etapele încă de la început."
        />
        <ServiceCardsSection
          heading="Spark și Angel Aligner"
          cards={[
            {
              title: "Spark",
              text: "Sistem de alignere transparente cu planificare digitală. Pachetele și tarifele Spark sunt listate pe pagina de tarife.",
            },
            {
              title: "Angel Aligner",
              text: "Sistem de alignere transparente folosit în clinică, ales în funcție de cazul clinic. Tariful se comunică după evaluarea ortodontică.",
            },
          ]}
        />
        <ServiceBulletsSection heading="Ce presupune tratamentul" items={treatmentItems} />
        <ServiceBulletsSection heading="Cui i se recomandă" items={recommendationItems} />
        <ServiceCardsSection heading="De ce aleg pacienții Spark?" cards={benefitItems} />
        <ServiceStepsSection heading="Cum decurge tratamentul" steps={processSteps} />
        <ServiceFAQ heading="Întrebări frecvente" items={faqItems} />
      </ServiceContentSection>

      <ServiceCasesGrid />
      <ServiceTestimonials />
      <ServiceContactForm
        headline="Primul pas spre un zâmbet sănătos începe aici."
        body="Echipa Alverna Dental Studio te ajută să înțelegi opțiunile de tratament și pașii următori."
      />
      <ServiceFinalCTA
        title="Vrei să afli dacă alignerele sunt potrivite pentru tine?"
        body="Programează o evaluare ortodontică și primește recomandarea potrivită pentru zâmbetul tău."
      />
    </ServicePageShell>
  );
}
