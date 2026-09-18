"use client";

type CaseClickOverlayProps = {
  label?: string;
  compact?: boolean;
};

export function CaseClickOverlay({ label = "Vezi cazul", compact = false }: CaseClickOverlayProps) {
  return (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] bg-black/0 transition-colors duration-300 ease-out group-hover:bg-black/35 group-focus-visible:bg-black/35"
      />

      <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-start p-4">
        <span
          className={`inline-flex items-center gap-2 font-semibold text-white transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] opacity-90 group-hover:translate-x-[3px] group-hover:opacity-100 group-focus-visible:translate-x-[3px] ${
            compact ? "text-[16px]" : "text-[18px] md:text-[21px]"
          }`}
        >
          {label}
          <span aria-hidden>→</span>
        </span>
      </span>
    </>
  );
}
