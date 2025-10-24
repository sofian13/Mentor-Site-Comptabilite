// app/components/FinalCTA.tsx
"use client";
import React from "react";

export default function FinalCTA() {
  return (
    <section className="mx-auto mt-12 max-w-7xl px-6 lg:px-8">
      <div className="card p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-white">Prêt à démarrer votre projet ?</h3>
          <p className="mt-2 text-white/70">Créez, gérez et optimisez votre micro-entreprise — on vous accompagne pas à pas.</p>
        </div>

        <div className="flex gap-3">
          <button className="btn-primary px-6">Commencer</button>
          <button className="border border-white/10 rounded-md px-4 py-2 text-white/80">Voir le tableau de bord</button>
        </div>
      </div>
    </section>
  );
}
