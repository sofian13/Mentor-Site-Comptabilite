// components/FAQ.tsx
"use client";
import React, { useState } from "react";

// mini helper de classes (évite d'installer clsx)
const cn = (...a: Array<string | false | null | undefined>) =>
  a.filter(Boolean).join(" ");

const items = [
  { q: "Mentor gère-t-il mes déclarations URSSAF ?", a: "Oui. Vous saisissez vos revenus, on calcule et on génère vos déclarations. Vous validez, on envoie." },
  { q: "Puis-je commencer gratuitement ?", a: "L'essai gratuit vous permet d'importer vos données et de tester toutes les fonctionnalités principales." },
  { q: "Et si j'ai déjà une micro-entreprise ?", a: "Aucun souci. Importez vos données existantes, nous recréons l'historique et les échéances." },
  { q: "Mon comptable peut-il accéder au tableau de bord ?", a: "Vous pouvez inviter un tiers en lecture seule et exporter les pièces." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">FAQ</h2>
          <p className="text-white/70 mt-2">Réponses rapides aux questions courantes.</p>
        </div>

        <ul className="space-y-3">
          {items.map((it, i) => (
            <li key={i} className="card">
              <button
                className="w-full text-left flex items-center justify-between gap-6"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-base md:text-lg font-semibold">{it.q}</span>
                <span
                  className={cn(
                    "size-8 rounded-full border border-white/15 grid place-items-center text-white/70 transition",
                    open === i && "rotate-45"
                  )}
                >
                  +
                </span>
              </button>

              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-300",
                  open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
              >
                <div className="overflow-hidden">
                  <p className="text-white/80 mt-3 leading-relaxed">{it.a}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
