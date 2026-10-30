import Reveal from "./Reveal";

const INDUSTRIES = [
  {
    name: "Healthcare",
    icon: (
      <path d="M12 21s-7-4.35-9.5-8.5C.8 8.9 2.6 5 6.2 5c2 0 3.4 1.1 4.1 2.1M12 21s7-4.35 9.5-8.5C23.2 8.9 21.4 5 17.8 5c-2 0-3.4 1.1-4.1 2.1M12 8v6M9 11h6" />
    ),
  },
  {
    name: "Government",
    icon: (
      <path d="M3 21h18M4 21V10M20 21V10M2 10l10-6 10 6M6 10v5M10 10v5M14 10v5M18 10v5" />
    ),
  },
  {
    name: "Financial Services",
    icon: <path d="M3 20h18M6 20V11M11 20V6M16 20V13M21 20V9" />,
  },
  {
    name: "Education",
    icon: (
      <path d="M12 3 2 8l10 5 10-5-10-5ZM6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" />
    ),
  },
  {
    name: "Mining",
    icon: (
      <path d="M3 21h18M5 21 9 9l3 4 3-6 4 14M9 9l-1.5-3M12 13l-2-3" />
    ),
  },
  {
    name: "Manufacturing",
    icon: (
      <path d="M3 21V11l5 3.5V11l5 3.5V11l5 3.5V21H3ZM7 21v-4M12 21v-4M17 21v-4" />
    ),
  },
];

export default function Industries() {
  return (
    <section id="industries" className="bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest-sm text-gold">
            Solutions by sector
          </span>
          <h2 className="font-heading mt-4 text-3xl font-bold text-white sm:text-4xl">
            Industries We Serve
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-grey">
            From local small businesses to large enterprises — our websites and solutions are
            shaped around the customers, regulations and operational realities of each sector.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {INDUSTRIES.map((industry, i) => (
            <Reveal key={industry.name} delay={i * 70}>
              <div className="card-dark flex h-full flex-col items-center gap-4 rounded-2xl px-4 py-9 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {industry.icon}
                  </svg>
                </span>
                <span className="text-sm font-semibold text-text-grey">{industry.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
