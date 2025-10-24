export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="20" height="20" viewBox="0 0 20 20" className="drop-shadow-[0_0_12px_rgba(47,107,255,.6)]">
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6E7BFF"/>
            <stop offset="100%" stopColor="#2F6BFF"/>
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.2" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        <path d="M3 3 L17 10 L3 17 Z" fill="url(#lg)" filter="url(#glow)" />
      </svg>
      <span className="text-lg font-semibold logo-glow">Mentor</span>
    </div>
  );
}
