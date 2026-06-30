import type { StaticImageData } from "next/image";
import cazA7408097 from "@/assets/cazuri/A7408097 2.png";
import cazA7408137 from "@/assets/cazuri/A7408137 2.png";
import cazA7407944 from "@/assets/cazuri/A7407944 2.png";
import cazA7407760 from "@/assets/cazuri/A7407760 2.png";
import cazA7408160 from "@/assets/cazuri/A7408160-2 2.png";
import caz1Before from "@/assets/cazuri/caz1-before.png";
import caz1Proteza from "@/assets/cazuri/caz1-proteza.png";
import caz1After from "@/assets/cazuri/caz1-after.png";
import ceciliaHero from "@/assets/cazuri/cecilia-hero.jpg";
import danaHero from "@/assets/cazuri/dana-hero.png";
import danaHeroBlackBg from "@/assets/cazuri/dana-hero-black-bg.png";
import danaBefore from "@/assets/cazuri/dana-before.png";
import danaHug from "@/assets/cazuri/dana-hug.png";
import andreeaParvuImage from "@/assets/cazuri/Banner/Andreea de folosit 2.png";

export type CaseDoctor = {
  name: string;
  role: string;
  image: StaticImageData;
};

export const DEFAULT_CASE_DOCTOR: CaseDoctor = {
  name: "Dr. Andreea Pârvu",
  role: "Protetică dentară",
  image: andreeaParvuImage,
};

export type CaseStoryImage = {
  image: StaticImageData;
  label: string;
  alt: string;
  objectPosition?: string;
};

export type CaseStudy = {
  slug: string;
  path: string;
  title: string;
  subtitle: string;
  category: string;
  caseNumber: string;
  patientName?: string;
  heroImage: StaticImageData;
  heroObjectPosition?: string;
  heroImageScale?: number;
  thumbnailSrc: string;
  storyImages: CaseStoryImage[];
  intro: string;
  paragraphs: string[];
  closingQuote: string;
  beforeAfterImages: CaseStoryImage[];
  treatmentSteps: { label: string; detail: string }[];
  quickFacts: { label: string; value: string }[];
  doctor: CaseDoctor;
  seoDescription: string;
};

function storyGalleryFromHero(image: StaticImageData, name: string): CaseStoryImage[] {
  return [
    { image, label: "Before", alt: `${name} — situație inițială`, objectPosition: "center top" },
    { image, label: "În clinică", alt: `${name} — documentare în clinică`, objectPosition: "center center" },
    { image, label: "After", alt: `${name} — rezultat final`, objectPosition: "center 36%" },
  ];
}

function beforeAfterFromHero(image: StaticImageData, name: string): CaseStoryImage[] {
  return [
    { image, label: "Before", alt: `${name} — înainte de tratament`, objectPosition: "center top" },
    { image, label: "After", alt: `${name} — după tratament`, objectPosition: "center 36%" },
  ];
}

export const CASE_STUDIES: Record<string, CaseStudy> = {
  implantologie: {
    slug: "implantologie",
    path: "/cazuri/implantologie/",
    title: "Zâmbet reconstruit.\nÎncredere redescoperită.",
    subtitle: "Reabilitare totală prin sistemul All-on-4 Straumann",
    category: "All-on-4 Straumann",
    caseNumber: "Caz #1",
    patientName: "Cecilia",
    heroImage: ceciliaHero,
    heroObjectPosition: "center center",
    thumbnailSrc: ceciliaHero.src,
    storyImages: [
      { image: caz1Before, label: "Before", alt: "Situație inițială — înainte de tratament", objectPosition: "center center" },
      { image: caz1Proteza, label: "Proteză", alt: "Lucrare protetică All-on-4 Straumann", objectPosition: "center center" },
      { image: caz1After, label: "After", alt: "Rezultat final — după tratament", objectPosition: "center 36%" },
    ],
    intro:
      "Pacienta noastră a ajuns la noi cu distrucții dentare severe, o situație care afecta nu doar funcționalitatea, ci și calitatea vieții de zi cu zi.",
    paragraphs: [
      "Pacienta noastră a ajuns la noi cu distrucții dentare severe, o situație care afecta nu doar funcționalitatea, ci și calitatea vieții de zi cu zi. Zâmbetul devenise o sursă de disconfort și nesiguranță.",
      "Am ales o soluție modernă și predictibilă: reabilitare totală prin sistemul All-on-4 Straumann, recunoscut la nivel internațional pentru stabilitate și rezultate pe termen lung. Într-un timp optim și cu o abordare minim invazivă, am reușit să redăm atât funcția, cât și estetica.",
      "Lucrările finale au fost realizate din compozit pe structură de titan, oferind durabilitate, confort și un aspect natural, perfect integrat fizionomiei pacientei.",
    ],
    closingQuote:
      "Rezultatul final nu înseamnă doar un zâmbet nou, ci o transformare completă. Bucuria și încrederea pacientei la finalul tratamentului spun mai mult decât orice descriere.",
    beforeAfterImages: [
      { image: caz1Before, label: "Before", alt: "Cecilia — înainte de tratament", objectPosition: "center center" },
      { image: caz1After, label: "After", alt: "Cecilia — după tratament", objectPosition: "center 36%" },
    ],
    treatmentSteps: [
      { label: "Evaluare clinică", detail: "Analiză completă a distrucțiilor dentare și stabilirea obiectivelor funcționale și estetice." },
      { label: "All-on-4 Straumann", detail: "Reabilitare totală cu sistem recunoscut internațional, abordare minim invazivă și timp optim de tratament." },
      { label: "Proteză finală", detail: "Lucrări din compozit pe structură de titan — durabilitate, confort și aspect natural." },
      { label: "Transformare completă", detail: "Redarea funcției, esteticii și a încrederii pacientei, documentată la finalul tratamentului." },
    ],
    quickFacts: [
      { label: "Sistem utilizat", value: "All-on-4 Straumann" },
      { label: "Material final", value: "Compozit pe structură de titan" },
      { label: "Abordare", value: "Minim invazivă, timp optim" },
      { label: "Rezultat", value: "Funcție, estetică și confort" },
    ],
    doctor: DEFAULT_CASE_DOCTOR,
    seoDescription:
      "Caz #1 Alverna Dental Studio: reabilitare totală All-on-4 Straumann, compozit pe titan. Zâmbet reconstruit, încredere redescoperită — Dr. Andreea Pârvu.",
  },
  dana: {
    slug: "dana",
    path: "/cazuri/dana/",
    title: "Zâmbet reînnoit.\nArmonie regăsită.",
    subtitle: "Reabilitare dentară totală din zirconiu cu tratamente chirurgicale parodontale",
    category: "Reabilitare orală",
    caseNumber: "Caz #2",
    patientName: "Dana",
    heroImage: danaHeroBlackBg,
    heroObjectPosition: "center center",
    thumbnailSrc: danaHero.src,
    storyImages: [
      { image: danaBefore, label: "Before", alt: "Dana — situație inițială", objectPosition: "center center" },
      { image: danaHug, label: "În clinică", alt: "Dana alături de echipa medicală", objectPosition: "center 38%" },
      { image: danaHero, label: "After", alt: "Dana — rezultat final", objectPosition: "center 36%" },
    ],
    intro:
      "Acest caz complex de reabilitare orală completă a fost realizat în cadrul Alverna Dental Studio, printr-o abordare multidisciplinară care a combinat tratamente chirurgicale parodontale și restaurări protetice integral din zirconiu.",
    paragraphs: [
      "Acest caz complex de reabilitare orală completă a fost realizat în cadrul Alverna Dental Studio, printr-o abordare multidisciplinară care a combinat tratamente chirurgicale parodontale și restaurări protetice integral din zirconiu.",
      "Pacientul s-a prezentat cu multiple probleme estetice și funcționale, inclusiv uzură dentară, disproporții gingivale și restaurări vechi neadaptate. În urma unei evaluări clinice și radiologice complete, a fost stabilit un plan de tratament personalizat, orientat către restabilirea armoniei zâmbetului și a funcției masticatorii.",
      "Prima etapă a inclus gingivoplastii realizate la nivelul dinților frontali și laterali, realizate de Dr. Laura Grigoreanu, cu scopul de a remodela conturul gingival și de a crea un cadru estetic ideal pentru viitoarele restaurări. Intervențiile chirurgicale au permis obținerea unor proporții dento-gingivale echilibrate și a unui zâmbet mai armonios.",
      "După vindecarea țesuturilor, s-a trecut la etapa protetică, unde Dr. Andreea Parvu a conceput reabilitarea totală cu restaurări integral din zirconiu, material ales pentru rezistența sa excepțională, biocompatibilitate și aspectul natural pe care îl oferă. Fiecare lucrare a fost proiectată și personalizată pentru a respecta trăsăturile faciale, ocluzia și cerințele estetice ale pacientului.",
      "Un avantaj important al acestui caz a fost colaborarea directă dintre medic și tehnicianul dentar, toate restaurările fiind realizate în laboratorul propriu Alverna Dental Studio, sub directa îndrumare a lui Rares Harmath, technician dentar cu o vastă experiență internațională, ceea ce a permis un control riguros asupra fiecărei etape de lucru și obținerea unui rezultat predictibil.",
      "Rezultatul final este un zâmbet complet reabilitat, cu o estetică naturală, funcționalitate optimă și integrare armonioasă a restaurărilor în contextul facial al pacientului. Acest caz evidențiază importanța unei abordări interdisciplinare, în care chirurgia parodontală și protetica modernă lucrează împreună pentru a oferi rezultate durabile și personalizate.",
    ],
    closingQuote:
      "Rezultatul final este un zâmbet complet reabilitat, cu o estetică naturală, funcționalitate optimă și integrare armonioasă a restaurărilor în contextul facial al pacientului.",
    beforeAfterImages: [
      { image: danaBefore, label: "Before", alt: "Dana — înainte de tratament", objectPosition: "center center" },
      { image: danaHero, label: "After", alt: "Dana — după tratament", objectPosition: "center 36%" },
    ],
    treatmentSteps: [
      {
        label: "Evaluare & plan",
        detail:
          "Evaluare clinică și radiologică completă, cu plan de tratament personalizat pentru restabilirea armoniei zâmbetului și a funcției masticatorii.",
      },
      {
        label: "Gingivoplastii",
        detail:
          "Intervenții chirurgicale parodontale la dinții frontali și laterali, realizate de Dr. Laura Grigoreanu, pentru proporții dento-gingivale echilibrate.",
      },
      {
        label: "Reabilitare zirconiu",
        detail:
          "Restaurări integrale din zirconiu, concepute de Dr. Andreea Parvu, personalizate pentru trăsăturile faciale, ocluzie și cerințele estetice.",
      },
      {
        label: "Laborator propriu",
        detail:
          "Lucrări realizate în laboratorul Alverna Dental Studio, sub îndrumarea lui Rares Harmath, pentru control riguros și rezultat predictibil.",
      },
    ],
    quickFacts: [
      { label: "Tip caz", value: "Reabilitare orală totală" },
      { label: "Material", value: "Zirconiu integral" },
      { label: "Chirurgie", value: "Gingivoplastii parodontale" },
      { label: "Laborator", value: "Alverna Dental Studio" },
    ],
    doctor: DEFAULT_CASE_DOCTOR,
    seoDescription:
      "Reabilitare orală totală prin gingivoplastii și restaurări integral din zirconiu, realizată în cadrul Alverna Dental Studio, cu sprijinul laboratorului dentar propriu, pentru un rezultat estetic și funcțional de înaltă precizie.",
  },
  "estetica-dentara": {
    slug: "estetica-dentara",
    path: "/cazuri/estetica-dentara/",
    title: "Estetică rafinată.\nZâmbet echilibrat.",
    subtitle: "Tratamente estetice dentare pentru armonie, culoare și proporții naturale",
    category: "Estetică dentară",
    caseNumber: "Caz #3",
    heroImage: cazA7408137,
    heroObjectPosition: "center center",
    thumbnailSrc: cazA7408137.src,
    storyImages: storyGalleryFromHero(cazA7408137, "Caz estetică dentară"),
    intro:
      "Acest caz de estetică dentară a fost planificat și realizat în Alverna Dental Studio, cu accent pe proporții naturale, culoare echilibrată și integrare armonioasă în fizionomia pacientului.",
    paragraphs: [
      "Acest caz de estetică dentară a fost planificat și realizat în Alverna Dental Studio, cu accent pe proporții naturale, culoare echilibrată și integrare armonioasă în fizionomia pacientului.",
      "Pacientul s-a prezentat cu imperfecțiuni estetice la nivelul dinților frontali, inclusiv disproporții de formă, nuanțe inegale și detalii care afectau armonia zâmbetului. În urma evaluării clinice și a analizei fotografice, a fost stabilit un plan orientat spre un rezultat natural, discret și durabil.",
      "Tratamentul a inclus prepararea minim invazivă, selecția atentă a nuanțelor și realizarea restaurărilor cu materiale estetice de înaltă calitate. Fiecare detaliu a fost adaptat trăsăturilor faciale și conturului buzelor, pentru un zâmbet coerent și plăcut vizual.",
      "Etapele protetice au fost coordonate în laboratorul propriu Alverna Dental Studio, ceea ce a permis control riguros asupra formei, texturii și finisajului lucrărilor finale.",
      "Rezultatul obținut redă un zâmbet echilibrat, cu aspect natural și integrare estetică excelentă, respectând atât cerințele pacientului, cât și standardele clinice ale echipei noastre.",
    ],
    closingQuote:
      "Rezultatul final este un zâmbet echilibrat, cu estetică naturală și integrare armonioasă în contextul facial al pacientului.",
    beforeAfterImages: beforeAfterFromHero(cazA7408137, "Estetică dentară"),
    treatmentSteps: [
      { label: "Evaluare estetică", detail: "Analiză clinică și fotografică pentru stabilirea obiectivelor de formă, culoare și proporție." },
      { label: "Plan personalizat", detail: "Definirea etapelor de tratament și a materialelor potrivite pentru un rezultat natural." },
      { label: "Restaurări estetice", detail: "Realizarea lucrărilor cu atenție la detaliu, textură și nuanță, adaptate zâmbetului pacientului." },
      { label: "Control final", detail: "Verificare ocluzală și estetică, cu ajustări pentru confort și durabilitate pe termen lung." },
    ],
    quickFacts: [
      { label: "Tip caz", value: "Estetică dentară" },
      { label: "Obiectiv", value: "Armonie și naturalețe" },
      { label: "Abordare", value: "Minim invazivă" },
      { label: "Laborator", value: "Alverna Dental Studio" },
    ],
    doctor: DEFAULT_CASE_DOCTOR,
    seoDescription:
      "Caz #3 Alverna Dental Studio: tratamente estetice dentare pentru armonie, culoare și proporții naturale — documentare clinică completă.",
  },
  "smile-design": {
    slug: "smile-design",
    path: "/cazuri/smile-design/",
    title: "Smile design.\nArmonie regândită.",
    subtitle: "Design de zâmbet personalizat pentru proporții, simetrie și expresie naturală",
    category: "Smile design",
    caseNumber: "Caz #4",
    heroImage: cazA7407944,
    heroObjectPosition: "center center",
    thumbnailSrc: cazA7407944.src,
    storyImages: storyGalleryFromHero(cazA7407944, "Caz smile design"),
    intro:
      "Acest caz de smile design a fost abordat în Alverna Dental Studio printr-o planificare estetică detaliată, orientată către un zâmbet echilibrat, funcțional și natural.",
    paragraphs: [
      "Acest caz de smile design a fost abordat în Alverna Dental Studio printr-o planificare estetică detaliată, orientată către un zâmbet echilibrat, funcțional și natural.",
      "Pacientul a solicitat îmbunătățirea aspectului zâmbetului, cu focus pe simetrie, proporții dento-gingivale și expresie facială. Evaluarea inițială a inclus analiza profilului, a liniei zâmbetului și a raportului dintre dinți și gingie.",
      "Planul de tratament a fost construit etapizat, combinând intervenții estetice și protetice pentru a obține un rezultat predictibil. Proporțiile au fost validate înainte de etapa finală, pentru a asigura coerența vizuală a zâmbetului.",
      "Restaurările finale au fost realizate cu materiale premium, personalizate în laboratorul propriu, sub coordonarea directă a echipei medicale și tehnice.",
      "Rezultatul este un zâmbet reconstruit armonios, cu integrare naturală în trăsăturile pacientului și îmbunătățire clară a încrederii în apariție.",
    ],
    closingQuote:
      "Smile design-ul a transformat nu doar aspectul dinților, ci întreaga expresie a zâmbetului — natural, echilibrat și autentic.",
    beforeAfterImages: beforeAfterFromHero(cazA7407944, "Smile design"),
    treatmentSteps: [
      { label: "Analiză facială", detail: "Evaluare a proporțiilor, simetriei și liniei zâmbetului în contextul trăsăturilor faciale." },
      { label: "Design digital", detail: "Planificare estetică a formei, dimensiunii și poziției dinților pentru un rezultat predictibil." },
      { label: "Etape clinice", detail: "Intervenții coordonate pentru preparare, gingie și restaurări, cu verificări intermediare." },
      { label: "Finalizare", detail: "Lucrări protetice personalizate, ajustate pentru funcție, confort și estetică de lungă durată." },
    ],
    quickFacts: [
      { label: "Tip caz", value: "Smile design" },
      { label: "Focus", value: "Simetrie și proporții" },
      { label: "Planificare", value: "Personalizată" },
      { label: "Laborator", value: "Alverna Dental Studio" },
    ],
    doctor: DEFAULT_CASE_DOCTOR,
    seoDescription:
      "Caz #4 Alverna Dental Studio: smile design personalizat pentru proporții, simetrie și expresie naturală — documentare clinică completă.",
  },
  "reabilitare-protetica": {
    slug: "reabilitare-protetica",
    path: "/cazuri/reabilitare-protetica/",
    title: "Funcție restabilită.\nEstetică integrată.",
    subtitle: "Reabilitare protetică complexă pentru confort masticator și aspect natural",
    category: "Protetică dentară",
    caseNumber: "Caz #5",
    heroImage: cazA7407760,
    heroObjectPosition: "center center",
    thumbnailSrc: cazA7407760.src,
    storyImages: storyGalleryFromHero(cazA7407760, "Caz reabilitare protetică"),
    intro:
      "Acest caz de reabilitare protetică a fost realizat în Alverna Dental Studio, cu obiectivul de a restabili funcția masticatorie și estetica zâmbetului într-o abordare coordonată și predictibilă.",
    paragraphs: [
      "Acest caz de reabilitare protetică a fost realizat în Alverna Dental Studio, cu obiectivul de a restabili funcția masticatorie și estetica zâmbetului într-o abordare coordonată și predictibilă.",
      "Pacientul s-a prezentat cu pierderi dentare și restaurări vechi care compromiteau atât estetica, cât și confortul la masticație. Evaluarea clinică și radiologică a permis stabilirea unui plan etapizat, orientat spre stabilitate și durabilitate.",
      "Tratamentul a inclus pregătirea structurilor dentare, selecția materialelor potrivite și realizarea lucrărilor protetice cu atenție la ocluzie și integrare gingivală.",
      "Colaborarea directă între medic și tehnicianul dentar, în laboratorul propriu, a asigurat control constant asupra fiecărei etape și un rezultat final coerent.",
      "La finalul tratamentului, pacientul a obținut un zâmbet funcțional, confortabil și estetic, cu îmbunătățire clară a calității vieții de zi cu zi.",
    ],
    closingQuote:
      "Rezultatul final combină funcție, confort și estetică — un zâmbet reconstruit cu grijă, pas cu pas.",
    beforeAfterImages: beforeAfterFromHero(cazA7407760, "Reabilitare protetică"),
    treatmentSteps: [
      { label: "Diagnostic", detail: "Evaluare completă a situației clinice, cu stabilirea priorităților funcționale și estetice." },
      { label: "Plan protetic", detail: "Definirea etapelor de tratament și a soluțiilor materiale pentru durabilitate." },
      { label: "Lucrări intermediare", detail: "Etape clinice progresive, cu verificări ale ocluziei și confortului pacientului." },
      { label: "Proteză finală", detail: "Restaurări finale personalizate, integrate armonios în zâmbet și fizionomie." },
    ],
    quickFacts: [
      { label: "Tip caz", value: "Reabilitare protetică" },
      { label: "Obiectiv", value: "Funcție și estetică" },
      { label: "Abordare", value: "Etapizată, predictibilă" },
      { label: "Laborator", value: "Alverna Dental Studio" },
    ],
    doctor: DEFAULT_CASE_DOCTOR,
    seoDescription:
      "Caz #5 Alverna Dental Studio: reabilitare protetică complexă pentru confort masticator și aspect natural — documentare clinică completă.",
  },
  "reabilitare-complexa": {
    slug: "reabilitare-complexa",
    path: "/cazuri/reabilitare-complexa/",
    title: "Transformare completă.\nÎncredere regăsită.",
    subtitle: "Reabilitare orală complexă cu abordare multidisciplinară",
    category: "Reabilitare complexă",
    caseNumber: "Caz #6",
    heroImage: cazA7408160,
    heroObjectPosition: "center center",
    thumbnailSrc: cazA7408160.src,
    storyImages: storyGalleryFromHero(cazA7408160, "Caz reabilitare complexă"),
    intro:
      "Acest caz complex de reabilitare orală a fost coordonat în Alverna Dental Studio, printr-o abordare interdisciplinară care a integrat tratamente estetice, protetice și funcționale.",
    paragraphs: [
      "Acest caz complex de reabilitare orală a fost coordonat în Alverna Dental Studio, printr-o abordare interdisciplinară care a integrat tratamente estetice, protetice și funcționale.",
      "Pacientul s-a prezentat cu multiple compromitere dentară, afectând atât aspectul zâmbetului, cât și funcția zilnică. După evaluarea completă, echipa medicală a construit un plan personalizat, cu etape clare și obiective măsurabile.",
      "Tratamentul a inclus intervenții clinice coordonate, cu atenție la proporții, ocluzie și confortul pacientului pe parcursul întregului proces.",
      "Lucrările finale au fost realizate în laboratorul propriu, cu personalizare atentă pentru fiecare detaliu estetic și funcțional.",
      "Rezultatul documentat reflectă o transformare completă: zâmbet reabilitat, funcție îmbunătățită și o experiență clinică orientată spre siguranță și predictibilitate.",
    ],
    closingQuote:
      "Un caz complex transformat în rezultat clar, stabil și natural — prin planificare riguroasă și execuție atentă.",
    beforeAfterImages: beforeAfterFromHero(cazA7408160, "Reabilitare complexă"),
    treatmentSteps: [
      { label: "Evaluare multidisciplinară", detail: "Analiză clinică completă și stabilirea obiectivelor funcționale și estetice." },
      { label: "Plan etapizat", detail: "Secvențiere clară a intervențiilor, cu verificări intermediare la fiecare etapă." },
      { label: "Tratamente coordonate", detail: "Intervenții estetice și protetice integrate într-un flux clinic unitar." },
      { label: "Rezultat final", detail: "Restaurări personalizate, verificate clinic pentru funcție, confort și estetică." },
    ],
    quickFacts: [
      { label: "Tip caz", value: "Reabilitare complexă" },
      { label: "Abordare", value: "Multidisciplinară" },
      { label: "Focus", value: "Funcție și estetică" },
      { label: "Laborator", value: "Alverna Dental Studio" },
    ],
    doctor: DEFAULT_CASE_DOCTOR,
    seoDescription:
      "Caz #6 Alverna Dental Studio: reabilitare orală complexă cu abordare multidisciplinară — documentare clinică completă.",
  },
};

/** Maps thumbnail image src → case slug for clickable images site-wide. */
export const IMAGE_TO_CASE_SLUG: Record<string, string> = Object.fromEntries(
  Object.values(CASE_STUDIES).map((c) => [c.thumbnailSrc, c.slug]),
);

export function getCaseHrefForImage(src: string): string | null {
  const slug = IMAGE_TO_CASE_SLUG[src];
  return slug ? CASE_STUDIES[slug].path : null;
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES[slug];
}
