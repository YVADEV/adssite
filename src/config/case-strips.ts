export type CaseStripItem = {
  src: string;
  poster: string;
  ariaLabel: string;
  loadDelayMs?: number;
};

/** Default strip — generic before/after showcase. */
export const DEFAULT_CASE_STRIP: CaseStripItem[] = [
  {
    src: "/cazuri-1.mp4",
    poster: "/services/exam-male.png",
    ariaLabel: "Caz tratat — fațete dentare, vedere generală",
  },
  {
    src: "/cori-angel.mp4",
    poster: "/services/smile-mirror.png",
    ariaLabel: "Caz tratat — restaurare estetică completă",
    loadDelayMs: 400,
  },
  {
    src: "/cazuri-2.mp4",
    poster: "/services/whitening-2.png",
    ariaLabel: "Caz tratat — albire profesională și aliniere",
    loadDelayMs: 200,
  },
];

/** Implant / chirurgie — relevant posters without changing page copy. */
export const IMPLANT_CASE_STRIP: CaseStripItem[] = [
  {
    src: "/cazuri-1.mp4",
    poster: "/services/implant-model-1.png",
    ariaLabel: "Caz implant dentar — planificare și intervenție",
  },
  {
    src: "/cori-angel.mp4",
    poster: "/services/implant-model-2.png",
    ariaLabel: "Caz implant dentar — reabilitare protetică",
    loadDelayMs: 400,
  },
  {
    src: "/cazuri-2.mp4",
    poster: "/services/lab-hands-model.png",
    ariaLabel: "Caz implant dentar — etapă protetică în laborator",
    loadDelayMs: 200,
  },
];
