import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "./storeConfiguration";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

type AllProductsState = {
  status: "loading" | "success" | "failed" | null;
  data: Product[];
};

const initialState: AllProductsState = { status: null, data: [] };

export const fetchAllProducts = createAsyncThunk(
  "allProducts/fetchAllProducts",
  async () =>
    fetch("https://fakestoreapi.com/products").then((res) => res.json())
);

export const allProductsSlice = createSlice({
  name: "allProducts",
  initialState,
  reducers: {
    setAllProductsLoading: (state) => {
      state.status = "loading";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "success";
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default allProductsSlice.reducer;

export const selectAllProductsData = (state: RootState) =>
  state.allProducts.data;
export const selectAllProductsStatus = (state: RootState) =>
  state.allProducts.status;
