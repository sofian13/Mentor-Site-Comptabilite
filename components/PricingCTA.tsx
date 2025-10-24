// components/PricingCTA.tsx
"use client";

export default function PricingCTA() {
  return (
    <section id="cta" className="relative overflow-hidden">
      <div
        className="absolute -left-20 -bottom-32 w-[42rem] h-[42rem] rounded-full blur-2xl"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(76,111,255,0.35), rgba(76,111,255,0.0) 60%)" }}
      />
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="card">
            <div className="text-sm text-white/60">Tarifs</div>
            <div className="mt-2 flex items-baseline gap-4">
              <div className="text-4xl font-extrabold">€ 29,99</div>
              <div className="text-white/60">/mois</div>
            </div>
            <ul className="mt-4 space-y-2 text-white/80">
              <li>Déclarations automatisées</li>
              <li>Exports comptables</li>
              <li>Invitations (lecture seule)</li>
            </ul>
            <a className="btn-primary mt-6" href="#">Démarrer</a>
          </div>

          <div className="card">
            <div className="text-sm text-white/60">Offre étudiants</div>
            <div className="mt-2 flex items-baseline gap-4">
              <div className="text-4xl font-extrabold">€ 23,99</div>
              <div className="text-white/60">/mois</div>
            </div>
            <ul className="mt-4 space-y-2 text-white/80">
              <li>100% des fonctionnalités</li>
              <li>Support prioritaire</li>
              <li>Annulation à tout moment</li>
            </ul>
            <a className="btn-primary mt-6" href="#">Profiter</a>
          </div>
        </div>
      </div>
    </section>
  );
}
