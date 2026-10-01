"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

type MobileMenuRefs = {
  overlayRef: RefObject<HTMLDivElement | null>;
  pageRef: RefObject<HTMLDivElement | null>;
  topLineRef: RefObject<HTMLSpanElement | null>;
  midLineRef: RefObject<HTMLSpanElement | null>;
  bottomLineRef: RefObject<HTMLSpanElement | null>;
  menuTriggerRef: RefObject<HTMLButtonElement | null>;
};

export function useMobileMenu(refs: MobileMenuRefs) {
  const { overlayRef, menuTriggerRef } = refs;

  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [openSubmenuSlug, setOpenSubmenuSlug] = useState<string | null>(null);
  const focusPrevOpenRef = useRef(false);
  const skipSubmenuResetRef = useRef(true);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("menu-open");
      return;
    }
    document.body.style.overflow = "";
    document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-open");
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const overlay = overlayRef.current;
    if (!overlay) return;

    const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusables = () => Array.from(overlay.querySelectorAll<HTMLElement>(focusableSelector));

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
    if (skipSubmenuResetRef.current) {
      skipSubmenuResetRef.current = false;
      return;
    }
    if (!menuOpen) {
      setMobileServicesOpen(false);
      setOpenSubmenuSlug(null);
    }
  }, [menuOpen]);

  useEffect(() => {
    if (focusPrevOpenRef.current && !menuOpen) {
      menuTriggerRef.current?.focus({ preventScroll: true });
    }
    focusPrevOpenRef.current = menuOpen;
  }, [menuOpen, menuTriggerRef]);

  return {
    menuOpen,
    setMenuOpen,
    menuVisible: menuOpen,
    mobileServicesOpen,
    setMobileServicesOpen,
    openSubmenuSlug,
    setOpenSubmenuSlug,
    closeMenu: () => setMenuOpen(false),
    toggleMenu: () => setMenuOpen((prev) => !prev),
  };
}
