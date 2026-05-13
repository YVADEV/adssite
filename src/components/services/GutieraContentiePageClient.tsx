"use client";

import {
  ServicePageShell,
  ServiceHero,
  ServiceQuickFacts,
  ServiceParagraphSection,
  ServiceBulletsSection,
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

const treatmentItems = [
  "Consultație inițială și evaluare ortodontică.",
  "Stabilirea tipului de contenție: fixă sau mobilă.",
  "Scanare digitală pentru adaptarea gutierei pe dinți.",
  "Plan personalizat pentru perioada de purtare.",
  "Controale periodice pentru monitorizare.",
  "Ajustări și recomandări de igienă pe termen lung.",
];

const recommendationItems = [
  "Pacienți după tratament cu aparat dentar",
  "Cazuri cu tendință de recidivă dentară",
  "Persoane care își doresc menținerea alinierii",
  "Pacienți activi care preferă o soluție confortabilă",
];

const benefitItems = [
  {
    title: "Confortabil",
    text: "Gutiera de contenție este ușor de purtat și de integrat în rutina cotidiană.",
  },
  {
    title: "Protectiv",
    text: "Ajută la protejarea smalțului, gingiilor și articulației mandibulare.",
  },
  {
    title: "Stabil",
    text: "Menține dantura corect aliniată și reduce riscul de recidivare.",
  },
  {
    title: "Practic",
    text: "Poate fi îndepărtată pentru masă și igienă orală, apoi reaplicată ușor.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Evaluare",
    text: "Medicul analizează cazul și recomandă varianta optimă de contenție.",
  },
  {
    step: "02",
    title: "Plan de purtare",
    text: "Se stabilește perioada de purtare în funcție de vârstă și particularități.",
  },
  {
    step: "03",
    title: "Aplicare și adaptare",
    text: "Primești gutiera și instrucțiuni clare pentru utilizare și îngrijire.",
  },
  {
    step: "04",
    title: "Monitorizare",
    text: "Evoluția este verificată periodic pentru menținerea rezultatului.",
  },
];

const faqItems = [
  {
    q: "Ce este gutiera de contenție?",
    a: "Gutiera de contenție este etapa finală a tratamentului ortodontic, menită să mențină dinții în poziția corectă și să prevină recidivarea.",
  },
  {
    q: "Cât timp trebuie purtată?",
    a: "Perioada diferă de la pacient la pacient. În general, inițial se poartă mai multe ore pe zi, apoi doar noaptea, conform recomandării medicului.",
  },
  {
    q: "Este greu de utilizat?",
    a: "Nu. Gutiera este detașabilă, ușor de aplicat și simplu de integrat în rutina zilnică.",
  },
  {
    q: "Cum se îngrijește corect?",
    a: "Se spală zilnic cu periuță și pastă de dinți sau săpun lichid, cu apă călduță (nu fierbinte), și se păstrează într-o cutie dedicată.",
  },
];

export default function GutieraContentiePageClient() {
  return (
    <ServicePageShell>
      <ServiceHero
        image="/services/braces-model.png"
        imageAlt="Gutieră de contenție transparentă"
        chip="Retenție ortodontică"
        kicker="Ortodonție și contenție"
        title="Gutieră de contenție"
        intro="Gutiera de contenție este ultima etapă a tratamentului ortodontic, cea care menține dantura corect aliniată și previne recidivarea dinților în poziția anterioară. După îndepărtarea aparatului dentar, purtarea unei gutiere dentare de contenție este absolut necesară pentru stabilitatea rezultatului pe termen lung."
      />

      <ServiceQuickFacts
        facts={[
          ["Tratament", "Gutieră dentară de contenție"],
          ["Durată", "Stabilită personalizat de medic"],
          ["Recomandat pentru", "Pacienți după aparat dentar"],
          ["Rezultat", "Aliniere menținută, ocluzie stabilă"],
        ]}
      />

      <ServiceContentSection>
        <ServiceParagraphSection
          first
          headingLevel="h2"
          heading="Păstrați-vă zâmbetul: Gutiera de contenție"
          body="În contextul tratamentelor ortodontice, contenția reprezintă procesul de imobilizare a dinților în poziția obținută după purtarea aparatului dentar. Dinții și maxilarele au tendința naturală de a reveni la poziția inițială, iar gutiera de contenție vine în completarea tratamentului ortodontic, asigurând menținerea rezultatului și prevenirea recidivei."
        />
        <ServiceBulletsSection heading="Ce presupune tratamentul" items={treatmentItems} />
        <ServiceTextBlock
          heading="Ce este gutiera de contenție?"
          body={
            <div className="space-y-4">
              <p>
                Când vorbim de contenție, avem în vedere două tipuri de tratamente: contenție fixă (arc subțire de oțel lipit pe fața internă a dinților) și contenție mobilă (gutieră transparentă detașabilă).
              </p>
              <p>
                Gutiera are aspectul unei folii transparente, este rigidă, cu grosime de aproximativ 1 mm, perfect mulată pe dinți. Se detașează ușor, ceea ce oferă un avantaj important pentru igiena orală zilnică.
              </p>
            </div>
          }
        />
        <ServiceBulletsSection heading="Cui i se recomandă" items={recommendationItems} />
        <ServiceCardsSection heading="Ce beneficii are gutiera dentară de contenție?" cards={benefitItems} />
        <ServiceTextBlock
          heading="Cât timp trebuie purtată gutiera de contenție?"
          body={
            <div className="max-w-[1150px] space-y-4">
              <p>
                Perioada de purtare variază în funcție de particularitățile fiecărui pacient, de vârstă și de tratamentul ortodontic avut. În primele 2-3 luni, gutiera se poartă de regulă ziua și noaptea, apoi, de cele mai multe ori, doar pe timpul nopții.
              </p>
              <p>
                Planul exact este stabilit împreună cu medicul ortodont. În practica internațională, retenția nocturnă pe termen lung este frecvent recomandată pentru menținerea alinierii dentare și a ocluziei corecte.
              </p>
            </div>
          }
        />
        <ServiceStepsSection heading="Cum decurge tratamentul" steps={processSteps} />
        <ServiceTextBlock
          heading="Utilizarea și îngrijirea unei gutiere dentare"
          body={
            <div className="max-w-[1150px] space-y-4">
              <p>
                Gutiera se detașează simplu pentru masă și periaj. Când nu este purtată, se păstrează într-o cutie dedicată. Se curăță zilnic cu periuță și pastă de dinți sau săpun lichid, folosind apă călduță.
              </p>
              <p>
                O dată pe zi, se recomandă igienizarea cu tabletă efervescentă antibacteriană dizolvată în apă, timp de 5-10 minute. Toate indicațiile personalizate pentru adaptare optimă se stabilesc împreună cu medicul specialist.
              </p>
            </div>
          }
        />
        <ServiceFAQ heading="Întrebări frecvente" items={faqItems} />
      </ServiceContentSection>

      <ServiceCasesGrid />
      <ServiceTestimonials />
      <ServiceContactForm
        headline="Primul pas spre un zâmbet sănătos începe aici."
        body="Echipa Alverna Dental Studio te ajută să alegi tratamentul potrivit, fără stres și fără presiune."
      />
      <ServiceFinalCTA
        title="Păstrează rezultatul tratamentului ortodontic"
        body="Misiunea echipei Alverna Dental Studio este de a vă reda zâmbetul și sănătatea dentară. Pentru programări, vă rugăm să ne contactați."
      />
    </ServicePageShell>
  );
}
