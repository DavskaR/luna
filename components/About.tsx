import Image from "next/image";
import Reveal from "@/components/Reveal";
import SplitWords from "@/components/SplitWords";
import { images } from "@/lib/images";

const services = [
  {
    index: "01",
    title: "Dámské",
    text: "Střihy, barvení, melíry, balayage i keratin, šité na míru každé klientce.",
  },
  {
    index: "02",
    title: "Pánské",
    text: "Klasika i moderní trendy, střih strojkem, úprava vousů i věneček.",
  },
  {
    index: "03",
    title: "Dětské",
    text: "Trpělivý přístup a šikovné ruce. První střih bez slziček.",
  },
];

export default function About() {
  return (
    <section
      id="o-nas"
      className="relative overflow-hidden bg-coal py-28 lg:py-40"
    >
      {/* bristle texture field */}
      <div className="bristle bristle-fade absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-12">
        <Reveal className="flex items-center gap-5">
          <span className="font-serif text-sm italic text-ivory-dim">01</span>
          <span className="h-px w-16 bg-ivory/30" />
          <p className="section-label text-[10px] font-medium uppercase text-ivory-dim">
            O nás
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:mt-24 lg:grid-cols-12 lg:gap-8">
          {/* statement */}
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl font-medium leading-[1.08] text-ivory sm:text-5xl xl:text-6xl">
              <span className="block">
                <SplitWords
                  text="Vlasy nejsou jen účes."
                  wordClassName="mr-[0.26em]"
                />
              </span>
              <span className="block">
                <SplitWords
                  text="Jsou první věta,"
                  wordClassName="mr-[0.26em] italic text-ivory-soft"
                  delay={0.15}
                />
              </span>
              <span className="block">
                <SplitWords
                  text="kterou o vás řeknou."
                  wordClassName="mr-[0.26em] italic text-ivory-soft"
                  delay={0.25}
                />
              </span>
            </h2>
          </div>

          {/* editorial copy on charcoal tile */}
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.1}>
              <div className="relative border border-ivory/10 bg-charcoal/80 p-8 lg:p-10">
                <span className="absolute -left-3 -top-3 h-6 w-6 rounded-full border border-ivory/25" />
                <p className="text-[13px] leading-relaxed tracking-wide text-ivory/70">
                  Kadeřnictví LUNA najdete na {"Severní\u00A0Terase"}
                  <br />
                  {"Ústí\u00A0nad\u00A0Labem"}, v {"Mírové\u00A0ulici"}, kde se
                  o vaše vlasy
                  <br />
                  staráme s citem, přesností a dobrým slovem navíc.
                </p>
                <p className="mt-5 text-[13px] leading-relaxed tracking-wide text-ivory/70">
                  Od klasického střihu po svatební účes.
                  <br />
                  Vše pod jednou střechou: pro dámy, pány i děti.
                </p>
                <div className="mt-8 flex items-center justify-between border-t border-ivory/10 pt-6">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-ivory-dim">
                    {"Mírová\u00A02861/6"}
                  </span>
                  <span className="font-serif text-lg italic text-ivory-soft">
                    {"Severní\u00A0Terasa"}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* services trio + portrait medallion */}
        <div className="mt-20 grid grid-cols-1 items-center gap-12 lg:mt-28 lg:grid-cols-12 lg:gap-8">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <div className="grid grid-cols-1 divide-y divide-ivory/10 border-y border-ivory/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {services.map((service, i) => (
                <Reveal
                  key={service.index}
                  delay={i * 0.12}
                  className="px-4 py-8 lg:px-8 lg:py-10"
                >
                  <p className="font-serif text-sm italic text-ivory-dim">
                    {service.index}
                  </p>
                  <p className="mt-3 font-serif text-3xl font-medium text-ivory lg:text-4xl">
                    {service.title}
                  </p>
                  <p className="mt-4 text-[12px] leading-relaxed tracking-wide text-ivory/60">
                    {service.text}
                  </p>
                </Reveal>
              ))}
            </div>
            {/* awards */}
            <Reveal delay={0.2} className="mt-10 flex flex-wrap items-center gap-4">
              <span className="rounded-full border border-ivory/25 px-5 py-2 text-[10px] uppercase tracking-[0.28em] text-ivory/85">
                ★ Laureát {"Orlové\u00A0krásky"} 2026
              </span>
              <span className="rounded-full border border-ivory/25 px-5 py-2 text-[10px] uppercase tracking-[0.28em] text-ivory/85">
                ★ Vítěz soutěže {"Zlatá\u00A0firma"}
              </span>
            </Reveal>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:col-span-4 lg:col-start-9 lg:justify-end">
            <Reveal delay={0.15}>
              <figure className="relative">
                <div className="group relative h-72 w-72 overflow-hidden rounded-full ring-1 ring-ivory/20 lg:h-80 lg:w-80">
                  <Image
                    src={images.portrait.src}
                    alt={images.portrait.alt}
                    fill
                    sizes="(min-width: 1024px) 320px, 288px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(10,9,8,0.9)]" />
                </div>
                <figcaption className="mt-4 text-center text-[9px] uppercase tracking-[0.34em] text-ivory-dim">
                  Péče s citem, každý den
                </figcaption>
                <span className="float-y chrome-text absolute -left-8 top-8 font-serif text-6xl italic opacity-80">
                  ✂
                </span>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
