import Reveal from "@/components/Reveal";

const columns = [
  {
    title: "Atelier",
    links: [
      { label: "12 Rue de la Lune", href: "#atelier" },
      { label: "75001 Paris", href: "#atelier" },
      { label: "48.8566° N, 2.3522° E", href: "#top" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "+33 1 42 60 00 00", href: "#rendez-vous" },
      { label: "atelier@luna.paris", href: "#rendez-vous" },
      { label: "Instagram", href: "#top" },
    ],
  },
  {
    title: "Menu",
    links: [
      { label: "L\u2019Atelier", href: "#atelier" },
      { label: "La Carte", href: "#la-carte" },
      { label: "Lookbook", href: "#lookbook" },
      { label: "Rendez-vous", href: "#rendez-vous" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ivory/10 bg-obsidian">
      <div className="mx-auto max-w-[1500px] px-6 pt-24 lg:px-12">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="relative flex h-10 w-10 items-center justify-center">
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
                  </svg>
                  <span className="relative block h-3 w-3 rounded-full bg-ivory" />
                </span>
                <span className="font-serif text-lg tracking-[0.3em] text-ivory">
                  LUNA
                </span>
              </div>
              <p className="mt-8 max-w-xs text-[13px] leading-relaxed tracking-wide text-ivory/60">
                Maison de coiffure — sculptée dans l&rsquo;ombre, révélée par la
                lumière. Paris, depuis 2012.
              </p>
            </Reveal>
          </div>

          {columns.map((col, i) => (
            <div key={col.title} className="lg:col-span-2">
              <Reveal delay={0.08 + i * 0.06}>
                <p className="section-label text-[10px] font-medium uppercase text-ivory-dim">
                  {col.title}
                </p>
                <ul className="mt-6 space-y-3.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="link-line text-[12px] tracking-[0.14em] text-ivory/75 hover:text-ivory"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}
        </div>

        {/* giant wordmark */}
        <Reveal y={90} className="mt-24 overflow-hidden lg:mt-28">
          <p
            aria-hidden="true"
            className="outline-text select-none text-center font-serif font-black leading-[0.78] tracking-[-0.02em]"
            style={{ fontSize: "clamp(6rem, 18vw, 19rem)" }}
          >
            LUNA
          </p>
        </Reveal>

        <div className="mt-4 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 py-7 text-[10px] uppercase tracking-[0.28em] text-ivory-dim sm:flex-row">
          <p>© 2026 Luna Maison de Coiffure</p>
          <p>
            Photography via{" "}
            <a
              href="https://unsplash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-line text-ivory/70 hover:text-ivory"
            >
              Unsplash
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
