export default function SmallStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="card-glass px-4 py-3">
      <div className="text-white/70 text-sm">{label}</div>
      <div className="mt-1 text-[15px]">{value}</div>
    </div>
  );
}
