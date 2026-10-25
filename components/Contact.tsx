
"use client";

import { useState } from "react";
import useTranslation from "@/hooks/useTranslation";
import ScrollReveal from "@/components/ScrollReveal";


export default function Contact() {
  const { t, lang } = useTranslation();
  const isArabic = lang === "ar";

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="contact"
      dir={isArabic ? "rtl" : "ltr"}
      className="scroll-mt-24 bg-[#f7f7f3] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <ScrollReveal>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#a58a60]">
            {t.faq.eyebrow}
          </p>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#202a25] sm:text-4xl lg:text-5xl">
            {t.faq.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600">
            {t.faq.description}
          </p>
        </div>
        </ScrollReveal>

        {/* FAQ Layout */}
        <div className="grid items-start gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
          {/* Left Information Card */}
          <div className="relative overflow-hidden rounded-2xl bg-[#202a25] p-7 text-white sm:p-10">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10" />
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-white/10" />
            <div className="relative z-10">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#c5ad83]">
                {t.faq.cardEyebrow}
              </span>

              <h3 className="mt-5 text-2xl font-semibold leading-snug sm:text-3xl">
                {t.faq.cardTitle}
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                {t.faq.cardDescription}
              </p>

              <div className="mt-8 space-y-4 border-t border-white/15 pt-6">
                {t.faq.highlights.map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#c5ad83]/50 text-xs text-[#c5ad83]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm text-white/85">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-8 border-t border-white/15 pt-6 text-sm leading-6 text-white/60">
                {t.faq.cardFooter}
              </p>
            </div>
          </div>

          {/* FAQ Accordion */}
          <ScrollReveal>
          <div className="space-y-3">
            {t.faq.items.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.question}
                  className={`overflow-hidden rounded-xl border bg-white transition-colors ${
                    isOpen
                      ? "border-[#a58a60]/60"
                      : "border-[#e5e5df]"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-start sm:px-6"
                  >
                    <span className="text-sm font-semibold leading-6 text-[#202a25] sm:text-base">
                      {item.question}
                    </span>

                    <span
                      aria-hidden="true"
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                        isOpen
                          ? "rotate-180 bg-[#202a25] text-white"
                          : "bg-[#f1efe8] text-[#202a25]"
                      }`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-4 w-4"
                      >
                        <path
                          d="m6 9 6 6 6-6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${index}`}
                      className="px-5 pb-5 sm:px-6"
                    >
                      <div className="border-t border-[#eeeae1] pt-4">
                        <p className="text-sm leading-7 text-gray-600">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
