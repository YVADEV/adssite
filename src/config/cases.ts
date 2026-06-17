import type { StaticImageData } from "next/image";
import cazA7408097 from "@/assets/cazuri/A7408097 2.png";
import caz1Before from "@/assets/cazuri/caz1-before.png";
import caz1Proteza from "@/assets/cazuri/caz1-proteza.png";
import caz1After from "@/assets/cazuri/caz1-after.png";
import danaHero from "@/assets/cazuri/dana-hero.png";
import danaHeroBlackBg from "@/assets/cazuri/dana-hero-black-bg.png";
import danaBefore from "@/assets/cazuri/dana-before.png";
import danaHug from "@/assets/cazuri/dana-hug.png";
import andreeaParvuImage from "@/assets/cazuri/Clipuri cazuri/Echipa/Andreea.png";

export type CaseDoctor = {
  name: string;
  role: string;
  image: StaticImageData;
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

export const CASE_STUDIES: Record<string, CaseStudy> = {
  implantologie: {
    slug: "implantologie",
    path: "/cazuri/implantologie/",
    title: "Zâmbet reconstruit.\nÎncredere redescoperită.",
    subtitle: "Reabilitare totală prin sistemul All-on-4 Straumann",
    category: "All-on-4 Straumann",
    caseNumber: "Caz #1",
    patientName: "Cecilia",
    heroImage: cazA7408097,
    thumbnailSrc: cazA7408097.src,
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
    doctor: {
      name: "Dr. Andreea Pârvu",
      role: "Stomatologie generală",
      image: andreeaParvuImage,
    },
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
    doctor: {
      name: "Dr. Andreea Pârvu",
      role: "Protetică dentară",
      image: andreeaParvuImage,
    },
    seoDescription:
      "Reabilitare orală totală prin gingivoplastii și restaurări integral din zirconiu, realizată în cadrul Alverna Dental Studio, cu sprijinul laboratorului dentar propriu, pentru un rezultat estetic și funcțional de înaltă precizie.",
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
