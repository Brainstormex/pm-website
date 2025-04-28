import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import React from "react";

const badgeVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-inkBlack text-background",
        secondary: "bg-indigo text-background",
        destructive: "bg-red-500 text-white",
        outline: "border border-orange text-orange",
        ghost: "bg-gray-100 text-gray-700",
        success: "bg-green-500 text-white",
        warning: "bg-yellow-500 text-white",
        info: "bg-blue-500 text-white",
      },
      size: {
        xs: "text-xs px-1.5 py-0.5",
        sm: "text-xs px-2.5 py-0.5",
        md: "text-sm px-3 py-1.5",
        lg: "text-base px-4 py-1.5",
      },
      shape: {
        rounded: "rounded-[4px]",
        pill: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
      shape: "rounded",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  className?: string;
  children: React.ReactNode;
}

export function Badge({
  className,
  variant,
  size,
  shape,
  children,
  ...props
}: BadgeProps) {
  return (
    <div
      className={twMerge(badgeVariants({ variant, size, shape }), className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function TimeBadge({
  className,
  time,
  ...props
}: Omit<BadgeProps, "children"> & { time: number }) {
  const formatTime = (minutes: number): string => {
    if (minutes < 60) {
      return `${minutes} MIN`;
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return remainingMinutes > 0
      ? `${hours}H ${remainingMinutes}M`
      : `${hours}H`;
  };

  return (
    <Badge
      variant="default"
      size="sm"
      className={twMerge("font-bold", className)}
      {...props}
    >
      {formatTime(time)}
    </Badge>
  );
}
