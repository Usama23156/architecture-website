
export type Property = {
  id: number;
  type: "Apartment" | "Villa" | "Duplex";
  purpose: "Sale" | "Rent";
  title: string;
  location: string;
  price: string;
  area: number;
  beds: number;
  baths: number;
  image: string;
  gallery: number;
  description: string;
};

export const properties: Property[] = [
  {
    id: 1,
    type: "Apartment",
    purpose: "Sale",
    title: "Contemporary family apartment",
    location: "New Cairo · Fifth Settlement",
    price: "EGP 4,850,000",
    area: 145,
    beds: 3,
    baths: 2,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
    gallery: 4,
    description:
      "A bright, well-planned apartment with an open living area and a practical family layout.",
  },
  {
    id: 2,
    type: "Villa",
    purpose: "Sale",
    title: "Modern standalone villa",
    location: "Sheikh Zayed · West Cairo",
    price: "EGP 12,900,000",
    area: 280,
    beds: 4,
    baths: 4,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
    gallery: 6,
    description:
      "A modern villa with a private garden and room for tailored finishes.",
  },
  {
    id: 3,
    type: "Duplex",
    purpose: "Sale",
    title: "Garden duplex residence",
    location: "Mostakbal City · East Cairo",
    price: "EGP 6,250,000",
    area: 210,
    beds: 3,
    baths: 3,
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
    gallery: 5,
    description:
      "A spacious duplex with a distinct living zone and private outdoor space.",
  },
  {
    id: 4,
    type: "Apartment",
    purpose: "Rent",
    title: "Minimal city apartment",
    location: "Smouha · Alexandria",
    price: "EGP 22,000 / month",
    area: 120,
    beds: 2,
    baths: 2,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
    gallery: 4,
    description:
      "A calm, functional apartment suited to professionals.",
  },
  {
    id: 5,
    type: "Apartment",
    purpose: "Sale",
    title: "Sea-view inspired residence",
    location: "North Coast · Project-based",
    price: "Request price",
    area: 110,
    beds: 2,
    baths: 1,
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1000&q=85",
    gallery: 5,
    description:
      "A sample coastal property listing. Verified project details are still needed.",
  },
  {
    id: 6,
    type: "Villa",
    purpose: "Rent",
    title: "Quiet garden villa",
    location: "Madinaty · Greater Cairo",
    price: "EGP 65,000 / month",
    area: 240,
    beds: 4,
    baths: 3,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
    gallery: 6,
    description:
      "A sample rental villa with garden-facing living spaces.",
  },
];
