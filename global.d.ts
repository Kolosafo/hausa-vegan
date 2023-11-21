interface IProduct {
  _id: string;
  productName: string;
  description: string;
  perType: string;
  priceOptions?: PriceOPtions[];
  imgUrl: string;
  category: string;
  amountAvailable?: number | string;
  marketSelling?: string;
  quantityToBuy: number;
  price: string;
  discount: string;
}

interface ICartType {
  _id: string;
  imgUrl: string;
  productName: string;
  priceOptions: PriceOPtions;
  description?: string;
  category: string;
  perType: string;
  // amountAvailable?: number;
  marketSelling?: string;
  quantityToBuy: number;
  price: string;
  discount: string;
}

interface ICartProvider {
  cartItems: ICartType[]; // THIS SHOULD BE CHANGED TO CART TYPE
  amount: number;
  total: number;
  loading: boolean;
  storeId: string;
}

interface User {
  id: string;
  displayName: string;
  photoUrl: string;
  email: string;
}
interface IUser {
  user: User | null;
  isLogged: boolean;
  loading: boolean;
}

interface IPost {
  id: string;
  title: string;
  content: string;
  coverImg: string;
  excerpt: string;
  slug: string;
  status: string;
}
