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

const correctedProblems = [
  "Angrenaj invers și ocluzie încrucișată",
  "Protruzie și ocluzie adâncă/deschisă/inversă",
  "Înghesuire dentară sau spațiere excesivă",
  "Erupții dentare anormale și dinți incluși",
  "Asimetrii de arcadă și malpoziționări dentare",
];

const causes = [
  "Factori genetici și ereditari",
  "Obiceiuri vicioase în copilărie (supt deget, ros unghii, ros obiecte)",
  "Respirație orală, deglutiție infantilă și tulburări funcționale",
  "Monitorizare insuficientă în perioadele de creștere a danturii",
];

const treatmentTypes = [
  "Aparat dentar metalic - eficient și accesibil",
  "Aparat dentar ceramic - estetic, discret, acțiune mai lentă",
  "Aparat dentar safir/transparent - foarte estetic",
  "Aparat dentar lingual - montat pe interiorul dinților",
  "Alignere transparente (gutieră ortodontică) - alternativă modernă",
  "Gutieră de contenție - menținerea rezultatului după tratament",
];

const technologies = [
  {
    title: "Scanare digitală 3D",
    text: "Planificare precisă, fără disconfortul amprentelor clasice.",
  },
  {
    title: "Simulări digitale",
    text: "Vizualizarea rezultatului estimat înainte de începerea tratamentului.",
  },
  {
    title: "Ghidaj digital brackeți",
    text: "Poziționare corectă și eficiență mai bună pe parcursul terapiei.",
  },
  {
    title: "Sisteme autoligaturante",
    text: "Reduc frecvența ajustărilor și pot scurta durata tratamentului.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Examen inițial și investigații",
    text: "Evaluare clinică, fotografii, radiografii și scanări pentru stabilirea diagnosticului complet.",
  },
  {
    step: "02",
    title: "Plan de tratament personalizat",
    text: "Alegem împreună varianta optimă de aparat/alignere, durata estimată și obiectivele funcționale și estetice.",
  },
  {
    step: "03",
    title: "Montarea aparatului și activări periodice",
    text: "Aplicarea dispozitivului ortodontic și controale regulate pentru ajustări progresive și controlul evoluției.",
  },
  {
    step: "04",
    title: "Contenție și stabilizarea rezultatului",
    text: "După tratamentul activ, purtarea aparatului de contenție previne recidiva și menține alinierea obținută.",
  },
];

const childTimeline = [
  "Prima evaluare ortodontică: în jurul vârstei de 6-7 ani",
  "Monitorizare în dentiția mixtă: controale la aproximativ 6 luni",
  "Evaluare la adolescență: în contextul erupției molarilor de minte",
  "Tratamente disponibile și pentru adulți, fără limită superioară de vârstă",
];

const faqItems = [
  {
    q: "Când ar trebui să merg la ortodont?",
    a: "Ideal este să faceți evaluări periodice, chiar dacă dinții par aliniați. Malocluzia poate exista fără semne evidente și poate afecta funcția masticatorie pe termen lung.",
  },
  {
    q: "Tratamentul ortodontic este doar pentru copii?",
    a: "Nu. Tratamentul poate fi făcut la orice vârstă, dacă starea gingiilor și a osului permite. Tot mai mulți adulți aleg terapii ortodontice moderne.",
  },
  {
    q: "Cât durează tratamentul ortodontic?",
    a: "Durata depinde de complexitatea cazului, tipul aparatului și complianța pacientului. Estimarea exactă se stabilește după consultația de specialitate.",
  },
  {
    q: "Cum aleg între aparat fix și alignere?",
    a: "Decizia se ia împreună cu medicul ortodont, în funcție de obiectivele clinice, stilul de viață, nivelul de disciplină și buget.",
  },
  {
    q: "Este necesară contenția după aparat?",
    a: "Da. Etapa de contenție este esențială pentru stabilizarea rezultatului și prevenirea recidivei pozițiilor dentare.",
  },
  {
    q: "Cât costă un tratament ortodontic?",
    a: "Costul variază în funcție de complexitatea cazului și de tipul aparatului (metalic, ceramic, safir, lingual, alignere). Devizul personalizat se stabilește după evaluare.",
  },
];

export default function OrtodontiePageClient() {
  return (
    <ServicePageShell>
      <ServiceHero
        image="/services/braces-model.png"
        imageAlt="Ortodonție Cluj - Alverna Dental Studio"
        chip="Tratament personalizat pentru copii și adulți"
        kicker="Ortodonție și ortopedie dento-facială"
        title="Ortodonție Cluj"
        intro="La Alverna Dental Studio Cluj oferim tratamente ortodontice la standarde premium, personalizate pentru corectarea anomaliilor dento-maxilare. Obiectivul este dublu: funcție corectă a mușcăturii și un zâmbet armonios, stabil pe termen lung."
      />

      <ServiceQuickFacts
        facts={[
          ["Serviciu", "Ortodonție Cluj"],
          ["Focus", "Aliniere dentară + corectare ocluzie"],
          ["Tehnologii", "Scanare 3D, alignere, ghidaj digital"],
          ["Obiectiv", "Zâmbet funcțional, estetic și stabil"],
        ]}
      />

      <ServiceContentSection>
        <ServiceParagraphSection
          first
          headingLevel="h2"
          heading="Servicii medicale de ortodonție"
          body="Ortodonția se ocupă cu diagnosticul, prevenirea și corectarea anomaliilor dentare și maxilo-faciale. Tratamentul realizat la timp reduce riscul complicațiilor funcționale (masticație, vorbire, igienă) și optimizează estetica zâmbetului."
        />
        <ServiceBulletsSection heading="Ce probleme pot fi corectate" items={correctedProblems} />
        <ServiceBulletsSection heading="Cauze ale anomaliilor dento-maxilare" items={causes} />
        <ServiceStepsSection heading="Etapele tratamentului ortodontic" steps={processSteps} />
        <ServiceBulletsSection heading="Principalele tratamente în ortodonție" items={treatmentTypes} />
        <ServiceBulletsSection heading="Tratamente ortodontice pentru copii" items={childTimeline} />
        <ServiceCardsSection heading="Tehnologie și tratamente de ultimă generație" cards={technologies} />
        <ServiceFAQ heading="Întrebări frecvente despre ortodonție" items={faqItems} />
      </ServiceContentSection>

      <ServiceCasesGrid />
      <ServiceTestimonials />
      <ServiceContactForm
        headline="Un zâmbet aliniat schimbă funcția și încrederea."
        body="La Alverna Dental Studio primești plan ortodontic personalizat, monitorizare constantă și suport complet pe toată durata tratamentului."
      />
      <ServiceFinalCTA
        title="Ai nevoie de tratament ortodontic în Cluj?"
        body="Programează-te la Alverna Dental Studio și descoperă soluția potrivită pentru alinierea corectă și sănătoasă a danturii."
      />
    </ServicePageShell>
  );
}
