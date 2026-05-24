"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { DURATION, EASE_OUT, STAGGER } from "@/lib/motion";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Section wrapper. Reveals once when scrolled into view with a small fade-up.
 * Children with class `stagger-child` will be staggered automatically.
 */
export function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : STAGGER,
        delayChildren: reduce ? 0 : 0.05,
      },
    },
  };

  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION.medium, ease: EASE_OUT },
    },
  };

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
      className={`scroll-mt-20 py-14 sm:py-20 md:py-28 md:scroll-mt-24 ${className ?? ""}`}
    >
      {(eyebrow || title || description) && (
        <div className="mb-8 max-w-2xl sm:mb-10 md:mb-14">
          {eyebrow && (
            <motion.p
              variants={item}
              className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground"
            >
              {eyebrow}
            </motion.p>
          )}
          {title && (
            <motion.h2
              variants={item}
              className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl"
            >
              {title}
            </motion.h2>
          )}
          {description && (
            <motion.p
              variants={item}
              className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base md:text-lg"
            >
              {description}
            </motion.p>
          )}
        </div>
      )}
      {children}
    </motion.section>
  );
}

/** Use for individual children inside <Section> when you want them staggered. */
export const sectionItemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.medium, ease: EASE_OUT },
  },
};
