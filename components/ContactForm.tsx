"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "hello@mmdigitalsolutions.com";

const fieldClass =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-text-grey/50 outline-none transition-colors focus:border-gold";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const company = String(data.get("company") ?? "");
    const message = String(data.get("message") ?? "");

    const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `Consultation request from ${name || "website visitor"}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-text-grey">
          Full name
        </label>
        <input id="name" name="name" type="text" required className={fieldClass} placeholder="Jane Dlamini" />
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-text-grey">
          Email
        </label>
        <input id="email" name="email" type="email" required className={fieldClass} placeholder="jane@company.com" />
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-text-grey">
          Phone
        </label>
        <input id="phone" name="phone" type="tel" className={fieldClass} placeholder="+27 00 000 0000" />
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="company" className="mb-1.5 block text-xs font-semibold text-text-grey">
          Company
        </label>
        <input id="company" name="company" type="text" className={fieldClass} placeholder="Your organization" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-text-grey">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${fieldClass} resize-none`}
          placeholder="Tell us about the process, app or dashboard you need."
        />
      </div>
      <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="btn-lift rounded-full bg-maroon px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(92,26,65,0.45)] hover:bg-maroon-light"
        >
          Book a Consultation
        </button>
        {sent && (
          <p className="text-sm text-gold">
            Opening your email app with this message — hit send there to reach us.
          </p>
        )}
      </div>
    </form>
  );
}
