"use client";

import { useMemo } from "react";

export default function ChartLine({ w=520, h=120, stroke="rgba(110,123,255,0.9)", fill="rgba(110,123,255,0.12)", points=28, noise=0.35 }:{
  w?:number; h?:number; stroke?:string; fill?:string; points?:number; noise?:number;
}){
  const path = useMemo(()=>{
    const xs = Array.from({length: points}, (_,i)=> i/(points-1));
    const ys = xs.map(x=>{
      const base = 0.5 + 0.35*Math.sin(x*5.2 + 0.7);
      const jitter = (Math.random()-0.5)*noise;
      return Math.min(0.98, Math.max(0.02, base + jitter));
    });
    const px = xs.map(x=> x*w);
    const py = ys.map(y=> (1-y)*h);
    const d = ["M", px[0], py[0], ...px.slice(1).flatMap((x,i)=>["L", x, py[i+1]])].join(" ");
    const dArea = `${d} L ${w} ${h} L 0 ${h} Z`;
    return { d, dArea };
  },[w,h,points,noise]);

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="block">
      <defs>
        <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={fill} />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <path d={path.dArea} fill="url(#g1)" />
      <path d={path.d} stroke={stroke} strokeWidth="2.5" fill="none" filter="url(#glow)" />
    </svg>
  );
}
