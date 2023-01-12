import {
  ComponentPropsWithoutRef,
  ElementType,
  forwardRef,
  ReactNode,
} from "react";
import { Fab } from "../Fab";

interface ResponsiveFabProps extends ComponentPropsWithoutRef<"a"> {
  icon: ElementType;
  label?: ReactNode;
}

export const ResponsiveFab = forwardRef<HTMLAnchorElement, ResponsiveFabProps>(
  ({ icon, label, ...props }, ref) => (
    <>
      <div className="fixed right-4 bottom-4 block md:hidden">
        <Fab ref={ref} icon={icon} {...props} />
      </div>

      <div className="fixed right-8 bottom-8 hidden md:block">
        <Fab ref={ref} icon={icon} label={label} {...props} />
      </div>
    </>
  )
);

ResponsiveFab.displayName = "ResponsiveFab";
