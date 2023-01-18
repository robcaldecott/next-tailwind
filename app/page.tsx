import { headers } from "next/headers";
import { VehiclesList } from "@/components/VehiclesList";
import { Vehicle } from "@/types";
import { CreateFab } from "./CreateFab";

export default async function Page() {
  const host = headers().get("host");
  const response = await fetch(`http://${host}/api/vehicles`);
  const vehicles: Array<Vehicle> = await response.json();

  return (
    <div className="mx-auto mb-24 max-w-5xl">
      <VehiclesList vehicles={vehicles} />
      <CreateFab />
    </div>
  );
}
