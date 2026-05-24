"use client";

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium " +
  "transition-[transform,background-color,color,border-color,box-shadow] duration-150 ease-out " +
  "active:scale-[0.97] focus-visible:outline-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-foreground text-background hover:opacity-90 " +
    "shadow-[0_1px_0_0_rgb(255_255_255/0.06)_inset]",
  secondary:
    "border border-border bg-surface text-foreground hover:bg-surface-hover hover:border-border-strong",
  ghost:
    "text-muted-foreground hover:text-foreground hover:bg-surface-hover",
};

type CommonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

type AsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };
type AsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a"; href: string };

type Props = AsButton | AsAnchor;

export function Button(props: Props) {
  const { variant = "primary", className = "", children, ...rest } = props;
  const cls = `${base} ${variants[variant]} ${className}`;

  if ("as" in props && props.as === "a") {
    const { as: _as, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      as?: string;
    };
    return (
      <a className={cls} {...anchorRest}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
