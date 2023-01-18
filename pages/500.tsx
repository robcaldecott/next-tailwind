import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";
import { Button } from "@/components/Button";
import { ErrorMessage } from "@/components/ErrorMessage";

export default function Page() {
  const router = useRouter();

  return (
    <ErrorMessage
      action={
        <Button variant="primary" onClick={() => router.push("/")}>
          <FormattedMessage id="home" defaultMessage="Home" />
        </Button>
      }
    />
  );
}
