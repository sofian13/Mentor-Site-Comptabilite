// components/Dashboard.tsx
"use client";
import Sparkline from "./Sparkline";

export default function Dashboard() {
  // Remplace ce mock par tes données réelles si besoin
  const data = [10, 12, 11, 14, 15, 13, 16, 19, 18, 22, 24, 23];

  return (
    <section id="dashboard" className="mx-auto max-w-7xl px-6 py-14">
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Chiffre d'affaires</h3>
            <div className="badge">+ 84,50 €</div>
          </div>
          <div className="mt-2 text-sm text-white/60">Variation</div>
          <div className="mt-4">
            <Sparkline data={data} width={560} height={140} />
          </div>
        </div>

        <div className="card">
          <div className="text-sm text-white/60">Année</div>
          <div className="text-lg font-semibold">Année 9</div>

          <div className="hr my-4" />

          <div className="text-sm text-white/60">Chiffre d'affaires</div>
          <div className="text-2xl font-extrabold">23,6 k €</div>

          <div className="hr my-4" />

          <div className="text-sm text-white/60">Notifications</div>
          <ul className="mt-2 space-y-2">
            <li className="text-white/80">Déclaration mensuelle prête</li>
            <li className="text-white/80">2 reçus à valider</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
