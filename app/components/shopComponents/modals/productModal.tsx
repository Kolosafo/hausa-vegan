import { useState, FC, SyntheticEvent, Fragment } from "react";
import { ImCancelCircle } from "react-icons/im";
import { useDispatch } from "react-redux";
import { addItems } from "@/redux/features/cartSlice";
import { AiOutlineMinus } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { RadioGroup } from "@headlessui/react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
  onBackdropClick: () => void;
  product: IProduct;
  market?: string;
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const ProductModal: FC<Props> = ({
  onBackdropClick,
  product,
  market,
  showModal,
}) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(
    product.priceOptions ? product.priceOptions[0].price : ""
  );
  const [priceOptions, setPriceOptions] = useState(product.priceOptions);
  const [priceOption, setPriceOption] = useState({ price: "", option: "" });

  const handleAddQuantity = () =>
    setAmount((amount: number) => {
      if(product.priceOptions){
      amount + product.priceOptions[0].price;
    }
    });
  const handleReduceQuantity = () =>
    setAmount((amount: number) =>
{      if(product.priceOptions){
        amount !== product.priceOptions[0].price
        ? amount - product.priceOptions[0].price
        : product.priceOptions[0].price
      }}
     
    );

  return (
    <motion.div
      transition={{
        duration: 0.4,
      }}
      initial={{ x: 1500 }}
      animate={{
        x: showModal ? 0 : 1500,
      }}
      className="justify-end no-scrollbar items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none font-Poppins"
    >
      <div className=" p-7 no-scrollbar sm:p-10 border-[1px] border-black relative w-auto my-6 h-[100vh] overflow-y-scroll max-w-4xl bg-gray-300">
        <div className="flex flex-col justify-around sm:justify-start sm:mx-0 h-full p-10 pb-0 relative">
          <ImCancelCircle
            size={25}
            style={{
              position: "absolute",
              top: "20px",
              right: "10px",
              cursor: "pointer",
            }}
            onClick={onBackdropClick}
          />
          <div className="flex basis-3/4 w-full h-full">
            <Image
              src={product.imgUrl}
              width={50}
              height={50}
              alt=""
              className="mx-10 sm:mr-4 sm:mx-0 self-center h-[75%] sm:h-auto"
              style={{ width: "50%" }}
            />
            <div className="flex flex-col justify-around w-full h-full">
              <div className="flex flex-col">
                <span className="text-2xl sm:text-lg font-bold tracking-tight">
                  {product.productName}
                </span>
                <span className="text-lg sm:text-sm">
                  {product.description}
                </span>
                <span className="text-sm text-gray-600 ">{market}</span>
              </div>
              <div className="flex flex-col mt-5">
                <span className="text-sm sm:text-xs font-semibold">
                  Price Option(s)
                </span>
                <div className="flex mt-2">
                  {/* {priceOptions.map((item, id) => (
                  <div
                    key={id}
                    className="baseBgGreen sm:p-1 sm:px-2 p-2 px-4 flex flex-col text-white basis-[20%] rounded-md mr-5 cursor-pointer whitespace-nowrap"
                  >
                    <span className="text-lg sm:text-sm font-semibold">
                      {item.price}
                    </span>
                    <span className="sm:text-sm">{item.option}</span>
                  </div>
                ))} */}
                  <RadioGroup
                    value={priceOption}
                    onChange={setPriceOption}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      {" "}
                      Select option{" "}
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {priceOptions?.map((price, index) => (
                        <RadioGroup.Option
                          key={index}
                          value={price}
                          className={({ active }) =>
                            classNames(
                              price.price
                                ? "cursor-pointer baseBgGreen text-gray-900 shadow-sm"
                                : "cursor-not-allowed text-gray-200",
                              active ? "ring-2 ring-gray-400 bg-green-700" : "",
                              "group relative p-6 bg-yellow-300 text-gray-700 flex  w-auto justify-center rounded-md border  text-sm font-medium  hover:bg-yellow-400 focus:outline-none sm:flex-1 sm:py-6"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label>
                                <div className="flex flex-col">
                                  <div className="text-lg sm:text-sm font-semibold">
                                    {price.price}
                                  </div>
                                  <div className="sm:text-sm">
                                    {price.option}
                                  </div>
                                </div>
                              </RadioGroup.Label>
                              {price.price ? (
                                <span
                                  className={classNames(
                                    active ? "border" : "border-4",
                                    checked
                                      ? "border-yellow-500"
                                      : "border-transparent",
                                    "pointer-events-none absolute -inset-px rounded-md"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex flex-col mr-40 my-5">
                  <span className="text-xl font-bold sm:text-sm">
                    Price: N{amount}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-1.5 border-gray-500 w-full self-center" />
          <div
            className="flex sm:flex-col sm:items-center pl-8 justify-evenly"
            style={{ marginBottom: "-70px" }}
          >
            <div className="flex flex-col sm:w-full">
              <span className="text-md sm:ml-[-2rem] sm:text-lg font-semibold my-2">
                Quantity
              </span>
              <div className="sm:flex sm:ml-[-2rem]">
                <button
                  className="p-2 sm:p-1 sm:text-sm rounded-lg bg-[#b3d651] font-normal text-md"
                  onClick={handleReduceQuantity}
                >
                  <AiOutlineMinus size={20} />
                </button>
                <span className="text-md sm:text-sm font-bold mx-5 sm:mx-1">
                  {product.priceOptions ? amount / product.priceOptions[0].price : amount}
                </span>
                <button
                  className="p-2 rounded-lg sm:p-1 sm:text-sm sm:font-semibold bg-[#b3d651] font-extrabold text-xl"
                  onClick={handleAddQuantity}
                >
                  <GoPlus size={20} />
                </button>
              </div>
            </div>
            <div className="basis-[70%] items-end flex flex-col sm:w-full sm:items-start">
              <span className="text-md sm:text-lg font-semibold mb-4 mt-2 sm:mb-1 self-start">
                Notes
              </span>
              <textarea
                name="add_info"
                id="add_info"
                cols={20}
                rows={10}
                placeholder="Special Instructions..."
                className="border-2 border-gray-800 h-[30%] sm:h-[15%] p-3 sm:mb-2 mb-10 w-full"
              ></textarea>
              <button
                className="rounded-lg bg-[#fbc948] w-[50%] p-3 py-5 sm:p-1 sm:text-lg whitespace-nowrap text-md sm:font-semibold font-bold self-center baseTextGreen"
                onClick={() => {
                  dispatch(
                    addItems({
                      _id: product._id,
                      imgUrl: product.imgUrl,
                      productName: product.productName,
                      priceOptions: {
                        price: priceOptions ?  priceOptions[0].price : 0,
                        option: priceOptions ? priceOptions[0].option : 0,
                      },
                      perType: product.perType,
                      description: product.description
                        ? product.description
                        : "",
                      quantityToBuy: product.priceOptions ? amount / product.priceOptions[0].price : amount,
                      category: product.category,
                      price: product.price,
                      discount: product.discount
                    })
                  );
                  onBackdropClick();
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
          {/* <span>{name}</span>
        <span>{price}</span>
        <span>{image}</span>
        <span>{description}</span> */}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductModal;
