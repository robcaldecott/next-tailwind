import { headers } from "next/headers";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Vehicle } from "@/types";
import { DetailsContainer } from "./DetailsContainer";

// https://github.com/vercel/next.js/issues/44875
export const revalidate = 0;

export default async function Page(props: { params: { id: string } }) {
  const host = headers().get("host");
  const response = await fetch(
    `http://${host}/api/vehicles/${props.params.id}`
  );
  const vehicle: Vehicle = await response.json();

  return (
    <div className="mx-auto max-w-3xl">
      <Breadcrumbs registrationNumber={vehicle.registrationNumber} />
      <DetailsContainer vehicle={vehicle} />
    </div>
  );
}
