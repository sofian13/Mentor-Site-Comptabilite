// app/page.tsx
import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import Actions from "../components/Actions";
import Dashboard from "../components/Dashboard";
import PricingCTA from "../components/PricingCTA";
import FAQ from "../components/FAQ";
import HowItWorks from "../components/HowItWorks";
import Proofs from "../components/Proofs";
import Pricing from "../components/Pricing";
import FinalCTA from "../components/FinalCTA";

export default function Page() {
  return (
    <main className="min-h-dvh">
      <Navbar />

      {/* Contenu centré, largeur bornée */}
      <div className="mx-auto max-w-7xl px-6">
        <Hero />

        {/* séparation douce */}
        <div className="h-6" />

        <Actions />            {/* tes 4 cards existantes */}
<HowItWorks />
<Dashboard />
<Proofs />
<Pricing />
<FinalCTA />

        <FAQ />
      </div>

      <footer className="mx-auto max-w-7xl px-6 py-12 text-white/60">
        <div className="hr mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Mentor</span>
          <nav className="flex items-center gap-4">
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#cta" className="hover:text-white">Tarifs</a>
            <a href="#" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
