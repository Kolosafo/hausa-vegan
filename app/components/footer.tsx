"use client";
import Image from "next/image";
import React from "react";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

import BottomBorder from "./bottomBorder";
import { aboutUsLinks, accountLinks, categoryLinks } from "@/utils/constants";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  return (
    <>
      <div className="px-20 flex flex-col fullCenter bg-[#faf8ed] pt-10">
        <div className="flex py-5 items-center gap-24 pl-24">
          <div className="flex flex-col gap-2 basis-[30%]">
            <Image
              src={"/logo.png"}
              alt="logo"
              width={70}
              height={70}
              className=""
            />
            <span className="leading-7 text-sm">
              Lorem ipsum iasds simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry&apos;s
              standard dummy text ever since the
            </span>
          </div>
          <div className="flex justify-center gap-2 items-center">
            <IoLocation size={50} color="orange" />
            <div className="flex flex-col gap-1">
              <span className="orangeText text-lg font-semibold">Address</span>
              <span className="leading-4">38 block street arean licard</span>
              <span>hamonia road sydney, australia</span>
            </div>
          </div>
          <div className="flex justify-center gap-5 items-center">
            <FaPhoneAlt size={25} color="orange" />
            <div className="gap-2 flex flex-col">
              <span className="text-lg font-semibold orangeText">
                Get in touch
              </span>
              <span>(+800) 1234 5678 90 </span>
              <span>support@demo.com</span>
            </div>
          </div>
        </div>
        <hr className="w-full my-14" />
        <div className="flex justify-start items-start w-full pl-24 gap-32 pb-20">
          <BottomBorder dottedLine links={categoryLinks} title="Categories" />
          <BottomBorder dottedLine links={aboutUsLinks} title="Reach out" />
          <BottomBorder dottedLine links={accountLinks} title="My account" />
        </div>
      </div>
      <div className="bg-[#f5ab1e] w-full p-10 flex justify-around items-center h-14">
        <span className="text-sm text-white">
          Copyright © 2023 Hausa Vegan all rights reserved by Kolosafo
        </span>
        <div className="flex gap-2">
          <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center cursor-pointer">
            <FaWhatsapp color="orange" size={20} />
          </div>
          <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center cursor-pointer">
            <FaTwitter color="orange" size={20} />
          </div>
          <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center cursor-pointer">
            <AiFillInstagram color="orange" size={20} />
          </div>
          <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center cursor-pointer">
            <FaTiktok color="orange" size={20} />
          </div>
        </div>
        <Image
          src={"/logo.png"}
          alt="logo"
          width={45}
          height={40}
          className="cursor-pointer border-[1px] border-black rounded-full"
          onClick={() => router.push("/")}
        />
      </div>
    </>
  );
};

export default Footer;
