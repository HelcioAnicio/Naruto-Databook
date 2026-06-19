import Link from "next/link"
import { Section } from "@/app/types/section"

interface SectionCardProps extends Pick<Section, "code" | "kanji" | "label" | "tag" | "ready"> {
  href?: string
}

export const SectionCard = ({ code, kanji, label, tag, ready, href }: SectionCardProps) => {
  const inner = (
    <>
      <div className="absolute right-[-6px] bottom-[-14px] text-[64px] font-black text-foreground opacity-5 leading-none select-none">
        {kanji}
      </div>
      <div className="relative">
        <p className="text-primary font-mono text-[10px] tracking-[0.15em] mb-2">{code}</p>
        <p className="text-foreground font-semibold text-[17px] mb-1.5">{label}</p>
        <p className={`text-[11px] tracking-[0.08em] uppercase font-light ${ready ? "text-primary" : "text-muted"}`}>
          {tag}
        </p>
      </div>
    </>
  )

  const className =
    "relative bg-panel border border-foreground/10 rounded-xl p-5 overflow-hidden block hover:-translate-y-1 transition-transform duration-200"

  return href ? (
    <Link href={href} className={className}>
      {inner}
    </Link>
  ) : (
    <div className={className}>{inner}</div>
  )
}
