import Image from "next/image";
import Reveal from "@/components/Reveal";
import { images } from "@/lib/images";

type PriceRow = { name: string; price: string };
type PriceGroup = { title: string; note?: string; rows: PriceRow[] };

const damskaKratke: PriceGroup = {
  title: "Krátké vlasy",
  rows: [
    { name: "Mytí + foukaná", price: "290 Kč" },
    { name: "Mytí + střih + foukaná", price: "480 Kč" },
    { name: "Barva + mytí + foukaná", price: "920 Kč" },
    { name: "Přeliv + mytí + střih + foukaná", price: "900 Kč" },
    { name: "Melír + mytí + střih + foukaná", price: "1 350 Kč" },
    { name: "Melír + mytí + přeliv + střih + foukaná", price: "1 650 Kč" },
    { name: "Keratin", price: "2 300 Kč" },
  ],
};

const damskaPolodlouhe: PriceGroup = {
  title: "Polodlouhé vlasy",
  rows: [
    { name: "Mytí + foukaná", price: "350 Kč" },
    { name: "Mytí + střih + foukaná", price: "570 Kč" },
    { name: "Barva + mytí + foukaná", price: "1 220 Kč" },
    { name: "Přeliv + mytí + střih + foukaná", price: "1 200 Kč" },
    { name: "Melír + mytí + střih + foukaná", price: "1 750 Kč" },
    { name: "Melír + mytí + přeliv + střih + foukaná", price: "2 050 Kč" },
    { name: "Freehand (balayage, ombre)", price: "2 300 Kč" },
    { name: "Keratin", price: "2 500 Kč" },
  ],
};

const damskaDlouhe: PriceGroup = {
  title: "Dlouhé vlasy",
  rows: [
    { name: "Mytí + foukaná", price: "410 Kč" },
    { name: "Mytí + střih + foukaná", price: "620 Kč" },
    { name: "Barva + mytí + foukaná", price: "1 570 Kč" },
    { name: "Přeliv + mytí + střih + foukaná", price: "1 550 Kč" },
    { name: "Melír + mytí + střih + foukaná", price: "2 050 Kč" },
    { name: "Melír + mytí + přeliv + střih + foukaná", price: "2 450 Kč" },
    { name: "Freehand (balayage, ombre)", price: "2 700 Kč" },
    { name: "Keratin", price: "2 700 Kč" },
  ],
};

const pani: PriceGroup = {
  title: "Páni",
  rows: [
    { name: "Pánský střih", price: "250 Kč" },
    { name: "Pánský střih s mytím", price: "300 Kč" },
    { name: "Střih + vousy bez mytí", price: "330 Kč" },
    { name: "Střih + vousy + mytí", price: "370 Kč" },
    { name: "Střih strojkem", price: "170 Kč" },
    { name: "Věneček", price: "120 Kč" },
    { name: "Úprava vousu", price: "100 Kč" },
  ],
};

const deti: PriceGroup = {
  title: "Děti",
  rows: [
    { name: "Dívky střih bez mytí", price: "250 Kč" },
    { name: "Dívky střih s mytím", price: "300 Kč" },
    { name: "Chlapci střih bez mytí", price: "200 Kč" },
    { name: "Chlapci střih s mytím", price: "250 Kč" },
  ],
};

const dalsi: PriceGroup = {
  title: "Další služby",
  note: "ceny platí při objednání",
  rows: [
    { name: "Vymývací lázeň", price: "od 600 Kč" },
    { name: "Společenský účes", price: "od 600 Kč" },
    { name: "Melír 1 alobal", price: "70 Kč" },
    { name: "Ofina", price: "60 Kč" },
    { name: "Barvení obočí", price: "70 Kč" },
  ],
};

function PriceBlock({ group, delay }: { group: PriceGroup; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <div className="group relative">
        <h3 className="flex items-baseline justify-between border-b border-ivory/20 pb-4">
          <span className="font-serif text-2xl font-medium text-ivory">
            {group.title}
          </span>
          {group.note && (
            <span className="text-[9px] uppercase tracking-[0.26em] text-ivory-dim">
              {group.note}
            </span>
          )}
        </h3>
        <ul>
          {group.rows.map((row) => (
            <li
              key={row.name}
              className="flex items-baseline justify-between gap-4 border-b border-ivory/10 py-3 transition-all duration-300 hover:translate-x-1 hover:border-ivory/30"
            >
              <span className="text-[12px] tracking-[0.1em] text-ivory/75 transition-colors group-hover:text-ivory/90">
                {row.name}
              </span>
              <span className="flex-1 border-b border-dotted border-ivory/15" />
              <span className="whitespace-nowrap font-serif text-sm italic text-ivory-soft">
                {row.price}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function Cenik() {
  return (
    <section id="cenik" className="relative bg-obsidian py-28 lg:py-40">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <Reveal className="flex items-center gap-5">
          <span className="font-serif text-sm italic text-ivory-dim">02</span>
          <span className="h-px w-16 bg-ivory/30" />
          <p className="section-label text-[10px] font-medium uppercase text-ivory-dim">
            Ceník
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-14 lg:mt-24 lg:grid-cols-12 lg:gap-10">
          {/* intro column */}
          <div className="lg:col-span-3">
            <Reveal delay={0.08}>
              <h2 className="font-serif text-3xl font-medium leading-tight text-ivory lg:text-5xl">
                Férové ceny,
                <br />
                <span className="italic text-ivory-soft">poctivá práce.</span>
              </h2>
              <p className="mt-6 max-w-xs text-[13px] leading-relaxed tracking-wide text-ivory/60">
                Každá návštěva začíná konzultací. Poradíme, co vašim vlasům
                svědčí, a cenu znáte předem.
              </p>
            </Reveal>
            <Reveal delay={0.16} className="mt-10">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl ring-1 ring-ivory/15">
                <Image
                  src={images.services[0].src}
                  alt={images.services[0].alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 90vw"
                  className="object-cover grayscale-[35%] transition-[filter] duration-700 hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />
                <p className="absolute bottom-4 left-4 font-serif text-sm italic text-ivory">
                  S důvěrou i pro ty nejmenší
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.22} className="mt-8">
              <a
                href="tel:+420775209128"
                className="link-line text-[11px] font-semibold uppercase tracking-[0.3em] text-ivory"
              >
                Natálie 775 209 128
              </a>
              <span className="mx-3 text-ivory-dim">·</span>
              <a
                href="tel:+420777029971"
                className="link-line text-[11px] font-semibold uppercase tracking-[0.3em] text-ivory"
              >
                Lucie 777 029 971
              </a>
            </Reveal>
          </div>

          {/* price tables */}
          <div className="lg:col-span-9">
            <div className="mb-10 flex items-center gap-4">
              <span className="h-px w-10 bg-ivory/30" />
              <p className="font-serif text-lg italic text-ivory-soft">Dámy</p>
            </div>
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 xl:grid-cols-3 xl:gap-10">
              <PriceBlock group={damskaKratke} delay={0.05} />
              <PriceBlock group={damskaPolodlouhe} delay={0.1} />
              <PriceBlock group={damskaDlouhe} delay={0.15} />
            </div>

            <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 xl:grid-cols-3 xl:gap-10">
              <PriceBlock group={pani} delay={0.05} />
              <PriceBlock group={deti} delay={0.1} />
              <PriceBlock group={dalsi} delay={0.15} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
