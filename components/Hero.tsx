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
        )
        .fromTo(
          "[data-hero-brush]",
          { y: 140, x: -60, rotate: -18, autoAlpha: 0 },
          { y: 0, x: 0, rotate: -6, autoAlpha: 1, duration: 1.6, ease: "power3.out" },
          1.3
        )
        .fromTo(
          "[data-hero-scissors]",
          { y: -90, x: 50, rotate: 22, autoAlpha: 0 },
          { y: 0, x: 0, rotate: 9, autoAlpha: 1, duration: 1.6, ease: "power3.out" },
          1.45
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

      gsap.to("[data-hero-brush]", {
        y: 190,
        rotate: -20,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to("[data-hero-scissors]", {
        y: -160,
        rotate: 16,
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
      gsap.to("[data-mouse-brush]", { x: nx * -26, y: ny * -20, duration: 1.4, ease: "power2.out" });
      gsap.to("[data-mouse-scissors]", { x: nx * 30, y: ny * 24, duration: 1.4, ease: "power2.out" });
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
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center]"
        />
      </div>

      {/* chiaroscuro grading */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/60 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/80" />
      <div className="vignette pointer-events-none absolute inset-0" />

      {/* meta column — right */}
      <div
        data-hero-fade
        className="absolute right-10 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-end gap-12 text-right lg:flex"
      >
        <div>
          <p className="text-[10px] uppercase tracking-[0.34em] text-ivory-dim">
            Maison fondée
          </p>
          <p className="mt-1 font-serif text-2xl italic text-ivory">2012</p>
        </div>
        <div className="h-24 w-px bg-gradient-to-b from-transparent via-ivory/40 to-transparent" />
        <div>
          <p className="text-[10px] uppercase tracking-[0.34em] text-ivory-dim">
            Atelier
          </p>
          <p className="mt-1 text-[11px] tracking-[0.18em] text-ivory/85">
            48.8566° N
            <br />
            2.3522° E
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
          Maison de Coiffure
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

      {/* info tile — bottom left */}
      <div className="absolute bottom-24 left-[6vw] z-10 max-w-md lg:bottom-28">
        <div
          data-hero-fade
          className="border-l border-ivory/30 pl-6 lg:pl-8"
        >
          <p className="font-serif text-xl italic leading-snug text-ivory-soft lg:text-2xl">
            Sculptée dans l&rsquo;ombre,
            <br />
            révélée par la lumière.
          </p>
          <p className="mt-5 max-w-sm text-[13px] leading-relaxed tracking-wide text-ivory/70">
            Precision cuts, couture colour and ritual care — an atelier where
            hair is treated as haute couture.
          </p>
        </div>
        <div data-hero-fade className="mt-8 flex items-center gap-6">
          <a
            href="#rendez-vous"
            className="link-line text-[11px] font-semibold uppercase tracking-[0.3em] text-ivory"
          >
            Prendre rendez-vous
          </a>
          <span className="text-ivory-dim">→</span>
        </div>
      </div>

      {/* floating brush — soft focus foreground */}
      <div
        data-hero-brush
        data-mouse-brush
        className="absolute -bottom-14 left-[38vw] z-20 hidden aspect-square w-56 will-change-transform lg:block xl:w-64"
      >
        <div className="relative h-full w-full overflow-hidden rounded-full shadow-[0_30px_80px_rgba(0,0,0,0.75)] ring-1 ring-ivory/15">
          <Image
            src={images.brush.src}
            alt={images.brush.alt}
            fill
            sizes="(min-width: 1280px) 256px, 224px"
            className="object-cover opacity-90 blur-[1.2px]"
          />
          <div className="absolute inset-0 rounded-full bg-obsidian/20" />
          <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/40" />
        </div>
        <span className="absolute -right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-ivory text-[9px] font-bold text-obsidian shadow-lg">
          01
        </span>
      </div>

      {/* floating scissors — sharp chrome tile */}
      <div
        data-hero-scissors
        data-mouse-scissors
        className="absolute right-[8vw] top-[22%] z-20 hidden w-44 will-change-transform lg:block xl:w-52"
      >
        <div className="relative rotate-[8deg] overflow-hidden rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.8)] ring-1 ring-ivory/20">
          <div className="relative aspect-[4/3]">
            <Image
              src={images.scissors.src}
              alt={images.scissors.alt}
              fill
              sizes="(min-width: 1280px) 208px, 176px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-chrome/15" />
          </div>
          <div className="flex items-center justify-between bg-charcoal px-4 py-2.5">
            <span className="text-[9px] uppercase tracking-[0.3em] text-ivory-dim">
              Acier japonais
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-chrome pulse-ring" />
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div
        data-hero-fade
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="text-[9px] uppercase tracking-[0.42em] text-ivory/60">
          Scroll
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-ivory/15">
          <span className="scroll-dot absolute left-0 top-0 h-3 w-px bg-ivory" />
        </span>
      </div>
    </section>
  );
}
