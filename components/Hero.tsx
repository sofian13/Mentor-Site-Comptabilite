// components/Hero.tsx
"use client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 md:pt-20 pb-10 md:pb-14">
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-blob left-1/2 -translate-x-1/2 -top-24" />
        <div className="hero-blob left-10 top-40 opacity-70" />
      </div>

      <div className="relative">
        <div className="badge mb-5">Plateforme tout-en-un pour indépendants</div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Crée. Gère. <br className="hidden md:block" /> Optimise. En ligne.
        </h1>
        <p className="text-white/70 mt-3 max-w-2xl">
          Plateforme tout-en-un pour les formalités des indépendants.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <a href="#cta" className="btn-primary">Commencer</a>
          <a href="#dashboard" className="badge">Voir le tableau de bord</a>
        </div>
      </div>
    </section>
  );
}
