import Image from "next/image";
import Reveal from "@/components/Reveal";
import SplitWords from "@/components/SplitWords";
import { images } from "@/lib/images";

const hours = [
  { day: "Mardi — Vendredi", time: "10:00 — 20:00" },
  { day: "Samedi", time: "09:00 — 19:00" },
  { day: "Dimanche — Lundi", time: "Sur rendez-vous privé" },
];

export default function Manifesto() {
  return (
    <section id="rendez-vous" className="relative overflow-hidden bg-obsidian">
      {/* interior backdrop */}
      <div className="absolute inset-0">
        <Image
          src={images.interior.src}
          alt={images.interior.alt}
          fill
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/70 to-obsidian" />
        <div className="vignette absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 py-32 lg:px-12 lg:py-44">
        <Reveal className="flex items-center gap-5">
          <span className="font-serif text-sm italic text-ivory-dim">04</span>
          <span className="h-px w-16 bg-ivory/30" />
          <p className="section-label text-[10px] font-medium uppercase text-ivory-dim">
            Rendez-vous
          </p>
        </Reveal>

        <h2 className="mt-16 max-w-5xl font-serif text-4xl font-medium leading-[1.12] text-ivory sm:text-5xl lg:mt-24 lg:text-7xl">
          <SplitWords text="La beauté n'est pas" wordClassName="mr-[0.24em]" />
          <SplitWords
            text="un ornement."
            wordClassName="mr-[0.24em] italic text-ivory-soft"
            delay={0.12}
          />
          <SplitWords
            text="C'est une attitude."
            wordClassName="mr-[0.24em] italic text-ivory-soft"
            delay={0.22}
          />
        </h2>

        <div className="mt-20 grid grid-cols-1 gap-14 lg:mt-28 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <a
                href="#top"
                className="group relative inline-flex items-center gap-5 overflow-hidden rounded-full border border-ivory/40 px-10 py-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-ivory transition-colors duration-500 hover:text-obsidian"
              >
                <span className="absolute inset-0 -translate-x-full bg-ivory transition-transform duration-500 ease-out group-hover:translate-x-0" />
                <span className="relative">Prendre rendez-vous</span>
                <span className="relative transition-transform duration-500 group-hover:translate-x-2">
                  →
                </span>
              </a>
              <p className="mt-8 max-w-sm text-[13px] leading-relaxed tracking-wide text-ivory/60">
                Les places sont limitées à douze rendez-vous par jour. Chaque
                consultation commence par un café, une écoute et une esquisse.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.1}>
              <div className="border border-ivory/10 bg-charcoal/70 p-8 backdrop-blur-sm lg:p-10">
                <p className="section-label text-[10px] font-medium uppercase text-ivory-dim">
                  Heures
                </p>
                <dl className="mt-6 divide-y divide-ivory/10">
                  {hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex items-baseline justify-between py-4"
                    >
                      <dt className="text-[12px] tracking-[0.14em] text-ivory/80">
                        {h.day}
                      </dt>
                      <dd className="font-serif text-sm italic text-ivory-soft">
                        {h.time}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6 border-t border-ivory/10 pt-6">
                  <p className="text-[12px] tracking-[0.14em] text-ivory/80">
                    12 Rue de la Lune, 75001 Paris
                  </p>
                  <p className="mt-2 text-[12px] tracking-[0.14em] text-ivory/60">
                    +33 1 42 60 00 00 — atelier@luna.paris
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
