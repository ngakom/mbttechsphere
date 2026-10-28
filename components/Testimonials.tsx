import Reveal from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "They didn't just build us an app — they mapped our approval process first, then automated the parts that were actually slowing us down. Sign-off times dropped from days to hours.",
    role: "Head of Operations",
    sector: "Financial Services",
  },
  {
    quote:
      "Our leadership team finally has one dashboard instead of five spreadsheets. The Power BI build surfaced numbers we didn't know we had.",
    role: "Programme Manager",
    sector: "Public Sector",
  },
  {
    quote:
      "The SharePoint intranet they delivered actually gets used. Onboarding new staff went from a stack of PDFs to a guided portal in a few weeks.",
    role: "HR Director",
    sector: "Education",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-grey-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest-sm text-accent">
            Client feedback
          </span>
          <h2 className="font-heading mt-4 text-3xl font-bold text-ink sm:text-4xl">
            What Clients Say
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.role} delay={i * 90}>
              <div className="card-light flex h-full flex-col rounded-2xl p-8">
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-accent/25" fill="currentColor">
                  <path d="M7.17 5C4.87 6.2 3 8.94 3 11.83 3 14.4 4.7 16 6.7 16c1.8 0 3.3-1.4 3.3-3.3 0-1.7-1.2-3-2.8-3.2C7.5 8 8.6 6.7 10.3 6l-3.13-1ZM17.17 5c-2.3 1.2-4.17 3.94-4.17 6.83 0 2.57 1.7 4.17 3.7 4.17 1.8 0 3.3-1.4 3.3-3.3 0-1.7-1.2-3-2.8-3.2C17.5 8 18.6 6.7 20.3 6l-3.13-1Z" />
                </svg>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-slate">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-hairline-light pt-4">
                  <p className="font-heading text-sm font-bold text-ink">{t.role}</p>
                  <p className="text-xs text-slate">{t.sector}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
