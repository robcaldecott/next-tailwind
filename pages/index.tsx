import { FormattedMessage } from "react-intl";
import { PlusIcon } from "@heroicons/react/24/solid";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ResponsiveFab } from "@/components/ResponsiveFab";
import { VehiclesList } from "@/components/VehiclesList";
import { vehicles } from "@/mocks/vehicles";
import type { Vehicle } from "@/types";

interface HomeProps {
  vehicles: Array<Vehicle>;
}

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <div className="mx-auto mb-24 max-w-5xl">
      <VehiclesList vehicles={props.vehicles} />

      <ResponsiveFab
        href="/create"
        icon={PlusIcon}
        label={
          <FormattedMessage
            id="createVehicle"
            defaultMessage="Create Vehicle"
          />
        }
      />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 200))
  );

  return {
    props: {
      vehicles,
    },
  };
};
