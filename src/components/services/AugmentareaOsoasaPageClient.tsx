"use client";

import {
  ServicePageShell,
  ServiceHero,
  ServiceQuickFacts,
  ServiceParagraphSection,
  ServiceTextBlock,
  ServiceCardsSection,
  ServiceStepsSection,
  ServiceContentSection,
  ServiceFAQ,
  ServiceCasesGrid,
  ServiceTestimonials,
  ServiceContactForm,
  ServiceFinalCTA,
} from "./ServicePageParts";

const causes = [
  "Extracții dentare neurmate de înlocuirea dinților lipsă",
  "Infecții gingivale sau osoase cu evoluție lentă",
  "Boli parodontale avansate",
  "Traumatisme care au afectat osul maxilar",
  "Chisturi maxilare sau tumori",
];

const benefits = [
  {
    title: "Stabilitate pentru implanturi",
    text: "Asigură suport osos adecvat și crește rata de succes a procedurilor ulterioare.",
  },
  {
    title: "Funcționalitate îmbunătățită",
    text: "Redă eficiența masticației și susține funcționarea corectă a danturii.",
  },
  {
    title: "Estetică facială",
    text: "Previne colapsul maxilar și contribuie la un profil facial armonios.",
  },
  {
    title: "Rezultate de durată",
    text: "Crește longevitatea implanturilor și menține echilibrul dento-maxilar.",
  },
];

const materials = [
  "Biomateriale sintetice (aloplastice): hidroxiapatită, fosfați de calciu",
  "Os autolog (propriu): compatibilitate biologică excelentă",
  "Xenogrefe: materiale de origine bovină, tratate și biocompatibile",
  "Alogrefe: os uman prelucrat din bănci de țesut",
];

const technologies = [
  "Membrane resorbabile / neresorbabile pentru protecția zonei grefate",
  "Factori biologici de creștere (PRF) pentru accelerarea vindecării",
  "Echipamente chirurgicale de precizie pentru traumă tisulară minimă",
];

const processSteps = [
  {
    step: "01",
    title: "Evaluare și planificare",
    text: "Investigații imagistice (radiografie panoramică / CBCT 3D) și alegerea tipului de grefă.",
  },
  {
    step: "02",
    title: "Intervenția chirurgicală",
    text: "Adiția osoasă se realizează sub anestezie locală și durează, în general, 45-90 de minute.",
  },
  {
    step: "03",
    title: "Vindecare și osteointegrare",
    text: "Materialul se integrează în 4-6 luni, cu monitorizare periodică.",
  },
  {
    step: "04",
    title: "Inserarea implantului",
    text: "După confirmarea integrării osoase, se realizează etapa finală de restaurare.",
  },
];

const faqItems = [
  {
    q: "Ce se întâmplă în tot procesul de tratament?",
    a: "În prima etapă, medicul chirurg realizează o incizie gingivală pentru expunerea osului maxilar. Zona este pregătită, se aplică materialul biocompatibil de adiție, apoi gingia este suturată și protejată cu un baraj local.",
  },
  {
    q: "Care este gradul de disconfort?",
    a: "Procedura este complexă, dar disconfortul este redus, deoarece se efectuează sub anestezie locală. În situații speciale, poate fi luată în calcul și anestezia generală.",
  },
  {
    q: "Există riscuri asociate tratamentului de adiție osoasă?",
    a: "Ca orice intervenție chirurgicală, există riscuri minore și rare: inflamație locală temporară, infecție locală, respingerea grefei sau resorbție parțială a materialului. Cu protocoale corecte și monitorizare, acestea sunt bine controlate.",
  },
  {
    q: "Care este rata de succes a procedurii?",
    a: "Rata de succes este foarte ridicată, mai ales când procedura este realizată într-o clinică specializată, cu materiale de calitate, planificare corectă și respectarea indicațiilor post-operatorii.",
  },
  {
    q: "Cum decurge recuperarea după augmentarea osoasă?",
    a: "Vindecarea durează, de regulă, 4-6 luni. În primele 24-48 de ore pot apărea inflamație ușoară și disconfort local. Recomandările medicale privind igiena, dieta, medicația și controalele sunt esențiale pentru un rezultat optim.",
  },
  {
    q: "Ce responsabilități are pacientul?",
    a: "Pacientul trebuie să urmeze strict indicațiile medicului: igienă orală atentă, evitarea fumatului și alcoolului, respectarea medicației, prezentarea la controale și menținerea unui regim alimentar adecvat în perioada post-operatorie.",
  },
];

export default function AugmentareaOsoasaPageClient() {
  return (
    <ServicePageShell>
      <ServiceHero
        image="/services/implant-model-1.png"
        imageAlt="Augmentare osoasă și regenerare maxilară"
        chip="Adiție de os Cluj"
        kicker="Chirurgie orală"
        title="Augmentarea osoasă"
        intro="Augmentarea osoasă reprezintă procedura de refacere sau regenerare a osului maxilar, astfel încât acesta să poată susține implanturi dentare, punți sau proteze. Insuficiența osoasă nu produce de obicei durere, dar devine o problemă majoră în momentul în care este necesară restaurarea dentară."
      />

      <ServiceQuickFacts
        facts={[
          ["Procedură", "Augmentare osoasă / adiție de os"],
          ["Indicație", "Volum osos insuficient pentru implant"],
          ["Durată vindecare", "Aproximativ 4-6 luni"],
          ["Obiectiv", "Bază stabilă pentru restaurare dentară"],
        ]}
      />

      <ServiceContentSection>
        <ServiceParagraphSection
          first
          headingLevel="h2"
          heading="Augmentare osoasă (adiție de os)"
          body="Augmentarea osoasă, denumită și grefare sau adiție de os, este procedura prin care se reface volumul osului maxilar, cu materiale biocompatibile și tehnici moderne. Scopul principal este obținerea unei fundații solide pentru implanturi dentare stabile și funcționale pe termen lung."
        />
        <ServiceTextBlock
          heading="Când este necesară augmentarea osoasă?"
          body={
            <div className="space-y-4">
              <p>
                Adiția de os este indicată când pacientul nu are suficient țesut osos pentru a susține corect un implant dentar. Fără suport osos adecvat, implantul nu se poate fixa stabil.
              </p>
              <p>
                Una dintre cele mai frecvente cauze este pierderea dinților neurmată de restaurare în timp util. În lipsa rădăcinii dentare, osul începe să se resoarbă treptat.
              </p>
              <ul className="space-y-2">
                {causes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[10px] h-[4px] w-[4px] rounded-full bg-[#4E7044]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          }
        />
        <ServiceCardsSection heading="De ce este importantă augmentarea osoasă?" cards={benefits} />
        <ServiceStepsSection heading="Cum se realizează augmentarea osoasă?" steps={processSteps} />
        <ServiceTextBlock
          heading="Cât costă augmentarea osoasă?"
          body={
            <div className="space-y-4">
              <p>
                Costul variază în funcție de dimensiunea zonei, tipul de material osos utilizat, complexitatea procedurii, investigațiile necesare și eventualele intervenții asociate.
              </p>
              <p>
                În cadrul Alverna Dental Studio, fiecare pacient primește un plan personalizat, iar tarifele sunt comunicate transparent după consultația inițială.
              </p>
              <p>Pentru confortul pacienților, există opțiuni de plată în rate prin parteneriate dedicate.</p>
            </div>
          }
        />
        <ServiceTextBlock
          heading="Materiale și tehnologii utilizate"
          body={
            <div className="space-y-4">
              <p className="font-semibold text-[#0A0A0A]">Tipuri de materiale utilizate în adiția osoasă:</p>
              <ul className="space-y-2">
                {materials.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[10px] h-[4px] w-[4px] rounded-full bg-[#4E7044]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-semibold text-[#0A0A0A]">Tehnologii moderne pentru regenerare osoasă:</p>
              <ul className="space-y-2">
                {technologies.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[10px] h-[4px] w-[4px] rounded-full bg-[#4E7044]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          }
        />
        <ServiceFAQ heading="Întrebări frecvente despre augmentarea osoasă" items={faqItems} />
      </ServiceContentSection>

      <ServiceCasesGrid />
      <ServiceTestimonials />
      <ServiceContactForm
        headline="Primul pas spre un zâmbet sănătos începe aici."
        body="Echipa Alverna Dental Studio te ajută să alegi tratamentul potrivit, fără stres și fără presiune."
      />
      <ServiceFinalCTA
        title="Programați-vă pentru augmentare osoasă în Cluj"
        body="Nu lăsați insuficiența osoasă să vă limiteze opțiunile de tratament. Specialiștii Alverna Dental Studio vă oferă planuri personalizate, tehnici moderne și o abordare sigură, predictibilă."
      />
    </ServicePageShell>
  );
}
