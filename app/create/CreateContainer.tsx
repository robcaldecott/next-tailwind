"use client";

import { useMutation } from "@tanstack/react-query";
import ky from "ky";
import { useRouter } from "next/navigation";
import { CreateVehicle } from "@/components/CreateVehicle";
import { Vehicle, VehiclePayload } from "@/types/vehicle";

export function CreateContainer() {
  const router = useRouter();
  const { mutateAsync } = useMutation<Vehicle, Error, VehiclePayload>((body) =>
    ky.post("/api/vehicles", { json: body }).json()
  );

  return (
    <CreateVehicle
      onSubmit={(data) => {
        return mutateAsync(data, {
          onSuccess: () => {
            router.push("/");
          },
        });
      }}
      onCancel={() => router.push("/")}
    />
  );
}
