import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy pt-28 pb-20"
    >
      <div className="glow-field">
        <div className="glow-orb -left-32 top-0 h-[420px] w-[420px] bg-accent/50" />
        <div className="glow-orb right-0 top-1/3 h-[480px] w-[480px] bg-gold/20" />
        <div className="glow-orb bottom-0 left-1/3 h-[360px] w-[360px] bg-accent-light/25" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(203,213,225,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(203,213,225,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest-sm text-gold">
            Microsoft Power Platform Partner
          </span>
          <h1 className="font-heading mt-6 text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]">
            Transforming Businesses Through{" "}
            <span className="bg-gradient-to-r from-gold to-accent-light bg-clip-text text-transparent">
              Intelligent Digital Solutions
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-grey">
            We help organizations automate processes, build business applications, create
            insightful dashboards, and modernize digital workplaces using Microsoft Power
            Platform, SharePoint, Power BI and AI.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="btn-lift rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(200,100,47,0.45)] hover:bg-accent-light"
            >
              Book a Consultation
            </a>
            <a
              href="#projects"
              className="btn-lift rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white hover:border-white/60 hover:bg-white/5"
            >
              View Our Work
            </a>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
