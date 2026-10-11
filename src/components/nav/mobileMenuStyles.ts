export const mobileMenuItemClass =
  "ads-menu-index-row group flex min-h-14 w-full items-center gap-4 border-b border-white/10 py-1 text-left text-[clamp(20px,6.2vw,26px)] font-semibold leading-[1.12] tracking-[-0.03em] text-white transition-colors duration-200 hover:text-[#B6B94C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B6B94C]";

export const mobileMenuEmergencyClass =
  "ads-menu-index-row group flex min-h-14 w-full items-center gap-4 border-b border-white/10 py-1 text-left text-[clamp(20px,6.2vw,26px)] font-semibold leading-[1.12] tracking-[-0.03em] text-[#B6B94C] transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B6B94C]";

export const mobileMenuOutlineClass =
  "flex min-h-12 w-full items-center border-b border-white/8 py-1 text-left text-[16px] font-medium leading-[1.3] tracking-[-0.02em] text-white/80 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B6B94C]";

export const mobileMenuNumClass =
  "w-8 shrink-0 pt-[2px] text-[10px] font-medium tabular-nums tracking-[0.18em] text-white/38 group-hover:text-[#B6B94C]";

export function mobileMenuIndex(n: number) {
  return String(n).padStart(2, "0");
}

export function mobileMenuClassForLabel(label: string) {
  return label === "Urgențe" ? mobileMenuEmergencyClass : mobileMenuItemClass;
}
