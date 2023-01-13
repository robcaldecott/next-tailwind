import {
  ComponentPropsWithoutRef,
  ElementType,
  forwardRef,
  ReactNode,
} from "react";
import clsx from "clsx";

interface FabProps extends Omit<ComponentPropsWithoutRef<"a">, "children"> {
  icon: ElementType;
  label?: ReactNode;
}

export const Fab = forwardRef<HTMLAnchorElement, FabProps>(
  ({ icon: Icon, label, className, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center rounded-2xl bg-sky-500 text-white shadow-lg hover:bg-sky-700",
          label ? "h-12 px-4 font-sans text-sm font-medium" : "h-14 w-14",
          className
        )}
        {...props}
      >
        <Icon className={clsx("h-6 w-6", label && "mr-2")} />
        {label}
      </a>
    );
  }
);

Fab.displayName = "Fab";
