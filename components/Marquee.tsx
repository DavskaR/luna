const items = [
  "Coupe",
  "Couleur",
  "Coiffure",
  "Soin Rituel",
  "Balayage",
  "Lissage",
  "Coiffure Événement",
  "Conseil Privé",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative z-10 overflow-hidden border-y border-ivory/10 bg-obsidian py-5 lg:py-6">
      <div className="marquee-track flex w-max items-center whitespace-nowrap will-change-transform">
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-serif text-2xl italic text-ivory/85 lg:text-3xl">
              {item}
            </span>
            <span className="mx-8 text-[10px] text-ivory-dim lg:mx-12">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
