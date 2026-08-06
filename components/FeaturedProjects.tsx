import Reveal from "./Reveal";

const PROJECTS = [
  {
    title: "Climate & Culture Action Plan",
    tags: ["Power Apps", "Power BI", "SharePoint"],
    description:
      "A cross-department platform for tracking climate and culture initiatives, with live reporting for leadership.",
    preview: "bars",
  },
  {
    title: "Document Approval System",
    tags: ["SharePoint", "Power Automate"],
    description:
      "A multi-stage approval workflow that replaced manual sign-off chains with automated routing and full audit trails.",
    preview: "flow",
  },
  {
    title: "Recruitment Portal",
    tags: ["Power Pages", "Dataverse"],
    description:
      "An external-facing candidate portal backed by a structured Dataverse pipeline for recruiters.",
    preview: "form",
  },
  {
    title: "Business Intelligence Dashboard",
    tags: ["Power BI"],
    description:
      "A consolidated executive dashboard turning siloed data sources into a single source of truth.",
    preview: "donut",
  },
  {
    title: "Employee Onboarding Portal",
    tags: ["SharePoint Online"],
    description:
      "A guided onboarding hub that gets new hires their access, documents and training from day one.",
    preview: "checklist",
  },
];

function ProjectPreview({ kind }: { kind: string }) {
  if (kind === "bars") {
    return (
      <div className="flex h-full items-end gap-2 px-6 pb-6">
        {[45, 70, 55, 85, 60, 95].map((h, i) => (
          <span
            key={i}
            className="flex-1 rounded-t-sm bg-gradient-to-t from-maroon to-gold"
            style={{ height: `${h}%`, opacity: 0.9 }}
          />
        ))}
      </div>
    );
  }
  if (kind === "flow") {
    return (
      <div className="flex h-full items-center justify-center gap-3 px-6">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-gold">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <circle cx="12" cy="12" r="5" />
              </svg>
            </span>
            {i < 3 && <span className="h-px w-6 bg-gold/50" />}
          </div>
        ))}
      </div>
    );
  }
  if (kind === "form") {
    return (
      <div className="flex h-full flex-col justify-center gap-2.5 px-8">
        <span className="h-2.5 w-2/3 rounded-full bg-white/15" />
        <span className="h-2.5 w-full rounded-full bg-white/10" />
        <span className="h-2.5 w-5/6 rounded-full bg-white/10" />
        <span className="mt-1 h-8 w-28 rounded-full bg-maroon/80" />
      </div>
    );
  }
  if (kind === "donut") {
    return (
      <div className="flex h-full items-center justify-center">
        <svg viewBox="0 0 36 36" className="h-24 w-24 -rotate-90">
          <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="4" />
          <circle
            cx="18"
            cy="18"
            r="15.5"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="4"
            strokeDasharray="72 100"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }
  return (
    <div className="flex h-full flex-col justify-center gap-3 px-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="flex h-5 w-5 items-center justify-center rounded-md bg-gold/90 text-[10px] text-navy">
            ✓
          </span>
          <span className="h-2 w-40 rounded-full bg-white/12" />
        </div>
      ))}
    </div>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="projects" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest-sm text-maroon">
            Portfolio
          </span>
          <h2 className="font-heading mt-4 text-3xl font-bold text-ink sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            A sample of the platforms, dashboards and portals we&apos;ve delivered across the
            Microsoft ecosystem.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={i * 80}>
              <div className="card-light group h-full overflow-hidden rounded-2xl">
                <div className="relative h-40 overflow-hidden bg-navy">
                  <div className="glow-field">
                    <div className="glow-orb -left-6 -top-6 h-40 w-40 bg-maroon/40" />
                  </div>
                  <div className="relative h-full transition-transform duration-500 group-hover:scale-105">
                    <ProjectPreview kind={project.preview} />
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-maroon/10 px-3 py-1 text-[11px] font-semibold text-maroon"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-heading mt-4 text-lg font-bold text-ink">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{project.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
