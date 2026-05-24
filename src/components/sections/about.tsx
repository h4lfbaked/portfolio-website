"use client";

import { motion } from "framer-motion";
import { Section, sectionItemVariants } from "@/components/section";
import { profile, stats } from "@/data/portfolio";

export function About() {
  return (
    <Section id="about" eyebrow="01 / About" title="A bit about me">
      <motion.p
        variants={sectionItemVariants}
        className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg"
      >
        {profile.summary}
      </motion.p>

      <motion.dl
        variants={sectionItemVariants}
        className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-12 md:grid-cols-4"
      >
        {stats.map((s) => (
          <div
            key={s.label}
            className="
              flex flex-col gap-1 bg-background p-4 sm:p-5
              transition-colors duration-150 ease-out
              hover:bg-surface
            "
          >
            <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:text-[11px]">
              {s.label}
            </dt>
            <dd className="text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">{s.value}</dd>
          </div>
        ))}
      </motion.dl>
    </Section>
  );
}
