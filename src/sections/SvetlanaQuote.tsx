import Image from "next/image";
import { asset } from "@/lib/base";

export default function SvetlanaQuote() {
  return (
    <section className="relative bg-ink overflow-hidden border-y border-bone/5">
      <div className="grid lg:grid-cols-2 items-stretch">
        <div className="relative min-h-[60vh] lg:min-h-[80vh] bg-charcoal">
          <Image
            src={asset("/img/svetlana_3.jpg")}
            alt="Светлана Андреева показывает технику ученице на сборах"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
            style={{ filter: "saturate(0.7) contrast(1.05) brightness(0.92)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-ink/30" />
        </div>

        <div className="relative px-5 md:px-10 lg:px-16 py-section flex items-center">
          <div className="max-w-text">
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-block w-8 h-px bg-blood" aria-hidden />
              <span className="text-eyebrow uppercase tracking-[0.22em] text-bloodLight">От тренера</span>
            </div>

            <blockquote className="font-display font-extrabold text-h1 md:text-hero text-bone leading-tight text-balance">
              <span className="text-blood">«</span>Сборы дают <span className="text-blood">стартануть с мёртвой точки</span>. Когда уже думаешь, что прогресса нет — ты просто бежишь на месте<span className="text-blood">»</span>.
            </blockquote>

            <footer className="mt-8 md:mt-10 flex items-center gap-4 md:gap-5">
              <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden bg-charcoal border-2 border-bloodLight/30 flex-shrink-0">
                <Image
                  src={asset("/img/svetlana-avatar.jpg")}
                  alt="Светлана Андреева"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-display font-bold text-bone text-lg md:text-xl leading-tight">Светлана Андреева</div>
                <div className="text-bone/70 text-sm md:text-base mt-0.5">Чемпионка мира и Европы · тренер сборов</div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}
