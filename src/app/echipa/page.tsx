"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "motion/react";
import ServicesDropdown from "@/components/nav/ServicesDropdown";
import { MobileMenuNavServices } from "@/components/nav/MobileMenuNavServices";
import { MobileMenuOverlay } from "@/components/nav/MobileMenuOverlay";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { useStickyHeaderScroll } from "@/hooks/useStickyHeaderScroll";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteLogo from "@/components/nav/SiteLogo";
import raduImage from "@/assets/echipa/radu-nichimis.png";
import andreeaImage from "@/assets/echipa/andreea-parvu.png";
import raresImage from "@/assets/echipa/rares-gorun.png";
import lauraImage from "@/assets/echipa/laura-grigorean.png";
import valentinaImage from "@/assets/echipa/valentina-nichimis.png";
import andreeaRoneaImage from "@/assets/echipa/andreea-ronea.png";
import bogdanImage from "@/assets/echipa/bogdan-holici.png";
import andreeaCrisanImage from "@/assets/echipa/andreea-crisan.png";
import raulImage from "@/assets/echipa/raul-muresan.png";
import corinaImage from "@/assets/echipa/corina-holici.png";
import narcisaImage from "@/assets/echipa/narcisa-moca.png";
import paulaBodocanImage from "@/assets/echipa/paula-bodocan.png";
import petreMuresanuImage from "@/assets/echipa/petre-muresanu.png";
import raresTelceanImage from "@/assets/echipa/rares-telcean.png";
import sidoniaStanImage from "@/assets/echipa/sidonia-stan.png";
import ioanaGheorghitaImage from "@/assets/echipa/ioana-gheorghita.png";
import alinaCrimImage from "@/assets/cazuri/Clipuri cazuri/Echipa/Managment/Alina Crim.png";
import martaCrinaImage from "@/assets/echipa/marta-crina.png";
import raresHarmathImage from "@/assets/echipa/rares-harmath.png";
import heroTeamImage from "@/assets/echipa/hero-team.png";

const specialistTeam = [
  { name: "Dr.Radu Nichimiș", image: raduImage.src, href: "/echipa/radu-nichimis/" },
  { name: "Dr. Andreea Pârvu", image: andreeaImage.src },
  { name: "Dr. Rareș Gorun", image: raresImage.src },
  { name: "Dr. Laura Grigorean", image: lauraImage.src },
  { name: "Dr. Valentina Nichimiș", image: valentinaImage.src },
  { name: "Dr. Andreea Ronea", image: andreeaRoneaImage.src },
  { name: "Dr. Bogdan Holici", image: bogdanImage.src },
  { name: "Dr. Andreea Crișan", image: andreeaCrisanImage.src },
  { name: "Dr. Raul Mureșan", image: raulImage.src },
  { name: "Dr. Corina Holici", image: corinaImage.src },
];

const laboratoryTeam = [
  { name: "Paula Bodocan", image: paulaBodocanImage.src },
  { name: "Petre Mureșanu", image: petreMuresanuImage.src },
  { name: "Rareș Telcean", image: raresTelceanImage.src },
  { name: "Sidonia Stan", image: sidoniaStanImage.src },
];

const managementTeam = [
  { name: "Ioana Gheorghiță", image: ioanaGheorghitaImage.src },
  { name: "Marta Crina", image: martaCrinaImage.src },
  { name: "Rareș Harmath", image: raresHarmathImage.src },
];

const assistantsTeam = [
  { name: "Narcisa Moca - asistentă", image: narcisaImage.src },
  { name: "Alina Crim - asistentă", image: alinaCrimImage.src },
];

const teamGroups = [
  { title: "Medici specialiști", members: specialistTeam },
  { title: "Laborator", members: laboratoryTeam },
  { title: "Asistente", members: assistantsTeam },
  { title: "Management", members: managementTeam },
];

export default function EchipaPage() {
  const reduceMotion = useReducedMotion();
  const pageContentRef = useRef<HTMLDivElement>(null);
  const menuOverlayRef = useRef<HTMLDivElement>(null);
  const menuTopLineRef = useRef<HTMLSpanElement>(null);
  const menuMidLineRef = useRef<HTMLSpanElement>(null);
  const menuBottomLineRef = useRef<HTMLSpanElement>(null);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const [isMobileTeamGrid, setIsMobileTeamGrid] = useState(false);
  const scrolled = useStickyHeaderScroll();

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
    const mq = window.matchMedia("(max-width: 1023px)");
    const sync = () => setIsMobileTeamGrid(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-black text-white">
      <MobileMenuOverlay
        id="echipa-mobile-menu"
        overlayRef={menuOverlayRef}
        menuVisible={menuVisible}
        onClose={closeMenu}
      >
        {[
          { href: "/", label: "Acasă" },
          { href: "/echipa", label: "Echipa" },
          { href: "/cazuri", label: "Cazuri" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            data-menu-item
            onClick={closeMenu}
            className="block text-left text-[clamp(42px,8vw,96px)] font-extrabold leading-[0.95] tracking-[-0.035em] text-white transition duration-250 hover:translate-y-[-2px]"
          >
            {item.label}
          </a>
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
          <a
            key={item.label}
            href={item.href}
            data-menu-item
            onClick={closeMenu}
            className="block text-left text-[clamp(42px,8vw,96px)] font-extrabold leading-[0.95] tracking-[-0.035em] text-white transition duration-250 hover:translate-y-[-2px]"
          >
            {item.label}
          </a>
        ))}
      </MobileMenuOverlay>

      <div ref={pageContentRef} id="main" tabIndex={-1} className="outline-none">
        <header
          className={`sticky top-0 z-50 h-[68px] w-full text-white transition-[background-color,box-shadow,backdrop-filter] duration-300 ease-out sm:h-[72px] ${
            scrolled
              ? "bg-[#0f1115]/95 shadow-[0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md"
              : "bg-[#0f1115]"
          }`}
        >
          <div className="relative mx-auto flex h-full w-full items-center justify-between px-3 text-[18px] font-medium sm:px-4 md:px-6 lg:px-8">
          <SiteLogo />
          <nav className="hidden items-center gap-8 text-[18px] text-white lg:flex xl:gap-[80px]">
            <a href="/">Acasă</a>
            <a href="/echipa" className="text-white">
              Echipă
            </a>
            <a href="/cazuri">Cazuri</a>
            <ServicesDropdown isDark />
            <a href="/tarife">Tarife</a>
            <a href="/contact">Contact</a>
          </nav>
          <button
            ref={menuTriggerRef}
            type="button"
            aria-label={menuOpen ? "Închide meniul" : "Deschide meniul"}
            aria-expanded={menuOpen}
            aria-controls="echipa-mobile-menu"
            aria-haspopup="dialog"
            onClick={toggleMenu}
            className="relative z-10 flex h-10 w-10 shrink-0 flex-col justify-center gap-[5px] rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9fc48f] lg:hidden sm:h-12 sm:w-12 sm:gap-[6px]"
          >
            <span ref={menuTopLineRef} className="h-[2px] w-full bg-white" />
            <span ref={menuMidLineRef} className="h-[2px] w-full bg-white" />
            <span ref={menuBottomLineRef} className="h-[2px] w-full bg-white" />
          </button>
          </div>
        </header>

      <main className="pb-24 md:pb-32 lg:pb-[180px]">
        <motion.section
          initial={reduceMotion ? false : { opacity: 0, y: 80, scale: 0.96, filter: "blur(18px)" }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={reduceMotion ? {} : { duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative left-1/2 mt-0 grid w-screen max-w-[100vw] -translate-x-1/2 grid-cols-1 gap-8 overflow-hidden border border-white/20 bg-black px-4 py-8 shadow-[0_0_35px_rgba(255,255,255,0.16),inset_0_0_20px_rgba(255,255,255,0.04)] sm:px-6 sm:py-10 md:px-12 md:py-12 lg:grid-cols-[minmax(300px,36%)_minmax(0,1fr)] lg:items-center lg:gap-10 xl:px-[120px]"
        >
          <motion.div
            aria-hidden
            animate={reduceMotion ? {} : { x: [-16, 20, -16], y: [-10, 14, -10] }}
            transition={reduceMotion ? {} : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute left-1/2 top-[60%] h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.04)_34%,transparent_72%)] blur-[44px]"
          />

          <div className="relative z-[2] flex flex-col lg:py-4">
            <p className="mb-[18px] text-[18px] font-semibold text-white md:text-[21px]">@alvernadentalstudio</p>
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 26, filter: "blur(12px)" }}
              whileInView={reduceMotion ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.55 }}
              transition={reduceMotion ? {} : { duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[420px] whitespace-pre-line text-[32px] font-bold leading-[0.95] tracking-[-1.8px] md:text-[42px]"
            >
              {"Fă cunoștință\ncu echipa noastră"}
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={reduceMotion ? {} : { duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-[420px] text-[18px] leading-[1.6] text-white md:text-[21px] lg:mt-8"
            >
              Personalul de la Alverna Dental Studio este atent, dedicat şi bine pregătit, fiecare membru al echipei fiind specializat pe anumite ramuri ale stomatologiei. Prin servicii stomatologice de calitate, împreună, putem rezolva, în condiţii de calitate superioară şi de eficienţă, orice situație dentară.
              <br />
              <br />
              <span className="font-semibold text-white">Interacțiune de calitate</span>
              <br />
              În relația medic-pacient, ne bazăm pe comunicare, empatie și răbdare.
            </motion.p>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 50, scale: 0.96, filter: "blur(12px)" }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reduceMotion ? {} : { duration: 1.1, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-[2] w-full min-w-0 overflow-hidden rounded-[12px] border border-white/15 lg:w-full"
          >
            <motion.img
              src={heroTeamImage.src}
              alt="Echipa Alverna Dental Studio"
              className="h-auto w-full object-contain object-center"
              initial={reduceMotion ? false : { scale: 1.02 }}
              whileInView={reduceMotion ? {} : { scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={reduceMotion ? {} : { duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ filter: "contrast(1.03)" }}
            />
          </motion.div>
        </motion.section>

        {teamGroups.map((group) => {
          const gridClassName = isMobileTeamGrid
            ? "mt-6 grid grid-cols-2 justify-items-stretch gap-3 sm:gap-[18px] md:grid-cols-3"
            : "mt-6 grid grid-cols-1 justify-center gap-[18px] sm:grid-cols-2 md:grid-cols-3 lg:[grid-template-columns:repeat(5,248px)]";

          const gridContent = group.members.map((member, index) => {
            const cardClassName = isMobileTeamGrid
              ? "group relative h-[min(72vw,320px)] w-full overflow-hidden rounded-[14px] border border-white/15 bg-[#111] sm:h-[360px]"
              : "group relative h-[383px] w-full overflow-hidden rounded-[14px] border border-white/15 bg-[#111] lg:w-[248px]";

            const labelClassName = isMobileTeamGrid
              ? "absolute right-2 top-2 max-w-[72px] text-right text-[13px] leading-[1.2] text-white sm:right-3 sm:top-3 sm:max-w-[80px] sm:text-[16px]"
              : "absolute right-3 top-3 max-w-[80px] text-right text-[21px] leading-[1.2] text-white";

            const nameClassName = isMobileTeamGrid
              ? "absolute bottom-2 left-2 max-w-[calc(100%-0.75rem)] text-[15px] font-bold leading-[1.15] text-white sm:bottom-3 sm:left-3 sm:text-[18px]"
              : "absolute bottom-3 left-3 text-[21px] font-bold text-white";

            const desktopCardProps = {
              variants: reduceMotion
                ? undefined
                : {
                    hidden: { opacity: 0, y: 50, scale: 0.94, filter: "blur(12px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      filter: "blur(0px)",
                      transition: { duration: 1.1 },
                    },
                  },
              whileHover: reduceMotion
                ? {}
                : {
                    y: -8,
                    boxShadow: "0 12px 28px rgba(255,255,255,0.12)",
                    borderColor: "rgba(255,255,255,0.35)",
                  },
              transition: { duration: 0.6 },
              className: cardClassName,
            };

            const mobileCardProps = reduceMotion
              ? { className: cardClassName }
              : {
                  initial: { opacity: 0, y: 16 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, amount: 0.05 },
                  transition: { duration: 0.4, delay: Math.min(index * 0.03, 0.24), ease: [0.22, 1, 0.36, 1] as const },
                  className: cardClassName,
                };

            const cardProps = isMobileTeamGrid ? mobileCardProps : desktopCardProps;

            const cardInner = (
              <>
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                  whileHover={reduceMotion || isMobileTeamGrid ? {} : { scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.75),transparent_60%)]" />
                <p className={labelClassName}>{group.title}</p>
                {isMobileTeamGrid ? (
                  <h3 className={nameClassName}>{member.name}</h3>
                ) : (
                  <motion.h3
                    whileHover={reduceMotion ? {} : { y: -4, color: "#ffffff" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={nameClassName}
                  >
                    {member.name}
                  </motion.h3>
                )}
              </>
            );

            if ("href" in member && typeof member.href === "string") {
              return (
                <a key={`${group.title}-${member.name}`} href={member.href} className="block">
                  <motion.article {...cardProps}>{cardInner}</motion.article>
                </a>
              );
            }

            return (
              <motion.article key={`${group.title}-${member.name}`} {...cardProps}>
                {cardInner}
              </motion.article>
            );
          });

          return (
            <section key={group.title} className="mx-auto mt-12 w-full max-w-[1680px] px-4 md:px-8 lg:mt-14 lg:px-12">
              <motion.h2
                initial={reduceMotion ? false : { opacity: 0, y: 24, filter: "blur(12px)" }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.55 }}
                transition={reduceMotion ? {} : { duration: 1.15, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="text-[34px] font-semibold tracking-[-1.6px] text-white sm:text-[40px] md:text-[56px]"
              >
                {group.title}
              </motion.h2>
              {isMobileTeamGrid ? (
                <div className={gridClassName}>{gridContent}</div>
              ) : (
                <motion.div
                  initial={reduceMotion ? false : "hidden"}
                  whileInView={reduceMotion ? undefined : "visible"}
                  viewport={{ once: true, amount: 0.2 }}
                  variants={
                    reduceMotion
                      ? undefined
                      : {
                          hidden: {},
                          visible: {
                            transition: {
                              delayChildren: 0.2,
                              staggerChildren: 0.12,
                            },
                          },
                        }
                  }
                  className={gridClassName}
                >
                  {gridContent}
                </motion.div>
              )}
            </section>
          );
        })}
      </main>
      <SiteFooter />
      </div>
    </div>
  );
}
