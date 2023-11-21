"use client";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

type Links = {
  text: string;
  url: string;
};
type Props = {
  title: string;
  links: Links[];
  dottedLine: boolean;
};
const BottomBorder: FC<Props> = ({ title, links, dottedLine }) => {
  const router = useRouter();
  return (
    <div className={``}>
      <span className="text-lg font-bold orangeText">{title}</span>
      <div className="flex flex-col gap-3 mt-5 text-sm font-semibold">
        {links.map((link) => {
          return (
            <span
              className={`cursor-pointer blackTextOrangeHover ${
                dottedLine ? "border-b border-b-gray-400 pb-1 border-dashed w-56" : ""
              }`}
              key={link.text}
              onClick={() => router.push(link.url)}
            >
              {link.text}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default BottomBorder;
