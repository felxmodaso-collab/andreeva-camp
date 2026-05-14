"use client";
import { useEffect, useState } from "react";

const TARGET = new Date("2026-06-01T00:00:00+07:00").getTime();

function diff(now: number) {
  const ms = Math.max(0, TARGET - now);
  const days = Math.floor(ms / 86_400_000);
  const hours = Math.floor((ms % 86_400_000) / 3_600_000);
  return { days, hours, done: ms === 0 };
}

export default function Countdown({ className = "" }: { className?: string }) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 60_000);
    return () => clearInterval(id);
  }, []);

  if (now === null) {
    return (
      <span className={className} aria-hidden>
        — дней до закрытия набора
      </span>
    );
  }

  const { days, hours, done } = diff(now);
  if (done) return <span className={className}>Набор закрыт</span>;

  return (
    <span className={className}>
      <span className="font-mono font-bold text-bloodLight">{days}</span> дней{" "}
      <span className="font-mono font-bold text-bloodLight">{hours}</span> ч до закрытия набора
    </span>
  );
}
