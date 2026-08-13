import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "LUNA — Maison de Coiffure",
  description:
    "LUNA is a luxury hair atelier in Paris. Precision cuts, couture colour and ritual care — sculpted in shadow and light. 48.8566° N, 2.3522° E.",
  openGraph: {
    title: "LUNA — Maison de Coiffure",
    description:
      "Precision cuts, couture colour and ritual care — sculpted in shadow and light.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1515138692129-197a2c608cfd?w=1600&q=80&auto=format&fit=crop",
        width: 1600,
        height: 900,
        alt: "LUNA — Maison de Coiffure",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-obsidian text-ivory">
        {children}
      </body>
    </html>
  );
}
