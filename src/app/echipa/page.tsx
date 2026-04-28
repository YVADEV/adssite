"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "motion/react";
import gsap from "gsap";
import ServicesDropdown from "@/components/nav/ServicesDropdown";
import SiteFooter from "@/components/layout/SiteFooter";
import { services } from "@/config/services";
import andreeaImage from "@/assets/cazuri/Clipuri cazuri/Echipa/Andreea.png";
import raduImage from "@/assets/cazuri/Clipuri cazuri/Echipa/Radu.png";
import raresImage from "@/assets/cazuri/Clipuri cazuri/Echipa/Rares.png";
import lauraImage from "@/assets/cazuri/Clipuri cazuri/Echipa/4.png";
import valentinaImage from "@/assets/cazuri/Clipuri cazuri/Echipa/5.png";
import andreeaRoneaImage from "@/assets/cazuri/Clipuri cazuri/Echipa/6.png";
import bogdanImage from "@/assets/cazuri/Clipuri cazuri/Echipa/7.png";
import andreeaCrisanImage from "@/assets/cazuri/Clipuri cazuri/Echipa/8.png";
import raulImage from "@/assets/cazuri/Clipuri cazuri/Echipa/9.png";
import corinaImage from "@/assets/cazuri/Clipuri cazuri/Echipa/10.png";
import narcisaImage from "@/assets/cazuri/Clipuri cazuri/Echipa/11.png";
import paulaBodocanImage from "@/assets/cazuri/Clipuri cazuri/Echipa/Laborator/Paula Bodocan.png";
import petreMuresanuImage from "@/assets/cazuri/Clipuri cazuri/Echipa/Laborator/Petre-Muresanu.png";
import raresTelceanImage from "@/assets/cazuri/Clipuri cazuri/Echipa/Laborator/Rares-Telcean.png";
import sidoniaStanImage from "@/assets/cazuri/Clipuri cazuri/Echipa/Laborator/Sidonia Stan.png";
import ioanaGheorghitaImage from "@/assets/cazuri/Clipuri cazuri/Echipa/Managment/Ioana-Gheorghita.jpeg";
import alinaCrimImage from "@/assets/cazuri/Clipuri cazuri/Echipa/Managment/Alina Crim.png";
import martaCrinaImage from "@/assets/cazuri/Clipuri cazuri/Echipa/Managment/Marta Crina.png";
import raresHarmathImage from "@/assets/cazuri/Clipuri cazuri/Echipa/Managment/Rares Harmath.png";

const teamCards = [
  {
    name: "Andreea Pârvu",
    role: "Stomatologie generală",
    image: andreeaImage.src,
  },
  {
    name: "Ast. Univ Radu Nichimiș",
    role: "Maxilo-Facială",
    image: raduImage.src,
    href: "/echipa/radu-nichimis/",
  },
  {
    name: "Dr. Laura Grigorean",
    role: "Creative Director",
    image: lauraImage.src,
  },
  {
    name: "Dr. Valentina Nichimiș",
    role: "UX/UI Designer",
    image: valentinaImage.src,
  },
];

const specialistTeam = [
  { name: "Dr.Radu Nichimiș", image: raduImage.src, href: "/echipa/radu-nichimis/" },
  { name: "Dr. Andreea Pǎrvu", image: andreeaImage.src },
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
  { title: "Medici specialisti", members: specialistTeam },
  { title: "Laborator", members: laboratoryTeam },
  { title: "Asistente", members: assistantsTeam },
  { title: "Managment", members: managementTeam },
];

export default function EchipaPage() {
  const reduceMotion = useReducedMotion();
  const pageContentRef = useRef<HTMLDivElement>(null);
  const menuOverlayRef = useRef<HTMLDivElement>(null);
  const menuTopLineRef = useRef<HTMLSpanElement>(null);
  const menuMidLineRef = useRef<HTMLSpanElement>(null);
  const menuBottomLineRef = useRef<HTMLSpanElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAparatOpen, setMobileAparatOpen] = useState(false);

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
        .add(() => setMenuVisible(false));
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

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
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
            <div className="pl-[6vw] md:pl-[10vw]">
              {[
                { href: "/turism-dentar", label: "Turism dentar" },
                { href: "/echipa", label: "Echipa" },
                { href: "/tarife", label: "Tarife" },
                { href: "/", label: "Blog" },
                { href: "/testimoniale", label: "Testimoniale" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  data-menu-item
                  onClick={() => setMenuOpen(false)}
                  className="block text-[clamp(42px,8vw,96px)] font-extrabold leading-[0.95] tracking-[-0.035em] text-[#0A0A0A] transition duration-250 hover:translate-y-[-2px]"
                >
                  {item.label}
                </a>
              ))}
              <button
                type="button"
                aria-label="Deschide lista de servicii"
                aria-expanded={mobileServicesOpen}
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className="mt-2 flex w-full items-center justify-between rounded-[12px] px-3 py-2 text-left text-[clamp(42px,8vw,96px)] font-extrabold leading-[0.95] tracking-[-0.035em] text-[#0A0A0A]"
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
                          className="flex min-h-[48px] w-full items-center justify-between rounded-[10px] px-2 text-[18px] font-semibold text-[#0A0A0A]"
                        >
                          <span>{service.title}</span>
                          <span>{mobileAparatOpen ? "−" : "+"}</span>
                        </button>
                        <div className={`overflow-hidden transition-[max-height,opacity] duration-300 ${mobileAparatOpen ? "max-h-[180px] opacity-100" : "max-h-0 opacity-0"}`}>
                          {(service.children ?? []).map((child) => (
                            <a key={child.slug} href={child.href} onClick={() => setMenuOpen(false)} className="block min-h-[48px] rounded-[10px] px-3 py-3 text-[15px] text-[#1f1f1f]">
                              {child.title}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a key={service.slug} href={service.href} onClick={() => setMenuOpen(false)} className="block min-h-[48px] rounded-[10px] px-2 py-3 text-[17px] font-medium text-[#0A0A0A]">
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
        <header className="flex h-[68px] w-full items-center justify-between bg-black px-3 sm:h-[90px] sm:px-6 md:px-12 xl:px-[120px]">
          <div className="flex min-w-0 items-center gap-2 sm:gap-4">
            <span className="truncate text-[13px] font-semibold text-[#2f8f2f] sm:text-[16px]">Programeaza-te acum</span>
            <a href="/" className="inline-flex h-[30px] shrink-0 items-center rounded-full bg-white px-3 text-[12px] font-semibold text-[#0A0A0A] transition duration-300 hover:scale-[1.02] sm:h-[34px] sm:px-4 sm:text-[13px]">
              Acasă
            </a>
          </div>
          <nav className="hidden items-center gap-8 text-[14px] text-white/75 lg:flex xl:gap-[80px]">
            <a href="/cazuri">Cazuri</a>
            <a href="/tarife">Tarife</a>
            <a href="/echipa" className="text-white">
              Echipă
            </a>
            <ServicesDropdown isDark />
            <a href="/contact">Contact</a>
          </nav>
          <button type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((prev) => !prev)} className="flex h-9 w-[46px] shrink-0 flex-col justify-center gap-[5px] sm:h-10 sm:w-[55px] sm:gap-[6px]">
            <span ref={menuTopLineRef} className="h-[1px] w-full bg-white/65" />
            <span ref={menuMidLineRef} className="h-[1px] w-full bg-white/65" />
            <span ref={menuBottomLineRef} className="h-[1px] w-full bg-white/65" />
          </button>
        </header>

      <main className="pb-[180px]">
        <motion.section
          initial={reduceMotion ? false : { opacity: 0, y: 80, scale: 0.96, filter: "blur(18px)" }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={reduceMotion ? {} : { duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative left-1/2 mt-0 grid min-h-[calc(100vh-90px)] w-screen -translate-x-1/2 grid-cols-1 gap-10 overflow-hidden border border-white/20 bg-black px-6 py-10 shadow-[0_0_35px_rgba(255,255,255,0.16),inset_0_0_20px_rgba(255,255,255,0.04)] md:px-12 md:py-12 lg:grid-cols-[1fr_1fr] lg:gap-[60px] xl:px-[120px]"
        >
          <motion.div
            aria-hidden
            animate={reduceMotion ? {} : { x: [-16, 20, -16], y: [-10, 14, -10] }}
            transition={reduceMotion ? {} : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute left-1/2 top-[60%] h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.04)_34%,transparent_72%)] blur-[44px]"
          />

          <div className="relative z-[2] flex min-h-[420px] flex-col">
            <p className="mb-[18px] text-[14px] font-semibold text-white">@alvernadentalstudio</p>
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 26, filter: "blur(12px)" }}
              whileInView={reduceMotion ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.55 }}
              transition={reduceMotion ? {} : { duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[420px] whitespace-pre-line text-[42px] font-bold leading-[0.95] tracking-[-1.8px]"
            >
              {"Fă cunoștință\ncu echipa noastră"}
            </motion.h1>

            <div className="mt-auto grid grid-cols-1 gap-6 md:grid-cols-[230px_1fr]">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={reduceMotion ? {} : { duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-[12px] font-semibold text-white">Medici specialiști</p>
                <p className="mt-2 text-[12px] leading-[1.35] text-white/70">Suntem un colectiv de stomatologi cu o experiență vastă la activ.</p>
                <button className="mt-3 inline-flex h-[26px] items-center rounded-full bg-white px-4 text-[11px] font-semibold text-black">
                  Află mai multe
                  <span className="ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full border border-black/20 text-[10px]">→</span>
                </button>
              </motion.div>

              <motion.p
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={reduceMotion ? {} : { duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-[330px] text-[16px] leading-[1.1] text-white/65"
              >
                Personalul de la Alverna Dental Studio este atent, dedicat şi bine pregătit, fiecare membru al echipei fiind specializat pe anumite ramuri ale stomatologiei. Prin servicii stomatologice de calitate, împreună, putem rezolva, în condiţii de calitate superioară şi de eficienţă, orice situație dentară.
                <br />
                <br />
                <span className="font-semibold text-white">Interacțiune de calitate</span>
                <br />
                În relația medic-pacient, ne bazăm pe comunicare, empatie și răbdare.
              </motion.p>
            </div>
          </div>

          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  delayChildren: 0.26,
                  staggerChildren: 0.12,
                },
              },
            }}
            className="relative z-[2] grid h-auto grid-cols-2 gap-[6px] lg:h-[680px] lg:w-full lg:max-w-[560px] lg:justify-self-end lg:grid-rows-2"
          >
            {teamCards.map((member) => {
              const cardProps = {
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
                      borderColor: "rgba(255,255,255,0.35)",
                      boxShadow: "0 10px 26px rgba(255,255,255,0.12)",
                    },
                transition: { duration: 0.6 },
                className: "group relative h-[225px] overflow-hidden rounded-[12px] border border-white/15 bg-[#111] lg:h-[337px]",
              };

              if (member.href) {
                return (
                  <a key={member.name} href={member.href} className="block">
                    <motion.article {...cardProps}>
                      <motion.img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover object-center"
                        initial={reduceMotion ? false : { y: 16, scale: 1.08 }}
                        whileInView={reduceMotion ? {} : { y: 0, scale: 1.01 }}
                        viewport={{ once: true, amount: 0.35 }}
                        whileHover={reduceMotion ? {} : { scale: 1.05 }}
                        transition={reduceMotion ? {} : { duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        style={{ filter: "contrast(1.03)" }}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.75),transparent_55%)]" />
                      <span className="absolute left-2 top-2 inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border border-white/35 bg-black/35 text-[11px] leading-none text-white">+</span>
                      <p className="absolute right-2 top-2 max-w-[80px] text-right text-[10px] leading-[1.2] text-white/90">{member.role}</p>
                      <motion.p whileHover={reduceMotion ? {} : { y: -4 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="absolute bottom-2 left-2 text-[15px] font-bold text-white">
                        {member.name}
                      </motion.p>
                    </motion.article>
                  </a>
                );
              }

              return (
                <motion.article key={member.name} {...cardProps}>
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-center"
                    initial={reduceMotion ? false : { y: 16, scale: 1.08 }}
                    whileInView={reduceMotion ? {} : { y: 0, scale: 1.01 }}
                    viewport={{ once: true, amount: 0.35 }}
                    whileHover={reduceMotion ? {} : { scale: 1.05 }}
                    transition={reduceMotion ? {} : { duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    style={{ filter: "contrast(1.03)" }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.75),transparent_55%)]" />
                  <span className="absolute left-2 top-2 inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border border-white/35 bg-black/35 text-[11px] leading-none text-white">+</span>
                  <p className="absolute right-2 top-2 max-w-[80px] text-right text-[10px] leading-[1.2] text-white/90">{member.role}</p>
                  <motion.p whileHover={reduceMotion ? {} : { y: -4 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="absolute bottom-2 left-2 text-[15px] font-bold text-white">
                    {member.name}
                  </motion.p>
                </motion.article>
              );
            })}
          </motion.div>
        </motion.section>

        {teamGroups.map((group) => (
          <section key={group.title} className="mx-auto mt-12 w-full max-w-[1680px] px-4 md:px-8 lg:mt-14 lg:px-12">
            <motion.h2
              initial={reduceMotion ? false : { opacity: 0, y: 24, filter: "blur(12px)" }}
              whileInView={reduceMotion ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.55 }}
              transition={reduceMotion ? {} : { duration: 1.15, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-[46px] font-semibold tracking-[-1.6px] text-white md:text-[56px]"
            >
              {group.title}
            </motion.h2>
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
              className="mt-6 grid grid-cols-1 justify-center gap-[18px] sm:grid-cols-2 md:grid-cols-3 lg:[grid-template-columns:repeat(5,248px)]"
            >
              {group.members.map((member) => {
                const cardProps = {
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
                  className: "group relative h-[383px] w-full overflow-hidden rounded-[14px] border border-white/15 bg-[#111] lg:w-[248px]",
                };
                if ("href" in member && typeof member.href === "string") {
                  return (
                    <a key={`${group.title}-${member.name}`} href={member.href} className="block">
                      <motion.article {...cardProps}>
                        <motion.img
                          src={member.image}
                          alt={member.name}
                          className="h-full w-full object-cover object-top"
                          whileHover={reduceMotion ? {} : { scale: 1.05 }}
                          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        />
                        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.75),transparent_60%)]" />
                        <p className="absolute right-3 top-3 max-w-[80px] text-right text-[10px] leading-[1.2] text-white/90">{group.title}</p>
                        <motion.h3
                          whileHover={reduceMotion ? {} : { y: -4, color: "#ffffff" }}
                          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute bottom-3 left-3 text-[15px] font-bold text-white"
                        >
                          {member.name}
                        </motion.h3>
                      </motion.article>
                    </a>
                  );
                }

                return (
                  <motion.article key={`${group.title}-${member.name}`} {...cardProps}>
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover object-top"
                      whileHover={reduceMotion ? {} : { scale: 1.05 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.75),transparent_60%)]" />
                    <p className="absolute right-3 top-3 max-w-[80px] text-right text-[10px] leading-[1.2] text-white/90">{group.title}</p>
                    <motion.h3
                      whileHover={reduceMotion ? {} : { y: -4, color: "#ffffff" }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute bottom-3 left-3 text-[15px] font-bold text-white"
                    >
                      {member.name}
                    </motion.h3>
                  </motion.article>
                );
              })}
            </motion.div>
          </section>
        ))}
      </main>
      <SiteFooter />
      </div>
    </div>
  );
}
