export const ANALYTICS_EVENTS = {
  formStart: "form_start",
  formSubmit: "form_submit",
  phoneClick: "phone_click",
  whatsappClick: "whatsapp_click",
} as const;

type AnalyticsEvent = (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS];

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function hasAnalyticsConsent() {
  try {
    return window.localStorage.getItem("ads-cookie-consent") === "accepted";
  } catch {
    return false;
  }
}

export function trackEvent(name: AnalyticsEvent, params: Record<string, string> = {}) {
  if (typeof window === "undefined" || !hasAnalyticsConsent()) return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event: name, ...params });
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}
