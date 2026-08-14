import Reveal from "@/components/Reveal";
import FooterWordmark from "@/components/FooterWordmark";

const columns = [
  {
    title: "Adresa",
    links: [
      { label: "Mírová\u00A02861/6", href: "#kontakt" },
      { label: "Severní\u00A0Terasa", href: "#kontakt" },
      { label: "400\u00A011 Ústí\u00A0nad\u00A0Labem", href: "#kontakt" },
    ],
  },
  {
    title: "Kontakt",
    links: [
      { label: "Natálie: 775\u00A0209\u00A0128", href: "tel:+420775209128" },
      { label: "Lucie: 777\u00A0029\u00A0971", href: "tel:+420777029971" },
      {
        label: "Instagram",
        href: "https://www.instagram.com/kadernictvi_luna",
      },
    ],
  },
  {
    title: "Menu",
    links: [
      { label: "O nás", href: "#o-nas" },
      { label: "Ceník", href: "#cenik" },
      { label: "Galerie", href: "#galerie" },
      { label: "Kontakt", href: "#kontakt" },
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
                <span className="flex flex-col leading-none">
                  <span className="font-serif text-lg tracking-[0.3em] text-ivory">
                    LUNA
                  </span>
                  <span className="mt-1 text-[8px] uppercase tracking-[0.42em] text-ivory-dim">
                    Kadeřnictví
                  </span>
                </span>
              </div>
              <p className="mt-8 max-w-xs text-[13px] leading-relaxed tracking-wide text-ivory/60">
                Profesionální péče o vaše vlasy.
                <br />
                Dámské, pánské i dětské střihy.
                <br />
                {"Ústí\u00A0nad\u00A0Labem"}, {"Severní\u00A0Terasa"}.
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
        <Reveal y={90} start="top bottom" className="mt-24 overflow-hidden lg:mt-28">
          <FooterWordmark />
        </Reveal>

        <div className="mt-4 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 py-7 text-[10px] uppercase tracking-[0.28em] text-ivory-dim sm:flex-row">
          <p>© 2026 Kadeřnictví LUNA, {"Ústí\u00A0nad\u00A0Labem"}</p>
          <p>
            Fotografie: archiv {"Kadeřnictví\u00A0LUNA"}
          </p>
        </div>
      </div>
    </footer>
  );
}
