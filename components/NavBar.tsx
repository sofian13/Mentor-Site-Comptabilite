"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);

  // Empêche le scroll du body quand le menu est ouvert
  React.useEffect(() => {
    const root = document.documentElement;
    if (open) root.classList.add("no-scroll");
    else root.classList.remove("no-scroll");
    return () => root.classList.remove("no-scroll");
  }, [open]);

  // Ajoute une ombre après 8px de scroll (meilleur contraste)
  const [elevated, setElevated] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50",
        "supports-safe:pt-safe", // padding haut = encoche iOS
      ].join(" ")}
      aria-label="Barre de navigation"
    >
      <div
        className={[
          "mx-auto max-w-6xl",
          "px-4 sm:px-6 lg:px-8",
        ].join(" ")}
      >
        <div
          className={[
            "flex items-center justify-between",
            "h-14 sm:h-16",
            "rounded-2xl border border-white/10",
            "bg-[rgba(10,14,40,0.55)] backdrop-blur",
            elevated ? "shadow-[0_8px_32px_rgba(0,0,0,0.35)]" : "shadow-none",
            "transition-shadow",
          ].join(" ")}
        >
          {/* Logo + marque */}
          <Link
            href="/"
            className="ml-3 flex items-center gap-2 rounded-lg px-2 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            onClick={close}
          >
            {/* Remplace /logo.svg si besoin */}
            <Image
              src="/favicon.ico"
              alt="Mentor"
              width={20}
              height={20}
              className="rounded"
              priority
            />
            <span className="text-base font-semibold text-white">Mentor</span>
          </Link>

          {/* Desktop menu */}
          <nav className="hidden items-center gap-6 pr-2 text-sm text-white/80 md:flex">
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

          {/* Burger */}
          <button
            aria-label="Ouvrir le menu"
            className="group mr-2 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            onClick={() => setOpen(true)}
          >
            <span className="i-bar h-0.5 w-5 bg-white"></span>
          </button>
        </div>
      </div>

      {/* Drawer mobile */}
      {open && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
            onClick={close}
          />
          {/* Panneau */}
          <div className="absolute right-0 top-0 h-full w-[86%] max-w-xs rounded-l-2xl border-l border-white/10 bg-[rgba(10,14,40,0.9)] p-5 text-white shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-lg font-semibold">Menu</span>
              <button
                aria-label="Fermer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5"
                onClick={close}
              >
                ✕
              </button>
            </div>
            <nav className="flex flex-col gap-2 text-base">
              <Link href="#fonctionnalites" onClick={close} className="rounded-lg px-3 py-2 hover:bg-white/10">Fonctionnalités</Link>
              <Link href="#tarifs" onClick={close} className="rounded-lg px-3 py-2 hover:bg-white/10">Tarifs</Link>
              <Link href="#faq" onClick={close} className="rounded-lg px-3 py-2 hover:bg-white/10">FAQ</Link>
              <Link
                href="#cta"
                onClick={close}
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
