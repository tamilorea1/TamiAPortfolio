type StatCardProps = {
  label: string;
  value: string;
  sub: string;
  onClick?: () => void;
};

export function StatCard({ label, value, sub, onClick }: StatCardProps) {
  return (
    <div
      onClick={onClick}
      className={`bg-shell-surface border border-shell-border rounded p-4 flex flex-col gap-1 ${
        onClick ? "cursor-pointer hover:border-green transition-colors" : ""
      }`}
    >
      <span className="text-[10px] text-shell-muted tracking-[0.1em] uppercase">{label}</span>
      <span className="text-2xl text-green font-mono">{value}</span>
      <span className="text-[11px] text-shell-muted">{sub}</span>
    </div>
  );
}
