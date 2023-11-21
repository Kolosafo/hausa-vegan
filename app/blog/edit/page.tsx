import React from "react";
import dynamic from "next/dynamic";

const EditPost = dynamic(
  () => {
    return import("../../components/blogComponents/editPost");
  },
  { ssr: false }
);
const Page = () => {
  return <EditPost />;
};

export default Page;
