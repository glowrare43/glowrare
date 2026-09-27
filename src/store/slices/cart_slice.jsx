import { createSlice } from "@reduxjs/toolkit"


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;

            const existingItem = state.items.find(
                (item) => item.id === product.id
            );

            if (existingItem) {
                existingItem.quantity += product.quantity;
            } else {
                state.items.push(product);
            }
        },

        increaseQuantity: (state, action) => {
            const item = state.items.find(
                (item) => item.id === action.payload
            );

            if (item) {
                item.quantity += 1;
            }
        },

        decreaseQuantity: (state, action) => {
            const item = state.items.find(
                (item) => item.id === action.payload
            );

            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },

        removeFromCart: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
        },

        clearCart: (state) => {
            state.items = [];
        },
    }
})

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer