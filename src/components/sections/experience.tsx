"use client";

import { motion } from "framer-motion";
import { Section, sectionItemVariants } from "@/components/section";
import { Badge } from "@/components/badge";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="02 / Experience"
      title="Where I've worked"
      description="A timeline of roles where I've shipped backend systems for healthcare, government, and internal enterprise products."
    >
      <ol className="relative ml-2 border-l border-dashed border-border sm:ml-3 md:ml-4">
        {experiences.map((exp) => (
          <motion.li
            key={`${exp.company}-${exp.period}`}
            variants={sectionItemVariants}
            className="relative pl-6 pb-10 last:pb-0 sm:pl-8 sm:pb-12 md:pl-10"
          >
            {/* dot */}
            <span
              aria-hidden
              className={`
                absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full
                ring-4 ring-background
                ${exp.current ? "bg-success" : "bg-border-strong"}
              `}
            />

            <div className="flex flex-col gap-1.5">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 sm:gap-x-3">
                <h3 className="text-base font-semibold tracking-tight sm:text-lg md:text-xl">
                  {exp.role}
                </h3>
                <span aria-hidden className="hidden text-muted-foreground sm:inline">·</span>
                <p className="text-sm text-muted-foreground sm:text-base">{exp.company}</p>
                {exp.current && <Badge tone="success">Current</Badge>}
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:text-[11px]">
                {exp.period}
              </p>
            </div>

            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:space-y-2.5 md:text-[15px]">
              {exp.bullets.map((b, i) => (
                <li key={i} className="flex gap-2.5 sm:gap-3">
                  <span
                    aria-hidden
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border-strong"
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
