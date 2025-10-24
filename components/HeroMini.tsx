"use client";

export default function HeroMini() {
  return (
    <div className="mt-6 lg:hidden space-y-4">
      {/* KPI bar compacte */}
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 shadow-[0_8px_30px_rgba(0,0,0,0.35)] w-full max-w-full overflow-hidden">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-xs text-white/70">Chiffre d’affaires (mois)</div>
            <div className="text-xl font-semibold leading-tight">3 240 €</div>
          </div>
          {/* mini sparkline responsive */}
          <svg viewBox="0 0 120 44" preserveAspectRatio="xMidYMid meet" className="w-28 h-auto shrink-0">
            <defs>
              <linearGradient id="mini-spark" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="white" stopOpacity="0.85" />
                <stop offset="100%" stopColor="white" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            <path
              d="M0,30 C10,25 18,12 30,14 C42,16 50,28 62,22 C74,16 86,10 120,14"
              fill="none" stroke="url(#mini-spark)" strokeWidth="3" strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
          <div className="rounded-lg bg-white/5 px-2 py-1.5 border border-white/10">
            <div className="text-white/70">Échéance</div>
            <div className="font-medium">URSSAF 30 nov.</div>
          </div>
          <div className="rounded-lg bg-white/5 px-2 py-1.5 border border-white/10">
            <div className="text-white/70">Tâches</div>
            <div className="font-medium">3 à faire</div>
          </div>
        </div>
      </div>

      {/* Logos / gages de confiance (scrollable) */}
      <div className="-mx-6 px-6">
        <div className="hide-scrollbar overflow-x-auto whitespace-nowrap py-1">
          <div className="inline-flex items-center gap-3">
            {["URSSAF", "impots.gouv.fr", "INPI", "FranceConnect", "RGPD"].map((label) => (
              <div
                key={label}
                className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-white/70 backdrop-blur-md"
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Micro preuve sociale */}
      <div className="flex items-center gap-2 text-[11px] text-white/65">
        <span className="inline-block size-1.5 rounded-full bg-emerald-400/90 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
        Données chiffrées, synchronisation sécurisée, conforme RGPD.
      </div>
    </div>
  );
}
