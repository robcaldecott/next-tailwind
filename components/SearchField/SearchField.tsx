import { ComponentPropsWithoutRef, ReactNode } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { TextFieldInput } from "../TextField";

export interface SearchFieldProps extends ComponentPropsWithoutRef<"input"> {}

export const SearchField = ({
  className,
  disabled,
  ...props
}: SearchFieldProps) => (
  <label className={clsx("block", className)}>
    {/* Input */}
    <span className="block relative">
      <TextFieldInput disabled={disabled} rounded hasIcon {...props} />

      {/* Icon */}
      <span className="flex absolute left-2 inset-y-0 items-center">
        <MagnifyingGlassIcon
          aria-hidden="true"
          className={clsx(
            "h-6 w-6",
            disabled ? "text-slate-300" : "text-slate-500"
          )}
        />
      </span>
    </span>
  </label>
);
