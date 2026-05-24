"use client";

import { useEffect } from "react";

/**
 * Fallback cleaner for browser extensions (e.g. Bitdefender TrafficLight,
 * BrowserSec, etc.) that inject attributes such as `bis_skin_checked`,
 * `bis_register`, or even hijack inline scripts in the document head.
 *
 * The inline script in `layout.tsx` already runs before hydration to strip
 * those attributes, but some extensions overwrite the script's contents
 * before it can execute. This component re-applies the cleanup after the
 * React tree is mounted on the client and keeps a MutationObserver alive
 * to handle re-injection.
 *
 * Renders nothing.
 */
export function ExtensionAttrCleaner() {
  useEffect(() => {
    if (typeof document === "undefined") return;

    const attrs = ["bis_skin_checked", "bis_register"];

    const clean = (root: Element | Document | null) => {
      if (!root) return;
      if ((root as Element).nodeType === 1) {
        const el = root as Element;
        for (const a of attrs) {
          if (el.hasAttribute(a)) el.removeAttribute(a);
        }
      }
      if (typeof (root as Element).querySelectorAll === "function") {
        const selector = attrs.map((a) => `[${a}]`).join(",");
        const matches = (root as Element | Document).querySelectorAll(selector);
        matches.forEach((node) => {
          for (const a of attrs) node.removeAttribute(a);
        });
      }
    };

    clean(document.documentElement);

    let observer: MutationObserver | null = null;
    try {
      observer = new MutationObserver((mutations) => {
        for (const m of mutations) {
          if (m.type === "attributes" && m.attributeName) {
            (m.target as Element).removeAttribute(m.attributeName);
          } else if (m.type === "childList") {
            m.addedNodes.forEach((node) => {
              if (node.nodeType === 1) clean(node as Element);
            });
          }
        }
      });
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: attrs,
        childList: true,
        subtree: true,
      });
    } catch {
      // ignore
    }

    return () => {
      observer?.disconnect();
    };
  }, []);

  return null;
}
