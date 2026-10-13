"use client";

import { useEffect } from "react";

import { ANALYTICS_EVENTS, hasAnalyticsConsent, trackEvent } from "@/lib/analytics";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

function loadTagManager() {
  if (!GTM_ID || !hasAnalyticsConsent() || document.getElementById("ads-gtm")) return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const script = document.createElement("script");
  script.id = "ads-gtm";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`;
  document.head.appendChild(script);
}

export default function SiteAnalytics() {
  useEffect(() => {
    loadTagManager();

    const onConsent = () => loadTagManager();
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) {
        trackEvent(ANALYTICS_EVENTS.phoneClick, { link_url: href });
      } else if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        trackEvent(ANALYTICS_EVENTS.whatsappClick, { link_url: href });
      }
    };

    window.addEventListener("ads-consent", onConsent);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("ads-consent", onConsent);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
