import Image from "next/image";
import { asset } from "@/lib/base";

const gallery = [
  { src: "photo_3@02-05-2026_17-47-02.jpg", alt: "Ночной вид: подсвеченный бассейн и деревянная лестница", w: "md:col-span-3 md:row-span-2" },
  { src: "photo_18@06-05-2026_20-12-46.jpg", alt: "Группа бежит по горной дороге", pos: "object-[center_25%]" },
  { src: "photo_2@02-05-2026_17-45-50.jpg", alt: "Деревянные корпуса базы на склоне, бассейны и горы" },
  { src: "photo_20@06-05-2026_20-12-46.jpg", alt: "Конная прогулка группы по полю — горы вдали", w: "md:col-span-2", pos: "object-[center_20%]" },
];

export default function Location() {
  return (
    <section className="relative bg-ink overflow-hidden">
      <div className="relative h-[55vh] md:h-[70vh] min-h-[420px] md:min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 scale-[1.08]">
          <Image
            src={asset("/img/photo_4@02-05-2026_17-48-17.jpg")}
            alt="Вид на территорию базы Чемальская Лагуна с воздуха — бассейны, горы и река Катунь"
            fill
            sizes="100vw"
            className="object-cover object-center animate-ken-burns"
            style={{ filter: "saturate(0.7) contrast(1.05) brightness(1)" }}
          />
        </div>
        {/* Маски того же типа что Hero — двойной градиент */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/25 to-ink/85 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/65 via-transparent to-ink/40 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 px-5 md:px-10 lg:px-16 pb-8 md:pb-14">
          <div className="max-w-container mx-auto">
            <span className="font-mono text-eyebrow uppercase tracking-[0.28em] text-riverLight">
              N 51°41′ · E 86°02′
            </span>
            <h3 className="mt-3 font-display font-black text-mega tracking-display text-bone leading-[0.92] text-balance">
              «Швейцария<br/>отдыхает».
            </h3>
            <p className="mt-3 text-bone/75 text-sm md:text-base font-mono">— Светлана Андреева, тренер сборов</p>
          </div>
        </div>
      </div>

    <div className="relative py-section px-5 md:px-10 lg:px-16 overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-river/[0.07] blur-3xl pointer-events-none" aria-hidden />
      <div className="relative max-w-container mx-auto">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-10 lg:gap-16 items-end mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-8 h-px bg-river" aria-hidden />
              <span className="text-eyebrow uppercase tracking-[0.22em] text-riverLight">Где это</span>
            </div>
            <h2 className="font-display font-black text-hero tracking-display text-bone text-balance">
              Чемальский&nbsp;район.<br/>
              <span className="text-river">Республика Алтай.</span>
            </h2>
          </div>
          <div className="lg:pt-8">
            <p className="text-bone/80 text-base md:text-lg leading-relaxed max-w-text text-pretty">
              База в Чемальском районе. Вокруг — сосновый лес и горы. Рядом — бирюзовая река Катунь.
              Участники говорят, что один только воздух помогает восстанавливаться.
            </p>
            <p className="mt-4 text-bone/75 text-base md:text-lg leading-relaxed max-w-text text-pretty">
              <span className="text-bone">Финальный кросс на гору Будда</span> — проверка
              характера в последний день сборов.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-3 md:auto-rows-[12rem]">
          {gallery.map((g, i) => (
            <div
              key={g.src}
              className={`relative overflow-hidden h-56 md:h-auto ${g.w ?? ""} group`}
            >
              <Image
                src={asset(`/img/${g.src}`)}
                alt={g.alt}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className={`object-cover ${g.pos ?? "object-center"} transition-transform duration-1000 group-hover:scale-105`}
                loading={i < 2 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-bone/80 text-sm md:text-base">
          {[
            ["Трансфер", "Аэропорт ↔ База в обе стороны"],
            ["Питание", "3-разовое, контролируется тренером"],
            ["Баня", "Командой, по графику"],
            ["Бассейн", "На территории, после тренировок"],
          ].map(([t, d]) => (
            <div key={t} className="border-l-2 border-river/40 pl-4 py-2">
              <div className="text-eyebrow uppercase tracking-[0.18em] text-river mb-1">{t}</div>
              <div className="text-bone/70">{d}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}
