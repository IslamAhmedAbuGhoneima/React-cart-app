import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk("productsSlice/fetchProducts",
    async () => {
        let respose = await fetch("https://fakestoreapi.com/products");
        let data = await respose.json();
        return data;
    }
);
const productsSlice = createSlice({
    initialState: [],
    name: "productsSlice",
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (_state, action) => {
            return action.payload;
        })
    }
});

export default productsSlice.reducer;