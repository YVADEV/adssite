"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "motion/react";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/nav/SiteHeader";
import { ServiceFinalCTA } from "@/components/services/ServicePageParts";
import { CLINIC } from "@/lib/contact";
import raduImage from "@/assets/echipa/radu-nichimis.png";
import andreeaImage from "@/assets/echipa/andreea-parvu.png";
import raresImage from "@/assets/echipa/rares-gorun.png";
import lauraImage from "@/assets/echipa/laura-grigorean.png";
import valentinaImage from "@/assets/echipa/valentina-nichimis.png";
import andreeaRoneaImage from "@/assets/echipa/andreea-ronea.png";
import bogdanImage from "@/assets/echipa/bogdan-holici.png";
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
  { name: "Dr. Radu Nichimiș", role: "Chirurgie orală și maxilo-facială", image: raduImage.src, href: "/echipa/radu-nichimis/" },
  { name: "Dr. Andreea Pârvu", role: "Stomatologie generală și protetică", image: andreeaImage.src, href: "/echipa/andreea-parvu/" },
  { name: "Dr. Rareș Gorun", role: "Medic stomatolog", image: raresImage.src },
  { name: "Dr. Laura Grigorean", role: "Parodontologie", image: lauraImage.src, href: "/echipa/laura-grigorean/" },
  { name: "Dr. Corina Holici", role: "Medic stomatolog", image: corinaImage.src, href: "/echipa/corina-holici/", imageClassName: "-scale-x-100" },
  { name: "Dr. Andreea Ronea", role: "Medic stomatolog", image: andreeaRoneaImage.src },
  { name: "Dr. Raul Mureșan", role: "Medic stomatolog", image: raulImage.src },
  { name: "Dr. Valentina Nichimiș", role: "Medic stomatolog", image: valentinaImage.src },
  { name: "Dr. Bogdan Holici", role: "Medic stomatolog", image: bogdanImage.src },
];

const laboratoryTeam = [
  { name: "Paula Bodocan", role: "Tehnician dentar", image: paulaBodocanImage.src },
  { name: "Petre Mureșanu", role: "Tehnician dentar", image: petreMuresanuImage.src },
  { name: "Rareș Telcean", role: "Tehnician dentar", image: raresTelceanImage.src },
  { name: "Sidonia Stan", role: "Tehnician dentar", image: sidoniaStanImage.src },
  { name: "Rareș Harmath", role: "Tehnician dentar", image: raresHarmathImage.src },
];

const managementTeam = [
  { name: "Ioana Gheorghiță", image: ioanaGheorghitaImage.src },
  { name: "Marta Crina", image: martaCrinaImage.src },
];

const assistantsTeam = [
  { name: "Narcisa Moca", role: "Asistentă", image: narcisaImage.src },
  { name: "Alina Crim", role: "Asistentă", image: alinaCrimImage.src },
];

const teamGroups = [
  { title: "Echipa medicală Alverna", members: specialistTeam },
  { title: "Laborator", members: laboratoryTeam },
  { title: "Asistente", members: assistantsTeam },
  { title: "Management", members: managementTeam },
];

export default function EchipaPage() {
  const reduceMotion = useReducedMotion();
  const pageContentRef = useRef<HTMLDivElement>(null);
  const [isMobileTeamGrid, setIsMobileTeamGrid] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const sync = () => setIsMobileTeamGrid(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <div className="min-h-screen min-w-0 bg-black text-white">
      <div ref={pageContentRef} id="main" tabIndex={-1} className="outline-none">
        <SiteHeader pageContentRef={pageContentRef} menuId="echipa-mobile-menu" />

      <main className="pb-24 md:pb-32 lg:pb-[180px]">
        <motion.section
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={reduceMotion ? {} : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-0 grid w-full grid-cols-1 gap-8 overflow-hidden bg-black px-4 py-8 sm:px-6 sm:py-10 md:px-12 md:py-12 lg:grid-cols-[minmax(300px,36%)_minmax(0,1fr)] lg:items-center lg:gap-10 xl:px-[120px]"
        >
          <div className="relative z-[2] flex flex-col lg:py-4">
            <p className="mb-[18px] text-[16px] font-medium text-white/50 md:text-[18px]">@alvernadentalstudio</p>
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.55 }}
              transition={reduceMotion ? {} : { duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[520px] whitespace-pre-line text-[32px] font-bold leading-[0.95] tracking-[-1.8px] md:text-[42px]"
            >
              {"O echipă construită\nîn jurul tratamentului\nmultidisciplinar"}
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={reduceMotion ? {} : { duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-[520px] text-[18px] leading-[1.6] text-white md:text-[21px] lg:mt-8"
            >
              Cazurile complexe necesită mai mult decât intervenția unui singur medic. Echipa Alverna Dental Studio reunește specialități complementare – chirurgie orală și maxilo-facială, implantologie, parodontologie, protetică, endodonție, ortodonție și stomatologie generală – care colaborează în cadrul aceluiași plan de tratament.
            </motion.p>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reduceMotion ? {} : { duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
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
              : "mt-6 grid grid-cols-1 justify-center gap-[18px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5";

          const gridContent = group.members.map((member, index) => {
            const profileHref = "href" in member && typeof member.href === "string" ? member.href : null;
            const isLinked = Boolean(profileHref);
            const cardClassName = isMobileTeamGrid
              ? `group relative h-[min(72vw,320px)] w-full overflow-hidden rounded-[14px] border border-white/15 bg-[#111] md:h-[360px] ${isLinked ? "" : "cursor-default"}`
              : `group relative h-[383px] w-full min-w-0 overflow-hidden rounded-[14px] border border-white/15 bg-[#111] ${isLinked ? "" : "cursor-default"}`;

            const overlayClassName = isMobileTeamGrid
              ? "absolute bottom-2 left-2 max-w-[calc(100%-0.75rem)] sm:bottom-3 sm:left-3"
              : "absolute bottom-3 left-3 right-3";
            const nameClassName = isMobileTeamGrid
              ? "ads-title-white text-[15px] font-bold leading-[1.15] text-white sm:text-[18px]"
              : "ads-title-white text-[21px] font-bold leading-[1.15] text-white";
            const role = "role" in member && typeof member.role === "string" ? member.role : "";

            const desktopCardProps = {
              variants: reduceMotion
                ? undefined
                : {
                    hidden: { opacity: 0, y: 16 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.45 },
                    },
                  },
              whileHover: isLinked
                ? {
                    y: -2,
                    borderColor: "rgba(255,255,255,0.22)",
                  }
                : {},
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

            const imageClassName =
              "imageClassName" in member && typeof member.imageClassName === "string" ? member.imageClassName : "";

            const cardInner = (
              <>
                <div className={`h-full w-full ${imageClassName}`}>
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                  whileHover={isLinked && !reduceMotion && !isMobileTeamGrid ? {} : {}}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.75),transparent_60%)]" />
                <div className={overlayClassName}>
                  {isMobileTeamGrid ? (
                    <h3 className={nameClassName}>{member.name}</h3>
                  ) : (
                    <motion.h3
                      whileHover={isLinked && !reduceMotion ? { y: -1 } : {}}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className={nameClassName}
                    >
                      {member.name}
                    </motion.h3>
                  )}
                  {role ? <p className="mt-1 text-[12px] font-medium leading-[1.3] text-white/80 sm:text-[13px] md:text-[14px]">{role}</p> : null}
                </div>
              </>
            );

            if (profileHref) {
              return (
                <a key={`${group.title}-${member.name}`} href={profileHref} className="block">
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

        <ServiceFinalCTA
          href={CLINIC.formPageHref}
          title="Programează o consultație"
          body="Completează formularul și te contactăm pentru confirmarea programării."
        />
      </main>
      <SiteFooter />
      </div>
    </div>
  );
}
