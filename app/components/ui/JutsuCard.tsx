import Link from "next/link"
import { Jutsu } from "@/app/types/jutsu"

interface JutsuCardProps {
  jutsu: Pick<Jutsu, "name" | "jp" | "jp1" | "tipo" | "rank" | "natureza" | "alcance">
  href?: string
}

export const JutsuCard = ({ jutsu, href }: JutsuCardProps) => {
  const { name, jp, jp1, tipo, rank, natureza, alcance } = jutsu

  const inner = (
    <>
      <div className="absolute right-[-8px] bottom-[-18px] font-black text-foreground/5 text-[74px] leading-none select-none">
        {jp1}
      </div>
      <div className="relative">
        <div className="flex justify-between items-start mb-3.5">
          <span className="font-mono text-[10px] tracking-[0.1em] text-muted uppercase">{tipo}</span>
          <span className="font-black text-foreground text-[13px] bg-primary w-[26px] h-[26px] rounded-md flex items-center justify-center flex-shrink-0">
            {rank}
          </span>
        </div>
        <p className="text-foreground font-semibold text-[19px]">{name}</p>
        <p className="font-mono text-[11px] text-primary mt-1">{jp}</p>
        <div className="mt-3.5 flex gap-2 flex-wrap">
          <span className="text-muted text-[10.5px] border border-foreground/10 px-2 py-1 rounded-full">
            {natureza}
          </span>
          <span className="text-muted text-[10.5px] border border-foreground/10 px-2 py-1 rounded-full">
            Alc. {alcance}
          </span>
        </div>
      </div>
    </>
  )

  const className =
    "relative bg-panel border border-foreground/10 rounded-xl p-5 overflow-hidden block hover:-translate-y-1 hover:border-primary transition-all duration-200"

  return href ? (
    <Link href={href} className={className}>
      {inner}
    </Link>
  ) : (
    <div className={className}>{inner}</div>
  )
}
