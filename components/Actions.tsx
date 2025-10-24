"use client";

import { Blocks, Grid2X2, Pencil, X } from "lucide-react";

type Action = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
};

const actions: Action[] = [
  {
    title: "Créer",
    subtitle: "Formalités de création",
    icon: <Blocks className="h-7 w-7 md:h-8 md:w-8 opacity-90" />,
  },
  {
    title: "Gérer",
    subtitle: "Déclarations courantes",
    icon: <Grid2X2 className="h-7 w-7 md:h-8 md:w-8 opacity-90" />,
  },
  {
    title: "Modifier",
    subtitle: "Mises à jour",
    icon: <Pencil className="h-7 w-7 md:h-8 md:w-8 opacity-90" />,
  },
  {
    title: "Fermer",
    subtitle: "Cessation d'activité",
    icon: <X className="h-7 w-7 md:h-8 md:w-8 opacity-90" />,
  },
];

export default function Actions() {
  return (
    <section className="mx-auto mt-8 max-w-7xl px-6 lg:px-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {actions.map((a, i) => (
          <article
            key={i}
            className="card group relative overflow-hidden transition-transform duration-200 hover:-translate-y-0.5"
          >
            {/* glow subtil en haut */}
            <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b from-white/6 to-transparent opacity-50"></div>

            <div className="flex items-start gap-3">
              <div className="icon-wrap">{a.icon}</div>
              <div className="pt-0.5">
                <h3 className="font-semibold tracking-tight">{a.title}</h3>
                <p className="mt-1 text-sm text-white/70">{a.subtitle}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
