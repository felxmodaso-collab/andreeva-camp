const items = [
  "★ Третья тренировка-разбор · только на этих сборах",
  "★ 800 000 подписчиков · IG @svetlana_andreeva_coach",
  "★ Финальный кросс на гору Будда",
  "★ Сертификат КИТЭК после сборов",
  "★ Трансфер из/до Горно-Алтайска включён",
  "★ −30% для КМС, 1 разряда, МС",
  "★ 9 дней, 13 тренировок, режим",
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div
      aria-hidden
      className="relative bg-blood text-bone overflow-hidden border-y border-bloodDark"
    >
      <div className="flex whitespace-nowrap animate-marquee py-3 md:py-4">
        {doubled.map((t, i) => (
          <span key={i} className="font-display font-extrabold uppercase tracking-[0.05em] text-sm md:text-base inline-flex items-center gap-6 px-6">
            {t}
            <span className="text-bone/40">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
