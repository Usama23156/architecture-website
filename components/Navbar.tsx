
"use client";

import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store/store";
import { setLanguage } from "@/store/languageSlice";
import useTranslation from "@/hooks/useTranslation";

export default function Navbar() {
  const dispatch = useDispatch<AppDispatch>();
  const { lang, t } = useTranslation();

  const isArabic = lang === "ar";

  const navLinks = [
    {
      label: t.navbar.properties,
      href: "#properties",
    },
    {
      label: t.navbar.services,
      href: "#services",
    },
    {
      label: t.navbar.about,
      href: "#about",
    },
    {
      label: t.navbar.contact,
      href: "#contact",
    },
  ];

  function toggleLanguage() {
    dispatch(setLanguage(isArabic ? "en" : "ar"));
  }

  return (
    <>
      {/* Top Bar */}
      <div
        className="bg-[#17251f] py-2.25 text-xs text-[#f7f6f1] max-sm:text-[10px]"
        dir={isArabic ? "rtl" : "ltr"}
      >
        <div className="mx-auto flex w-[92%] items-center justify-between gap-3">
          <span>{t.navbar.topbar}</span>
          <span>{t.navbar.topbarLocation}</span>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className="sticky top-0 z-50 border-b border-[#e2e4dc] bg-[#f7f6f1]/95 backdrop-blur-xl"
        dir={isArabic ? "rtl" : "ltr"}
      >
        <div className="mx-auto flex min-h-19 w-[92%] items-center justify-between gap-5 max-sm:min-h-16.5">
          {/* Brand */}
          <a
            href="#home"
            className="shrink-0 text-lg font-extrabold tracking-[-0.6px] text-[#17251f] max-sm:text-[13px]"
          >
            ARCHITECT / MOHAB ISMAIL

            <small className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[2px] text-[#69746d] max-sm:text-[9px]">
              {t.navbar.brandSubtitle}
            </small>
          </a>

          {/* Navigation Links */}
          <nav className="hidden items-center gap-6.25 min-[851px]:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] text-[#39453e] transition-colors hover:text-[#b58a56]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-2.5">
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={
                isArabic ? "Switch to English" : "التغيير إلى العربية"
              }
              className="rounded-full border cursor-pointer border-[#e2e4dc] px-2.75 py-2 text-xs text-[#17251f] transition hover:border-[#b58a56]"
            >
              {t.navbar.language}
            </button>

            <a
              href="#contact"
              className="rounded-full border border-[#17251f] bg-[#17251f] px-4.25 py-2.75 text-xs font-bold text-white transition hover:-translate-y-px hover:opacity-90 max-sm:hidden"
            >
              {t.navbar.talk}
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
