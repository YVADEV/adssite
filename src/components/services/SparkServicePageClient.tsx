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
        image="/services/braces-model.png"
        imageAlt="Aparat dentar Spark transparent"
        chip="Spark Aligners"
        kicker="Ortodonție invizibilă"
        title="Aparat dentar Spark"
        intro="Gutiera transparentă Spark este o soluție modernă de ortodonție pentru alinierea dinților, creată pentru pacienții care își doresc un tratament discret, confortabil și predictibil."
      />

      <ServiceQuickFacts
        facts={[
          ["Tratament", "Aparat dentar transparent"],
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
          body="Aparatul dentar Spark folosește gutiere transparente realizate digital, concepute pentru a mișca treptat dinții în poziția corectă. Tratamentul este planificat în detaliu, astfel încât pacientul să înțeleagă etapele și rezultatul estimat încă de la început."
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
        body="Echipa Alverna Dental Studio te ajută să alegi tratamentul potrivit, fără stres și fără presiune."
      />
      <ServiceFinalCTA
        title="Vrei să afli dacă Spark este potrivit pentru tine?"
        body="Programează o evaluare ortodontică și primește recomandarea potrivită pentru zâmbetul tău."
      />
    </ServicePageShell>
  );
}
