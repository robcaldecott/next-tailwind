import { Details } from "@/containers";
import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import type { Vehicle } from "@/types";
import { vehicles } from "@/mocks";

interface DetailsPageProps {
  vehicle: Vehicle;
}

const DetailsPage: NextPage<DetailsPageProps> = ({ vehicle }) => {
  return <Details vehicle={vehicle} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = vehicles.map(({ id }) => ({
    params: { id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      vehicle: vehicles.find((vehicle) => vehicle.id === params?.id),
    },
  };
};

export default DetailsPage;
