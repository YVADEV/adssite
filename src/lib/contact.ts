import { BUSINESS } from "@/lib/seo";

/** Canonical clinic contact details — single source of truth for the whole site. */
export const CLINIC = {
  name: BUSINESS.name,
  phoneTel: "+40748085933",
  phoneDisplay: "+40 748 085 933",
  email: BUSINESS.email,
  addressLine: "Strada Alverna 33, 400469 Cluj-Napoca",
  addressShort: "Str. Alverna 33, 400469, Cluj-Napoca, Romania",
  website: "https://alvernadental.com",
  websiteDisplay: "alvernadental.com",
  instagramHandle: "@alvernadentalstudio",
  instagramUrl: "https://www.instagram.com/alvernadentalstudio/",
  whatsappUrl: "https://wa.me/40748085933",
  hoursDisplay: "Deschis · Închide la 21",
} as const;
