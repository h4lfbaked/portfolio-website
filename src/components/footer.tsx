import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-8 sm:py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 text-xs text-muted-foreground sm:px-6 sm:text-sm md:flex-row md:items-center md:px-8">
        <p>
          © {new Date().getFullYear()} · {profile.shortName}
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em]">
          
        </p>
      </div>
    </footer>
  );
}
