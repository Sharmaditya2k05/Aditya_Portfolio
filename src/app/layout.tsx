import type { Metadata } from "next";
import { Kanit, Syne, DM_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SITE_METADATA } from "@/data/config";
import { NoiseOverlay } from "@/components/shared/NoiseOverlay";
import { Toaster } from "@/components/ui/toaster";

// ─── Font Loading ─────────────────────────────────────────────────────────────

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-mono",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    default: SITE_METADATA.title,
    template: `%s — ${SITE_METADATA.name}`,
  },
  description: SITE_METADATA.description,
  keywords: [...SITE_METADATA.keywords],
  authors: [{ name: SITE_METADATA.name, url: SITE_METADATA.url }],
  creator: SITE_METADATA.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_METADATA.url,
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    siteName: SITE_METADATA.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    creator: SITE_METADATA.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL(SITE_METADATA.url),
};

// ─── Layout ───────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${kanit.variable} ${syne.variable} ${dmMono.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-bg text-ink antialiased selection:bg-border selection:text-ink">
        <NoiseOverlay />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
