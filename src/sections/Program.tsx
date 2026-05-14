import { asset } from "@/lib/base";

const schedule = [
  { time: "07:30", title: "Утренняя тренировка", body: "Акцент на выносливость и силу." },
  { time: "10:00", title: "Завтрак", body: "Питание три раза в день включено в стоимость." },
  { time: "11:30", title: "Тренировка-практикум ▲", body: "Разбор одного технического элемента в мини-группе." },
  { time: "13:30", title: "Обед и восстановление", body: "Свободное время, сон, бассейн, баня." },
  { time: "17:00", title: "Вечерняя тренировка", body: "Отработка техники, работа в парах, спарринги." },
  { time: "20:00", title: "Ужин и видеоразбор", body: "Смотрим отснятый за день материал, исправляем ошибки." },
  { time: "23:00", title: "Отбой", body: "Опоздал — ночной кросс." },
];

export default function Program() {
  return (
    <section className="relative bg-charcoal py-section px-5 md:px-10 lg:px-16 border-y border-bone/5 overflow-hidden">
      <div className="relative max-w-container mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-8 h-px bg-blood" aria-hidden />
              <span className="text-eyebrow uppercase tracking-[0.22em] text-bloodLight">День сборов</span>
            </div>
            <h2 className="font-display font-black text-hero tracking-display text-bone text-balance">
              Один день на сборах.
            </h2>
            <p className="mt-6 text-bone/70 text-base md:text-lg leading-relaxed max-w-text">
              Подъём в 7:30, отбой в 23:00. Между ними — две тренировки и видеоразбор.
            </p>

            {/* Видео-обложка IMG_3673 (готовый монтаж со сборов) */}
            <figure className="mt-8 relative aspect-video bg-ink border border-bone/15 overflow-hidden group">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={asset("/video/act-1-2-bg.webm")} type="video/webm" />
                <source src={asset("/video/act-1-2-bg.mp4")} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent pointer-events-none" />
              <figcaption className="absolute left-4 bottom-3 right-4 flex items-center gap-2 text-eyebrow uppercase tracking-[0.22em] text-bloodLight font-medium">
                <span className="inline-block w-6 h-px bg-bloodLight" aria-hidden />
                Атмосфера сборов
              </figcaption>
            </figure>
          </div>

          <ol className="relative">
            <span aria-hidden className="absolute left-[1.3rem] md:left-[1.7rem] top-2 bottom-2 w-px bg-bone/10" />
            {schedule.map((s, i) => (
              <li key={s.time} className="relative pl-12 md:pl-16 pb-10 last:pb-0">
                <span
                  aria-hidden
                  className={`absolute left-0 top-1 w-[2.6rem] md:w-[3.4rem] h-[2.6rem] md:h-[3.4rem] flex items-center justify-center rounded-full font-mono text-[10px] md:text-xs font-bold ${
                    s.title.includes("★") ? "bg-blood text-bone" : "bg-bone/8 text-bone border border-bone/15"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="font-mono text-eyebrow uppercase tracking-[0.18em] text-bone/55 mb-1">{s.time}</div>
                <h3 className="font-display font-extrabold text-h2 text-bone text-balance">{s.title}</h3>
                <p className="mt-2 text-bone/65 text-base md:text-lg leading-relaxed text-pretty max-w-text">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
