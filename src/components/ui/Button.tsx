import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center transition-all",
  {
    variants: {
      colorVariant: {
        primary: "bg-orange text-background",
        secondary: "bg-indigo text-background",
        outline: "border border-orange text-background",
        ghost: "text-inkBlack border border-inkBlack",
        danger: "bg-red-500 text-white",
      },
      size: {
        sm: "px-4 py-1 text-sm",
        md: "px-6 py-2 text-base",
        lg: "px-8 py-3 text-lg",
      },
      hoverVariant: {
        primary: "",
        outline: "hover:bg-blue-100",
        ghost: "hover:bg-inactiveGray hover:border-0",
        danger: "hover:bg-red-600",
      },
      capitalize: {
        true: "uppercase",
        false: "",
      },
      borderVariant: {
        rounded: "rounded-md",
        circle: "rounded-full",
        none: "",
      },
      fontVariant: {
        normal: "font-normal",
        medium: "font-medium",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      colorVariant: "primary",
      size: "md",
      hoverVariant: "primary",
      capitalize: false,
      borderVariant: "rounded",
      fontVariant: "medium",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  className?: string;
}

export function Button({
  colorVariant,
  size,
  hoverVariant,
  capitalize,
  borderVariant,
  fontVariant,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        buttonVariants({
          colorVariant,
          size,
          hoverVariant,
          capitalize,
          borderVariant,
          fontVariant,
        }),
        className
      )}
      {...props}
    />
  );
}
