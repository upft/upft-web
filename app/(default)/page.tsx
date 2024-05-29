export const metadata = {
  title: "DataInceptor",
  description: "Unified Platform For Testing, Inc.",
};

import HomeLanding from "@/components/home/home-landing";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/datainceptor");
  return (
    <>
      <HomeLanding />
    </>
  );
}
