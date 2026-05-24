"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently the closest to the top of the viewport.
 * Uses IntersectionObserver — cheap and accurate.
 */
export function useActiveSection(ids: readonly string[], topOffset = 120): string | null {
  const [active, setActive] = useState<string | null>(ids[0] ?? null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top that is intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: `-${topOffset}px 0px -55% 0px`,
        threshold: [0, 0.25, 0.5, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, topOffset]);

  return active;
}
