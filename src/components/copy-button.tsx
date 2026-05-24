"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

type Props = {
  value: string;
  label?: string;
  className?: string;
};

/**
 * Copy-to-clipboard button.
 * Asymmetric timing: feedback enters quick (200ms ease-out),
 * resets back over 1.4s (slow because the user is "looking at" the success state).
 */
export function CopyButton({ value, label = "Copy", className = "" }: Props) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      /* clipboard not available — silently ignore */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? `Copied ${label}` : `Copy ${label}`}
      className={`
        group relative inline-flex h-7 w-7 items-center justify-center
        rounded-md border border-transparent
        text-muted-foreground
        transition-[transform,color,background-color,border-color] duration-150 ease-out
        hover:text-foreground hover:bg-surface-hover hover:border-border
        active:scale-[0.94]
        ${className}
      `}
    >
      <Copy
        size={14}
        className={`absolute transition-opacity duration-200 ease-out ${
          copied ? "opacity-0" : "opacity-100"
        }`}
      />
      <Check
        size={14}
        className={`absolute text-success transition-opacity duration-200 ease-out ${
          copied ? "opacity-100" : "opacity-0"
        }`}
      />
    </button>
  );
}
