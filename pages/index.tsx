import type { NextPage, GetStaticProps, GetServerSideProps } from "next";
import Link from "next/link";
import { FormattedMessage } from "react-intl";
import { PlusIcon } from "@heroicons/react/solid";
import { Vehicles } from "@/containers";
import { ResponsiveFab } from "@/components";
import type { Vehicle } from "@/types";
import { vehicles } from "@/mocks";

interface HomePageProps {
  vehicles: Vehicle[];
}

const Home: NextPage<HomePageProps> = ({ vehicles }) => (
  <>
    <Vehicles fabPadding vehicles={vehicles} />

    <Link href="/create" passHref>
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

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      vehicles,
    },
  };
};

export default Home;
