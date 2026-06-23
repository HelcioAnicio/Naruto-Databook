import Link from "next/link";
import { Section } from "@/app/types/section";

interface SectionCardProps extends Pick<
  Section,
  "code" | "kanji" | "label" | "tag" | "ready"
> {
  href?: string;
}

export const SectionCard = ({
  code,
  kanji,
  label,
  tag,
  ready,
  href,
}: SectionCardProps) => {
  const inner = (
    <>
      <div className="text-foreground absolute right-[-6px] bottom-[-14px] text-[64px] leading-none font-black opacity-5 select-none">
        {kanji}
      </div>
      <div className="relative">
        <p className="text-primary mb-2 font-mono text-[10px] tracking-[0.15em]">
          {code}
        </p>
        <p className="text-foreground mb-1.5 text-[17px] font-semibold">
          {label}
        </p>
        <p
          className={`text-[11px] font-light tracking-[0.08em] uppercase ${ready ? "text-primary" : "text-muted"}`}
        >
          {tag}
        </p>
      </div>
    </>
  );

  const className =
    "relative bg-panel border border-foreground/10 rounded-xl p-5 overflow-hidden block hover:-translate-y-1 transition-transform duration-200";

  return href ? (
    <Link href={href} className={className}>
      {inner}
    </Link>
  ) : (
    <div className={className}>{inner}</div>
  );
};
