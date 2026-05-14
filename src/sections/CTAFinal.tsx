import Button from "@/components/Button";
import Countdown from "@/components/Countdown";
import Image from "next/image";
import { asset } from "@/lib/base";

export default function CTAFinal() {
  return (
    <section id="contact" className="relative bg-ink py-section px-5 md:px-10 lg:px-16 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={asset("/img/photo_3@02-05-2026_17-47-02.jpg")}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-50"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/90 to-ink/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 to-transparent" />
      </div>

      <div className="relative max-w-narrow mx-auto text-center">
        <div className="inline-flex items-center gap-3 mb-8">
          <span className="inline-block w-8 h-px bg-blood" aria-hidden />
          <Countdown className="text-eyebrow uppercase tracking-[0.22em] text-bloodLight" />
          <span className="inline-block w-8 h-px bg-blood" aria-hidden />
        </div>

        <h2 className="font-display font-black text-mega tracking-display text-bone text-balance">
          Осталось <span className="text-bloodLight">7</span> мест из 50.
        </h2>
        <h2 className="font-display font-black text-mega tracking-display text-bone/45 text-balance">
          Старт — 3 июня.
        </h2>

        <p className="mt-8 text-bone/80 text-base md:text-lg leading-relaxed max-w-text mx-auto text-pretty">
          Бронь — по телефону или в Telegram. Менеджер ответит на вопросы по тарифам и размещению.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-xl mx-auto">
          <Button href="tel:+79151009929" className="px-6 md:px-10">
            <svg aria-hidden viewBox="0 0 16 16" className="w-4 h-4"><path d="M3.5 1.5l3 1L5 5l2 4 3-1 1 3-2 2c-3.5 0-7-3.5-7-7l1.5-3.5z" fill="currentColor"/></svg>
            8-915-100-99-29
          </Button>
          <Button
            href="https://t.me/+79151009929"
            variant="secondary"
            external
            className="px-6 md:px-10"
          >
            <svg aria-hidden viewBox="0 0 16 16" className="w-4 h-4"><path d="M15 2L1.5 7.5l4 1.2L13 4 7 10v3l2.2-2 3.4 2.5L15 2z" fill="currentColor"/></svg>
            Написать в Telegram
          </Button>
        </div>
      </div>
    </section>
  );
}
