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
          "bg-gradient-to-tl from-[#48226C] from-10% via-[#8200E7] via-60% to-[#BF3EFF] text-slate-200 shadow hover:from-[#5D83E9] hover:from-10% hover:via-[#1842B4] hover:via-70% hover:to-[#0C215A]",
        secondary:
          "bg-gradient-to-br from-[#5D83E9] from-15% via-[#1842B4] via-80% to-[#0C215A] text-slate-200 shadow hover:from-[#BF3EFF] hover:from-10%  hover:via-[#8200E7] hover:via-60% hover:to-[#48226C]",
        destructive:
          "bg-gradient-to-br from-[#5c0000] from-10% via-[#450505] via-60% to-[#260000] text-destructive-foreground shadow hover:from-[#d66565] hover:from-10%  hover:via-[#c22323] hover:via-60% hover:to-[#820000]",
        outline:
          "border border-border bg-background hover:bg-gradient-to-tl hover:from-[#5D83E9] hover:from-15% hover:via-[#1842B4] hover:border-transparent hover:via-75% hover:to-[#0C215A] hover:text-slate-200",
        ghost: "hover:border hover:text-accent-foreground shadow-none",
        link: "text-primary underline-offset-4 hover:underline shadow-none",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
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
