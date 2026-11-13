import { BUSINESS } from "@/lib/seo";

/** Canonical clinic contact details — single source of truth for the whole site. */
export const CLINIC = {
  name: BUSINESS.name,
  phoneTel: "+40748085933",
  phoneDisplay: "+40 748 085 933",
  email: BUSINESS.email,
  addressLine: "Strada Alverna 33, 400469 Cluj-Napoca",
  addressShort: "Strada Alverna 33, Cluj-Napoca",
  website: "https://alvernadental.com",
  websiteDisplay: "alvernadental.com",
  instagramHandle: "@alvernadentalstudio",
  instagramUrl: "https://www.instagram.com/alvernadentalstudio/",
  facebookUrl: "https://www.facebook.com/AlvernaDentalStudio/?locale=ro_RO",
  whatsappUrl: "https://wa.me/40748085933",
  /** Single schedule string. Schema hours in seo.ts use the same Saturday close (15:00). */
  hoursDisplay: "Luni–Vineri 09:00–21:00 · Sâmbătă 09:00–15:00",
  mailtoSubject: "Programează o consultație",
  mapsPlaceUrl:
    "https://www.google.com/maps/place/Alverna+Dental+Studio/@46.758115,23.6122138,17z/",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=46.758115,23.6122138&destination_place_id=ChIJz_1ICEoMSUcR70_NRTusDCQ",
  /** Anchor on pages that embed the form (homepage, servicii, contact). */
  formAnchor: "#contact",
  /** Full path for pages without an inline form (tarife, testimoniale). */
  formPageHref: "/contact/#contact",
} as const;

export const WHATSAPP_EMERGENCY_MESSAGE =
  "Bună ziua, am o urgență stomatologică și aș dori să discut cu echipa Alverna Dental.";

export function whatsappEmergencyUrl() {
  return `${CLINIC.whatsappUrl}?text=${encodeURIComponent(WHATSAPP_EMERGENCY_MESSAGE)}`;
}

/** Booking form on this route, otherwise the contact page form. */
export function bookingHrefForPath(pathname: string) {
  const path = pathname.replace(/\/$/, "") || "/";
  const hasInlineForm =
    path === "/" ||
    path === "/contact" ||
    path.startsWith("/servicii") ||
    path.startsWith("/urgente-stomatologice-cluj") ||
    /^\/echipa\/.+/.test(path);
  return hasInlineForm ? CLINIC.formAnchor : CLINIC.formPageHref;
}
