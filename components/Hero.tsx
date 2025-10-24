"use client";

import HeroPreview from "../components/HeroPreview";
import HeroMini from "../components/HeroMini";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 md:pt-20 pb-10 md:pb-14">
      {/* Calques décor hero */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-blob left-1/2 -translate-x-1/2 -top-24" />
        <div className="hero-blob left-10 top-40 opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/20 via-ink-900/15 to-transparent" />
      </div>

      {/* Contenu */}
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Colonne gauche — texte/CTA (+ mini volet mobile) */}
          <div>
            <div className="badge mb-5">Plateforme tout-en-un pour indépendants</div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight heading-shadow">
              Crée. Gère. <br className="hidden md:block" /> Optimise. En ligne.
            </h1>
            <p className="text-white/75 mt-3 max-w-2xl">
              Plateforme tout-en-un pour les formalités des indépendants.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#cta" className="btn-primary">Commencer</a>
              <a href="#dashboard" className="btn-secondary">Voir le tableau de bord</a>
            </div>

            {/* Mobile only : KPI + badges confiance */}
            <HeroMini />
          </div>

          {/* Colonne droite — preview produit desktop */}
          <div className="hidden lg:block">
            <HeroPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
