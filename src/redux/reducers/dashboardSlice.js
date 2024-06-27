import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { decrement, resetValue } from "./counterSlice";

const initialState = {
  products: [],
  value: 0,
};

export const fetchProducts = createAsyncThunk(
  "users/fetchProducts",
  async (userId, thunkAPI) => {
    const response = await fetch(
        `https://fakestoreapi.com/products`
    );

    const res = await response.json();
    return res;
  } 
);

export const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
      test1: (state) => {
        state.value += 1;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.products= [...action.payload];
      });
      // builder.addCase(resetValue, (state, action) => {
      //   state.value = -2;
      // });
      // builder.addCase(decrement, (state, action) => {
      //   state.value += 2;
      // });
    },
});

export const { test1 } = dashboardSlice.actions;

// selector
export const getProducts = (state: RootState) => state.dashboard.products;

export default dashboardSlice.reducer;



