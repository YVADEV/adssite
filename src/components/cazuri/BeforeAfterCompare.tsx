"use client";

import { useCallback, useId, useRef, useState } from "react";

type BeforeAfterCompareProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforePosition?: string;
  afterPosition?: string;
  className?: string;
};

export function BeforeAfterCompare({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel = "Înainte",
  afterLabel = "După",
  beforePosition = "center center",
  afterPosition = "center center",
  className = "",
}: BeforeAfterCompareProps) {
  const id = useId();
  const frameRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const [pos, setPos] = useState(50);

  const setFromClientX = useCallback((clientX: number) => {
    const frame = frameRef.current;
    if (!frame) return;
    const rect = frame.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, next)));
  }, []);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    setFromClientX(event.clientX);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    setFromClientX(event.clientX);
  };

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div
      ref={frameRef}
      className={`relative isolate overflow-hidden bg-black select-none ${className}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      style={{ touchAction: "none" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={afterSrc}
        alt={afterAlt}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: afterPosition }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={beforeSrc}
        alt={beforeAlt}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          objectPosition: beforePosition,
          clipPath: `inset(0 ${100 - pos}% 0 0)`,
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 z-[2] w-px bg-white/80"
        style={{ left: `${pos}%` }}
      />

      <span className="pointer-events-none absolute left-4 top-4 z-[3] rounded-full bg-black/50 px-3 py-1.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-white">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-4 top-4 z-[3] rounded-full bg-black/50 px-3 py-1.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-white">
        {afterLabel}
      </span>

      <label className="sr-only" htmlFor={id}>
        Compară înainte și după
      </label>
      <input
        id={id}
        type="range"
        min={4}
        max={96}
        value={pos}
        onChange={(event) => setPos(Number(event.target.value))}
        className="absolute inset-0 z-[4] cursor-ew-resize opacity-0"
        aria-valuetext={`${Math.round(pos)}% înainte`}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 z-[5] flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/55 text-white"
        style={{ left: `${pos}%` }}
      >
        <span className="translate-y-px text-[16px] leading-none tracking-tight">‹ ›</span>
      </div>
    </div>
  );
}
