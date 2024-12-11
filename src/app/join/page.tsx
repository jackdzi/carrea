import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Carrera",
  description: "Join Carrera",
  // other metadata
};

const Join = () => {
  return (
    <>
      <Breadcrumb
        pageName="Join Carrera"
        description="How to join"
      />
      <Features />
    </>
  );
};

export default Join;
