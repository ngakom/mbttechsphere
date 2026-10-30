import Reveal from "./Reveal";

const SERVICES = [
  {
    title: "Website Design & Development",
    description:
      "Modern, fast, mobile-friendly websites for small businesses and large enterprises — designed to rank on Google and turn visitors into customers.",
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M2 9h20" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="5" cy="6.5" r="0.9" />
        <circle cx="7.8" cy="6.5" r="0.9" />
        <rect x="5" y="12" width="8" height="5" rx="1" />
        <rect x="15" y="12" width="4" height="2" rx="0.5" />
        <rect x="15" y="15" width="4" height="2" rx="0.5" />
      </>
    ),
  },
  {
    title: "AI Chatbots",
    description:
      "Smart website chatbots that answer customer questions 24/7, capture leads and book appointments — trained on your own business content.",
    icon: (
      <>
        <path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4v-4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
        <circle cx="8" cy="10.5" r="1.3" fill="white" />
        <circle cx="12" cy="10.5" r="1.3" fill="white" />
        <circle cx="16" cy="10.5" r="1.3" fill="white" />
      </>
    ),
  },
  {
    title: "Power Platform & Automation",
    description:
      "Business apps with Power Apps and Dataverse, and automated workflows with Power Automate and Copilot.",
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
    title: "Custom Web Apps & Integrations",
    description: "Customer portals, booking systems and web apps in React, Next.js and ASP.NET Core, connected to the tools you already use.",
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
          <span className="text-xs font-semibold uppercase tracking-widest-sm text-accent">
            What we do
          </span>
          <h2 className="font-heading mt-4 text-3xl font-bold text-ink sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            Modern websites and AI chatbots for businesses of every size, backed by deep
            Microsoft Power Platform expertise for the apps, automation and reporting behind them.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <div className="card-light group h-full rounded-2xl p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
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
