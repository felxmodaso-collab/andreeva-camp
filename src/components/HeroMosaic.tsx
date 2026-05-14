"use client";
import { asset } from "@/lib/base";

const tiles = [
  "m1-coach",
  "m2-action",
  "m3-pads",
  "m4-spar",
  "m5-tech",
  "m6-cross",
  "m7-bag",
  "m8-camp",
  "m9-strict",
  "m10-finish",
];

/**
 * Видео-мозаика в Hero — 10 коротких лупов из исходников Светланы.
 * Накладывается ПОВЕРХ статичного фона с blend-mode + opacity.
 * Mobile: 2 cols × 5 rows. Desktop: 5 cols × 2 rows.
 */
export default function HeroMosaic() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 grid grid-cols-2 md:grid-cols-5 grid-rows-5 md:grid-rows-2 gap-[1px] pointer-events-none"
      style={{ mixBlendMode: "screen", opacity: 0.55 }}
    >
      {tiles.map((t, i) => (
        <div key={t} className="relative overflow-hidden bg-ink">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: "saturate(1.05) contrast(1.05)",
              animationDelay: `${i * 200}ms`,
            }}
          >
            <source src={asset(`/video/hero/${t}.webm`)} type="video/webm" />
            <source src={asset(`/video/hero/${t}.mp4`)} type="video/mp4" />
          </video>
        </div>
      ))}
    </div>
  );
}
