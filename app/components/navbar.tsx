"use client";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import Image, { ImageLoaderProps } from "next/image";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/features/userSlice";
import { handleSignInWithGoogle } from "@/utils/signInWithGoogle";

export const BackendImgLoader = ({ src }: ImageLoaderProps) => {
  const loaderUrl = `${src}`;
  return loaderUrl;
};
const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { amount } = useAppSelector((store) => store.cart);
  const { isLogged, user } = useAppSelector((store) => store.user);
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 px-48">
      <div className="flex mt-6 justify-between items-center">
        <div
          className="blackText cursor-pointer border-[1px] border-black rounded-full"
          onClick={() => router.push("/")}
        >
          <Image src={"/logo.png"} width={50} height={50} alt="" />
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Search our store"
            className="pl-2 border-[1px] border-[#3333337b] rounded-3xl w-96 h-10"
          />
          <div className="p-3 blackBg flex fullCenter rounded-full cursor-pointer -ml-10">
            <FiSearch color="white" />
          </div>
        </div>
        <div className="flex text-xs fullCenter gap-6">
          {isLogged && user ? (
            <div className="flex fullCenter">
              <Image
                width={25}
                height={25}
                loader={BackendImgLoader}
                src={user.photoUrl}
                alt="profile-image"
                className="rounded-full"
              />
              <div className="flex flex-col ml-2">
                <span className="orangeText font-semibold">
                  {user.displayName.split(" ")[0]}
                </span>
                <span className="text-[0.7rem]">
                  <span
                    onClick={() => dispatch(logout())}
                    className="cursor-pointer blackTextOrangeHover"
                  >
                    Logout
                  </span>{" "}
                </span>
              </div>
            </div>
          ) : (
            <div className="flex fullCenter">
              <FaRegUser size={25} className="mr-1" />
              <div className="flex flex-col">
                <span className="orangeText font-semibold">ACCOUNT</span>
                <span className="text-[0.7rem]">
                  {/* <span className="cursor-pointer blackTextOrangeHover">
                    Register
                  </span>{" "}
                  |{" "} */}
                  <span
                    onClick={() => handleSignInWithGoogle(dispatch)}
                    className="cursor-pointer blackTextOrangeHover"
                  >
                    Login
                  </span>{" "}
                </span>
              </div>
            </div>
          )}

          <div className="relative">
            <IoHeartOutline
              size={35}
              className="blackTextOrangeHover cursor-pointer"
            />
            <span className="absolute -top-0 text-white font-semibold -right-1 orangeBg rounded-full py-[0.15rem] px-[0.3rem]">
              0
            </span>
          </div>
          <div
            className="relative cursor-pointer"
            onClick={() => router.push("/shop/cart")}
          >
            <IoBagHandleOutline
              size={35}
              className="blackTextOrangeHover cursor-pointer"
            />
            <span className="absolute -top-0 text-white font-semibold -right-1 orangeBg rounded-full py-[0.15rem] px-[0.3rem]">
              {amount}
            </span>
          </div>
        </div>
      </div>
      <hr className="border-[.5px] border-[#0000003a] w-full self-center" />
      <div className="flex justify-between items-center">
        <div className="flex text-sm gap-8">
          <div
            onClick={() => router.push("/")}
            className="blackTextOrangeHover cursor-pointer flex fullCenter pr-4 border-r-2"
          >
            <span>Home</span>
            <IoIosArrowDown />
          </div>

          <div
            onClick={() => router.push("/shop/products")}
            className="blackTextOrangeHover cursor-pointer flex fullCenter pr-4 border-r-2"
          >
            <span className="cursor-pointer">Shop</span>
            <IoIosArrowDown />
          </div>

          {/* <div className="blackTextOrangeHover cursor-pointer flex fullCenter pr-4 border-r-2">
            <span>Collection</span>
            <IoIosArrowDown />
          </div>

          <div className="blackTextOrangeHover cursor-pointer flex fullCenter pr-4 border-r-2">
            <span>Pages</span>
            <IoIosArrowDown />
          </div> */}

          <div
            onClick={() => router.push("/blog")}
            className="blackTextOrangeHover cursor-pointer flex fullCenter"
          >
            <span>Blogs</span>
            <IoIosArrowDown />
          </div>
        </div>
        <div className="flex cursor-pointer">
          <TfiHeadphoneAlt className="mr-3" size={30} />
          <div className="flex flex-col text-sm">
            <span className="orangeText">Hotline:</span>
            <span className="opacity-80 text-xs">0123 456 789</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
