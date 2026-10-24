
"use client";

import useTranslation from "@/hooks/useTranslation";

export default function Hero() {
  const { t, lang } = useTranslation();
  const isArabic = lang === "ar";

  const stats = [
    {
      value: "01—04",
      label: t.hero.stats.properties,
    },
    {
      value: "2D / 3D",
      label: t.hero.stats.services,
    },
    {
      value: "EGYPT",
      label: t.hero.stats.commitment,
    },
  ];

  return (
    <section
      id="home"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-[#17251f] py-20 md:min-h-[680px]"
    >
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=90"
        alt={t.hero.imageAlt}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-[#17251f]/65" />

      {/* Hero Content */}
      <div className="mx-auto w-[92%] max-w-[1180px]">
        <div
          className={`max-w-[700px] text-white ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          <span className="text-[11px] font-extrabold uppercase tracking-[2.5px] text-[#d4b58d]">
            {t.hero.eyebrow}
          </span>

          <h1 className="my-5 text-[clamp(40px,6vw,76px)] font-bold leading-[1.2] tracking-[-1.5px] sm:leading-[1.08] md:leading-[1.02] md:tracking-[-2.7px]">
            {t.hero.titleLine1}
            <br />
            {t.hero.titleLine2}
          </h1>

          <p className="max-w-[550px] text-base leading-relaxed text-white/80 md:text-lg">
            {t.hero.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#properties"
              className="rounded-full border border-[#b58a56] bg-[#b58a56] px-6 py-3 text-xs font-bold text-white transition hover:bg-[#9e7443]"
            >
              {t.hero.exploreProperties}
              <span className={isArabic ? "mr-1" : "ml-1"} aria-hidden="true">
                ↗
              </span>
            </a>

            <a
              href="#services"
              className="rounded-full border border-white/60 px-6 py-3 text-xs font-bold text-white transition hover:bg-white hover:text-[#17251f]"
            >
              {t.hero.ourServices}
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid max-w-[620px] grid-cols-3 gap-4 border-t border-white/25 pt-6">
            {stats.map((stat) => (
              <div key={stat.value}>
                <strong
                  dir="ltr"
                  className="block text-lg font-bold md:text-2xl"
                >
                  {stat.value}
                </strong>

                <span className="mt-1 block text-[10px] leading-relaxed text-white/70 md:text-xs">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
