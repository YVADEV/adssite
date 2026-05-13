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

const indications = [
  "Dinți ciobiți, fisurați sau crăpați",
  "Culoare inestetică sau neuniformă",
  "Formă dentară inestetică",
];

const contraindications = [
  "Bruxism (scrâșnit al dinților)",
  "Plombe foarte mari sau dinți sever erodați",
  "Dinți foarte înghesuiți ori rotiți (necesită ortodonție)",
  "Mușcătură cap la cap",
];

const veneerTypes = [
  "Fațete din ceramică (E-max): rezistente, transluciditate excelentă, aspect natural",
  "Fațete din zirconiu: durabilitate superioară, biocompatibilitate ridicată",
  "Fațete din compozit: soluție mai accesibilă, aplicabilă rapid",
  "Fațete no-prep sau cu șlefuire minimă, în funcție de caz",
];

const benefits = [
  {
    title: "Aspect natural",
    text: "Corectează forma și culoarea dinților pentru un zâmbet uniform și armonios.",
  },
  {
    title: "Minim invaziv",
    text: "Procedură realizată conservator, cu păstrarea țesutului dentar sănătos.",
  },
  {
    title: "Durabilitate",
    text: "Materialele premium asigură rezistență și stabilitate pe termen lung.",
  },
  {
    title: "Încredere crescută",
    text: "Un zâmbet estetic influențează pozitiv stima de sine și confortul social.",
  },
];

const aftercare = [
  "Periaj de minimum 2 ori/zi și folosirea aței dentare",
  "Evitarea alimentelor foarte dure (gheață, nuci, semințe tari)",
  "Limitarea alimentelor și băuturilor intens colorate",
  "Controale periodice la 6 luni pentru monitorizare",
];

const processSteps = [
  {
    step: "01",
    title: "Consultație și evaluare estetică",
    text: "Analiză clinică, fotografii, amprentare digitală și stabilirea obiectivelor.",
  },
  {
    step: "02",
    title: "Plan de tratament personalizat",
    text: "Se decide tipul de fațetă, numărul de dinți și tehnica de aplicare.",
  },
  {
    step: "03",
    title: "Pregătire și fațete provizorii",
    text: "Se realizează șlefuire minimă, dacă este necesar, și se aplică fațete temporare.",
  },
  {
    step: "04",
    title: "Cimentare definitivă",
    text: "Fațetele finale sunt fixate cu precizie pentru funcționalitate și estetică optimă.",
  },
];

const faqItems = [
  {
    q: "Când am nevoie de fațete dentare?",
    a: "Când doriți corectarea culorii, formei sau alinierii vizuale a dinților frontali. Indicația se stabilește împreună cu medicul, după consultație.",
  },
  {
    q: "Cât de rezistente sunt fațetele dentare?",
    a: "După cimentarea corectă, fațetele au rezistență foarte bună în timp. Cu îngrijire adecvată, durata de viață poate depăși 10 ani.",
  },
  {
    q: "Îmi afectează fațetele mușcătura?",
    a: "Nu. Tratamentul este proiectat astfel încât funcția masticatorie să rămână echilibrată și confortabilă.",
  },
  {
    q: "Fațetele dentare afectează dinții naturali?",
    a: "Pregătirea dinților este minim invazivă și controlată. Realizată corect, procedura păstrează sănătatea structurilor dentare.",
  },
  {
    q: "Pot mânca normal cu fațete?",
    a: "Da, însă se recomandă evitarea alimentelor foarte dure și respectarea indicațiilor de întreținere.",
  },
  {
    q: "Cum aflu informații despre fațete dentare preț?",
    a: "Costul depinde de numărul de dinți, materialul ales și complexitatea cazului. Estimarea exactă se stabilește după consultație.",
  },
  {
    q: "Care sunt dezavantajele fațetelor dentare?",
    a: "În caz de fisură, fațeta se înlocuiește integral; în primele zile pot apărea adaptări de pronunție; procedura este, în principiu, ireversibilă.",
  },
];

export default function FateteDentarePageClient() {
  return (
    <ServicePageShell>
      <ServiceHero
        image="/services/smile-mirror.png"
        imageAlt="Fațete dentare în Cluj-Napoca"
        chip="Fațete premium cu aspect natural"
        kicker="Estetică și protetică dentară"
        title="Fațete dentare"
        intro="Doriți un zâmbet perfect? La Alverna Dental Studio Cluj oferim servicii premium de aplicare fațete dentare, pentru corectarea imperfecțiunilor de culoare, formă și aliniere vizuală, cu rezultate naturale și durabile."
      />

      <ServiceQuickFacts
        facts={[
          ["Serviciu", "Fațete dentare Cluj"],
          ["Material principal", "Ceramică presată Ivoclar e.max Press"],
          ["Durată medie tratament", "7-10 zile (2-3 ședințe)"],
          ["Obiectiv", "Zâmbet uniform, armonios, natural"],
        ]}
      />

      <ServiceContentSection>
        <ServiceBulletsSection first headingLevel="h2" heading="Indicații pentru fațete dentare" items={indications} />
        <ServiceBulletsSection heading="Contraindicații" items={contraindications} />
        <ServiceBulletsSection heading="Tipuri de fațete dentare" items={veneerTypes} />
        <ServiceStepsSection heading="Etapele tratamentului" steps={processSteps} />
        <ServiceCardsSection heading="Beneficii fațete dentare" cards={benefits} />
        <ServiceBulletsSection heading="Cum se întrețin fațetele dentare" items={aftercare} />
        <ServiceFAQ heading="Întrebări frecvente despre fațete dentare" items={faqItems} />
      </ServiceContentSection>

      <ServiceCasesGrid />
      <ServiceTestimonials />
      <ServiceContactForm
        headline="Primul pas spre un zâmbet sănătos începe aici."
        body="Echipa Alverna Dental Studio te ajută să alegi tratamentul potrivit, fără stres și fără presiune."
      />
      <ServiceFinalCTA
        title="Vrei un zâmbet perfect cu fațete dentare?"
        body="Programează o consultație la Alverna Dental Studio și află ce soluție personalizată de fațete dentare este potrivită pentru tine."
      />
    </ServicePageShell>
  );
}
