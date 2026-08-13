"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { scrollToId } from "@/lib/scroll";

const links = [
  { label: "O nás", hash: "#o-nas" },
  { label: "Ceník", hash: "#cenik" },
  { label: "Galerie", hash: "#galerie" },
  { label: "Kontakt", hash: "#kontakt" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e: MouseEvent, hash: string) => {
    e.preventDefault();
    scrollToId(hash);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-obsidian/70 backdrop-blur-md border-b border-ivory/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-4 lg:px-12 lg:py-5">
        <a
          href="#top"
          onClick={(e) => go(e, "#top")}
          className="flex items-center gap-3 group"
          aria-label="Kadeřnictví LUNA, úvod"
        >
          <span className="relative flex h-11 w-11 items-center justify-center">
            <svg viewBox="0 0 44 44" className="absolute inset-0 h-full w-full">
              <circle
                cx="22"
                cy="22"
                r="20.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-ivory/60"
              />
              <circle
                cx="22"
                cy="22"
                r="16.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-ivory/25"
              />
            </svg>
            <span className="relative block h-3.5 w-3.5 rounded-full bg-ivory transition-transform duration-500 group-hover:scale-125" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-xl tracking-[0.3em] text-ivory">
              LUNA
            </span>
            <span className="mt-1 text-[8px] uppercase tracking-[0.42em] text-ivory-dim">
              Kadeřnictví
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-10 lg:flex">
          {links.map((link, i) => (
            <li key={link.hash}>
              <a
                href={link.hash}
                onClick={(e) => go(e, link.hash)}
                className="link-line text-[11px] font-medium uppercase tracking-[0.28em] text-ivory/80 hover:text-ivory"
              >
                <span className="mr-2 font-serif italic text-ivory-dim">
                  0{i + 1}
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:+420775209128"
          className="group relative hidden overflow-hidden rounded-full border border-ivory/40 px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-ivory transition-colors duration-500 hover:text-obsidian sm:block"
        >
          <span className="absolute inset-0 -translate-x-full bg-ivory transition-transform duration-500 ease-out group-hover:translate-x-0" />
          <span className="relative">Objednat se</span>
        </a>

        <button
          type="button"
          aria-label="Menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className="h-px w-6 bg-ivory" />
          <span className="h-px w-4 self-end bg-ivory" />
        </button>
      </nav>
    </header>
  );
}
