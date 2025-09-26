import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Prato } from "../../types";

interface CarrinhoState{
    dishe: Prato[];
}

const initialState: CarrinhoState = {
    dishe: [],
} 

const carrinhoSlice = createSlice({
    name: "carrinho",
    initialState,
    reducers: {
        addToCart: (state, action:PayloadAction<Prato | null>) => {
            if(!action.payload){
                return;
            }
            state.dishe.push(action.payload);
            
        },
        deleteItemCart: (state, acition: PayloadAction<number>) => {
            const newState: Prato[] = state.dishe.filter(dishes => dishes.id !== acition.payload)
            state.dishe = newState;
        }
    }
})

export const { addToCart, deleteItemCart } = carrinhoSlice.actions;
export const carrinhoReducer = carrinhoSlice.reducer;