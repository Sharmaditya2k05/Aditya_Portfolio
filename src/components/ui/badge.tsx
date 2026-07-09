import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-sm font-mono text-[10px] font-medium uppercase tracking-wider transition-colors",
  {
    variants: {
      variant: {
        default: "border border-border-2 text-ink-2 px-2.5 py-1",
        accent: "border border-accent bg-accent-dim text-accent px-2.5 py-1",
        current: "bg-accent-dim border border-accent text-accent px-2.5 py-1",
        completed: "border border-border-2 text-ink-3 px-2.5 py-1",
        tech: "border border-border-2 text-ink-2 px-2.5 py-1 hover:border-accent-dim hover:text-ink transition-colors",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
