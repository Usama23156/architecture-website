
"use client";

import Link from "next/link";
import useTranslation from "@/hooks/useTranslation";

export default function Footer() {
  const { t, lang } = useTranslation();
  const isArabic = lang === "ar";

  const quickLinks = [
    { label: t.footer.home, href: "#home" },
    { label: t.footer.propertiesLink, href: "#properties" },
    { label: t.footer.servicesLink, href: "#services" },
    { label: t.footer.aboutUs, href: "#about" },
    { label: t.footer.contactLink, href: "#contact" },
  ];

  

  return (
    <footer
      dir={isArabic ? "rtl" : "ltr"}
      className="bg-[#202a25] text-white"
    >
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {/* Brand */}
          <div>
            <Link href="#home" className="inline-flex flex-col">
              <span
                dir="ltr"
                className="text-2xl font-semibold tracking-[0.12em]"
              >
                ARCHITECT
                <span className="text-[#a58a60]">.</span>
              </span>

              <span
                dir="ltr"
                className="mt-1 text-[10px] uppercase tracking-[0.28em] text-white/50"
              >
                Mohab Ismail
              </span>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/60">
              {t.footer.brandDescription}
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-sm font-semibold text-white/70 transition hover:border-[#a58a60] hover:bg-[#a58a60] hover:text-white"
              >
                in
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-sm font-semibold text-white/70 transition hover:border-[#a58a60] hover:bg-[#a58a60] hover:text-white"
              >
                IG
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-sm font-semibold text-white/70 transition hover:border-[#a58a60] hover:bg-[#a58a60] hover:text-white"
              >
                f
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em]">
              {t.footer.quickLinks}
            </h3>

            <div className="mb-5 mt-3 h-0.5 w-10 bg-[#a58a60]" />

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-[#c5ad83]"
                  >
                    <span className="h-px w-0 bg-[#a58a60] transition-all group-hover:w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

         

          {/* Contact CTA */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em]">
              {t.footer.letsTalk}
            </h3>

            <div className="mb-5 mt-3 h-0.5 w-10 bg-[#a58a60]" />

            <p className="text-sm leading-7 text-white/60">
              {t.footer.contactDescription}
            </p>

            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-3 rounded-lg bg-[#a58a60] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#b79b6d]"
            >
              {t.footer.getInTouch}

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className={`h-4 w-4 transition-transform ${
                  isArabic
                    ? "rotate-180 group-hover:-translate-x-1"
                    : "group-hover:translate-x-1"
                }`}
              >
                <path
                  d="M5 12h14m-6-6 6 6-6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-14 border-t border-white/10 pt-6 sm:mt-16">
          <div className="flex flex-col gap-4 text-xs leading-6 text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © 2026 ARCHITECT — Mohab Ismail.{" "}
              {t.footer.copyright}
            </p>

            <a
              href="#home"
              className="inline-flex items-center gap-2 transition hover:text-[#c5ad83]"
            >
              {t.footer.backToTop}
              <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
