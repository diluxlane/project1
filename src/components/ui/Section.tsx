import { forwardRef, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

const sectionVariants = cva("relative w-full", {
  variants: {
    spacing: {
      none: "",
      sm: "py-section-sm",
      default: "py-section",
      lg: "py-[clamp(6rem,16vh,15rem)]",
    },
    tone: {
      transparent: "",
      base: "bg-background",
      surface: "bg-surface",
      raised: "bg-surface-2",
    },
  },
  defaultVariants: {
    spacing: "default",
    tone: "transparent",
  },
});

type ContainerSize =
  | "default"
  | "content"
  | "narrow"
  | "prose"
  | "wide"
  | "full";

type SectionProps = VariantProps<typeof sectionVariants> & {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Wrap children in a Container. Set false for full-bleed sections. */
  container?: boolean;
  containerSize?: ContainerSize;
  containerClassName?: string;
  /** Adds a subtle film-grain overlay for cinematic depth. */
  grain?: boolean;
  "aria-label"?: string;
  "aria-labelledby"?: string;
};

/**
 * The structural building block for every page section (Phase 05 onward).
 * Handles vertical rhythm, background tone, an optional Container, and an
 * optional grain overlay — so sections stay focused on content.
 */
export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      id,
      spacing,
      tone,
      className,
      children,
      container = true,
      containerSize = "default",
      containerClassName,
      grain = false,
      ...aria
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          sectionVariants({ spacing, tone }),
          grain && "grain",
          className,
        )}
        {...aria}
      >
        {container ? (
          <Container size={containerSize} className={containerClassName}>
            {children}
          </Container>
        ) : (
          children
        )}
      </section>
    );
  },
);

Section.displayName = "Section";
