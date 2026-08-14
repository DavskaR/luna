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
        { color: "rgba(236,229,216,0)" },
        {
          color: "rgba(236,229,216,1)",
          duration: 3.5,
          ease: "power1.inOut",
          delay: 0.15,
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            once: true,
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
        fontSize: "clamp(6rem, 18vw, 22rem)",
        color: "transparent",
        WebkitTextStroke: "1px rgba(236,229,216,0.55)",
      }}
    >
      LUNA
    </p>
  );
}
