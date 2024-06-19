import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    products: [],
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
    },
});

export const { test1 } = dashboardSlice.actions;

// selector
export const getProducts = (state: RootState) => state.dashboard.products;

export default dashboardSlice.reducer;



