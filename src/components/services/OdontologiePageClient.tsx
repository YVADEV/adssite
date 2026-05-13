"use client";

import {
  ServicePageShell,
  ServiceHero,
  ServiceQuickFacts,
  ServiceParagraphSection,
  ServiceBulletsSection,
  ServiceStepsSection,
  ServiceCardsSection,
  ServiceTextBlock,
  ServiceContentSection,
  ServiceFAQ,
  ServiceCasesGrid,
  ServiceTestimonials,
  ServiceContactForm,
  ServiceFinalCTA,
} from "./ServicePageParts";

const procedures = [
  "Obturații directe fizionomice (plombe dentare)",
  "Fațetări dentare",
  "Coroane și punți dentare",
  "Incrustații indirecte (Inlay / Onlay)",
];

const lesionCauses = [
  "Igienă orală deficitară și controale stomatologice rare",
  "Consumul frecvent de alimente și băuturi bogate în zahăr",
  "Factori bacterieni (Streptococcus mutans, Lactobacili)",
  "Traumatisme, obiceiuri vicioase și predispoziție genetică",
];

const cariesSymptoms = [
  "Sensibilitate la rece, cald sau dulce",
  "Durere dentară ușoară ori persistentă",
  "Pete închise la culoare pe suprafața dintelui",
  "Disconfort sau durere la masticație",
];

const benefits = [
  {
    title: "Diagnostic precoce",
    text: "Leziunile sunt identificate din timp prin control clinic, radiografie digitală și cameră intraorală.",
  },
  {
    title: "Tratament minim-invaziv",
    text: "Intervenim rapid pentru a păstra cât mai mult din structura naturală a dintelui.",
  },
  {
    title: "Rezultat estetic natural",
    text: "Folosim materiale moderne, biocompatibile, adaptate nuanței naturale a dinților.",
  },
  {
    title: "Prevenirea complicațiilor",
    text: "Reducem riscul extinderii infecției la pulpa dentară, os sau dinții vecini.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultație și evaluare completă",
    text: "Medicul identifică leziunile carioase sau necarioase și stabilește gradul de afectare al dintelui.",
  },
  {
    step: "02",
    title: "Plan de tratament personalizat",
    text: "Alegem soluția optimă: obturație directă, restaurare indirectă, coroană sau alt tratament potrivit.",
  },
  {
    step: "03",
    title: "Tratament odontologic",
    text: "Intervenția se realizează cu materiale moderne și tehnici precise pentru refacerea funcției și esteticii.",
  },
  {
    step: "04",
    title: "Monitorizare și prevenție",
    text: "Programăm controale periodice și recomandări clare de igienă pentru menținerea rezultatelor pe termen lung.",
  },
];

const forensicBlocks = [
  {
    title: "Identificare dentară în cazuri legale",
    text: "Structura dentară este unică și poate fi folosită pentru identificarea persoanelor în situații medico-legale complexe.",
  },
  {
    title: "Analiza urmelor de mușcătură",
    text: "Odontologia medico-legală oferă informații utile în cazuri de agresiune, prin evaluarea urmelor dentare.",
  },
  {
    title: "Colaborare interdisciplinară",
    text: "Specialiștii colaborează cu medici legiști, criminaliști și autorități pentru concluzii obiective și precise.",
  },
];

const faqItems = [
  {
    q: "Cât durează o procedură de odontologie?",
    a: "Durata depinde de complexitate: o obturație simplă poate fi realizată într-o singură ședință, în timp ce reconstrucțiile complexe pot necesita mai multe vizite.",
  },
  {
    q: "Sunt procedurile de odontologie dureroase?",
    a: "Nu. Tratamentele sunt realizate cu anestezie locală modernă, iar disconfortul este minim. Pentru pacienții anxioși putem discuta opțiuni suplimentare de confort.",
  },
  {
    q: "Rezultatele sunt permanente?",
    a: "Rezultatele sunt durabile, dar depind de igiena orală și de controalele periodice. Materialele restaurative trebuie monitorizate în timp, la fel ca dinții naturali.",
  },
  {
    q: "Este necesară o perioadă de recuperare?",
    a: "Majoritatea tratamentelor odontologice nu necesită recuperare propriu-zisă, iar pacientul își poate relua rapid activitățile obișnuite.",
  },
  {
    q: "Cât costă un tratament de odontologie la Alverna Dental Studio?",
    a: "Costul variază în funcție de tipul leziunii, materialele utilizate și complexitatea cazului. Devizul se stabilește după consultație, iar opțiunile de plată în rate sunt disponibile.",
  },
  {
    q: "Ce materiale utilizați pentru restaurări?",
    a: "Folosim compozite fotopolimerizabile, materiale bioactive, cimenturi ionomere de sticlă și rășini hibride, pentru rezultate funcționale și estetice de durată.",
  },
];

export default function OdontologiePageClient() {
  return (
    <ServicePageShell>
      <ServiceHero
        image="/services/exam-male.png"
        imageAlt="Odontologie Cluj - Alverna Dental Studio"
        chip="Prevenție și tratament minim-invaziv"
        kicker="Stomatologie restaurativă"
        title="Odontologie"
        intro="La Alverna Dental Studio Cluj oferim tratamente de odontologie la standarde înalte, cu tehnologii moderne și materiale biocompatibile. Intervenim prompt pentru tratarea leziunilor carioase și necarioase, astfel încât să prevenim complicațiile și să redăm funcționalitatea și estetica naturală a dintelui."
      />

      <ServiceQuickFacts
        facts={[
          ["Serviciu", "Odontologie Cluj"],
          ["Focus", "Leziuni carioase și necarioase"],
          ["Abordare", "Preventivă + curativă"],
          ["Obiectiv", "Dinți sănătoși, funcționali, estetici"],
        ]}
      />

      <ServiceContentSection>
        <ServiceParagraphSection
          first
          headingLevel="h2"
          heading="Tratamente de odontologie în Cluj"
          body="Odontologia este un pilon central al stomatologiei moderne și urmărește identificarea, tratarea și prevenirea afecțiunilor care compromit structura dentară. Intervenția la timp reduce riscul infecțiilor pulpare, previne pierderea dintelui și evită tratamente ulterioare mai invazive."
        />
        <ServiceBulletsSection heading="Proceduri frecvente" items={procedures} />
        <ServiceBulletsSection heading="Când și de ce apar leziunile dentare" items={lesionCauses} />
        <ServiceBulletsSection heading="Simptomele cariilor dentare" items={cariesSymptoms} />
        <ServiceStepsSection heading="Etapele tratamentului odontologic" steps={processSteps} />
        <ServiceCardsSection heading="Avantajele tratamentului în clinică specializată" cards={benefits} />
        <ServiceTextBlock
          heading="Odontologia medico-legală"
          body={
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {forensicBlocks.map((item) => (
                <div key={item.title} className="border-t border-black/12 pt-4">
                  <h4 className="text-[18px] font-semibold text-[#0A0A0A]">{item.title}</h4>
                  <p className="mt-2 text-[15px] leading-[1.65] text-[#3b3b3b]">{item.text}</p>
                </div>
              ))}
            </div>
          }
        />
        <ServiceFAQ heading="Întrebări frecvente despre odontologie" items={faqItems} />
      </ServiceContentSection>

      <ServiceCasesGrid />
      <ServiceTestimonials />
      <ServiceContactForm
        headline="Tratează la timp, păstrează-ți dinții sănătoși."
        body="Echipa Alverna Dental Studio te ajută cu tratamente odontologice rapide, precise și personalizate, pentru rezultate durabile și confort real."
      />
      <ServiceFinalCTA
        title="Ai nevoie de un consult de odontologie în Cluj?"
        body="Programează-te la Alverna Dental Studio și primește un plan de tratament adaptat exact nevoilor tale."
      />
    </ServicePageShell>
  );
}
