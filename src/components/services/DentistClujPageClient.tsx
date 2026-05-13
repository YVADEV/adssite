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

const duties = [
  "Examinarea atentă a fiecărui pacient pentru identificarea completă a problemelor dentare",
  "Aplicarea tratamentelor potrivite pentru eliminarea afecțiunilor cavității orale",
  "Evaluarea riscurilor intervențiilor în raport cu istoricul medical al pacientului",
  "Stabilirea unui diagnostic corect și a unui plan de tratament personalizat",
  "Informarea pacientului despre tratament și despre importanța igienei orale zilnice",
];

const strengths = [
  {
    title: "Echipă dedicată",
    text: "Medici specialiști cu experiență, orientați spre bunăstarea pacientului.",
  },
  {
    title: "Tehnologie modernă",
    text: "Aparatură de ultimă generație pentru tratamente precise și eficiente.",
  },
  {
    title: "Comunicare clară",
    text: "Explicăm fiecare etapă a tratamentului, pe înțelesul fiecărui pacient.",
  },
  {
    title: "Abordare completă",
    text: "De la prevenție la intervenții complexe și urgențe stomatologice.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Programare și consultație",
    text: "În urma consultației, medicul stabilește problema și pașii de urmat.",
  },
  {
    step: "02",
    title: "Investigații suplimentare",
    text: "La nevoie, se recomandă radiografii sau alte investigații pentru un diagnostic complet.",
  },
  {
    step: "03",
    title: "Plan personalizat",
    text: "Primești un plan clar, adaptat nevoilor tale, cu toate etapele explicate.",
  },
  {
    step: "04",
    title: "Tratament și monitorizare",
    text: "Intervențiile se realizează în condiții sigure, cu monitorizare pe parcurs.",
  },
];

const faqItems = [
  {
    q: "Cum funcționează întregul proces?",
    a: "Totul începe cu o programare la medicul dentist din cadrul clinicii. După consultație, se stabilește planul de tratament, care poate include investigații suplimentare și una sau mai multe ședințe, în funcție de complexitate.",
  },
  {
    q: "Cât de dureroase sunt procedurile?",
    a: "Majoritatea procedurilor se realizează cu anestezie locală și tehnici moderne, astfel încât disconfortul să fie minim. Medicul îți explică din timp fiecare etapă și opțiunile de confort.",
  },
  {
    q: "De ce să aleg un medic dentist Cluj la Alverna Dental Studio?",
    a: "Pentru combinația dintre expertiză medicală, tehnologie avansată și comunicare empatică. Echipa noastră oferă tratamente moderne, planuri personalizate și suport constant pe parcursul intervențiilor.",
  },
  {
    q: "Pot beneficia și pacienții veniți din străinătate?",
    a: "Da. Echipa noastră comunică eficient în limba engleză și oferă suport complet pentru pacienții care accesează servicii de stomatologie și turism dentar în Cluj.",
  },
];

export default function DentistClujPageClient() {
  return (
    <ServicePageShell>
      <ServiceHero
        image="/services/dental-chair.png"
        imageAlt="Dentist Cluj - Alverna Dental Studio"
        chip="O altfel de vizită la dentist"
        kicker="Stomatologie generală și specializată"
        title="Dentist Cluj"
        intro="Căutați un medic dentist Cluj la care să apelați cu încredere? La Alverna Dental Studio veți găsi o echipă de medici dedicați, într-o atmosferă prietenoasă, cu tratamente moderne și planuri personalizate pentru sănătatea zâmbetului."
      />

      <ServiceQuickFacts
        facts={[
          ["Serviciu", "Dentist Cluj"],
          ["Abordare", "Plan de tratament personalizat"],
          ["Comunicare", "Clară, empatică, orientată pe pacient"],
          ["Standard", "Tehnologie modernă și protocoale sigure"],
        ]}
      />

      <ServiceContentSection>
        <ServiceParagraphSection
          first
          headingLevel="h2"
          heading="De ce Alverna Dental Studio?"
          body="Echipa noastră este formată din medici specialiști cu experiență, orientați spre rezultate estetice și funcționale de lungă durată. Fiecare pacient beneficiază de explicații detaliate, astfel încât să înțeleagă pe deplin diagnosticul și importanța planului de tratament."
        />
        <ServiceBulletsSection heading="Îndatoririle unui medic dentist" items={duties} />
        <ServiceStepsSection heading="Cum funcționează întregul proces" steps={processSteps} />
        <ServiceCardsSection heading="Avantajele colaborării cu Alverna Dental Studio" cards={strengths} />
        <ServiceFAQ heading="Întrebări frecvente" items={faqItems} />
      </ServiceContentSection>

      <ServiceCasesGrid />
      <ServiceTestimonials />
      <ServiceContactForm
        headline="Primul pas spre un zâmbet sănătos începe aici."
        body="Echipa Alverna Dental Studio te ajută să alegi tratamentul potrivit, fără stres și fără presiune."
      />
      <ServiceFinalCTA
        title="Alege un dentist Cluj de încredere"
        body="La Alverna Dental Studio îți oferim tratamente stomatologice moderne, grijă reală pentru confortul tău și o relație medic-pacient bazată pe transparență și încredere."
      />
    </ServicePageShell>
  );
}
