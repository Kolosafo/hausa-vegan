"use client";
import React, { useEffect, useState } from "react";
import { getPosts } from "@/firebase/blog/getPosts";
import Button from "./button";
import { RotatingTriangles } from "react-loader-spinner";
import SinglePostCard from "../blogComponents/singlePostCard";

const RecentBlogs = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<IPost[] | null>(null);
  const getAllPosts = async () => {
    setLoading(true);
    const res = (await getPosts()) as IPost[];
    console.log("RESPONSE BLOG", res);
    setPosts(res);
    setLoading(false);
  };

  useEffect(() => {
    getAllPosts().catch((e) => {
      console.log(e);
      setLoading(false);
    });
  }, []);
  return (
    <div className="flex flex-col justify-center items-center px-44 py-10 gap-10 w-full">
      <span className="text-3xl font-bold mb-5">Recent News</span>
      <>
        {loading ? (
          <div className="flex justify-center items-center h-[20vh]">
            <RotatingTriangles />
          </div>
        ) : posts && posts.length > 0 ? (
          posts
            .slice(0, 3)
            .map((post) => <SinglePostCard key={post.id} post={post} />)
        ) : (
          <div className="flex justify-center items-center">
            <span>No recent posts</span>
          </div>
        )}
      </>
      {/* {posts &&
        posts.slice(0, 3).map((post) => (
          <div
            key={post.id}
            className="pl-10 heroBg-5 flex h-80 w-1/2 gap-5 flex-col justify-center bg-gray-400"
          >
            <span className="capitalize text-2xl font-bold w-1/2">
              Spice, Merch, cultural artifacts
            </span>
            <div>
              <Button text="Read" />
            </div>
          </div>
        ))} */}
    </div>
  );
};

export default RecentBlogs;
