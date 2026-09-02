"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import gsap from "gsap";

type MobileMenuRefs = {
  overlayRef: RefObject<HTMLDivElement | null>;
  pageRef: RefObject<HTMLDivElement | null>;
  topLineRef: RefObject<HTMLSpanElement | null>;
  midLineRef: RefObject<HTMLSpanElement | null>;
  bottomLineRef: RefObject<HTMLSpanElement | null>;
  menuTriggerRef: RefObject<HTMLButtonElement | null>;
};

export function useMobileMenu(refs: MobileMenuRefs) {
  const { overlayRef, pageRef, topLineRef, midLineRef, bottomLineRef, menuTriggerRef } = refs;

  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [openSubmenuSlug, setOpenSubmenuSlug] = useState<string | null>(null);
  const prevMenuOpenRef = useRef(false);

  useEffect(() => {
    const overlay = overlayRef.current;
    const page = pageRef.current;
    const top = topLineRef.current;
    const mid = midLineRef.current;
    const bottom = bottomLineRef.current;
    if (!overlay || !page || !top || !mid || !bottom) return;

    const ease = "cubic-bezier(0.16, 1, 0.3, 1)";
    const menuItems = overlay.querySelectorAll<HTMLElement>("[data-menu-item]");
    let frame = 0;
    let tl: gsap.core.Timeline | null = null;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("menu-open");
      gsap.set(overlay, { opacity: 0, scale: 0.98, pointerEvents: "auto" });
      gsap.set(menuItems, { opacity: 0, y: 40 });
      setMenuVisible(true);
      frame = requestAnimationFrame(() => {
        tl = gsap.timeline({ defaults: { ease } });
        tl.to(overlay, { opacity: 1, scale: 1, duration: 0.42, ease })
          .to(page, { opacity: 0, duration: 0.42, ease }, "<")
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
      document.body.classList.remove("menu-open");
    } else {
      gsap.set(overlay, { opacity: 0, pointerEvents: "none" });
      document.body.style.overflow = "";
      document.body.classList.remove("menu-open");
    }

    return () => {
      cancelAnimationFrame(frame);
      tl?.kill();
      document.body.style.overflow = "";
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen, menuVisible, overlayRef, pageRef, topLineRef, midLineRef, bottomLineRef]);

  useEffect(() => {
    if (!menuOpen) return;

    const overlay = overlayRef.current;
    if (!overlay) return;

    const focusableSelector =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusables = () =>
      Array.from(overlay.querySelectorAll<HTMLElement>(focusableSelector));

    focusables()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setMenuOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const list = focusables();
      if (list.length === 0) return;
      const first = list[0];
      const last = list[list.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen, overlayRef]);

  useEffect(() => {
    if (!menuOpen) {
      setMobileServicesOpen(false);
      setOpenSubmenuSlug(null);
    }
  }, [menuOpen]);

  useEffect(() => {
    if (prevMenuOpenRef.current && !menuOpen) {
      menuTriggerRef.current?.focus({ preventScroll: true });
    }
    prevMenuOpenRef.current = menuOpen;
  }, [menuOpen, menuTriggerRef]);

  return {
    menuOpen,
    setMenuOpen,
    menuVisible,
    mobileServicesOpen,
    setMobileServicesOpen,
    openSubmenuSlug,
    setOpenSubmenuSlug,
    closeMenu: () => setMenuOpen(false),
    toggleMenu: () => setMenuOpen((prev) => !prev),
  };
}
