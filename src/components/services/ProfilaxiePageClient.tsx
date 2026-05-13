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

const mainProcedures = [
  "Detartraj dentar cu ultrasunete",
  "Periaj profesional",
  "Air-flow pentru îndepărtarea petelor și biofilmului",
  "Fluorizare pentru întărirea smalțului",
  "Sigilare dentară (în special la copii)",
];

const riskFactors = [
  "Igienă orală deficitară",
  "Consum frecvent de zahăr și băuturi acide",
  "Fumat și bruxism",
  "Predispoziție genetică la afecțiuni gingivale/parodontale",
  "Lipsa controalelor periodice",
];

const kidsBenefits = [
  "Sigilare dentară pentru protecția șanțurilor ocluzale",
  "Fluorizare adaptată vârstei și riscului carios",
  "Educație pentru periaj corect și ață dentară",
  "Reducerea fricii de dentist prin experiențe pozitive",
];

const oralHygieneBenefits = [
  {
    title: "Prevenirea cariilor",
    text: "Controlul plăcii bacteriene reduce apariția leziunilor carioase și necesitatea tratamentelor invazive.",
  },
  {
    title: "Reducerea riscului de boli gingivale",
    text: "Igienizarea profesională periodică limitează inflamația gingivală și evoluția către parodontopatii.",
  },
  {
    title: "Respirație proaspătă",
    text: "Eliminarea biofilmului și a tartrului contribuie la diminuarea halitozei și la confort social crescut.",
  },
  {
    title: "Susținerea sănătății generale",
    text: "O cavitate orală sănătoasă este asociată cu reducerea riscului unor afecțiuni sistemice.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultație și evaluare clinică",
    text: "Analizăm starea dinților, gingiilor și factorii de risc individuali pentru a personaliza planul de profilaxie.",
  },
  {
    step: "02",
    title: "Detartraj + periaj profesional",
    text: "Îndepărtăm tartrul și placa bacteriană, apoi finisăm suprafețele dentare pentru a reduce retenția bacteriană.",
  },
  {
    step: "03",
    title: "Air-flow și tratamente adjuvante",
    text: "Curățăm zonele greu accesibile și, la nevoie, aplicăm fluor/sigilări pentru protecție suplimentară.",
  },
  {
    step: "04",
    title: "Recomandări personalizate acasă",
    text: "Primești protocol clar de igienă, dietă și frecvența optimă a controalelor pentru menținerea rezultatelor.",
  },
];

const faqItems = [
  {
    q: "La ce interval este recomandată profilaxia dentară?",
    a: "În general la 6 luni, dar în funcție de riscul individual (parodontopatii, fumători, acumulare rapidă de tartru) poate fi recomandată la 3-4 luni.",
  },
  {
    q: "Detartrajul este dureros?",
    a: "De regulă nu. În anumite cazuri poate apărea un disconfort ușor sau sensibilitate temporară, controlabilă prin recomandările medicului.",
  },
  {
    q: "Ce include o ședință completă de profilaxie?",
    a: "Evaluare, detartraj, periaj profesional, Air-flow și, în funcție de indicație, fluorizare sau sigilare. Protocolul este adaptat fiecărui pacient.",
  },
  {
    q: "Profilaxia este utilă și pentru copii?",
    a: "Da. Pentru copii sunt importante controalele regulate, sigilarea și fluorizarea, plus educația corectă pentru igienă orală zilnică.",
  },
  {
    q: "Există contraindicații sau limite?",
    a: "Anumite proceduri (de exemplu fluorizarea) se adaptează la istoricul medical și sensibilitatea pacientului. De aceea evaluarea inițială este esențială.",
  },
  {
    q: "Profilaxia înlocuiește periajul de acasă?",
    a: "Nu. Profilaxia profesională completează rutina zilnică de igienă, nu o înlocuiește. Combinația celor două oferă cea mai bună protecție.",
  },
];

export default function ProfilaxiePageClient() {
  return (
    <ServicePageShell>
      <ServiceHero
        image="/services/doctor-portrait.png"
        imageAlt="Profilaxie dentară Cluj - Alverna Dental Studio"
        chip="Detartraj · Periaj profesional · Air-flow"
        kicker="Prevenție orală avansată"
        title="Profilaxie dentară Cluj"
        intro="La Alverna Dental Studio realizăm tratamente profesionale de profilaxie și detartraj, cu tehnologii moderne și protocoale personalizate. Profilaxia dentară completează igiena zilnică de acasă și reduce semnificativ riscul cariilor, inflamațiilor gingivale și complicațiilor parodontale."
      />

      <ServiceQuickFacts
        facts={[
          ["Serviciu", "Profilaxie dentară Cluj"],
          ["Proceduri", "Detartraj, periaj profesional, Air-flow"],
          ["Adjuvant", "Fluorizare și sigilare la indicație"],
          ["Obiectiv", "Prevenție activă și sănătate orală pe termen lung"],
        ]}
      />

      <ServiceContentSection>
        <ServiceParagraphSection
          first
          headingLevel="h2"
          heading="Proceduri moderne de profilaxie"
          body="Profilaxia dentară înseamnă totalitatea măsurilor preventive care împiedică apariția sau evoluția afecțiunilor orale. Realizată periodic într-un cabinet stomatologic, reduce încărcarea bacteriană și susține menținerea unui zâmbet sănătos, funcțional și estetic."
        />
        <ServiceBulletsSection heading="Ce include tratamentul" items={mainProcedures} />
        <ServiceBulletsSection heading="Factori de risc pentru afecțiuni orale" items={riskFactors} />
        <ServiceStepsSection heading="Cum arată un tratament complet de profilaxie" steps={processSteps} />
        <ServiceBulletsSection heading="Profilaxie pentru copii" items={kidsBenefits} />
        <ServiceCardsSection heading="Importanța igienei orale" cards={oralHygieneBenefits} />
        <ServiceFAQ heading="Întrebări frecvente despre profilaxie dentară" items={faqItems} />
      </ServiceContentSection>

      <ServiceCasesGrid />
      <ServiceTestimonials />
      <ServiceContactForm
        headline="Prevenția corectă îți păstrează zâmbetul sănătos."
        body="Echipa Alverna Dental Studio îți oferă protocol complet de profilaxie, adaptat istoricului și riscului tău individual."
      />
      <ServiceFinalCTA
        title="Ai nevoie de profilaxie dentară în Cluj?"
        body="Programează-te la Alverna Dental Studio pentru igienizare profesională completă și plan personalizat de prevenție."
      />
    </ServicePageShell>
  );
}
