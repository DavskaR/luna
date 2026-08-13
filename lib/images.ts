export const unsplash = (
  id: string,
  w: number,
  opts: { q?: number; crop?: boolean } = {}
) =>
  `https://images.unsplash.com/${id}?w=${w}&q=${opts.q ?? 80}&auto=format&fit=${
    opts.crop === false ? "max" : "crop"
  }`;

export const images = {
  hero: {
    src: unsplash("photo-1515138692129-197a2c608cfd", 2400),
    alt: "Portrét ženy vystupující ze tmy, světlo zvýrazňuje účes",
    credit: "Unsplash",
  },
  portrait: {
    src: unsplash("photo-1495462911434-be47104d70fa", 1200),
    alt: "Editorial portrét ženy v černém klobouku",
    credit: "Unsplash",
  },
  interior: {
    src: unsplash("photo-1650166958715-35b968fd7cc0", 1800),
    alt: "Tmavý salonní interiér, křeslo u vysokého okna",
    credit: "Unsplash",
  },
  services: [
    {
      src: unsplash("photo-1675034743339-0b0747047727", 900),
      alt: "Kadeřnice upravuje vlasy klientky",
    },
    {
      src: unsplash("photo-1700760934268-8aa0ef52ce0a", 900),
      alt: "Ruce vedou přesný střih nůžkami",
    },
    {
      src: unsplash("photo-1695527081848-1e46c06e6458", 900),
      alt: "Žena v kadeřnickém křesle při úpravě vlasů",
    },
    {
      src: unsplash("photo-1635346125627-74d1b2867898", 900),
      alt: "Černobílá fotografie kadeřníka při střihu",
    },
    {
      src: unsplash("photo-1634449571010-02389ed0f9b0", 900),
      alt: "Nůžky kloužou vlasy při precizním střihu",
    },
  ],
  lookbook: [
    {
      src: unsplash("photo-1560869713-bf165a9cfac1", 1400),
      alt: "Lesklé platinové blond vlny ve studiovém světle",
      caption: "Platinová blond",
    },
    {
      src: unsplash("photo-1616689321313-4e2eeabd5420", 1100),
      alt: "Žena s tmavými brýlemi a vlasy přes obličej",
      caption: "Tmavé tóny",
    },
    {
      src: unsplash("photo-1633515104414-6d905d3c30e3", 1100),
      alt: "Černobílý portrét s dlouhými vlasy",
      caption: "Černobílý kontrast",
    },
    {
      src: unsplash("photo-1620939391250-eb822ac0818a", 1100),
      alt: "Tmavě hnědé vlasy na černém pozadí",
      caption: "Espresso",
    },
    {
      src: unsplash("photo-1619218533116-f050e7d91d91", 1100),
      alt: "Žena v černém kabátě zvedá vlasy",
      caption: "Pohyb",
    },
    {
      src: unsplash("photo-1758743846072-9efdbbb1da15", 1100),
      alt: "Blond vlasy vlající ve větru",
      caption: "Volné vlny",
    },
  ],
};
