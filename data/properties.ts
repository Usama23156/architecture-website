export type Property = {
  id: number;
  type: "Apartment" | "Villa" | "Duplex";
  purpose: "Sale" | "Rent";
  title: string;
  titleAr: string;
  location: string;
  locationAr: string;
  price: string;
  priceAr: string;
  area: number;
  beds: number;
  baths: number;
  image: string;
  /** Additional gallery images. Keep the main image in this array too. */
  images?: string[];
  gallery: number;
  description: string;
  descriptionAr: string;
};

export const properties: Property[] = [
  {
    id: 1,
    type: "Apartment",
    purpose: "Sale",
    title: "Contemporary family apartment",
    titleAr: "شقة عصرية مناسبة للعائلة",
    location: "Degla Landmark Compound - Nasr City - Egypt",
    locationAr: "كمبوند ديجلة لاند مارك - مدينة نصر - مصر",
    price: "EGP 4,850,000",
    priceAr: "٤٬٨٥٠٬٠٠٠ جنيه مصري",
    area: 122,
    beds: 3,
    baths: 1,
    image:
      "/apartmint-1/apartmint-1.1.jpg",
    // Add the real image URLs for this property's gallery here.
    images: [
      "/apartmint-1/apartmint-1.1.jpg",
      "/apartmint-1/apartmint-1.2.jpg",
      "/apartmint-1/apartmint-1.5.jpg",
      "/apartmint-1/apartmint-1.7.jpg",
      "/apartmint-1/apartmint-1.9.jpg",
      "/apartmint-1/apartmint-1.10.jpg",
      "/apartmint-1/apartmint-1.12.jpg",
 
    ],
    gallery: 7,
    description:
      "A bright, well-planned apartment with an open living area and a practical family layout.",
    descriptionAr:
"شقة للبيع في البرج الدائري.. برج رقم ١٧ في كومباوند ديجله لاند مارك مدينه نصر التشطيب الترا سوبرلوكس المطبخ بالكامل مع الاجهزه.. بوتاجاز بلت ان مع الشفاط ..والغساله والثلاجة من ميديا المطبخ حوائط وارضية بورسلين مقاس 60x120",
  },
  {
    id: 2,
    type: "Villa",
    purpose: "Sale",
    title: "Modern standalone villa",
    titleAr: "فيلا مستقلة بتصميم عصري",
    location: "Sheikh Zayed · West Cairo",
    locationAr: "الشيخ زايد · غرب القاهرة",
    price: "EGP 12,900,000",
    priceAr: "١٢٬٩٠٠٬٠٠٠ جنيه مصري",
    area: 280,
    beds: 4,
    baths: 4,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
    // Add the real image URLs for this property's gallery here.
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
    ],
    gallery: 6,
    description:
      "A modern villa with a private garden and room for tailored finishes.",
    descriptionAr:
      "فيلا عصرية تضم حديقة خاصة ومساحات تتيح تنفيذ التشطيبات بما يتناسب مع ذوقك واحتياجاتك.",
  },
  {
    id: 3,
    type: "Duplex",
    purpose: "Sale",
    title: "Garden duplex residence",
    titleAr: "دوبلكس بحديقة خاصة",
    location: "Mostakbal City · East Cairo",
    locationAr: "مدينة المستقبل · شرق القاهرة",
    price: "EGP 6,250,000",
    priceAr: "٦٬٢٥٠٬٠٠٠ جنيه مصري",
    area: 210,
    beds: 3,
    baths: 3,
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
    // Add the real image URLs for this property's gallery here.
    images: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
    ],
    gallery: 5,
    description:
      "A spacious duplex with a distinct living zone and private outdoor space.",
    descriptionAr:
      "وحدة دوبلكس واسعة تضم منطقة معيشة منفصلة ومساحة خارجية خاصة للاستمتاع بالهواء الطلق.",
  },
       {
    id: 4,
    type: "Apartment",
    purpose: "Rent",
    title: "Minimal city apartment",
    titleAr: "شقة عصرية بتصميم بسيط",
    location: "Smouha · Alexandria",
    locationAr: "سموحة · الإسكندرية",
    price: "EGP 22,000 / month",
    priceAr: "٢٢٬٠٠٠ جنيه مصري شهريًا",
    area: 120,
    beds: 2,
    baths: 2,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
    // Add the real image URLs for this property's gallery here.
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
    ],
    gallery: 4,
    description:
      "A calm, functional apartment suited to professionals.",
    descriptionAr:
      "شقة هادئة وعملية بتصميم يناسب احتياجات المهنيين والباحثين عن مساحة مريحة للمعيشة.",
  },
  {
    id: 5,
    type: "Apartment",
    purpose: "Sale",
    title: "Sea-view inspired residence",
    titleAr: "وحدة سكنية بطابع ساحلي",
    location: "North Coast · Project-based",
    locationAr: "الساحل الشمالي · حسب المشروع",
    price: "Request price",
    priceAr: "السعر عند الاستفسار",
    area: 110,
    beds: 2,
    baths: 1,
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1000&q=85",
    // Add the real image URLs for this property's gallery here.
    images: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1000&q=85",
    ],
    gallery: 5,
    description:
      "A sample coastal property listing. Verified project details are still needed.",
    descriptionAr:
      "نموذج لوحدة سكنية بطابع ساحلي. لا تزال تفاصيل المشروع الفعلية بحاجة إلى التأكيد.",
  },
  {
    id: 6,
    type: "Villa",
    purpose: "Rent",
    title: "Quiet garden villa",
    titleAr: "فيلا هادئة بحديقة",
    location: "Madinaty · Greater Cairo",
    locationAr: "مدينتي · القاهرة الكبرى",
    price: "EGP 65,000 / month",
    priceAr: "٦٥٬٠٠٠ جنيه مصري شهريًا",
    area: 240,
    beds: 4,
    baths: 3,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
    // Add the real image URLs for this property's gallery here.
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
    ],
    gallery: 6,
    description:
      "A sample rental villa with garden-facing living spaces.",
    descriptionAr:
      "نموذج لفيلا للإيجار تضم مساحات معيشة تطل على الحديقة.",
  },
];
