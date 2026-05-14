"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { asset } from "@/lib/base";

type T = {
  id: string;
  name: string;
  city: string;
  quote: string;
  metric: string;
  metricLabel: string;
  duration: string;
  hasVideo: boolean;
};

// Captions = реальные цитаты из v1 audio-транскриптов (TESTIMONIAL_AUDIO_IMG_*.md)
const items: T[] = [
  {
    id: "anatoly",
    name: "Боксёр",
    city: "Алтай · постоянный",
    quote: "Это качественная инвестиция в себя. На Алтае я сбросил 9 кг.",
    metric: "−9",
    metricLabel: "кг за сборы",
    duration: "0:53",
    hasVideo: true,
  },
  {
    id: "evgenia",
    name: "Участница",
    city: "Постоянная",
    quote: "Полгода тренировок — за две недели работы со Светланой Михайловной.",
    metric: "2",
    metricLabel: "недели = полгода",
    duration: "2:55",
    hasVideo: true,
  },
  {
    id: "group",
    name: "Сергей",
    city: "55 лет",
    quote: "Мне 55. На сборы приехал себя испытать. Будем ездить ещё.",
    metric: "55",
    metricLabel: "лет, не последний раз",
    duration: "5:24",
    hasVideo: true,
  },
  {
    id: "burst",
    name: "Участница",
    city: "С нуля",
    quote: "Светлана Михайловна вообще огонь. Научила многому, с нуля.",
    metric: "0→",
    metricLabel: "с нуля → реально знаю",
    duration: "1:04",
    hasVideo: true,
  },
  {
    id: "schoolgirl",
    name: "Школьница",
    city: "9 класс",
    quote: "Очень понравилось — было место. Самое сложное — отбой.",
    metric: "9",
    metricLabel: "класс",
    duration: "1:30",
    hasVideo: true,
  },
];

// Triplicate для бесконечной карусели
const LOOPED = [...items, ...items, ...items];

export default function VideoTestimonials() {
  const [active, setActive] = useState<T | null>(null);
  const [paused, setPaused] = useState(false);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const cardWidthRef = useRef<number>(296);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>("[data-card]");
    if (firstCard) {
      const fullWidth = firstCard.offsetWidth + 4;
      cardWidthRef.current = fullWidth;
      el.scrollLeft = fullWidth * items.length;
    }
  }, []);

  // Infinite reposition on scroll edge
  const repositionIfNeeded = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardW = cardWidthRef.current;
    const totalW = cardW * items.length;
    if (el.scrollLeft < cardW * 0.5) {
      el.scrollLeft += totalW;
    } else if (el.scrollLeft > totalW * 2 - cardW * 0.5) {
      el.scrollLeft -= totalW;
    }
  }, []);

  // Auto-advance каждые 4.5s (пауза на hover/active/touch/wheel)
  useEffect(() => {
    if (paused || active) return;
    const el = scrollerRef.current;
    if (!el) return;
    const tick = setInterval(() => {
      el.scrollBy({ left: cardWidthRef.current, behavior: "smooth" });
    }, 4500);
    return () => clearInterval(tick);
  }, [paused, active]);

  // Mouse wheel при наведении → horizontal scroll + пауза auto-scroll на 2.5s
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let wheelTimeout: ReturnType<typeof setTimeout> | null = null;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        setPaused(true);
        el.scrollLeft += e.deltaY; // мгновенно, не smooth — чтобы не конфликтовать с auto
        if (wheelTimeout) clearTimeout(wheelTimeout);
        wheelTimeout = setTimeout(() => setPaused(false), 2500);
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
      if (wheelTimeout) clearTimeout(wheelTimeout);
    };
  }, []);

  return (
    <section className="relative bg-charcoal py-section px-5 md:px-10 lg:px-16 border-y border-bone/5 overflow-hidden">
      <div className="relative max-w-container mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-end mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-8 h-px bg-blood" aria-hidden />
              <span className="text-eyebrow uppercase tracking-[0.22em] text-bloodLight">Видеоотзывы</span>
            </div>
            <h2 className="font-display font-black text-hero tracking-display text-bone text-balance">
              Дословно<br />от тех, кто<br />уже был.
            </h2>
          </div>
          <p className="font-mono text-bone/55 text-sm md:text-base max-w-text leading-relaxed text-pretty">
            Видео и голосовые от участников прошлых сборов в Таиланде и Алтае.
            Имена и города — настоящие. Кликни — откроется видеоплеер.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
        >
          <div
            ref={scrollerRef}
            onScroll={repositionIfNeeded}
            className="flex gap-1 overflow-x-auto snap-x snap-mandatory pb-2 -mx-5 md:-mx-10 lg:-mx-16 px-5 md:px-10 lg:px-16 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing scroll-smooth"
          >
            {LOOPED.map((t, i) => (
              <button
                key={`${t.id}-${i}`}
                data-card
                type="button"
                onClick={() => setActive(t)}
                className="snap-start flex-shrink-0 w-[260px] md:w-[300px] bg-graphite border border-bone/8 hover:border-bloodLight transition-colors duration-300 text-left group select-none"
                aria-label={`Видеоотзыв: ${t.name}, ${t.city}`}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-ink">
                  <img
                    src={asset(`/posters/testimonial-${t.id}.jpg`)}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-[400ms] group-hover:scale-105"
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                  <div className="absolute top-3 right-3 text-xs text-bone bg-ink/80 backdrop-blur-sm px-2 py-1 font-mono">
                    {t.duration}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-blood/95 flex items-center justify-center group-hover:bg-bloodLight group-hover:scale-110 transition-all duration-300 shadow-glow">
                      <svg viewBox="0 0 20 20" className="w-6 h-6 md:w-7 md:h-7 ml-1 fill-bone">
                        <path d="M5 4 L15 10 L5 16 Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute left-4 right-4 bottom-4">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-display font-bold text-bone text-lg">{t.name}</span>
                      <span className="font-mono text-xs text-bone/75">{t.city}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-5 space-y-3">
                  <p className="font-display font-bold text-bone/95 text-base md:text-lg leading-snug">
                    <span className="text-bloodLight">«</span>{t.quote}<span className="text-bloodLight">»</span>
                  </p>
                  <div className="flex items-baseline gap-3 pt-2 border-t border-bone/10">
                    <span className="font-mono font-bold text-bloodLight text-2xl md:text-3xl leading-none">{t.metric}</span>
                    <span className="text-eyebrow uppercase tracking-[0.15em] text-bone/65 text-[0.65rem] leading-tight">
                      {t.metricLabel}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-[60] bg-ink/97 flex items-center justify-center p-4 safe-bottom"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Видео ${active.name}`}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center text-bone hover:text-bloodLight text-2xl"
            aria-label="Закрыть видео"
          >
            ✕
          </button>
          <div className="w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
            {active.hasVideo ? (
              <video
                controls
                autoPlay
                playsInline
                preload="auto"
                poster={asset(`/posters/testimonial-${active.id}.jpg`)}
                className="w-full bg-ink"
              >
                <source src={asset(`/video/testimonial-${active.id}.webm`)} type="video/webm" />
                <source src={asset(`/video/testimonial-${active.id}.mp4`)} type="video/mp4" />
                Ваш браузер не поддерживает видео. Позвоните 8-915-100-99-29.
              </video>
            ) : (
              <div className="aspect-video bg-ink flex flex-col items-center justify-center text-center p-8 gap-4">
                <img
                  src={asset(`/posters/testimonial-${active.id}.jpg`)}
                  alt=""
                  className="w-32 h-32 object-cover rounded-full opacity-70"
                />
                <p className="font-display font-bold text-bone text-xl">Видео скоро будет добавлено</p>
                <p className="text-bone/70 max-w-md italic">«{active.quote}»</p>
                <p className="text-bone/60 text-sm">— {active.name}, {active.city}</p>
              </div>
            )}
            <div className="mt-4 flex justify-between items-baseline gap-4">
              <div>
                <p className="font-display font-bold text-bone text-lg">{active.name}</p>
                <p className="text-bone/65 text-sm">{active.city}</p>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="font-mono font-bold text-bloodLight text-2xl">{active.metric}</span>
                <span className="text-eyebrow uppercase tracking-[0.15em] text-bone/65 text-xs">{active.metricLabel}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
