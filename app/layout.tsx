import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mentor — Plateforme indépendants",
  description: "Créez, gérez et optimisez votre micro-entreprise en ligne.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      {/* overflow-x-hidden = anti-scroll horizontal mobile */}
      <body className="antialiased text-white bg-ink-900 overflow-x-hidden">
        {/* BACKGROUND global : image nébuleuse + voile + halos + orbe */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          {/* Image de fond */}
          <div
            className="absolute inset-0 bg-[url('/images/nebuleuse.png')] bg-cover bg-center bg-no-repeat"
            aria-hidden
          />
          {/* Voile de lisibilité subtile */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-ink-900/30 to-ink-900/50"
            aria-hidden
          />
          {/* halos doux */}
          <div className="absolute -top-40 right-10 size-[700px] rounded-full blur-3xl hero-blob" aria-hidden />
          <div className="absolute bottom-[-200px] left-[-100px] size-[600px] rounded-full blur-3xl hero-blob" aria-hidden />
          {/* Orbe lumineuse unique (statique) */}
          <div className="absolute top-[18%] left-[68%] -translate-x-1/2 -translate-y-1/2 orb" aria-hidden />
        </div>

        {children}
      </body>
    </html>
  );
}
