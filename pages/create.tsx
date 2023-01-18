import { useMutation } from "@tanstack/react-query";
import ky from "ky";
import { useRouter } from "next/router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CreateVehicle } from "@/components/CreateVehicle";
import type { Vehicle, VehiclePayload } from "@/types";

export default function CreatePage() {
  const router = useRouter();
  const { mutateAsync } = useMutation<Vehicle, Error, VehiclePayload>((body) =>
    ky.post("/api/vehicles", { json: body }).json()
  );

  return (
    <div className="mx-auto max-w-3xl">
      <Breadcrumbs />

      <CreateVehicle
        onSubmit={(data) => {
          return mutateAsync(data, {
            onSuccess: () => {
              console.log("success");
              router.push("/");
            },
          });
        }}
        onCancel={() => router.push("/")}
      />
    </div>
  );
}
