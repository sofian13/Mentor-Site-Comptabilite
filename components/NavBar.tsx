// components/Navbar.tsx
"use client";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-ink-900/60 backdrop-blur">
      {/* bordure très subtile, pas une barre blanche */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-neon-500 shadow-[0_0_20px_rgba(76,111,255,0.7)]" />
            <span className="font-semibold tracking-tight">Mentor</span>
          </div>
          <a href="#cta" className="btn-primary">Commencer</a>
        </div>
      </div>
    </header>
  );
}
