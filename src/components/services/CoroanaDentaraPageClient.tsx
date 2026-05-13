"use client";

import {
  ServicePageShell,
  ServiceHero,
  ServiceQuickFacts,
  ServiceParagraphSection,
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

const crownTypes = [
  "Coroană dentară din compozit (de regulă provizorie)",
  "Coroană dentară din zirconiu (durabilitate și estetică ridicată)",
  "Coroană dentară din ceramică integrală (estetică superioară)",
  "Coroană metalo-ceramică (rezistență + cost echilibrat)",
];

const indications = [
  "Dinți cu distrucție extinsă prin carii sau fracturi",
  "Restaurare după tratamente endodontice complexe",
  "Acoperirea bonturilor pe implant dentar",
  "Corectarea esteticii și funcției masticatorii",
  "Protejarea unui dinte slăbit structural",
];

const benefits = [
  {
    title: "Refacerea masticației",
    text: "Coroana redă rezistența dintelui și permite o masticație stabilă, fără disconfort.",
  },
  {
    title: "Estetică naturală",
    text: "Materialele moderne reproduc forma, culoarea și transluciditatea dintelui natural.",
  },
  {
    title: "Protecție pe termen lung",
    text: "Acoperirea completă a dintelui reduce riscul de fractură și degradare ulterioară.",
  },
  {
    title: "Vorbire și ocluzie echilibrate",
    text: "Reabilitarea corectă ajută la pronunție clară și distribuție corectă a forțelor ocluzale.",
  },
];

const limitations = [
  "Necesită prepararea dintelui prin șlefuire controlată",
  "Poate apărea sensibilitate temporară post-procedură",
  "Anumite materiale sunt mai predispuse la uzură/fractură",
  "Necesită igienă riguroasă și monitorizare periodică",
];

const technologies = [
  "Scanare digitală intraorală 3D",
  "Tehnologie CAD/CAM pentru proiectare și execuție",
  "Frezare computerizată de înaltă precizie",
  "Materiale premium biocompatibile",
];

const processSteps = [
  {
    step: "01",
    title: "Consultație și plan personalizat",
    text: "Evaluăm clinic dintele, indicația protetică și alegem materialul potrivit conform obiectivelor funcționale și estetice.",
  },
  {
    step: "02",
    title: "Preparare și amprentare digitală",
    text: "Dintelui i se realizează prepararea necesară, apoi efectuăm scanare digitală pentru modelarea precisă a coroanei.",
  },
  {
    step: "03",
    title: "Realizarea coroanei în laborator",
    text: "Pe baza datelor digitale, coroana este fabricată cu tehnologie modernă și verificată pentru adaptare optimă.",
  },
  {
    step: "04",
    title: "Probă, ajustare și cimentare",
    text: "Validăm ocluzia, estetica și confortul, apoi fixăm definitiv coroana și oferim protocolul de întreținere.",
  },
];

const faqItems = [
  {
    q: "Cât durează procedura pentru o coroană dentară?",
    a: "De regulă 2 ședințe, la interval de câteva zile. În funcție de caz și tehnologia folosită, durata totală poate varia.",
  },
  {
    q: "Este dureroasă montarea unei coroane dentare?",
    a: "Procedura se face sub anestezie locală și este, în general, bine tolerată. După tratament poate apărea sensibilitate temporară.",
  },
  {
    q: "Care este durata de viață a unei coroane?",
    a: "Cu igienă corectă și controale periodice, coroanele pot rezista în medie 10-15 ani sau mai mult, în funcție de material și obiceiurile pacientului.",
  },
  {
    q: "Ce fac dacă o coroană se desprinde?",
    a: "Păstrați coroana, evitați masticația pe zona respectivă și programați-vă cât mai repede la medic pentru refixare sau înlocuire.",
  },
  {
    q: "Cum se întreține corect o coroană dentară?",
    a: "Periaj de două ori pe zi, ață dentară/periuțe interdentare, evitarea alimentelor foarte dure și controale periodice la 6 luni.",
  },
  {
    q: "Care sunt contraindicațiile?",
    a: "Există puține contraindicații absolute; indicația se stabilește medical, în funcție de statusul general și de posibilitatea restaurării conservatoare.",
  },
];

export default function CoroanaDentaraPageClient() {
  return (
    <ServicePageShell>
      <ServiceHero
        image="/services/lab-hands-model.png"
        imageAlt="Coroană dentară Cluj - Alverna Dental Studio"
        chip="Rezistență · estetică · confort"
        kicker="Protetică dentară modernă"
        title="Coroană dentară"
        intro="La Alverna Dental Studio Cluj realizăm coroane dentare premium pentru restaurarea funcției și esteticii danturii. Cu tehnologii digitale avansate și materiale biocompatibile, oferim rezultate naturale, durabile și confortabile."
      />

      <ServiceQuickFacts
        facts={[
          ["Serviciu", "Coroană dentară Cluj"],
          ["Indicații", "Dinți afectați structural sau estetic"],
          ["Tehnologie", "Scanare digitală + CAD/CAM"],
          ["Obiectiv", "Funcție masticatorie și estetică naturală"],
        ]}
      />

      <ServiceContentSection>
        <ServiceParagraphSection
          first
          headingLevel="h2"
          heading="Soluție pentru o dantură naturală"
          body="Coroana dentară este o lucrare protetică fixă ce acoperă complet un dinte compromis sau un bont pe implant. Rolul principal este de a reda rezistența, forma și funcția dintelui, menținând în același timp un aspect armonios cu restul arcadei."
        />
        <ServiceBulletsSection heading="Tipuri de coroane dentare" items={crownTypes} />
        <ServiceBulletsSection heading="Când este recomandată" items={indications} />
        <ServiceStepsSection heading="Pașii tratamentului" steps={processSteps} />
        <ServiceCardsSection heading="Beneficii principale" cards={benefits} />
        <ServiceBulletsSection heading="Dezavantaje și limite" items={limitations} />
        <ServiceBulletsSection heading="Tehnologii folosite în tratament" items={technologies} />
        <ServiceFAQ heading="Întrebări frecvente despre coroana dentară" items={faqItems} />
      </ServiceContentSection>

      <ServiceCasesGrid />
      <ServiceTestimonials />
      <ServiceContactForm
        headline="Redobândește zâmbetul și încrederea."
        body="Echipa Alverna Dental Studio te ajută să alegi coroana potrivită pentru rezultate durabile, estetice și funcționale."
      />
      <ServiceFinalCTA
        title="Ai nevoie de coroană dentară în Cluj?"
        body="Programează-te la Alverna Dental Studio pentru evaluare completă și plan de tratament personalizat."
      />
    </ServicePageShell>
  );
}
