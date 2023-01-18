import { useMutation } from "@tanstack/react-query";
import ky from "ky";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Details } from "@/components/Details";
import { vehicles } from "@/mocks/vehicles";
import type { Vehicle } from "@/types";

interface DetailsPageProps {
  vehicle: Vehicle;
}

export default function DetailsPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const router = useRouter();
  const { id } = router.query;

  const deleteQuery = useMutation<Vehicle, Error, string>((id) =>
    ky.delete(`/api/vehicles/${id}`).json()
  );

  return (
    <div className="mx-auto max-w-3xl">
      <Breadcrumbs registrationNumber={props.vehicle.registrationNumber} />

      <Details
        vehicle={props.vehicle}
        onDelete={(cb) => {
          deleteQuery.mutate(id as string, {
            onSuccess: () => {
              router.replace("/");
            },
            onSettled: cb,
          });
        }}
        error={deleteQuery.error}
        onResetError={deleteQuery.reset}
      />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<DetailsPageProps> = async (
  context
) => {
  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 200))
  );

  const id = context.query.id as string;
  const vehicle = vehicles.find((vehicle) => vehicle.id === id);

  if (vehicle === undefined) {
    throw new Error(`Vehicle ${id} not found`);
  }

  return {
    props: {
      vehicle,
    },
  };
};
