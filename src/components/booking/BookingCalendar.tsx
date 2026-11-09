"use client";

import { useLayoutEffect, useState, type CSSProperties, type RefObject } from "react";
import { createPortal } from "react-dom";

const WEEKDAYS = ["Lu", "Ma", "Mi", "Jo", "Vi", "Sâ", "Du"];
const MONTHS = [
  "Ianuarie",
  "Februarie",
  "Martie",
  "Aprilie",
  "Mai",
  "Iunie",
  "Iulie",
  "August",
  "Septembrie",
  "Octombrie",
  "Noiembrie",
  "Decembrie",
];

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function toYmd(date: Date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function addMonths(date: Date, amount: number) {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1);
}

function cellsFor(month: Date) {
  const first = startOfMonth(month);
  const weekday = (first.getDay() + 6) % 7;
  const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const prevDays = new Date(month.getFullYear(), month.getMonth(), 0).getDate();
  const today = toYmd(new Date());
  const items: Array<{ ymd: string; day: number; inMonth: boolean; disabled: boolean }> = [];

  for (let i = 0; i < weekday; i += 1) {
    const day = prevDays - weekday + 1 + i;
    const prev = addMonths(month, -1);
    const ymd = `${prev.getFullYear()}-${pad(prev.getMonth() + 1)}-${pad(day)}`;
    items.push({ ymd, day, inMonth: false, disabled: true });
  }
  for (let day = 1; day <= daysInMonth; day += 1) {
    const ymd = `${month.getFullYear()}-${pad(month.getMonth() + 1)}-${pad(day)}`;
    items.push({ ymd, day, inMonth: true, disabled: ymd < today });
  }
  let nextDay = 1;
  while (items.length < 42) {
    const next = addMonths(month, 1);
    const ymd = `${next.getFullYear()}-${pad(next.getMonth() + 1)}-${pad(nextDay)}`;
    items.push({ ymd, day: nextDay, inMonth: false, disabled: true });
    nextDay += 1;
  }
  return items;
}

export function BookingCalendar({
  value,
  onChange,
  anchorRef,
}: {
  value: string;
  onChange: (ymd: string) => void;
  anchorRef: RefObject<HTMLElement | null>;
}) {
  const selected = value ? new Date(`${value}T00:00:00`) : new Date();
  const [cursor, setCursor] = useState(startOfMonth(selected));
  const [style, setStyle] = useState<CSSProperties>({ opacity: 0 });
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    setReady(true);
    function place() {
      const anchor = anchorRef.current;
      if (!anchor) return;
      const rect = anchor.getBoundingClientRect();
      const width = Math.min(340, Math.max(280, rect.width));
      const left = Math.min(Math.max(12, rect.left), window.innerWidth - width - 12);
      const top = rect.bottom + 10;
      setStyle({
        position: "fixed",
        top,
        left,
        width,
        opacity: 1,
      });
    }
    place();
    window.addEventListener("resize", place);
    window.addEventListener("scroll", place, true);
    return () => {
      window.removeEventListener("resize", place);
      window.removeEventListener("scroll", place, true);
    };
  }, [anchorRef]);

  if (!ready) return null;

  return createPortal(
    <div
      role="dialog"
      aria-label="Alege data"
      className="ads-booking-calendar relative z-[80] rounded-[22px] border border-black/10 bg-[#ffffff] p-4 shadow-[0_22px_60px_rgba(0,0,0,0.28)]"
      style={style}
    >
      <span aria-hidden className="absolute -top-2 left-8 h-4 w-4 rotate-45 rounded-[3px] border-l border-t border-black/10 bg-[#ffffff]" />
      <div className="relative z-10 mb-2 flex items-center justify-between gap-2">
        <button type="button" className="flex h-9 w-9 items-center justify-center text-[20px]" onClick={() => setCursor(addMonths(cursor, -1))} aria-label="Luna anterioară">
          ‹
        </button>
        <p className="text-[15px] font-semibold">
          {MONTHS[cursor.getMonth()]} {cursor.getFullYear()}
        </p>
        <button type="button" className="flex h-9 w-9 items-center justify-center text-[20px]" onClick={() => setCursor(addMonths(cursor, 1))} aria-label="Luna următoare">
          ›
        </button>
      </div>
      <div className="ads-booking-weekday relative z-10 grid grid-cols-7 text-center text-[11px] font-semibold uppercase tracking-[0.04em]">
        {WEEKDAYS.map((day) => (
          <span key={day} className="ads-booking-weekday py-1 whitespace-nowrap">
            {day}
          </span>
        ))}
      </div>
      <div className="relative z-10 grid grid-cols-7 text-center">
        {cellsFor(cursor).map((cell) => (
          <button
            key={cell.ymd}
            type="button"
            disabled={cell.disabled}
            onClick={() => onChange(cell.ymd)}
            className={`ads-booking-day mx-auto flex h-9 w-full max-w-9 items-center justify-center rounded-full text-[13px] font-medium ${
              cell.ymd === value ? "is-selected" : !cell.inMonth || cell.disabled ? "is-muted" : ""
            }`}
          >
            {cell.day}
          </button>
        ))}
      </div>
    </div>,
    document.body,
  );
}
