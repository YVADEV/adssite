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

const indications = [
  "Pierderea unuia sau mai multor dinți",
  "Edentație parțială sau totală",
  "Dinți fracturați/ciobiți",
  "Decolorări sau defecte estetice persistente",
  "Probleme de masticație, vorbire sau ocluzie",
];

const prostheticTypes = [
  "Fațete dentare (corecții estetice)",
  "Coroane dentare (refacere structurală completă)",
  "Punți dentare (înlocuirea dinților lipsă între dinți suport)",
  "Incrustații dentare Inlay/Onlay",
  "Proteze parțiale sau totale (mobile/fixe)",
  "Soluții pe implanturi pentru stabilitate extinsă",
];

const technologyHighlights = [
  {
    title: "Scanare digitală intraorală",
    text: "Amprentare precisă și confort crescut pentru pacient, fără mulaje clasice inconfortabile.",
  },
  {
    title: "CAD-CAM",
    text: "Proiectare și frezare digitală pentru lucrări protetice cu adaptare excelentă.",
  },
  {
    title: "Laborator modern",
    text: "Execuție rapidă și control riguros al calității pentru rezultate estetice și funcționale.",
  },
  {
    title: "Materiale premium",
    text: "Ceramică, zirconiu, compozit și biomateriale biocompatibile pentru durabilitate.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultație și diagnostic",
    text: "Evaluăm clinic și imagistic starea danturii, gingiilor și ocluziei pentru a defini obiectivele tratamentului.",
  },
  {
    step: "02",
    title: "Plan de tratament personalizat",
    text: "Stabilim tipul de lucrare protetică, etapele, materialele și opțiunile de cost în funcție de nevoile pacientului.",
  },
  {
    step: "03",
    title: "Pregătire + amprentare digitală",
    text: "Pregătim dinții/structurile suport și realizăm datele digitale necesare pentru proiectarea precisă a lucrării.",
  },
  {
    step: "04",
    title: "Probă, adaptare și fixare",
    text: "Verificăm estetica, ocluzia și confortul, apoi fixăm lucrarea definitiv și stabilim protocolul de monitorizare.",
  },
];

const maintenanceTips = [
  "Periaj de minimum 2 ori/zi cu tehnică corectă",
  "Ață dentară/periuțe interdentare pentru zonele greu accesibile",
  "Evitarea alimentelor foarte dure sau lipicioase",
  "Igienizări profesionale și controale la 6 luni",
  "Respectarea recomandărilor personalizate primite după montarea lucrării",
];

const faqItems = [
  {
    q: "Cât durează realizarea unei lucrări protetice?",
    a: "În funcție de complexitate, o coroană sau o fațetă se poate finaliza în aproximativ 7-10 zile, incluzând consultația, pregătirea și montarea.",
  },
  {
    q: "Sunt lucrările protetice durabile?",
    a: "Da. Cu igienă corectă și controale periodice, lucrările protetice pot rezista 10-15 ani sau chiar mai mult, în funcție de material și context clinic.",
  },
  {
    q: "Lucrările protetice sunt doar pentru estetică?",
    a: "Nu. Ele au rol dublu: estetic și funcțional, contribuind la masticație corectă, vorbire clară și echilibru ocluzal.",
  },
  {
    q: "Care este diferența dintre coroană și fațetă?",
    a: "Coroana acoperă întreaga suprafață a dintelui și îl consolidează, în timp ce fațeta acoperă doar fața vizibilă și are predominant rol estetic.",
  },
  {
    q: "Care este diferența dintre punte și implant?",
    a: "Puntea se sprijină pe dinții vecini (care necesită preparare), iar implantul înlocuiește rădăcina dintelui direct în os, fără a afecta dinții adiacenți.",
  },
  {
    q: "Se poate plăti în rate?",
    a: 'Da, la Alverna Dental Studio sunt disponibile opțiuni de plată în rate prin partenerii financiari, în funcție de eligibilitate.',
  },
  {
    q: "Cât costă o lucrare de protetică dentară?",
    a: "Costul diferă în funcție de tipul lucrării, materialele alese și complexitatea cazului; estimarea exactă se oferă după consultație.",
  },
];

export default function ProteticaPageClient() {
  return (
    <ServicePageShell>
      <ServiceHero
        image="/services/lab-hands-model.png"
        imageAlt="Protetică dentară Cluj - Alverna Dental Studio"
        chip="Precizie digitală · estetică naturală"
        kicker="Reabilitare orală estetică și funcțională"
        title="Protetică dentară"
        intro="La Alverna Dental Studio Cluj oferim tratamente de protetică dentară la standarde înalte, pentru reconstrucția esteticii și funcționalității danturii. Lucrările sunt planificate personalizat, cu tehnologii digitale moderne și materiale biocompatibile de calitate superioară."
      />

      <ServiceQuickFacts
        facts={[
          ["Serviciu", "Protetică dentară Cluj"],
          ["Lucrări", "Fațete, coroane, punți, proteze"],
          ["Tehnologie", "Scanare digitală + CAD-CAM"],
          ["Obiectiv", "Funcție corectă și zâmbet armonios"],
        ]}
      />

      <ServiceContentSection>
        <ServiceParagraphSection
          first
          headingLevel="h2"
          heading="Tratamente de protetică în Cluj"
          body="Protetică dentară înseamnă restaurarea aparatului dento-maxilar prin lucrări fixe sau mobile, astfel încât masticația, fonația, ocluzia și estetica să fie readuse la parametri optimi. Alegerea tipului de lucrare se face individual, împreună cu medicul specialist."
        />
        <ServiceBulletsSection heading="Când este indicată protetica" items={indications} />
        <ServiceBulletsSection heading="Tipuri de lucrări protetice" items={prostheticTypes} />
        <ServiceStepsSection heading="Etapele tratamentului protetic" steps={processSteps} />
        <ServiceCardsSection heading="Tehnologii moderne în protetică" cards={technologyHighlights} />
        <ServiceBulletsSection heading="Întreținerea lucrărilor protetice" items={maintenanceTips} />
        <ServiceFAQ heading="Întrebări frecvente despre protetică dentară" items={faqItems} />
      </ServiceContentSection>

      <ServiceCasesGrid />
      <ServiceTestimonials />
      <ServiceContactForm
        headline="Refă-ți zâmbetul cu soluții protetice moderne."
        body="Echipa Alverna Dental Studio construiește planuri personalizate pentru rezultate estetice și funcționale stabile pe termen lung."
      />
      <ServiceFinalCTA
        title="Ai nevoie de lucrări de protetică dentară în Cluj?"
        body="Programează-te la Alverna Dental Studio pentru evaluare completă și un plan protetic adaptat nevoilor tale."
      />
    </ServicePageShell>
  );
}
