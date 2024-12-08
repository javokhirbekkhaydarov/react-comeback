import { createSlice } from "@reduxjs/toolkit";

const initialState = []; // Start with an empty cart

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProductIndex = state.findIndex(
                (item) => item.id === action.payload.id
            );
            if (existingProductIndex >= 0) {
                // Update quantity if the product already exists
                state[existingProductIndex].quantity += 1;
            } else {
                // Add new product to the cart
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        },
        updateQuantity: (state, action) => {
            const product = state.find((item) => item.id === action.payload.id);
            if (product) {
                product.quantity = action.payload.quantity;
            }
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
