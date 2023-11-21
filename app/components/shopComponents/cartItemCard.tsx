"use client"
import React, { FC, useState, useEffect } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { ImCancelCircle } from "react-icons/im";

import { decrease, increase, cartRemoved } from "@/redux/features/cartSlice";
import { useDispatch } from "react-redux";
import Image from "next/image";

type Props = { cartItem: ICartType };
const CartItemCard: FC<Props> = ({ cartItem }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(cartItem.priceOptions?.price);

  return (
    <div className="w-11/12 relative flex items-center justify-between">
      <div className="flex">
        <Image
          src={cartItem.imgUrl}
          alt="item Image"
          className="w-[10%] sm:w-[35%]"
          width={150}
          height={150}
        />
        <div className="flex flex-col ml-5 font-semibold">
          <span className="sm:text-sm">{cartItem.productName}</span>
          <span className=" font-medium text-xs">{cartItem.marketSelling}</span>
          <span className="font-semibold text-xs">
            {cartItem.priceOptions?.price}
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="flex absolute top-0 right-1">
          <button
            className="text-3xl sm:text-lg font-bold self-end"
            onClick={() => {
              dispatch(cartRemoved(cartItem._id));
            }}
          >
            <ImCancelCircle className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="self-end flex absolute bottom-0">
          <button
            className="flex h-8 w-8 sm:h-6 sm:w-6 rounded-full items-center justify-center bg-[#f5ab1e]"
            onClick={() => {
              dispatch(decrease(cartItem._id));
            }}
          >
            <AiOutlineMinus color="#000000" size={20} />
          </button>
          <span className="p-3 pb-3.5 sm:pb-0 sm:text-sm font-bold text-center text-xl leading-[0rem] sm:leading-[0] ">
            {cartItem.quantityToBuy}
          </span>
          <button
            className="flex  h-8 w-8 sm:h-6 sm:w-6 rounded-full items-center justify-center bg-[#f5ab1e]"
            onClick={() => {
              dispatch(increase(cartItem._id));
            }}
          >
            <GoPlus color="#000000" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
