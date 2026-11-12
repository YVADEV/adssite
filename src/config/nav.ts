import { EMERGENCY_HREF, FIXED_TEETH_HREF, FIXED_TEETH_NAV_LABEL } from "@/config/services";

export const PRIMARY_NAV = [
  { href: "/", label: "Acasă" },
  { href: "/echipa", label: "Echipa" },
  { href: "/cazuri", label: "Cazuri" },
  { href: "/blog", label: "Blog" },
  { href: FIXED_TEETH_HREF, label: FIXED_TEETH_NAV_LABEL },
] as const;

export const TRAILING_NAV = [
  { href: "/tarife", label: "Tarife" },
  { href: "/contact", label: "Contact" },
] as const;

export const MOBILE_TRAILING_NAV = [
  { href: "/tarife", label: "Tarife" },
  { href: EMERGENCY_HREF, label: "Urgențe" },
  { href: "/contact", label: "Contact" },
] as const;

export function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  const normalized = href.replace(/\/$/, "");
  return pathname === href || pathname === normalized || pathname.startsWith(`${normalized}/`);
}
