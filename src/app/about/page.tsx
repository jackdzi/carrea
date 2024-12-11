import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carrera Team",
  description: "Carrera Team",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Our Team"
        description="Text here"
      />
      <h1 className="font-extrabold text-3xl text-gray-800 text-center my-5 uppercase tracking-wide">
        Put faces here
      </h1>
    </>
  );
};

export default AboutPage;
