"use client";

import { useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { images } from "@/lib/images";

const services = [
  {
    index: "01",
    name: "Coupe Signature",
    note: "Ligne précise, silhouette couture",
    price: "à partir de 120 €",
    image: images.services[0],
  },
  {
    index: "02",
    name: "Couleur Couture",
    note: "Gloss espresso, ébène liquide",
    price: "à partir de 180 €",
    image: images.services[1],
  },
  {
    index: "03",
    name: "Lumière & Balayage",
    note: "Platine liquide, mèches de lumière",
    price: "à partir de 210 €",
    image: images.services[2],
  },
  {
    index: "04",
    name: "Soin Rituel",
    note: "Massage crânien, céramide & kératine",
    price: "à partir de 90 €",
    image: images.services[3],
  },
  {
    index: "05",
    name: "Coiffure Événement",
    note: "Mariage, gala, défilé — sur rendez-vous",
    price: "sur devis",
    image: images.services[4],
  },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const listRef = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent) => {
    const rect = listRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section id="la-carte" className="relative bg-obsidian py-28 lg:py-40">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <Reveal className="flex items-center gap-5">
          <span className="font-serif text-sm italic text-ivory-dim">02</span>
          <span className="h-px w-16 bg-ivory/30" />
          <p className="section-label text-[10px] font-medium uppercase text-ivory-dim">
            La Carte
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-14 lg:mt-24 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <Reveal delay={0.08}>
              <h2 className="font-serif text-3xl font-medium leading-tight text-ivory lg:text-5xl">
                Cinq gestes,
                <br />
                <span className="italic text-ivory-soft">un langage.</span>
              </h2>
              <p className="mt-6 max-w-xs text-[13px] leading-relaxed tracking-wide text-ivory/60">
                Chaque rendez-vous commence par une consultation silencieuse —
                la matière décide, la main suit.
              </p>
            </Reveal>
          </div>

          <div
            ref={listRef}
            onMouseMove={onMove}
            onMouseLeave={() => setActive(null)}
            className="relative lg:col-span-8 lg:col-start-5"
          >
            {services.map((service, i) => (
              <div
                key={service.index}
                onMouseEnter={() => setActive(i)}
                className="group relative border-t border-ivory/10 py-8 transition-colors duration-500 last:border-b lg:py-9"
              >
                <Reveal y={30} delay={i * 0.04}>
                  <div className="flex items-baseline justify-between gap-6 transition-transform duration-500 ease-out group-hover:translate-x-4">
                    <div className="flex items-baseline gap-6">
                      <span className="font-serif text-sm italic text-ivory-dim">
                        {service.index}
                      </span>
                      <h3
                        className={`font-serif text-3xl font-medium transition-colors duration-500 sm:text-4xl xl:text-5xl ${
                          active === i ? "text-ivory" : "text-ivory/60"
                        }`}
                      >
                        {service.name}
                      </h3>
                    </div>
                    <div className="hidden items-baseline gap-8 sm:flex">
                      <span
                        className={`text-[10px] uppercase tracking-[0.26em] transition-all duration-500 ${
                          active === i
                            ? "translate-x-0 opacity-100 text-ivory-dim"
                            : "-translate-x-3 opacity-0"
                        }`}
                      >
                        {service.note}
                      </span>
                      <span
                        className={`whitespace-nowrap text-[11px] tracking-[0.18em] transition-colors duration-500 ${
                          active === i ? "text-ivory" : "text-ivory-dim"
                        }`}
                      >
                        {service.price}
                      </span>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}

            {/* floating hover preview */}
            <div
              className={`pointer-events-none absolute z-10 hidden lg:block transition-opacity duration-300 ${
                active !== null ? "opacity-100" : "opacity-0"
              }`}
              style={{
                left: pos.x + 30,
                top: pos.y - 140,
                width: 240,
                height: 300,
              }}
            >
              {active !== null && (
                <div className="relative h-full w-full overflow-hidden rounded-xl shadow-[0_24px_70px_rgba(0,0,0,0.85)] ring-1 ring-ivory/20">
                  <Image
                    src={services[active].image.src}
                    alt={services[active].image.alt}
                    fill
                    sizes="240px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 to-transparent" />
                  <p className="absolute bottom-3 left-3 font-serif text-xs italic text-ivory">
                    {services[active].name}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
