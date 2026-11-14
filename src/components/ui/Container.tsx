import { forwardRef, type ElementType, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const containerVariants = cva("mx-auto w-full px-5 sm:px-6 lg:px-8 xl:px-10", {
  variants: {
    size: {
      /** Editorial full-width content column */
      default: "max-w-container",
      /** Comfortable reading / feature column */
      content: "max-w-content",
      /** Narrow, centred prose (philosophy / story copy) */
      narrow: "max-w-3xl",
      prose: "max-w-prose",
      /** Edge-to-edge with padding only */
      wide: "max-w-[1720px]",
      full: "max-w-none px-0",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type ContainerProps = VariantProps<typeof containerVariants> & {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ as, size, className, children, ...props }, ref) => {
    const Comp = (as ?? "div") as ElementType;
    return (
      <Comp
        ref={ref}
        className={cn(containerVariants({ size }), className)}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

Container.displayName = "Container";
