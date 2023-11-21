"use client";
import React from "react";
import Button from "./button";
import { useRouter } from "next/navigation";

const SectionTwo = () => {
  const router = useRouter();
  return (
    <div className="flex px-44 py-16 gap-10 w-full">
      <div className="pl-10 heroBg-5 flex h-80 w-1/2 gap-5 flex-col justify-center bg-gray-400">
        <span className="capitalize text-2xl font-bold w-1/2">
          Spice, Merch, cultural artifacts
        </span>
        <div>
          <div onClick={() => router.push("/shop/products")}>
            <Button text="Shop now" />
          </div>
        </div>
      </div>
      <div className="pl-10 heroBg-4 flex h-80 w-1/2 gap-5 flex-col justify-center bg-gray-400">
        <span className="capitalize text-2xl font-bold w-2/3">
          Subscribe to our classes to learn how to cook
        </span>
        <div>
          <div onClick={() => router.push("/shop/products/?category=classes")}>
            <Button text="Shop now" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
