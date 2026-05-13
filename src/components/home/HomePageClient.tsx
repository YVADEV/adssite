"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import ServicesDropdown from "@/components/nav/ServicesDropdown";
import SiteFooter from "@/components/layout/SiteFooter";
import { services } from "@/config/services";
import heroCardThumb from "@/assets/vladuta lupau.png";
import vdScaun from "@/assets/VDscaun.png";
import alvernaLogo from "@/assets/alverna-logo.png";
import teamBannerImage from "@/assets/cazuri/Banner/Andreea de folosit 2.png";
import adsPaulaImage from "@/assets/cazuri/Banner/adsPaula.png";
import appPromoImage from "@/assets/cazuri/Banner/app.png";
import cazA7407853 from "@/assets/cazuri/A7407853 2.png";
import cazA7408097 from "@/assets/cazuri/A7408097 2.png";
import cazA7408137 from "@/assets/cazuri/A7408137 2.png";
import cazA7407760 from "@/assets/cazuri/A7407760 2.png";
import cazA7407944 from "@/assets/cazuri/A7407944 2.png";
import cazA7408160 from "@/assets/cazuri/A7408160-2 2.png";

const caseImages = [
  cazA7408097.src,
  cazA7407853.src,
  cazA7408137.src,
  cazA7407760.src,
  cazA7407944.src,
  cazA7408160.src,
];
const reviews = [
  {
    name: "Andreea Nisipeanu",
    meta: "3 recenzii",
    time: "acum o luna",
    text: "Recomand cu mare incredere Clinica Alverna Dental! De la prima vizita am fost intampinata cu multa caldura si profesionalism. Clinica este impecabil de curata si dotata cu aparatura foarte moderna. Profesionalismul, atentia la detalii si dedicarea echipei sunt la nivel inalt. Va multumesc!",
  },
  {
    name: "Carmen Ilea",
    meta: "4 recenzii",
    time: "acum 2 luni",
    text: "Am fost impresionata de profesionalismul d-nei dr Andreea Parvu. Este o persoana foarte atenta la detalii, executa cu mare finete toate tipurile de lucrari: obturatii, igienizare. Multumesc! Studioul este foarte curat si dotat cu tehnologie de ultima generatie. Am sa revin cu placere.",
  },
  {
    name: "Denisa Tanase",
    meta: "2 recenzii · O fotografie",
    time: "acum 3 luni",
    text: "Am avut parte de o experienta buna si usoara. Am fost tratata cu respect si prietenie, mi s-a explicat in detaliu fiecare pas si mi s-a raspuns la fiecare intrebare. Ii multumesc pe aceasta cale doamnei doctor Parvu pentru atentie si profesionalism, la fel si doamnei asistente.",
  },
];

const partnerReviewCards = [
  { name: "Andreea Nisipeanu", rating: "4.8", text: "Recomand cu mare incredere. Profesionalism, caldura si rezultate excelente." },
  { name: "Carmen Ilea", rating: "5.0", text: "Impresionata de atentie la detalii si de tehnologia moderna din clinica." },
  { name: "Denisa Tanase", rating: "5.0", text: "Experienta usoara, comunicare clara si echipa foarte prietenoasa." },
  { name: "Mihai R.", rating: "4.9", text: "Programare rapida, tratament fara stres, recomand cu incredere." },
  { name: "Bianca L.", rating: "5.0", text: "Totul impecabil, de la consultatie la rezultate finale." },
  { name: "Radu P.", rating: "4.9", text: "Servicii premium, medici foarte bine pregatiti si empatici." },
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
  { value: "1000+", label: "Cazuri complexe", idx: "01" },
  { value: "100%", label: "Pacienti multumiti", idx: "02" },
];
const recommendationClips = ["/cazuri-1.mp4", "/cazuri-2.mp4"];
const recommendationClipMeta = [
  {
    date: "24 Jan 2026",
    title: "All on 4",
    description: "Reabilitare completa cu implanturi, rezultat stabil si estetic.",
  },
  {
    date: "02 Feb 2026",
    title: "Smile Design",
    description: "Tratament complex pentru armonie dentara si zambet natural.",
  },
];
const missionCards = [
  "Ne ghidam dupa confortul pacientului in fiecare etapa a tratamentului.",
  "Fiecare decizie clinica este explicata clar si transparent pentru pacient.",
  "Combinam tehnologia moderna cu grija reala pentru rezultate durabile.",
  "Planurile de tratament sunt personalizate pentru fiecare caz in parte.",
];

function SectionTitle({ left, title, subtitle }: { left: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto grid w-full max-w-[1680px] grid-cols-1 px-4 md:px-6 lg:grid-cols-[140px_520px_620px] lg:px-8">
      <span className="pt-1 text-[12px] font-medium leading-[1.2] opacity-60 md:text-[14px]">{left}</span>
      <div>
        <h2 data-anim="text" className="text-[42px] font-extrabold leading-[0.96] tracking-[-0.045em] md:text-[72px] lg:text-[96px]">
          {title}
        </h2>
        {subtitle ? <p className="mt-2 text-[18px] font-semibold">{subtitle}</p> : null}
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
  const contactSectionRef = useRef<HTMLElement>(null);
  const contactSpotlightRef = useRef<HTMLDivElement>(null);
  const footerSectionRef = useRef<HTMLElement>(null);
  const footerSpotlightRef = useRef<HTMLDivElement>(null);
  const [activeServicesDot, setActiveServicesDot] = useState(0);
  const [activeTarifeIndex, setActiveTarifeIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAparatOpen, setMobileAparatOpen] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);

  useEffect(() => {
    let lastY = typeof window !== "undefined" ? window.scrollY : 0;
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY;
        if (y < 80) {
          setHeaderHidden(false);
        } else if (delta > 6) {
          setHeaderHidden(true);
        } else if (delta < -6) {
          setHeaderHidden(false);
        }
        lastY = y;
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const overlay = menuOverlayRef.current;
    const page = pageContentRef.current;
    const top = menuTopLineRef.current;
    const mid = menuMidLineRef.current;
    const bottom = menuBottomLineRef.current;
    if (!overlay || !page || !top || !mid || !bottom) return;

    const ease = "cubic-bezier(0.16, 1, 0.3, 1)";
    const menuItems = overlay.querySelectorAll<HTMLElement>("[data-menu-item]");
    let frame = 0;
    let tl: gsap.core.Timeline | null = null;

    if (menuOpen) {
      setMenuVisible(true);
      document.body.style.overflow = "hidden";
      frame = requestAnimationFrame(() => {
        gsap.set(overlay, { opacity: 0, scale: 0.98, pointerEvents: "auto" });
        gsap.set(menuItems, { opacity: 0, y: 40 });
        tl = gsap.timeline({ defaults: { ease } });
        tl.to(overlay, { opacity: 1, scale: 1, duration: 0.42, ease })
          .to(page, { opacity: 0.2, duration: 0.42, ease }, "<")
          .to(top, { y: 8, rotate: 45, duration: 0.36, ease }, "-=0.34")
          .to(mid, { opacity: 0, scaleX: 0.35, duration: 0.3, ease }, "<")
          .to(bottom, { y: -8, rotate: -45, duration: 0.36, ease }, "<")
          .to(menuItems, { opacity: 1, y: 0, stagger: 0.08, duration: 0.62, ease }, "-=0.16");
      });
    } else if (menuVisible) {
      tl = gsap.timeline({ defaults: { ease } });
      tl.to(menuItems, { opacity: 0, y: 20, stagger: { each: 0.07, from: "end" }, duration: 0.34, ease })
        .to(overlay, { opacity: 0, duration: 0.38, ease }, "-=0.08")
        .to(page, { opacity: 1, duration: 0.38, ease }, "<")
        .to(top, { y: 0, rotate: 0, duration: 0.32, ease }, "<")
        .to(mid, { opacity: 1, scaleX: 1, duration: 0.28, ease }, "<")
        .to(bottom, { y: 0, rotate: 0, duration: 0.32, ease }, "<")
        .add(() => {
          setMenuVisible(false);
        });
      document.body.style.overflow = "";
    } else {
      gsap.set(overlay, { opacity: 0, pointerEvents: "none" });
      document.body.style.overflow = "";
    }

    return () => {
      cancelAnimationFrame(frame);
      tl?.kill();
      document.body.style.overflow = "";
    };
  }, [menuOpen, menuVisible]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

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

    return () => ctx.revert();
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
    <div ref={rootRef} className="ads-page overflow-x-hidden bg-[#0f1115] text-white [scroll-behavior:smooth]">
      <div ref={menuOverlayRef} className={`fixed inset-0 z-[8888] bg-[#f5f5f5] ${menuVisible ? "" : "pointer-events-none"}`}>
          <div className="relative z-10 mx-auto flex h-full w-full max-w-[1920px] flex-col overflow-y-auto px-6 py-6 md:px-10">
            <div className="flex items-center justify-between">
              <span className="text-[22px] font-bold tracking-[-0.03em] text-[#0A0A0A]">alverna®</span>
              <button type="button" aria-label="Close menu" onClick={() => setMenuOpen(false)} className="relative h-10 w-10">
                <span className="absolute left-1/2 top-1/2 h-[2px] w-7 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#0A0A0A]" />
                <span className="absolute left-1/2 top-1/2 h-[2px] w-7 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-[#0A0A0A]" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center">
              <div className="pl-[6vw] text-right md:pl-[10vw]">
            {[
              { href: "/", label: "Acasă" },
              { href: "/cazuri", label: "Cazuri" },
              { href: "/tarife", label: "Tarife" },
              { href: "/echipa", label: "Echipa" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                data-menu-item
                onClick={() => setMenuOpen(false)}
                className="block text-right text-[clamp(42px,8vw,96px)] font-extrabold leading-[0.95] tracking-[-0.035em] text-[#0A0A0A] transition duration-250 hover:translate-y-[-2px]"
              >
                {item.label}
              </a>
            ))}
              <button
                type="button"
                aria-label="Deschide lista de servicii"
                aria-expanded={mobileServicesOpen}
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className="mt-2 flex w-full items-center justify-end gap-3 rounded-[12px] px-3 py-2 text-right text-[clamp(42px,8vw,96px)] font-extrabold leading-[0.95] tracking-[-0.035em] text-[#0A0A0A]"
              >
                <span>Servicii</span>
                <span className="text-[22px]">{mobileServicesOpen ? "−" : "+"}</span>
              </button>
              <div className={`overflow-hidden transition-[max-height,opacity] duration-300 ${mobileServicesOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="pl-3 pt-1">
                  {services.map((service) =>
                    service.children?.length ? (
                      <div key={service.slug}>
                        <button
                          type="button"
                          aria-label={`Deschide submeniul ${service.title}`}
                          aria-expanded={mobileAparatOpen}
                          onClick={() => setMobileAparatOpen((prev) => !prev)}
                          className="flex min-h-[48px] w-full items-center justify-end gap-2 rounded-[10px] px-2 text-right text-[18px] font-semibold text-[#0A0A0A]"
                        >
                          <span>{service.title}</span>
                          <span>{mobileAparatOpen ? "−" : "+"}</span>
                        </button>
                        <div className={`overflow-hidden transition-[max-height,opacity] duration-300 ${mobileAparatOpen ? "max-h-[180px] opacity-100" : "max-h-0 opacity-0"}`}>
                          {(service.children ?? []).map((child) => (
                            <a key={child.slug} href={child.href} onClick={() => setMenuOpen(false)} className="block min-h-[48px] rounded-[10px] px-3 py-3 text-right text-[15px] text-[#1f1f1f]">
                              {child.title}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a key={service.slug} href={service.href} onClick={() => setMenuOpen(false)} className="block min-h-[48px] rounded-[10px] px-2 py-3 text-right text-[17px] font-medium text-[#0A0A0A]">
                        {service.title}
                      </a>
                    ),
                  )}
                </div>
              </div>
              </div>
            </nav>
            <div className="flex flex-col gap-4 pt-6 text-[#0A0A0A] sm:flex-row sm:items-end sm:justify-between">
              <div className="text-[13px] leading-[1.5]">
                <a href="tel:+40748085933">+40 748 085 933</a>
                <a href="mailto:contact@alvernadental.com">contact@alvernadental.com</a>
              </div>
              <div className="text-right text-[12px] leading-[1.6]">
                <div className="flex justify-end gap-5">
                  <a href="#">Privacy Policy</a>
                  <a href="#">Terms of Service</a>
                </div>
                <p className="mt-1">© Alverna Dental Studio</p>
              </div>
            </div>
          </div>
        </div>

      <div ref={pageContentRef}>
      <header
        data-intro="nav"
        className={`sticky top-0 z-50 h-[72px] w-full bg-[#0f1115]/95 text-white shadow-[0_1px_0_rgba(255,255,255,0.06)] backdrop-blur transition-transform duration-300 ease-out ${headerHidden ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="relative mx-auto flex h-full w-full items-center justify-between px-3 text-[17px] font-semibold sm:px-4 md:px-6 lg:px-8">
          <a
            href="mailto:contact@alvernadental.com?subject=Solicita%20o%20programare"
            className="relative z-10 inline-flex items-center gap-2 text-[14px] font-bold tracking-[-0.02em] text-white transition duration-200 hover:opacity-80 sm:text-[16px] lg:text-[20px] lg:tracking-[-0.4px]"
          >
            <span aria-hidden className="text-[16px] sm:text-[18px]">✉</span>
            <span>Programeaza-te acum</span>
          </a>
          <nav
            className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center tracking-[-0.01em] lg:flex"
            style={{ columnGap: "clamp(40px, 7vw, 140px)" }}
          >
            <a className="pointer-events-auto transition-opacity duration-200 hover:opacity-75" href="/">Acasă</a>
            <a className="pointer-events-auto transition-opacity duration-200 hover:opacity-75" href="/cazuri">Cazuri</a>
            <a className="pointer-events-auto transition-opacity duration-200 hover:opacity-75" href="/tarife">Tarife</a>
            <a className="pointer-events-auto transition-opacity duration-200 hover:opacity-75" href="/echipa">Echipa</a>
            <span className="pointer-events-auto"><ServicesDropdown isDark /></span>
            <a className="pointer-events-auto transition-opacity duration-200 hover:opacity-75" href="/contact">Contact</a>
          </nav>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative z-10 flex h-12 w-12 flex-col justify-center gap-[6px]"
          >
            <span ref={menuTopLineRef} className="h-[2px] w-full bg-white" />
            <span ref={menuMidLineRef} className="h-[2px] w-full bg-white" />
            <span ref={menuBottomLineRef} className="h-[2px] w-full bg-white" />
          </button>
        </div>
      </header>

      <section
        data-anim="section"
        className="mx-auto mt-0 w-full max-w-[1680px] overflow-visible px-4 pb-[72px] md:px-6 md:pb-[96px] lg:px-8 lg:pb-[140px]"
      >
        <div className="relative left-1/2 h-[calc(100vh-72px)] w-screen -translate-x-1/2">
          <div data-intro="hero-media" className="relative h-full w-full overflow-hidden rounded-[32px]">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              data-anim="image"
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/hero1.mp4" type="video/mp4" />
            </video>
            <div data-intro="hero-title" className="absolute left-5 top-5 text-white md:left-7 md:top-7 lg:left-9 lg:top-9">
            <h1 className="max-w-[980px] text-[52px] font-extrabold leading-[0.92] tracking-[-0.05em] md:text-[84px] lg:text-[128px]">Alverna</h1>
            <p className="mt-1 max-w-[560px] text-[28px] font-bold leading-[0.95] tracking-[-0.04em] md:text-[40px] lg:text-[56px]">Dental Studio</p>
            <p className="mt-4 max-w-[700px] text-[14px] font-medium leading-[1.35] text-white/90 md:text-[16px]">
              Tratamente moderne, medici specializați, rezultate predictibile pentru un zâmbet sănătos și fără stres.
            </p>
          </div>

            <div className="absolute bottom-8 left-5 w-[280px] text-[12px] font-medium leading-[1.2] text-white md:bottom-12 md:left-7 md:text-[14px] lg:left-9">
              <p>Implantologie</p>
              <p className="mt-[12px]">Ortodontie</p>
              <p className="mt-[12px]">Inviseline</p>
              <p className="mt-[12px]">Aparat dentar</p>
            </div>

          </div>
        </div>

        <div data-intro="trust" className="mx-auto mt-[72px] w-full overflow-visible pb-[8px]">
          <div className="mb-[18px] flex text-[#95d682]">
            <span className="mr-[223px]">✚ Recenzii</span>
            <span>(2016-25©)</span>
          </div>
          <div data-anim-cards className="grid grid-cols-1 items-end gap-[10px] md:grid-cols-3 md:gap-3 lg:grid-cols-6 lg:gap-2">
            {partnerReviewCards.map((review) => (
              <div
                key={review.name}
                data-anim="card"
                className="ads-card flex h-[124px] min-w-[0] flex-col justify-between rounded-[18px] border border-[#f1f1f1] bg-white p-4 shadow-[-12px_-12px_24px_#ffffff,12px_12px_24px_rgba(0,0,0,0.08)] md:h-[132px] lg:h-[126px]"
              >
                <div className="flex items-center justify-between">
                  <p className="truncate pr-2 text-[11px] font-semibold text-[#0A0A0A]">{review.name}</p>
                  <p className="text-[11px] font-semibold text-[#d4a017]">{review.rating} ★</p>
                </div>
                <div>
                  <p className="line-clamp-3 text-[11px] leading-[1.25] text-[#4b4b4b]">{review.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cazuri" data-anim="section" className="bg-[#ececec] pb-[72px] pt-[120px] md:pb-[96px] lg:pb-[72px]">
        <SectionTitle left="(27)" title="Cazuri" subtitle="©2026" />
        <div className="mx-auto mt-3 w-full max-w-[1680px] px-4 text-[15px] font-normal leading-[1.5] text-[#121111] md:px-6 md:text-[16px] lg:px-8 lg:pl-[708px]">
          La Alverna Dental Studio dispunem de propriul laborator de tehnică dentară, ceea ce ne permite să controlăm îndeaproape calitatea lucrărilor și a materialelor folosite.
        </div>
        <div className="mx-auto mt-4 flex w-full max-w-[1680px] flex-wrap items-center justify-between gap-4 px-4 md:px-6 lg:px-8">
          <p className="text-[13px] text-[#4b4b4b]">Before / After · Implant + coroană – 3 luni</p>
          <div className="flex items-center gap-3">
            <button className="h-[42px] rounded-full border border-black/15 px-4 text-[13px] font-medium text-[#0A0A0A] transition duration-300 hover:scale-[1.02]">Vezi toate cazurile</button>
            <a
              href="mailto:contact@alvernadental.com?subject=Solicita%20o%20programare"
              className="inline-flex h-[42px] items-center rounded-full bg-black px-4 text-[13px] font-semibold text-white transition duration-300 hover:scale-[1.02]"
            >
              Programeaza-te
            </a>
          </div>
        </div>
        <div className="mx-auto mt-[64px] grid w-full max-w-[1680px] grid-cols-1 gap-4 px-4 md:grid-cols-2 md:gap-5 md:px-6 lg:grid-cols-3 lg:gap-6 lg:px-8">
          {caseImages.map((src, i) => (
            <motion.img key={src} src={src} alt="" data-anim="image" className="h-[430px] w-full rounded-[28px] object-cover lg:h-[560px]" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }} />
          ))}
        </div>
      </section>

      <section data-anim="section" className="bg-[#ececec] pb-[90px] pt-[30px] lg:pb-[180px]">
        <div className="mx-auto w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-[1fr_1fr]">
            <p className="text-sm">✚ Cabinet stomatologic Cluj</p>
            <h2 className="ads-section-title text-[64px] font-semibold leading-[0.95] tracking-[-2.4px] text-[#5b8b55]">Ce ne recomandă?</h2>
          </div>
          <div className="mt-[40px] grid grid-cols-1 gap-6 md:mt-[56px] md:grid-cols-[1fr_1fr] lg:mt-[74px]">
            <img src={vdScaun.src} alt="" data-anim="image" className="h-[630px] w-[385px] rounded-[12px] object-cover" />
            <p className="w-[520px] text-[16px] leading-[1.45] tracking-[-0.64px]">
              Ne menținem statutul de clinică stomatologică modernă, în cadrul căreia fiecare cabinet stomatologic Cluj este dotat cu aparatură medicală de ultimă generație.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-[8px] md:grid-cols-2 lg:mt-[-310px] lg:ml-[760px] lg:gap-[4px]">
            {advantages.map((a, idx) => (
              <article key={a.value} className="w-[380px] rounded-[18px] bg-[#f5f5f5] p-5">
                <div className="flex items-start justify-between">
                  <strong className="text-[56px] font-semibold leading-none tracking-[-2px] text-[#4f7f45]">{a.value}</strong>
                  <span className="text-xs opacity-40">{a.idx}</span>
                </div>
                <h3 className="mt-3 text-[34px] tracking-[-0.8px] text-[#4f7f45]">{a.label}</h3>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative mt-2 h-[396px] w-[267px] overflow-hidden rounded-[24px] bg-black"
                  style={{ boxShadow: "-12px -12px 24px #ffffff, 12px 12px 24px rgba(0,0,0,0.08)" }}
                >
                  <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full scale-[1.05] object-cover">
                    <source src={recommendationClips[idx]} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(0,0,0,0.68)]" />
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[rgba(0,0,0,0.6)] backdrop-blur-[2px]"
                    aria-label="Play clip"
                  >
                    <span className="ml-[2px] inline-block h-0 w-0 border-b-[10px] border-l-[16px] border-t-[10px] border-b-transparent border-l-white border-t-transparent" />
                  </motion.button>
                  <div className="absolute bottom-[16px] left-[16px] right-[16px] p-0">
                    <p className="text-[12px] text-[rgba(255,255,255,0.6)]">{recommendationClipMeta[idx].date}</p>
                    <h4 className="mt-[6px] text-[20px] font-semibold text-white">{recommendationClipMeta[idx].title}</h4>
                    <p className="mt-1 text-[14px] leading-[1.4] text-[rgba(255,255,255,0.8)]">{recommendationClipMeta[idx].description}</p>
                  </div>
                </motion.div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="servicii" className="overflow-hidden bg-[#121212] pb-0">
        <div className="mx-auto w-full max-w-[1680px] overflow-x-hidden rounded-[24px] bg-[#121212] px-5 py-12 text-white md:px-10 md:py-16 lg:px-24 lg:py-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[120px_minmax(0,1fr)] lg:gap-16">
            <p className="w-[120px] text-[16px] leading-[1.25] text-white">+ Cabinet stomatologic cluj</p>
            <div className="min-w-0">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <h2 className="text-[44px] font-bold leading-[0.95] tracking-[-0.05em] text-white md:text-[72px] lg:text-[96px]">Servicii ••(4)</h2>
                <div className="flex items-center gap-2 md:gap-3">
                  <button
                    type="button"
                    onClick={goPrevServicePage}
                    aria-label="Servicii anterioare"
                    className="ads-btn-primary inline-flex h-[44px] w-[44px] items-center justify-center rounded-full"
                  >
                    <span className="text-[20px] leading-none">←</span>
                  </button>
                  <button
                    type="button"
                    onClick={goNextServicePage}
                    aria-label="Servicii următoare"
                    className="ads-btn-primary inline-flex h-[44px] w-[44px] items-center justify-center rounded-full"
                  >
                    <span className="text-[20px] leading-none">→</span>
                  </button>
                  <a
                    href="mailto:contact@alvernadental.com?subject=Solicita%20o%20programare"
                    className="ads-btn-primary inline-flex h-[44px] items-center justify-center rounded-full px-5 text-[13px] font-semibold"
                  >
                    Programează-te
                  </a>
                </div>
              </div>
              <div className="mt-8 w-full max-w-full overflow-hidden">
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
                          <span className="truncate pr-4 text-[20px] font-normal text-white md:text-[24px] lg:text-[28px]">{service.title}</span>
                          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(255,255,255,0.18)] text-[18px] leading-none text-white">+</span>
                        </motion.a>
                      ))}
                    </div>
                  ))}
                </div>
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
        <div className="mx-auto w-full max-w-[1680px] px-5 pb-[140px] pt-[140px] md:px-10 lg:px-[96px]">
          <div className="mb-8 flex items-center justify-between text-[12px] text-[#0A0A0A]">
            <span>Misiunea noastra</span>
            <span>@alvernadentalstudio</span>
          </div>
          <h2 className="mb-4 text-[48px] font-semibold leading-[1.1] text-[#0A0A0A]">Misiunea Noastră</h2>
          <p className="mb-16 max-w-[520px] text-[14px] leading-[1.6] text-[#555555]">
            Dacă ar fi să discutăm în termeni filozofici, ne întrebăm adeseori de ce facem ceea ce facem, care este motivul pentru care muncim din greu și petrecem multe ore într-un cabinet stomatologic.
          </p>

          <div className="mb-10 flex w-full items-center justify-between gap-6">
            {missionCards.map((text, idx) => (
              <article
                key={`mission-card-${idx}`}
                className="flex h-[126px] w-[313px] items-center gap-3 rounded-[32px] bg-[#F5F5F5] p-4"
                style={{ boxShadow: "-4px -4px 10px rgba(255,255,255,0.55), 8px 10px 16px rgba(0,0,0,0.08)" }}
              >
                <div className="relative h-8 w-8 overflow-hidden rounded-[8px] bg-black">
                  <video autoPlay muted loop playsInline className="h-full w-full object-cover">
                    <source src={recommendationClips[idx % recommendationClips.length]} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/35" />
                  <span className="absolute left-1/2 top-1/2 inline-block h-0 w-0 -translate-x-1/2 -translate-y-1/2 border-b-[4px] border-l-[6px] border-t-[4px] border-b-transparent border-l-white border-t-transparent" />
                </div>
                <p className="text-[12px] leading-[1.4] text-[#0A0A0A]">{text}</p>
              </article>
            ))}
          </div>

          <div className="relative h-[420px] w-full overflow-hidden rounded-[24px]">
            <video autoPlay muted loop playsInline preload="auto" data-anim="image" className="h-full w-full object-cover">
              <source src="/hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-4">
              <button className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[28px] text-[#4F7F47]">▶</button>
              <span className="text-[16px] font-medium text-white">Descopera cabinetul nostru</span>
            </div>
          </div>
        </div>
      </section>

      <section data-anim="section" className="bg-[#ececec] pb-[120px]">
        <SectionTitle left="✚ Testimoniale" title="Recenzii" subtitle="©2025" />
        <div className="mx-auto mt-2 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
          <p className="text-[16px] font-semibold text-[#0A0A0A]">Scor mediu: 4.8 ⭐</p>
        </div>
        <div className="mx-auto mt-10 grid w-full max-w-[1680px] grid-cols-1 gap-[20px] px-4 md:grid-cols-2 md:px-8 lg:grid-cols-4 lg:px-12">
          <article
            className="flex min-h-[313px] flex-col rounded-[18px] bg-[#f5f5f5] p-[30px]"
            style={{ boxShadow: "-4px -4px 10px rgba(255,255,255,0.5), 8px 10px 16px rgba(0,0,0,0.08)" }}
          >
            <div className="flex items-end gap-2">
              <strong className="text-[56px] font-semibold leading-none tracking-[-3.36px]">4,8</strong>
              <span className="mb-2 text-base opacity-60">/5</span>
              <img src="https://www.google.com/favicon.ico" alt="Google" className="mb-2 h-6 w-6" />
            </div>
            <div className="mx-auto mt-[55px] w-full max-w-[270px] space-y-2 text-justify text-[14px] leading-[1.45] text-[#111111]">
              <p>Adresă: Strada Alverna 33, 400469 Cluj-Napoca</p>
              <p>Număr de telefon: 0376 448 810</p>
              <p>Program:</p>
              <p>Deschis · Închide la 21</p>
            </div>
            <img src={alvernaLogo.src} alt="Alverna logo" className="mx-auto mt-auto pt-4 h-auto w-[220px] object-contain" />
          </article>

          {reviews.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: "easeOut" }}
              className="flex h-full min-h-[313px] flex-col rounded-[18px] bg-[#f5f5f5] p-[24px]"
              style={{ boxShadow: "-4px -4px 10px rgba(255,255,255,0.5), 8px 10px 16px rgba(0,0,0,0.08)" }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[32px] font-semibold leading-[1.05]">{r.name}</p>
                  <p className="mt-1 text-[14px] opacity-60">{r.meta}</p>
                  <p className="mt-1 text-[14px] opacity-60">{r.time}</p>
                </div>
                <span className="text-3xl opacity-40">+</span>
              </div>
              <p className="mt-6 text-[16px] leading-[1.5] tracking-[-0.2px] text-[#111111]">{r.text}</p>
              <p className="mt-auto pt-4 text-[18px] leading-none tracking-[0.08em] text-[#f5b301]">★★★★★</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section data-anim="section" className="bg-[#f5f5f5]">
        <div className="mx-auto w-full max-w-[1680px] px-5 pb-[120px] pt-[120px] md:px-10 lg:px-[96px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:flex lg:items-start lg:justify-between lg:gap-16">
            {[
              ["15", "Ani de activitate"],
              ["9000", "Pacienti"],
              ["3000", "Pacienti internationali"],
              ["15 de ani", "Medici cu peste 15 ani de experienta"],
            ].map(([n, t]) => (
              <article key={n} className="text-center md:text-left">
                <h3 className="text-[48px] font-semibold leading-none text-[#0A0A0A] md:text-[56px] lg:text-[64px]">{n}</h3>
                <p className="mx-auto mt-2 max-w-[120px] text-[12px] text-[#777777] md:mx-0">{t}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-6 text-center md:mt-12 md:grid md:grid-cols-2 md:items-start md:text-left lg:mt-10 lg:flex lg:flex-row lg:items-start lg:justify-between">
            <p className="mt-[64px] text-[12px] text-[#0A0A0A]">@alvernadental</p>
            <p className="mx-auto max-w-[520px] text-[14px] leading-[1.6] text-[#555555] md:mx-0">
              O vizită într-un cabinet stomatologic Cluj, oricât de modern și bine echipat ar fi, nu aduce rezultatele dorite fără o echipă la calitate superioară.
            </p>
          </div>
        </div>
      </section>

      <section data-anim="section" className="home-banner-light-cards bg-[#F5F5F5]">
        <div className="mx-auto grid w-full max-w-[1680px] grid-cols-1 gap-[6px] px-5 pb-[120px] md:grid-cols-2 md:px-10 lg:grid-cols-[440px_1fr_1fr] lg:px-[96px]">
          <article className="relative isolate z-20 h-[560px] overflow-visible rounded-[24px] bg-[#0A0A0A] p-[40px]">
            <div className="absolute inset-0 z-[1] overflow-hidden rounded-[24px]">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.55)_100%)]" />
            </div>
            <div className="relative z-[40] text-[14px] text-white/70">
              <p>Echipa</p>
              <p className="mt-1">Faceti cunostinta cu echipa</p>
            </div>
            <img
              src={teamBannerImage.src}
              alt=""
              className="pointer-events-none absolute bottom-0 right-[-35px] z-[20] h-[660px] w-auto object-contain"
            />
            <h3 className="absolute bottom-[92px] left-[36px] z-[30] whitespace-pre-line text-[64px] font-bold leading-[0.88] text-white">
              {"alverna\ndental\nstudio"}
            </h3>
            <p className="absolute bottom-[46px] left-1/2 z-[40] w-[300px] -translate-x-1/2 text-center text-[22px] leading-[1.15] text-white">
              Un zambet cu incredere
              <br />
              cabinet stomatologic
            </p>
            <p className="absolute bottom-[24px] left-[40px] z-[40] text-[14px] text-white/70">echipa noastra ↗</p>
            <p className="absolute bottom-[24px] right-[40px] z-[40] text-[14px] text-white/70">We do it all.</p>
          </article>

          <article className="relative z-10 h-[560px] rounded-[16px] bg-white p-[44px]">
            <div className="absolute inset-0 rounded-[16px] bg-[radial-gradient(circle_at_24%_22%,rgba(78,112,68,0.09),transparent_55%)]" />
            <div className="relative z-10 flex h-full flex-col">
              <p className="text-[14px] text-[#4b4b4b]">Clinica dentara cluj</p>
              <h3 className="mt-4 whitespace-pre-line text-[46px] font-semibold leading-[1.05] text-[#0A0A0A]">
                {"Puterea zambetului\ncare inspira incredere"}
              </h3>
              <div className="mt-8">
                <p className="text-[13px] text-[#4b4b4b]">Cabinet stomatologic cluj</p>
                <p className="mt-1 text-[40px] font-semibold text-[#0A0A0A]">
                  4.8 <span className="text-[22px] text-[#f5a623]">★★★★★</span>
                </p>
              </div>
              <div className="mt-auto rounded-[12px] bg-[#f7f7f7] p-4">
                <p className="text-[16px] leading-[1.3] text-[#f5a623]">★★★★★</p>
                <div className="mt-3 flex items-center gap-2">
                  <img src={heroCardThumb.src} alt="" className="h-8 w-8 rounded-full object-cover" />
                  <span className="text-[12px] text-[#4b4b4b]">Ion Ionut</span>
                </div>
              </div>
            </div>
          </article>

          <div className="relative z-10 flex h-[560px] flex-col gap-[6px]">
            <article className="flex h-[275px] flex-col items-center justify-center rounded-[16px] bg-white px-6 text-center">
              <div className="relative flex h-[118px] w-[118px] items-center justify-center rounded-full border-[10px] border-[#4E7044]">
                <div className="flex h-[82px] w-[82px] items-center justify-center rounded-full bg-white text-[32px] font-semibold text-[#4E7044]">100</div>
              </div>
              <p className="mt-4 text-[16px] font-semibold text-[#0A0A0A]">Scanare 3D</p>
              <p className="mt-1 text-[12px] text-[#4b4b4b]">We prioritize performance without sacrificing visual appeal or functionality.</p>
            </article>

            <article className="h-[275px] rounded-[16px] bg-white p-6">
              <h3 className="text-[56px] font-bold leading-none text-[#0A0A0A]">9000</h3>
              <p className="mt-2 text-[14px] text-[#4b4b4b]">Pacienti multumiti</p>
              <p className="mt-2 text-[16px] text-[#f5a623]">★★★★★</p>
              <img src={cazA7407760.src} alt="" className="mt-4 h-[110px] w-full rounded-[10px] object-cover" />
            </article>
          </div>
        </div>
      </section>

      <section id="tarife" className="relative w-full overflow-hidden bg-[#f5f5f5] pb-14 md:pb-20 lg:pb-[120px]">
        <div className="mx-auto w-full max-w-[1680px] bg-[#f5f5f5] px-5 py-12 md:px-10 md:py-16 lg:px-[96px] lg:py-[96px]">
          <div className="w-full">
            <p className="text-[16px] leading-[1.25] text-[#0A0A0A]">+ Tarife</p>
            <div className="mt-2 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="text-[44px] font-bold leading-[0.95] tracking-[-0.05em] text-[#0A0A0A] md:text-[72px] lg:text-[96px]">Tarife</h2>
              <div className="flex items-center gap-2 md:gap-3">
                <button
                  type="button"
                  onClick={goPrevTarife}
                  aria-label="Tarife anterioare"
                  className="ads-btn-primary inline-flex h-[44px] w-[44px] items-center justify-center rounded-full"
                >
                  <span className="text-[20px] leading-none">←</span>
                </button>
                <button
                  type="button"
                  onClick={goNextTarife}
                  aria-label="Tarife următoare"
                  className="ads-btn-primary inline-flex h-[44px] w-[44px] items-center justify-center rounded-full"
                >
                  <span className="text-[20px] leading-none">→</span>
                </button>
                <a
                  href="mailto:contact@alvernadental.com?subject=Solicita%20o%20programare"
                  className="ads-btn-primary inline-flex h-[44px] items-center justify-center rounded-full px-5 text-[13px] font-semibold"
                >
                  Programează-te
                </a>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2 text-[12px] text-[#4F7F47]">
              <span className="rounded-full border border-[rgba(79,127,71,0.25)] px-3 py-1">Preturi transparente</span>
              <span className="rounded-full border border-[rgba(79,127,71,0.25)] px-3 py-1">Fara costuri ascunse</span>
              <span className="rounded-full border border-[rgba(79,127,71,0.25)] px-3 py-1">Consultatie initiala disponibila</span>
            </div>

            <div className="mt-8 w-full overflow-hidden">
              <div
                className="flex w-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ transform: `translateX(-${activeTarifeIndex * 100}%)` }}
              >
                {pricingData.map((category) => (
                  <article key={category.category} className="h-[620px] w-full shrink-0 rounded-[20px] border border-[rgba(10,10,10,0.08)] bg-white p-6 md:p-7 lg:p-8">
                    <h3 className="text-[24px] font-semibold leading-[1.1] text-[#0A0A0A]">{category.category}</h3>
                    <div className="mt-5 space-y-0">
                      {category.items.slice(0, 7).map((entry, idx) => (
                        <div key={`${category.category}-${entry.name}`} className="group flex items-end gap-3 py-[8px] transition-colors duration-200 hover:bg-[rgba(79,127,71,0.05)]">
                          <p className="text-[18px] font-bold leading-none text-[#303030] md:text-[20px]">
                            {entry.name}
                            {idx === 0 ? <span className="ml-2 text-[11px] text-[#4F7F47]">de la</span> : null}
                            {idx === 1 ? <span className="ml-2 text-[11px] text-[#4F7F47]">cel mai popular</span> : null}
                            {idx === 2 ? <span className="ml-2 text-[11px] text-[#4F7F47]">rapid / fara durere</span> : null}
                          </p>
                          <span className="mb-[6px] flex-1 border-b border-dotted border-[rgba(10,10,10,0.18)]" />
                          <p className="pl-8 text-right text-[18px] font-bold leading-none text-[#0A0A0A] md:pl-10 md:text-[20px]">{entry.price}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 rounded-[16px] border border-[rgba(79,127,71,0.2)] bg-[rgba(79,127,71,0.04)] p-4">
                      <p className="text-[18px] font-semibold text-[#0A0A0A]">Programeaza-te acum</p>
                      <p className="mt-1 text-[13px] text-[#555555]">Primeste o evaluare personalizata</p>
                      <a href="mailto:contact@alvernadental.com?subject=Solicita%20o%20programare" className="mt-3 inline-flex h-[42px] items-center rounded-full bg-[#0A0A0A] px-5 text-[14px] font-semibold text-white">Solicita programare</a>
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

      <section id="echipa" data-anim="section" className="bg-[#ececec] pb-[90px] pt-[10px] lg:pb-[140px]">
        <div className="mx-auto grid w-full max-w-[1680px] grid-cols-1 gap-[6px] px-4 md:grid-cols-[1fr_1fr_440px] md:px-8 lg:px-[96px]">
          <article className="home-echipa-highlight-card relative h-[560px] rounded-[16px] bg-white p-[32px] text-[#0A0A0A]">
            <p className="text-[12px] text-[#0A0A0A]">@alvernaofficial</p>
            <h3 className="mt-4 text-[46px] font-semibold leading-[1.05] text-[#0A0A0A]">Puterea zambetului care inspira incredere</h3>
            <p className="mt-4 text-[14px] text-[#0A0A0A]">Conversion Rate Improvement:</p>
            <p className="mt-1 text-[40px] font-semibold leading-none text-[#0A0A0A]">4.2% &gt; 5.9%</p>
            <div className="mt-auto rounded-[12px] bg-[#f7f7f7] p-4">
              <p className="text-[16px] leading-[1.3] text-[#0A0A0A]">★★★★★</p>
              <p className="mt-2 text-[13px] text-[#0A0A0A]">Thanks to this redesign, we&apos;ve seen a steady 80% increase in leads.</p>
              <div className="mt-3 flex items-center gap-2">
                <img src={heroCardThumb.src} alt="" className="h-8 w-8 rounded-full object-cover" />
                <span className="text-[12px] text-[#0A0A0A]">Agata Sril</span>
              </div>
            </div>
          </article>

          <article className="relative h-[560px] overflow-hidden rounded-[16px] bg-[#0A0A0A]">
            <img src={cazA7407760.src} alt="" className="h-full w-full object-cover opacity-90" />
          </article>

          <article className="relative isolate h-[560px] overflow-visible rounded-[24px] bg-[#0A0A0A] p-[40px]">
            <div className="absolute inset-0 z-[1] overflow-hidden rounded-[24px]">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.55)_100%)]" />
            </div>
            <div className="relative z-[40] text-[14px] text-[#4E7044]">
              <p>Echipa</p>
              <p className="mt-1">Faceti cunostinta cu echipa</p>
            </div>
            <img src={adsPaulaImage.src} alt="" className="pointer-events-none absolute bottom-0 right-[-34px] z-[20] h-[660px] w-auto object-contain" />
            <h3 className="absolute bottom-[104px] left-[36px] z-[30] whitespace-pre-line text-[64px] font-bold leading-[0.88] text-white">
              {"alverna\ndental\nstudio"}
            </h3>
            <p className="absolute bottom-[46px] left-1/2 z-[40] w-[300px] -translate-x-1/2 text-center text-[22px] leading-[1.15] text-white">Laborator dentar</p>
            <p className="absolute bottom-[24px] left-[40px] z-[40] text-[14px] text-[#4E7044]">echipa noastra ↗</p>
            <p className="absolute bottom-[24px] right-[40px] z-[40] text-[14px] text-[#cfcfcf]">We do it all.</p>
          </article>
        </div>
      </section>

      <section data-anim="section" className="bg-[#F5F5F5]">
        <div className="mx-auto grid w-full max-w-[1680px] grid-cols-1 items-center gap-10 px-4 pb-[120px] pt-[120px] md:grid-cols-[320px_minmax(0,1fr)] md:gap-16 md:px-8 lg:gap-20 lg:px-[96px]">
          <div className="flex -translate-y-3 justify-center md:justify-start">
            <img src={appPromoImage.src} alt="" className="h-[760px] w-[320px] object-contain" />
          </div>
          <div>
            <h2 className="max-w-[720px] text-[40px] font-bold leading-[1.05] tracking-[-0.04em] text-[#0A0A0A] md:text-[48px] lg:text-[56px]">
              Descarca aplicatia ads si groaza de dentist va disparea
            </h2>
            <p className="mt-8 max-w-[680px] text-[16px] leading-[1.55] text-[#0A0A0A]">
              O vizită într-un cabinet stomatologic Cluj, oricât de modern și bine echipat ar fi, nu aduce rezultatele dorite fără un medic stomatolog Cluj pe măsură. Medicii din clinica stomatologică Alverna Dental Studio sunt atenți, dedicați și foarte bine pregătiți, fiecare medic stomatolog Cluj fiind specializat pe anumite servicii de stomatologie. Împreună, ca echipă, putem aborda, eficient și la calitate superioară, orice situație dentară cu care v-ați confrunta.
            </p>
            <div className="mt-16 flex flex-col gap-6 md:flex-row md:items-center md:gap-6">
              <button className="flex h-[56px] min-w-[210px] items-center gap-[10px] rounded-[8px] bg-black px-[18px] text-white transition duration-200 ease-out hover:scale-[1.03]">
                <span className="text-[24px] leading-none"></span>
                <span className="flex flex-col items-start leading-none">
                  <span className="text-[10px] font-medium">Download on the</span>
                  <span className="mt-[2px] text-[18px] font-semibold">App Store</span>
                </span>
              </button>
              <button className="flex h-[56px] min-w-[210px] items-center gap-[10px] rounded-[8px] bg-black px-[18px] text-white transition duration-200 ease-out hover:scale-[1.03]">
                <span className="relative h-6 w-6">
                  <span className="absolute left-[2px] top-[1px] h-0 w-0 border-b-[11px] border-l-[18px] border-t-[11px] border-b-transparent border-l-[#4ade80] border-t-transparent" />
                  <span className="absolute left-[6px] top-[6px] h-0 w-0 border-b-[6px] border-l-[10px] border-t-[6px] border-b-transparent border-l-[#60a5fa] border-t-transparent opacity-90" />
                </span>
                <span className="flex flex-col items-start leading-none">
                  <span className="text-[10px] font-medium uppercase">Get it on</span>
                  <span className="mt-[2px] text-[18px] font-semibold">Google Play</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section data-anim="section" className="bg-[#ececec] pb-[90px] pt-[10px] lg:pb-[140px]">
        <div className="mx-auto w-full max-w-[1680px] px-4 md:px-8 lg:px-[96px]">
          <div className="flex items-start justify-between">
            <h2 className="text-[76px] font-semibold leading-[0.9] tracking-[-3px]">
              Cazuri <span className="text-[#666]">mai in detaliu</span>
              <br />
              <span className="text-[#666]">befor and after</span>
            </h2>
            <button className="mt-8 rounded-full bg-black px-6 py-2 text-xs font-semibold text-white">Vezi toate</button>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-[3px] overflow-hidden rounded-[18px] md:grid-cols-[1fr_1fr_2fr] lg:mt-12">
            <article className="relative h-[587px] rounded-l-[18px] bg-black">
              <video autoPlay muted loop playsInline className="h-full w-full object-cover">
                <source src="/cazuri-1.mp4" type="video/mp4" />
              </video>
            </article>
            <article className="relative h-[587px] bg-black">
              <video autoPlay muted loop playsInline className="h-full w-full object-cover">
                <source src="/cori-angel.mp4" type="video/mp4" />
              </video>
            </article>
            <article className="relative h-[587px] rounded-r-[18px] bg-black">
              <video autoPlay muted loop playsInline className="h-full w-full object-cover">
                <source src="/cazuri-2.mp4" type="video/mp4" />
              </video>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" ref={contactSectionRef} data-anim="section" className="relative w-full overflow-hidden bg-[#0A0A0A] py-20 md:py-[120px]">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute right-[-120px] top-1/2 z-0 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#4E7044] opacity-45 blur-[120px] [will-change:transform]"
          animate={{ y: [-20, 20, -20], scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
          <div className="rounded-[24px] bg-white p-8 text-[#0A0A0A] shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
            <p className="text-[14px] text-[#4F7F47]">@alvernadentalstudio</p>
            <h3 className="mt-2 text-[48px] font-semibold leading-[0.95] tracking-[-0.04em]">Solicită o programare</h3>
            <p className="mt-3 text-[14px] leading-[1.45] text-[#555555]">Lasă-ne datele tale și te contactăm în maxim 24h pentru confirmare.</p>
            <form className="mt-7 grid gap-3">
              <input className="ads-input h-[52px] rounded-[12px] bg-[#F5F5F5] px-4 text-[16px] outline-none transition focus:ring-2 focus:ring-[#4F7F47]/45" placeholder="Nume" />
              <input className="ads-input h-[52px] rounded-[12px] bg-[#F5F5F5] px-4 text-[16px] outline-none transition focus:ring-2 focus:ring-[#4F7F47]/45" placeholder="Telefon" />
              <input className="ads-input h-[52px] rounded-[12px] bg-[#F5F5F5] px-4 text-[16px] outline-none transition focus:ring-2 focus:ring-[#4F7F47]/45" placeholder="Serviciu dorit" />
              <textarea className="ads-input min-h-[110px] rounded-[12px] bg-[#F5F5F5] px-4 py-3 text-[16px] outline-none transition focus:ring-2 focus:ring-[#4F7F47]/45" placeholder="Mesaj opțional" />
              <a href="mailto:contact@alvernadental.com?subject=Solicita%20o%20programare" className="ads-btn-primary mt-2 inline-flex h-[54px] w-full items-center justify-center rounded-full bg-black text-[16px] font-semibold text-white transition duration-300 hover:scale-[1.02] hover:shadow-[0_10px_24px_rgba(0,0,0,0.25)]">Solicită programare</a>
              <p className="mt-2 text-center text-[11px] text-[#7a7a7a]">Nu trimitem spam. Te contactăm doar pentru confirmarea programării.</p>
            </form>
          </div>

          <div className="pt-0 text-white lg:pt-8">
            <h3 className="max-w-[720px] text-[44px] font-semibold leading-[1.04] tracking-[-0.04em]">Primul pas spre un zâmbet sănătos începe aici.</h3>
            <p className="mt-5 max-w-[680px] text-[16px] leading-[1.55] text-[#d6d6d6]">
              Echipa Alverna Dental Studio te ajută să alegi tratamentul potrivit, fără stres și fără presiune.
            </p>
            <div className="mt-8 inline-block rounded-[16px] border border-white/20 bg-white/5 px-5 py-4">
              <p className="text-[20px] font-semibold text-white">4.8 ★★★★★</p>
              <p className="mt-1 text-[13px] text-[#d7d7d7]">Peste 9000 de pacienți mulțumiți</p>
            </div>
            <p className="mt-7 text-[14px] text-[#9fc48f] underline decoration-[#9fc48f]/50 underline-offset-4">Preferi telefonic? Sună acum</p>
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
