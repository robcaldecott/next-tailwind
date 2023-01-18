"use client";

import { useMutation } from "@tanstack/react-query";
import ky from "ky";
import { useRouter } from "next/navigation";
import { Details } from "@/components/Details";
import { Vehicle } from "@/types";

export function DetailsContainer(props: { vehicle: Vehicle }) {
  const router = useRouter();
  const deleteQuery = useMutation<Vehicle, Error, string, Array<Vehicle>>(
    (id) => ky.delete(`/api/vehicles/${id}`).json()
  );

  return (
    <Details
      vehicle={props.vehicle}
      onDelete={(cb) => {
        deleteQuery.mutate(props.vehicle.id, {
          onSuccess: () => {
            router.replace("/");
          },
          onSettled: cb,
        });
      }}
      error={deleteQuery.error}
      onResetError={deleteQuery.reset}
    />
  );
}
