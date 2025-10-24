"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const [open, setOpen] = React.useState(false);

  // Bloque le scroll de la page quand le drawer est ouvert
  React.useEffect(() => {
    const html = document.documentElement;
    if (open) html.classList.add("no-scroll");
    else html.classList.remove("no-scroll");
    return () => html.classList.remove("no-scroll");
  }, [open]);

  // Ombre après léger scroll
  const [elev, setElev] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setElev(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // ❌ on enlève pointer-events-none
    <header className="fixed inset-x-0 top-0 z-50 supports-safe:pt-safe">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className={[
            "mt-2 flex h-12 sm:h-14 items-center justify-between",
            "rounded-2xl border border-white/10",
            "bg-[rgba(10,14,40,0.55)] backdrop-blur",
            elev ? "shadow-[0_8px_32px_rgba(0,0,0,0.35)]" : "shadow-none",
            "transition-[box-shadow]",
          ].join(" ")}
        >
          <Link
            href="/"
            className="ml-3 flex items-center gap-2 rounded-lg px-2 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            onClick={() => setOpen(false)}
          >
            <Image src="/favicon.ico" alt="Mentor" width={18} height={18} className="rounded" priority />
            <span className="text-sm sm:text-base font-semibold text-white">Mentor</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 pr-2 text-sm text-white/85">
            <Link href="#fonctionnalites" className="hover:text-white">Fonctionnalités</Link>
            <Link href="#tarifs" className="hover:text-white">Tarifs</Link>
            <Link href="#faq" className="hover:text-white">FAQ</Link>
            <Link
              href="#cta"
              className="rounded-full bg-white/10 px-4 py-2 font-medium text-white hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Commencer
            </Link>
          </nav>

          <button
            aria-label="Ouvrir le menu"
            onClick={() => setOpen(true)}
            className="mr-2 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <span className="i-bar h-0.5 w-5 bg-white" />
          </button>
        </div>
      </div>

      {/* Drawer mobile */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden pointer-events-auto">
          {/* Backdrop cliquable */}
          <button
            aria-label="Fermer le menu"
            className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
            onClick={() => setOpen(false)}
          />
          {/* Panneau */}
          <div className="absolute right-0 top-0 h-full w-[86%] max-w-xs rounded-l-2xl border-l border-white/10 bg-[rgba(10,14,40,0.95)] p-5 text-white shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-lg font-semibold">Menu</span>
              <button
                aria-label="Fermer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>
            <nav className="flex flex-col gap-2 text-base">
              <Link href="#fonctionnalites" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-white/10">Fonctionnalités</Link>
              <Link href="#tarifs" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-white/10">Tarifs</Link>
              <Link href="#faq" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-white/10">FAQ</Link>
              <Link
                href="#cta"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-white px-4 py-3 text-center font-semibold text-[#0a0e28]"
              >
                Commencer
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
