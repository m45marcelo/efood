import { configureStore } from "@reduxjs/toolkit";
import { carrinhoReducer } from "./slices/carrinhoSlice";

export const store = configureStore({
    reducer: carrinhoReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
