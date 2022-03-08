import { Details } from "@/containers";
import type { NextPage, GetServerSideProps } from "next";
import type { Vehicle } from "@/types";
import { vehicles } from "@/mocks";

interface DetailsPageProps {
  vehicle: Vehicle;
}

const DetailsPage: NextPage<DetailsPageProps> = ({ vehicle }) => {
  return <Details vehicle={vehicle} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      vehicle: vehicles.find((vehicle) => vehicle.id === context.params?.id),
    },
  };
};

export default DetailsPage;
