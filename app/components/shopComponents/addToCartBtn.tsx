import { FiPlus } from "react-icons/fi";

type Props = {
  onAddToCart: (item: {
    _id: string;
    imgUrl: string;
    productName: string;
    priceOptions: { price: number; option: string };
    perType: string;
    description?: string;
    quantityToBuy: number;
    discount: string;
    price: string;
    category: string;
  }) => void;
  item: {
    _id: string;
    imgUrl: string;
    productName: string;
    priceOptions: [{ price: number; option: string }];
    perType: string;
    description?: string;
    quantityToBuy: number;
    discount: string;
    price: string;
    category: string;
  };
};

function AddToCartButton({ onAddToCart, item }: Props) {
  const handleClick = () => {
    const cartItem = {
      _id: item._id,
      imgUrl: item.imgUrl,
      productName: item.productName,
      priceOptions: {
        price: item.priceOptions[0].price,
        option: item.priceOptions[0].option,
      },
      perType: item.perType,
      description: item.description ? item.description : "",
      quantityToBuy: 1,
      discount: "",
    category: "",
    price: ""
    };
    onAddToCart(cartItem);
  };

  return (
    <div className="absolute top-0 right-0 flex flex-row ">
      <button
        className="flex py-3 px-5 bg-green-600 hover:bg-green-700 text-white rounded-full w-auto items-center justify-center focus:outline-none"
        onClick={handleClick}
      >
        <FiPlus size={24} />
        <span className="ml-2 text-md font-medium">Add</span>
      </button>
    </div>
  );
}

export default AddToCartButton;
