type Kind = "create" | "manage" | "edit" | "close";

const Icon = ({ kind }: { kind: Kind }) => {
  const common = { stroke: "url(#sg)", strokeWidth: 1.8, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" } as const;
  return (
    <svg width="22" height="22" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="sg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6E7BFF"/>
          <stop offset="100%" stopColor="#2F6BFF"/>
        </linearGradient>
        <filter id="glo">
          <feGaussianBlur stdDeviation="1.4" result="a"/>
          <feMerge><feMergeNode in="a"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      {kind === "create" && (
        <g filter="url(#glo)">
          <rect x="4" y="5" width="16" height="14" rx="2" {...common}/>
          <path d="M8 3v4M16 3v4" {...common}/>
        </g>
      )}
      {kind === "manage" && (
        <g filter="url(#glo)">
          <rect x="5" y="5" width="14" height="14" rx="2" {...common}/>
          <path d="M8 9v6M12 7v8M16 11v4" {...common}/>
        </g>
      )}
      {kind === "edit" && (
        <g filter="url(#glo)">
          <path d="M4 17.5V20h2.5L18.5 8.1 16 5.6 4 17.5z" {...common}/>
          <path d="M13.5 6.9l2.6 2.6" {...common}/>
        </g>
      )}
      {kind === "close" && (
        <g filter="url(#glo)">
          <rect x="5" y="5" width="14" height="14" rx="3" {...common}/>
          <path d="M9 9l6 6M15 9l-6 6" {...common}/>
        </g>
      )}
    </svg>
  );
};

export default function FeatureCard({
  title, subtitle, kind,
}: { title: string; subtitle: string; kind: Kind }) {
  return (
    <div className="group relative card-neo p-5 md:p-6 hover:shadow-soft transition-shadow">
      <span className="icon-ring" />
      <div className="relative z-10 flex items-center gap-3">
        <div className="icon-wrap">
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon kind={kind} />
          </div>
        </div>
        <div className="flex-1">
          <div className="text-lg font-semibold">{title}</div>
          <div className="mt-1 text-sm text-white/70">{subtitle}</div>
        </div>
      </div>
      <div className="sheen" />
    </div>
  );
}
