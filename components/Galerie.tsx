"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import Reveal from "@/components/Reveal";
import { images } from "@/lib/images";

const layout = [
  { span: "lg:col-span-7", aspect: "aspect-[4/5]", item: images.lookbook[0] },
  { span: "lg:col-span-5", aspect: "aspect-[4/5]", item: images.lookbook[1] },
  { span: "lg:col-span-4", aspect: "aspect-[3/4]", item: images.lookbook[2] },
  { span: "lg:col-span-4", aspect: "aspect-square", item: images.lookbook[3] },
  { span: "lg:col-span-4", aspect: "aspect-[3/4]", item: images.lookbook[4] },
  { span: "lg:col-span-6", aspect: "aspect-[16/10]", item: images.lookbook[5] },
];

export default function Galerie() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const ctx = gsap.context(() => {
      const items = grid.querySelectorAll<HTMLElement>("[data-look-item]");

      items.forEach((item) => {
        const img = item.querySelector<HTMLElement>("[data-look-img]");

        gsap.fromTo(
          item,
          { clipPath: "inset(100% 0 0 0)" },
          {
            clipPath: "inset(0% 0 0 0)",
            duration: 1.4,
            ease: "power4.out",
            scrollTrigger: {
              trigger: item,
              start: "top 92%",
              once: true,
            },
          }
        );

        if (img) {
          gsap.fromTo(
            img,
            { yPercent: -10, scale: 1.18 },
            {
              yPercent: 10,
              scale: 1.18,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }
      });
    }, grid);

    return () => ctx.revert();
  }, []);

  return (
    <section id="galerie" className="relative bg-coal py-28 lg:py-40">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal className="flex items-center gap-5">
            <span className="font-serif text-sm italic text-ivory-dim">03</span>
            <span className="h-px w-16 bg-ivory/30" />
            <p className="section-label text-[10px] font-medium uppercase text-ivory-dim">
              Galerie
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-[13px] leading-relaxed tracking-wide text-ivory/60">
              Inspirace z naší tvorby: od platinových blond po hluboké tmavé
              tóny. Vaše vysněné vlasy začínají tady.
            </p>
          </Reveal>
        </div>

        <div
          ref={gridRef}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-24 lg:grid-cols-12 lg:gap-8"
        >
          {layout.map((cell, i) => (
            <figure
              key={i}
              data-look-item
              className={`group relative ${cell.span} ${
                i % 2 === 1 ? "lg:mt-20" : ""
              }`}
              style={{ clipPath: "inset(100% 0 0 0)" }}
            >
              <div className={`relative overflow-hidden ${cell.aspect}`}>
                <div
                  data-look-img
                  className="absolute inset-0 will-change-transform"
                >
                  <Image
                    src={cell.item.src}
                    alt={cell.item.alt}
                    fill
                    sizes="(min-width: 1024px) 46vw, 92vw"
                    className="object-cover transition-[filter] duration-700 group-hover:grayscale-0 grayscale-[35%]"
                  />
                </div>
                <div className="absolute inset-0 bg-obsidian/10 transition-opacity duration-700 group-hover:opacity-0" />
                <span className="absolute left-5 top-5 font-serif text-xs italic text-ivory/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <figcaption className="mt-4 flex items-center justify-between border-b border-ivory/10 pb-3">
                <span className="font-serif text-base italic text-ivory-soft">
                  {cell.item.caption}
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-ivory-dim">
                  Inspirace
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
