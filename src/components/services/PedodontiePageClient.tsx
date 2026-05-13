"use client";

import {
  ServicePageShell,
  ServiceHero,
  ServiceQuickFacts,
  ServiceParagraphSection,
  ServiceBulletsSection,
  ServiceTextBlock,
  ServiceContentSection,
  ServiceFAQ,
  ServiceCasesGrid,
  ServiceTestimonials,
  ServiceContactForm,
  ServiceFinalCTA,
} from "./ServicePageParts";

const procedures = [
  "Educație dentară și profilaxie adaptată vârstei",
  "Tratamente pentru carii dentare la copii",
  "Managementul abceselor dentare",
  "Monitorizarea erupției dinților permanenți",
  "Corectarea obiceiurilor care afectează mușcătura",
  "Planuri de controale periodice (6 luni / 3 luni)",
];

const commonIssues = [
  "Caria dentară",
  "Abcese dentare",
  "Poziționare deficitară a dinților permanenți",
  "Masticație deficitară",
  "Demineralizarea smalțului",
  "Malocluzii",
];

const fearPrevention = [
  "Explicații oneste, pe înțelesul copilului, înainte de vizită.",
  "Folosirea unui limbaj pozitiv legat de consultație.",
  "Evitarea expresiilor care pot amplifica teama.",
  "Familiarizare graduală cu echipa medicală și instrumentele.",
  "Vizite periodice pentru a transforma consultul într-o rutină firească.",
];

const faqItems = [
  {
    q: "Când ar trebui prima vizită la pedodont?",
    a: "Ideal, odată cu apariția primului dințișor de lapte, în jurul vârstei de 6-8 luni.",
  },
  {
    q: "Cât de des trebuie controale la stomatologie copii?",
    a: "În general la 6 luni, iar în perioada erupției dinților permanenți, uneori la 3 luni, conform recomandării medicului.",
  },
  {
    q: "Cum prevenim frica de dentist?",
    a: "Prin vizite regulate, explicații pozitive și o familiarizare treptată a copilului cu mediul din cabinet.",
  },
  {
    q: "Dinții de lapte chiar trebuie tratați?",
    a: "Da. Dinții temporari au rol esențial în dezvoltarea dentiției permanente, masticație și aliniere.",
  },
];

export default function PedodontiePageClient() {
  return (
    <ServicePageShell>
      <ServiceHero
        image="/services/pediatric-baby.png"
        imageAlt="Stomatologie pediatrică la Alverna Dental Studio"
        chip="Stomatologie pediatrică Cluj"
        kicker="Pedodonție"
        title="Stomatologie copii"
        intro={
          <>
            Vă stăm la dispoziție cu servicii de stomatologie copii / pedodonție de la apariția primului dințișor de lapte, până la dezvoltarea obiceiurilor de igienă dentară.
            <br />
            <br />
            Medicii specialiști Alverna Dental Studio sunt alături de copilul dvs. în fiecare etapă, cu accent pe prevenție, confort și experiențe pozitive la dentist.
          </>
        }
      />

      <ServiceQuickFacts
        facts={[
          ["Serviciu", "Stomatologie copii / pedodonție"],
          ["Vârsta recomandată", "De la primul dinte de lapte"],
          ["Frecvență controale", "La 6 luni sau conform recomandării"],
          ["Obiectiv", "Prevenție, tratament, obiceiuri sănătoase"],
        ]}
      />

      <ServiceContentSection>
        <ServiceParagraphSection
          first
          headingLevel="h2"
          heading="Pedodonție: servicii de stomatologie copii Cluj"
          body="Mersul la stomatolog ar trebui să fie un obicei firesc și o experiență pozitivă pentru orice copil. În clinicile Alverna Dental Studio, dispunem de personal medical cu experiență în interacțiunea cu cei mici, astfel încât fiecare vizită să fie un prilej de învățare pentru copil și părinte."
        />
        <ServiceTextBlock
          heading="Dentiția temporară: dințișorii de lapte sunt importanți"
          body={
            <div className="space-y-4">
              <p>
                Dinții de lapte au rol esențial în dezvoltarea unei danturi sănătoase. Problemele netratate la dentiția temporară pot influența alinierea dinților permanenți, masticația și dezvoltarea ocluziei.
              </p>
              <p>
                Prima vizită la stomatologul pediatric este recomandată în jurul vârstei de 6-8 luni, odată cu apariția primilor dințișori. Medicul pedodont are și rol de educator pentru igiena orală corectă încă din primii ani de viață.
              </p>
            </div>
          }
        />
        <ServiceBulletsSection heading="Proceduri stomatologice pentru copii" items={procedures} />
        <ServiceBulletsSection heading="Cu ce afecțiuni dentare se confruntă copiii?" items={commonIssues} />
        <ServiceTextBlock
          heading="Când trebuie să programați vizita la pedodont?"
          body={
            <div className="space-y-4">
              <p>
                Prima vizită este recomandată la apariția primului dinte de lapte. Ulterior, controalele regulate, din 6 în 6 luni, ajută la identificarea timpurie a problemelor dentare și la prevenție eficientă.
              </p>
              <p>
                În perioada erupției dinților permanenți (5-7 ani), pot fi indicate controale mai dese, inclusiv din 3 în 3 luni. În caz de durere, traumatisme sau disconfort, consultul stomatologic trebuie făcut imediat.
              </p>
            </div>
          }
        />
        <ServiceTextBlock
          heading="Cum gestionăm frica de dentist?"
          body={
            <div className="divide-y divide-black/10">
              {fearPrevention.map((item, idx) => (
                <div key={item} className="grid gap-3 py-5 md:grid-cols-[90px_1fr] md:items-start">
                  <p className="text-[30px] font-semibold leading-none tracking-[-0.03em] text-[#141414]/65">{`0${idx + 1}`}</p>
                  <p className="text-[15px] leading-[1.65] text-[#3c3c3c]">{item}</p>
                </div>
              ))}
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
        title="Servicii profesionale de stomatologie copii Cluj"
        body="Misiunea echipei Alverna Dental Studio este să ofere tuturor pacienților, mici și mari, șansa de a zâmbi fără rețineri. Pentru programări, vă rugăm să ne contactați."
      />
    </ServicePageShell>
  );
}
