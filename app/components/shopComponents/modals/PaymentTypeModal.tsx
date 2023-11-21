import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface PaymentTypeProps {
  isPayOpen: boolean;
  onPayClose: () => void;
  paymentType: string;
  setPaymentType: (paymentType: string) => void;
}

function PaymentTypeModal({
  isPayOpen,
  onPayClose,
  paymentType,
  setPaymentType,
}: PaymentTypeProps) {
  function handlePaymentChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPaymentType(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Do something with the payment type, such as sending it to a server
    onPayClose();
  }

  return (
    <Transition show={isPayOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto"
        onClose={onPayClose}
      >
        <div className="min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />

          <Dialog.Panel className="flex flex-col w-full max-w-md transform overflow-hidden align-middle p-8 bg-white rounded-2xl text-left shadow-xl transition-all ">
            <Dialog.Title as="h3" className="text-2xl font-bold mb-4">
              Payment method
            </Dialog.Title>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-2 mb-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-blue-600"
                    name="paymentType"
                    value="Card"
                    checked={paymentType === "Card"}
                    onChange={handlePaymentChange}
                  />
                  <span className="ml-2">Card</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-blue-600"
                    name="paymentType"
                    value="Pay on delivery"
                    checked={paymentType === "Pay on delivery"}
                    onChange={handlePaymentChange}
                  />
                  <span className="ml-2">Pay on delivery</span>
                </label>
              </div>

              <div className="flex justify-end">
                <button
                  className="mr-4 py-2 px-4 bg-gray-500 text-white rounded-lg"
                  type="button"
                  onClick={onPayClose}
                >
                  Cancel
                </button>
                <button
                  className="py-2 px-4 bg-blue-500 text-white rounded-lg"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
}

export default PaymentTypeModal;
