
"use client";

import useTranslation from "@/hooks/useTranslation";

const featureIcons = [
  <svg key="home" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-8 w-8">
    <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="design" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-8 w-8">
    <path d="M4 3h12l4 4v14H4z" strokeLinejoin="round" />
    <path d="M16 3v5h4M7 17h10M7 13h6M7 9h4" strokeLinecap="round" />
    <path d="m15 12 5-5 2 2-5 5-3 1z" strokeLinejoin="round" />
  </svg>,
  <svg key="interior" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-8 w-8">
    <path d="M5 12V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4M4 12h16v7H4zM6 19v2m12-2v2M4 15h16" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="project" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-8 w-8">
    <path d="M3 8h18v12H3zM8 8V5h8v3M12 12v4M10 14h4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 4h2m10 0h2" strokeLinecap="round" />
  </svg>,
  <svg key="trust" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-8 w-8">
    <path d="m3 12 4-4 4 1 3-2 7 4-7 8-5-3-3 1-3-5Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m7 8 4 5 3-2 4 2M11 9l3 3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

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
      <div className="mx-auto w-[90%] max-w-[1180px]">

        {/* Dark Architectural Banner */}
        <div className="grid overflow-hidden rounded-[22px] bg-[#10251b] text-[#f7f6f1] md:min-h-[560px] md:grid-cols-[1.15fr_0.85fr]">

          {/* Banner Text */}
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

            <p className="mt-7 text-sm leading-[2] text-[#e0e5df] sm:text-base">
              {about.bannerParagraphOne}
            </p>

            <p className="mt-5 text-sm leading-[2] text-[#bfc9c1] sm:text-base">
              {about.bannerParagraphTwo}
            </p>
          </div>

          {/* Banner Image */}
          <div className="relative min-h-[280px] overflow-hidden md:min-h-full">
  <img
    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=90"
    alt={
      isArabic
        ? "فيلا عصرية بتصميم معماري مميز"
        : "Modern villa with contemporary architecture"
    }
    loading="lazy"
    className={`absolute inset-0 h-full w-full object-cover ${
      isArabic
        ? "rounded-tr-[40%]"
        : "rounded-tl-[40%]"
    }`}
  />
</div>
        </div>

        {/* Existing About Content */}
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
          <div className="relative h-[280px] overflow-hidden rounded-[12px] bg-[#e5e4dc] sm:h-[360px] md:h-[380px]">
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

        {/* Features */}
        <div className="mt-8 grid grid-cols-2 border-y border-[#dcdcd3] sm:grid-cols-3 md:grid-cols-5">
          {features.map((feature, index) => (
            <div
              key={`${index}-${feature}`}
              className={`flex min-h-[125px] flex-col items-start justify-center gap-3 px-3 py-5 text-start sm:px-5 md:min-h-[145px] ${
                index !== 0
                  ? isArabic
                    ? "border-r border-[#dcdcd3]"
                    : "border-l border-[#dcdcd3]"
                  : ""
              }`}
            >
              <span className="text-[#17251f]">
                {featureIcons[index]}
              </span>

              <p className="whitespace-pre-line text-xs leading-[1.6] text-[#303b34] sm:text-sm">
                {feature}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-6 text-start">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full bg-[#10251b] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#294638]"
          >
            {about.button}
            <span dir="ltr" aria-hidden="true">↗</span>
          </a>
        </div>

      </div>
    </section>
  );

}
