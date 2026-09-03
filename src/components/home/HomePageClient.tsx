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
import { useSwipeIndex } from "@/hooks/useSwipeIndex";
import { CaseImage } from "@/components/cazuri/CaseImage";
import { HeroIntroVideo } from "@/components/media/HeroIntroVideo";
import { LazyVideo } from "@/components/media/LazyVideo";
import { ContactFormCard } from "@/components/services/ServicePageParts";
import { services } from "@/config/services";
import { CLINIC } from "@/lib/contact";
import vdScaun from "@/assets/VDscaun.png";
import alvernaLogo from "@/assets/alverna-logo.png";
import teamBannerImage from "@/assets/cazuri/Banner/Andreea de folosit 2.png";
import labDoctorBannerImage from "@/assets/cazuri/lab-doctor-banner.png";
import cazA7408097 from "@/assets/cazuri/A7408097 2.png";
import danaHero from "@/assets/cazuri/dana-hero.png";
import aureliaHero from "@/assets/cazuri/aurelia-hero.png";
import cazA7407760 from "@/assets/cazuri/A7407760 2.png";
import cazA7407944 from "@/assets/cazuri/A7407944 2.png";
import cazA7408160 from "@/assets/cazuri/A7408160-2 2.png";

const caseGallery = [
  { src: cazA7408097.src, alt: "Caz implantologie — rezultat final Alverna Dental Studio" },
  { src: danaHero.src, alt: "Caz Dana — reabilitare protetică integrală din zirconiu" },
  { src: aureliaHero.src, alt: "Caz Aurelia — estetică dentară și fațete" },
  { src: cazA7407760.src, alt: "Caz reabilitare protetică — funcție și estetică" },
  { src: cazA7407944.src, alt: "Caz smile design — armonie dentară și facială" },
  { src: cazA7408160.src, alt: "Caz reabilitare complexă — plan de tratament complet" },
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

const partnerReviewCards = [
  { id: "andreea-1", name: "Andreea Nisipeanu", rating: "4.8", text: "Recomand cu mare încredere. Profesionalism, căldură și rezultate excelente." },
  { id: "carmen-1", name: "Carmen Ilea", rating: "5.0", text: "Impresionată de atenție la detalii și de tehnologia modernă din clinică." },
  { id: "denisa-1", name: "Denisa Tănase", rating: "5.0", text: "Experiență ușoară, comunicare clară și echipă foarte prietenoasă." },
  { id: "andreea-2", name: "Andreea Nisipeanu", rating: "5.0", text: "Clinica este impecabil de curată și dotată cu aparatură foarte modernă." },
  { id: "carmen-2", name: "Carmen Ilea", rating: "5.0", text: "Execută cu mare finețe toate tipurile de lucrări. Am să revin cu plăcere." },
  { id: "denisa-2", name: "Denisa Tănase", rating: "5.0", text: "Mi s-a explicat în detaliu fiecare pas și mi s-a răspuns la fiecare întrebare." },
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
      { name: "Plan tratament 3D Clear Correct", price: "1300 RON" },
      { name: "Clear Correct MINI / 1 arcadă", price: "10000 RON" },
      { name: "Clear Correct MINI / ambele arcade", price: "16000 RON" },
      { name: "Clear Correct ONE / 1 arcadă", price: "15000 RON" },
      { name: "Clear Correct ONE / ambele arcade", price: "20000 RON" },
      { name: "Clear Correct TWO", price: "22000 RON" },
      { name: "Clear Correct UNLIMITED", price: "24500 RON" },
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

const servicesList = [
  "aparat-dentar",
  "pedodontie",
  "augmentarea-osoasa",
  "chirurgie-dentara",
  "coroana-dentara",
  "dentist-cluj",
  "endodontie",
  "estetica-dentara",
  "fatete-dentare",
  "implant-dentar",
  "odontologie",
  "ortodontie",
  "profilaxie",
  "protetica",
  "urgente-stomatologice",
]
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service): service is NonNullable<typeof service> => Boolean(service));
const SERVICES_PER_PAGE = 5;
const servicePages = Array.from({ length: Math.ceil(servicesList.length / SERVICES_PER_PAGE) }, (_, pageIndex) =>
  servicesList.slice(pageIndex * SERVICES_PER_PAGE, pageIndex * SERVICES_PER_PAGE + SERVICES_PER_PAGE),
);

const advantages = [
  { value: "1000+", label: "Cazuri complexe" },
  { value: "100%", label: "Pacienți mulțumiți" },
];
const recommendationClips = ["/cazuri-1.mp4", "/cazuri-2.mp4"];
const missionPosters = ["/services/exam-male.png", "/services/whitening-2.png", "/services/smile-mirror.png", "/services/exam-female.png"];
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
const missionCards = [
  "Ne ghidăm după confortul pacientului în fiecare etapă a tratamentului.",
  "Fiecare decizie clinică este explicată clar și transparent pentru pacient.",
  "Combinăm tehnologia modernă cu grijă reală pentru rezultate durabile.",
  "Planurile de tratament sunt personalizate pentru fiecare caz în parte.",
];

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mx-auto w-full max-w-[1680px] px-4 md:px-6 lg:px-8">
      <h2 data-anim="text" className="text-[32px] font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-[42px] md:text-[72px] lg:text-[96px]">
        {title}
      </h2>
    </div>
  );
}

function Scan3DIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-9 w-9 text-white" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" />
      <path d="M4 7l8 4 8-4M12 11v10" />
    </svg>
  );
}

function TeamBentoBanner({
  doctorSrc,
  doctorAlt,
  leftHeadline = "alverna\ndental\nstudio",
  showScanCard = true,
}: {
  doctorSrc: string;
  doctorAlt: string;
  leftHeadline?: string;
  showScanCard?: boolean;
}) {
  return (
    <div className="mx-auto grid w-full max-w-[1680px] grid-cols-1 gap-[6px] px-5 pb-16 md:grid-cols-2 md:px-10 md:pb-[120px] lg:grid-cols-[440px_1fr_1fr] lg:px-[96px]">
      <article className="relative isolate z-20 flex min-h-[420px] flex-col overflow-hidden rounded-[24px] bg-[#0A0A0A] p-6 md:overflow-visible md:p-[40px] lg:h-[560px]">
        <div className="absolute inset-0 z-[1] overflow-hidden rounded-[24px]">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.55)_100%)]" />
        </div>
        <div className="relative z-[40] text-[21px] text-white">
          <p>Echipa</p>
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

      <article className="relative z-10 min-h-[420px] rounded-[16px] bg-[#0A0A0A] p-6 md:p-[44px] lg:h-[560px]">
        <div className="absolute inset-0 rounded-[16px] bg-[radial-gradient(circle_at_24%_22%,rgba(78,112,68,0.14),transparent_55%)]" />
        <div className="relative z-10 flex h-full flex-col">
          <h3 className="whitespace-pre-line text-[28px] font-semibold leading-[1.05] text-white md:text-[46px]">
            {"Puterea zâmbetului\ncare inspiră încredere"}
          </h3>
          <div className="mt-8">
            <p className="text-[28px] font-semibold text-white md:text-[40px]">
              4.8 <span className="text-[22px] text-[#f2d16b]">★★★★★</span>
            </p>
          </div>
        </div>
      </article>

      <div className="relative z-10 flex min-h-[420px] flex-col gap-[6px] lg:h-[560px]">
        {showScanCard ? (
          <article className="flex min-h-[220px] flex-col items-center justify-center rounded-[16px] bg-[#0A0A0A] px-6 py-8 text-center md:h-[275px]">
            <div className="relative flex h-[118px] w-[118px] items-center justify-center rounded-full border-[10px] border-[#4E7044]">
              <div className="flex h-[82px] w-[82px] items-center justify-center rounded-full bg-[#111111]">
                <Scan3DIcon />
              </div>
            </div>
            <p className="mt-4 text-[21px] font-semibold text-white">Scanare 3D</p>
          </article>
        ) : null}

        <article className="min-h-[220px] rounded-[16px] bg-[#0A0A0A] p-6 max-md:pr-2 md:h-[275px]">
          <h3 className="text-[36px] font-bold leading-none text-white md:text-[56px]">9000</h3>
          <p className="mt-2 text-[21px] text-white/80">Pacienți mulțumiți</p>
          <p className="mt-2 text-[21px] text-[#f2d16b]">★★★★★</p>
          <img src={cazA7407760.src} alt="Caz reabilitare protetică — rezultat Alverna Dental Studio" className="mt-4 h-[72px] w-full rounded-[10px] object-cover object-top sm:h-[96px] md:h-[110px]" />
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
  const [activeServicesDot, setActiveServicesDot] = useState(0);
  const [activeTarifeIndex, setActiveTarifeIndex] = useState(0);
  const recommendationVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const cabinetVideoRef = useRef<HTMLVideoElement>(null);
  const [activeClipControls, setActiveClipControls] = useState<Set<number>>(() => new Set());
  const [cabinetVideoActive, setCabinetVideoActive] = useState(false);
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
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
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
            { opacity: 0.8, scale: 1.06 },
            {
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 82%" },
            },
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-anim='text']").forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
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
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.08,
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

  const totalServicePages = servicePages.length;
  const goPrevServicePage = () => {
    setActiveServicesDot((prev) => (prev - 1 + totalServicePages) % totalServicePages);
  };
  const goNextServicePage = () => {
    setActiveServicesDot((prev) => (prev + 1) % totalServicePages);
  };

  const totalTarifePages = pricingData.length;
  const goPrevTarife = () => {
    setActiveTarifeIndex((prev) => (prev - 1 + totalTarifePages) % totalTarifePages);
  };
  const goNextTarife = () => {
    setActiveTarifeIndex((prev) => (prev + 1) % totalTarifePages);
  };

  const servicesSwipe = useSwipeIndex(goNextServicePage, goPrevServicePage);
  const tarifeSwipe = useSwipeIndex(goNextTarife, goPrevTarife);

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
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            data-menu-item
            onClick={closeMenu}
            className="block text-left text-[clamp(42px,8vw,96px)] font-extrabold leading-[0.95] tracking-[-0.035em] text-white transition duration-250 hover:translate-y-[-2px]"
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
          { href: "/contact", label: "Contact" },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            data-menu-item
            onClick={closeMenu}
            className="block text-left text-[clamp(42px,8vw,96px)] font-extrabold leading-[0.95] tracking-[-0.035em] text-white transition duration-250 hover:translate-y-[-2px]"
          >
            {item.label}
          </Link>
        ))}
      </MobileMenuOverlay>

      <div ref={pageContentRef}>
      <header
        data-intro="nav"
        className={`sticky top-0 z-50 h-[72px] w-full text-white transition-[background-color,box-shadow,backdrop-filter] duration-300 ease-out ${
          scrolled
            ? "bg-[#0f1115]/95 shadow-[0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md"
            : "bg-[#0f1115]"
        }`}
      >
        <div className="relative mx-auto flex h-full w-full items-center justify-between px-3 text-[18px] font-medium sm:px-4 md:px-6 lg:px-8">
          <SiteLogo />
          <nav
            className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center tracking-[-0.01em] lg:flex"
            style={{ columnGap: "clamp(40px, 7vw, 140px)" }}
          >
            <Link className="pointer-events-auto underline decoration-2 underline-offset-[10px] transition-opacity duration-200 hover:opacity-75" href="/" aria-current="page">Acasă</Link>
            <Link className="pointer-events-auto opacity-90 transition-opacity duration-200 hover:opacity-100" href="/echipa">Echipa</Link>
            <Link className="pointer-events-auto opacity-90 transition-opacity duration-200 hover:opacity-100" href="/cazuri">Cazuri</Link>
            <span className="pointer-events-auto"><ServicesDropdown isDark /></span>
            <Link className="pointer-events-auto opacity-90 transition-opacity duration-200 hover:opacity-100" href="/tarife">Tarife</Link>
            <Link className="pointer-events-auto opacity-90 transition-opacity duration-200 hover:opacity-100" href="/contact">Contact</Link>
          </nav>
          <button
            ref={menuTriggerRef}
            type="button"
            aria-label={menuOpen ? "Închide meniul" : "Deschide meniul"}
            aria-expanded={menuOpen}
            aria-controls="home-mobile-menu"
            aria-haspopup="dialog"
            onClick={toggleMenu}
            className="relative z-10 hidden h-12 w-12 max-lg:flex flex-col justify-center gap-[6px] rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9fc48f]"
          >
            <span ref={menuTopLineRef} className="h-[2px] w-full bg-[#ffffff]" />
            <span ref={menuMidLineRef} className="h-[2px] w-full bg-[#ffffff]" />
            <span ref={menuBottomLineRef} className="h-[2px] w-full bg-[#ffffff]" />
          </button>
        </div>
      </header>

      <section
        data-anim="section"
        className="mx-auto mt-0 w-full max-w-[1680px] overflow-visible px-4 pb-[72px] md:px-6 md:pb-[96px] lg:px-8 lg:pb-[140px]"
      >
        <div className="relative left-1/2 h-[calc(100vh-72px)] w-screen max-w-[100vw] -translate-x-1/2 max-md:h-[min(calc(100vh-72px),820px)]">
          <div data-intro="hero-media" className="relative h-full w-full overflow-hidden rounded-[20px] md:rounded-[32px]">
            <HeroIntroVideo />
            <div data-intro="hero-title" className="absolute left-4 top-4 text-white max-md:max-w-[calc(100%-2rem)] md:left-7 md:top-7 lg:left-9 lg:top-9">
            <h1 className="max-w-[980px] text-[40px] font-extrabold leading-[0.92] tracking-[-0.05em] md:text-[84px] lg:text-[128px]">Alverna</h1>
            <p className="mt-1 max-w-[560px] text-[22px] font-bold leading-[0.95] tracking-[-0.04em] md:text-[40px] lg:text-[56px]">Dental Studio</p>
            <p className="mt-4 max-w-[700px] text-[18px] font-medium leading-[1.35] text-white md:text-[21px]">
              Tratamente moderne, medici specializați, rezultate predictibile pentru un zâmbet sănătos și fără stres.
            </p>
          </div>

            <div className="absolute bottom-6 left-4 max-w-[min(280px,calc(100%-2rem))] text-[18px] font-medium leading-[1.65] text-white md:bottom-12 md:left-7 md:text-[21px] lg:left-9">
              <p>Implantologie</p>
              <p className="mt-[12px]">Ortodontie</p>
              <p className="mt-[12px]">Invisalign</p>
              <p className="mt-[12px]">Aparat dentar</p>
            </div>

          </div>
        </div>

        <div data-intro="trust" className="mx-auto mt-10 w-full overflow-hidden pb-[8px] md:mt-[72px]">
          <div data-anim-cards className="grid grid-cols-1 items-end gap-[10px] min-[420px]:grid-cols-2 md:grid-cols-3 md:gap-3 lg:grid-cols-6 lg:gap-2">
            {partnerReviewCards.map((review) => (
              <div
                key={review.id}
                data-anim="card"
                className="ads-surface-light-muted ads-card flex h-[148px] min-w-0 flex-col overflow-hidden rounded-[18px] border border-[#f1f1f1] p-3 shadow-[-12px_-12px_24px_#ffffff,12px_12px_24px_rgba(0,0,0,0.08)] md:h-[164px] md:p-4 lg:h-[156px]"
              >
                <div className="flex shrink-0 items-center justify-between gap-2">
                  <p className="min-w-0 truncate text-[16px] font-semibold md:text-[21px]">{review.name}</p>
                  <p className="shrink-0 whitespace-nowrap text-[16px] font-semibold md:text-[21px]">{review.rating} ★</p>
                </div>
                <p className="mt-2 min-h-0 flex-1 overflow-hidden text-[16px] leading-[1.35] [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] md:text-[18px]">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cazuri" data-anim="section" className="bg-[#ececec] pb-[72px] pt-16 md:pb-[96px] md:pt-24 lg:pb-[72px] lg:pt-[120px]">
        <SectionTitle title="Cazuri" />
        <div className="mx-auto mt-3 w-full max-w-[1680px] px-4 text-[21px] font-normal leading-[1.5] text-white md:px-6 lg:px-8 lg:pl-[708px]">
          La Alverna Dental Studio dispunem de propriul laborator de tehnică dentară, ceea ce ne permite să controlăm îndeaproape calitatea lucrărilor și a materialelor folosite.
        </div>
        <div className="mx-auto mt-4 flex w-full max-w-[1680px] flex-col gap-4 px-4 max-[480px]:items-stretch sm:flex-row sm:flex-wrap sm:items-center sm:justify-between md:px-6 lg:px-8">
          <p className="min-w-0 text-[21px] text-white">Înainte / După · Implant + coroană – 3 luni</p>
          <div className="flex w-full flex-col gap-3 min-[480px]:w-auto min-[480px]:flex-row min-[480px]:items-center">
            <Link
              href="/cazuri/"
              className="inline-flex min-h-[42px] items-center justify-center rounded-full border border-black/15 px-4 text-center text-[18px] font-medium text-white transition duration-300 hover:scale-[1.02] min-[480px]:text-[21px]"
            >
              Vezi toate cazurile
            </Link>
            <a
              href="#contact"
              className="inline-flex min-h-[42px] items-center justify-center rounded-full bg-black px-4 text-center text-[18px] font-semibold text-white transition duration-300 hover:scale-[1.02] min-[480px]:text-[21px]"
            >
              Programează-te
            </a>
          </div>
        </div>
        <div className="mx-auto mt-[64px] grid w-full max-w-[1680px] grid-cols-1 gap-4 px-4 md:grid-cols-2 md:gap-5 md:px-6 lg:grid-cols-3 lg:gap-6 lg:px-8">
          {caseGallery.map(({ src, alt }, i) => (
            <CaseImage key={src} src={src} alt={alt} data-anim="image" className="h-[min(72vw,380px)] w-full rounded-[28px] object-cover sm:h-[430px] lg:h-[560px]" />
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
                  style={{ boxShadow: "-12px -12px 24px #ffffff, 12px 12px 24px rgba(0,0,0,0.08)" }}
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
          <div className="min-w-0">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <h2 className="text-[32px] font-bold leading-[0.95] tracking-[-0.05em] text-white md:text-[72px] lg:text-[96px]">Servicii</h2>
                <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end md:gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={goPrevServicePage}
                      aria-label="Servicii anterioare"
                      className="ads-btn-primary inline-flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full"
                    >
                      <span className="text-[21px] leading-none">←</span>
                    </button>
                    <button
                      type="button"
                      onClick={goNextServicePage}
                      aria-label="Servicii următoare"
                      className="ads-btn-primary inline-flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full"
                    >
                      <span className="text-[21px] leading-none">→</span>
                    </button>
                  </div>
                  <a
                    href="#contact"
                    className="ads-btn-primary inline-flex min-h-[44px] w-full items-center justify-center rounded-full px-5 text-[18px] font-semibold sm:w-auto sm:text-[21px]"
                  >
                    Programează-te
                  </a>
                </div>
              </div>
              <div className="mt-8 w-full max-w-full overflow-hidden" {...servicesSwipe}>
                <div
                  className="flex w-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ transform: `translateX(-${activeServicesDot * 100}%)` }}
                >
                  {servicePages.map((page, pageIdx) => (
                    <div key={`services-page-${pageIdx}`} className="w-full shrink-0 pr-0 lg:pr-0">
                      {page.map((service) => (
                        <motion.a
                          key={service.slug}
                          href={service.href}
                          whileHover={{ scale: 1.005 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          className="grid h-[60px] w-full max-w-full grid-cols-[minmax(0,1fr)_36px] items-center border-b border-[rgba(255,255,255,0.12)] lg:h-[72px]"
                        >
                          <span className="truncate pr-4 text-[21px] font-normal text-white md:text-[21px] lg:text-[28px]">{service.title}</span>
                          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(255,255,255,0.18)] text-[21px] leading-none text-white">+</span>
                        </motion.a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-4">
            {servicePages.map((_, idx) => (
              <span key={`services-page-dot-${idx}`} className={`h-2 w-2 rounded-full ${activeServicesDot === idx ? "bg-white" : "bg-white/50"}`} />
            ))}
          </div>
        </div>
      </section>

      <section data-anim="section" className="bg-[#f5f5f5]">
        <div className="mx-auto w-full max-w-[1680px] px-4 pb-16 pt-16 md:px-10 md:pb-[140px] md:pt-[140px] lg:px-[96px]">
          <div className="mb-6 flex justify-end text-[21px] leading-[1.5] text-white sm:mb-8">
            <span className="break-all sm:break-normal">@alvernadentalstudio</span>
          </div>
          <h2 className="mb-4 text-[32px] font-semibold leading-[1.12] text-white sm:text-[40px] md:text-[48px]">Misiunea Noastră</h2>
          <p className="ads-readable mb-10 text-white md:mb-16">
            Dacă ar fi să discutăm în termeni filozofici, ne întrebăm adeseori de ce facem ceea ce facem, care este motivul pentru care muncim din greu și petrecem multe ore într-un cabinet stomatologic.
          </p>

          <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {missionCards.map((text, idx) => (
              <article
                key={`mission-card-${idx}`}
                className="flex min-h-[126px] w-full items-start gap-3 rounded-[32px] bg-[#F5F5F5] p-4 ads-mission-glow md:items-center"
              >
                <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-[8px] bg-black">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={missionPosters[idx % missionPosters.length]}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/35" />
                  <span className="absolute left-1/2 top-1/2 inline-block h-0 w-0 -translate-x-1/2 -translate-y-1/2 border-b-[4px] border-l-[6px] border-t-[4px] border-b-transparent border-l-white border-t-transparent" />
                </div>
                <p className="min-w-0 flex-1 text-[21px] leading-[1.65] text-white">{text}</p>
              </article>
            ))}
          </div>

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
                <span className="text-[21px] font-medium leading-[1.65] text-white">Descopera cabinetul nostru</span>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section data-anim="section" className="bg-[#ececec] pb-16 md:pb-[120px]">
        <SectionTitle title="Recenzii" />
        <div className="mx-auto mt-2 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
          <p className="text-[21px] font-semibold text-white">Scor mediu: 4.8 ⭐</p>
        </div>
        <div className="mx-auto mt-10 grid w-full max-w-[1680px] grid-cols-1 gap-[20px] px-4 md:grid-cols-2 md:px-8 lg:grid-cols-4 lg:px-12">
          <article
            className="ads-surface-light-muted flex min-h-[313px] flex-col rounded-[18px] p-[30px] ads-mission-glow"
          >
            <div className="flex items-end gap-2">
              <strong className="text-[40px] font-semibold leading-none tracking-[-3.36px] md:text-[56px]">4,8</strong>
              <span className="mb-2 text-base opacity-60">/5</span>
              <img src="https://www.google.com/favicon.ico" alt="Google" className="mb-2 h-6 w-6" />
            </div>
            <div className="mx-auto mt-[55px] w-full max-w-[270px] space-y-2 text-justify text-[21px] leading-[1.65]">
              <p>
                Adresă:{" "}
                <a href={CLINIC.mapsPlaceUrl} target="_blank" rel="noreferrer" className="underline decoration-[#9fc48f]/60 underline-offset-4">
                  {CLINIC.addressLine}
                </a>
              </p>
              <p>
                Număr de telefon:{" "}
                <a href={`tel:${CLINIC.phoneTel}`} className="underline decoration-[#9fc48f]/60 underline-offset-4">
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
              className="ads-surface-light-muted flex h-full min-h-[313px] flex-col rounded-[18px] p-[24px] ads-mission-glow"
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

      <section data-anim="section" className="px-5 py-16 md:px-10 md:py-20 lg:px-[96px]">
        <div className="mx-auto w-full max-w-[1680px]">
          <div className="grid grid-cols-1 gap-4 rounded-[20px] border border-white/12 bg-[#111111] p-6 ads-mission-glow sm:grid-cols-2 md:grid-cols-4 md:gap-0 md:divide-x md:divide-white/10 md:p-10">
            {[
              ["15", "Ani de activitate"],
              ["9000", "Pacienti"],
              ["3000", "Pacienti internationali"],
              ["15 de ani", "Medici cu peste 15 ani de experiență"],
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
          <div className="w-full">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="text-[32px] font-bold leading-[0.95] tracking-[-0.05em] text-white md:text-[72px] lg:text-[96px]">Tarife</h2>
              <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center md:gap-3">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={goPrevTarife}
                    aria-label="Tarife anterioare"
                    className="ads-btn-primary inline-flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full"
                  >
                    <span className="text-[21px] leading-none">←</span>
                  </button>
                  <button
                    type="button"
                    onClick={goNextTarife}
                    aria-label="Tarife următoare"
                    className="ads-btn-primary inline-flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full"
                  >
                    <span className="text-[21px] leading-none">→</span>
                  </button>
                </div>
                <a
                  href="#contact"
                  className="ads-btn-primary inline-flex min-h-[44px] w-full items-center justify-center rounded-full px-4 py-2 text-[18px] font-semibold sm:w-auto sm:px-5 sm:text-[21px]"
                >
                  Programează-te
                </a>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2 text-[21px] text-white">
              <span className="rounded-full border border-[rgba(79,127,71,0.25)] px-3 py-1">Preturi transparente</span>
              <span className="rounded-full border border-[rgba(79,127,71,0.25)] px-3 py-1">Fara costuri ascunse</span>
              <span className="rounded-full border border-[rgba(79,127,71,0.25)] px-3 py-1">Consultatie initiala disponibila</span>
            </div>

            <div className="mt-8 w-full overflow-hidden" {...tarifeSwipe}>
              <div
                className="flex w-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ transform: `translateX(-${activeTarifeIndex * 100}%)` }}
              >
                {pricingData.map((category) => (
                  <article key={category.category} className="min-h-[480px] w-full shrink-0 rounded-[20px] border border-[rgba(10,10,10,0.08)] bg-white p-6 md:h-[620px] md:p-7 lg:p-8">
                    <h3 className="text-[21px] font-semibold leading-[1.1] text-white">{category.category}</h3>
                    <div className="mt-5 space-y-0">
                      {category.items.slice(0, 7).map((entry) => (
                        <div key={`${category.category}-${entry.name}`} className="group flex items-end gap-3 py-[8px] transition-colors duration-200 hover:bg-[rgba(79,127,71,0.05)]">
                          <p className="text-[21px] font-bold leading-none text-[#303030] md:text-[21px]">
                            {entry.name}
                          </p>
                          <span className="mb-[6px] flex-1 border-b border-dotted border-[rgba(10,10,10,0.18)]" />
                          <p className="pl-8 text-right text-[21px] font-bold leading-none text-white md:pl-10 md:text-[21px]">{entry.price}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 rounded-[16px] border border-[rgba(79,127,71,0.2)] bg-[rgba(79,127,71,0.04)] p-4">
                      <p className="text-[21px] font-semibold text-white">Programează-te acum</p>
                      <p className="mt-1 text-[21px] text-white">Primeste o evaluare personalizata</p>
                      <a href="#contact" className="mt-3 inline-flex h-[42px] items-center rounded-full bg-[#0A0A0A] px-5 text-[21px] font-semibold text-white">Solicita programare</a>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              {pricingData.map((_, idx) => (
                <span key={`tarife-page-dot-${idx}`} className={`h-2 w-2 rounded-full ${activeTarifeIndex === idx ? "bg-[#88A875]" : "bg-white/30"}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="echipa" data-anim="section" data-theme="light" className="overflow-visible bg-[#ececec] pb-[90px] pt-[10px] lg:pb-[140px]">
        <TeamBentoBanner
          doctorSrc={labDoctorBannerImage.src}
          doctorAlt="Echipa laboratorului dentar Alverna Dental Studio"
          leftHeadline={"laborator\ndentar"}
          showScanCard={false}
        />
      </section>

      <section data-anim="section" className="bg-[#ececec] pb-[90px] pt-[10px] lg:pb-[140px]">
        <div className="mx-auto w-full max-w-[1680px] px-4 md:px-8 lg:px-[96px]">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-start">
            <h2 className="text-[32px] font-semibold leading-[0.9] tracking-[-3px] sm:text-[48px] md:text-[64px] lg:text-[76px]">
              Cazuri <span className="text-white">mai în detaliu</span>
              <br />
              <span className="text-white">înainte și după</span>
            </h2>
            <Link
              href="/cazuri/"
              className="rounded-full bg-black px-6 py-2 text-[21px] font-semibold text-white sm:mt-8"
            >
              Vezi toate
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-[3px] overflow-hidden rounded-[18px] md:grid-cols-[1fr_1fr_2fr] lg:mt-12">
            <article className="relative h-[min(70vw,400px)] rounded-l-[18px] bg-black sm:h-[460px] md:h-[587px]">
              <LazyVideo src="/cazuri-1.mp4" poster="/services/exam-male.png" ariaLabel="Caz tratat — vedere generală" />
            </article>
            <article className="relative h-[min(70vw,400px)] bg-black sm:h-[460px] md:h-[587px]">
              <LazyVideo src="/cori-angel.mp4" poster="/services/smile-mirror.png" ariaLabel="Caz tratat — restaurare completă" loadDelayMs={400} />
            </article>
            <article className="relative h-[min(70vw,400px)] rounded-r-[18px] bg-black sm:h-[460px] md:h-[587px]">
              <LazyVideo src="/cazuri-2.mp4" poster="/services/whitening-2.png" ariaLabel="Caz tratat — albire și aliniere" loadDelayMs={200} />
            </article>
          </div>
        </div>
      </section>

      <section id="contact" ref={contactSectionRef} data-anim="section" className="relative w-full overflow-hidden bg-[#0A0A0A] py-20 md:py-[120px]">
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-120px] top-1/2 z-0 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#4E7044] opacity-45 blur-[120px] max-md:scale-75 max-md:opacity-30 [will-change:transform] animate-[contact-glow-drift_10s_ease-in-out_infinite]"
        />
        <div
          ref={contactSpotlightRef}
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 [will-change:transform]"
          style={{
            background: "radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(78,112,68,0.22), transparent 35%)",
          }}
        />

        <div className="relative z-10 mx-auto grid w-full max-w-[1680px] grid-cols-1 gap-12 px-4 md:px-8 lg:grid-cols-[430px_1fr] lg:gap-20 lg:px-[96px]">
          <ContactFormCard source="home-page" />

          <div className="pt-0 text-white lg:pt-8">
            <h3 className="max-w-[720px] text-[32px] font-semibold leading-[1.04] tracking-[-0.04em] md:text-[44px]">Primul pas spre un zâmbet sănătos începe aici.</h3>
            <p className="mt-5 max-w-[680px] text-[21px] leading-[1.65] text-white">
              Echipa Alverna Dental Studio te ajută să alegi tratamentul potrivit, fără stres și fără presiune.
            </p>
            <div className="mt-8 inline-block rounded-[16px] border border-white/20 bg-white/5 px-5 py-4">
              <p className="text-[21px] font-semibold text-white">4.8 ★★★★★</p>
              <p className="mt-1 text-[21px] text-white">Peste 9000 de pacienți mulțumiți</p>
            </div>
            <a
              href={`tel:${CLINIC.phoneTel}`}
              className="mt-7 inline-block text-[21px] text-white underline decoration-[#9fc48f]/50 underline-offset-4 hover:decoration-white"
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
