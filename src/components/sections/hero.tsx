"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/button";
import { profile } from "@/data/portfolio";
import { DURATION, EASE_OUT } from "@/lib/motion";
import profilePhoto from "@/assets/WhatsApp Image 2026-05-22 at 10.45.20.jpeg";

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.06,
        delayChildren: reduce ? 0 : 0.1,
      },
    },
  };

  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION.medium, ease: EASE_OUT },
    },
  };

  // Photo entrance: never from scale(0); always from a barely-visible 0.95 + opacity 0
  const photo = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: DURATION.medium, ease: EASE_OUT },
    },
  };

  return (
    <section
      id="top"
      className="
        relative isolate flex min-h-[80vh] items-center
        overflow-hidden pt-20 sm:min-h-[88vh] sm:pt-24
      "
    >
      {/* Decorative grid */}
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 -z-10" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="
          mx-auto grid w-full max-w-5xl items-center gap-8
          sm:gap-10
          md:grid-cols-[1fr_auto] md:gap-16
        "
      >
        {/* Left column — text content */}
        <div className="order-2 max-w-2xl md:order-1">
          <motion.div
            variants={item}
            className="
              mb-6 inline-flex items-center gap-2
              rounded-full border border-border bg-surface/70 backdrop-blur
              px-3 py-1.5
              font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground
            "
          >
            <span aria-hidden className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
            </span>
            Available for opportunities
          </motion.div>

          <motion.h1
            variants={item}
            className="
              text-balance text-3xl font-semibold leading-[1.1] tracking-tight
              sm:text-4xl sm:leading-[1.05]
              md:text-5xl lg:text-[60px]
            "
          >
            {profile.shortName}
            <span className="block text-muted-foreground">
              {profile.role}.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base md:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-5 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <MapPin size={14} className="opacity-70" />
            <span>{profile.location}</span>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <Button as="a" href={`mailto:${profile.email}`} variant="primary">
              <Mail size={15} />
              Get in touch
            </Button>
            <Button
              as="a"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              variant="secondary"
            >
              <Linkedin size={15} />
              LinkedIn
            </Button>
            <Button as="a" href="#projects" variant="ghost">
              View projects
              <ArrowDown size={15} />
            </Button>
          </motion.div>
        </div>

        {/* Right column — profile photo */}
        <motion.div
          variants={photo}
          className="
            order-1 mx-auto md:order-2 md:mx-0
            relative
          "
        >
          {/* Soft accent halo — purely decorative, masked into a circle */}
          <div
            aria-hidden
            className="
              pointer-events-none absolute -inset-6 -z-10 rounded-full
              bg-[radial-gradient(circle_at_center,rgb(var(--accent)/0.18),transparent_60%)]
              blur-2xl
            "
          />

          <div
            className="
              group relative h-44 w-44 overflow-hidden rounded-2xl
              border border-border bg-surface
              shadow-[0_1px_0_0_rgb(var(--border-strong)/0.5),0_8px_32px_-8px_rgb(0_0_0/0.25)]
              transition-transform duration-200 ease-out
              motion-reduce:transition-none
              sm:h-56 sm:w-56
              md:h-72 md:w-72 lg:h-80 lg:w-80
            "
          >
            <Image
              src={profilePhoto}
              alt={`Portrait of ${profile.name}`}
              fill
              priority
              sizes="(min-width: 1024px) 320px, (min-width: 768px) 288px, (min-width: 640px) 224px, 176px"
              className="
                object-cover
                transition-transform duration-300 ease-out
                motion-reduce:transition-none
                [@media(hover:hover)and(pointer:fine)]:group-hover:scale-[1.03]
              "
            />

            {/* Subtle inner ring for crispness on dark backgrounds */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/5"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
