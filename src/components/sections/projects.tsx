"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section, sectionItemVariants } from "@/components/section";
import { Badge } from "@/components/badge";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="03 / Projects"
      title="Selected work"
      description="A selection of backend systems and APIs I've designed, built, and shipped."
    >
      <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <motion.article
            key={p.name}
            variants={sectionItemVariants}
            className="
              group relative flex flex-col gap-3.5
              rounded-2xl border border-border bg-surface p-5
              transition-[transform,border-color,background-color] duration-200 ease-out
              sm:gap-4 sm:p-6
              [@media(hover:hover)]:hover:-translate-y-0.5
              [@media(hover:hover)]:hover:border-border-strong
              [@media(hover:hover)]:hover:bg-surface-hover
            "
          >
            <div className="flex items-start justify-between gap-3 sm:gap-4">
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:text-[11px]">
                  {p.period}
                </p>
                <h3 className="mt-2 text-base font-semibold tracking-tight sm:text-lg md:text-xl">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.org}</p>
              </div>
              <span
                aria-hidden
                className="
                  shrink-0 rounded-full border border-border bg-background p-1.5
                  text-muted-foreground
                  transition-[transform,color,border-color] duration-200 ease-out
                  [@media(hover:hover)]:group-hover:rotate-[-12deg]
                  [@media(hover:hover)]:group-hover:text-foreground
                  [@media(hover:hover)]:group-hover:border-border-strong
                "
              >
                <ArrowUpRight size={14} />
              </span>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>

            {p.highlights && (
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {p.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border-strong" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
              {p.stack.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
