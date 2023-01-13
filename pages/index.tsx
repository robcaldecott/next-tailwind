import { FormattedMessage } from "react-intl";
import { PlusIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { ResponsiveFab } from "@/components";
import { Vehicles } from "@/containers";

export default function Home() {
  return (
    <>
      <Vehicles fabPadding />

      <Link href="/create" passHref legacyBehavior>
        <ResponsiveFab
          icon={PlusIcon}
          label={
            <FormattedMessage
              id="createVehicle"
              defaultMessage="Create Vehicle"
            />
          }
        />
      </Link>
    </>
  );
}
