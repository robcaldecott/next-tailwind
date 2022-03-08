import { ComponentPropsWithoutRef, ReactNode } from "react";
import clsx from "clsx";
import { SearchIcon } from "@heroicons/react/solid";

export interface SearchFieldProps extends ComponentPropsWithoutRef<"input"> {}

export const SearchField = ({
  className,
  disabled,
  ...props
}: SearchFieldProps) => (
  <label className={clsx("block", className)}>
    {/* Input */}
    <span className="block relative">
      <input
        className={clsx(
          "font-sans text-sm py-2 pl-9 pr-2 block w-full min-h-[40px] bg-white text-slate-900 border border-slate-300 hover:border-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-2xl outline-none placeholder-slate-400 placeholder-shown:italic disabled:bg-slate-50 disabled:text-slate-400 disabled:hover:border-slate-300 disabled:shadow-none transition-colors shadow-sm"
        )}
        disabled={disabled}
        {...props}
      />

      {/* Icon */}
      <span className="flex absolute left-2 inset-y-0 items-center">
        <SearchIcon
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
