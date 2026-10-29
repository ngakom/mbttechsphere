"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "info@mbttechsphere.co.za";

// Web3Forms delivers submissions to CONTACT_EMAIL. The access key is public by design.
// Without a key the form falls back to opening the visitor's email app.
const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "24b3d1c0-4f37-4d97-bbf6-f474ee11406c";

const fieldClass =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-text-grey/50 outline-none transition-colors focus:border-gold";

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const company = String(data.get("company") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = `Consultation request from ${name || "website visitor"}`;

    if (!WEB3FORMS_KEY) {
      const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\n\n${message}`;
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject,
          from_name: "MBT TechSphere website",
          replyto: email,
          name,
          email,
          phone,
          company,
          message,
        }),
      });
      const result = await res.json();
      if (!res.ok || !result.success) throw new Error(result.message);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
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
          disabled={status === "sending"}
          className="btn-lift rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(200,100,47,0.45)] hover:bg-accent-light disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Book a Consultation"}
        </button>
        <p role="status" className="text-sm text-gold">
          {status === "sent" && "Thank you! Your request has been sent — we'll be in touch within one business day."}
          {status === "mailto" && "Opening your email app with this message — hit send there to reach us."}
          {status === "error" && (
            <>
              Something went wrong sending your request. Please email us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
                {CONTACT_EMAIL}
              </a>
              .
            </>
          )}
        </p>
      </div>
    </form>
  );
}
