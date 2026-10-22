export const mobileMenuItemClass =
  "ads-menu-index-row group flex min-h-12 w-full items-center gap-3 border-b border-white/10 py-0 text-left text-[clamp(21px,6vw,25px)] font-semibold leading-[1.1] tracking-[-0.03em] text-white transition-colors duration-200 hover:text-[color:var(--ads-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--ads-accent)]";

export const mobileMenuEmergencyClass =
  "ads-menu-index-row group flex min-h-12 w-full items-center gap-3 border-b border-white/10 py-0 text-left text-[clamp(21px,6vw,25px)] font-semibold leading-[1.1] tracking-[-0.03em] text-[color:var(--ads-accent)] transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--ads-accent)]";

export const mobileMenuOutlineClass =
  "flex min-h-12 w-full items-center border-b border-white/8 py-0 text-left text-[16px] font-medium leading-[1.3] tracking-[-0.02em] text-white/80 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--ads-accent)]";

export function mobileMenuClassForLabel(label: string) {
  return label === "Urgențe" ? mobileMenuEmergencyClass : mobileMenuItemClass;
}
