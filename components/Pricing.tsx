"use client";
import React from "react";
import HorizontalSnap from "./HorizontalSnap";

function Card({ title, price, features }: { title: string; price: string; features: string[] }) {
  return (
    <article className="min-w-0 overflow-hidden rounded-3xl border border-white/12 bg-[rgba(10,14,40,0.6)] p-5 sm:p-6 backdrop-blur">
      <h3 className="text-white/90">{title}</h3>
      <p className="mt-2 text-2xl font-semibold text-white">{price}</p>
      <ul className="mt-4 space-y-2 text-white/80">
        {features.map((f, i) => <li key={i}>• {f}</li>)}
      </ul>
      <button className="mt-6 w-full rounded-full bg-[#4b6bff] px-4 py-3 font-medium text-white hover:opacity-95">Choisir</button>
    </article>
  );
}

export default function Pricing() {
  const items = [
    { title: "Créer (solo)", price: "€19,99/mois", features: ["Wizard guidé", "Documents PDF", "Support email"] },
    { title: "Gérer", price: "€23,99/mois", features: ["Déclarations", "Exports compta", "Rappels"] },
    { title: "Pack Complet", price: "€39,99/mois", features: ["Tout compris", "Assistance prioritaire", "Mises à jour"] },
  ];

  return (
    <section id="tarifs" className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
      {/* Mobile: swipe ; Desktop: grid */}
      <div className="md:hidden">
        <HorizontalSnap>
          {items.map((it) => <Card key={it.title} {...it} />)}
        </HorizontalSnap>
      </div>

      <div className="hidden md:grid grid-cols-3 gap-6">
        {items.map((it) => <Card key={it.title} {...it} />)}
      </div>

      <p className="mt-6 text-center text-sm text-white/60">Tous les prix s’entendent TTC. Essai 7 jours possible.</p>
    </section>
  );
}
