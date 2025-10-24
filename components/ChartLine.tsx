"use client";
import * as React from "react";

/**
 * Courbe responsive :
 * - SVG avec viewBox + preserveAspectRatio (scale propre)
 * - ClipPath pour éviter tout débordement
 * - Padding interne géré en coord. (px, py)
 */
export default function ChartLine({
  points = [12, 10, 16, 14, 18, 17, 22],
  min = 0,
  max = 24,
}: {
  points?: number[];
  min?: number;
  max?: number;
}) {
  // Dimensions logique du graphe (unités abstraites)
  const W = 100;
  const H = 48;
  const px = 8;  // padding x
  const py = 10; // padding y

  const n = points.length;
  const xStep = (W - px * 2) / Math.max(1, n - 1);

  const norm = (v: number) => {
    const clamped = Math.min(Math.max(v, min), max);
    const t = (clamped - min) / (max - min || 1);
    return H - py - t * (H - py * 2); // y inversé (0 en haut)
  };

  const d = points
    .map((v, i) => `${i === 0 ? "M" : "L"} ${px + i * xStep} ${norm(v)}`)
    .join(" ");

  // Bande sous la courbe (remplissage léger)
  const area =
    `M ${px} ${H - py} ` +
    points
      .map((v, i) => `L ${px + i * xStep} ${norm(v)}`)
      .join(" ") +
    ` L ${px + (n - 1) * xStep} ${H - py} Z`;

  const id = React.useId();

  return (
    <div className="relative w-full min-w-0 overflow-hidden rounded-2xl">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="Variation du chiffre d'affaires"
        className="block h-auto w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id={`${id}-stroke`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#7aa2ff" />
            <stop offset="1" stopColor="#8f5eff" />
          </linearGradient>
          <linearGradient id={`${id}-fill`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#7aa2ff" stopOpacity="0.25" />
            <stop offset="1" stopColor="#7aa2ff" stopOpacity="0" />
          </linearGradient>
          {/* Empêche tout dépassement hors cadre */}
          <clipPath id={`${id}-clip`}>
            <rect x="0" y="0" width={W} height={H} rx="6" ry="6" />
          </clipPath>
        </defs>

        {/* Fond subtil */}
        <rect x="0" y="0" width={W} height={H} rx="6" ry="6" fill="url(#bg-grad)" opacity="0" />

        {/* Zone clippée */}
        <g clipPath={`url(#${id}-clip)`}>
          {/* Remplissage sous la courbe */}
          <path d={area} fill={`url(#${id}-fill)`} />

          {/* Courbe */}
          <path
            d={d}
            fill="none"
            stroke={`url(#${id}-stroke)`}
            strokeWidth={2.5}
            strokeLinejoin="round"
            strokeLinecap="round"
            shapeRendering="geometricPrecision"
          />
        </g>

        {/* Bordure interne du card (optionnelle, purement visuelle) */}
        <rect
          x="0.5"
          y="0.5"
          width={W - 1}
          height={H - 1}
          rx="6"
          ry="6"
          fill="none"
          stroke="rgba(255,255,255,0.06)"
        />
      </svg>
    </div>
  );
}
