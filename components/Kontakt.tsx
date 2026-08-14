"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import Reveal from "@/components/Reveal";
import SplitWords from "@/components/SplitWords";
import { images } from "@/lib/images";

const contacts = [
  {
    label: "Natálie",
    value: "775\u00A0209\u00A0128",
    href: "tel:+420775209128",
  },
  {
    label: "Lucie",
    value: "777\u00A0029\u00A0971",
    href: "tel:+420777029971",
  },
];

export default function Kontakt() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-kontakt-img]",
        { yPercent: -12, scale: 1.18 },
        {
          yPercent: 12,
          scale: 1.18,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        "[data-kontakt-float]",
        { xPercent: -1.6, yPercent: -1.1 },
        {
          xPercent: 1.6,
          yPercent: 1.4,
          duration: 13,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="kontakt"
      className="relative overflow-hidden bg-obsidian"
    >
      {/* interior backdrop */}
      <div className="absolute inset-0">
        <div data-kontakt-img className="absolute inset-0 will-change-transform">
          <div
            data-kontakt-float
            className="absolute inset-0 scale-110 blur-[2px] will-change-transform"
          >
            <Image
              src={images.kontakt.src}
              alt={images.kontakt.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/55 to-obsidian" />
        <div className="vignette absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 py-32 lg:px-12 lg:py-44">
        <Reveal className="flex items-center gap-5">
          <span className="font-serif text-sm italic text-ivory-dim">04</span>
          <span className="h-px w-16 bg-ivory/30" />
          <p className="section-label text-[10px] font-medium uppercase text-ivory-dim">
            Kontakt
          </p>
        </Reveal>

        <h2 className="mt-16 max-w-5xl font-serif text-4xl font-medium leading-[1.12] text-ivory sm:text-5xl lg:mt-24 lg:text-7xl">
          <span className="block">
            <SplitWords
              text="Domluvte si termín."
              wordClassName="mr-[0.24em]"
            />
          </span>
          <span className="block">
            <SplitWords
              text="Postaráme se"
              wordClassName="mr-[0.24em] italic text-ivory-soft"
              delay={0.12}
            />
          </span>
          <span className="block">
            <SplitWords
              text="o zbytek."
              wordClassName="mr-[0.24em] italic text-ivory-soft"
              delay={0.22}
            />
          </span>
        </h2>

        <div className="mt-20 grid grid-cols-1 gap-14 lg:mt-28 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <a
                href="tel:+420775209128"
                className="group relative inline-flex items-center gap-5 overflow-hidden rounded-full border border-ivory/40 px-10 py-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-ivory transition-colors duration-500 hover:text-obsidian"
              >
                <span className="absolute inset-0 -translate-x-full bg-ivory transition-transform duration-500 ease-out group-hover:translate-x-0" />
                <span className="relative">Zavolejte nám</span>
                <span className="relative transition-transform duration-500 group-hover:translate-x-2">
                  →
                </span>
              </a>
              <p className="mt-8 max-w-sm text-[13px] leading-relaxed tracking-wide text-ivory/60">
                Pracujeme na objednání. Stačí zavolat a rezervujeme vám termín,
                který vám sedí. Volat můžete Natálii nebo Lucii.
              </p>
              <a
                href="https://www.instagram.com/kadernictvi_luna"
                target="_blank"
                rel="noopener noreferrer"
                className="link-line mt-6 inline-block text-[11px] font-semibold uppercase tracking-[0.3em] text-ivory"
              >
                @kadernictvi_luna na Instagramu
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.1}>
              <div className="border border-ivory/10 bg-charcoal/70 p-8 backdrop-blur-sm lg:p-10">
                <p className="section-label text-[10px] font-medium uppercase text-ivory-dim">
                  Telefon
                </p>
                <dl className="mt-6 divide-y divide-ivory/10">
                  {contacts.map((contact) => (
                    <div
                      key={contact.value}
                      className="flex items-baseline justify-between py-4"
                    >
                      <dt className="text-[12px] tracking-[0.14em] text-ivory/80">
                        {contact.label}
                      </dt>
                      <dd>
                        <a
                          href={contact.href}
                          className="font-serif text-sm italic text-ivory-soft transition-colors hover:text-ivory"
                        >
                          {contact.value}
                        </a>
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6 border-t border-ivory/10 pt-6">
                  <p className="text-[12px] tracking-[0.14em] text-ivory/80">
                    {"Mírová\u00A02861/6, Severní\u00A0Terasa"}
                  </p>
                  <p className="mt-2 text-[12px] tracking-[0.14em] text-ivory/60">
                    {"400\u00A011 Ústí\u00A0nad\u00A0Labem"}
                  </p>
                  <p className="mt-2 text-[12px] tracking-[0.14em] text-ivory/60">
                    Termín si prosím domluvte telefonicky.
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
