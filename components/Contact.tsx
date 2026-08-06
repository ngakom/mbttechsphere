import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

const INFO = [
  {
    label: "Email",
    value: "hello@mmdigitalsolutions.com",
    icon: (
      <path d="M3 6h18v12H3V6Zm0 0 9 7 9-7" strokeWidth="1.6" stroke="currentColor" fill="none" />
    ),
  },
  {
    label: "Response time",
    value: "We typically reply within one business day",
    icon: <path d="M12 7v5l3.5 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" strokeWidth="1.6" stroke="currentColor" fill="none" />,
  },
  {
    label: "Consultations",
    value: "Free 30-minute discovery call",
    icon: (
      <path
        d="M8 2v3M16 2v3M3.5 9h17M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
        strokeWidth="1.6"
        stroke="currentColor"
        fill="none"
      />
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-24 lg:py-32">
      <div className="glow-field">
        <div className="glow-orb -left-20 bottom-0 h-96 w-96 bg-maroon/30" />
        <div className="glow-orb right-0 top-0 h-72 w-72 bg-gold/20" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-5 lg:px-10">
        <Reveal className="lg:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-widest-sm text-gold">
            Get in touch
          </span>
          <h2 className="font-heading mt-4 text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s Build Something Intelligent
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-grey">
            Tell us about the process you want automated, the app you need, or the dashboard
            your leadership team is missing. We&apos;ll take it from there.
          </p>

          <div className="mt-10 space-y-6">
            {INFO.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-gold">
                  <svg viewBox="0 0 24 24" className="h-5 w-5">
                    {item.icon}
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest-sm text-text-grey/70">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-3">
          <div className="card-dark rounded-2xl p-8 sm:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
