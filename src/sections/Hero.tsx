import Image from "next/image";
import Button from "@/components/Button";
import Counter from "@/components/Counter";
import HeroMosaic from "@/components/HeroMosaic";
import { asset } from "@/lib/base";

export default function Hero() {

  return (
    <section className="relative full-h overflow-hidden bg-ink grain">
      <div className="absolute inset-0">
        {/* Базовый фон — фото базы */}
        <Image
          src={asset("/img/photo_4@02-05-2026_17-48-17.jpg")}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center animate-ken-burns"
          style={{ filter: "saturate(0.65) contrast(1.05) brightness(0.95)" }}
          aria-hidden
        />
        {/* Видео-мозаика поверх фото (10 видео из исходников Светланы как декор) */}
        <HeroMosaic />
        {/* Маски для читаемости текста — такие же как раньше */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/35 to-ink/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/15 to-ink/50" />
      </div>

      <div
        className="relative z-10 flex flex-col h-full px-5 md:px-10 lg:px-16 pt-[calc(env(safe-area-inset-top)+1.5rem)] pb-[calc(env(safe-area-inset-bottom)+1.5rem)]"
      >
        <header className="flex items-center justify-between gap-4">
          <a href="#" className="text-eyebrow uppercase tracking-[0.22em] text-bone/80 font-medium">
            КИТЭК · Алтай 2026
          </a>
          <a
            href="tel:+79151009929"
            className="hidden md:inline-block text-eyebrow uppercase tracking-[0.22em] text-bone/80 hover:text-bone font-medium transition-colors focusable"
          >
            8-915-100-99-29
          </a>
        </header>

        <div className="flex-1 flex flex-col justify-center md:justify-end max-w-container mx-auto w-full pt-6 md:pt-0">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-5 md:mb-7 animate-fade-up">
            <div className="flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-blood" aria-hidden />
              <span className="text-eyebrow uppercase tracking-[0.22em] text-bloodLight font-medium">
                3—11 июня 2026
              </span>
            </div>
            <span className="text-eyebrow uppercase tracking-[0.22em] text-river font-medium">
              · Алтай
            </span>
          </div>

          <h1 className="font-display font-black text-mega tracking-display text-balance text-bone leading-[0.95] animate-fade-up" style={{ animationDelay: "60ms" }}>
            <span className="block text-bone">Чемпионка</span>
            <span className="block text-blood">мира и Европы</span>
            <span className="block text-bone/85 text-h1 mt-2 font-extrabold">по боксу и кикбоксингу.</span>
          </h1>

          <p className="mt-6 md:mt-8 max-w-text text-pretty text-xl md:text-3xl text-bone leading-[1.05] font-display font-extrabold animate-fade-up" style={{ animationDelay: "140ms" }}>
            <span className="block text-5xl md:text-7xl text-bloodLight font-black uppercase tracking-tight leading-none mb-1">Лично</span>
            работает с каждым.
          </p>

          <p className="mt-3 max-w-text text-pretty text-lg md:text-2xl text-bone/80 leading-snug font-display font-bold animate-fade-up" style={{ animationDelay: "170ms" }}>
            Не отпуск. <span className="text-blood">Сборы.</span>
          </p>

          <p className="mt-5 max-w-text text-pretty text-base md:text-lg text-bone/70 leading-relaxed animate-fade-up" style={{ animationDelay: "200ms" }}>
            9 дней. 13 тренировок, видеоразбор техники и финальный кросс на гору Будда — в Чемальском Алтае.
          </p>

          <div className="mt-8 md:mt-10 flex flex-wrap gap-3 md:gap-4 animate-fade-up" style={{ animationDelay: "220ms" }}>
            <Button href="#pricing">Оставить заявку</Button>
            <Button href="https://t.me/+79151009929" variant="secondary" external>
              <svg aria-hidden viewBox="0 0 16 16" className="w-4 h-4"><path d="M15 2L1.5 7.5l4 1.2L13 4 7 10v3l2.2-2 3.4 2.5L15 2z" fill="currentColor"/></svg>
              Telegram
            </Button>
          </div>

          <div className="mt-8 md:mt-12 grid grid-cols-3 gap-4 md:gap-10 animate-fade-up max-w-xl" style={{ animationDelay: "300ms" }}>
            <div className="flex flex-col border-t border-bone/20 pt-3">
              <span className="font-mono text-2xl md:text-4xl font-bold leading-none text-bloodLight">
                <Counter target={43} duration={1200} />/50
              </span>
              <span className="mt-2 text-eyebrow uppercase tracking-[0.18em] text-bone/55 leading-tight">уже занято</span>
            </div>
            <Stat value="13" label="тренировок" />
            <Stat value="9" label="дней на Алтае" />
          </div>
        </div>

        <div className="mt-10 hidden md:flex items-center gap-3 text-eyebrow uppercase tracking-[0.22em] text-bone/60 animate-breathe">
          <span className="h-3 w-px bg-bone/40" aria-hidden />
          <span>Скролл вниз</span>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label, highlight }: { value: string; label: string; highlight?: boolean }) {
  return (
    <div className="flex flex-col border-t border-bone/20 pt-3">
      <span
        className={`font-mono text-2xl md:text-4xl font-bold leading-none ${
          highlight ? "text-bloodLight" : "text-bone"
        }`}
      >
        {value}
      </span>
      <span className="mt-2 text-eyebrow uppercase tracking-[0.18em] text-bone/55 leading-tight">{label}</span>
    </div>
  );
}
