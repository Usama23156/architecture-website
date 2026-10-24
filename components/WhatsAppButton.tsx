
"use client";

import useTranslation from "@/hooks/useTranslation";

export default function WhatsAppButton() {
  const { lang } = useTranslation();
  const isArabic = lang === "ar";

  // Replace with the client's real WhatsApp number.
  const phoneNumber = "201000000000";

  const message = isArabic
    ? "مرحبًا، أنا مهتم بمعرفة المزيد عن خدماتكم العقارية والمعمارية."
    : "Hello, I'm interested in learning more about your property and architecture services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={
        isArabic ? "تواصل معنا عبر واتساب" : "Contact us on WhatsApp"
      }
      title={isArabic ? "تواصل معنا عبر واتساب" : "Chat on WhatsApp"}
      className={`fixed bottom-6 ${
        isArabic ? "left-6" : "right-6"
      } z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition duration-300 hover:scale-110 hover:bg-[#1ebe5d] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30`}
    >
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-8 w-8"
        aria-hidden="true"
      >
        <path d="M16.02 3C8.85 3 3.02 8.8 3.02 15.94c0 2.28.6 4.5 1.74 6.45L3 29l6.79-1.72a13.1 13.1 0 0 0 6.23 1.58h.01C23.2 28.86 29 23.06 29 15.93A12.9 12.9 0 0 0 16.02 3Zm0 23.67h-.01a10.9 10.9 0 0 1-5.56-1.52l-.4-.24-4.03 1.02 1.08-3.92-.26-.41a10.7 10.7 0 0 1-1.65-5.66c0-5.95 4.86-10.79 10.83-10.79 2.9 0 5.62 1.13 7.67 3.17a10.7 10.7 0 0 1 3.18 7.64c0 5.95-4.86 10.79-10.85 10.79Zm5.95-8.08c-.33-.16-1.94-.96-2.24-1.07-.3-.11-.52-.16-.74.16-.22.33-.85 1.07-1.04 1.29-.19.22-.39.25-.72.08-.33-.16-1.39-.51-2.65-1.63-.98-.87-1.64-1.94-1.83-2.27-.19-.33-.02-.5.14-.66.15-.15.33-.39.49-.58.16-.19.22-.33.33-.55.11-.22.06-.41-.03-.58-.08-.16-.74-1.78-1.01-2.43-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.58.08-.88.41-.3.33-1.15 1.12-1.15 2.73s1.18 3.17 1.35 3.39c.16.22 2.32 3.53 5.62 4.95.78.34 1.39.54 1.86.69.78.25 1.49.22 2.05.13.63-.09 1.94-.79 2.21-1.56.27-.77.27-1.43.19-1.56-.08-.14-.3-.22-.63-.39Z" />
      </svg>
    </a>
  );
}
