
"use client";

import useTranslation from "@/hooks/useTranslation";
import ScrollReveal from "@/components/ScrollReveal";

export default function Services() {
  const { t, lang } = useTranslation();
  const isArabic = lang === "ar";

  const services = [
    {
      icon: "⌂",
      title: t.services.propertySourcing.title,
      description: t.services.propertySourcing.description,
    },
    {
      icon: "✳",
      title: t.services.interiorFinishing.title,
      description: t.services.interiorFinishing.description,
    },
    {
      icon: "▧",
      title: t.services.furnitureDrawings.title,
      description: t.services.furnitureDrawings.description,
    },
    {
      icon: "◫",
      title: t.services.design2D3D.title,
      description: t.services.design2D3D.description,
    },
    {
      icon: "✓",
      title: t.services.unitHandover.title,
      description: t.services.unitHandover.description,
    },
    {
      icon: "▤",
      title: t.services.projectManagement.title,
      description: t.services.projectManagement.description,
    },
    {
      icon: "⌘",
      title: t.services.academicSupport.title,
      description: t.services.academicSupport.description,
    },
  ];

  return (
    <section
      id="services"
      dir={isArabic ? "rtl" : "ltr"}
      className="bg-[#e9ece5] py-16 md:py-20"
    >
      <div className="mx-auto w-[92%] max-w-295">
      <ScrollReveal>
        {/* Section Heading */}
        <div className="mb-7 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className={isArabic ? "text-right" : "text-left"}>
            <span className="text-[11px] font-extrabold uppercase tracking-[2.5px] text-[#8d6b42]">
              {t.services.eyebrow}
            </span>

            <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-[#17251f] md:text-[42px]">
              {t.services.title}
            </h2>
          </div>

          <p
            className={`max-w-105 text-sm leading-relaxed text-[#69746d] ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            {t.services.description}
          </p>
        </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={index}
              className={`flex min-h-52.5 flex-col rounded-2xl border border-[#dce1d8] bg-[#fdfcf7] p-5.75 text-start transition duration-200 hover:-translate-y-1 hover:shadow-lg ${
                isArabic ? "items-start" : "items-start"
              }`}
            >
              <ScrollReveal>
              <div
                className="mb-5 grid h-10.5 w-10.5 place-items-center rounded-xl bg-[#dfe6dc] text-xl text-[#17251f]"
                aria-hidden="true"
              >
                {service.icon}
              </div>

              <h3 className="mb-2 text-[17px] font-bold text-[#17251f]">
                {service.title}
              </h3>

              <p className="mb-5 text-[13px] leading-relaxed text-[#69746d]">
                {service.description}
              </p>

              <a
                href="#contact"
                className="mt-auto text-xs font-extrabold text-[#17251f] transition-colors hover:text-[#b58a56]"
              >
                {t.services.discussService}
                <span
                  dir="ltr"
                  className={isArabic ? "mr-1" : "ml-1"}
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
              </ScrollReveal>
            </article>
          ))}
        </div>
      </div>
     
    </section>
  );
}
