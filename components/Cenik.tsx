import Image from "next/image";
import Reveal from "@/components/Reveal";
import { images } from "@/lib/images";

type PriceRow = { name: string; price: string };
type PriceGroup = { title: string; note?: string; rows: PriceRow[] };

const damskaKratke: PriceGroup = {
  title: "Krátké vlasy",
  rows: [
    { name: "Mytí +\u00A0foukaní", price: "290\u00A0Kč" },
    { name: "Mytí +\u00A0střih +\u00A0foukaní", price: "480\u00A0Kč" },
    { name: "Barva +\u00A0mytí +\u00A0foukaní", price: "920\u00A0Kč" },
    { name: "Přeliv +\u00A0mytí +\u00A0střih +\u00A0foukaní", price: "900\u00A0Kč" },
    { name: "Melír +\u00A0mytí +\u00A0střih +\u00A0foukaní", price: "1\u00A0350\u00A0Kč" },
    {
      name: "Melír +\u00A0mytí +\u00A0přeliv +\u00A0střih +\u00A0foukaní",
      price: "1\u00A0650\u00A0Kč",
    },
    { name: "Keratin", price: "2\u00A0300\u00A0Kč" },
  ],
};

const damskaPolodlouhe: PriceGroup = {
  title: "Polodlouhé vlasy",
  rows: [
    { name: "Mytí +\u00A0foukaní", price: "350\u00A0Kč" },
    { name: "Mytí +\u00A0střih +\u00A0foukaní", price: "570\u00A0Kč" },
    { name: "Barva +\u00A0mytí +\u00A0foukaní", price: "1\u00A0220\u00A0Kč" },
    { name: "Přeliv +\u00A0mytí +\u00A0střih +\u00A0foukaní", price: "1\u00A0200\u00A0Kč" },
    { name: "Melír +\u00A0mytí +\u00A0střih +\u00A0foukaní", price: "1\u00A0750\u00A0Kč" },
    {
      name: "Melír +\u00A0mytí +\u00A0přeliv +\u00A0střih +\u00A0foukaní",
      price: "2\u00A0050\u00A0Kč",
    },
    { name: "Freehand (balayage, ombre)", price: "2\u00A0300\u00A0Kč" },
    { name: "Keratin", price: "2\u00A0500\u00A0Kč" },
  ],
};

const damskaDlouhe: PriceGroup = {
  title: "Dlouhé vlasy",
  rows: [
    { name: "Mytí +\u00A0foukaní", price: "410\u00A0Kč" },
    { name: "Mytí +\u00A0střih +\u00A0foukaní", price: "620\u00A0Kč" },
    { name: "Barva +\u00A0mytí +\u00A0foukaní", price: "1\u00A0570\u00A0Kč" },
    { name: "Přeliv +\u00A0mytí +\u00A0střih +\u00A0foukaní", price: "1\u00A0550\u00A0Kč" },
    { name: "Melír +\u00A0mytí +\u00A0střih +\u00A0foukaní", price: "2\u00A0050\u00A0Kč" },
    {
      name: "Melír +\u00A0mytí +\u00A0přeliv +\u00A0střih +\u00A0foukaní",
      price: "2\u00A0450\u00A0Kč",
    },
    { name: "Freehand (balayage, ombre)", price: "2\u00A0700\u00A0Kč" },
    { name: "Keratin", price: "2\u00A0700\u00A0Kč" },
  ],
};

const pani: PriceGroup = {
  title: "Páni",
  rows: [
    { name: "Pánský střih", price: "250\u00A0Kč" },
    { name: "Pánský střih s\u00A0mytím", price: "300\u00A0Kč" },
    { name: "Střih +\u00A0vousy bez\u00A0mytí", price: "330\u00A0Kč" },
    { name: "Střih +\u00A0vousy +\u00A0mytí", price: "370\u00A0Kč" },
    { name: "Střih strojkem", price: "170\u00A0Kč" },
    { name: "Věneček", price: "120\u00A0Kč" },
    { name: "Úprava vousu", price: "100\u00A0Kč" },
  ],
};

const deti: PriceGroup = {
  title: "Děti",
  rows: [
    { name: "Dívky, střih bez\u00A0mytí", price: "250\u00A0Kč" },
    { name: "Dívky, střih s\u00A0mytím", price: "300\u00A0Kč" },
    { name: "Chlapci, střih bez\u00A0mytí", price: "200\u00A0Kč" },
    { name: "Chlapci, střih s\u00A0mytím", price: "250\u00A0Kč" },
  ],
};

const dalsi: PriceGroup = {
  title: "Další služby",
  note: "cena dle náročnosti",
  rows: [
    { name: "Vymývací lázeň", price: "od\u00A0600\u00A0Kč" },
    { name: "Společenský účes", price: "od\u00A0600\u00A0Kč" },
    { name: "Melír 1\u00A0alobal", price: "70\u00A0Kč" },
    { name: "Ofina", price: "60\u00A0Kč" },
    { name: "Barvení obočí", price: "70\u00A0Kč" },
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
              <div className="group relative aspect-[4/5] overflow-hidden rounded-xl ring-1 ring-ivory/15">
                <Image
                  src={images.cenik.src}
                  alt={images.cenik.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 90vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />
                <p className="absolute bottom-4 left-4 font-serif text-sm italic text-ivory">
                  S důvěrou i pro ty nejmenší
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.22} className="mt-8 flex flex-col gap-3">
              <a
                href="tel:+420775209128"
                className="link-line w-fit text-[11px] font-semibold uppercase tracking-[0.3em] text-ivory"
              >
                Natálie {"775\u00A0209\u00A0128"}
              </a>
              <a
                href="tel:+420777029971"
                className="link-line w-fit text-[11px] font-semibold uppercase tracking-[0.3em] text-ivory"
              >
                Lucie {"777\u00A0029\u00A0971"}
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
