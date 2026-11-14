import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
  /** Show the leading gold tick mark. */
  tick?: boolean;
  align?: "left" | "center";
};

/**
 * The small wide-tracked label that introduces every section — a signature
 * editorial detail. A short gold rule precedes the text.
 */
export function Eyebrow({
  children,
  className,
  tick = true,
  align = "left",
}: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-eyebrow uppercase text-gold-light/90",
        align === "center" && "justify-center",
        className,
      )}
    >
      {tick && (
        <span className="h-px w-8 bg-gradient-to-r from-gold/70 to-transparent" />
      )}
      {children}
    </span>
  );
}
