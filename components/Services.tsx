import Reveal from "./Reveal";

const SERVICES = [
  {
    title: "Power Platform Development",
    description: "Business apps built using Power Apps and Dataverse.",
    icon: (
      <path d="M13 2 5 14h6l-2 8 10-13h-7l1-7z" />
    ),
  },
  {
    title: "SharePoint Solutions",
    description: "Modern intranets, document management and collaboration.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="4" rx="1" />
        <rect x="3" y="10" width="18" height="4" rx="1" />
        <rect x="3" y="16" width="10" height="4" rx="1" />
      </>
    ),
  },
  {
    title: "Power Automate",
    description: "Automate repetitive business processes end to end.",
    icon: (
      <>
        <circle cx="5" cy="12" r="2.5" />
        <circle cx="19" cy="6" r="2.5" />
        <circle cx="19" cy="18" r="2.5" />
        <path d="M7.3 11 17 6.8M7.3 13 17 17.2" strokeWidth="1.6" stroke="currentColor" fill="none" />
      </>
    ),
  },
  {
    title: "Power BI",
    description: "Executive dashboards and analytics that drive decisions.",
    icon: (
      <>
        <rect x="3" y="12" width="4" height="9" rx="1" />
        <rect x="10" y="7" width="4" height="14" rx="1" />
        <rect x="17" y="3" width="4" height="18" rx="1" />
      </>
    ),
  },
  {
    title: "AI & Copilot",
    description: "AI-powered business solutions that work the way you do.",
    icon: <path d="M12 2 14.2 9.8 22 12 14.2 14.2 12 22 9.8 14.2 2 12 9.8 9.8 12 2Z" />,
  },
  {
    title: "Custom Development",
    description: "React, Next.js, ASP.NET Core and API integrations.",
    icon: (
      <path
        d="M8.5 8 3.5 12l5 4M15.5 8l5 4-5 4M14 5l-4 14"
        strokeWidth="1.8"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-grey-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest-sm text-maroon">
            What we do
          </span>
          <h2 className="font-heading mt-4 text-3xl font-bold text-ink sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            End-to-end delivery across the Microsoft ecosystem, paired with custom engineering
            when off-the-shelf isn&apos;t enough.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <div className="card-light group h-full rounded-2xl p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-maroon/10 text-maroon transition-colors group-hover:bg-maroon group-hover:text-white">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                    {service.icon}
                  </svg>
                </div>
                <h3 className="font-heading mt-5 text-lg font-bold text-ink">{service.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
