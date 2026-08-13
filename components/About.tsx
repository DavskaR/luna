import Image from "next/image";
import Reveal from "@/components/Reveal";
import SplitWords from "@/components/SplitWords";
import { images } from "@/lib/images";

const stats = [
  { value: "14", unit: "ans", label: "de précision" },
  { value: "32", unit: "", label: "artisans & coloristes" },
  { value: "18", unit: "prix", label: "internationaux" },
];

export default function About() {
  return (
    <section
      id="atelier"
      className="relative overflow-hidden bg-coal py-28 lg:py-40"
    >
      {/* bristle texture field */}
      <div className="bristle bristle-fade absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-12">
        <Reveal className="flex items-center gap-5">
          <span className="font-serif text-sm italic text-ivory-dim">01</span>
          <span className="h-px w-16 bg-ivory/30" />
          <p className="section-label text-[10px] font-medium uppercase text-ivory-dim">
            L&rsquo;Atelier
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:mt-24 lg:grid-cols-12 lg:gap-8">
          {/* statement */}
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl font-medium leading-[1.08] text-ivory sm:text-5xl xl:text-6xl">
              <SplitWords
                text="La coiffure n'est pas un service."
                wordClassName="mr-[0.26em]"
              />
              <SplitWords
                text="C'est une écriture"
                wordClassName="mr-[0.26em] italic text-ivory-soft"
                delay={0.15}
              />
              <SplitWords
                text="de lumière."
                wordClassName="mr-[0.26em] italic text-ivory-soft"
                delay={0.25}
              />
            </h2>
          </div>

          {/* editorial copy on charcoal tile */}
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.1}>
              <div className="relative border border-ivory/10 bg-charcoal/80 p-8 lg:p-10">
                <span className="absolute -left-3 -top-3 h-6 w-6 rounded-full border border-ivory/25" />
                <p className="text-[13px] leading-relaxed tracking-wide text-ivory/70">
                  Dans un espace baigné d&rsquo;obsidienne, chaque coupe est
                  dessinée comme une silhouette de haute couture — un jeu de
                  clair-obscur entre la matière et la main.
                </p>
                <p className="mt-5 text-[13px] leading-relaxed tracking-wide text-ivory/70">
                  Nos artisans travaillent à la lame japonaise et au pinceau de
                  lumière, sculptant des chevelures qui vivent autant dans
                  l&rsquo;ombre que dans le jour.
                </p>
                <div className="mt-8 flex items-center justify-between border-t border-ivory/10 pt-6">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-ivory-dim">
                    Atelier — Paris 1er
                  </span>
                  <span className="font-serif text-lg italic text-ivory-soft">
                    depuis 2012
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* stats + portrait medallion */}
        <div className="mt-20 grid grid-cols-1 items-center gap-12 lg:mt-28 lg:grid-cols-12 lg:gap-8">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <div className="grid grid-cols-3 divide-x divide-ivory/10 border-y border-ivory/10">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 0.12} className="px-4 py-8 lg:px-8 lg:py-10">
                  <p className="font-serif text-4xl font-medium text-ivory lg:text-6xl">
                    {stat.value}
                    {stat.unit && (
                      <span className="ml-1 text-lg italic text-ivory-dim lg:text-2xl">
                        {stat.unit}
                      </span>
                    )}
                  </p>
                  <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-ivory-dim">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:col-span-4 lg:col-start-9 lg:justify-end">
            <Reveal delay={0.15}>
              <figure className="relative">
                <div className="relative h-72 w-72 overflow-hidden rounded-full ring-1 ring-ivory/20 lg:h-80 lg:w-80">
                  <Image
                    src={images.portrait.src}
                    alt={images.portrait.alt}
                    fill
                    sizes="(min-width: 1024px) 320px, 288px"
                    className="object-cover grayscale"
                  />
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(10,9,8,0.9)]" />
                </div>
                <figcaption className="mt-4 text-center text-[9px] uppercase tracking-[0.34em] text-ivory-dim">
                  Hiver 2025 — Séance
                </figcaption>
                <span className="chrome-text absolute -left-8 top-8 font-serif text-6xl italic opacity-80">
                  *
                </span>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
