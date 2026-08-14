"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function FooterWordmark() {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          color: "rgba(236,229,216,0)",
          WebkitTextStrokeColor: "rgba(236,229,216,0.55)",
        },
        {
          color: "rgba(236,229,216,1)",
          WebkitTextStrokeColor: "rgba(236,229,216,0)",
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "max",
            scrub: 1.2,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <p
      ref={ref}
      aria-hidden="true"
      className="select-none text-center font-serif font-black leading-[0.78] tracking-[-0.02em]"
      style={{
        fontSize: "clamp(6rem, 18vw, 19rem)",
        color: "transparent",
        WebkitTextStroke: "1px rgba(236,229,216,0.55)",
      }}
    >
      LUNA
    </p>
  );
}
