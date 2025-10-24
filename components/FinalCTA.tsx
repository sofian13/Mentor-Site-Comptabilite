"use client";
import React from "react";

export default function FinalCTA() {
  return (
    <section id="cta" className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="rounded-3xl border border-white/12 bg-[rgba(10,14,40,0.6)] p-6 sm:p-8 backdrop-blur">
        <h2 className="text-[clamp(22px,6vw,36px)] font-bold leading-tight text-white">
          Prêt à démarrer votre projet ?
        </h2>
        <p className="mt-3 text-[clamp(14px,3.8vw,18px)] text-white/80 max-w-2xl">
          Créez, gérez et optimisez votre micro-entreprise — on vous accompagne pas à pas.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-[auto,1fr] sm:items-center">
          <a href="#contact" className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-white px-5 py-3 font-semibold text-[#0a0e28]">
            Commencer
          </a>
          <a href="#dashboard" className="inline-flex w-full sm:w-auto items-center justify-center rounded-2xl border border-white/15 px-5 py-3 text-white">
            Voir le tableau de bord
          </a>
        </div>
      </div>
    </section>
  );
}
