const schema = {
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  name: "Сборы по боксу на Алтае со Светланой Андреевой",
  description:
    "9-дневные сборы по боксу под руководством тренера Светланы Андреевой (клуб КИТЭК). 13 тренировок, эксклюзивная третья тренировка, мастер-класс, баня, сертификат.",
  startDate: "2026-06-03T12:00:00+07:00",
  endDate: "2026-06-11T07:00:00+07:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Чемальский район, Республика Алтай",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Республика Алтай",
      addressCountry: "RU",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Клуб КИТЭК",
    url: "https://kitek-andreeva.ru",
  },
  performer: {
    "@type": "Person",
    name: "Светлана Михайловна Андреева",
    jobTitle: "Тренер по боксу",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Стандарт",
      price: "75000",
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Люкс индивидуальный",
      price: "135000",
      priceCurrency: "RUB",
      availability: "https://schema.org/LimitedAvailability",
    },
    {
      "@type": "Offer",
      name: "Люкс семейный",
      price: "165000",
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
    },
  ],
};

export default function Schema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
