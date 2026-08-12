"use client";

import { useEffect, useState } from "react";
import { WEDDING_DATE } from "@/lib/site-data";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function calculateTimeLeft(): TimeLeft {
  const difference = Math.max(0, new Date(WEDDING_DATE).getTime() - Date.now());

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

type CountdownProps = {
  copy: {
    aria: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
};

export function Countdown({ copy }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const initialTimer = window.setTimeout(() => setTimeLeft(calculateTimeLeft()), 0);
    const timer = window.setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => {
      window.clearTimeout(initialTimer);
      window.clearInterval(timer);
    };
  }, []);

  const units = [
    { label: copy.days, value: timeLeft?.days },
    { label: copy.hours, value: timeLeft?.hours },
    { label: copy.minutes, value: timeLeft?.minutes },
    { label: copy.seconds, value: timeLeft?.seconds },
  ];

  return (
    <div
      aria-label={copy.aria}
      aria-live="polite"
      className="mx-auto grid max-w-4xl grid-cols-2 gap-px border border-[var(--line)] border-t-2 border-t-[var(--hero-gold)] bg-[var(--line)] sm:grid-cols-4"
    >
      {units.map((unit) => (
        <div
          className="flex flex-col items-center bg-[var(--paper)] px-3 py-6 sm:px-6 sm:py-8"
          key={unit.label}
        >
          <span className="font-serif min-h-[2.9rem] text-4xl tabular-nums tracking-[-0.04em] text-[var(--sage-dark)] sm:min-h-[4.5rem] sm:text-6xl">
            {unit.value === undefined ? "—" : String(unit.value).padStart(2, "0")}
          </span>
          <span className="mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-[var(--muted)] sm:text-[0.66rem] sm:tracking-[0.22em]">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
