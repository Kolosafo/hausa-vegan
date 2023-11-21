"use client";
import React from "react";
import { useRouter } from "next/navigation";
const ShopByCategory = () => {
  const router = useRouter();
  const carouselItem = [
    {
      id: 1,
      title: "Spices",
      value: "heroBg-1",
      url: "/shop/products/?category=spices",
    },
    {
      id: 2,
      value: "heroBg-7",
      title: "Merch",
      url: "/shop/products/?category=merch",
    },
    {
      id: 3,
      value: "heroBg-8",
      title: "Cultural Artifacts",
      url: "/shop/products/?category=cultural artifacts",
    },
    {
      id: 4,
      title: "Classes",
      value: "heroBg-6",
      url: "/shop/products/?category=classes",
    },
  ];
  return (
    <div className="py-20 px-20 bg-[#f7f7f7] flex flex-col fullCenter gap-5 w-full">
      <span className="text-3xl font-bold mb-10">Shop by category</span>
      <div className="w-full">
        {" "}
        <div className="h-1/2 w-full flex items-center justify-start">
          {carouselItem.map((item) => {
            return (
              <div
                className="flex flex-col items-center w-full"
                onClick={() => void router.push(item.url)}
                key={item.id}
              >
                <div
                  style={{ display: "flex" }}
                  className={`items-center cursor-pointer w-44 h-44 justify-center relative border-2 rounded-full ${item.value}`}
                ></div>
                <span className="blackTextOrangeHover cursor-pointer">
                  {" "}
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
