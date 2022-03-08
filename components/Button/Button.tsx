import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "error";
}

export const Button = ({
  variant = "primary",
  disabled,
  className,
  ...props
}: ButtonProps & ComponentPropsWithoutRef<"button">) => (
  <button
    className={clsx(
      // Common styles
      "font-sans font-medium px-4 py-2 text-sm min-w-[72px] rounded-full border-2 outline-none transition-colors focus-visible:ring-offset-2 focus-visible:ring-2 focus-visible:ring-sky-500 disabled:text-slate-300 disabled:bg-slate-100 disabled:border-slate-100",
      // Primary
      variant === "primary" &&
        "bg-sky-500 hover:bg-sky-700 text-white border-sky-500 hover:border-sky-700",
      // Secondary
      variant === "secondary" &&
        "bg-transparent text-slate-900 border-slate-900 hover:text-white hover:bg-slate-900",
      // Error
      variant === "error" &&
        "bg-transparent text-red-500 border-red-500 hover:text-white hover:bg-red-500",
      // Additional classes
      className
    )}
    disabled={disabled}
    {...props}
  />
);
