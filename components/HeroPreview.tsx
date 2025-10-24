"use client";

export default function HeroPreview() {
  return (
    <div className="relative w-full max-w-xl ml-auto">
      {/* Glow subtil derrière les cards */}
      <div className="hero-right-glow absolute -top-10 -right-6 h-[420px] w-[420px] rounded-full blur-3xl opacity-80 pointer-events-none" />

      <div className="grid grid-cols-12 gap-4">
        {/* CARD 1 — Stat principale */}
        <div className="col-span-7">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 shadow-[0_10px_40px_rgba(0,0,0,0.35)] w-full max-w-full overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/70">Charges estimées</span>
              <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70">M-1</span>
            </div>
            <div className="mt-2 text-3xl font-semibold tracking-tight">1 284 €</div>

            {/* Sparkline responsive */}
            <div className="mt-3 w-full max-w-full overflow-hidden rounded-lg">
              <svg viewBox="0 0 200 60" preserveAspectRatio="xMidYMid meet" className="block w-full h-auto">
                <defs>
                  <linearGradient id="hero-spark" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="white" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="white" stopOpacity="0.15" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,45 C25,40 35,15 60,18 C85,21 95,40 120,32 C145,24 160,15 200,20"
                  fill="none"
                  stroke="url(#hero-spark)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="mt-2 text-xs text-white/60">Dernière mise à jour : il y a 2 jours</div>
          </div>
        </div>

        {/* CARD 2 — Tâches */}
        <div className="col-span-5">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 h-full shadow-[0_10px_40px_rgba(0,0,0,0.35)] w-full max-w-full overflow-hidden">
            <div className="text-sm text-white/70 mb-2">À faire</div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="inline-block size-2 rounded-full bg-emerald-400/80" />
                Déclarer CA mensuel
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block size-2 rounded-full bg-amber-400/80" />
                Vérifier factures
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block size-2 rounded-full bg-sky-400/80" />
                Télécharger justificatifs
              </li>
            </ul>
            <div className="mt-3 text-xs text-white/60">3 tâches à venir</div>
          </div>
        </div>

        {/* CARD 3 — Échéance + CTA */}
        <div className="col-span-12">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 flex items-center justify-between shadow-[0_10px_40px_rgba(0,0,0,0.35)] w-full max-w-full overflow-hidden">
            <div>
              <div className="text-sm text-white/70">Prochaine échéance</div>
              <div className="mt-1 font-semibold">URSSAF — 30 novembre</div>
            </div>
            <a href="#dashboard" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-sm">
              Voir le tableau de bord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
