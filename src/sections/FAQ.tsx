"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Какой уровень подготовки нужен?",
    a: "От новичка до КМС. Если вы готовы к двум тренировкам в день и жёсткой дисциплине — справитесь. Нагрузку подберём.",
  },
  {
    q: "Питание и проживание включены?",
    a: "Да. Проживание на базе, трёхразовое питание и все тренировки — в стоимости. Общий трансфер из аэропорта Горно-Алтайска тоже.",
  },
  {
    q: "Есть ли скидки?",
    a: "Минус 30% для действующих КМС, МС и боксёров 1-го разряда. Уточните регалии до оплаты — зафиксируем скидку.",
  },
  {
    q: "Как забронировать место?",
    a: "Позвоните по телефону или оставьте заявку в Telegram — с вами свяжутся в ближайшее время.",
  },
  {
    q: "Зачем такой строгий режим?",
    a: "Девять дней работают только когда режим держится. Утро, две тренировки, разбор вечером, нормальный сон. Без этого результата за такой срок не бывает.",
  },
  {
    q: "Финальный кросс на гору — это обязательно?",
    a: "Это вызов. Каждый бежит в своём темпе, главное — дойти. Это проверка характера, которую проходят все участники в конце сборов. Вы откроетесь себе совершенно с другой стороны.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-charcoal py-section px-5 md:px-10 lg:px-16 border-y border-bone/5">
      <div className="max-w-container mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-8 h-px bg-blood" aria-hidden />
              <span className="text-eyebrow uppercase tracking-[0.22em] text-bloodLight">Что надо знать</span>
            </div>
            <h2 className="font-display font-black text-hero tracking-display text-bone text-balance">
              Самые<br/>частые<br/>вопросы.
            </h2>
            <p className="mt-6 text-bone/65 text-base md:text-lg leading-relaxed max-w-text text-pretty">
              Не нашли свой вопрос? Позвоните нам:{" "}
              <a href="tel:+79151009929" className="text-bloodLight hover:text-bone underline underline-offset-4 decoration-bloodLight/50 hover:decoration-bone focusable">
                8-915-100-99-29
              </a>
            </p>
          </div>

          <ul className="divide-y divide-bone/10 border-t border-b border-bone/10">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={i}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between gap-6 py-6 md:py-8 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blood/60"
                  >
                    <span className="flex items-baseline gap-4 flex-1">
                      <span className="font-mono text-bone/60 text-xs md:text-sm pt-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display font-bold text-h2 text-bone text-balance">{f.q}</span>
                    </span>
                    <span
                      aria-hidden
                      className={`flex-shrink-0 w-7 h-7 mt-1 border border-bone/30 grid place-items-center transition-transform duration-200 ${
                        isOpen ? "rotate-45 bg-blood border-blood text-bone" : "text-bone/60"
                      }`}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                        <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.6" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96 pb-6 md:pb-8" : "max-h-0"
                    }`}
                  >
                    <p className="pl-10 md:pl-12 pr-6 text-bone/75 text-base md:text-lg leading-relaxed text-pretty max-w-text">
                      {f.a}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
