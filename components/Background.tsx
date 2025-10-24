"use client";
import React from "react";
import Image from "next/image";

export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{
        // accélére le composant côté GPU pour éviter les micro-sauts
        willChange: "transform, opacity",
        transform: "translateZ(0)",
      }}
    >
      {/* Image plein écran (remplace le path si besoin) */}
      <Image
        src="/images/nebuleuse.png"
        alt=""
        priority
        fill
        sizes="100vw"
        className="object-cover"
      />
      {/* voile radial pour contraster le texte */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_70%_20%,rgba(60,80,255,0.25),transparent_60%),radial-gradient(45%_35%_at_20%_80%,rgba(128,0,255,0.20),transparent_60%)]" />
      {/* léger assombrissement global */}
      <div className="absolute inset-0 bg-[#06091f]/40" />
    </div>
  );
}
