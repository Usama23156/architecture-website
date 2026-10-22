
"use client";

import { useState } from "react";

const services = [
  "Buying a Property",
  "Selling a Property",
  "Renting a Property",
  "Property Valuation",
  "Architectural Design",
  "Interior Design",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-[#f7f7f3] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#a58a60]">
            Let&apos;s Connect
          </p>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#202a25] sm:text-4xl lg:text-5xl">
            Let&apos;s discuss your
            <span className="text-[#a58a60]"> next project.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">
            Whether you&apos;re looking for your next property or planning a
            new architectural project, we&apos;re here to help you take the
            next step.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid overflow-hidden rounded-2xl bg-white shadow-sm lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact Information */}
          <div className="relative overflow-hidden bg-[#202a25] p-7 text-white sm:p-10 lg:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />

            <div className="relative z-10">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#c5ad83]">
                Contact Information
              </p>

              <h3 className="mt-5 text-2xl font-semibold sm:text-3xl">
                We&apos;d love to hear from you.
              </h3>

              <p className="mt-4 max-w-sm leading-7 text-white/65">
                Tell us what you have in mind, and let&apos;s explore how we
                can bring your vision to life.
              </p>

              <div className="mt-10 space-y-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-[#c5ad83]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-5 w-5"
                    >
                      <path
                        d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>

                  <div>
                    <p className="font-medium">Our Location</p>
                    <p className="mt-1 text-sm leading-6 text-white/60">
                      Get in touch for location details.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-[#c5ad83]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-5 w-5"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                      />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </div>

                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="mt-1 text-sm leading-6 text-white/60">
                      Send us your project details through the form.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-[#c5ad83]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-5 w-5"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path
                        d="M12 7v5l3 2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="font-medium">Working Hours</p>
                    <p className="mt-1 text-sm leading-6 text-white/60">
                      Contact us to arrange a consultation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 border-t border-white/15 pt-6">
                <p className="text-sm leading-6 text-white/60">
                  Every great space starts with a conversation.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 sm:p-10 lg:p-12">
            <h3 className="text-2xl font-semibold text-[#202a25]">
              Send us a message
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Fill in the details below and tell us how we can help.
            </p>

            {submitted && (
              <div
                role="status"
                className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800"
              >
                Thank you! Your form passed the current demo submission.
                No message has been sent or saved yet.
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Full Name *
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-gray-200 bg-[#fcfcfa] px-4 py-3 text-sm text-[#202a25] outline-none transition placeholder:text-gray-400 focus:border-[#a58a60] focus:ring-2 focus:ring-[#a58a60]/15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Phone Number *
                  </label>

                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="w-full rounded-lg border border-gray-200 bg-[#fcfcfa] px-4 py-3 text-sm text-[#202a25] outline-none transition placeholder:text-gray-400 focus:border-[#a58a60] focus:ring-2 focus:ring-[#a58a60]/15"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-gray-200 bg-[#fcfcfa] px-4 py-3 text-sm text-[#202a25] outline-none transition placeholder:text-gray-400 focus:border-[#a58a60] focus:ring-2 focus:ring-[#a58a60]/15"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-service"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  How Can We Help?
                </label>

                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-200 bg-[#fcfcfa] px-4 py-3 text-sm text-[#202a25] outline-none transition focus:border-[#a58a60] focus:ring-2 focus:ring-[#a58a60]/15"
                >
                  <option value="">Select a service</option>

                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Your Message *
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="w-full resize-y rounded-lg border border-gray-200 bg-[#fcfcfa] px-4 py-3 text-sm leading-6 text-[#202a25] outline-none transition placeholder:text-gray-400 focus:border-[#a58a60] focus:ring-2 focus:ring-[#a58a60]/15"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-lg bg-[#202a25] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#a58a60] sm:w-auto"
              >
                Send Message

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M5 12h14m-6-6 6 6-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
