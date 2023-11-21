import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useAppSelector } from "@/redux/store";
// import { saveAddress } from "../services/userService";

interface AddressModalProps {
  isOpen: boolean;
  onClose: () => void;
  address: string;
  setAddress: (address: string) => void;
}

function AddressModal({
  isOpen,
  onClose,
  address,
  setAddress,
}: AddressModalProps) {
  const [title, setTitle] = useState("");
  function handleAddressChange(e: React.ChangeEvent<HTMLInputElement>) {
    setAddress(e.target.value);
  }

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }
  // const { user } = useAppSelector((store) => store.user);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Do something with the address, such as sending it to a server
    const name = address;
    // const userId = user?._id;
    try {
      // await saveAddress({ title, name, userId });
      alert("Address saved succesffuly");
      onClose();
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto"
        onClose={onClose}
      >
        <div className="min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />

          <Dialog.Panel className="w-full max-w-md transform overflow-hidden align-middle p-8 bg-white rounded-2xl text-left shadow-xl transition-all ">
            <Dialog.Title as="h3" className="text-2xl font-bold mb-4">
              Choose Address
            </Dialog.Title>

            <form onSubmit={handleSubmit}>
              {/* <label className="block mb-2" htmlFor="address">
                Address:
              </label> */}
              <input
                className="w-full border py-2 px-3 mb-4"
                type="text"
                id="address"
                name="address"
                required
                placeholder="Add a new address"
                value={address}
                onChange={handleAddressChange}
              />

              <label className="block mb-2" htmlFor="address">
                Title:
              </label>
              <input
                className="w-full border py-2 px-3 mb-4"
                type="text"
                id="title"
                name="title"
                required
                placeholder="e.g Home"
                value={title}
                onChange={handleTitleChange}
              />

              <div className="flex justify-end">
                <button
                  className="mr-4 py-2 px-4 bg-gray-500 text-white rounded-lg"
                  type="button"
                  onClick={onClose}
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

export default AddressModal;
