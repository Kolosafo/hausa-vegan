"use client"
import CartItemCard from "../../components/shopComponents/cartItemCard";
import { useAppSelector } from "@/redux/store";
import { getBasketTotal, loadCartItems } from "@/redux/features/cartSlice";
import "./CustomScroll.css";
import Link from "next/link";
const CartPage = () => {
  const total = useAppSelector(getBasketTotal);
  const cartItems = useAppSelector(loadCartItems);


  const customScrollBar = {
    height: "500px",
  };

  return (
    <div className="flex justify-center items-center text-xl h-screen">
      {cartItems.length > 0 ? (
        <div className="w-2/3 sm:w-[80%] flex flex-col h-auto sm:mt-20 mt-40">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="block text-2xl tracking-tight sm:text-2xl font-bold mb-2">
                Cart
              </span>
              <span className="text-sm sm:w-4/6">
                Confirm your order items and add more
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-sm">Cart Total</span>
              <span className="text-4xl sm:text-xl font-bold self-end text-orange-600">
                {total} <span className="font-semibold text-xl">NGN</span>
              </span>{" "}
            </div>
          </div>
          <hr className="border-1 border-gray-200 w-full self-center my-7" />

          <div
            style={customScrollBar}
            className="scroll-change w-full border-1 border-gray-500 rounded h-[70%] overflow-y-scroll"
          >
            {cartItems.map((items, id) => (
              <div key={id}>
                <CartItemCard cartItem={items} />
                <hr className="border-1 border-gray-200 w-11/12 self-center my-10" />
              </div>
            ))}
          </div>
          <div className="w-full mb-14 mt-8 flex justify-between sm:justify-around">
            <Link
              href={"/shop/products"}
              className="px-10 sm:px-3 sm:py-4 text-center sm:text-sm bg-[#0d4949] hover:bg-[#265454] hover:transition-all hover:delay-75 py-3 whitespace-nowrap rounded-xl basis-1/5 text-xl font-semibold text-gray-100"
            >
              Continue Shopping
            </Link>
            <Link
              href={"/shop/checkout"}
              className="px-10 sm:px-3 sm:py-4 sm:text-sm py-3 bg-[#dbdbc2] hover:bg-[#cbcbb5] hover:transition-all hover:delay-75 rounded-xl whitespace-nowrap font-semibold text-2xl text-center basis-1/5 text-[#0d4949]"
            >
              Checkout
            </Link>
          </div>
        </div>
      ) : (
        <h1 className="text-2xl sm:text-lg text-center">
          You have not added any item in your cart
          <Link
            href={"/shop/products"}
            className="mx-5 bg-teal-700 text-white p-3 sm:block sm:p-1 rounded"
          >
            Start shopping
          </Link>
        </h1>
      )}
    </div>
  );
};

export default CartPage;
