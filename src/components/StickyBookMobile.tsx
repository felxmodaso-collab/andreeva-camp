"use client";
import { useEffect, useState } from "react";

export default function StickyBookMobile() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const handler = () => setShown(window.scrollY > 800);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      aria-hidden={!shown}
      className={`md:hidden fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 ${
        shown ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(env(safe-area-inset-bottom), 0.5rem)" }}
    >
      <div className="mx-3 mb-3 grid grid-cols-2 gap-2">
        <a
          href="tel:+79151009929"
          className="flex items-center justify-center gap-2 px-3 py-3 bg-blood text-bone font-medium shadow-deep"
          aria-label="Позвонить менеджеру"
        >
          <svg aria-hidden viewBox="0 0 16 16" className="w-4 h-4"><path d="M3.5 1.5l3 1L5 5l2 4 3-1 1 3-2 2c-3.5 0-7-3.5-7-7l1.5-3.5z" fill="currentColor"/></svg>
          <span className="font-display font-bold text-sm">Позвонить</span>
        </a>
        <a
          href="https://t.me/+79151009929"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-3 py-3 bg-bone text-ink font-medium shadow-deep"
          aria-label="Написать в Telegram"
        >
          <svg aria-hidden viewBox="0 0 16 16" className="w-4 h-4"><path d="M15 2L1.5 7.5l4 1.2L13 4 7 10v3l2.2-2 3.4 2.5L15 2z" fill="currentColor"/></svg>
          <span className="font-display font-bold text-sm">Telegram</span>
        </a>
      </div>
    </div>
  );
}
