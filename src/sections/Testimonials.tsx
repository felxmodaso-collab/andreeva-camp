type Review = {
  quote: React.ReactNode;
  name: string;
  detail: string;
  metric: string;
  metricLabel: string;
};

const reviews: Review[] = [
  {
    quote: "Сбросил 9 кг. Просто вот кушая то, что мне дают. Алтай вообще моя любовь — горы, свежий воздух, бирюзовая красивейшая река, бассейн.",
    name: "Толя",
    detail: "выступал на профи, ездит на все наши сборы",
    metric: "−9",
    metricLabel: "кг за 9 дней",
  },
  {
    quote: "Я ни капельки не жалею. Очень много внимания технике, разборы, работа над ошибками — это ровно то, что мне хотелось.",
    name: "Евгения",
    detail: "Сидней, Австралия · начала заниматься в октябре",
    metric: "↘",
    metricLabel: "прилетела с другого континента",
  },
  {
    quote: (
      <>
        Появился даже не стержень, а <span className="text-bloodLight">уверенность в&nbsp;себе</span>. Мне нравится это ощущение, что я могу за себя постоять.
      </>
    ),
    name: "Аня",
    detail: "цель — похудеть, подсушиться",
    metric: "✓",
    metricLabel: "цель достигнута",
  },
  {
    quote: (
      <>
        От этих сборов получаю невероятную <span className="text-bloodLight">силу</span>, <span className="text-bloodLight">энергию</span>, и самое главное — <span className="text-bloodLight">дисциплину</span>.
      </>
    ),
    name: "Марина Брони",
    detail: "Чемпионка России по силовому экстриму, Книга Гиннеса",
    metric: "★",
    metricLabel: "регалии в кадре",
  },
  {
    quote: "Я только начала, четыре раза в зал успела сходить — всё равно для меня было место. Группы делятся по уровню.",
    name: "Карина",
    detail: "Санкт-Петербург · новичок",
    metric: "4",
    metricLabel: "тренировки до сборов",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-charcoal py-section px-5 md:px-10 lg:px-16 border-y border-bone/5 overflow-hidden">
      <div className="relative max-w-container mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-end mb-14 md:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-8 h-px bg-blood" aria-hidden />
              <span className="text-eyebrow uppercase tracking-[0.22em] text-bloodLight">Отзывы участников</span>
            </div>
            <h2 className="font-display font-black text-hero tracking-display text-bone text-balance">
              Дословно<br/>от тех, кто<br/>уже был.
            </h2>
          </div>
          <p className="font-mono text-bone/55 text-sm md:text-base max-w-text leading-relaxed text-pretty">
            Фрагменты видеоотзывов и голосовых, оставленных участниками после прошлых сборов Светланы в Таиланде и Алтае.
            Имена и города — настоящие.
          </p>
        </div>

        <ul className="space-y-px bg-bone/10 border-y border-bone/10">
          {reviews.map((r, i) => (
            <li
              key={r.name + i}
              className="bg-charcoal px-5 md:px-10 py-10 md:py-14 grid md:grid-cols-[auto_3fr_1fr] gap-6 md:gap-12 items-start group hover:bg-graphite/40 transition-colors duration-300"
            >
              <div className="font-mono text-bone/55 text-xs md:text-sm pt-2">
                {String(i + 1).padStart(2, "0")} /<br/>{String(reviews.length).padStart(2, "0")}
              </div>

              <div>
                <blockquote className="font-display font-bold text-h2 md:text-h1 text-bone leading-tight text-balance">
                  <span className="text-bloodLight">«</span>{r.quote}<span className="text-bloodLight">»</span>
                </blockquote>
                <footer className="mt-5 md:mt-7 flex items-center gap-4">
                  <span
                    aria-hidden
                    className="flex-shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full bg-river/15 border border-river/30 grid place-items-center font-display font-bold text-river text-lg"
                  >
                    {r.name.charAt(0)}
                  </span>
                  <div>
                    <div className="font-display font-bold text-bone text-base md:text-lg">{r.name}</div>
                    <div className="text-bone/65 text-sm md:text-base mt-0.5">{r.detail}</div>
                  </div>
                </footer>
              </div>

              <div className="md:text-right md:border-l md:border-bone/15 md:pl-6">
                <div className={`font-mono font-bold ${r.metric.length > 2 ? "text-bloodLight text-3xl md:text-4xl" : "text-bloodLight text-5xl md:text-6xl"} leading-none`}>
                  {r.metric}
                </div>
                <div className="text-eyebrow uppercase tracking-[0.18em] text-bone/65 mt-3">
                  {r.metricLabel}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
