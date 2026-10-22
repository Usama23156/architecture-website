
"use client";

import { useState } from "react";

const navLinks = [
  { label: "Properties", href: "#properties", ar: "الوحدات العقارية" },
  { label: "Services", href: "#services", ar: "الخدمات" },
  { label: "About", href: "#about", ar: "من أنا" },
  { label: "Contact", href: "#contact", ar: "تواصل معي" },
];

export default function Navbar() {
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const isArabic = language === "ar";

  return (
    <>
      <div className="bg-[#17251f] py-[9px] text-xs text-[#f7f6f1] max-sm:text-[10px]">
        <div className="mx-auto flex w-[92%] items-center justify-between gap-3">
          <span>
            {isArabic ? "عقارات · تصميم · تنفيذ" : "PROPERTY · DESIGN · DELIVERY"}
          </span>

          <span>
            {isArabic
              ? "نخدم العملاء في جميع أنحاء مصر"
              : "Serving clients across Egypt"}
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-10 border-b border-[#e2e4dc] bg-[#f7f6f1]/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[76px] w-[92%] items-center justify-between gap-5 max-sm:min-h-[66px]">
          <a
            href="#home"
            className="shrink-0 text-lg font-extrabold tracking-[-0.6px] text-[#17251f] max-sm:text-[13px]"
          >
            ARCHITECT / MOHAB ISMAIL

            <small className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[2px] text-[#69746d] max-sm:text-[9px]">
              {isArabic
                ? "العقارات والعمارة"
                : "Real Estate & Architecture"}
            </small>
          </a>

          <nav className="hidden items-center gap-[25px] min-[851px]:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] text-[#39453e] transition-colors hover:text-[#b58a56]"
              >
                {isArabic ? link.ar : link.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2.5">
            <button
              type="button"
              onClick={() => setLanguage(isArabic ? "en" : "ar")}
              className="rounded-full border border-[#e2e4dc] px-[11px] py-2 text-xs text-[#17251f]"
            >
              {isArabic ? "English" : "العربية"}
            </button>

            <a
              href="#contact"
              className="rounded-full border border-[#17251f] bg-[#17251f] px-[17px] py-[11px] text-xs font-bold text-white transition hover:-translate-y-px hover:opacity-90 max-sm:hidden"
            >
              {isArabic ? "لنتحدث ↗" : "Let's talk ↗"}
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
