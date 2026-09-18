"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import ServicesDropdown from "@/components/nav/ServicesDropdown";
import { MobileMenuNavServices } from "@/components/nav/MobileMenuNavServices";
import { MobileMenuOverlay } from "@/components/nav/MobileMenuOverlay";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteLogo from "@/components/nav/SiteLogo";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { useStickyHeaderScroll } from "@/hooks/useStickyHeaderScroll";
import { BeforeAfterCompare } from "@/components/cazuri/BeforeAfterCompare";
import { CaseImage } from "@/components/cazuri/CaseImage";
import { HeroIntroVideo } from "@/components/media/HeroIntroVideo";
import { LazyVideo } from "@/components/media/LazyVideo";
import { ContactFormCard } from "@/components/services/ServicePageParts";
import { CASE_STUDIES } from "@/config/cases";
import { EMERGENCY_HREF, FIXED_TEETH_HREF, FIXED_TEETH_NAV_LABEL, isFixedTeethNav } from "@/config/services";
import { EmergencyHeaderButton } from "@/components/nav/EmergencyHeaderButton";
import { CLINIC } from "@/lib/contact";
import vdScaun from "@/assets/VDscaun.png";
import alvernaLogo from "@/assets/alverna-logo.png";
import teamBannerImage from "@/assets/cazuri/Banner/Andreea de folosit 2.png";
import labDoctorBannerImage from "@/assets/cazuri/lab-doctor-banner.png";
import danaHero from "@/assets/cazuri/dana-hero.png";
import aureliaHero from "@/assets/cazuri/aurelia-hero.png";
import cazA7407760Smile from "@/assets/cazuri/A7407760-smile.png";
import shining3dScanner from "@/assets/shining-3d-scanner.jpg";
import cazA7408160 from "@/assets/cazuri/A7408160-2 2.png";

const caseGallery = [
  { src: danaHero.src, alt: "Caz Dana — reabilitare protetică integrală din zirconiu" },
  { src: aureliaHero.src, alt: "Caz Aurelia — estetică dentară și fațete" },
  { src: cazA7408160.src, alt: "Caz Elena — reabilitare complexă, rezultat final" },
];
const reviews = [
  {
    name: "Andreea Nisipeanu",
    meta: "3 recenzii",
    time: "acum o lună",
    text: "Recomand cu mare încredere Clinica Alverna Dental! De la prima vizită am fost întâmpinată cu multă căldură și profesionalism. Clinica este impecabil de curată și dotată cu aparatură foarte modernă. Profesionalismul, atenția la detalii și dedicarea echipei sunt la nivel înalt. Vă mulțumesc!",
  },
  {
    name: "Carmen Ilea",
    meta: "4 recenzii",
    time: "acum 2 luni",
    text: "Am fost impresionată de profesionalismul d-nei dr Andreea Pârvu. Este o persoană foarte atentă la detalii, execută cu mare finețe toate tipurile de lucrări: obturații, igienizare. Mulțumesc! Studioul este foarte curat și dotat cu tehnologie de ultimă generație. Am să revin cu plăcere.",
  },
  {
    name: "Denisa Tănase",
    meta: "2 recenzii · O fotografie",
    time: "acum 3 luni",
    text: "Am avut parte de o experiență bună și ușoară. Am fost tratată cu respect și prietenie, mi s-a explicat în detaliu fiecare pas și mi s-a răspuns la fiecare întrebare. Îi mulțumesc pe această cale doamnei doctor Pârvu pentru atenție și profesionalism, la fel și doamnei asistente.",
  },
];

export const pricingData = [
  {
    category: "Estetică dentară",
    items: [
      { name: "Albire profesională endodontică (internă / dinte)", price: "300 RON" },
      { name: "Albire profesională în cabinet Opalescence H2O2 40%", price: "750 RON" },
      { name: "Albire profesională în cabinet Bleach’n Smile H2O2 35%", price: "960 RON" },
      { name: "Albire profesională cu lampa Philips Zoom H2O2 6%", price: "1700 RON" },
      { name: "Aplicare bijuterii dentare pe suprafața smalțului", price: "220 RON" },
      { name: "Albire laser", price: "1200 RON" },
    ],
  },
  {
    category: "Estetică facială",
    items: [
      { name: "Injectări cu Acid Hyaluronic Juvederm Ultra 3", price: "1450 RON" },
      { name: "Injectări cu Acid Hyaluronic Juvederm Ultra Smile", price: "1300 RON" },
      { name: "Botox (3 zone)", price: "1500 RON" },
      { name: "Gummi line botox (zâmbet gingival)", price: "750 RON" },
    ],
  },
  {
    category: "Consultații primare și de specialitate",
    items: [
      { name: "Consultație stomatologică generală, realizare fișă completă, întocmire plan tratament", price: "150 RON" },
      { name: "Consultație și diagnostic parodontologic, status parodontal", price: "250 RON" },
      { name: "Consultație și diagnostic implantologie, interpretare CT", price: "180 RON" },
      { name: "Realizarea modelului documentar", price: "120 RON" },
      { name: "Consultație și diagnostic ortodontic", price: "250 RON" },
      { name: "Consultație pediatrică", price: "200 RON" },
    ],
  },
  {
    category: "Profilaxie și prevenție",
    items: [
      { name: "Periaj profesional", price: "80 RON" },
      { name: "Detartraj ultrasonic supragingival", price: "200 RON" },
      { name: "Fluorizare / tratament desensibilizare / dinte", price: "30 RON" },
      { name: "Airflow", price: "200 RON" },
      { name: "Airflow cu particule de glicină", price: "250 RON" },
      { name: "Ședință completă igienizare (Detartraj + Periaj + Airflow)", price: "380 RON" },
      { name: "Igienizare pe implante cu îndepărtarea lucrării", price: "500 RON" },
      { name: "Igienizare pedodontică", price: "250 RON" },
      { name: "Sigilare șanțuri și fosete dinți temporari / dinte", price: "180 RON" },
      { name: "Sigilare șanțuri și fosete dinți permanenți / dinte", price: "250 RON" },
    ],
  },
  {
    category: "Tratamente odontale / obturații",
    items: [
      { name: "Obturație ionomer", price: "140 - 170 RON" },
      { name: "Coafaj cu Hidroxid de Ca", price: "90 RON" },
      { name: "Obturație EQUIA", price: "260 RON" },
      { name: "Coafaj cu MTA", price: "140 RON" },
      { name: "Aplicare sistem de izolare – Diga", price: "50 RON" },
      { name: "Obturație fizionomică compozit mică", price: "380 RON" },
      { name: "Obturație fizionomică compozit medie", price: "430 RON" },
      { name: "Obturație fizionomică compozit mare", price: "470 RON" },
      { name: "Obturație dinți frontali", price: "490 RON" },
      { name: "Obturație Biodentine", price: "360 RON" },
      { name: "Reconstrucție cu compozit fotopolimerizabil", price: "250 RON" },
      { name: "Refacere fațetă vestibulară – compozit foto", price: "550 RON" },
      { name: "Obturație colet", price: "250 RON" },
      { name: "Obturație ZOE", price: "120 RON" },
    ],
  },
  {
    category: "Tratamente laser",
    items: [
      { name: "Biomodulare / ședință", price: "250 RON" },
      { name: "Tratament de desensibilizare", price: "200 RON" },
      { name: "Igienizare laser", price: "1250 RON" },
      { name: "DSR asistat laser / dinte / implant", price: "250 RON" },
      { name: "DSR asistat laser / hemiarcadă", price: "900 RON" },
      { name: "Frenectomie laser", price: "750 RON" },
      { name: "Decapușonare / dinte", price: "250 RON" },
      { name: "Gingivectomie / dinte", price: "250 RON" },
      { name: "Gingivoplastie / dinte", price: "275 RON" },
      { name: "Tratament laser periimplantită", price: "500 RON" },
      { name: "Stimularea vindecării gingivale / ședință", price: "200 RON" },
      { name: "Excizii formațiuni endoorale", price: "600 RON" },
      { name: "Tratament inflamația sinusului maxilar", price: "300 RON" },
      { name: "Tratament ATM", price: "300 RON" },
      { name: "Tratamentul durerilor postextracționale", price: "300 RON" },
    ],
  },
  {
    category: "Pedodonție",
    items: [
      { name: "Pachet anual pedodonție", price: "990 RON" },
      { name: "Ședință de acomodare", price: "150 RON" },
      { name: "Sigilare șanțuri și fosete dinți temporari / dinte", price: "180 RON" },
      { name: "Fluorizare ambele arcade", price: "200 RON" },
      { name: "Obturație glassionomer", price: "200 RON" },
      { name: "Obturație compozit", price: "200 RON" },
      { name: "Aplicare pansament devitalizant", price: "180 RON" },
      { name: "Aplicare pansament calmant", price: "180 RON" },
      { name: "Aplicare pansament antiseptic", price: "180 RON" },
      { name: "Pulpectomie vitală dinți temporari", price: "200 RON" },
      { name: "Pulpectomie devitală dinți temporari", price: "250 RON" },
      { name: "Pulpotomie dinte temporar", price: "250 RON" },
      { name: "Coroniță pedodontică", price: "375 RON" },
      { name: "Tratament endodontic dinte temporar", price: "350 RON" },
      { name: "Obturație canal dinți temporari", price: "200 RON" },
      { name: "Extracție dinte temporar monoradicular", price: "280 RON" },
      { name: "Extracție dinte temporar pluriradicular", price: "300 RON" },
    ],
  },
  {
    category: "Endodonție",
    items: [
      { name: "Tratament canal monoradicular", price: "350 RON" },
      { name: "Obturație endodontică monoradicular", price: "250 RON" },
      { name: "Tratament canal premolar", price: "430 RON" },
      { name: "Obturație endodontică premolar", price: "300 RON" },
      { name: "Tratament canal pluriradicular", price: "470 RON" },
      { name: "Tratament canal molar de minte", price: "590 RON" },
      { name: "Reparare perforații radiculare cu MTA / bioceramică", price: "180 RON" },
      { name: "Retratament monoradicular", price: "410 RON" },
      { name: "Retratament pluriradicular", price: "650 RON" },
      { name: "Retratament molar de minte", price: "750 RON" },
      { name: "Pivot fibră de sticlă", price: "300 RON" },
    ],
  },
  {
    category: "Protetică dentară",
    items: [
      { name: "Coroană provizorie acrilică", price: "100 RON" },
      { name: "Coroană PMMA CAD-CAM", price: "350 RON" },
      { name: "Coroană metalică", price: "300 RON" },
      { name: "Coroană metalo-ceramică", price: "1200 RON" },
      { name: "Coroană integral ceramică Emax", price: "1800 RON" },
      { name: "Coroană zirconiu CAD-CAM", price: "1700 - 2500 RON" },
      { name: "Inlay / Onlay compozit", price: "800 RON" },
      { name: "Incrustație ceramică", price: "1400 RON" },
      { name: "Gutieră bruxism", price: "400 RON" },
      { name: "Proteză acrilică totală / arcadă", price: "2500 - 3100 RON" },
      { name: "Proteză elastică", price: "3200 - 3800 RON" },
      { name: "Structură Ibar compozit", price: "15000 RON" },
      { name: "Structură Ibar zirconiu", price: "25000 RON" },
      { name: "Proteză scheletată", price: "de la 3900 RON" },
      { name: "Coroană metalo-ceramică pe implant", price: "1750 RON" },
      { name: "Coroană zirconiu pe implant", price: "2250 RON" },
      { name: "Coroană metalo-ceramică pe implant înșurubată", price: "400 EURO" },
    ],
  },
  {
    category: "Ortodonție",
    items: [
      { name: "Aparat monomaxilar mobilizabil", price: "1200 RON" },
      { name: "Aparat bimaxilar funcțional", price: "1200 RON" },
      { name: "Aparat fix metalic / arcadă", price: "3000 RON" },
      { name: "Aparat fix metalic / ambele arcade", price: "6000 RON" },
      { name: "Aparat fix ceramic / arcadă", price: "4000 RON" },
      { name: "Aparat fix ceramic / ambele arcade", price: "8000 RON" },
      { name: "Aparat fix safir / arcadă", price: "4500 RON" },
      { name: "Aparat fix safir / ambele arcade", price: "9000 RON" },
      { name: "Disjunctor", price: "1500 RON" },
      { name: "Disjunctor pe implant", price: "5500 RON" },
      { name: "Activare aparat fix metalic / arcadă", price: "150 RON" },
      { name: "Activare aparat fix fizionomic / arcadă", price: "200 RON" },
      { name: "Contenție fixă", price: "300 RON" },
      { name: "Contenție gutieră / placă Howley", price: "400 RON" },
    ],
  },
  {
    category: "Alignere",
    items: [
      { name: "Spark 10 / arcadă", price: "6000 RON" },
      { name: "Spark 10 / ambele arcade", price: "10000 RON" },
      { name: "Spark 20 / arcadă", price: "11500 RON" },
      { name: "Spark 20 / ambele arcade", price: "15000 RON" },
      { name: "Spark Advanced / ambele arcade", price: "20000 RON" },
      { name: "Plan tratament 3D Spark", price: "1300 RON" },
      { name: "Angel Aligner", price: "tarif după evaluare" },
    ],
  },
  {
    category: "Implantologie",
    items: [
      { name: "Implant INNO", price: "400 EURO" },
      { name: "Implant MegaGen AnyRidge", price: "500 EURO" },
      { name: "Implant Neodent Acqua", price: "500 EURO" },
      { name: "MIS Seven", price: "500 EURO" },
      { name: "MIS C1", price: "600 EURO" },
      { name: "Implant Straumann BLT", price: "700 EURO" },
      { name: "Implant Straumann BLX", price: "900 EURO" },
      { name: "Sinus lift extern fără biomateriale", price: "3000 RON" },
      { name: "Sinus lift intern fără biomateriale", price: "1500 RON" },
      { name: "Ridge split fără biomateriale", price: "1300 RON" },
      { name: "Adiție os fără biomateriale", price: "1500 RON" },
      { name: "Recoltare os autolog", price: "1100 RON" },
      { name: "PRF", price: "660 RON" },
    ],
  },
  {
    category: "All on 4 / All on 6",
    items: [
      { name: "All on 4 INNO", price: "2000 EURO" },
      { name: "All on 4 Neodent", price: "3000 EURO" },
      { name: "All on 4 Straumann", price: "5000 EURO" },
      { name: "All on 6 INNO", price: "3500 EURO" },
      { name: "All on 6 Neodent", price: "4000 EURO" },
      { name: "All on 6 Straumann", price: "6000 EURO" },
    ],
  },
  {
    category: "Chirurgie dento-alveolară",
    items: [
      { name: "Extracție dinte temporar", price: "120 RON" },
      { name: "Extracție dinte monoradicular", price: "280 RON" },
      { name: "Extracție dinte pluriradicular", price: "300 RON" },
      { name: "Extracție molar de minte erupt", price: "450 RON" },
      { name: "Extracție dinte parodontotic", price: "220 RON" },
      { name: "Extracție cu alveolotomie", price: "350 RON" },
      { name: "Extracție rest radicular", price: "230 RON" },
      { name: "Odontectomie incluzie maxilar", price: "600 RON" },
      { name: "Odontectomie incluzie mandibulă", price: "700 RON" },
      { name: "Chistectomie <2cm", price: "450 RON" },
      { name: "Chistectomie >2cm", price: "650 RON" },
    ],
  },
  {
    category: "Chirurgie endodontică / preprotetică",
    items: [
      { name: "Rezecție apicală monoradicular", price: "500 RON" },
      { name: "Rezecție apicală pluriradicular", price: "600 RON" },
      { name: "Rezecție apicală + obturație retro monoradicular", price: "700 RON" },
      { name: "Rezecție apicală + obturație retro pluriradicular", price: "800 RON" },
      { name: "Chiuretaj apico-periapical", price: "400 RON" },
      { name: "Premolarizare", price: "400 RON" },
      { name: "Incizie și drenaj abces", price: "280 RON" },
      { name: "Frenectomie / Frenoplastie / Bride", price: "300 RON" },
      { name: "Vestibuloplastie", price: "500 RON" },
    ],
  },
  {
    category: "Chirurgie maxilo-facială",
    items: [
      { name: "Excizie formațiune tumorală piele", price: "420 RON" },
      { name: "Excizie formațiune tumorală mucoasă", price: "420 RON" },
      { name: "Excizie chist sebaceu / fibrolipom", price: "385 RON" },
      { name: "Excizie cicatrici piele", price: "520 RON" },
      { name: "Lip repositioning", price: "1440 RON" },
      { name: "Corticotomii per dinte", price: "380 RON" },
      { name: "Corticotomii per segment", price: "500 RON" },
      { name: "Reducere și imobilizare fracturi proces alveolar", price: "500 RON" },
      { name: "Reducere și imobilizare fracturi mandibulă / maxilar", price: "1500 RON" },
      { name: "Reducere și imobilizare fracturi oase nazale", price: "960 RON" },
      { name: "Incizie și drenaj abces submandibular", price: "960 RON" },
      { name: "Biopsie os", price: "480 RON" },
      { name: "Tratament urgență trigemeni", price: "240 RON" },
      { name: "Bichectomie unilaterală", price: "1500 RON" },
      { name: "Bichectomie bilaterală", price: "2900 RON" },
    ],
  },
];

function pricingCategory(name: string) {
  return pricingData.find((category) => category.category === name);
}

export const homePricingData = [
  {
    category: "Consultație",
    items: (pricingCategory("Consultații primare și de specialitate")?.items ?? []).filter((item) =>
      item.name === "Consultație stomatologică generală, realizare fișă completă, întocmire plan tratament",
    ),
  },
  {
    category: "Implantologie",
    items: (pricingCategory("Implantologie")?.items ?? []).filter((item) =>
      ["Implant INNO", "Implant Straumann BLT"].includes(item.name),
    ),
  },
  {
    category: "Dinți ficși / All-on-X",
    items: (pricingCategory("All on 4 / All on 6")?.items ?? []).filter((item) =>
      ["All on 4 INNO", "All on 4 Straumann"].includes(item.name),
    ),
  },
  {
    category: "Coroane",
    items: (pricingCategory("Protetică dentară")?.items ?? []).filter((item) =>
      item.name === "Coroană zirconiu CAD-CAM",
    ),
  },
  {
    category: "Ortodonție",
    items: [
      ...(pricingCategory("Ortodonție")?.items ?? []).filter((item) => item.name === "Aparat fix metalic / arcadă"),
      ...(pricingCategory("Alignere")?.items ?? []).filter((item) => item.name === "Spark 10 / arcadă"),
    ],
  },
];

const featuredCase = CASE_STUDIES.implantologie;
const featuredBefore = featuredCase.beforeAfterImages[0];
const featuredAfter = featuredCase.beforeAfterImages[1];

const serviceOrientation = [
  {
    title: "Dinți ficși & implantologie",
    href: "/servicii/implant-dentar/",
    links: [
      { title: "Dinți ficși / All-on-X", href: FIXED_TEETH_HREF },
      { title: "Implant dentar", href: "/servicii/implant-dentar/" },
      { title: "Augmentarea osoasă", href: "/servicii/augmentarea-osoasa/" },
    ],
  },
  {
    title: "Reabilitare orală",
    href: "/servicii/protetica/",
    links: [
      { title: "Protetică", href: "/servicii/protetica/" },
      { title: "Coroană dentară", href: "/servicii/coroana-dentara/" },
      { title: "Estetică dentară", href: "/servicii/estetica-dentara/" },
    ],
  },
  {
    title: "Ortodonție",
    href: "/servicii/ortodontie/",
    links: [
      { title: "Ortodonție", href: "/servicii/ortodontie/" },
      { title: "Alignere transparente", href: "/servicii/aparat-dentar/spark/" },
    ],
  },
  {
    title: "Stomatologie generală",
    href: "/servicii/",
    links: [
      { title: "Profilaxie", href: "/servicii/profilaxie/" },
      { title: "Endodonție", href: "/servicii/endodontie/" },
      { title: "Urgențe stomatologice", href: EMERGENCY_HREF },
    ],
  },
];

const advantages = [
  { value: "All-on-4", label: "Reabilitare pe implanturi" },
  { value: "Smile Design", label: "Estetică dentară" },
];
const recommendationClips = ["/cazuri-1.mp4", "/cazuri-2.mp4"];
const recommendationClipMeta = [
  {
    date: "24 Jan 2026",
    title: "All on 4",
    description: "Reabilitare completă cu implanturi, rezultat stabil și estetic.",
  },
  {
    date: "02 Feb 2026",
    title: "Smile Design",
    description: "Tratament complex pentru armonie dentară și zâmbet natural.",
  },
];

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="ads-container">
      <h2 data-anim="text" className="text-balance text-[clamp(32px,8vw,96px)] font-extrabold leading-[0.98] tracking-[-0.045em]">
        {title}
      </h2>
    </div>
  );
}

function TeamBentoBanner({
  doctorSrc,
  doctorAlt,
  leftHeadline = "alverna\ndental\nstudio",
  showScanCard = true,
  showSlogan = true,
}: {
  doctorSrc: string;
  doctorAlt: string;
  leftHeadline?: string;
  showScanCard?: boolean;
  showSlogan?: boolean;
}) {
  return (
    <div className={`mx-auto grid w-full max-w-[1680px] grid-cols-1 gap-[6px] px-5 pb-16 md:grid-cols-2 md:px-10 md:pb-[120px] lg:px-[96px] ${showScanCard ? "lg:grid-cols-[440px_1fr_1fr]" : "lg:grid-cols-[440px_1fr]"}`}>
      <article className="relative isolate z-20 flex min-h-[420px] flex-col overflow-hidden rounded-[24px] bg-[#0A0A0A] p-6 md:overflow-visible md:p-[40px] lg:h-[560px]">
        <div className="absolute inset-0 z-[1] overflow-hidden rounded-[24px]">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.55)_100%)]" />
        </div>
        <h3 className="relative z-[30] mt-4 whitespace-pre-line text-[32px] font-bold leading-[0.88] text-white sm:text-[40px] md:absolute md:bottom-[92px] md:left-[36px] md:mt-auto md:pt-0 md:text-[64px]">
          {leftHeadline}
        </h3>
        <img
          src={doctorSrc}
          alt={doctorAlt}
          className="pointer-events-none relative z-[10] mx-auto mt-4 h-[min(52vw,300px)] w-auto max-w-full object-contain object-bottom md:absolute md:bottom-0 md:right-[-35px] md:mx-0 md:mt-0 md:h-[660px]"
        />
      </article>

      {showSlogan ? (
        <article className="relative z-10 min-h-[280px] rounded-[16px] bg-[#0A0A0A] p-6 md:p-[44px] lg:h-[560px]">
          <h3 className="whitespace-pre-line text-[28px] font-semibold leading-[1.05] text-white md:text-[46px]">
            {"Puterea zâmbetului\ncare inspiră încredere"}
          </h3>
        </article>
      ) : null}

      <div className="relative z-10 flex min-h-[420px] flex-col gap-[6px] lg:h-[560px]">
        {showScanCard ? (
          <article className="relative flex min-h-[220px] flex-col overflow-hidden rounded-[16px] bg-[#0A0A0A] md:h-[275px]">
            <img
              src={shining3dScanner.src}
              alt="Scanare 3D intraorală Shining 3D — Alverna Dental Studio"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <p className="relative z-10 mt-auto bg-gradient-to-t from-black/70 to-transparent px-5 pb-4 pt-10 text-[21px] font-semibold text-white">
              Scanare intraorală 3D
            </p>
          </article>
        ) : null}

        <article className="relative min-h-[220px] flex-1 overflow-hidden rounded-[16px] bg-[#0A0A0A] md:min-h-[275px]">
          <img
            src={cazA7407760Smile.src}
            alt="Zâmbet pacient — rezultat Alverna Dental Studio"
            className="h-full w-full object-cover object-center"
          />
        </article>
      </div>
    </div>
  );
}

export default function HomePageClient() {
  const rootRef = useRef<HTMLDivElement>(null);
  const pageContentRef = useRef<HTMLDivElement>(null);
  const menuOverlayRef = useRef<HTMLDivElement>(null);
  const menuTopLineRef = useRef<HTMLSpanElement>(null);
  const menuMidLineRef = useRef<HTMLSpanElement>(null);
  const menuBottomLineRef = useRef<HTMLSpanElement>(null);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const contactSectionRef = useRef<HTMLElement>(null);
  const contactSpotlightRef = useRef<HTMLDivElement>(null);
  const footerSectionRef = useRef<HTMLElement>(null);
  const footerSpotlightRef = useRef<HTMLDivElement>(null);
  const [cabinetVideoActive, setCabinetVideoActive] = useState(false);
  const cabinetVideoRef = useRef<HTMLVideoElement>(null);
  const recommendationVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeClipControls, setActiveClipControls] = useState<Set<number>>(() => new Set());
  const scrolled = useStickyHeaderScroll();

  function activateVideoWithSound(video: HTMLVideoElement | null, onActivated?: () => void) {
    if (!video) return;
    video.muted = false;
    void video.play().then(() => onActivated?.()).catch(() => undefined);
  }

  const {
    menuOpen,
    menuVisible,
    mobileServicesOpen,
    setMobileServicesOpen,
    openSubmenuSlug,
    setOpenSubmenuSlug,
    closeMenu,
    toggleMenu,
  } = useMobileMenu({
    overlayRef: menuOverlayRef,
    pageRef: pageContentRef,
    topLineRef: menuTopLineRef,
    midLineRef: menuMidLineRef,
    bottomLineRef: menuBottomLineRef,
    menuTriggerRef,
  });

  useEffect(() => {
    let cancelled = false;
    let revertAnimations: (() => void) | undefined;

    async function initScrollAnimations() {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion || cancelled || !rootRef.current) return;

      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled || !rootRef.current) return;

      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("[data-anim='section']").forEach((section) => {
          gsap.fromTo(
            section,
            { opacity: 0, y: 16 },
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 78%",
              },
            },
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-anim='image']").forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0.85, scale: 1.03 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 82%" },
            },
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-anim='text']").forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 16 },
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 85%" },
            },
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-anim-cards]").forEach((group) => {
          const cards = group.querySelectorAll<HTMLElement>("[data-anim='card']");
          if (!cards.length) return;
          gsap.fromTo(
            cards,
            { opacity: 0, y: 12 },
            {
              opacity: 1,
              y: 0,
              duration: 0.45,
              ease: "power3.out",
              stagger: 0.05,
              scrollTrigger: { trigger: group, start: "top 82%" },
            },
          );
        });
      }, rootRef);

      revertAnimations = () => ctx.revert();
    }

    void initScrollAnimations();

    return () => {
      cancelled = true;
      revertAnimations?.();
    };
  }, []);

  useEffect(() => {
    const section = footerSectionRef.current;
    const spotlight = footerSpotlightRef.current;
    if (!section || !spotlight) return;

    const media = window.matchMedia("(pointer: fine) and (min-width: 768px)");
    if (!media.matches) {
      spotlight.style.opacity = "0";
      return;
    }

    let frame = 0;
    let running = false;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const render = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      spotlight.style.setProperty("--x", `${currentX}px`);
      spotlight.style.setProperty("--y", `${currentY}px`);

      if (Math.abs(targetX - currentX) > 0.2 || Math.abs(targetY - currentY) > 0.2) {
        frame = requestAnimationFrame(render);
      } else {
        running = false;
      }
    };

    const onMove = (event: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      targetX = Math.max(0, Math.min(rect.width, event.clientX - rect.left));
      targetY = Math.max(0, Math.min(rect.height, event.clientY - rect.top));
      spotlight.style.opacity = "1";
      if (!running) {
        running = true;
        frame = requestAnimationFrame(render);
      }
    };

    const onLeave = () => {
      spotlight.style.opacity = "0";
    };

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);

    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const section = contactSectionRef.current;
    const spotlight = contactSpotlightRef.current;
    if (!section || !spotlight) return;

    const media = window.matchMedia("(pointer: fine) and (min-width: 768px)");
    if (!media.matches) {
      spotlight.style.opacity = "0";
      return;
    }

    let frame = 0;
    let running = false;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const render = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      spotlight.style.setProperty("--x", `${currentX}px`);
      spotlight.style.setProperty("--y", `${currentY}px`);

      if (Math.abs(targetX - currentX) > 0.2 || Math.abs(targetY - currentY) > 0.2) {
        frame = requestAnimationFrame(render);
      } else {
        running = false;
      }
    };

    const onMove = (event: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      targetX = Math.max(0, Math.min(rect.width, event.clientX - rect.left));
      targetY = Math.max(0, Math.min(rect.height, event.clientY - rect.top));
      spotlight.style.opacity = "1";
      if (!running) {
        running = true;
        frame = requestAnimationFrame(render);
      }
    };

    const onLeave = () => {
      spotlight.style.opacity = "0";
    };

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);

    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={rootRef} className="ads-page overflow-x-clip bg-[#0f1115] text-white [scroll-behavior:smooth]">
      <MobileMenuOverlay
        id="home-mobile-menu"
        overlayRef={menuOverlayRef}
        menuVisible={menuVisible}
        onClose={closeMenu}
      >
        {[
          { href: "/", label: "Acasă" },
          { href: "/echipa", label: "Echipa" },
          { href: "/cazuri", label: "Cazuri" },
          { href: FIXED_TEETH_HREF, label: FIXED_TEETH_NAV_LABEL },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            data-menu-item
            onClick={closeMenu}
            className={`block text-left text-[clamp(42px,8vw,96px)] font-extrabold leading-[0.95] tracking-[-0.035em] text-white transition duration-250 hover:translate-y-[-2px] ${
              isFixedTeethNav(item.label) ? "ads-nav-green-glow" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
        <MobileMenuNavServices
          mobileServicesOpen={mobileServicesOpen}
          setMobileServicesOpen={setMobileServicesOpen}
          openSubmenuSlug={openSubmenuSlug}
          setOpenSubmenuSlug={setOpenSubmenuSlug}
          onCloseMenu={closeMenu}
        />
        {[
          { href: "/tarife", label: "Tarife" },
          { href: "/urgente-stomatologice-cluj/", label: "Urgențe" },
          { href: "/contact", label: "Contact" },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            data-menu-item
            onClick={closeMenu}
            className={`block text-left text-[clamp(42px,8vw,96px)] font-extrabold leading-[0.95] tracking-[-0.035em] text-white transition duration-250 hover:translate-y-[-2px] ${
              item.label === "Urgențe" ? "ads-nav-emergency-glow" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </MobileMenuOverlay>

      <div ref={pageContentRef}>
      <header
        data-intro="nav"
        className={`sticky top-0 z-50 h-[72px] w-full text-white transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled
            ? "bg-[#0f1115]/92 shadow-[0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md"
            : "bg-[#0f1115]"
        }`}
      >
        <div className="relative mx-auto flex h-full w-full items-center justify-between px-4 text-[18px] font-medium sm:px-5 md:px-6 lg:px-8">
          <SiteLogo />
          <nav
            className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center tracking-[-0.01em] lg:flex"
            style={{ columnGap: "clamp(24px, 4.5vw, 100px)" }}
          >
            <Link className="pointer-events-auto underline decoration-2 underline-offset-[10px] transition-opacity duration-200 hover:opacity-75" href="/" aria-current="page">Acasă</Link>
            <Link className="pointer-events-auto opacity-90 transition-opacity duration-200 hover:opacity-100" href="/echipa">Echipa</Link>
            <Link className="pointer-events-auto opacity-90 transition-opacity duration-200 hover:opacity-100" href="/cazuri">Cazuri</Link>
            <Link className="pointer-events-auto ads-nav-green-glow whitespace-nowrap opacity-90 transition-opacity duration-200 hover:opacity-100" href={FIXED_TEETH_HREF}>{FIXED_TEETH_NAV_LABEL}</Link>
            <span className="pointer-events-auto"><ServicesDropdown isDark /></span>
            <Link className="pointer-events-auto opacity-90 transition-opacity duration-200 hover:opacity-100" href="/tarife">Tarife</Link>
            <Link className="pointer-events-auto opacity-90 transition-opacity duration-200 hover:opacity-100" href="/contact">Contact</Link>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <EmergencyHeaderButton />
            <button
            ref={menuTriggerRef}
            type="button"
            aria-label={menuOpen ? "Închide meniul" : "Deschide meniul"}
            aria-expanded={menuOpen}
            aria-controls="home-mobile-menu"
            aria-haspopup="dialog"
            onClick={toggleMenu}
            className="relative z-10 flex h-12 w-12 shrink-0 flex-col justify-center gap-[6px] rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B6B94C] lg:hidden"
          >
            <span ref={menuTopLineRef} className="h-[2px] w-full bg-[#ffffff]" />
            <span ref={menuMidLineRef} className="h-[2px] w-full bg-[#ffffff]" />
            <span ref={menuBottomLineRef} className="h-[2px] w-full bg-[#ffffff]" />
          </button>
          </div>
        </div>
      </header>

      <section className="mt-0 w-full">
        <div className="relative h-[min(calc(100svh-72px),820px)] w-full min-h-[560px] md:h-[calc(100dvh-72px)] md:max-h-none">
          <div data-intro="hero-media" className="relative h-full w-full overflow-hidden">
            <HeroIntroVideo />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/78 via-black/40 to-transparent"
            />
            <div data-intro="hero-title" className="absolute inset-0 flex flex-col justify-between px-5 py-6 text-white md:px-7 md:py-8 lg:px-9 lg:py-10">
              <div className="max-w-[720px]">
                <p className="ads-eyebrow text-white/70">Stomatologie multidisciplinară în Cluj-Napoca</p>
                <h1 className="mt-4 max-w-[18ch] text-balance text-[clamp(32px,7vw,72px)] font-extrabold leading-[0.98] tracking-[-0.045em] md:mt-5">
                  Implantologie și reabilitare orală complexă
                </h1>
                <p className="mt-5 max-w-[52ch] text-[clamp(16px,2.4vw,21px)] font-medium leading-[1.5] text-white/90 text-pretty md:mt-6">
                  Diagnostic, chirurgie, protetică și parodontologie integrate într-un singur plan de tratament.
                </p>
                <p className="mt-4 max-w-[52ch] text-[clamp(14px,2vw,18px)] font-medium leading-[1.5] text-white/65">
                  Laborator dentar propriu • Flux digital • Echipă multidisciplinară
                </p>
                <div className="mt-7 flex max-w-[520px] flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="#contact"
                    className="ads-btn-lit inline-flex min-h-[52px] items-center justify-center rounded-full px-6 text-[16px] font-semibold sm:text-[18px]"
                  >
                    Programează o consultație
                  </a>
                  <Link
                    href="/cazuri/"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/30 px-6 text-[16px] font-semibold text-white transition duration-200 hover:bg-white/10 sm:text-[18px]"
                  >
                    Vezi cazuri reale
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cazuri" data-anim="section" className="bg-[#ececec] pb-[96px] pt-20 md:pb-[120px] md:pt-28 lg:pb-[140px] lg:pt-[160px]">
        <SectionTitle title="Cazuri" />
        <div className="mx-auto mt-4 w-full max-w-[1680px] px-4 md:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[640px]">
              <p className="text-[18px] font-medium leading-[1.5] text-white md:text-[21px]">
                {featuredCase.subtitle}
              </p>
              <p className="mt-3 text-[16px] font-medium leading-[1.4] text-white/70 md:text-[18px]">
                {featuredCase.doctor.name} · {featuredCase.doctor.role}
              </p>
            </div>
            <Link
              href={featuredCase.path}
              className="inline-flex min-h-[48px] items-center justify-center self-start rounded-full bg-black px-5 text-center text-[18px] font-semibold text-white transition duration-200 hover:opacity-90 min-[480px]:text-[21px]"
            >
              Vezi cazul →
            </Link>
          </div>

          {featuredBefore && featuredAfter ? (
            <BeforeAfterCompare
              beforeSrc={featuredBefore.image.src}
              afterSrc={featuredAfter.image.src}
              beforeAlt={featuredBefore.alt}
              afterAlt={featuredAfter.alt}
              beforePosition={featuredBefore.objectPosition}
              afterPosition={featuredAfter.objectPosition}
              className="mt-10 aspect-[4/3] w-full rounded-[24px] sm:aspect-[16/10] lg:aspect-[21/10]"
            />
          ) : null}
        </div>
        <div className="mx-auto mt-[48px] grid w-full max-w-[1680px] grid-cols-1 gap-4 px-4 md:grid-cols-3 md:gap-5 md:px-6 lg:px-8">
          {caseGallery.map(({ src, alt }) => (
            <CaseImage key={src} src={src} alt={alt} overlayLabel="Vezi cazul" data-anim="image" className="h-[min(78vw,380px)] w-full rounded-[24px] object-cover md:h-[420px] lg:h-[520px]" />
          ))}
        </div>
      </section>

      <section data-anim="section" className="bg-[#ececec] pb-[90px] pt-[30px] lg:pb-[180px]">
        <div className="mx-auto w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[auto_1fr] lg:gap-10">
            <div className="overflow-hidden rounded-[12px]">
              <img
                src={vdScaun.src}
                alt="Echipa medicală Alverna Dental Studio în timpul unui tratament"
                data-anim="image"
                loading="lazy"
                decoding="async"
                className="aspect-[682/1024] h-[min(520px,70vh)] w-full max-w-[440px] object-cover object-[center_38%] md:h-[min(720px,82vh)]"
              />
            </div>
            {/* SEO365: bloc vechi de copy — nu rescrie/șterge până nu validează rolul SEO și termenii de păstrat. */}
            <p className="max-w-[520px] text-[21px] leading-[1.65] tracking-[-0.64px] text-white">
              Ne menținem statutul de clinică stomatologică modernă, în cadrul căreia fiecare cabinet stomatologic Cluj este dotat cu aparatură medicală de ultimă generație.
            </p>
          </div>
          <div className="mt-10 grid min-w-0 grid-cols-1 gap-[8px] md:grid-cols-2 lg:mt-[-140px] xl:mt-[-310px] xl:ml-[815px] xl:gap-[4px]">
            {advantages.map((a, clipIndex) => (
              <article key={a.value} className="relative w-full max-w-[380px] rounded-[18px] bg-[#f5f5f5] p-5 md:max-w-none lg:w-[380px]">
                <div>
                  <strong className="block text-[36px] font-semibold leading-none tracking-[-0.02em] text-white md:text-[56px]">
                    {a.value}
                  </strong>
                </div>
                <h3 className="mt-3 text-[24px] tracking-[-0.8px] text-white md:text-[34px]">{a.label}</h3>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative mt-2 h-[min(72vw,300px)] w-full max-w-[267px] overflow-hidden rounded-[24px] bg-black sm:h-[396px] sm:w-[267px]"
                  style={{ boxShadow: "none" }}
                >
                  <LazyVideo
                    ref={(el) => {
                      recommendationVideoRefs.current[clipIndex] = el;
                    }}
                    src={recommendationClips[clipIndex]}
                    poster="/services/smile-mirror.png"
                    className="absolute inset-0 h-full w-full scale-[1.05]"
                    ariaLabel={`Clip ${recommendationClipMeta[clipIndex].title}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(0,0,0,0.68)]" />
                  {!activeClipControls.has(clipIndex) ? (
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      onClick={() =>
                        activateVideoWithSound(recommendationVideoRefs.current[clipIndex], () => {
                          setActiveClipControls((prev) => new Set(prev).add(clipIndex));
                        })
                      }
                      className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[rgba(0,0,0,0.6)] backdrop-blur-[2px]"
                      aria-label="Redă clip cu sunet"
                    >
                      <span className="ml-[2px] inline-block h-0 w-0 border-b-[10px] border-l-[16px] border-t-[10px] border-b-transparent border-l-white border-t-transparent" />
                    </motion.button>
                  ) : null}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-3 pb-3 pt-10 sm:inset-auto sm:bottom-[16px] sm:left-[16px] sm:right-[16px] sm:bg-none sm:p-0 sm:pt-0">
                    <p className="text-[14px] text-[rgba(255,255,255,0.6)] sm:text-[21px]">{recommendationClipMeta[clipIndex].date}</p>
                    <h4 className="mt-1 text-[16px] font-semibold leading-[1.2] text-white sm:mt-[6px] sm:text-[21px]">{recommendationClipMeta[clipIndex].title}</h4>
                    <p className="mt-0.5 line-clamp-2 text-[14px] leading-[1.35] text-[rgba(255,255,255,0.8)] sm:mt-1 sm:line-clamp-none sm:text-[21px] sm:leading-[1.4]">{recommendationClipMeta[clipIndex].description}</p>
                  </div>
                </motion.div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="servicii" className="overflow-hidden bg-[#121212] pb-0">
        <div className="mx-auto w-full max-w-[1680px] overflow-x-hidden rounded-[24px] bg-[#121212] px-5 py-12 text-white md:px-10 md:py-16 lg:px-24 lg:py-24">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-balance text-[32px] font-bold leading-[0.95] tracking-[-0.05em] text-white md:text-[72px] lg:text-[96px]">Servicii</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:mt-14 lg:gap-x-16 lg:gap-y-12">
            {serviceOrientation.map((group) => (
              <article key={group.title} className="min-w-0 border-t border-white/12 pt-6">
                <Link
                  href={group.href}
                  className="group inline-flex items-center gap-2 text-[24px] font-semibold leading-[1.1] tracking-[-0.03em] text-white md:text-[32px]"
                >
                  <span>{group.title}</span>
                  <span aria-hidden className="translate-y-px text-[20px] opacity-50 transition-transform duration-200 group-hover:translate-x-[3px]">→</span>
                </Link>
                <div className="mt-4 space-y-1">
                  {group.links.map((link) => (
                    <Link
                      key={link.href + link.title}
                      href={link.href}
                      className="flex min-h-[44px] items-center justify-between border-b border-white/10 py-2 pl-3 text-[18px] font-normal text-white/80 transition duration-200 hover:translate-x-[3px] hover:text-white md:text-[21px]"
                    >
                      <span>{link.title}</span>
                      <span aria-hidden className="text-[18px] opacity-40">→</span>
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-anim="section" className="bg-[#f5f5f5]">
        <div className="mx-auto w-full max-w-[1680px] px-4 pb-16 pt-16 md:px-10 md:pb-[140px] md:pt-[140px] lg:px-[96px]">
          <h2 className="mb-5 text-[32px] font-semibold leading-[1.12] text-white sm:text-[40px] md:text-[48px]">Misiunea Noastră</h2>
          <p className="ads-readable mb-5 text-white">
            Tratamentul dentar complex funcționează cel mai bine atunci când specialitățile lucrează împreună.
          </p>
          <p className="ads-readable mb-10 text-white md:mb-16">
            Ne ghidăm după confortul pacientului. Fiecare decizie clinică este explicată clar. Combinăm tehnologia cu un plan de tratament personalizat.
          </p>

          <div data-anim="image" className="relative h-[min(420px,70vw)] min-h-[240px] w-full overflow-hidden rounded-[24px]">
            <LazyVideo
              ref={cabinetVideoRef}
              src="/hero.mp4"
              poster="/services/smile-mirror.png"
              ariaLabel="Descoperă cabinetul Alverna Dental Studio"
              className="h-full w-full object-cover"
            />
            {!cabinetVideoActive ? (
              <div className="absolute left-1/2 top-1/2 flex max-w-[90%] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 px-4 text-center sm:flex-row sm:gap-4">
                <button
                  type="button"
                  onClick={() =>
                    activateVideoWithSound(cabinetVideoRef.current, () => setCabinetVideoActive(true))
                  }
                  className="ads-btn-lit flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-[21px] sm:h-16 sm:w-16 sm:text-[28px]"
                  aria-label="Redă video cu sunet"
                >
                  ▶
                </button>
                <span className="text-[21px] font-medium leading-[1.65] text-white">Descoperă cabinetul nostru</span>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="bg-[#ececec] pb-16 md:pb-[120px]">
        <SectionTitle title="Recenzii" />
        <div className="mx-auto mt-10 grid w-full max-w-[1680px] grid-cols-1 gap-[20px] px-4 md:grid-cols-2 md:px-8 lg:grid-cols-4 lg:px-12">
          <article
            className="ads-surface-light-muted flex min-h-[313px] flex-col rounded-[18px] p-[30px]"
          >
            <div className="flex items-end gap-2">
              <strong className="text-[40px] font-semibold leading-none tracking-[-3.36px] md:text-[56px]">4,8</strong>
              <span className="mb-2 text-base opacity-60">/5</span>
              <img src="https://www.google.com/favicon.ico" alt="Google" className="mb-2 h-6 w-6" />
            </div>
            <div className="mx-auto mt-[55px] w-full max-w-[270px] space-y-2 text-justify text-[21px] leading-[1.65]">
              <p>
                Adresă:{" "}
                <a href={CLINIC.mapsPlaceUrl} target="_blank" rel="noreferrer" className="underline decoration-[#B6B94C]/60 underline-offset-4">
                  {CLINIC.addressLine}
                </a>
              </p>
              <p>
                Număr de telefon:{" "}
                <a href={`tel:${CLINIC.phoneTel}`} className="underline decoration-[#B6B94C]/60 underline-offset-4">
                  {CLINIC.phoneDisplay}
                </a>
              </p>
              <p>Program:</p>
              <p>{CLINIC.hoursDisplay}</p>
            </div>
            <img src={alvernaLogo.src} alt="Alverna logo" className="mx-auto mt-auto pt-4 h-auto w-[220px] object-contain" />
          </article>

          {reviews.map((r) => (
            <article
              key={r.name}
              className="flex h-full min-h-[313px] flex-col rounded-[18px] border border-white/10 bg-white/[0.04] p-6 md:p-8"
            >
              <div>
                <p className="text-[24px] font-semibold leading-[1.05] md:text-[32px]">{r.name}</p>
                <p className="mt-1 text-[21px] opacity-60">{r.meta}</p>
                <p className="mt-1 text-[21px] opacity-60">{r.time}</p>
              </div>
              <p className="mt-6 text-[21px] leading-[1.5] tracking-[-0.2px]">{r.text}</p>
              <p className="mt-auto pt-4 text-[21px] leading-none tracking-[0.08em]">★★★★★</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-20 lg:px-[96px]">
        <div className="mx-auto w-full max-w-[1680px]">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:gap-0 md:divide-x md:divide-white/10 md:py-4">
            {[
              ["15", "Ani de activitate"],
              ["Peste 9.000", "de pacienți"],
            ].map(([n, t]) => (
              <article key={n} className="px-2 text-center md:px-6 md:text-left">
                <h3 className="text-[28px] font-bold leading-none tracking-[-0.04em] text-white sm:text-[36px] md:text-[56px] lg:text-[72px]">
                  {n}
                </h3>
                <p className="mx-auto mt-3 max-w-[150px] text-[21px] leading-[1.65] text-white/75 md:mx-0">{t}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-anim="section" data-theme="light" className="bg-[#F5F5F5]">
        <TeamBentoBanner
          doctorSrc={teamBannerImage.src}
          doctorAlt="Echipa medicală Alverna Dental Studio"
        />
      </section>

      <section id="tarife" className="relative w-full overflow-hidden bg-[#f5f5f5] pb-14 md:pb-20 lg:pb-[120px]">
        <div className="mx-auto w-full max-w-[1680px] bg-[#f5f5f5] px-5 py-12 md:px-10 md:py-16 lg:px-[96px] lg:py-[96px]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-balance text-[32px] font-bold leading-[0.95] tracking-[-0.05em] text-white md:text-[72px] lg:text-[96px]">Tarife</h2>
            <Link
              href="/tarife/"
              className="ads-btn-primary inline-flex min-h-[44px] items-center justify-center rounded-full px-5 py-2 text-[18px] font-semibold sm:text-[21px]"
            >
              Vezi toate tarifele
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-5 xl:gap-6">
            {homePricingData.map((category) => (
              <article key={category.category} className="min-w-0">
                <h3 className="text-[18px] font-semibold leading-[1.2] tracking-[-0.02em] text-white md:text-[21px]">{category.category}</h3>
                <div className="mt-5 space-y-0">
                  {category.items.map((entry) => (
                    <div key={`${category.category}-${entry.name}`} className="flex items-baseline gap-3 border-b border-black/10 py-3">
                      <p className="min-w-0 text-[16px] leading-[1.35] text-[#303030] md:text-[18px]">
                        {entry.name}
                      </p>
                      <p className="ml-auto shrink-0 text-right text-[16px] font-semibold tabular-nums text-white md:text-[18px]">{entry.price}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="echipa" data-anim="section" data-theme="light" className="overflow-visible bg-[#ececec] pb-[90px] pt-[10px] lg:pb-[140px]">
        <div className="mx-auto flex w-full max-w-[1680px] flex-col gap-6 px-5 pb-10 md:flex-row md:items-end md:justify-between md:px-10 md:pb-[168px] lg:px-[96px]">
          <div className="max-w-[820px]">
            <h2 className="text-[32px] font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-[52px] lg:text-[64px]">
              Laborator dentar propriu
            </h2>
            <p className="mt-5 text-[18px] leading-[1.7] text-white/85 sm:text-[21px]">
              Medicul și tehnicianul lucrează în aceeași echipă. Comunicarea directă dintre clinică și laborator permite controlul atent al etapelor protetice, ajustări eficiente și personalizarea fiecărei lucrări.
            </p>
          </div>
          <a
            href="#laborator-alverna"
            className="inline-flex min-h-[46px] shrink-0 items-center self-start rounded-full border border-black/15 px-6 text-[18px] font-semibold text-white md:self-end sm:text-[21px]"
          >
            Descoperă laboratorul Alverna
          </a>
        </div>
        <div id="laborator-alverna">
          <TeamBentoBanner
            doctorSrc={labDoctorBannerImage.src}
            doctorAlt="Echipa laboratorului dentar Alverna Dental Studio"
            leftHeadline={"laborator\ndentar"}
            showScanCard={false}
            showSlogan={false}
          />
        </div>
      </section>

      <section className="bg-[#ececec] pb-16 pt-[10px] lg:pb-[90px]">
        <div className="mx-auto w-full max-w-[1680px] px-4 md:px-8 lg:px-[96px]">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <h2 className="text-balance text-[24px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[32px] md:text-[40px]">
              Mai multe cazuri tratate
            </h2>
            <Link
              href="/cazuri/"
              className="inline-flex min-h-[48px] items-center rounded-full border border-black/15 px-6 text-[18px] font-medium text-white"
            >
              Vezi cazuri reale
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-[3px] overflow-hidden rounded-[18px] md:grid-cols-3">
            <article className="relative h-[min(56vw,280px)] rounded-l-[18px] bg-black sm:h-[320px] md:h-[360px]">
              <LazyVideo src="/cazuri-1.mp4" poster="/services/exam-male.png" ariaLabel="Caz tratat — vedere generală" />
            </article>
            <article className="relative h-[min(56vw,280px)] bg-black sm:h-[320px] md:h-[360px]">
              <LazyVideo src="/cori-angel.mp4" poster="/services/smile-mirror.png" ariaLabel="Caz tratat — restaurare completă" loadDelayMs={400} />
            </article>
            <article className="relative h-[min(56vw,280px)] rounded-r-[18px] bg-black sm:h-[320px] md:h-[360px]">
              <LazyVideo src="/cazuri-2.mp4" poster="/services/whitening-2.png" ariaLabel="Caz tratat — albire și aliniere" loadDelayMs={200} />
            </article>
          </div>
        </div>
      </section>

      <section id="contact" ref={contactSectionRef} data-anim="section" className="relative w-full overflow-hidden bg-[#0A0A0A] py-20 md:py-[120px]">
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-120px] top-1/2 z-0 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#B6B94C] opacity-45 blur-[120px] max-md:scale-75 max-md:opacity-30 [will-change:transform] animate-[contact-glow-drift_10s_ease-in-out_infinite]"
        />
        <div
          ref={contactSpotlightRef}
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 [will-change:transform]"
          style={{
            background: "radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(182,185,76,0.22), transparent 35%)",
          }}
        />

        <div className="relative z-10 mx-auto grid w-full max-w-[1680px] grid-cols-1 gap-12 px-4 md:px-8 lg:grid-cols-[430px_1fr] lg:gap-20 lg:px-[96px]">
          <ContactFormCard source="home-page" />

          <div className="pt-0 text-white lg:pt-8">
            <h3 className="max-w-[720px] text-[32px] font-semibold leading-[1.04] tracking-[-0.04em] md:text-[44px]">Primul pas spre un zâmbet sănătos începe aici.</h3>
            <p className="mt-5 max-w-[680px] text-[21px] leading-[1.65] text-white">
              Echipa Alverna Dental Studio te ajută să înțelegi opțiunile de tratament și pașii următori.
            </p>
            <a
              href={`tel:${CLINIC.phoneTel}`}
              className="mt-7 inline-block text-[21px] text-white underline decoration-[#B6B94C]/50 underline-offset-4 hover:decoration-white"
            >
              Preferi telefonic? Sună acum
            </a>
          </div>
        </div>
      </section>

      <footer ref={footerSectionRef}>
        <SiteFooter />
      </footer>

      </div>
    </div>
  );
}
