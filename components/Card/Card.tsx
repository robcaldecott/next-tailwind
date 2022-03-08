import { ComponentPropsWithoutRef, ReactNode } from "react";
import clsx from "clsx";
import { Text } from "../Text";

export const Card = ({
  className,
  ...other
}: ComponentPropsWithoutRef<"div">) => (
  <div
    className={clsx(
      "bg-white shadow-2xl rounded-2xl overflow-hidden",
      className
    )}
    {...other}
  />
);

interface CardHeaderProps {
  title: ReactNode;
  subheader: ReactNode;
  divider?: boolean;
  className?: string;
}

export const CardHeader = ({
  title,
  subheader,
  divider,
  className,
}: CardHeaderProps) => (
  <div
    className={clsx(
      "bg-sky-50 p-4 flex flex-col",
      divider && "border-b border-b-slate-300",
      className
    )}
  >
    <Text variant="h2" noWrap>
      {title}
    </Text>
    <Text variant="body1" color="secondary" noWrap>
      {subheader}
    </Text>
  </div>
);

interface CardContentProps extends ComponentPropsWithoutRef<"div"> {
  divider?: boolean;
}

export const CardContent = ({ divider, ...props }: CardContentProps) => (
  <div
    className={clsx("p-4", divider && "border-b border-b-slate-300")}
    {...props}
  />
);

export const CardActions = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) => (
  <div
    className={clsx("bg-sky-50 p-2 flex items-center space-x-2", className)}
    {...props}
  />
);
