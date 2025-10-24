"use client";
import React from "react";
import ChartLine from "./ChartLine";

export default function Dashboard() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 lg:mt-10">
      {/* Grid responsive : 1 col sur mobile, 2 cols dès md */}
      <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
        {/* Carte CHIFFRE D'AFFAIRES */}
        <article className="min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-[#0c1230]/60 p-4 sm:p-5 backdrop-blur">
          <header className="mb-3 sm:mb-4">
            <p className="text-sm text-white/70">Chiffre d'affaires</p>
            <p className="text-xs text-white/40">Variation</p>
          </header>

          {/* Graphe responsive clipé */}
          <ChartLine />

          {/* Ligne séparatrice qui ne déborde pas */}
          <div className="mt-4 h-px w-full bg-white/10" />
        </article>

        {/* CARTE “Bloc du bas” (Année / KPI / Notifications) */}
        <article className="min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-[#0c1230]/60 p-4 sm:p-5 backdrop-blur">
          <div className="grid grid-cols-1 gap-4 sm:gap-5">
            <div>
              <p className="text-sm text-white/70">Année</p>
              <p className="text-base sm:text-lg font-medium text-white">Année 9</p>
            </div>

            <div className="h-px w-full bg-white/10" />

            <div>
              <p className="text-sm text-white/70">Chiffre d'affaires</p>
              <p className="text-2xl sm:text-3xl font-semibold text-white">23,6 k €</p>
            </div>

            <div className="h-px w-full bg-white/10" />

            <div className="space-y-1.5">
              <p className="text-sm text-white/70">Notifications</p>
              <p className="text-sm text-white/90">Déclaration mensuelle prête</p>
              <p className="text-sm text-white/90">2 reçus à valider</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
