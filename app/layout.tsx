import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0908",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Kadeřnictví LUNA | Ústí nad Labem | Profesionální péče o vaše vlasy",
  description:
    "Kadeřnictví LUNA na Severní Terase v Ústí nad Labem. Dámské, pánské i dětské střihy, barvení, melírování, balayage, keratin a svatební účesy. Mírová 2861/6. Natálie: 775 209 128, Lucie: 777 029 971.",
  openGraph: {
    title: "Kadeřnictví LUNA | Ústí nad Labem",
    description:
      "Profesionální péče o vaše vlasy. Dámské • Pánské • Dětské. Mírová 2861/6, Severní Terasa.",
    type: "website",
    locale: "cs_CZ",
    images: [
      {
        url: "https://luna-ten-murex.vercel.app/media/hero-desktop.jpg",
        width: 1600,
        height: 900,
        alt: "Kadeřnictví LUNA | Ústí nad Labem",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="cs"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-obsidian text-ivory">
        {children}
      </body>
    </html>
  );
}
