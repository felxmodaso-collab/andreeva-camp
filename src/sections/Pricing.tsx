import Button from "@/components/Button";

const tariffs = [
  {
    id: "standard",
    name: "Стандарт",
    sub: "3-местный номер",
    price: 75000,
    per: "за одного · 9 дней",
    perDay: 8333,
    perks: [
      "13 тренировок + ежедневный видеоразбор",
      "3-разовое питание",
      "Баня командой",
      "Мастер-классы",
      "Сертификат о прохождении",
      "Трансфер Горно-Алтайск туда-обратно",
    ],
    cta: "Оставить заявку",
    note: "Самый востребованный тариф",
  },
  {
    id: "luxe-indiv",
    name: "Люкс индивидуальный",
    sub: "2-уровневый номер · 1 в наличии",
    price: 135000,
    per: "за одного · 9 дней",
    perks: ["Всё из Стандарта", "Двухуровневый личный люкс", "Полная приватность"],
    cta: "Забронировать номер",
    accent: true,
    note: "Остался 1 номер",
  },
  {
    id: "luxe-family",
    name: "Люкс семейный",
    sub: "2-уровневый, на двоих",
    price: 165000,
    per: "за двоих · 9 дней",
    perks: [
      "Всё из Стандарта × 2",
      "Двухуровневый номер для пары / семьи",
      "Для двоих выгоднее на 30 000 ₽",
    ],
    cta: "Забронировать вдвоём",
  },
];

function formatPrice(n: number) {
  return new Intl.NumberFormat("ru-RU").format(n);
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-bone text-ink py-[clamp(5rem,12vw,10rem)] px-5 md:px-10 lg:px-16 overflow-hidden grain">
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blood/[0.06] blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-river/[0.08] blur-3xl pointer-events-none" aria-hidden />

      <div className="relative max-w-container mx-auto">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-8 lg:gap-16 items-end mb-14 md:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-8 h-px bg-blood" aria-hidden />
              <span className="text-eyebrow uppercase tracking-[0.22em] text-blood font-medium">Тарифы</span>
            </div>
            <h2 className="font-display font-black text-hero tracking-display text-ink text-balance">
              Три варианта.<br/>Один&nbsp;результат.
            </h2>
          </div>
          <div className="space-y-4 text-ink/75 text-base md:text-lg leading-relaxed max-w-text text-pretty">
            <p>
              <span className="text-blood font-bold text-xl md:text-2xl font-mono">−30%</span>{" "}
              <span className="text-ink/85">для КМС 1 разряда и Мастеров спорта.</span> Уточните регалии — зафиксируем скидку.
            </p>
          </div>
        </div>

        <ul className="space-y-3 md:space-y-0 md:divide-y md:divide-ink/15 md:border-y md:border-ink/15">
          {tariffs.map((t, i) => (
            <li
              key={t.id}
              className={`relative ${
                t.accent
                  ? "border-2 border-blood md:border-0 md:border-l-4 md:border-l-blood md:bg-blood/[0.04]"
                  : "border border-ink/15 md:border-0"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-[minmax(0,2.5fr)_minmax(0,1.6fr)_minmax(0,3fr)_auto] items-start md:items-stretch gap-6 md:gap-8 lg:gap-10 px-6 md:px-8 py-8 md:py-10">
                {/* col 1 — Имя тарифа */}
                <div className="md:min-w-0">
                  <div className={`text-eyebrow uppercase tracking-[0.22em] mb-3 font-medium ${t.accent ? "text-blood" : "text-ink/55"}`}>
                    {t.note ?? `Тариф 0${i + 1}`}
                  </div>
                  <h3 className="font-display font-extrabold text-h2 md:text-h1 text-ink leading-[1.05] text-balance">
                    {t.name}
                  </h3>
                  <div className="mt-2 text-ink/60 text-sm md:text-base">{t.sub}</div>
                </div>

                {/* col 2 — Цена */}
                <div className="md:text-right md:flex md:flex-col md:items-end md:justify-start md:min-w-0">
                  <div className="inline-flex items-baseline gap-2">
                    <span className="font-mono font-bold text-ink text-4xl md:text-5xl leading-none tabular-nums">
                      {formatPrice(t.price)}
                    </span>
                    <span className="font-mono font-bold text-ink/55 text-2xl leading-none">₽</span>
                  </div>
                  <div className="mt-2 text-ink/60 text-sm leading-snug">{t.per}</div>
                </div>

                {/* col 3 — Перечень */}
                <ul className="space-y-2 md:min-w-0">
                  {t.perks.map((p, j) => (
                    <li key={j} className="flex gap-3 items-start text-ink/80 text-sm md:text-base leading-snug">
                      <span aria-hidden className="font-mono text-river text-xs leading-6 flex-shrink-0">→</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                {/* col 4 — CTA */}
                <div className="md:self-center md:flex-shrink-0">
                  <Button
                    href="#contact"
                    variant={t.accent ? "primary" : "secondary"}
                    className={`w-full md:w-auto whitespace-nowrap ${
                      t.accent ? "" : "border-ink/40 text-ink hover:border-ink hover:bg-ink/5"
                    }`}
                  >
                    {t.cta}
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-ink/55 text-xs md:text-sm font-mono max-w-text leading-relaxed">
          Трансфер от/до аэропорта Горно-Алтайск — общий, входит в цену
          (3 июня в 12:00, обратно 11 июня в 07:00).
        </p>
      </div>
    </section>
  );
}
