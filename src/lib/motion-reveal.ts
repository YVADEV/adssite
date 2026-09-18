export const revealMotion = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
} as const;

export function motionRevealProps(ready: boolean) {
  return ready ? revealMotion : ({ initial: false as const } as const);
}
