
"use client";

import { useMemo, useState } from "react";
import { properties } from "@/data/properties";

export default function Properties() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [purpose, setPurpose] = useState("");

  const filteredProperties = useMemo(() => {
    const query = search.trim().toLowerCase();

    return properties.filter((property) => {
      const matchesSearch =
        !query ||
        `${property.title} ${property.location}`
          .toLowerCase()
          .includes(query);

      const matchesType = !type || property.type === type;
      const matchesPurpose =
        !purpose || property.purpose === purpose;

      return matchesSearch && matchesType && matchesPurpose;
    });
  }, [search, type, purpose]);

  return (
    <section
      id="properties"
      className="bg-[#f7f6f1] py-16 md:py-20"
    >
      <div className="mx-auto w-[92%] max-w-[1180px]">
        <div className="mb-7 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-[2.5px] text-[#8d6b42]">
              The property edit
            </span>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#17251f] md:text-[42px]">
              Find a unit that fits.
            </h2>
          </div>

          <p className="max-w-[420px] text-sm leading-relaxed text-[#69746d]">
            Browse selected properties and explore their details.
            Prices and listings are illustrative examples.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="my-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_auto]">
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search project or location"
            aria-label="Search properties"
            className="min-w-0 rounded-[10px] border border-[#e2e4dc] bg-white px-3 py-3 text-sm outline-none focus:border-[#b58a56]"
          />

          <select
            value={type}
            onChange={(event) => setType(event.target.value)}
            aria-label="Filter by property type"
            className="rounded-[10px] border border-[#e2e4dc] bg-white px-3 py-3 text-sm outline-none focus:border-[#b58a56]"
          >
            <option value="">All property types</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="Duplex">Duplex</option>
          </select>

          <select
            value={purpose}
            onChange={(event) => setPurpose(event.target.value)}
            aria-label="Filter by purpose"
            className="rounded-[10px] border border-[#e2e4dc] bg-white px-3 py-3 text-sm outline-none focus:border-[#b58a56]"
          >
            <option value="">Sale or rent</option>
            <option value="Sale">For sale</option>
            <option value="Rent">For rent</option>
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
            Reset filters
          </button>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map((property) => (
            <article
              key={property.id}
              className="overflow-hidden rounded-[18px] border border-[#e2e4dc] bg-[#fffefa] transition duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-[230px] overflow-hidden bg-[#e5e4dc]">
                <img
                  src={property.image}
                  alt={property.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-300 hover:scale-105"
                />

                <span className="absolute left-[13px] top-[13px] rounded-full bg-[#fffef0ed] px-3 py-2 text-[10px] font-extrabold">
                  {property.purpose === "Sale" ? "FOR SALE" : "FOR RENT"}
                </span>

                <span className="absolute bottom-[13px] right-[13px] rounded-full bg-[#17251f]/85 px-3 py-2 text-[10px] text-white">
                  ▧ {property.gallery} photos
                </span>
              </div>

              <div className="p-[18px]">
                <p className="mb-2 text-[11px] text-[#69746d]">
                  {property.location}
                </p>

                <h3 className="text-lg font-bold text-[#17251f]">
                  {property.title}
                </h3>

                <p className="my-3 text-[17px] font-extrabold text-[#17251f]">
                  {property.price}
                </p>

                <div className="flex flex-wrap gap-3 border-y border-[#e2e4dc] py-3 text-[11px] text-[#69746d]">
                  <span>⌂ {property.area} m²</span>
                  <span>▦ {property.beds} beds</span>
                  <span>♧ {property.baths} baths</span>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    window.alert(
                      `${property.title}\n\n${property.description}`
                    )
                  }
                  className="mt-4 w-full rounded-full bg-[#17251f] px-4 py-3 text-xs font-bold text-white transition hover:bg-[#2b4035]"
                >
                  View unit ↗
                </button>
              </div>
            </article>
          ))}

          {filteredProperties.length === 0 && (
            <p className="col-span-full py-10 text-center text-sm text-[#69746d]">
              No matching listings. Try changing your filters.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
