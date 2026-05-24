"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

/**
 * Theme toggle. Used many times daily — no transform animations.
 * Just an opacity crossfade between sun/moon icons.
 */
export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted ? (theme === "system" ? resolvedTheme === "dark" : theme === "dark") : false;

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        relative inline-flex h-9 w-9 items-center justify-center
        rounded-full border border-border
        bg-surface/60 backdrop-blur
        text-muted-foreground
        transition-[transform,color,background-color,border-color] duration-150 ease-out
        hover:text-foreground hover:border-border-strong
        active:scale-[0.94]
      "
    >
      <Sun
        size={16}
        className={`absolute transition-opacity duration-150 ease-out ${
          mounted && !isDark ? "opacity-100" : "opacity-0"
        }`}
      />
      <Moon
        size={16}
        className={`absolute transition-opacity duration-150 ease-out ${
          mounted && isDark ? "opacity-100" : "opacity-0"
        }`}
      />
    </button>
  );
}
