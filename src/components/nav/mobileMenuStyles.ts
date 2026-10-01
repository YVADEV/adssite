export const mobileMenuItemClass =
  "ads-btn-green-glow-sm inline-flex min-h-[48px] w-full items-center justify-start rounded-full px-5 text-[17px] font-semibold tracking-[-0.02em]";

export const mobileMenuEmergencyClass =
  "ads-btn-emergency-glow inline-flex min-h-[48px] w-full items-center justify-start rounded-full px-5 text-[17px] font-semibold tracking-[-0.02em]";

export const mobileMenuOutlineClass =
  "ads-btn-green-glow-sm inline-flex min-h-[44px] w-full items-center justify-start rounded-full px-5 text-[16px] font-medium";

export function mobileMenuClassForLabel(label: string) {
  return label === "Urgențe" ? mobileMenuEmergencyClass : mobileMenuItemClass;
}
