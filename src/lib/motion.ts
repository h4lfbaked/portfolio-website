/**
 * Shared motion tokens.
 * All UI animations stay under 300ms (per design philosophy).
 * Easings are stronger custom curves rather than the weak built-in ones.
 */

export const EASE_OUT = [0.23, 1, 0.32, 1] as const;
export const EASE_IN_OUT = [0.77, 0, 0.175, 1] as const;
export const EASE_DRAWER = [0.32, 0.72, 0, 1] as const;

export const DURATION = {
  fast: 0.16,
  base: 0.22,
  medium: 0.28,
  slow: 0.4,
} as const;

/** Default reveal-on-scroll variants. Starts from scale(0.98) — never from 0. */
export const revealVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

/** Stagger between children when revealing a list/grid (50ms). */
export const STAGGER = 0.05;
