"use client";

import { motion } from "framer-motion";
import { Download, Sparkles, ShieldCheck } from "lucide-react";
import { Section, sectionItemVariants } from "@/components/section";
import { Badge } from "@/components/badge";
import { personalProject } from "@/data/portfolio";

export function PersonalProject() {
  const p = personalProject;

  return (
    <Section
      id="personal"
      eyebrow="04 / Personal Project"
      title="Something I built on the side"
      description="Side projects are where I get to chase ideas just because they're interesting. This one started as a weekend itch and turned into a tool I actually use every day."
    >
      <motion.article
        variants={sectionItemVariants}
        className="
          group relative overflow-hidden
          rounded-2xl border border-border bg-surface
          transition-[border-color,background-color] duration-200 ease-out
          [@media(hover:hover)]:hover:border-border-strong
        "
      >
        {/* Soft accent halo */}
        <div
          aria-hidden
          className="
            pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full
            bg-[radial-gradient(circle_at_center,rgb(var(--accent)/0.18),transparent_60%)]
            blur-2xl
          "
        />

        <div className="relative grid gap-6 p-5 sm:gap-8 sm:p-6 md:grid-cols-[1.2fr_1fr] md:p-8">
          {/* Left: copy */}
          <div className="flex flex-col gap-4 sm:gap-5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="accent">
                <Sparkles size={11} aria-hidden />
                Personal
              </Badge>
              {p.codename && (
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:text-[11px]">
                  codename · {p.codename}
                </span>
              )}
            </div>

            <div>
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{p.name}</h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                {p.tagline}
              </p>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
              {p.description}
            </p>

            <ul className="mt-1 space-y-2 text-sm text-muted-foreground sm:text-[15px]">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2.5">
                  <span
                    aria-hidden
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border-strong"
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-1 flex flex-wrap gap-1.5">
              {p.stack.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>

          {/* Right: download card */}
          <div
            className="
              relative flex flex-col justify-between gap-5
              rounded-xl border border-border bg-background/60 p-5 backdrop-blur
              sm:p-6
            "
          >
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 text-muted-foreground">
                <ShieldCheck size={15} aria-hidden />
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] sm:text-[11px]">
                  Free · Privacy-first
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Grab the installer below and try it on your own machine. Nothing leaves your
                computer unless you tell it to.
              </p>
            </div>

            <a
              href={p.download.href}
              download={p.download.fileName}
              aria-label={`${p.download.label} for ${p.download.platform}`}
              className="
                group/btn relative inline-flex items-center justify-center gap-2
                rounded-full bg-foreground px-5 py-2.5
                text-sm font-medium text-background
                shadow-[0_1px_0_0_rgb(255_255_255/0.06)_inset]
                transition-[transform,opacity] duration-150 ease-out
                hover:opacity-90 active:scale-[0.97]
                focus-visible:outline-none
              "
            >
              <Download
                size={15}
                className="transition-transform duration-200 ease-out group-hover/btn:translate-y-[1px]"
                aria-hidden
              />
              {p.download.label}
            </a>

            <div className="flex flex-col gap-1 border-t border-border pt-4 text-xs text-muted-foreground">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono uppercase tracking-[0.16em] text-[10px]">
                  Platform
                </span>
                <span className="truncate text-right">{p.download.platform}</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono uppercase tracking-[0.16em] text-[10px]">Size</span>
                <span>{p.download.sizeLabel}</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono uppercase tracking-[0.16em] text-[10px]">File</span>
                <span className="truncate text-right font-mono text-[11px]">
                  {p.download.fileName}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </Section>
  );
}
