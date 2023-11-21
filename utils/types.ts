export interface PriceOPtions {
  price: number;
  option: string;
}

export interface MarketCategoryItem {
  _id: string;
  productName: string;
  imgUrl: string;
  priceOptions: PriceOPtions[];
  description?: string;
  perType: string;
  numberInStock: number;
  price: string;
  discount: string;
}

export type Item = {
  _id: string;
  imgUrl: string;
  productName: string;
  priceOptions: { price: number; option: string };
  perType: string;
  description?: string;
  quantityToBuy: number;
  price: string;
  discount: string;
  category: string;
};

export interface MarketCategory {
  _id?: string;
  categoryName: string;
  categoryItems: IProduct[];
  market: string;
}
