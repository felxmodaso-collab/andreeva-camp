export default function Exclusive() {
  return (
    <section className="relative bg-ink py-section px-5 md:px-10 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] aspect-square rounded-full bg-blood/[0.06] blur-3xl" />
      </div>

      <div className="relative max-w-narrow mx-auto text-center">
        <div className="inline-flex items-center gap-3 mb-8">
          <span className="inline-block w-8 h-px bg-blood" aria-hidden />
          <span className="inline-flex items-center gap-2 text-eyebrow uppercase tracking-[0.22em] text-bloodLight">
            <svg aria-hidden viewBox="0 0 12 12" className="w-2.5 h-2.5"><polygon points="6,1 11,11 1,11" fill="currentColor" /></svg>
            Эксклюзив
          </span>
          <span className="inline-block w-8 h-px bg-blood" aria-hidden />
        </div>

        <h2 className="font-display font-black text-mega tracking-display text-bone text-balance">
          Авторский подход.
        </h2>

        <blockquote className="mt-10 md:mt-12 text-bone/85 text-lg md:text-2xl leading-relaxed text-pretty font-medium italic max-w-text mx-auto">
          «Бокс — сложный спорт. Нельзя просто махать руками. На этой тренировке
          мы берём один элемент — шаг, уклон, удар — и 40 минут доводим его до автоматизма.
          Чтобы голова выключилась, а тело запомнило. Это моя фишка, так никто не делает».
          <footer className="not-italic font-sans text-base md:text-base text-bone/55 mt-5 font-normal">
            — Светлана Андреева
          </footer>
        </blockquote>

        <ul className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-bone/10 border border-bone/10">
          {[
            { v: "40", l: "минут" },
            { v: "1", l: "элемент" },
            { v: "13", l: "тренировок всего" },
            { v: "0", l: "других сборов с таким подходом" },
          ].map((s) => (
            <li key={s.l} className="bg-ink px-4 py-6 md:py-10">
              <div className="font-mono font-bold text-bloodLight text-3xl md:text-5xl leading-none">{s.v}</div>
              <div className="mt-3 text-eyebrow uppercase tracking-[0.18em] text-bone/55">{s.l}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
