import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  // Badges never wrap text; hover elevation is handled by hover-elevate utility.
  "whitespace-nowrap inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" +
  " hover-elevate ",
  {
    variants: {
      variant: {
        default:
          // shadow-xs keeps the shadow subtle; elevation handled by hover-elevate.
          "border-transparent bg-primary text-primary-foreground shadow-xs",
        secondary:
          // Elevation handled by hover-elevate; no additional hover state needed.
          "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          // shadow-xs keeps the shadow subtle; elevation handled by hover-elevate.
          "border-transparent bg-destructive text-destructive-foreground shadow-xs",
        // Uses the --badge-outline CSS variable for a themed border colour.
        outline: "text-foreground border [border-color:var(--badge-outline)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
