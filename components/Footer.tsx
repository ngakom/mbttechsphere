import Image from "next/image";

const QUICK_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <path d="M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9Z" />
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <path d="M14 9V6.5c0-.83.67-1.5 1.5-1.5H17V2h-2.5A4.5 4.5 0 0 0 10 6.5V9H7v3h3v10h4V12h2.8l.7-3H14Z" />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-hairline-dark bg-navy py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:flex-row lg:items-start lg:justify-between lg:px-10">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 items-center">
              <Image
                src="/images/logo-mark.png"
                alt="MBT TechSphere Solutions logo"
                width={1160}
                height={468}
                className="h-full w-auto object-contain"
              />
            </span>
            <span className="font-heading text-lg font-bold text-white">
              TechSphere <span className="text-gold">Solutions</span>
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-text-grey">
            Digital solutions for a smarter tomorrow.
          </p>
        </div>

        <div className="flex flex-wrap gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest-sm text-text-grey/70">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-text-grey transition-colors hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest-sm text-text-grey/70">
              Social Media
            </p>
            <div className="mt-4 flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-text-grey transition-colors hover:bg-accent hover:text-white"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-hairline-dark px-6 pt-6 lg:px-10">
        <p className="text-xs text-text-grey/60">
          © {new Date().getFullYear()} MBT TechSphere Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
