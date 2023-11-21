"use client";
import { FC, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addItems } from "@/redux/features/cartSlice";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import ProductModal from "./modals/productModal";
import AddToCartButton from "./addToCartBtn";
import Image from "next/image";
import { AppDispatch } from "@/redux/store";
import { Item, MarketCategory, MarketCategoryItem } from "@/utils/types";

const MarketCategories: FC<MarketCategory> = ({
  categoryName,
  categoryItems,
  market,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState<MarketCategoryItem | null>(null);

  const toggleModal = () => {
    setModalOpen((wasModalVisible) => !wasModalVisible);
  };

  const handleAddToCart = (item: Item) => {
    // setCartItems([...cartItems, item]);
    dispatch(addItems(item));
  };

  const productContainer = useRef<HTMLDivElement>(null);
  const scroll = (scrollOffset: number) => {
    productContainer.current
      ? (productContainer.current.scrollLeft += scrollOffset)
      : null;
  };

  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="px-10">
      <div className="flex justify-between items-center my-10">
        <span className="text-2xl font-bold tracking-tight sm:ml-4 sm:text-xl">
          {categoryName}
        </span>
        <div className="flex">
          <BsFillArrowLeftSquareFill
            size={30}
            className="cursor-pointer"
            onClick={() => scroll(-600)}
          />
          <BsFillArrowRightSquareFill
            size={30}
            className="mr-20 ml-5 sm:mr-5 cursor-pointer"
            onClick={() => scroll(600)}
          />
        </div>
      </div>
      <div
        ref={productContainer}
        className=" sm:mx-0 overflow-x-scroll w-full relative p-10 scroll-smooth no-scrollbar"
      >
        <div className="flex w-full mr-36">
          {categoryItems.length > 0 ? (
            categoryItems.map((item, id) => (
              <div
                key={id}
                className="flex justify-between relative flex-col w-44 shrink-0 mr-5 cursor-pointer rounded-xl"
                onClick={() => {
                  setCartItems({
                    _id: item._id,
                    productName: item.productName,
                    description: item.description,
                    priceOptions: [
                      { price: parseInt(item.price), option: "price" },
                      { price: parseInt(item.discount), option: "discount" },
                    ],
                    perType: item.perType,
                    imgUrl: item.imgUrl,
                    numberInStock: item.amountAvailable
                      ? parseInt(item.amountAvailable.toString())
                      : 10,
                    price: "",
                    discount: "",
                  });
                  toggleModal();
                }}
              >
                <div className="">
                  <AddToCartButton
                    item={{
                      _id: item._id,
                      imgUrl: item.imgUrl,
                      productName: item.productName,
                      priceOptions: [
                        {
                          price: parseInt(item.price),
                          option: "price",
                        },
                      ],
                      perType: item.perType,
                      description: item.description ? item.description : "",
                      quantityToBuy: 1,
                      price: "",
                      category: "",
                      discount: "",
                    }}
                    onAddToCart={handleAddToCart}
                  />
                </div>
                <Image
                  src={item.imgUrl}
                  alt="item name"
                  width={50}
                  height={50}
                  className="block w-full"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-semibold">N{item.price}</span>
                  <div>
                    <span className="text-sm text-gray-700">
                      {item.productName}
                    </span>
                    <span className="w-4/5 block text-xs text-gray-400">
                      price
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <span>No products</span>
          )}
        </div>
        {cartItems && isModalOpen && (
          <ProductModal
            market={market}
            showModal={isModalOpen}
            setShowModal={setModalOpen}
            onBackdropClick={toggleModal}
            product={{
              _id: cartItems._id,
              productName: cartItems.productName,
              imgUrl: cartItems.imgUrl,
              description: cartItems.description ? cartItems.description : "",
              priceOptions: cartItems.priceOptions,
              perType: cartItems.perType,
              quantityToBuy: 0,
              category: "vegetables",
              price: cartItems.priceOptions[0].price.toString(),
              discount: "",
            }}
          />
        )}
      </div>
      <hr className="border-1 border-gray-400 w-full self-center my-10 hidden sm:block" />
    </div>
  );
};

export default MarketCategories;
