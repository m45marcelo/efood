import { configureStore } from "@reduxjs/toolkit";
import { carrinhoReducer } from "./slices/carrinhoSlice";
import { restaurantsApi } from "./api/restaurantsApi";

export const store = configureStore({
    reducer: {
        carrinho: carrinhoReducer,
        [restaurantsApi.reducerPath]: restaurantsApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(restaurantsApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
