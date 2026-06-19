import Link from "next/link"

interface SectionDividerProps {
  label: string
  action?: { label: string; href: string }
}

export const SectionDivider = ({ label, action }: SectionDividerProps) => (
  <div className="flex items-center gap-3.5 my-8">
    <span className="text-muted text-[11px] font-light tracking-[0.3em] uppercase whitespace-nowrap">
      {label}
    </span>
    <div className="flex-1 h-px bg-foreground/10" />
    {action && (
      <Link href={action.href} className="text-primary text-xs font-semibold whitespace-nowrap">
        {action.label} →
      </Link>
    )}
  </div>
)
