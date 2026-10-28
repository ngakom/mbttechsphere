"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Solutions", href: "/#industries" },
  { label: "Portfolio", href: "/#projects" },
  { label: "About", href: "/#why-us" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-white/95 backdrop-blur border-b border-hairline-light shadow-[0_4px_24px_rgba(21,20,18,0.06)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/#home" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-10 items-center justify-center rounded-lg bg-navy px-2 py-1.5">
            <Image
              src="/images/logo-mark.png"
              alt="MBT TechSphere Solutions logo"
              width={1160}
              height={468}
              className="h-full w-auto object-contain"
              priority
            />
          </span>
          <span
            className={`font-heading text-[1.05rem] font-bold leading-none ${
              solid ? "text-ink" : "text-white"
            }`}
          >
            TechSphere <span className="text-gold">Solutions</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                solid ? "text-slate hover:text-accent" : "text-text-grey hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          className="btn-lift hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(200,100,47,0.35)] hover:bg-accent-light lg:inline-block"
        >
          Get Started
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-0.5 w-6 rounded-full transition-all ${
              solid ? "bg-ink" : "bg-white"
            } ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 rounded-full transition-all ${
              solid ? "bg-ink" : "bg-white"
            } ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 rounded-full transition-all ${
              solid ? "bg-ink" : "bg-white"
            } ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-hairline-light bg-white px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-grey-light"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
