import Reveal from "./Reveal";
import StatCounter from "./StatCounter";

const STATS = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Solutions Delivered" },
  { value: 100, suffix: "%", label: "Client Focus" },
  { value: 24, suffix: "/7", label: "Support" },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-navy py-24 lg:py-32">
      <div className="glow-field">
        <div className="glow-orb left-1/4 top-0 h-80 w-80 bg-accent/30" />
        <div className="glow-orb bottom-0 right-1/4 h-80 w-80 bg-gold/20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest-sm text-gold">
            About us
          </span>
          <h2 className="font-heading mt-4 text-3xl font-bold text-white sm:text-4xl">
            Why Choose MBT TechSphere Solutions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-grey">
            A senior team that builds modern websites, AI chatbots and Power Platform solutions for
            small businesses and large organizations alike — and stays accountable long after
            go-live.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div className="card-dark rounded-2xl px-6 py-10 text-center">
                <div className="font-heading text-4xl font-bold text-gold sm:text-5xl">
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-3 text-sm font-medium text-text-grey">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
