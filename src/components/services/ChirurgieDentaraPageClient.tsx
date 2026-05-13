"use client";

import {
  ServicePageShell,
  ServiceHero,
  ServiceQuickFacts,
  ServiceTextBlock,
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

const indications = [
  "Extracții dentare (dinți permanenți, molari de minte, resturi radiculare)",
  "Tratamente de implantologie (adiție osoasă, implant dentar)",
  "Afecțiuni parodontale avansate (chisturi, pungi, abcese)",
  "Proceduri de estetică dentară (gingivectomie, gingivoplastie)",
  "Tratament ortodontic / ortopedic dento-maxilo-facial",
];

const prepAndRecovery = [
  "Consultație detaliată și evaluarea istoricului medical",
  "Discuție despre medicație, suplimente și eventuale alergii",
  "Respectarea indicațiilor preoperatorii (dietă, antibiotice, repaus alimentar)",
  "Îngrijire postoperatorie: comprese reci, dietă moale, tratament medicamentos",
  "Controale periodice pentru monitorizarea vindecării și suturilor",
];

const advantages = [
  {
    title: "Experiență multidisciplinară",
    text: "Cazurile sunt analizate integrat de specialiști pentru soluții sigure și predictibile.",
  },
  {
    title: "Tehnologii moderne",
    text: "Radiologie 3D, piezosurgery, microchirurgie și laser pentru precizie și traumă minimă.",
  },
  {
    title: "Confort și siguranță",
    text: "Protocoale stricte, anestezie adaptată și monitorizare atentă post-operatorie.",
  },
  {
    title: "Transparență",
    text: "Plan de tratament clar, costuri explicate și opțiuni de plată flexibile.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultație și diagnostic",
    text: "Se stabilesc indicația chirurgicală, investigațiile necesare și planul de tratament.",
  },
  {
    step: "02",
    title: "Plan de anestezie",
    text: "Anestezie locală sau, în cazuri speciale, anestezie generală, în funcție de complexitate.",
  },
  {
    step: "03",
    title: "Intervenție chirurgicală",
    text: "Procedura este realizată minim invaziv, cu tehnici moderne și control precis al zonei tratate.",
  },
  {
    step: "04",
    title: "Recuperare și controale",
    text: "Pacientul urmează indicațiile postoperatorii și revine la controale pentru monitorizare.",
  },
];

const faqItems = [
  {
    q: "Când este necesară o intervenție de chirurgie dentară?",
    a: "Când problema depășește aria tratamentelor clasice: extracții complexe, molari incluși, infecții extinse, reconstrucții osoase sau proceduri premergătoare implanturilor.",
  },
  {
    q: "Extracțiile dentare se fac cu durere?",
    a: "Nu. Intervențiile se realizează cu anestezie corespunzătoare, iar disconfortul postoperator este, în general, redus și controlabil.",
  },
  {
    q: "Cum decurge recuperarea după extracția măselei de minte?",
    a: "În primele zile pot apărea inflamație și sensibilitate locală. Respectarea recomandărilor privind igiena, dieta și medicația accelerează vindecarea.",
  },
  {
    q: "Ce tehnologii sunt utilizate în chirurgia dentară modernă?",
    a: "Piezosurgery, microchirurgie dentară, laser dentar și imagistică 3D pentru intervenții precise, cu traumă minimă și recuperare mai rapidă.",
  },
  {
    q: "Cum sunt stabilite costurile procedurilor?",
    a: "Costurile depind de tipul intervenției, complexitate, tehnologiile folosite și eventualele etape suplimentare. Planul și estimarea sunt prezentate înainte de tratament.",
  },
  {
    q: "Ce responsabilități are pacientul după intervenție?",
    a: "Respectarea strictă a indicațiilor postoperatorii: igienă adecvată, dietă recomandată, evitarea fumatului și prezentarea la controalele indicate.",
  },
];

export default function ChirurgieDentaraPageClient() {
  return (
    <ServicePageShell>
      <ServiceHero
        image="/services/exam-male-2.png"
        imageAlt="Intervenții de chirurgie dentară"
        chip="Intervenții eficiente și sigure"
        kicker="Chirurgie orală și maxilo-facială"
        title="Chirurgie dentară"
        intro="Serviciile de chirurgie dentară Alverna Dental Studio includ proceduri complexe pentru corectarea și repararea structurilor moi și dure ale cavității orale. De la extracții complexe la reconstrucții osoase și intervenții maxilo-faciale, tratamentele sunt realizate la standarde înalte, cu rezultate estetice și funcționale predictibile."
      />

      <ServiceQuickFacts
        facts={[
          ["Specializare", "Chirurgie dentară"],
          ["Indicații", "Extracții, implantologie, reconstrucții"],
          ["Abordare", "Minim invazivă și predictibilă"],
          ["Obiectiv", "Sănătate, funcționalitate, estetică"],
        ]}
      />

      <ServiceContentSection>
        <ServiceTextBlock
          first
          headingLevel="h2"
          heading="Când este necesară intervenția chirurgicală dentară?"
          body={
            <div className="space-y-4">
              <p>
                Intervențiile chirurgicale sunt recomandate când tratamentele stomatologice clasice nu mai pot rezolva problema: de la extracții complexe la proceduri de reconstrucție osoasă.
              </p>
              <ul className="space-y-2">
                {indications.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[10px] h-[4px] w-[4px] rounded-full bg-[#4E7044]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          }
        />
        <ServiceBulletsSection heading="Etapele procedurii și pregătirea pacientului" items={prepAndRecovery} />
        <ServiceStepsSection heading="Cum decurge o intervenție de chirurgie dentară" steps={processSteps} />
        <ServiceCardsSection heading="Beneficiile colaborării cu o clinică specializată" cards={advantages} />
        <ServiceFAQ heading="Întrebări frecvente" items={faqItems} />
      </ServiceContentSection>

      <ServiceCasesGrid />
      <ServiceTestimonials />
      <ServiceContactForm
        headline="Primul pas spre un zâmbet sănătos începe aici."
        body="Echipa Alverna Dental Studio te ajută să alegi tratamentul potrivit, fără stres și fără presiune."
      />
      <ServiceFinalCTA
        title="Programați-vă la chirurgie dentară în Cluj"
        body="Dacă aveți nevoie de o intervenție chirurgicală dentară, echipa Alverna Dental Studio vă oferă expertiză, tehnologie modernă și o abordare orientată spre confort și rezultate stabile."
      />
    </ServicePageShell>
  );
}
