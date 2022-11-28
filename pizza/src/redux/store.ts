import { useDispatch } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cartSlice";
import filter from "./slices/filterSlice";
import pizza from "./slices/pizzasSlice";

export const store = configureStore({
  reducer: { filter, cart, pizza },
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>