interface StatBarProps {
  label: string
  value: number
  max?: number
}

export const StatBar = ({ label, value, max = 5 }: StatBarProps) => {
  const pct = Math.min((value / max) * 100, 100)

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-foreground font-semibold text-[13px]">{label}</span>
        <span className="font-mono text-[12px] text-primary">{value.toFixed(1)}</span>
      </div>
      <div className="h-2 bg-foreground/5 rounded-full overflow-hidden border border-foreground/5">
        <div
          className="h-full bg-primary rounded-full transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
