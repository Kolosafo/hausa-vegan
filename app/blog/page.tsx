"use client";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { RotatingTriangles } from "react-loader-spinner";
import Image from "next/image";
import { dummyBlogs } from "@/utils/constants";
import { getPosts } from "@/firebase/blog/getPosts";
import SinglePostCard from "../components/blogComponents/singlePostCard";
const Page = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useRouter();
  const [unfilteredPosts, setUnfilteredPosts] = useState([]);
  const [posts, setPosts] = useState<IPost[] | null>(null);
  const [isLogged, setIsLogged] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");

  const getAllPosts = async () => {
    setLoading(true);
    const res = (await getPosts()) as IPost[];
    setPosts(res);
    setLoading(false);
  };

  const searchFunctionality = (value: string) => {
    if (!value || value === "") {
      setPosts(posts);
    }
    if (unfilteredPosts.length > 0) {
      const searched = unfilteredPosts.filter(
        (post) => ""
        // post.title.toLowerCase().includes(value.toLowerCase())
      );
      setPosts(searched);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <div className="p-5 flex flex-col mt-1">
      {loading ? (
        <div className="flex justify-center items-center h-[70vh]">
          <RotatingTriangles />
        </div>
      ) : (
        <div className="mt-5">
          <div>
            <label
              htmlFor="search"
              className="flex justify-center my-4 items-center gap-1 mb-5"
            >
              <input
                type="text"
                id="search"
                placeholder="Type something here..."
                className="shadow-md p-2.5 border border-transparent outline-none rounded-md focus:border-blue-500"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
              />
              <button
                className="rounded-md text-white border-0 outline-transparent cursor-pointer lightBlue p-3 shadow-md"
                onClick={() => searchFunctionality(searchTerm)}
              >
                Search
              </button>
            </label>

            <h1 className="text-DarkGray-Blue text-center text-2xl font-extrabold mb-4">
              Blogs For You
            </h1>
          </div>
          <div className="flex my-10 justify-center gap-5 flex-wrap">
            {posts && posts.length > 0 ? (
              posts.map((post) => <SinglePostCard key={post.id} post={post} />)
            ) : (
              <div className="flex gap-10 w-full flex-col justify-center items-center">
                <h1 className="text-gray-600">Oops no posts yet</h1>
                {isLogged && (
                  <button
                    className="blackBgOrangeHover p-3 rounded-xl"
                    onClick={() => navigate.push("/blog/create")}
                  >
                    NEW POST
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
