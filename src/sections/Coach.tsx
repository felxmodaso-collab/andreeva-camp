import Image from "next/image";
import { asset } from "@/lib/base";

export default function Coach() {
  return (
    <section className="bg-charcoal py-section px-5 md:px-10 lg:px-16 border-y border-bone/5">
      <div className="max-w-container mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-8 h-px bg-blood" aria-hidden />
              <span className="text-eyebrow uppercase tracking-[0.22em] text-bloodLight">Тренер</span>
            </div>
            <h2 className="font-display font-black text-hero tracking-display text-bone text-balance">
              Андреева<br/>Светлана<br/>Михайловна<span className="text-bloodLight">.</span>
            </h2>
            <p className="mt-6 font-display font-extrabold text-h1 text-bone leading-[1.05] text-balance">
              <span className="text-bloodLight">Чемпионка мира</span> и Европы<br/>по <span className="text-bloodLight">боксу</span> и <span className="text-bloodLight">кикбоксингу</span>.
            </p>

            <div className="relative mt-8 aspect-[4/5] overflow-hidden bg-ink lg:hidden">
              <Image
                src={asset("/img/coach_svetlana.jpg")}
                alt="Светлана Михайловна объясняет технику ученику на тренировке"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 text-bone bg-gradient-to-t from-ink/95 to-transparent">
                <span className="text-eyebrow uppercase tracking-[0.18em] text-river">В работе · Алтай</span>
              </div>
            </div>

            <blockquote className="mt-10 text-bone/85 text-base md:text-lg leading-relaxed text-pretty italic max-w-text">
              «Бокс — сложный координационный вид спорта. Здесь нельзя давать „отшибись“
              тренировки. Каждого смотрю лично, веду от начала и до конца».
            </blockquote>
          </div>

          <div className="lg:col-span-7">
            <div className="relative hidden lg:block aspect-[4/5] overflow-hidden bg-ink mb-10">
              <Image
                src={asset("/img/coach_svetlana.jpg")}
                alt="Светлана Михайловна объясняет технику ученику на тренировке"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 text-bone bg-gradient-to-t from-ink/95 via-ink/40 to-transparent">
                <div className="flex items-baseline gap-4">
                  <span className="text-eyebrow uppercase tracking-[0.18em] text-river">В работе</span>
                  <span className="h-px flex-1 bg-river/40" aria-hidden />
                  <span className="text-eyebrow uppercase tracking-[0.18em] text-bone/55">Кадр со сборов</span>
                </div>
              </div>
            </div>

            <dl className="grid grid-cols-2 gap-px bg-bone/10 border border-bone/10">
              {[
                { v: "800K", l: "Instagram", sub: "@svetlana_andreeva_coach" },
                { v: "2.3M", l: "TikTok", sub: "личный канал" },
                { v: "284K", l: "YouTube", sub: "@kitek_boxing" },
                { v: "85K", l: "VK Клуб", sub: "kitek_boxing_club" },
              ].map((s) => (
                <div key={s.l} className="bg-charcoal px-5 py-7 md:px-7 md:py-10">
                  <dt className="font-mono font-bold text-bone text-3xl md:text-5xl leading-none">{s.v}</dt>
                  <dd className="mt-3">
                    <div className="text-eyebrow uppercase tracking-[0.18em] text-bone/55">{s.l}</div>
                    <div className="mt-1 text-bone/55 text-sm font-mono">{s.sub}</div>
                  </dd>
                </div>
              ))}
            </dl>

            <ul className="mt-8 space-y-4 text-bone/80 text-base md:text-lg leading-relaxed">
              <li className="flex gap-4 items-start">
                <span className="font-mono text-river text-sm leading-7 flex-shrink-0">→</span>
                <span>Многолетний опыт работы с боксёрами всех уровней — от подростков-новичков до МС.</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="font-mono text-river text-sm leading-7 flex-shrink-0">→</span>
                <span>Узнаваемый медиа-голос: посты с разбором техники регулярно выходят на 100k+ просмотров.</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="font-mono text-river text-sm leading-7 flex-shrink-0">→</span>
                <span>В сборах участвуют люди из СНГ и зарубежья — Австралия, Дубай, Таиланд.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
