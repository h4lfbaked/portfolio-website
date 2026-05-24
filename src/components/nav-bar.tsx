"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { useActiveSection } from "@/hooks/use-active-section";
import { navSections, profile } from "@/data/portfolio";

const ids = navSections.map((s) => s.id);

export function NavBar() {
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        fixed inset-x-0 top-0 z-40
        border-b border-border/60
        bg-background/70 backdrop-blur-xl
        supports-[backdrop-filter]:bg-background/55
      "
    >
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 md:px-8">
        <a
          href="#top"
          className="
            flex min-w-0 items-center gap-1
            text-sm font-semibold tracking-tight
            transition-opacity duration-150 ease-out
            hover:opacity-70
            focus-visible:outline-none
          "
        >
          <span className="truncate">{profile.shortName}</span>
          <span aria-hidden className="hidden text-muted-foreground sm:inline">·</span>
          <span className="hidden truncate font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:inline">
            {profile.role}
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navSections.map((s) => {
            const isActive = active === s.id;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`
                    relative inline-flex h-8 items-center rounded-full px-3
                    text-sm
                    transition-[color,background-color] duration-150 ease-out
                    active:scale-[0.97]
                    focus-visible:outline-none
                    ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }
                  `}
                >
                  {isActive && (
                    <span
                      aria-hidden
                      className="
                        absolute inset-0 -z-0 rounded-full bg-surface-hover
                        ring-1 ring-border
                      "
                    />
                  )}
                  <span className="relative z-10">{s.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="
              inline-flex h-9 w-9 items-center justify-center
              rounded-full border border-border bg-surface/60 backdrop-blur
              text-muted-foreground
              transition-[transform,color,border-color] duration-150 ease-out
              hover:text-foreground hover:border-border-strong
              active:scale-[0.94]
              md:hidden
            "
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`
          grid overflow-hidden border-t border-border/60 bg-background/90 backdrop-blur-xl
          transition-[grid-template-rows,opacity] duration-200 ease-out
          md:hidden
          ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
        `}
      >
        <div className="min-h-0">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6">
            {navSections.map((s) => {
              const isActive = active === s.id;
              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={() => setOpen(false)}
                    className={`
                      block rounded-lg px-3 py-2 text-sm
                      transition-[color,background-color] duration-150 ease-out
                      active:scale-[0.98]
                      ${
                        isActive
                          ? "bg-surface-hover text-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-surface-hover"
                      }
                    `}
                  >
                    {s.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
