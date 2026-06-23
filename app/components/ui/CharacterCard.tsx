import Link from "next/link";
import { Character } from "@/app/types/character";

interface CharacterCardProps {
  character: Pick<Character, "name" | "jp1" | "vila" | "rank" | "reg">;
  href?: string;
  size?: "sm" | "md";
}

export const CharacterCard = ({
  character,
  href,
  size = "md",
}: CharacterCardProps) => {
  const { name, jp1, vila, rank, reg } = character;
  const portraitHeight = size === "sm" ? "h-[120px]" : "h-[150px]";
  const kanjiSize = size === "sm" ? "text-5xl" : "text-[60px]";

  const inner = (
    <>
      <div
        className={`${portraitHeight} relative flex items-center justify-center`}
        style={{
          background:
            "repeating-linear-gradient(45deg, #2a221e 0 9px, #221c19 9px 18px)",
        }}
      >
        <span className={`${kanjiSize} text-foreground/60 font-black`}>
          {jp1}
        </span>
        {size === "md" && rank && (
          <span className="text-foreground bg-primary absolute top-2 right-2 rounded px-1.5 py-0.5 font-mono text-[9px]">
            {rank}
          </span>
        )}
        {size === "md" && reg && (
          <span className="text-muted absolute bottom-1.5 left-2 font-mono text-[8px] tracking-[0.12em]">
            RETRATO · {reg}
          </span>
        )}
        {size === "sm" && (
          <span className="text-muted absolute bottom-1.5 left-2 font-mono text-[8px] tracking-[0.1em]">
            RETRATO
          </span>
        )}
      </div>
      <div className="px-3.5 pt-3 pb-4">
        <p className="text-foreground text-[15px] font-semibold">{name}</p>
        <p className="text-muted mt-0.5 text-[10.5px] tracking-[0.08em] uppercase">
          {vila}
        </p>
      </div>
    </>
  );

  const className =
    "bg-panel border border-foreground/10 rounded-xl overflow-hidden block hover:-translate-y-1 hover:border-primary transition-all duration-200";

  return href ? (
    <Link href={href} className={className}>
      {inner}
    </Link>
  ) : (
    <div className={className}>{inner}</div>
  );
};
