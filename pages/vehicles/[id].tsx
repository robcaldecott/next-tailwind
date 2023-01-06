import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Details } from "@/containers";

const DetailsPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <Details id={id as string} />;
};

export default DetailsPage;
