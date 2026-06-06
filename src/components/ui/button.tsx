import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-mono text-xs font-medium tracking-widest uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-bg hover:bg-accent-2 rounded-sm px-6 py-3 hover:-translate-y-0.5",
        secondary:
          "border border-border-2 text-ink-2 hover:border-accent hover:text-accent rounded-sm px-6 py-3 hover:-translate-y-0.5",
        ghost:
          "text-ink-2 hover:text-accent hover:bg-surface rounded-sm px-4 py-2",
        contact:
          "bg-contact-btn shadow-contact-btn outline outline-2 outline-white outline-offset-[-3px] text-white rounded-full px-8 py-3 hover:opacity-85",
        link: "text-accent underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "px-6 py-3",
        sm: "px-4 py-2 text-[10px]",
        lg: "px-8 py-4 text-sm",
        icon: "h-9 w-9 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
