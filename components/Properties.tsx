
"use client";

import { useEffect, useMemo, useState } from "react";
import { properties } from "@/data/properties";
import useTranslation from "@/hooks/useTranslation";

type Property = (typeof properties)[number];

export default function Properties() {
  const { t, lang } = useTranslation();
  const isArabic = lang === "ar";

  const propertyTranslations = t.propertyData.items;

  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [purpose, setPurpose] = useState("");
  const [selectedProperty, setSelectedProperty] =
    useState<Property | null>(null);

  const getPropertyText = (property: Property) => {
    const translated =
      propertyTranslations[
        String(property.id) as keyof typeof propertyTranslations
      ];

    return {
      title: translated?.title ?? (isArabic ? property.titleAr : property.title),
      location:
        translated?.location ??
        (isArabic ? property.locationAr : property.location),
      description:
        translated?.description ??
        (isArabic ? property.descriptionAr : property.description),
    };
  };

  const filteredProperties = useMemo(() => {
    const query = search.trim().toLowerCase();

    return properties.filter((property) => {
      const translated = getPropertyText(property);

      const matchesSearch =
        !query ||
        [
          property.title,
          property.titleAr,
          property.location,
          property.locationAr,
          translated.title,
          translated.location,
        ]
          .join(" ")
          .toLowerCase()
          .includes(query);

      const matchesType = !type || property.type === type;
      const matchesPurpose = !purpose || property.purpose === purpose;

      return matchesSearch && matchesType && matchesPurpose;
    });
  }, [search, type, purpose, propertyTranslations, isArabic]);

  useEffect(() => {
    if (!selectedProperty) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProperty(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProperty]);

  const openWhatsApp = (property: Property) => {
    const translated = getPropertyText(property);
    const messagePrefix = t.propertyData.whatsappMessage;

    const message = `${messagePrefix} ${translated.title} - ${translated.location}`;

    // Replace with the client's real WhatsApp number, including country code.
    const phoneNumber = "201000000000";

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      id="properties"
      dir={isArabic ? "rtl" : "ltr"}
      className="bg-[#f7f6f1] py-16 md:py-20"
    >
      <div className="mx-auto w-[92%] max-w-295">
        {/* Section Heading */}
        <div className="mb-7 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="text-start">
            <span className="text-[11px] font-extrabold uppercase tracking-[2.5px] text-[#8d6b42]">
              {t.properties.eyebrow}
            </span>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#17251f] md:text-[42px]">
              {t.properties.title}
            </h2>
          </div>

          <p className="max-w-[420px] text-start text-sm leading-relaxed text-[#69746d]">
            {t.properties.description}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="my-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_auto]">
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder={t.properties.searchPlaceholder}
            aria-label={t.properties.searchAria}
            className="min-w-0 rounded-[10px] border border-[#e2e4dc] bg-white px-3 py-3 text-start text-sm text-black outline-none focus:border-[#b58a56]"
          />

          <select
            value={type}
            onChange={(event) => setType(event.target.value)}
            aria-label={t.properties.typeAria}
            className="rounded-[10px] border border-[#e2e4dc] bg-white px-3 py-3 text-sm text-black outline-none focus:border-[#b58a56]"
          >
            <option value="">{t.properties.allTypes}</option>
            <option value="Apartment">{t.properties.apartment}</option>
            <option value="Villa">{t.properties.villa}</option>
            <option value="Duplex">{t.properties.duplex}</option>
          </select>

          <select
            value={purpose}
            onChange={(event) => setPurpose(event.target.value)}
            aria-label={t.properties.purposeAria}
            className="rounded-[10px] border border-[#e2e4dc] bg-white px-3 py-3 text-sm text-black outline-none focus:border-[#b58a56]"
          >
            <option value="">{t.properties.allPurposes}</option>
            <option value="Sale">{t.properties.sale}</option>
            <option value="Rent">{t.properties.rent}</option>
          </select>

          <button
            type="button"
            onClick={() => {
              setSearch("");
              setType("");
              setPurpose("");
            }}
            className="rounded-full border border-[#17251f] px-5 py-3 text-sm font-semibold text-[#17251f] transition hover:bg-[#17251f] hover:text-white"
          >
            {t.properties.clearFilters}
          </button>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map((property) => {
            const translated = getPropertyText(property);

            return (
              <article
                key={property.id}
                className="overflow-hidden rounded-[18px] border border-[#e2e4dc] bg-[#fffefa] transition duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-[230px] overflow-hidden bg-[#e5e4dc]">
                  <img
                    src={property.image}
                    alt={translated.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                  />

                  <span className="absolute start-[13px] top-[13px] rounded-full bg-[#fffef0ed] px-3 py-2 text-[10px] font-extrabold text-black">
                    {property.purpose === "Sale"
                      ? t.properties.forSale
                      : t.properties.forRent}
                  </span>

                  <span className="absolute bottom-[13px] end-[13px] rounded-full bg-[#17251f]/85 px-3 py-2 text-[10px] text-white">
                    ▧ {property.gallery} {t.properties.photos}
                  </span>
                </div>

                <div className="p-[18px] text-start">
                  <p className="mb-2 text-[11px] text-[#69746d]">
                    {translated.location}
                  </p>

                  <h3 className="text-lg font-bold text-[#17251f]">
                    {translated.title}
                  </h3>

                  <p
                    dir={isArabic ? "rtl" : "ltr"}
                    className="my-3 text-[17px] font-extrabold text-[#17251f]"
                  >
                    {isArabic ? property.priceAr : property.price}
                  </p>

                  <div className="flex flex-wrap gap-3 border-y border-[#e2e4dc] py-3 text-[11px] text-[#69746d]">
                    <span>
                      ⌂ {property.area} {t.properties.areaUnit}
                    </span>
                    <span>
                      ▦ {property.beds} {t.properties.bedrooms}
                    </span>
                    <span>
                      ♧ {property.baths} {t.properties.bathrooms}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProperty(property)}
                    className="mt-4 w-full cursor-pointer rounded-full bg-[#17251f] px-4 py-3 text-xs font-bold text-white transition hover:bg-[#2b4035]"
                  >
                    {t.properties.viewUnit} ↗
                  </button>
                </div>
              </article>
            );
          })}

          {filteredProperties.length === 0 && (
            <div className="col-span-full py-10 text-center">
              <p className="text-sm text-[#69746d]">
                {t.properties.noResults}
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setType("");
                  setPurpose("");
                }}
                className="mt-3 text-sm font-semibold text-[#8d6b42] underline"
              >
                {t.properties.clearFilters}
              </button>
            </div>
          )}
        </div>

        <p className="mt-5 text-xs leading-relaxed text-[#69746d]">
          {t.properties.disclaimer}
        </p>
      </div>

      {/* Property Details Modal */}
      {selectedProperty && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedProperty(null);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="property-modal-title"
            dir={isArabic ? "rtl" : "ltr"}
            className="relative my-auto max-h-[90vh] w-full max-w-[760px] overflow-y-auto rounded-[20px] bg-[#fffefa] shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setSelectedProperty(null)}
              aria-label={isArabic ? "إغلاق التفاصيل" : "Close details"}
              className="absolute end-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-xl text-[#17251f] shadow transition hover:bg-[#17251f] hover:text-white"
            >
              ×
            </button>

            <div className="relative h-[240px] sm:h-[340px]">
              <img
                src={selectedProperty.image}
                alt={getPropertyText(selectedProperty).title}
                className="h-full w-full object-cover"
              />

              <span className="absolute start-4 top-4 rounded-full bg-[#fffefa] px-4 py-2 text-xs font-bold text-[#17251f]">
                {selectedProperty.purpose === "Sale"
                  ? t.properties.forSale
                  : t.properties.forRent}
              </span>
            </div>

            <div className="p-5 sm:p-8">
              <p className="text-sm text-[#8d6b42]">
                {getPropertyText(selectedProperty).location}
              </p>

              <h2
                id="property-modal-title"
                className="mt-2 text-2xl font-bold text-[#17251f] sm:text-3xl"
              >
                {getPropertyText(selectedProperty).title}
              </h2>

              <p
                dir={isArabic ? "rtl" : "ltr"}
                className="mt-4 text-2xl font-extrabold text-[#17251f]"
              >
                {isArabic
                  ? selectedProperty.priceAr
                  : selectedProperty.price}
              </p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-xl bg-[#f3f1e9] p-3 text-center">
                  <p className="text-lg font-bold text-[#17251f]">
                    {selectedProperty.area}
                  </p>
                  <p className="mt-1 text-xs text-[#69746d]">
                    {t.properties.areaUnit}
                  </p>
                </div>

                <div className="rounded-xl bg-[#f3f1e9] p-3 text-center">
                  <p className="text-lg font-bold text-[#17251f]">
                    {selectedProperty.beds}
                  </p>
                  <p className="mt-1 text-xs text-[#69746d]">
                    {t.properties.bedrooms}
                  </p>
                </div>

                <div className="rounded-xl bg-[#f3f1e9] p-3 text-center">
                  <p className="text-lg font-bold text-[#17251f]">
                    {selectedProperty.baths}
                  </p>
                  <p className="mt-1 text-xs text-[#69746d]">
                    {t.properties.bathrooms}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-base font-bold text-[#17251f]">
                  {t.propertyData.about}
                </h3>

                <p className="mt-2 whitespace-pre-line text-sm leading-7 text-[#69746d]">
                  {getPropertyText(selectedProperty).description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => openWhatsApp(selectedProperty)}
                className="mt-7 w-full rounded-full bg-[#245c40] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#19452f]"
              >
                {t.propertyData.whatsapp} ↗
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
