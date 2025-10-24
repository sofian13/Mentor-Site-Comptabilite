// components/Sparkline.tsx
"use client";
import React from "react";

type Props = { data: number[]; width?: number; height?: number };

export default function Sparkline({ data, width = 220, height = 80 }: Props) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const norm = (v: number) => (height - 6) - ((v - min) / (max - min || 1)) * (height - 12);
  const step = (width - 12) / (data.length - 1);

  const d = data.map((v, i) => `${i === 0 ? "M" : "L"} ${6 + i * step} ${norm(v)}`).join(" ");
  const lastY = norm(data[data.length - 1]);

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="block">
      <defs>
        <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#4c6fff" stopOpacity="1" />
          <stop offset="100%" stopColor="#2041ff" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <path d={d} fill="none" stroke="url(#grad)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx={width - 6} cy={lastY} r="3.5" fill="#4c6fff" />
    </svg>
  );
}
