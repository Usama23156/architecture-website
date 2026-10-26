"use client";

import useTranslation from "@/hooks/useTranslation";
import ScrollReveal from "@/components/ScrollReveal";



export default function About() {
  const { t, lang } = useTranslation();
  const isArabic = lang === "ar";
  const about = t.about;

  const features = about.highlights;

  return (
    <section
      id="about"
      dir={isArabic ? "rtl" : "ltr"}
      className="bg-[#f7f6f1] py-14 sm:py-16 md:py-20"
    >
      <div className="mx-auto w-[90%] max-w-295">
        {/* Dark Architectural Banner */}
        <div className="grid overflow-hidden rounded-[22px] bg-[#10251b] text-[#f7f6f1] md:min-h-140 md:grid-cols-[1.15fr_0.85fr]">
          {/* Banner Text */}
          <ScrollReveal>
            <div className="flex flex-col justify-center p-6 sm:p-9 md:p-12 lg:p-14">
              <p className="mb-8 text-xs font-medium tracking-[2px] text-[#d4b58d]">
                {about.bannerEyebrow}
              </p>

              <h2 className="text-3xl font-extrabold leading-[1.35] tracking-tight sm:text-4xl md:text-[48px] lg:text-[56px]">
                <span className="block text-[#f7f6f1]">
                  {about.bannerTitleLine1}
                </span>
                <span className="block text-[#d4b58d]">
                  {about.bannerTitleLine2}
                </span>
                <span className="block text-[#d4b58d]">
                  {about.bannerTitleLine3}
                </span>
              </h2>

              <p className="mt-7 text-sm leading-loose text-[#e0e5df] sm:text-base">
                {about.bannerParagraphOne}
              </p>

              <p className="mt-5 text-sm leading-loose text-[#bfc9c1] sm:text-base">
                {about.bannerParagraphTwo}
              </p>
            </div>
          </ScrollReveal>

          {/* Banner Image */}

          <div className="relative min-h-70 overflow-hidden md:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=90"
              alt={
                isArabic
                  ? "فيلا عصرية بتصميم معماري مميز"
                  : "Modern villa with contemporary architecture"
              }
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-cover ${
                isArabic ? "rounded-tr-[40%]" : "rounded-tl-[40%]"
              }`}
            />
          </div>
        </div>

        {/* Existing About Content */}
        <ScrollReveal>
        <div className="mt-10 grid grid-cols-1 items-center gap-8 md:mt-12 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
          {/* Text */}
          <div className="text-start">
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[3px] text-[#8d6b42]">
              {about.eyebrow}
            </p>

            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-[#17251f] sm:text-5xl md:text-[54px]">
              {about.name}
            </h2>

            <p className="mt-2 text-sm font-bold uppercase tracking-[2px] text-[#69746d] sm:text-base">
              {about.role}
            </p>

            <p className="mt-6 text-sm leading-[1.9] text-[#59645d] sm:text-base">
              {about.paragraphOne}
            </p>

            <p className="mt-4 text-sm leading-[1.9] text-[#59645d] sm:text-base">
              {about.paragraphTwo}
            </p>
          </div>

          {/* About Image */}
          <div className="relative h-70 overflow-hidden rounded-xl bg-[#e5e4dc] sm:h-90 md:h-95">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
              alt={
                isArabic
                  ? "تصميم داخلي معماري عصري"
                  : "Modern architectural interior"
              }
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        </ScrollReveal>

        {/* Call to Action */}
        <div className="mt-6 text-start">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full bg-[#10251b] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#294638]"
          >
            {about.button}
            <span dir="ltr" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
