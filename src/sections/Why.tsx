const points = [
  {
    n: "01",
    title: "Разбор техники по видео",
    body: "Каждую тренировку снимаем на видео. Вечером — разбор ошибок с тренером. Что было не так, как исправить, над чем работать завтра.",
  },
  {
    n: "02",
    title: "Тренировка-практикум",
    body: "40 минут теории и отработки одного элемента в середине дня. Шаг, уклон, удар. Ставим базу или доводим до автоматизма то, что уже есть.",
  },
  {
    n: "03",
    title: "Режим",
    body: "Подъём в 7, отбой в 23. Без алкоголя и мата. Штраф за нарушение — ночной кросс. Дисциплина даёт результат.",
  },
  {
    n: "04",
    title: "Алтай",
    body: "База в Чемальском районе. Сосновый лес, горы, бирюзовая река Катунь. Свой бассейн и баня для восстановления.",
  },
  {
    n: "05",
    title: "Любой уровень",
    body: "На прошлых сборах были: КМС, чемпионка из книги рекордов Гиннесса и девушка, которая до этого сходила в зал 4 раза. Главное — готовность работать.",
  },
];

export default function Why() {
  return (
    <section className="bg-ink py-section px-5 md:px-10 lg:px-16">
      <div className="max-w-container mx-auto">
        <div className="flex items-center gap-3 mb-10 md:mb-14">
          <span className="inline-block w-8 h-px bg-blood" aria-hidden />
          <span className="text-eyebrow uppercase tracking-[0.22em] text-bloodLight">Что внутри</span>
        </div>
        <h2 className="font-display font-black text-hero tracking-display text-bone text-balance max-w-narrow">
          Что будет на сборах.
        </h2>

        <ul className="mt-12 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-x-px gap-y-px bg-bone/10">
          {points.map((p, i) => (
            <li
              key={p.n}
              className={`relative overflow-hidden bg-ink px-6 md:px-10 py-10 md:py-14 ${
                i === points.length - 1 && points.length % 2 === 1 ? "lg:col-span-2" : ""
              }`}
            >
              <span
                aria-hidden
                className="absolute -top-4 md:-top-8 -right-2 md:-right-4 font-display font-black text-[8rem] md:text-[14rem] leading-none text-bone/[0.04] select-none pointer-events-none"
              >
                {p.n}
              </span>
              <div className="relative">
                <h3 className="font-display font-extrabold text-h1 text-bone text-balance leading-tight">
                  {p.title}
                </h3>
                <p className="mt-5 md:mt-6 text-bone/75 text-base md:text-lg leading-relaxed text-pretty max-w-text">
                  {p.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
