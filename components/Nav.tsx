"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { scrollToId, getLenis } from "@/lib/scroll";

const links = [
  { label: "O nás", hash: "#o-nas" },
  { label: "Ceník", hash: "#cenik" },
  { label: "Galerie", hash: "#galerie" },
  { label: "Kontakt", hash: "#kontakt" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const lenis = getLenis();
    if (open) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (e: MouseEvent, hash: string) => {
    e.preventDefault();
    getLenis()?.start();
    setOpen(false);
    window.setTimeout(() => scrollToId(hash), 60);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled && !open
          ? "bg-obsidian/70 backdrop-blur-md border-b border-ivory/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12 lg:py-5">
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

        {/* burger */}
        <button
          type="button"
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-px w-6 bg-ivory transition-all duration-500 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-4 bg-ivory transition-all duration-500 self-center ${
              open ? "w-6 -translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 bg-obsidian/95 backdrop-blur-lg transition-all duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col justify-center px-8 pb-24 pt-20 sm:px-12">
          <p className="section-label mb-6 text-[10px] font-medium uppercase text-ivory-dim">
            Menu
          </p>
          {links.map((link, i) => (
            <a
              key={link.hash}
              href={link.hash}
              onClick={(e) => go(e, link.hash)}
              className="flex items-baseline justify-between border-b border-ivory/10 py-5 transition-all duration-500"
              style={{
                transitionDelay: open ? `${120 + i * 70}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(28px)",
              }}
            >
              <span className="font-serif text-3xl text-ivory sm:text-4xl">
                {link.label}
              </span>
              <span className="font-serif text-sm italic text-ivory-dim">
                0{i + 1}
              </span>
            </a>
          ))}
          <div
            className="mt-10 space-y-3 transition-all duration-500"
            style={{
              transitionDelay: open ? "420ms" : "0ms",
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <a
              href="tel:+420775209128"
              className="block text-[11px] font-semibold uppercase tracking-[0.3em] text-ivory"
            >
              Natálie {"775\u00A0209\u00A0128"}
            </a>
            <a
              href="tel:+420777029971"
              className="block text-[11px] font-semibold uppercase tracking-[0.3em] text-ivory"
            >
              Lucie {"777\u00A0029\u00A0971"}
            </a>
            <a
              href="https://www.instagram.com/kadernictvi_luna"
              target="_blank"
              rel="noopener noreferrer"
              className="block pt-2 text-[10px] uppercase tracking-[0.3em] text-ivory-dim"
            >
              @kadernictvi_luna
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
