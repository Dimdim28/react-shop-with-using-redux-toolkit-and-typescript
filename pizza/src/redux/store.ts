import { useDispatch } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import cart from "./cart/slice";
import filter from "./filter/slice";
import pizza from "./pizzas/slice";

export const store = configureStore({
  reducer: { filter, cart, pizza },
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>