// BASE REDUX
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import userSlice from "./features/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
