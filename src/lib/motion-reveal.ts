export const revealMotion = {
  initial: { opacity: 0, y: 28, scale: 0.99 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.75, ease: "easeOut" as const },
} as const;

export function motionRevealProps(ready: boolean) {
  return ready ? revealMotion : ({ initial: false as const } as const);
}
