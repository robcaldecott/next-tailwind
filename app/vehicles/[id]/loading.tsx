import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DetailsLoading } from "@/components/Details";

export default function Loading() {
  return (
    <div className="mx-auto max-w-3xl">
      <Breadcrumbs />
      <DetailsLoading />
    </div>
  );
}
