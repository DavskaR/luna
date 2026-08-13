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
    alt: "Close-up portrait of a woman emerging from darkness, hair catching the light",
    credit: "Unsplash",
  },
  portrait: {
    src: unsplash("photo-1495462911434-be47104d70fa", 1200),
    alt: "Editorial portrait of a woman in a black wide-brim hat",
    credit: "Unsplash",
  },
  portraitMono: {
    src: unsplash("photo-1601821326018-d949a54b6402", 1200),
    alt: "Grayscale studio portrait of a woman's face in half shadow",
    credit: "Unsplash",
  },
  brush: {
    src: unsplash("photo-1527799820374-dcf8d9d4a388", 900),
    alt: "Matte black professional hairbrush with fine bristle rows",
    credit: "Shari Sirotnak / Unsplash",
  },
  scissors: {
    src: unsplash("photo-1596362601603-b74f6ef166e4", 900),
    alt: "Polished stainless steel hairdressing scissors beside a fine comb",
    credit: "Unsplash",
  },
  interior: {
    src: unsplash("photo-1650166958715-35b968fd7cc0", 1800),
    alt: "Dark moody salon interior, a lone chair beside a tall window",
    credit: "Unsplash",
  },
  hairTexture: {
    src: unsplash("photo-1618566909269-a09202832ac6", 1600),
    alt: "Fine strands of dark hair woven across black textile",
    credit: "Unsplash",
  },
  services: [
    {
      src: unsplash("photo-1675034743339-0b0747047727", 900),
      alt: "A stylist sculpting a client's hair in a dark atelier",
    },
    {
      src: unsplash("photo-1700760934268-8aa0ef52ce0a", 900),
      alt: "Hands guiding a precise cut with polished shears",
    },
    {
      src: unsplash("photo-1695527081848-1e46c06e6458", 900),
      alt: "A woman having her hair dressed in a luxury salon",
    },
    {
      src: unsplash("photo-1635346125627-74d1b2867898", 900),
      alt: "Monochrome study of a barber refining a cut",
    },
    {
      src: unsplash("photo-1634449571010-02389ed0f9b0", 900),
      alt: "Scissors gliding through a precision haircut",
    },
  ],
  lookbook: [
    {
      src: unsplash("photo-1560869713-bf165a9cfac1", 1400),
      alt: "Glossy platinum blonde waves catching studio light",
      caption: "Lumière — platinum liquide",
    },
    {
      src: unsplash("photo-1616689321313-4e2eeabd5420", 1100),
      alt: "Woman hiding behind dark sunglasses, hair falling over her face",
      caption: "Ombre — esprit nocturne",
    },
    {
      src: unsplash("photo-1633515104414-6d905d3c30e3", 1100),
      alt: "Monochrome portrait with long flowing hair",
      caption: "Noir & blanc — texture pure",
    },
    {
      src: unsplash("photo-1620939391250-eb822ac0818a", 1100),
      alt: "Deep espresso brown hair against a black background",
      caption: "Espresso — profondeur",
    },
    {
      src: unsplash("photo-1619218533116-f050e7d91d91", 1100),
      alt: "Woman in a black coat lifting her dark hair",
      caption: "Couture — mouvement",
    },
    {
      src: unsplash("photo-1758743846072-9efdbbb1da15", 1100),
      alt: "Blonde hair blowing in the wind",
      caption: "Vent — chevelure libre",
    },
  ],
};
