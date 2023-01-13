import { useRouter } from "next/router";
import { Details } from "@/containers";

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  return <Details id={id as string} />;
}
