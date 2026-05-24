"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Phone } from "lucide-react";
import { Section, sectionItemVariants } from "@/components/section";
import { CopyButton } from "@/components/copy-button";
import { Button } from "@/components/button";
import { profile } from "@/data/portfolio";

type ContactRow = {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  copy?: string;
};

export function Contact() {
  const rows: ContactRow[] = [
    {
      icon: <Mail size={15} />,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      copy: profile.email,
    },
    {
      icon: <Linkedin size={15} />,
      label: "LinkedIn",
      value: "linkedin.com/in/radityawibhawa",
      href: profile.linkedin,
    },
    {
      icon: <Phone size={15} />,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s+/g, "")}`,
      copy: profile.phone,
    },
  ];

  return (
    <Section
      id="contact"
      eyebrow="07 / Contact"
      title="Let's build something"
      description="Open to backend roles, contract work, and collaborations. The fastest way to reach me is email."
    >
      <motion.div
        variants={sectionItemVariants}
        className="overflow-hidden rounded-2xl border border-border bg-surface"
      >
        <ul>
          {rows.map((row, i) => (
            <li
              key={row.label}
              className={`
                flex items-center gap-3 p-3 sm:gap-4 sm:p-4 md:p-5
                ${i !== 0 ? "border-t border-border" : ""}
              `}
            >
              <span
                aria-hidden
                className="
                  inline-flex h-9 w-9 shrink-0 items-center justify-center
                  rounded-lg border border-border bg-background
                  text-muted-foreground
                "
              >
                {row.icon}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:text-[11px]">
                  {row.label}
                </p>
                <a
                  href={row.href}
                  target={row.href.startsWith("http") ? "_blank" : undefined}
                  rel={row.href.startsWith("http") ? "noreferrer noopener" : undefined}
                  className="
                    block truncate text-sm font-medium
                    transition-opacity duration-150 ease-out
                    hover:opacity-70
                  "
                >
                  {row.value}
                </a>
              </div>
              {row.copy && <CopyButton value={row.copy} label={row.label} />}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        variants={sectionItemVariants}
        className="mt-8 flex flex-wrap items-center gap-3"
      >
        <Button as="a" href={`mailto:${profile.email}`} variant="primary">
          <Mail size={15} />
          Send an email
        </Button>
        <Button
          as="a"
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          variant="secondary"
        >
          <Linkedin size={15} />
          Connect on LinkedIn
        </Button>
      </motion.div>
    </Section>
  );
}
