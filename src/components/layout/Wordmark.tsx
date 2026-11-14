import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/constants";

/**
 * The RÊVERIE wordmark — a four-point gold star (the swirl's light) beside
 * the name set in Cormorant with generous tracking.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Star className="h-3.5 w-3.5 text-gold animate-twinkle" />
      <span className="font-serif text-xl font-semibold uppercase tracking-[0.32em] text-foreground">
        {siteConfig.name}
      </span>
    </span>
  );
}

function Star({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0c.6 6.2 5.8 11.4 12 12-6.2.6-11.4 5.8-12 12-.6-6.2-5.8-11.4-12-12C6.2 11.4 11.4 6.2 12 0Z" />
    </svg>
  );
}
