"use client";

import { FormattedMessage } from "react-intl";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { ResponsiveFab } from "@/components/ResponsiveFab";

export function CreateFab() {
  return (
    <ResponsiveFab
      href="/create"
      icon={PlusIcon}
      label={
        <FormattedMessage id="createVehicle" defaultMessage="Create Vehicle" />
      }
    />
  );
}
