"use client";

import { motion } from "framer-motion";
import { Section, sectionItemVariants } from "@/components/section";
import { Badge } from "@/components/badge";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="05 / Skills"
      title="What I work with"
      description="The languages, frameworks, and tools I reach for when building backend systems."
    >
      <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            variants={sectionItemVariants}
            className="
              rounded-2xl border border-border bg-surface p-5 sm:p-6
              transition-[border-color,background-color] duration-150 ease-out
              [@media(hover:hover)]:hover:border-border-strong
            "
          >
            <h3 className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:mb-4 sm:text-[11px]">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
