// app/components/HowItWorks.tsx
"use client";
import React from "react";

const Step = ({ num, title, desc, svg }: { num: number; title: string; desc: string; svg: React.ReactNode }) => (
  <div className="flex gap-4 items-start">
    <div className="w-14 h-14 flex-shrink-0 rounded-xl bg-white/3 border border-white/6 flex items-center justify-center">
      <div className="text-sm font-medium text-white/90">{num}</div>
    </div>
    <div>
      <div className="font-semibold text-white">{title}</div>
      <div className="mt-1 text-sm text-white/70 max-w-xl">{desc}</div>
    </div>
  </div>
);

export default function HowItWorks() {
  return (
    <section className="mx-auto mt-12 max-w-7xl px-6 lg:px-8" aria-labelledby="howitworks">
      <h2 id="howitworks" className="text-2xl font-semibold text-white mb-6">Comment ça marche</h2>

      <div className="grid gap-6 sm:grid-cols-3">
        <div className="card p-6">
          <Step
            num={1}
            title="Choisir l’action"
            desc="Sélectionnez Créer, Gérer, Modifier ou Fermer. On vous guide en fonction du besoin."
            svg={null}
          />
        </div>

        <div className="card p-6">
          <Step
            num={2}
            title="Répondre au wizard"
            desc="Un formulaire étape-par-étape, sauvegarde automatique et vérifications en temps réel."
            svg={null}
          />
        </div>

        <div className="card p-6">
          <Step
            num={3}
            title="Envoi & suivi"
            desc="Envoi sécurisé, accusé de réception PDF et suivi clair dans votre tableau de bord."
            svg={null}
          />
        </div>
      </div>
    </section>
  );
}
