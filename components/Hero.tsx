"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { images } from "@/lib/images";

const TITLE = "LUNA";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      /* ------------------------------ intro timeline ----------------------------- */
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(
        "[data-hero-img]",
        { scale: 1.22, filter: "brightness(0.3)" },
        { scale: 1, filter: "brightness(0.62)", duration: 2.2, ease: "power2.out" }
      )
        .fromTo(
          "[data-hero-letter]",
          { yPercent: 115, rotate: 4 },
          { yPercent: 0, rotate: 0, duration: 1.35, stagger: 0.09 },
          0.45
        )
        .fromTo(
          "[data-ab-layer]",
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 1.4, stagger: 0.12 },
          0.8
        )
        .fromTo(
          "[data-hero-fade]",
          { y: 36, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 1.1, stagger: 0.12 },
          1.05
        );

      /* ----------------------------- scroll parallax ----------------------------- */
      gsap.to("[data-hero-img]", {
        yPercent: 14,
        scale: 1.06,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to("[data-hero-headline]", {
        xPercent: -9,
        yPercent: 26,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, section);

    /* --------------------------- mouse-move parallax --------------------------- */
    const move = (e: MouseEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      gsap.to("[data-mouse-img]", { xPercent: nx * 2.4, yPercent: ny * 2.4, duration: 1.8, ease: "power2.out" });
    };
    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative h-[100svh] min-h-[720px] overflow-hidden bg-obsidian"
    >
      {/* photographic base */}
      <div
        data-hero-img
        data-mouse-img
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src={images.hero.desktop.src}
          alt={images.hero.desktop.alt}
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-[50%_35%] md:block"
        />
        <Image
          src={images.hero.mobile.src}
          alt={images.hero.mobile.alt}
          fill
          sizes="100vw"
          className="block object-cover object-[50%_35%] md:hidden"
        />
      </div>

      {/* chiaroscuro grading */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/60 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/80" />
      <div className="vignette pointer-events-none absolute inset-0" />

      {/* meta column: right */}
      <div
        data-hero-fade
        className="absolute right-10 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-end gap-12 text-right lg:flex"
      >
        <div>
          <p className="text-[10px] uppercase tracking-[0.34em] text-ivory-dim">
            Kde nás najdete
          </p>
          <p className="mt-1 text-[11px] tracking-[0.18em] text-ivory/85">
            {"Mírová\u00A02861/6"}
            <br />
            {"Severní\u00A0Terasa"}
          </p>
        </div>
        <div className="h-24 w-px bg-gradient-to-b from-transparent via-ivory/40 to-transparent" />
        <div>
          <p className="text-[10px] uppercase tracking-[0.34em] text-ivory-dim">
            {"Ústí\u00A0nad\u00A0Labem"}
          </p>
          <p className="mt-1 font-serif text-2xl italic text-ivory">
            {"400\u00A011"}
          </p>
        </div>
      </div>

      {/* eyebrow */}
      <div
        data-hero-fade
        className="absolute left-[6vw] top-[21%] z-10 flex items-center gap-4 lg:top-[24%]"
      >
        <span className="h-px w-12 bg-ivory/50" />
        <p className="text-[11px] font-medium uppercase tracking-[0.42em] text-ivory/85">
          ✂ Kadeřnictví, {"Ústí\u00A0nad\u00A0Labem"}
        </p>
      </div>

      {/* headline */}
      <div
        data-hero-headline
        className="relative z-10 flex h-full items-center pl-[6vw] will-change-transform"
      >
        <h1
          className="relative font-serif font-black leading-[0.8] tracking-[-0.02em] text-ivory"
          style={{ fontSize: "clamp(6.5rem, 19.5vw, 20rem)" }}
        >
          <span
            data-ab-layer
            aria-hidden="true"
            className="ab-layer ab-cyan select-none"
          >
            {TITLE}
          </span>
          <span
            data-ab-layer
            aria-hidden="true"
            className="ab-layer ab-red select-none"
          >
            {TITLE}
          </span>
          <span className="relative block">
            {TITLE.split("").map((letter, i) => (
              <span
                key={i}
                data-hero-letter
                className="inline-block will-change-transform"
              >
                {letter}
              </span>
            ))}
          </span>
        </h1>
      </div>

      {/* info tile: bottom left */}
      <div className="absolute bottom-24 left-[6vw] z-10 max-w-md lg:bottom-28">
        <div data-hero-fade className="border-l border-ivory/30 pl-6 lg:pl-8">
          <p className="font-serif text-xl italic leading-snug text-ivory-soft lg:text-2xl">
            Profesionální péče o vaše vlasy
            <br />
            dámské, pánské i ty dětské.
          </p>
          <p className="mt-5 max-w-sm text-[13px] leading-relaxed tracking-wide text-ivory/70">
            Střihy, barvení, melírování, balayage, keratin i svatební účesy.
            Laureát plebiscitu {"Orlové\u00A0krásky"} 2026 a vítěz soutěže{" "}
            {"Zlatá\u00A0firma"}.
          </p>
        </div>
        <div data-hero-fade className="mt-8 flex items-center gap-6">
          <a
            href="tel:+420775209128"
            className="link-line text-[11px] font-semibold uppercase tracking-[0.3em] text-ivory"
          >
            Natálie {"775\u00A0209\u00A0128"}
          </a>
          <span className="text-ivory-dim">·</span>
          <a
            href="tel:+420777029971"
            className="link-line text-[11px] font-semibold uppercase tracking-[0.3em] text-ivory"
          >
            Lucie {"777\u00A0029\u00A0971"}
          </a>
        </div>
      </div>

      {/* scroll cue */}
      <div
        data-hero-fade
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="text-[9px] uppercase tracking-[0.42em] text-ivory/60">
          Posuňte dolů
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-ivory/15">
          <span className="scroll-dot absolute left-0 top-0 h-3 w-px bg-ivory" />
        </span>
      </div>
    </section>
  );
}
