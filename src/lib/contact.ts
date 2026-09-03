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
  mapsPlaceUrl:
    "https://www.google.com/maps/place/Alverna+Dental+Studio/@46.758115,23.6122138,17z/",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=46.758115,23.6122138&destination_place_id=ChIJz_1ICEoMSUcR70_NRTusDCQ",
} as const;
