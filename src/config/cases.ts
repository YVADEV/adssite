import type { StaticImageData } from "next/image";
import cazA7408097 from "@/assets/cazuri/A7408097 2.png";
import aureliaBefore from "@/assets/cazuri/aurelia-before.png";
import aureliaHero from "@/assets/cazuri/aurelia-hero.png";
import cazA7407944 from "@/assets/cazuri/A7407944 2.png";
import cazA7407760 from "@/assets/cazuri/A7407760 2.png";
import cazA7408160 from "@/assets/cazuri/A7408160-2 2.png";
import caz1Before from "@/assets/cazuri/caz1-before.png";
import caz1Proteza from "@/assets/cazuri/caz1-proteza.png";
import caz1After from "@/assets/cazuri/caz1-after.png";
import ceciliaHero from "@/assets/cazuri/cecilia-hero.jpg";
import danaHero from "@/assets/cazuri/dana-hero.png";
import danaBefore from "@/assets/cazuri/dana-before.png";
import danaHug from "@/assets/cazuri/dana-hug.png";
import andreeaParvuImage from "@/assets/cazuri/Banner/Andreea de folosit 2.png";
import sergiuHero from "@/assets/cazuri/sergiu-witberg/hero.png";
import sergiuBefore1 from "@/assets/cazuri/sergiu-witberg/before-1.png";
import sergiuBefore2 from "@/assets/cazuri/sergiu-witberg/before-2.png";
import sergiuWithDoctor from "@/assets/cazuri/sergiu-witberg/with-doctor.png";
import sergiuAfter1 from "@/assets/cazuri/sergiu-witberg/after-1.png";
import sergiuAfter2 from "@/assets/cazuri/sergiu-witberg/after-2.png";
import simonaHero from "@/assets/cazuri/simona/hero.png";
import simonaBefore1 from "@/assets/cazuri/simona/before-1.png";
import simonaBefore2 from "@/assets/cazuri/simona/before-2.png";
import simonaAfter1 from "@/assets/cazuri/simona/after-1.png";
import simonaAfter2 from "@/assets/cazuri/simona/after-2.png";
import raduHero from "@/assets/cazuri/radu/hero.png";
import raduAfter1 from "@/assets/cazuri/radu/after-1.png";
import raduAfter2 from "@/assets/cazuri/radu/after-2.png";
import carmenHero from "@/assets/cazuri/carmen/hero.png";
import carmenBefore1 from "@/assets/cazuri/carmen/before-1.png";
import carmenBefore2 from "@/assets/cazuri/carmen/before-2.png";
import carmenAfter1 from "@/assets/cazuri/carmen/after-1.png";
import carmenAfter2 from "@/assets/cazuri/carmen/after-2.png";

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
    { image, label: "Înainte", alt: `${name} — situație inițială`, objectPosition: "center top" },
    { image, label: "În clinică", alt: `${name} — documentare în clinică`, objectPosition: "center center" },
    { image, label: "După", alt: `${name} — rezultat final`, objectPosition: "center 36%" },
  ];
}

function beforeAfterFromHero(image: StaticImageData, name: string): CaseStoryImage[] {
  return [
    { image, label: "Înainte", alt: `${name} — înainte de tratament`, objectPosition: "center top" },
    { image, label: "După", alt: `${name} — după tratament`, objectPosition: "center 36%" },
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
      { image: caz1Before, label: "Înainte", alt: "Situație inițială — înainte de tratament", objectPosition: "center center" },
      { image: caz1Proteza, label: "Proteză", alt: "Lucrare protetică All-on-4 Straumann", objectPosition: "center center" },
      { image: caz1After, label: "După", alt: "Rezultat final — după tratament", objectPosition: "center 36%" },
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
      { image: caz1Before, label: "Înainte", alt: "Cecilia — înainte de tratament", objectPosition: "center center" },
      { image: caz1After, label: "După", alt: "Cecilia — după tratament", objectPosition: "center 36%" },
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
    heroImage: danaHero,
    heroObjectPosition: "center center",
    thumbnailSrc: danaHero.src,
    storyImages: [
      { image: danaBefore, label: "Înainte", alt: "Dana — situație inițială", objectPosition: "center center" },
      { image: danaHug, label: "În clinică", alt: "Dana alături de echipa medicală", objectPosition: "center 38%" },
      { image: danaHero, label: "După", alt: "Dana — rezultat final", objectPosition: "center 36%" },
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
      { image: danaBefore, label: "Înainte", alt: "Dana — înainte de tratament", objectPosition: "center center" },
      { image: danaHero, label: "După", alt: "Dana — după tratament", objectPosition: "center 36%" },
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
    patientName: "Aurelia",
    heroImage: aureliaHero,
    heroObjectPosition: "center center",
    thumbnailSrc: aureliaHero.src,
    storyImages: [
      { image: aureliaBefore, label: "Înainte", alt: "Aurelia — situație inițială", objectPosition: "center center" },
      { image: aureliaHero, label: "După", alt: "Aurelia — rezultat final", objectPosition: "center 36%" },
    ],
    intro:
      "Acest caz de estetică dentară a fost planificat și realizat în Alverna Dental Studio, cu accent pe proporții naturale, culoare echilibrată și integrare armonioasă în fizionomia pacientului.",
    paragraphs: [
      "Acest caz de estetică dentară a fost planificat și realizat în Alverna Dental Studio, cu accent pe proporții naturale, culoare echilibrată și integrare armonioasă în fizionomia pacientului.",
      "Aurelia s-a prezentat cu imperfecțiuni estetice la nivelul dinților frontali, inclusiv disproporții de formă, nuanțe inegale și detalii care afectau armonia zâmbetului. În urma evaluării clinice și a analizei fotografice, a fost stabilit un plan orientat spre un rezultat natural, discret și durabil.",
      "Tratamentul a inclus prepararea minim invazivă, selecția atentă a nuanțelor și realizarea restaurărilor cu materiale estetice de înaltă calitate. Fiecare detaliu a fost adaptat trăsăturilor faciale și conturului buzelor, pentru un zâmbet coerent și plăcut vizual.",
      "Etapele protetice au fost coordonate în laboratorul propriu Alverna Dental Studio, ceea ce a permis control riguros asupra formei, texturii și finisajului lucrărilor finale.",
      "Rezultatul obținut redă un zâmbet echilibrat, cu aspect natural și integrare estetică excelentă, respectând atât cerințele pacientului, cât și standardele clinice ale echipei noastre.",
    ],
    closingQuote:
      "Rezultatul final este un zâmbet echilibrat, cu estetică naturală și integrare armonioasă în contextul facial al pacientului.",
    beforeAfterImages: [
      { image: aureliaBefore, label: "Înainte", alt: "Aurelia — înainte de tratament", objectPosition: "center center" },
      { image: aureliaHero, label: "După", alt: "Aurelia — după tratament", objectPosition: "center 36%" },
    ],
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
  "sergiu-witberg": {
    slug: "sergiu-witberg",
    path: "/cazuri/sergiu-witberg/",
    title: "Armonie, naturalețe\nși un zâmbet care îl reprezintă",
    subtitle: "Reabilitare estetică prin fațete dentare",
    category: "Estetică dentară · Fațete dentare",
    caseNumber: "Caz #7",
    patientName: "Sergiu Witberg",
    heroImage: sergiuHero,
    heroObjectPosition: "center 32%",
    thumbnailSrc: sergiuHero.src,
    storyImages: [
      { image: sergiuBefore1, label: "Înainte", alt: "Sergiu Witberg — situație inițială", objectPosition: "center center" },
      { image: sergiuWithDoctor, label: "În clinică", alt: "Sergiu Witberg alături de echipa Alverna", objectPosition: "center center" },
      { image: sergiuAfter1, label: "După", alt: "Sergiu Witberg — rezultat final", objectPosition: "center center" },
    ],
    intro:
      "Sergiu și-a dorit un zâmbet mai armonios, păstrând în același timp un aspect natural și potrivit fizionomiei sale.",
    paragraphs: [
      "Sergiu și-a dorit un zâmbet mai armonios, păstrând în același timp un aspect natural și potrivit fizionomiei sale.",
      "În urma evaluării clinice și a unei planificări personalizate, Dr. Andreea Parvu a realizat o reabilitare estetică prin fațete dentare. Forma, proporțiile și nuanța fiecărui dinte au fost alese cu atenție pentru a corecta imperfecțiunile existente și pentru a obține o integrare firească în ansamblul facial.",
      "Rezultatul este un zâmbet luminos și echilibrat, cu o estetică naturală, adaptată personalității pacientului. Pentru noi, un tratament estetic reușit nu înseamnă doar dinți frumoși, ci un zâmbet în care pacientul se simte cu adevărat el însuși.",
      "Tratament realizat de Dr. Andreea Parvu, în cadrul Alverna Dental Studio.",
    ],
    closingQuote:
      "Pentru noi, un tratament estetic reușit nu înseamnă doar dinți frumoși, ci un zâmbet în care pacientul se simte cu adevărat el însuși.",
    beforeAfterImages: [
      { image: sergiuBefore2, label: "Înainte", alt: "Sergiu Witberg — înainte de tratament", objectPosition: "center center" },
      { image: sergiuAfter2, label: "După", alt: "Sergiu Witberg — după tratament", objectPosition: "center center" },
    ],
    treatmentSteps: [
      { label: "Evaluare clinică", detail: "Analiză estetică și planificare personalizată, orientată spre un zâmbet armonios și natural." },
      { label: "Fațete dentare", detail: "Reabilitare estetică realizată de Dr. Andreea Parvu, cu selecție atentă a formei, proporțiilor și nuanței." },
      { label: "Integrare facială", detail: "Corectarea imperfecțiunilor existente și adaptarea lucrărilor la fizionomia pacientului." },
      { label: "Rezultat final", detail: "Zâmbet luminos, echilibrat și autentic — estetică naturală adaptată personalității pacientului." },
    ],
    quickFacts: [
      { label: "Pacient", value: "Sergiu Witberg" },
      { label: "Tip caz", value: "Fațete dentare" },
      { label: "Medic", value: "Dr. Andreea Parvu" },
      { label: "Clinică", value: "Alverna Dental Studio" },
    ],
    doctor: {
      ...DEFAULT_CASE_DOCTOR,
      name: "Dr. Andreea Parvu",
    },
    seoDescription:
      "Caz #7 Alverna Dental Studio: reabilitare estetică prin fațete dentare pentru Sergiu Witberg — armonie, naturalețe și un zâmbet care îl reprezintă.",
  },
  simona: {
    slug: "simona",
    path: "/cazuri/simona/",
    title: "Zâmbet luminos.\nEstetică naturală.",
    subtitle: "Reabilitare estetică prin fațete dentare",
    category: "Estetică dentară · Fațete dentare",
    caseNumber: "Caz #8",
    patientName: "Simona",
    heroImage: simonaHero,
    heroObjectPosition: "center 42%",
    thumbnailSrc: simonaHero.src,
    storyImages: [
      { image: simonaBefore1, label: "Înainte", alt: "Simona — situație inițială", objectPosition: "center center" },
      { image: simonaAfter1, label: "În clinică", alt: "Simona — documentare clinică", objectPosition: "center center" },
      { image: simonaHero, label: "După", alt: "Simona — rezultat final", objectPosition: "center 42%" },
    ],
    intro:
      "Simona și-a dorit un zâmbet mai luminos și armonios, păstrând un aspect natural, potrivit trăsăturilor sale.",
    paragraphs: [
      "Simona și-a dorit un zâmbet mai luminos și armonios, păstrând un aspect natural, potrivit trăsăturilor sale.",
      "În urma evaluării clinice și a planificării personalizate, echipa Alverna Dental Studio a realizat o reabilitare estetică prin fațete dentare. Forma, proporțiile și nuanța fiecărui dinte au fost alese cu atenție pentru a corecta imperfecțiunile existente.",
      "Rezultatul este un zâmbet echilibrat, cu estetică naturală și integrare firească în ansamblul facial. Documentarea clinică before & after confirmă transformarea obținută.",
      "Tratament realizat în cadrul Alverna Dental Studio.",
    ],
    closingQuote:
      "Un zâmbet reușit nu înseamnă doar dinți frumoși, ci un rezultat în care pacientul se simte cu adevărat ea însăși.",
    beforeAfterImages: [
      { image: simonaBefore2, label: "Înainte", alt: "Simona — înainte de tratament", objectPosition: "center center" },
      { image: simonaAfter2, label: "După", alt: "Simona — după tratament", objectPosition: "center center" },
    ],
    treatmentSteps: [
      { label: "Evaluare clinică", detail: "Analiză estetică și planificare personalizată pentru un zâmbet armonios și natural." },
      { label: "Fațete dentare", detail: "Reabilitare estetică cu selecție atentă a formei, proporțiilor și nuanței fiecărui dinte." },
      { label: "Integrare facială", detail: "Corectarea imperfecțiunilor și adaptarea lucrărilor la fizionomia pacientei." },
      { label: "Rezultat final", detail: "Zâmbet luminos, echilibrat și autentic — documentat clinic before & after." },
    ],
    quickFacts: [
      { label: "Pacient", value: "Simona" },
      { label: "Tip caz", value: "Fațete dentare" },
      { label: "Obiectiv", value: "Estetică naturală" },
      { label: "Clinică", value: "Alverna Dental Studio" },
    ],
    doctor: DEFAULT_CASE_DOCTOR,
    seoDescription:
      "Caz #8 Alverna Dental Studio: reabilitare estetică prin fațete dentare pentru Simona — zâmbet luminos, estetică naturală.",
  },
  radu: {
    slug: "radu",
    path: "/cazuri/radu/",
    title: "Zâmbet redefinit.\nRezultat armonios.",
    subtitle: "Reabilitare estetică prin fațete dentare",
    category: "Estetică dentară · Fațete dentare",
    caseNumber: "Caz #9",
    patientName: "Radu",
    heroImage: raduAfter1,
    heroObjectPosition: "center center",
    thumbnailSrc: raduAfter1.src,
    storyImages: [
      { image: raduAfter2, label: "În clinică", alt: "Radu — documentare în clinică", objectPosition: "center center" },
      { image: raduAfter1, label: "Detaliu", alt: "Radu — detaliu clinic", objectPosition: "center center" },
      { image: raduHero, label: "După", alt: "Radu — rezultat final", objectPosition: "center 45%" },
    ],
    intro:
      "Radu și-a dorit un zâmbet mai armonios și luminos, cu un aspect natural care să se potrivească trăsăturilor sale.",
    paragraphs: [
      "Radu și-a dorit un zâmbet mai armonios și luminos, cu un aspect natural care să se potrivească trăsăturilor sale.",
      "În urma evaluării clinice și a planificării personalizate, echipa Alverna Dental Studio a realizat o reabilitare estetică prin fațete dentare. Forma, proporțiile și nuanța dinților au fost alese cu atenție pentru un rezultat echilibrat.",
      "Rezultatul este un zâmbet uniform, luminos și integrat natural în fizionomie — documentat clinic în mai multe unghiuri, inclusiv în cabinet.",
      "Tratament realizat în cadrul Alverna Dental Studio.",
    ],
    closingQuote:
      "Un zâmbet reușit trebuie să arate natural și să inspire încredere — exact ceea ce Radu a obținut la finalul tratamentului.",
    beforeAfterImages: [
      { image: raduAfter1, label: "Documentare clinică", alt: "Radu — documentare clinică", objectPosition: "center center" },
      { image: raduHero, label: "După", alt: "Radu — rezultat final", objectPosition: "center 45%" },
    ],
    treatmentSteps: [
      { label: "Evaluare clinică", detail: "Analiză estetică și planificare personalizată pentru un zâmbet armonios, adaptat trăsăturilor pacientului." },
      { label: "Fațete dentare", detail: "Reabilitare estetică cu selecție atentă a formei, proporțiilor și nuanței fiecărui dinte." },
      { label: "Integrare facială", detail: "Adaptarea lucrărilor la fizionomie, pentru un rezultat natural și echilibrat." },
      { label: "Rezultat final", detail: "Zâmbet luminos, uniform și autentic — documentat clinic la finalul tratamentului." },
    ],
    quickFacts: [
      { label: "Pacient", value: "Radu" },
      { label: "Tip caz", value: "Fațete dentare" },
      { label: "Obiectiv", value: "Zâmbet armonios" },
      { label: "Clinică", value: "Alverna Dental Studio" },
    ],
    doctor: DEFAULT_CASE_DOCTOR,
    seoDescription:
      "Caz #9 Alverna Dental Studio: reabilitare estetică prin fațete dentare pentru Radu — zâmbet redefinit, rezultat armonios.",
  },
  carmen: {
    slug: "carmen",
    path: "/cazuri/carmen/",
    title: "Zâmbet transformat.\nRezultat luminos.",
    subtitle: "Reabilitare estetică prin fațete dentare",
    category: "Estetică dentară · Fațete dentare",
    caseNumber: "Caz #10",
    patientName: "Carmen",
    heroImage: carmenAfter1,
    heroObjectPosition: "center center",
    thumbnailSrc: carmenAfter1.src,
    storyImages: [
      { image: carmenBefore1, label: "Înainte", alt: "Carmen — situație inițială", objectPosition: "center center" },
      { image: carmenAfter2, label: "În clinică", alt: "Carmen — documentare clinică", objectPosition: "center center" },
      { image: carmenHero, label: "După", alt: "Carmen — rezultat final", objectPosition: "center 42%" },
    ],
    intro:
      "Carmen și-a dorit un zâmbet mai luminos și uniform, păstrând un aspect natural, potrivit trăsăturilor sale.",
    paragraphs: [
      "Carmen și-a dorit un zâmbet mai luminos și uniform, păstrând un aspect natural, potrivit trăsăturilor sale.",
      "În urma evaluării clinice și a planificării personalizate, echipa Alverna Dental Studio a realizat o reabilitare estetică prin fațete dentare. Forma, proporțiile și nuanța dinților au fost alese cu atenție pentru a corecta discolorațiile și imperfecțiunile existente.",
      "Rezultatul este un zâmbet echilibrat, luminos și integrat natural în fizionomie — documentat clinic before & after.",
      "Tratament realizat în cadrul Alverna Dental Studio.",
    ],
    closingQuote:
      "Un zâmbet reușit trebuie să arate natural și să inspire încredere — exact ceea ce Carmen a obținut la finalul tratamentului.",
    beforeAfterImages: [
      { image: carmenBefore2, label: "Înainte", alt: "Carmen — înainte de tratament", objectPosition: "center center" },
      { image: carmenAfter1, label: "După", alt: "Carmen — după tratament", objectPosition: "center center" },
    ],
    treatmentSteps: [
      { label: "Evaluare clinică", detail: "Analiză estetică și planificare personalizată pentru corectarea discolorațiilor și obținerea unui zâmbet uniform." },
      { label: "Fațete dentare", detail: "Reabilitare estetică cu selecție atentă a formei, proporțiilor și nuanței fiecărui dinte." },
      { label: "Integrare facială", detail: "Adaptarea lucrărilor la fizionomie, pentru un rezultat natural și echilibrat." },
      { label: "Rezultat final", detail: "Zâmbet luminos, uniform și autentic — documentat clinic la finalul tratamentului." },
    ],
    quickFacts: [
      { label: "Pacient", value: "Carmen" },
      { label: "Tip caz", value: "Fațete dentare" },
      { label: "Obiectiv", value: "Zâmbet luminos" },
      { label: "Clinică", value: "Alverna Dental Studio" },
    ],
    doctor: DEFAULT_CASE_DOCTOR,
    seoDescription:
      "Caz #10 Alverna Dental Studio: reabilitare estetică prin fațete dentare pentru Carmen — zâmbet transformat, rezultat luminos.",
  },
};

/** Maps image src → case slug for clickable images site-wide. */
export const IMAGE_TO_CASE_SLUG: Record<string, string> = Object.fromEntries(
  Object.values(CASE_STUDIES).flatMap((c) => [
    [c.thumbnailSrc, c.slug],
    [c.heroImage.src, c.slug],
  ]).concat([[cazA7408097.src, "implantologie"], [raduAfter1.src, "radu"], [carmenAfter1.src, "carmen"]]),
);

export function getCaseHrefForImage(src: string): string | null {
  const slug = IMAGE_TO_CASE_SLUG[src];
  return slug ? CASE_STUDIES[slug].path : null;
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES[slug];
}
