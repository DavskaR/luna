import type { Metadata } from "next";
import Image from "next/image";
import { fotoMap } from "@/lib/foto-map";

export const metadata: Metadata = {
  title: "Výběr fotek — Kadeřnictví LUNA",
  robots: { index: false, follow: false },
};

const usage: Record<string, string> = {
  "WhatsApp Image 2026-08-14 at 19.32.30 (4).jpeg": "Hero desktop + mobil",
  "WhatsApp Image 2026-08-14 at 19.29.52.jpeg": "O nás (medailon)",
  "WhatsApp Image 2026-08-14 at 19.32.30 (3).jpeg": "Ceník (boční foto)",
  "WhatsApp Image 2026-08-14 at 19.32.31 (1).jpeg": "Kontakt (pozadí)",
  "WhatsApp Image 2026-08-14 at 19.31.56 (2).jpeg": "Galerie 1",
  "WhatsApp Image 2026-08-14 at 19.31.36.jpeg": "Galerie 2",
  "WhatsApp Image 2026-08-14 at 19.29.32.jpeg": "Galerie 3",
  "WhatsApp Image 2026-08-14 at 19.32.30 (2).jpeg": "Galerie 4",
  "WhatsApp Image 2026-08-14 at 19.31.56 (5).jpeg": "Galerie 5",
  "WhatsApp Image 2026-08-14 at 19.32.30 (8).jpeg": "Galerie 6",
};

const slots = [
  "Hero (na šířku 16:9)",
  "O nás (čtverec/kruh)",
  "Ceník (na výšku 4:5)",
  "Kontakt (pozadí na šířku)",
  "Galerie 1 (4:5)",
  "Galerie 2 (4:5)",
  "Galerie 3 (3:4)",
  "Galerie 4 (1:1)",
  "Galerie 5 (3:4)",
  "Galerie 6 (16:10)",
];

export default function FotoVyber() {
  return (
    <main className="min-h-screen bg-obsidian px-6 py-14 text-ivory">
      <div className="mx-auto max-w-[1500px]">
        <p className="section-label text-[10px] font-medium uppercase text-ivory-dim">
          Interní náhled
        </p>
        <h1 className="mt-4 font-serif text-4xl font-medium text-ivory">
          Výběr fotek pro web
        </h1>
        <p className="mt-4 max-w-2xl text-[13px] leading-relaxed tracking-wide text-ivory/70">
          Napiš mi prosím čísla fotek pro tyto pozice:{" "}
          <span className="text-ivory">{slots.join(", ")}</span>. Aktuální
          obsazení je označeno štítky pod fotkami.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {fotoMap.map((entry) => {
            const current = usage[entry.file];
            return (
              <figure
                key={entry.n}
                className="group relative overflow-hidden rounded-lg ring-1 ring-ivory/15"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={`/foto-vyber/${entry.n}.jpg`}
                    alt={`Fotka ${entry.n}`}
                    fill
                    sizes="(min-width: 1280px) 16vw, (min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="flex flex-col gap-1 bg-coal px-3 py-2">
                  <span className="font-serif text-2xl font-medium text-ivory">
                    {entry.n}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-ivory-dim">
                    {current ?? "volná"}
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </main>
  );
}
