"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  start?: string;
  as?: "div" | "span";
};

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 44,
  duration = 1.2,
  start = "top 88%",
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [delay, y, duration, start]);

  const Tag = as;
  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{ visibility: "hidden" }}
    >
      {children}
    </Tag>
  );
}
