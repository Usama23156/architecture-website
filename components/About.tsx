
"use client";

import useTranslation from "@/hooks/useTranslation";

export default function About() {
  const { t, lang } = useTranslation();

  const isArabic = lang === "ar";
  const highlights = t.about.highlights;

  return (
    <section
      id="about"
      dir={isArabic ? "rtl" : "ltr"}
      className="bg-[#f7f6f1] py-16 md:py-20"
    >
      <div
        className={`mx-auto grid w-[92%] max-w-[1180px] grid-cols-1 items-center gap-10 md:gap-[45px] ${
          isArabic
            ? "md:grid-cols-[1.2fr_0.8fr]"
            : "md:grid-cols-[0.8fr_1.2fr]"
        }`}
      >
        {/* About Artwork */}
        <div className="flex min-h-[300px] flex-col justify-between rounded-[22px] bg-[#17251f] p-8 text-[#f7f6f1] md:min-h-[350px] md:p-[34px]">
          <span className="text-[11px] font-extrabold uppercase tracking-[2px] text-[#d4b58d]">
            {t.about.artworkTitle}
          </span>

          <div
          
            className="text-[80px] font-extrabold leading-none tracking-[-7px] text-[#d4b58d]"
          >
            MI.
          </div>

          <p className="max-w-[260px] text-sm leading-relaxed text-[#c4cec6]">
            {t.about.artworkDescription}
          </p>
        </div>

        {/* About Content */}
        <div className={isArabic ? "text-right" : "text-left"}>
          <span className="text-[11px] font-extrabold uppercase tracking-[2.5px] text-[#8d6b42]">
            {t.about.eyebrow}
          </span>

          <h2 className="my-3 text-3xl font-bold leading-tight tracking-[-1.5px] text-[#17251f] md:text-[40px]">
            {t.about.title}
          </h2>

          <p className="text-sm leading-[1.9] text-[#69746d]">
            {t.about.description}
          </p>

          {/* Highlights */}
          <div className="my-[22px] flex flex-wrap gap-2">
            {highlights.map((item, index) => (
              <span
                key={`${index}-${item}`}
                className="rounded-full border border-[#e2e4dc] px-[11px] py-2 text-[11px] text-[#17251f]"
              >
                {item}
              </span>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-[#17251f] bg-[#17251f] px-[17px] py-[11px] text-xs font-bold text-white transition hover:-translate-y-px hover:opacity-90"
          >
            {t.about.button}

            <span
              dir="ltr"
              className={isArabic ? "mr-1" : "ml-1"}
              aria-hidden="true"
            >
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
