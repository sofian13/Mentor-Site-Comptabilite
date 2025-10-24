// app/components/Pricing.tsx
"use client";
import React, { useState } from "react";

function PriceCard({ title, price, features }: { title: string; price: string; features: string[] }) {
  return (
    <div className="card p-6 flex flex-col justify-between">
      <div>
        <div className="text-sm text-white/70">{title}</div>
        <div className="mt-3 text-2xl font-bold text-white">{price}</div>
        <ul className="mt-4 space-y-2 text-sm text-white/70">
          {features.map((f, i) => (
            <li key={i}>• {f}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <button className="btn-primary w-full">Choisir</button>
      </div>
    </div>
  );
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  const monthly = [
    { t: "Créer (solo)", p: "€19,99/mois", f: ["Wizard guidé", "Documents PDF", "Support email"] },
    { t: "Gérer", p: "€23,99/mois", f: ["Déclarations", "Exports compta", "Rappels"] },
    { t: "Pack Complet", p: "€39,99/mois", f: ["Tout compris", "Assistance prioritaire"] },
  ];

  const yearly = [
    { t: "Créer (solo)", p: "€179/an", f: ["Wizard guidé", "Documents PDF", "Support email"] },
    { t: "Gérer", p: "€199/an", f: ["Déclarations", "Exports compta", "Rappels"] },
    { t: "Pack Complet", p: "€399/an", f: ["Tout compris", "Assistance prioritaire"] },
  ];

  const setPlan = () => {
    /* placeholder: rediriger vers la page de checkout ou modal */
    alert("Processus de souscription (placeholder)");
  };

  return (
    <section className="mx-auto mt-12 max-w-7xl px-6 lg:px-8" aria-labelledby="pricing">
      <div className="flex items-center justify-between">
        <h3 id="pricing" className="text-lg font-semibold text-white">Tarifs</h3>
        <div className="flex items-center gap-3 text-sm">
          <span className="text-white/70">Mensuel</span>
          <button
            aria-pressed={annual}
            onClick={() => setAnnual(!annual)}
            className="relative inline-flex h-6 w-12 items-center rounded-full p-0.5 bg-white/6"
          >
            <span className={`h-5 w-5 rounded-full bg-white transition-transform ${annual ? "translate-x-6" : "translate-x-0"}`} />
          </button>
          <span className="text-white/70">Annuel</span>
        </div>
      </div>

      <div className="grid gap-4 mt-6 md:grid-cols-3">
        {(annual ? yearly : monthly).map((p) => (
          <div key={p.t} className="relative">
            <PriceCard title={p.t} price={p.p} features={p.f} />
          </div>
        ))}
      </div>

      <div className="mt-4 text-sm text-white/60">Tous les prix s'entendent TTC. Essai 7 jours possible.</div>
    </section>
  );
}
