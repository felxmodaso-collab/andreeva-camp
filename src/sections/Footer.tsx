export default function Footer() {
  return (
    <footer className="bg-ink border-t border-bone/10 px-5 md:px-10 lg:px-16 py-12 md:py-16">
      <div className="max-w-container mx-auto grid md:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-16">
        <div>
          <div className="font-display font-black text-h2 text-bone leading-none">КИТЭК · Алтай 2026</div>
          <p className="mt-4 text-bone/55 text-sm md:text-base max-w-text text-pretty">
            Сборы по боксу под руководством Светланы Михайловны Андреевой.
            3—11 июня 2026, Чемальский район, Республика Алтай.
          </p>
        </div>

        <div>
          <div className="text-eyebrow uppercase tracking-[0.18em] text-bone/65 mb-4">Связь</div>
          <div className="flex flex-col gap-2">
            <a
              href="tel:+79151009929"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blood text-bone text-sm md:text-base font-bold hover:bg-bloodLight transition-colors focusable"
            >
              <svg aria-hidden viewBox="0 0 16 16" className="w-3.5 h-3.5"><path d="M3.5 1.5l3 1L5 5l2 4 3-1 1 3-2 2c-3.5 0-7-3.5-7-7l1.5-3.5z" fill="currentColor"/></svg>
              Позвонить
            </a>
            <a
              href="https://t.me/+79151009929"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-bone/30 text-bone text-sm md:text-base font-bold hover:bg-bone/5 hover:border-bloodLight transition-colors focusable"
            >
              <svg aria-hidden viewBox="0 0 16 16" className="w-3.5 h-3.5"><path d="M15 2L1.5 7.5l4 1.2L13 4 7 10v3l2.2-2 3.4 2.5L15 2z" fill="currentColor"/></svg>
              Telegram
            </a>
            <a
              href="https://instagram.com/svetlana_andreeva_coach"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-bone/30 text-bone text-sm md:text-base font-bold hover:bg-bone/5 hover:border-bloodLight transition-colors focusable"
            >
              <svg aria-hidden viewBox="0 0 16 16" className="w-3.5 h-3.5"><rect x="2" y="2" width="12" height="12" rx="3" stroke="currentColor" fill="none" strokeWidth="1.5"/><circle cx="8" cy="8" r="2.5" stroke="currentColor" fill="none" strokeWidth="1.5"/><circle cx="11.5" cy="4.5" r="0.75" fill="currentColor"/></svg>
              Instagram
            </a>
          </div>
        </div>

        <div>
          <div className="text-eyebrow uppercase tracking-[0.18em] text-bone/65 mb-4">Клуб</div>
          <ul className="space-y-2 text-bone/75 text-sm md:text-base">
            <li>Москва, Открытое шоссе, 15с21</li>
            <li>
              <a
                href="https://kitek-andreeva.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-bloodLight transition-colors focusable"
              >
                kitek-andreeva.ru ↗
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-bone/10 flex flex-wrap items-center justify-between gap-4 text-bone/60 font-mono text-xs">
        <span>© 2026 КИТЭК</span>
        <span>Все права защищены</span>
      </div>
    </footer>
  );
}
