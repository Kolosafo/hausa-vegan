"use client";
import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getBasketTotal } from "@/redux/features/cartSlice";
import { useAppSelector } from "@/redux/store";
import "../cart/CustomScroll.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-clock/dist/Clock.css";
import { Disclosure } from "@headlessui/react";
import {
  ChevronUpIcon,
  MapPinIcon,
  ClockIcon,
  CalendarIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import AddressModal from "../../components/shopComponents/modals/AddressModal";
import PaymentTypeModal from "../../components/shopComponents/modals/PaymentTypeModal";

interface DateTimePickerProps {
  selectedDate: Date;
  selectedTime: string;
  onChange: (date: Date, time: string) => void;
}

interface Address {
  title: string;
  name: string;
}

const deliveryTimes = [
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "12:00 PM - 1:00 PM",
  "1:00 PM - 2:00 PM",
  "2:00 PM - 3:00 PM",
  "3:00 PM - 4:00 PM",
  "4:00 PM - 5:00 PM",
  "5:00 PM - 6:00 PM",
];

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday"];

const Checkout = (): JSX.Element => {
  const { cartItems } = useAppSelector((store) => store.cart);
  const [deliveryCharge, setDeliveryCharge] = useState(1500);
  const [serviceCharge, setServiceCharge] = useState(500);
  // const [selectedDate, setSelectedDate] = useState(new Date());
  const [address, setAddress] = useState("");
  const [paymentMethod, setpaymentMethod] = useState("");
  const [repeat, setrepeat] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [openPaymentModal, setOpenPaymentModal] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [addresses, setAddresses] = useState<Address[]>([]);

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const total = useAppSelector(getBasketTotal);

  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
  };

  const handleSubmmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const navigate = useRouter();
  // useEffect(() => {
  //   if (!isLogged) {
  //     navigate("/");
  //   }
  // }, [isLogged]);

  return (
    <div className="flex justify-evenly h-screen mb-10 text-teal-800">
      <div className="flex  w-full mt-28">
        {cartItems.length > 0 ? (
          <div className="w-full">
            <div className="flex w-full justify-around lg:flex-row-reverse md:flex-col sm:flex-col">
              <div className="flex flex-col w-full">
                <div className="flex flex-col w-full">
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`w-full flex items-center justify-between px-4 py-10 border-b border-gray-300 focus:outline-none`}
                        >
                          <span className="font-medium flex flex-row text-gray-700">
                            <MapPinIcon className="w-6 h6 text-green-700 mr-3" />{" "}
                            {address !== "" ? address : "Add delivery address"}
                          </span>
                          <ChevronUpIcon
                            className={`${
                              open ? "transform rotate-180" : ""
                            } h-5 w-5 text-gray-500`}
                          />
                        </Disclosure.Button>
                        {/* {!address && ( */}
                        <Disclosure.Panel className="px-4 py-10 border-b border-gray-300">
                          <div className="mb-6">
                            {!addresses ? (
                              <div
                                className="flex w-full bg-gray-100 text-gray-700 cursor-pointer rounded-md"
                                onClick={() => setOpenModal(true)}
                              >
                                <p className="p-3">Your address</p>
                              </div>
                            ) : (
                              addresses.map((addr, index) => (
                                <label
                                  key={index}
                                  className="flex items-center py-4"
                                >
                                  <input
                                    type="radio"
                                    className="form-radio h-5 w-5 text-blue-600"
                                    name="address"
                                    value={addr.name}
                                    // checked={paymentType === "Pay on delivery"}
                                    onChange={(e) => setAddress(e.target.value)}
                                  />
                                  <div className="flex flex-col">
                                    <span className="ml-4 text-gray-400">
                                      {addr.name}
                                    </span>
                                    <span className="ml-4 text-gray-600 text-sm">
                                      {addr.title}
                                    </span>
                                  </div>
                                </label>
                              ))
                            )}
                            <p
                              className="text-green-600 mt-2 cursor-pointer"
                              onClick={() => setOpenModal(true)}
                            >
                              Add Address
                            </p>
                          </div>
                        </Disclosure.Panel>
                        {/* )} */}
                      </>
                    )}
                  </Disclosure>
                </div>

                <div className="flex flex-col w-full">
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`w-full flex items-center justify-between px-4 py-10 border-b border-gray-300 focus:outline-none`}
                        >
                          <span className="font-medium flex flex-row text-gray-700">
                            <ClockIcon className="w-8 h8 text-green-700 mr-3" />{" "}
                            {selectedDate !== "" && selectedTime !== ""
                              ? `${selectedDate} - ${selectedTime}`
                              : "Delivery time"}
                          </span>
                          <ChevronUpIcon
                            className={`${
                              open ? "transform rotate-180" : ""
                            } h-5 w-5 text-gray-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 py-2 border-b border-gray-300">
                          <div className="flex mb-6 overflow-x-scroll p-5">
                            {daysOfWeek.map((day) => (
                              <div
                                key={day}
                                className={`w-auto flex-shrink-0 flex-grow-0 flex mr-4 cursor-pointer rounded-md text-gray-800 ${
                                  selectedDate === day
                                    ? "bg-white border border-gray-800"
                                    : "bg-gray-100"
                                }`}
                                onClick={() => setSelectedDate(day)}
                              >
                                <p className="p-3">{day}</p>
                              </div>
                            ))}
                          </div>

                          <div className="mb-6">
                            {deliveryTimes.map((time, index) => (
                              <label
                                key={index}
                                className={`flex w-full cursor-pointer rounded-md my-2 text-gray-700 ${
                                  selectedTime === time
                                    ? "bg-white border border-gray-800"
                                    : "bg-gray-100"
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="deliveryTime"
                                  value={time}
                                  checked={selectedTime === time}
                                  onChange={() => setSelectedTime(time)}
                                  className="hidden"
                                />
                                <p className="p-3">{time}</p>
                              </label>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>

                <div className="flex flex-col w-full">
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`w-full flex items-center justify-between px-4 py-10 border-b border-gray-300 focus:outline-none`}
                        >
                          <span className="font-medium flex flex-row text-gray-700">
                            <CreditCardIcon className="w-6 h6 text-green-700 mr-3" />{" "}
                            {paymentMethod !== "" ? paymentMethod : "Payment"}
                          </span>
                          <ChevronUpIcon
                            className={`${
                              open ? "transform rotate-180" : ""
                            } h-5 w-5 text-gray-500`}
                          />
                        </Disclosure.Button>
                        {/* {!address && ( */}
                        <Disclosure.Panel className="px-4 py-10 border-b border-gray-300">
                          <div className="mb-6">
                            {!paymentMethod && (
                              <div
                                className="flex w-full bg-gray-100 text-gray-700 cursor-pointer rounded-md"
                                onClick={() => setOpenPaymentModal(true)}
                              >
                                <p className="p-3">Pay with</p>
                              </div>
                            )}
                          </div>
                        </Disclosure.Panel>
                        {/* )} */}
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </div>

            {/* BUTTONS DIV */}
            <div className="flex w-full justify-around mb-5 mt-10">
              <Link href={"/shop/cart"}>
                <button className="px-20 sm:px-10 sm:py-2 text-lg py-4 bg-[#dbdbc2] text-teal-800 rounded-lg cursor-pointer">
                  Back
                </button>
              </Link>

              <button
                onClick={handleSubmmit}
                className="px-10 sm:px-10 sm:py-2 py-4 text-lg text-white rounded-lg bg-teal-700 hover:bg-teal-800 cursor-pointer"
              >
                Continue
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full h-1/2 flex justify-center items-center">
            <h1 className="text-5xl">
              You haven&apos;t shopped any products,{" "}
              <Link href={"/shop/products"} className="text-orange-600">
                Back To Shop
              </Link>
            </h1>
          </div>
        )}
      </div>
      <AddressModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        address={address}
        setAddress={setAddress}
      />
      <PaymentTypeModal
        isPayOpen={openPaymentModal}
        onPayClose={() => setOpenPaymentModal(false)}
        paymentType={paymentMethod}
        setPaymentType={setpaymentMethod}
      />
    </div>
  );
};

export default Checkout;
