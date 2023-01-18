import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CreateContainer } from "./CreateContainer";

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl">
      <Breadcrumbs />
      <CreateContainer />
    </div>
  );
}
