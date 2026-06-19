"use client"

interface Chip {
  key: string
  label: string
}

interface FilterChipsProps {
  chips: Chip[]
  active: string
  onChange: (key: string) => void
}

export const FilterChips = ({ chips, active, onChange }: FilterChipsProps) => (
  <div className="flex gap-2 flex-wrap">
    {chips.map((chip) => (
      <button
        key={chip.key}
        onClick={() => onChange(chip.key)}
        className={`text-xs font-semibold tracking-[0.04em] px-3.5 py-2 rounded-full border transition-all duration-200 ${
          active === chip.key
            ? "bg-primary text-foreground border-primary"
            : "bg-transparent text-muted border-foreground/10 hover:border-primary/50"
        }`}
      >
        {chip.label}
      </button>
    ))}
  </div>
)
