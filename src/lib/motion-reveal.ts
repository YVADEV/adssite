export const revealMotion = {
  initial: false as const,
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
} as const;

export function motionRevealProps(_ready: boolean) {
  return revealMotion;
}
