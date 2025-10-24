// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mentor — Plateforme indépendants",
  description: "Créez, gérez et optimisez votre micro-entreprise en ligne.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="antialiased text-white">{children}</body>
    </html>
  );
}
