import React from "react";
import dynamic from "next/dynamic";

const CreateBlog = dynamic(
  () => {
    return import("../../components/blogComponents/createPost");
  },
  { ssr: false }
);
const Page = () => {
  return <CreateBlog />;
};

export default Page;
