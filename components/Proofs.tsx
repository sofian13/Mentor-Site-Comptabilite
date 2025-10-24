// app/components/Proofs.tsx
"use client";
import React from "react";

const Logo = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center rounded-md border border-white/6 bg-white/2 px-3 py-2">
    <div className="w-24 text-xs text-white/80">{children}</div>
  </div>
);

export default function Proofs() {
  return (
    <section className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Ils utilisent Mentor</h3>
          <div className="text-sm text-white/60">+1 247 démarches envoyées</div>
        </div>

        <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
          <Logo>URSSAF</Logo>
          <Logo>INPI</Logo>
          <Logo>Qonto</Logo>
          <Logo>Infogreffe</Logo>
        </div>

        <div className="card p-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white/6 flex items-center justify-center font-semibold text-white/90">M</div>
            <div>
              <div className="font-semibold text-white">Marine, graphiste</div>
              <div className="mt-1 text-sm text-white/70">« Super simple — j’ai créé ma micro en une heure, et j’ai eu mon reçu. »</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
