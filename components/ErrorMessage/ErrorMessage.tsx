import { ReactNode } from "react";
import { FormattedMessage } from "react-intl";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { Paper } from "../Paper";
import { Text } from "../Text";

interface ErrorMessageProps {
  error: Response | null;
  action?: ReactNode | undefined;
}

export function ErrorMessage(props: ErrorMessageProps) {
  return (
    <Paper className="mx-auto flex max-w-2xl flex-col items-center space-y-2 p-8">
      <ExclamationCircleIcon
        aria-hidden="true"
        className="h-16 w-16 text-red-500"
      />

      <Text variant="h2" component="h2" align="center">
        <FormattedMessage
          id="errorTitle"
          defaultMessage="Something went wrong!"
        />
      </Text>

      {props.error && (
        <Text variant="body1" align="center" color="secondary">
          {`${props.error.status}: ${props.error.statusText}`}
        </Text>
      )}

      {props.action}
    </Paper>
  );
}
