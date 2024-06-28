import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
  {
    variants: {
      variant: {
        default: "bg-white-200 text-gray-800",
        success: "bg-green-200 text-green-800",
        warning: "bg-yellow-200 text-yellow-800",
        danger: "bg-red-200 text-red-800",
        info: "bg-blue-200 text-blue-800",
      },
      size: {
        default: "text-xs",
        sm: "text-xxl px-1 py-0.5",
        lg: "text-lg px-3 py-1.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
const Badge = React.forwardRef(({ className, variant, size, ...props }, ref) => {
  return (
    <span
      className={cn(badgeVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Badge.displayName = "Badge";
export { Badge, badgeVariants };
