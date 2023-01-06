import { FormattedMessage } from "react-intl";
import { Button } from "../Button";
import { ErrorMessage } from "../ErrorMessage";

interface PageErrorProps {
  error: Response | null;
  refetch: () => void;
}

export const PageError = ({ error, refetch }: PageErrorProps) => (
  <ErrorMessage
    error={error}
    action={
      <Button onClick={() => refetch()}>
        <FormattedMessage id="tryAgain" defaultMessage="Try again" />
      </Button>
    }
  />
);
