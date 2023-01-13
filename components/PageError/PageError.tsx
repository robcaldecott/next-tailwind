import { FormattedMessage } from "react-intl";
import { Button } from "../Button";
import { ErrorMessage } from "../ErrorMessage";

interface PageErrorProps {
  error: Response | null;
  refetch: () => void;
}

export function PageError(props: PageErrorProps) {
  return (
    <ErrorMessage
      error={props.error}
      action={
        <Button onClick={() => props.refetch()}>
          <FormattedMessage id="tryAgain" defaultMessage="Try again" />
        </Button>
      }
    />
  );
}
