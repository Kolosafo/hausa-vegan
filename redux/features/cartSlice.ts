import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type QuantityChangeType = {
  id: string;
  price: number;
};
interface StoreProps {
  _id: string;
}

const initailState: ICartProvider = {
  cartItems: [],
  loading: false,
  amount: 0,
  total: 0,
  storeId: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initailState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    addItems: (state, action: PayloadAction<ICartType>) => {
      const itemsToAdd = action.payload;
      //CHECK IF ITEM ALREADY EXISTS
      const cartItem = state.cartItems.find(
        (item) => item._id === itemsToAdd._id
      );
      cartItem
        ? ((cartItem.quantityToBuy = cartItem.quantityToBuy + 1),
          (cartItem.priceOptions.price = itemsToAdd.priceOptions.price))
        : ((state.cartItems = [...state.cartItems, itemsToAdd]),
          (state.amount += 1));
    },

    removeItem: (state, { payload }) => {
      const itemId = payload;
      state.cartItems = state.cartItems.filter((item) => item._id !== itemId);
    },

    increase: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const cartItem = state.cartItems.find((item) => item._id === id);
      cartItem ? (cartItem.quantityToBuy = cartItem.quantityToBuy + 1) : null;
    },

    setSelectedStoreId: (state, action: PayloadAction<string>) => {
      const selectedStoreId = action.payload;
      return {
        ...state,
        storeId: selectedStoreId,
      };
    },

    decrease: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const cartItemIndex = state.cartItems.findIndex(
        (item) => item._id === id
      );

      if (cartItemIndex >= 0) {
        const cartItem = state.cartItems[cartItemIndex];

        if (cartItem.quantityToBuy > 1) {
          cartItem.quantityToBuy -= 1;
        } else {
          state.cartItems.splice(cartItemIndex, 1);
          state.amount -= 1;
        }
      }
    },

    cartRemoved: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const itemToRemove = state.cartItems.find((item) => item._id === id);
      if (!itemToRemove) {
        console.log("NO ITEM FOUND");
        return;
      }
      const updatedItems = state.cartItems.filter((item) => item._id !== id);
      return {
        ...state,
        cartItems: updatedItems,
        amount: state.amount - 1,
      };
    },
  },
});

export const {
  cartRemoved,
  clearCart,
  addItems,
  decrease,
  increase,
  setSelectedStoreId,
} = cartSlice.actions;
export default cartSlice.reducer;

export const getQuantityInCart = createSelector(
  (state: RootState) => state.cart.cartItems,
  (items) => items.reduce((total, item) => (total += item.quantityToBuy), 0)
);

export const getBasketTotal = (state: RootState) =>
  state.cart.cartItems.reduce(
    (total, item) => total + item.priceOptions.price * item.quantityToBuy,
    0
  );

export const loadCartItems = (state: RootState) => state.cart.cartItems;

