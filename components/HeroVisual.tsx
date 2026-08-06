export default function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]" aria-hidden="true">
      {/* connecting flow lines behind the panels */}
      <svg
        viewBox="0 0 520 520"
        className="absolute inset-0 h-full w-full overflow-visible"
        fill="none"
      >
        <path
          d="M120 130 C 220 130, 220 230, 300 230"
          stroke="url(#lineGrad)"
          strokeWidth="1.5"
          className="dash-flow"
        />
        <path
          d="M420 150 C 340 150, 340 260, 300 260"
          stroke="url(#lineGrad)"
          strokeWidth="1.5"
          className="dash-flow"
        />
        <path
          d="M150 420 C 220 400, 240 320, 300 300"
          stroke="url(#lineGrad)"
          strokeWidth="1.5"
          className="dash-flow"
        />
        <path
          d="M400 400 C 340 380, 330 330, 300 310"
          stroke="url(#lineGrad)"
          strokeWidth="1.5"
          className="dash-flow"
        />
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {/* AI node cluster, center */}
        <circle cx="300" cy="270" r="5" fill="#38bdf8" className="pulse-soft" />
        <circle cx="318" cy="255" r="3" fill="#3b82f6" className="pulse-soft" style={{ animationDelay: "0.4s" }} />
        <circle cx="285" cy="250" r="3" fill="#3b82f6" className="pulse-soft" style={{ animationDelay: "0.8s" }} />
        <circle cx="312" cy="288" r="3" fill="#38bdf8" className="pulse-soft" style={{ animationDelay: "1.2s" }} />
      </svg>

      {/* Power BI style analytics panel */}
      <div className="float-slow absolute left-0 top-[8%] w-[58%] rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-widest-sm text-gold">
            Power BI
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </div>
        <div className="flex h-20 items-end gap-2">
          {[38, 62, 45, 80, 55, 92, 68].map((h, i) => (
            <span
              key={i}
              className="rise-bar flex-1 rounded-t-sm bg-gradient-to-t from-maroon to-gold"
              style={{ height: `${h}%`, animationDelay: `${i * 90}ms` }}
            />
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between text-[11px] text-text-grey">
          <span>Revenue trend</span>
          <span className="font-semibold text-gold">+24.6%</span>
        </div>
      </div>

      {/* Power Apps badge */}
      <div className="float-slower absolute right-[2%] top-[16%] w-[42%] rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <span className="text-[11px] font-semibold uppercase tracking-widest-sm text-gold">
          Power Apps
        </span>
        <div className="mt-3 space-y-2">
          <div className="h-2.5 w-full rounded-full bg-white/10" />
          <div className="h-2.5 w-4/5 rounded-full bg-white/10" />
          <div className="flex gap-2 pt-1">
            <span className="h-6 w-6 rounded-md bg-maroon-light/80" />
            <span className="h-6 w-6 rounded-md bg-white/10" />
            <span className="h-6 w-6 rounded-md bg-white/10" />
          </div>
        </div>
      </div>

      {/* SharePoint / document card */}
      <div className="float-slow absolute left-[4%] bottom-[10%] w-[46%] rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <span className="text-[11px] font-semibold uppercase tracking-widest-sm text-gold">
          SharePoint
        </span>
        <div className="mt-3 flex flex-col gap-2">
          {["Policy_2025.docx", "Onboarding.pdf", "Roadmap.pptx"].map((f) => (
            <div key={f} className="flex items-center gap-2 text-[11px] text-text-grey">
              <span className="h-1.5 w-1.5 rounded-sm bg-gold" />
              {f}
            </div>
          ))}
        </div>
      </div>

      {/* AI / Copilot orb */}
      <div className="float-slower absolute bottom-[6%] right-[6%] flex w-[38%] flex-col items-center rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-center shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold to-maroon">
          <span className="pulse-soft absolute inset-0 rounded-full bg-gold/40" />
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="relative">
            <path
              d="M12 2 L14 9 L21 11 L14 13 L12 20 L10 13 L3 11 L10 9 Z"
              fill="white"
            />
          </svg>
        </div>
        <span className="mt-2 text-[11px] font-semibold uppercase tracking-widest-sm text-gold">
          AI &amp; Copilot
        </span>
      </div>

      {/* ambient glows */}
      <div className="glow-orb -left-10 top-10 h-56 w-56 bg-maroon/40" />
      <div className="glow-orb bottom-0 right-0 h-64 w-64 bg-gold/30" />
    </div>
  );
}
