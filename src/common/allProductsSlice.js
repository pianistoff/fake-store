import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllProducts = createAsyncThunk(
    'allProducts/fetchAllProducts',
    async () =>
        fetch('https://fakestoreapi.com/products').then((res) => res.json())
);

export const allProductsSlice = createSlice({
    name: 'allProducts',
    initialState: { status: null, data: [] },
    extraReducers: {
        [fetchAllProducts.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchAllProducts.fulfilled]: (state, { payload }) => {
            state.data = payload;
            state.status = 'success';
        },
        [fetchAllProducts.rejected]: (state) => {
            state.status = 'failed';
        },
    },
});

export default allProductsSlice.reducer;

export const selectAllProductsData = (state) => state.allProducts.data;
export const selectAllProductsStatus = (state) => state.allProducts.status;
