import type { StaticImageData } from "next/image";
import cazA7408097 from "@/assets/cazuri/A7408097 2.png";
import caz1Before from "@/assets/cazuri/caz1-before.png";
import caz1Proteza from "@/assets/cazuri/caz1-proteza.png";
import caz1After from "@/assets/cazuri/caz1-after.png";
import danaHero from "@/assets/cazuri/dana-hero.png";
import danaHeroCloseup from "@/assets/cazuri/dana-hero-closeup.png";
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
    subtitle: "Reabilitare estetică și funcțională personalizată",
    category: "Estetică dentară",
    caseNumber: "Caz #2",
    patientName: "Dana",
    heroImage: danaHeroCloseup,
    thumbnailSrc: danaHero.src,
    storyImages: [
      { image: danaBefore, label: "Before", alt: "Dana — situație inițială", objectPosition: "center center" },
      { image: danaHug, label: "În clinică", alt: "Dana alături de echipa medicală", objectPosition: "center 38%" },
      { image: danaHero, label: "After", alt: "Dana — rezultat final", objectPosition: "center 36%" },
    ],
    intro:
      "Pacienta noastră a ajuns la clinică cu nevoia de a-și recâștiga un zâmbet echilibrat, estetic și confortabil în viața de zi cu zi.",
    paragraphs: [
      "Dana a ajuns la noi cu aspecte estetice și funcționale care îi afectau încrederea în zâmbet. La evaluarea inițială am analizat atent structura dentară, gingiile și armonia facială, pentru a construi un plan clar și predictibil.",
      "Tratamentul a fost gândit etapizat, cu accent pe estetică naturală și confort pe termen lung. Echipa medicală a lucrat integrat pentru ca fiecare detaliu — de la formă și culoare, până la adaptare și funcție — să fie aliniat cu așteptările pacientei.",
      "Rezultatul final reflectă un zâmbet luminos, echilibrat și natural, integrat armonios în fizionomie. Dana a plecat din clinică cu mai multă încredere și cu bucuria unui rezultat documentat complet.",
    ],
    closingQuote:
      "Zâmbetul nu este doar estetică — este încredere. Iar bucuria Danei la finalul tratamentului confirmă că am atins obiectivul împreună.",
    beforeAfterImages: [
      { image: danaBefore, label: "Before", alt: "Dana — înainte de tratament", objectPosition: "center center" },
      { image: danaHero, label: "After", alt: "Dana — după tratament", objectPosition: "center 36%" },
    ],
    treatmentSteps: [
      { label: "Consult & plan", detail: "Evaluare clinică detaliată și stabilirea obiectivelor estetice și funcționale." },
      { label: "Tratament etapizat", detail: "Intervenții planificate cu atenție la confort, estetică și predictibilitate." },
      { label: "Finisaje estetice", detail: "Ajustări fine pentru un zâmbet natural, luminos și echilibrat." },
      { label: "Rezultat final", detail: "Zâmbet reînnoit, documentat și validat împreună cu pacienta." },
    ],
    quickFacts: [
      { label: "Tip caz", value: "Estetică dentară" },
      { label: "Abordare", value: "Personalizată, etapizată" },
      { label: "Echipă", value: "Medic + asistentă dedicată" },
      { label: "Rezultat", value: "Estetică naturală & confort" },
    ],
    doctor: {
      name: "Dr. Andreea Pârvu",
      role: "Stomatologie generală",
      image: andreeaParvuImage,
    },
    seoDescription:
      "Caz #2 Alverna Dental Studio: reabilitare estetică dentară pentru Dana. Zâmbet reînnoit, armonie regăsită — Dr. Andreea Pârvu.",
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
