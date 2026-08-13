"use client";

import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export const setLenis = (lenis: Lenis | null) => {
  lenisInstance = lenis;
};

export const getLenis = () => lenisInstance;

export function scrollToId(hash: string) {
  const el = document.querySelector(hash);
  if (!el) return;
  if (lenisInstance) {
    lenisInstance.scrollTo(el as HTMLElement, {
      offset: 0,
      duration: 1.8,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
    });
  } else {
    (el as HTMLElement).scrollIntoView({ behavior: "smooth" });
  }
}
