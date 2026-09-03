"use client";

import Link from "next/link";
import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { CaseClickOverlay } from "@/components/cazuri/CaseClickOverlay";
import { getCaseHrefForImage } from "@/config/cases";

type CaseImageProps = Omit<HTMLMotionProps<"div">, "children"> & {
  src: string;
  alt?: string;
  overlayLabel?: string;
};

export function CaseImage({ src, alt, className, overlayLabel, ...motionProps }: CaseImageProps) {
  const reduceMotion = useReducedMotion();
  const href = getCaseHrefForImage(src);
  const isClickable = Boolean(href);

  const shell = (
    <motion.div
      className={`group relative overflow-hidden ${isClickable ? "cursor-pointer" : ""} ${className ?? ""}`}
      whileHover={reduceMotion || !isClickable ? {} : { y: -6, scale: 1.012 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      {...motionProps}
    >
      <motion.img
        src={src}
        alt={alt ?? ""}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
        whileHover={reduceMotion || !isClickable ? {} : { scale: 1.06 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      />
      {isClickable && <CaseClickOverlay label={overlayLabel} />}
    </motion.div>
  );

  if (!href) return shell;

  return (
    <Link
      href={href}
      className="block rounded-[inherit] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black/40"
      aria-label="Vezi cazul în detaliu"
    >
      {shell}
    </Link>
  );
}
