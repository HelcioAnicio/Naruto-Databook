import Link from "next/link";
import { Character } from "@/app/types/character";

interface CharacterCardProps {
  character: Character;
  href?: string;
  size?: "sm" | "md";
}

export const CharacterCard = ({
  character,
  href,
  size = "md",
}: CharacterCardProps) => {
  const portraitHeight = size === "sm" ? "h-[120px]" : "h-[150px]";
  // const kanjiSize = size === "sm" ? "text-5xl" : "text-[60px]";

  const inner = (
    <>
      <div
        className={`${portraitHeight} relative flex items-center justify-center`}
        style={{
          background:
            "repeating-linear-gradient(45deg, #2a221e 0 9px, #221c19 9px 18px)",
        }}
      ></div>
      <div className="px-3.5 pt-3 pb-4"></div>
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
