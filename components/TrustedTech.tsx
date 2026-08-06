import type { ReactElement } from "react";

type TechIconProps = { className?: string };

const icons: Record<string, (p: TechIconProps) => ReactElement> = {
  Microsoft: ({ className }) => (
    <svg viewBox="0 0 20 20" className={className} fill="none">
      <rect x="1" y="1" width="8" height="8" fill="#3B82F6" />
      <rect x="11" y="1" width="8" height="8" fill="#38BDF8" />
      <rect x="1" y="11" width="8" height="8" fill="#38BDF8" />
      <rect x="11" y="11" width="8" height="8" fill="#3B82F6" />
    </svg>
  ),
  "Power Apps": ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path d="M13 2 5 14h6l-2 8 10-13h-7l1-7z" fill="currentColor" />
    </svg>
  ),
  "Power BI": ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <rect x="3" y="13" width="4" height="8" rx="1" fill="currentColor" opacity="0.55" />
      <rect x="10" y="8" width="4" height="13" rx="1" fill="currentColor" opacity="0.8" />
      <rect x="17" y="3" width="4" height="18" rx="1" fill="currentColor" />
    </svg>
  ),
  SharePoint: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <circle cx="8" cy="7" r="5" fill="currentColor" opacity="0.55" />
      <circle cx="16" cy="12" r="6" fill="currentColor" opacity="0.85" />
      <circle cx="9" cy="18" r="4" fill="currentColor" />
    </svg>
  ),
  Azure: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path d="M9 3 2 20h9l3-7 4 7h4L14 3H9Z" fill="currentColor" />
    </svg>
  ),
  Copilot: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path d="M12 2 14.2 9.8 22 12 14.2 14.2 12 22 9.8 14.2 2 12 9.8 9.8 12 2Z" fill="currentColor" />
    </svg>
  ),
  Dataverse: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <ellipse cx="12" cy="6" rx="8" ry="3.2" fill="currentColor" opacity="0.9" />
      <path
        d="M4 6v6c0 1.77 3.58 3.2 8 3.2s8-1.43 8-3.2V6"
        stroke="currentColor"
        strokeWidth="1.6"
        opacity="0.6"
      />
      <path
        d="M4 12v6c0 1.77 3.58 3.2 8 3.2s8-1.43 8-3.2v-6"
        stroke="currentColor"
        strokeWidth="1.6"
        opacity="0.4"
      />
    </svg>
  ),
  React: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.4">
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </g>
    </svg>
  ),
  "Next.js": ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.5 8v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8.5 8 15.5 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M15.5 8v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
};

const TECHS = Object.keys(icons);

function TechBadge({ name }: { name: string }) {
  const Icon = icons[name];
  return (
    <div className="flex shrink-0 items-center gap-3 px-8">
      <Icon className="h-6 w-6 text-gold" />
      <span className="whitespace-nowrap text-sm font-semibold text-text-grey">{name}</span>
    </div>
  );
}

export default function TrustedTech() {
  const track = [...TECHS, ...TECHS];
  return (
    <section className="border-y border-hairline-dark bg-navy py-10">
      <p className="mx-auto mb-6 max-w-7xl px-6 text-center text-xs font-semibold uppercase tracking-widest-sm text-text-grey/70 lg:px-10">
        Built on trusted technologies
      </p>
      <div className="overflow-hidden">
        <div className="marquee-track flex w-max items-center">
          {track.map((name, i) => (
            <TechBadge key={`${name}-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
