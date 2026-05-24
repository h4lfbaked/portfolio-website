"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { Section, sectionItemVariants } from "@/components/section";
import { certifications, courses, education } from "@/data/portfolio";

export function Education() {
  return (
    <Section id="education" eyebrow="06 / Education" title="Education & credentials">
      <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
        {/* Education */}
        <motion.div
          variants={sectionItemVariants}
          className="rounded-2xl border border-border bg-surface p-5 sm:p-6 md:col-span-1"
        >
          <div className="mb-3 inline-flex items-center gap-2 text-muted-foreground sm:mb-4">
            <GraduationCap size={16} />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] sm:text-[11px]">
              Education
            </span>
          </div>
          <h3 className="text-base font-semibold tracking-tight sm:text-lg">{education.degree}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{education.school}</p>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:text-[11px]">
            {education.period}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">GPA · {education.gpa}</p>
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={sectionItemVariants}
          className="rounded-2xl border border-border bg-surface p-5 sm:p-6"
        >
          <div className="mb-3 inline-flex items-center gap-2 text-muted-foreground sm:mb-4">
            <Award size={16} />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] sm:text-[11px]">
              Certifications
            </span>
          </div>
          <ul className="space-y-2.5">
            {certifications.map((c) => (
              <li key={c} className="flex gap-2 text-sm">
                <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border-strong" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Courses */}
        <motion.div
          variants={sectionItemVariants}
          className="rounded-2xl border border-border bg-surface p-5 sm:p-6"
        >
          <div className="mb-3 inline-flex items-center gap-2 text-muted-foreground sm:mb-4">
            <BookOpen size={16} />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] sm:text-[11px]">
              Courses
            </span>
          </div>
          <ul className="space-y-2.5">
            {courses.map((c) => (
              <li key={c} className="flex gap-2 text-sm">
                <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border-strong" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
