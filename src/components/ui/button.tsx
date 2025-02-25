import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-sm",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-tertiary hover:text-tertiary-foreground",
        destructive:
          "bg-destructive text-destructive-foreground border-2 border-transparent hover:border-destructive hover:bg-transparent hover:text-foreground",
        outline:
          "bg-transparent border text-foreground hover:bg-secondary hover:text-secondary-foreground hover:border-transparent",
        ghost: "hover:border hover:text-accent-foreground shadow-none",
        icon: "hover:text-accent-foreground shadow-none",
        link: "text-tertiary font-bold underline-offset-4 hover:no-underline underline shadow-none tracking-wider",
      },
      size: {
        default: "h-9 px-7 py-2",
        sm: "h-8 rounded-md px-4 text-xs",
        lg: "h-10 rounded-md px-9",
        icon: "h-9 w-9 p-2",
      },
    },
    defaultVariants: {
      variant: "default",
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
