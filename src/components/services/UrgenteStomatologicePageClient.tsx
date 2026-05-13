"use client";

import {
  ServicePageShell,
  ServiceHero,
  ServiceQuickFacts,
  ServiceBulletsSection,
  ServiceStepsSection,
  ServiceContentSection,
  ServiceFAQ,
  ServiceCasesGrid,
  ServiceTestimonials,
  ServiceContactForm,
  ServiceFinalCTA,
} from "./ServicePageParts";

const emergencySymptoms = [
  "Durere dentară acută, pulsatilă sau persistentă",
  "Sângerare orală excesivă (spontană sau post-extracțională)",
  "Traumatisme dento-alveolare: fractură, luxație, avulsie",
  "Inflamație severă, abces, febră sau edem facial",
  "Dureri ce iradiază spre ureche, gât sau maxilar",
];

const commonDiagnoses = [
  "Pulpită acută",
  "Parodontită apicală acută",
  "Abces dentar / inflamație gingivală severă",
  "Alveolită postextracțională",
  "Pericoronarită (frecvent la molarii de minte)",
  "Carii profunde complicate și hemoragii",
];

const processSteps = [
  {
    step: "01",
    title: "Triaj și consultație de urgență",
    text: "Evaluăm rapid simptomele, statusul durerii și riscul de complicații pentru a prioritiza intervenția corectă.",
  },
  {
    step: "02",
    title: "Controlul durerii și al infecției",
    text: "Aplicăm tratamente de urgență pentru calmarea durerii, controlul hemoragiei și limitarea proceselor infecțioase.",
  },
  {
    step: "03",
    title: "Tratament local țintit",
    text: "Intervenim specific: pansament calmant, drenaj, tratament endodontic de urgență, extracție sau stabilizare traumatică.",
  },
  {
    step: "04",
    title: "Plan de continuare și monitorizare",
    text: "După stabilizare, stabilim pașii următori pentru vindecare completă și prevenirea recidivei.",
  },
];

const traumaGuidelines = [
  "În cazul avulsiei dentare, prezentarea ideală este sub 60 minute",
  "Nu manipula excesiv dintele traumatizat și evită curățarea agresivă",
  "Păstrează fragmentul dentar/dintele și vino urgent la consultație",
  "Nu administra medicație aleatorie fără recomandare medicală",
];

const pediatricEmergency = [
  "Durere dentară severă la copii",
  "Fracturi dentare în timpul jocului/activităților sportive",
  "Infecții acute sau carii avansate cu durere",
  "Dinți mobili, avulsați sau traumatisme orale complexe",
];

const emergencyCosts = [
  "Consultație de urgență cu tarif standard",
  "Costuri suplimentare în funcție de procedură (pansament, extracție etc.)",
  "Estimare orientativă disponibilă înainte de tratament",
  "Detalii complete în secțiunea Tarife",
];

const faqItems = [
  {
    q: "Ce fac dacă am durere dentară intensă în afara programului?",
    a: "Clătește blând cu apă călduță, menține igiena locală și folosește analgezic doar conform recomandărilor uzuale. Programează-te cât mai rapid la urgență stomatologică.",
  },
  {
    q: "Cum opresc sângerarea orală după extracție sau traumatism?",
    a: "Aplică presiune cu tifon steril 15-20 minute, fără clătiri agresive. Dacă sângerarea persistă, este necesară prezentarea imediată la medic.",
  },
  {
    q: "În cât timp ar trebui să ajung la dentist în caz de urgență?",
    a: "Ideal în 30-60 minute, mai ales în traumatisme sau avulsii dentare. Intervenția rapidă crește semnificativ șansele de salvare a dintelui.",
  },
  {
    q: "Ce fac dacă s-a fracturat dintele sau a căzut plomba?",
    a: "Evită masticația pe partea afectată, păstrează zona curată și prezintă-te urgent la consult pentru a evita infecțiile și agravarea leziunii.",
  },
  {
    q: "Ce înseamnă umflarea obrazului în context dentar?",
    a: "Poate semnala o infecție activă (abces). Nu aplica căldură locală și nu încerca drenaj acasă; este necesară intervenție stomatologică urgentă.",
  },
];

export default function UrgenteStomatologicePageClient() {
  return (
    <ServicePageShell>
      <ServiceHero
        image="/services/exam-male-2.png"
        imageAlt="Urgențe stomatologice Cluj - Alverna Dental Studio"
        chip="Durere acută · infecții · traumatisme"
        kicker="Intervenție rapidă și sigură"
        title="Urgențe stomatologice"
        intro="La Alverna Dental Studio tratăm urgențele stomatologice prompt, cu echipă specializată și aparatură modernă. În caz de durere acută, traumatism, infecție sau sângerare, intervenția rapidă este esențială pentru a preveni complicațiile."
      />

      <ServiceQuickFacts
        facts={[
          ["Serviciu", "Urgențe stomatologice Cluj"],
          ["Intervenții", "Durere, traumă, infecție, sângerare"],
          ["Prioritate", "Stabilizare rapidă și controlul complicațiilor"],
          ["Obiectiv", "Salvarea dintelui și reducerea disconfortului"],
        ]}
      />

      <ServiceContentSection>
        <ServiceBulletsSection
          first
          headingLevel="h2"
          heading="Cu ce probleme ne putem confrunta"
          items={emergencySymptoms}
        />
        <ServiceBulletsSection heading="Diagnostice frecvente în urgențe" items={commonDiagnoses} />
        <ServiceStepsSection heading="Protocol de tratament în urgență" steps={processSteps} />
        <ServiceBulletsSection heading="Vindecarea traumelor orale" items={traumaGuidelines} />
        <ServiceBulletsSection heading="Urgențe stomatologice la copii" items={pediatricEmergency} />
        <ServiceBulletsSection heading="Costuri și prețuri orientative" items={emergencyCosts} />
        <ServiceFAQ heading="Întrebări frecvente despre urgențe stomatologice" items={faqItems} />
      </ServiceContentSection>

      <ServiceCasesGrid />
      <ServiceTestimonials />
      <ServiceContactForm
        headline="Intervenim rapid pentru sănătatea zâmbetului tău."
        body="În urgențe stomatologice, timpul contează. Echipa Alverna Dental Studio îți oferă suport prompt și tratamente eficiente pentru stabilizare și vindecare."
      />
      <ServiceFinalCTA
        title="Ai o urgență stomatologică în Cluj?"
        body="Programează-te cât mai rapid la Alverna Dental Studio pentru evaluare imediată și intervenție specializată."
        buttonLabel="Solicită consult urgent"
      />
    </ServicePageShell>
  );
}
