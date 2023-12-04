import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    initialState: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    name: "cartSlice",
    reducers: {
        addToCart: (state, action) => {
            const findProduct = state.find((product) => product.id === action.payload.id);
            if (findProduct) {
                findProduct.quantity++;
            } else {
                const productClone = { ...action.payload, quantity: 1 };
                state.push(productClone);
            }
            window.localStorage.setItem("cart", JSON.stringify(state));
        },
        increaseQuantity: (state, action) => {
            const findProduct = state.find((product) => product.id === action.payload.id);
            findProduct && findProduct.quantity++;
            localStorage.removeItem("cart");
            localStorage.setItem("cart", JSON.stringify(state));
        },
        decreaseQuantity: (state, action) => {
            const findProduct = state.find((product) => product.id === action.payload.id);
            if (findProduct.quantity >= 1) {
                findProduct.quantity--;
                localStorage.removeItem("cart");
                localStorage.setItem("cart", JSON.stringify(state));
            }
        },
        deleteItem: (state, action) => {
            localStorage.removeItem("cart");
            state = state.filter((product) => product.id !== action.payload.id);
            localStorage.setItem("cart", JSON.stringify(state));
            return state;
        },
        clear: (_state, _action) => {
            localStorage.clear();
            return [];
        }
    }
});

export const { addToCart, increaseQuantity, decreaseQuantity, deleteItem, clear } = cartSlice.actions;
export default cartSlice.reducer;