"use client";

import { forwardRef, type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Variants                                                           */
/* ------------------------------------------------------------------ */
const buttonVariants = cva(
  [
    "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden",
    "whitespace-nowrap rounded-full font-sans font-medium",
    "transition-[color,background-color,border-color,box-shadow] duration-500 ease-luxury",
    "focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
    "cursor-pointer select-none",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-gold text-background shadow-glow-gold hover:shadow-glow-gold-lg",
        secondary:
          "glass text-foreground hover:border-gold/40 hover:text-gold-light",
        outline:
          "border border-foreground/20 bg-transparent text-foreground hover:border-gold/50 hover:bg-foreground/[0.04]",
        ghost:
          "bg-transparent text-foreground/75 hover:text-foreground hover:bg-foreground/[0.05]",
        link: "bg-transparent text-gold-light underline-offset-4 hover:underline px-0 h-auto rounded-none normal-case tracking-normal",
      },
      size: {
        sm: "h-10 px-5 text-[0.7rem] uppercase tracking-[0.18em]",
        md: "h-12 px-7 text-xs uppercase tracking-[0.16em]",
        lg: "h-14 px-9 text-[0.8rem] uppercase tracking-[0.16em]",
        icon: "h-12 w-12 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  children?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loading?: boolean;
  /** Render as an anchor when provided. */
  href?: string;
};

type ButtonProps = ButtonBaseProps &
  Omit<HTMLMotionProps<"button">, keyof ButtonBaseProps>;

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
const Spinner = () => (
  <svg
    className="h-4 w-4 animate-spin"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <circle
      className="opacity-20"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    <path
      className="opacity-90"
      d="M12 2a10 10 0 0 1 10 10"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      children,
      leftIcon,
      rightIcon,
      loading = false,
      href,
      disabled,
      ...props
    },
    ref,
  ) => {
    const showSheen = variant === "primary" || variant == null;

    const content = (
      <>
        {/* Sheen sweep on hover — a signature luxury micro-interaction */}
        {showSheen && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-sheen transition-transform duration-[900ms] ease-luxury group-hover:translate-x-full"
          />
        )}
        <span className="relative z-10 inline-flex items-center gap-2.5">
          {loading ? <Spinner /> : leftIcon}
          {children}
          {!loading && rightIcon}
        </span>
      </>
    );

    const classes = cn(buttonVariants({ variant, size }), className);

    if (href) {
      return (
        <motion.a
          href={href}
          className={classes}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          {...(props as HTMLMotionProps<"a">)}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        {...props}
      >
        {content}
      </motion.button>
    );
  },
);

Button.displayName = "Button";

export { buttonVariants };
