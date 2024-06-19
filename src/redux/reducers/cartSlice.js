import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      state.items.push(product);
    },
  }
});

export const { addToCart } = cartSlice.actions;

// selector
export const getProductsInCart = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
