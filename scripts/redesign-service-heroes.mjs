#!/usr/bin/env node
// One-off codemod: rebuilds the hero of every service page client
// into a single elegant image-background hero with the per-service photo.
// Run from project root: `node scripts/redesign-service-heroes.mjs`

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const SERVICES_DIR = path.join(ROOT, "src/components/services");

// slug-style key → photo path under /public/services/
const FILE_TO_IMAGE = {
  AugmentareaOsoasaPageClient: "/services/implant-model-1.png",
  ChirurgieDentaraPageClient: "/services/exam-male-2.png",
  CoroanaDentaraPageClient: "/services/lab-hands-model.png",
  DentistClujPageClient: "/services/dental-chair.png",
  EndodontiePageClient: "/services/computer-xray.png",
  EsteticaDentaraPageClient: "/services/whitening-1.png",
  FateteDentarePageClient: "/services/smile-mirror.png",
  GutieraContentiePageClient: "/services/braces-model.png",
  ImplantDentarPageClient: "/services/implant-model-2.png",
  OdontologiePageClient: "/services/exam-male.png",
  OrtodontiePageClient: "/services/braces-model.png",
  PedodontiePageClient: "/services/pediatric-baby.png",
  ProfilaxiePageClient: "/services/doctor-portrait.png",
  ProteticaPageClient: "/services/lab-hands-model.png",
  SparkServicePageClient: "/services/braces-model.png",
  UrgenteStomatologicePageClient: "/services/exam-male-2.png",
};

// --- Regex helpers --------------------------------------------------------

const STR = String.raw;

// Captures everything from the first hero <section ...> up to and including
// the </section> that closes the image hero. The block always contains the
// two consecutive sections in this exact order.
const HERO_REGEX = new RegExp(
  STR`<section className="mx-auto w-full max-w-\[1680px\] px-4 md:px-8 lg:px-12">\s*` +
    STR`<motion\.div \{\.\.\.reveal\} className="max-w-\[\d+px\]">\s*` +
    STR`<p className="text-\[12px\] font-medium uppercase tracking-\[0\.13em\] text-\[#5c5c5c\]">([\s\S]*?)<\/p>\s*` +
    STR`<h1 className="mt-5 max-w-\[980px\] text-\[48px\] font-extrabold leading-\[0\.9\] tracking-\[-0\.05em\] text-\[#0A0A0A\] md:text-\[78px\] lg:text-\[118px\]">\s*` +
    STR`([\s\S]*?)\s*` +
    STR`<\/h1>\s*` +
    STR`<p className="mt-7 max-w-\[\d+px\] text-\[16px\] leading-\[1\.75\] text-\[#373737\] md:text-\[17px\]">\s*` +
    STR`([\s\S]*?)\s*` +
    STR`<\/p>\s*` +
    STR`<div className="mt-9 flex flex-wrap gap-3">[\s\S]*?<\/div>\s*` +
    STR`<\/motion\.div>\s*` +
    STR`<\/section>\s*` +
    STR`<section className="mx-auto mt-7 w-full max-w-\[1680px\] px-4 md:px-8 lg:px-12">\s*` +
    STR`<motion\.div \{\.\.\.reveal\} className="relative overflow-hidden rounded-\[28px\]">\s*` +
    STR`<img src="/spark-hero\.png" alt="([^"]+)" className="[^"]+" \/>\s*` +
    STR`<div className="pointer-events-none absolute inset-0 bg-gradient-to-t [^"]+" \/>\s*` +
    STR`<p className="absolute left-5 top-5 rounded-full border border-white\/25 bg-black\/30 px-4 py-1\.5 text-\[11px\] font-medium uppercase tracking-\[0\.12em\] text-white">([^<]+)<\/p>\s*` +
    STR`<\/motion\.div>\s*` +
    STR`<\/section>`,
);

// Main top-padding pattern we want to neutralize so the hero starts under
// the sticky nav rather than below a large empty gap.
const MAIN_PADDING_REGEX = /<main className="bg-\[#ececec\] pb-24 pt-\d+ md:pt-\d+ lg:pt-\[\d+px\]">/;

// --- Hero template --------------------------------------------------------

function buildHero({ kicker, title, intro, alt, chip, image }) {
  return `<section className="relative w-full overflow-hidden bg-black">
        <div className="relative h-[78vh] min-h-[600px] max-h-[900px] w-full">
          <img
            src="${image}"
            alt="${alt}"
            className="absolute inset-0 h-full w-full object-cover saturate-[0.92] brightness-[0.72]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/55 to-black" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black to-transparent" />
          <div className="absolute left-4 top-5 z-10 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/50 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur md:left-8 md:top-7 lg:left-12 lg:top-9">
            <span className="inline-block h-[6px] w-[6px] rounded-full bg-[#9fc48f]" />
            ${chip}
          </div>
          <div className="relative z-10 mx-auto flex h-full w-full max-w-[1680px] flex-col justify-end px-4 pb-12 pt-24 md:px-8 md:pb-16 md:pt-28 lg:px-12 lg:pb-20 lg:pt-32">
            <motion.div {...reveal} className="max-w-[1180px]">
              <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#9fc48f]">${kicker}</p>
              <h1 className="mt-5 max-w-[980px] text-[44px] font-extrabold leading-[0.92] tracking-[-0.05em] text-white md:text-[76px] lg:text-[112px]">
                ${title}
              </h1>
              <p className="mt-6 max-w-[820px] text-[16px] leading-[1.75] text-white/80 md:text-[17px]">
                ${intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/#contact" className="inline-flex h-[46px] items-center rounded-full bg-white px-6 text-[14px] font-semibold text-[#0A0A0A] transition duration-300 hover:scale-[1.02]">
                  Solicită o evaluare
                </a>
                <a href="/tarife/" className="inline-flex h-[46px] items-center rounded-full border border-white/35 bg-white/5 px-6 text-[14px] font-semibold text-white backdrop-blur transition duration-300 hover:bg-white/10">
                  Vezi tarife
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>`;
}

// --- Main loop ------------------------------------------------------------

const targetFiles = Object.keys(FILE_TO_IMAGE);
let updated = 0;
let skipped = [];

for (const baseName of targetFiles) {
  const filePath = path.join(SERVICES_DIR, `${baseName}.tsx`);
  if (!fs.existsSync(filePath)) {
    console.warn(`! Skipping missing file: ${baseName}.tsx`);
    skipped.push(baseName);
    continue;
  }
  const original = fs.readFileSync(filePath, "utf8");

  const match = original.match(HERO_REGEX);
  if (!match) {
    console.warn(`! Hero pattern not matched in ${baseName}.tsx — skipping`);
    skipped.push(baseName);
    continue;
  }

  const [, kicker, title, intro, alt, chip] = match;
  const newHero = buildHero({
    kicker: kicker.trim(),
    title: title.trim(),
    intro: intro.trim(),
    alt: alt.trim(),
    chip: chip.trim(),
    image: FILE_TO_IMAGE[baseName],
  });

  let next = original.replace(HERO_REGEX, newHero);

  // Drop the empty top padding on <main> so the hero starts under the nav.
  next = next.replace(
    MAIN_PADDING_REGEX,
    `<main className="bg-[#0A0A0A] pb-24">`,
  );

  if (next === original) {
    console.warn(`! No-op for ${baseName}.tsx`);
    skipped.push(baseName);
    continue;
  }

  fs.writeFileSync(filePath, next, "utf8");
  console.log(`✓ ${baseName}.tsx`);
  updated++;
}

console.log(`\nDone. Updated ${updated}/${targetFiles.length} files.`);
if (skipped.length) console.log(`Skipped: ${skipped.join(", ")}`);
