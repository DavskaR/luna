"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

type SplitWordsProps = {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  start?: string;
};

export default function SplitWords({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.055,
  start = "top 85%",
}: SplitWordsProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const words = el.querySelectorAll<HTMLElement>("[data-split-word]");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { yPercent: 115, rotate: 3 },
        {
          yPercent: 0,
          rotate: 0,
          duration: 1.1,
          delay,
          stagger,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [delay, stagger, start]);

  return (
    <span ref={ref} className={className}>
      {text.split(" ").map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-top"
        >
          <span
            data-split-word
            className={`inline-block will-change-transform ${wordClassName ?? ""}`}
          >
            {word}
            {i < text.split(" ").length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </span>
  );
}
