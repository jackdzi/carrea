import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Carrea",
  description: "Join Carrea",
  // other metadata
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Join Carrea"
        description="How to join"
      />
      <Features />
    </>
  );
};

export default Blog;
