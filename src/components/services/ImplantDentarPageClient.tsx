"use client";

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

const commonCauses = [
  "Boală parodontală în forme avansate",
  "Igienă orală necorespunzătoare și infecții netratate",
  "Traumatisme sau accidente",
  "Predispoziție ereditară și înaintarea în vârstă",
];

const edentatiaEffects = [
  {
    title: "Resorbția osoasă",
    text: "Fără înlocuirea rapidă a dintelui lipsă, osul din zonă se resoarbe progresiv. În unele cazuri devine necesară augmentarea osoasă (inclusiv sinus lift) înainte de implant.",
  },
  {
    title: "Migrarea danturii",
    text: "Dinții vecini și antagoniști își schimbă poziția, ceea ce poate afecta mușcătura, articulațiile temporo-mandibulare și confortul masticator.",
  },
  {
    title: "Predispoziție la infecții",
    text: "Spațiile interdentare se modifică, iar retenția de placă bacteriană crește riscul de carii, abcese și agravarea afecțiunilor parodontale.",
  },
];

const implantBenefits = [
  "Conservă osul alveolar și țesuturile moi",
  "Nu necesită sacrificarea dinților sănătoși vecini",
  "Reface funcția masticatorie și claritatea vorbirii",
  "Oferă un aspect natural și crește încrederea în sine",
  "Prezintă rată de succes ridicată (peste 95% în cazuri corect indicate)",
  "Este o soluție longevivă, cu mentenanță corectă",
];

const processSteps = [
  {
    step: "01",
    title: "Consultație, CBCT și plan personalizat",
    text: "Evaluăm clinic și imagistic calitatea osului, starea gingiilor și factorii sistemici pentru a stabili protocolul potrivit.",
  },
  {
    step: "02",
    title: "Asanarea cavității orale",
    text: "Eliminăm focarele active de infecție, tratăm problemele parodontale și pregătim mediul optim pentru osteointegrare.",
  },
  {
    step: "03",
    title: "Inserarea implantului dentar",
    text: "Procedura se realizează sub anestezie locală, minim invaziv, cu protocol aseptic strict și poziționare precisă.",
  },
  {
    step: "04",
    title: "Vindecare, protetică și monitorizare",
    text: "Urmărim osteointegrarea, apoi montăm restaurarea protetică și menținem rezultatul prin controale periodice.",
  },
];

const implantTypes = [
  "MegaGen AnyRidge",
  "Sweden & Martina (Premium, Shelta, PRAMA)",
  "Straumann BLT și Straumann BLX",
  "Neodent (Straumann Group)",
  "Soluții speciale: implanturi zigomatice, augmentare osoasă, încărcare imediată în cazuri selectate",
];

const faqItems = [
  {
    q: "Care sunt contraindicațiile implantului dentar?",
    a: "Contraindicațiile absolute sau relative includ boli hematologice severe, imunodeficiențe importante, unele patologii oncologice active, diabet necontrolat ori afecțiuni sistemice decompensate. Indicația se stabilește după evaluare medicală completă.",
  },
  {
    q: "Cât durează tratamentul cu implant dentar?",
    a: "Durata medie este între 3 și 6 luni, în funcție de vindecare, calitatea osului și eventuale proceduri adiacente (de exemplu augmentare osoasă sau tratamente parodontale).",
  },
  {
    q: "Este dureroasă intervenția?",
    a: "Inserarea implantului se face sub anestezie locală și este, în general, bine tolerată. Disconfortul post-operator este de obicei controlabil cu medicația recomandată.",
  },
  {
    q: "Care este rata de succes a implanturilor dentare?",
    a: "În cazurile corect planificate, cu igienă bună și controale regulate, rata de succes pe termen lung depășește frecvent 95%.",
  },
  {
    q: "Cât rezistă un implant dentar?",
    a: "Un implant dentar de calitate, întreținut corect, poate funcționa peste 20-25 de ani, iar în multe cazuri chiar pe termen foarte lung.",
  },
  {
    q: "Care este costul unui implant dentar la Alverna?",
    a: "Prețul pornește de la 400 EUR, în funcție de sistemul de implant, complexitatea cazului și necesitatea procedurilor adiacente. Devizul se stabilește transparent după consultație.",
  },
  {
    q: "Cum întrețin implantul pe termen lung?",
    a: "Periaj de două ori pe zi, curățare interdentară, igienizări profesionale la 3-6 luni și controale periodice pentru monitorizarea țesuturilor periimplantare.",
  },
  {
    q: "Ce restricții am după intervenție?",
    a: "În primele 24-48h sunt recomandate alimente moi, evitarea fumatului, alcoolului și efortului intens. Respectarea protocolului post-operator reduce riscul complicațiilor.",
  },
];

export default function ImplantDentarPageClient() {
  return (
    <ServicePageShell>
      <ServiceHero
        image="/services/implant-model-2.png"
        imageAlt="Implant dentar Cluj - Alverna Dental Studio"
        chip="Rată de succes ridicată · plan personalizat"
        kicker="Implantologie orală modernă"
        title="Implant dentar Cluj"
        intro="Aveți nevoie de un implant dentar? La Alverna Dental Studio Cluj folosim tehnologii moderne și protocoale avansate pentru a reda funcționalitatea și estetica zâmbetului. Implantul dentar este soluția cea mai eficientă pentru înlocuirea dinților pierduți, prevenind complicațiile pe termen lung și menținând echilibrul cavității orale."
      />

      <ServiceQuickFacts
        facts={[
          ["Serviciu", "Implant dentar Cluj"],
          ["Mărci utilizate", "MegaGen, Sweden & Martina, Straumann, Neodent"],
          ["Procedură", "Minim invazivă, sub anestezie locală"],
          ["Obiectiv", "Funcționalitate, estetică și stabilitate pe termen lung"],
        ]}
      />

      <ServiceContentSection>
        <ServiceParagraphSection
          first
          headingLevel="h2"
          heading="O intervenție esențială"
          body="Implantul dentar este cea mai performantă formă de protetică pentru edentații parțiale sau totale. Structura din titan se integrează în os și înlocuiește rădăcina naturală, oferind un suport stabil pentru coroană, punte sau proteză. Pe lângă componenta estetică, tratamentul menține masticația eficientă, susține structura facială și reduce riscul complicațiilor asociate pierderii dentare."
        />
        <ServiceBulletsSection heading="Cauze frecvente ale pierderii dinților" items={commonCauses} />
        <ServiceCardsSection heading="Efectele edentației" cards={edentatiaEffects} />
        <ServiceStepsSection heading="Etapele intervenției de implant dentar" steps={processSteps} />
        <ServiceBulletsSection heading="Avantajele unui implant dentar" items={implantBenefits} />
        <ServiceBulletsSection heading="Tipuri și mărci de implanturi" items={implantTypes} />
        <ServiceTextBlock
          heading="Complicații și prevenție"
          body="Complicațiile precum periimplantita sau eșecul osteointegrării sunt rare, dar necesită intervenție rapidă. Semne de alarmă: durere persistentă, sângerare gingivală, mobilitatea implantului sau pierdere osoasă pe radiografie. De aceea urmăm protocoale stricte de decontaminare, sterilizare și monitorizare periodică."
        />
        <ServiceFAQ heading="Întrebări frecvente despre implant dentar Cluj" items={faqItems} />
      </ServiceContentSection>

      <ServiceCasesGrid />
      <ServiceTestimonials />
      <ServiceContactForm
        headline="Recâștigă funcția și estetica zâmbetului tău."
        body="Echipa Alverna Dental Studio te ghidează pas cu pas, de la consultație până la finalizarea lucrării protetice, într-un protocol sigur și predictibil."
      />
      <ServiceFinalCTA
        title="Doriți un implant dentar Cluj la standarde premium?"
        body="Programați-vă la Alverna Dental Studio pentru evaluare completă și plan de tratament personalizat. Reconstruim zâmbetul cu grijă, precizie și rezultate durabile."
      />
    </ServicePageShell>
  );
}
