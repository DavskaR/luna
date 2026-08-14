"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function FooterWordmark() {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const letters = el.querySelectorAll<HTMLElement>("[data-wm-letter]");

      gsap.fromTo(
        letters,
        { yPercent: 130, rotate: 5, autoAlpha: 0 },
        {
          yPercent: 0,
          rotate: 0,
          autoAlpha: 1,
          duration: 1.2,
          stagger: 0.09,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 94%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        el,
        { yPercent: 12 },
        {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div className="mt-24 overflow-hidden lg:mt-28">
      <p
        ref={ref}
        aria-hidden="true"
        className="outline-text select-none text-center font-serif font-black leading-[0.78] tracking-[-0.02em] will-change-transform"
        style={{ fontSize: "clamp(6rem, 18vw, 19rem)" }}
      >
        {"LUNA".split("").map((letter, i) => (
          <span
            key={i}
            data-wm-letter
            className="inline-block will-change-transform"
          >
            {letter}
          </span>
        ))}
      </p>
    </div>
  );
}
