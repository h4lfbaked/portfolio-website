import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLSpanElement> & {
  tone?: "default" | "accent" | "success";
};

const tones = {
  default:
    "border-border bg-surface text-muted-foreground hover:text-foreground hover:border-border-strong",
  accent: "border-accent/30 bg-accent/10 text-accent",
  success: "border-success/30 bg-success/10 text-success",
};

export function Badge({ tone = "default", className = "", children, ...rest }: Props) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        rounded-full border px-2.5 py-1
        font-mono text-[11px] font-medium leading-none
        transition-[color,background-color,border-color] duration-150 ease-out
        ${tones[tone]}
        ${className}
      `}
      {...rest}
    >
      {children}
    </span>
  );
}
