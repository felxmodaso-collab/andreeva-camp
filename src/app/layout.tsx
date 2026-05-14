import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const display = Inter_Tight({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  display: "swap",
  weight: ["700", "800", "900"],
});

const mono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "700"],
});

const SITE = "https://anton.github.io/andreeva-camp";
const TITLE = "Сборы по боксу на Алтае · 3–11 июня 2026 · Светлана Андреева";
const DESCRIPTION =
  "9 дней. 13 тренировок. Эксклюзивный разбор техники со Светланой Андреевой (КИТЭК). Чемальский район, Республика Алтай. Хардкор, не фитнес-лагерь.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: SITE,
    siteName: "Сборы Андреевой · Алтай",
    locale: "ru_RU",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Сборы по боксу на Алтае" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/og.jpg"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0C0C0E",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
